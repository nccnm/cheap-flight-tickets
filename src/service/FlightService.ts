import { Order } from './../model/Order';
import { SearchFlightCriteria } from "../model/SearchFlightCriteria";
import { FlightDetail } from "../model/FlightDetail";
import { fromToOptions } from "../data/fromToOptions";
import axios from "axios";

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
}
