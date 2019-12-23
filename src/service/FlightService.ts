
import { Traveller } from './../model/Traverller';
import { Order } from './../model/Order';
import { SearchFlightCriteria } from "../model/SearchFlightCriteria";
import { OrderResult, PaymentInfoResult, ConfirmationInfoResult, TravellerResult, OrderValidationResult } from "../model/OrderValidationResult"
import { FlightDetail } from "../model/FlightDetail";
import { fromToOptions } from "../data/fromToOptions";
import axios from "axios";
import validate from "validate.js";
import { PaymentInfo } from '../model/PaymentInfo';
import { ConfirmationInfo } from '../model/ConfirmationInfo';

const API_PATH = "https://flyplanapi.azurewebsites.net/api/";

export class FlightService {
    public async search(criteria: SearchFlightCriteria): Promise<FlightDetail[]> {
        let from = fromToOptions.find(f => f.key === criteria.from);
        let to = fromToOptions.find(t => t.key === criteria.to);

        const departText = from ? from.text : "";
        const returnText = to ? to.text : "";

        return axios.post(API_PATH + 'flight', {
            "from": departText,
            "to": returnText,
            "departDate": criteria.departDate ? criteria.departDate.getFullYear() + "-" + (criteria.departDate.getMonth() + 1) + "-" + criteria.departDate.getDate() : null,
            "returnDate": criteria.returnDate ? criteria.returnDate.getFullYear() + "-" + (criteria.returnDate.getMonth() + 1) + "-" + criteria.returnDate.getDate() : null,
            "classType": "Business Class",
            "priceFrom": 0,
            "priceTo": 1000,
            "roundTrip": criteria.roundTrip
        })
            .then(function (response) {
                if (response.data.model.length > 10) {
                    return response.data.model.slice(0, 10);
                }
                return response.data.model || [];
            })
            .catch(function (error) {
                console.error(error);
                return [];
            });
    }

    public async getById(id: string): Promise<FlightDetail> {
        return axios.get(API_PATH + 'flight/' + id)
            .then(function (response) {
                return response.data.model || {};
            })
            .catch(function (error) {
                console.error(error);
                return {};
            });
    }

    public async booking(order: Order): Promise<void> {
        return axios.post(API_PATH + 'booking/', order)
            .then(function (response) {
                return response.data.model || {};
            })
            .catch(function (error) {
                console.error(error);
                return {};
            });
    }

    public validate(order: Order) {
        const validationResult = new OrderValidationResult();

        for (let i = 0; i < order.travellerViewModels.length; i++) {
            const travallerResult = this.validateTraveller(order.travellerViewModels[i]);

            validationResult.result.travellerViewModels.push(travallerResult);
        }

        validationResult.result.paymentViewModel = this.validatePayment(order.paymentViewModel);

        validationResult.result.confirmationInfoViewModel = this.validateConfirmationInfoViewModel(order.confirmationInfoViewModel);

        return validationResult;
    }

    private validateTraveller(traveller: Traveller) {
        var constraints = {
            firstName: {
                presence: { allowEmpty: false },
            },
            lastName: {
                presence: { allowEmpty: false },
            },
            dateOfBirth: {
                presence: { allowEmpty: false },
            },
            gender: {
                presence: { allowEmpty: false },
            },
            nationality: {
                presence: { allowEmpty: false },
            },
            pasportId: {
                presence: { allowEmpty: false },
            },
            pasportExpiryDateMonth: {
                presence: { allowEmpty: false, message: () => validate.format("^Expiry month can't be blank", {}) },
            },
            pasportExpiryDateYear: {
                presence: { allowEmpty: false, message: () => validate.format("^Expiry year can't be blank", {}) },
            },
            pasportNoExpiry: {
                presence: { allowEmpty: false },
            }
        };

        return validate(traveller, constraints) as TravellerResult;
    }

    private validatePayment(payment: PaymentInfo) {
        const constraints = {
            creditCardType: {
                presence: { allowEmpty: false },
            },
            cardNumber: {
                presence: true,
                format: {
                    pattern: /^(34|37|4|5[1-5]).*$/,
                    message: function (value, attribute, validatorOptions, attributes, globalOptions) {
                        return validate.format("^%{num} is not a valid credit card number", {
                            num: value
                        });
                    }
                },
                length: function (value, attributes, attributeName, options, constraints) {
                    if (value) {
                        // Visa, Mastercard
                        if ((/^(4|5[1-5]).*$/).test(value)) return { is: 16 };
                    }
                    // Unknown card, don't validate length
                    return false;
                }
            },
            nameOnTheCard: {
                presence: { allowEmpty: false },
            },
            expiryDateInMonth: {
                presence: {
                    allowEmpty: false,
                    message: () => validate.format("^Expiry month can't be blank", {})
                }
            },
            expiryDateInYear: {
                presence: {
                    allowEmpty: false,
                    message: () => validate.format("^Expiry year can't be blank", {})
                }
            },
            cvvCode: {
                presence: { allowEmpty: false },
            },
            countryId: {
                presence: {
                    allowEmpty: false,
                    message: () => validate.format("^Country can't be blank", {})
                },
            },
            billingAddress: {
                presence: { allowEmpty: false },
            },
            city: {
                presence: { allowEmpty: false },
            },
            zipCode: {
                presence: { allowEmpty: false },
            },
        }

        return validate(payment, constraints) as PaymentInfoResult;
    }

    private validateConfirmationInfoViewModel(confirmationInfo: ConfirmationInfo) {
        const constraints = {
            emailAddress: {
                presence: { allowEmpty: false },
                email: true
            },
            phoneNumber: {
                presence: { allowEmpty: false },
            },
            isAcceptedRule: {
                inclusion: {
                    within: [true],
                    message: () => validate.format("^You must accept the rules", {})
                }

            }
        };

        return validate(confirmationInfo, constraints) as ConfirmationInfoResult;
    }
}
