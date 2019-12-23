import React, { useState } from "react";
import { ChoiceGroup, ComboBox, FontSizes, Label, Stack, TextField } from "office-ui-fabric-react";
import { mergeStyles } from "office-ui-fabric-react/lib/Styling";
import { creditCardTypeOptions } from "../../data/creditCardTypeOptions";
import { countryOptions } from "../../data/countryOptions";
import { PaymentInfo } from "../../model/PaymentInfo";
import { PaymentInfoResult } from "../../model/OrderValidationResult";

type PaymentProps = {
    payment: PaymentInfo;
    onChange: (payment: PaymentInfo) => void;
    validation: PaymentInfoResult;
};

export const Payment: React.FunctionComponent<PaymentProps> = ({ payment, onChange, validation }) => {
    const [localPaymentInfo, setPaymentInfo] = useState<PaymentInfo>(payment);
    const handleFormElementValueChange = newItem => {
        setPaymentInfo({
            ...localPaymentInfo,
            ...newItem
        });

        onChange({
            ...localPaymentInfo,
            ...newItem
        });
    };

    return (
        <>
            <Stack
                styles={{
                    root: {
                        borderRadius: "4px",
                        padding: "2px",
                        backgroundColor: "#404156"
                    }
                }}
                horizontalAlign="center"
            >
                <Label
                    styles={{
                        root: {
                            fontSize: FontSizes.large,
                            color: "#FFFFFF"
                        }
                    }}
                >
                    How Would You Like to Pay?
                </Label>
            </Stack>
            <Stack
                styles={{
                    root: {
                        borderRadius: "4px",
                        padding: "24px",
                        backgroundColor: "#FFFFFF"
                    }
                }}
                tokens={{
                    childrenGap: 24
                }}
            >
                <Stack
                    styles={{
                        root: {
                            marginTop: "0px !important"
                        }
                    }}
                >
                    <Stack
                        horizontal
                        styles={{
                            root: {
                                marginTop: "8px !important"
                            }
                        }}
                        tokens={{
                            childrenGap: 16
                        }}
                    >
                        <ChoiceGroup
                            defaultSelectedKey="Master"
                            options={creditCardTypeOptions}
                            required={true}
                            styles={{
                                flexContainer: {
                                    display: "flex"
                                }
                            }}
                            className={mergeStyles({ display: "flex", color: "rgb(50, 49, 48)" })}
                            id="TravelInsurance"
                            // selectedKey={payment.creditCardType}
                            onChange={(event: any, checked) => {
                                handleFormElementValueChange({ creditCardType: checked.key });
                            }}
                        />
                    </Stack>
                    <Stack
                        horizontal
                        styles={{
                            root: {
                                marginTop: "8px !important"
                            }
                        }}
                        tokens={{
                            childrenGap: 16
                        }}
                    >
                        <TextField
                            styles={{
                                root: {
                                    flexBasis: "100%"
                                }
                            }}
                            label="Card Number"
                            value={payment.cardNumber}
                            id="CardNumber"
                            required
                            errorMessage={validation && validation.cardNumber}
                            onChange={(event: any, newValue) => {
                                handleFormElementValueChange({ cardNumber: newValue });
                            }}
                        />
                        <TextField
                            styles={{
                                root: {
                                    flexBasis: "100%"
                                }
                            }}
                            label="Name on the Card"
                            value={payment.nameOnTheCard}
                            id="NameOnTheCard"
                            required
                            errorMessage={validation && validation.nameOnTheCard}
                            onChange={(event: any, newValue) => {
                                handleFormElementValueChange({ nameOnTheCard: newValue });
                            }}
                        />
                        <Stack
                            horizontal
                            verticalAlign="end"
                            styles={{
                                root: {
                                    flexBasis: "100%"
                                }
                            }}
                            tokens={{
                                childrenGap: 16
                            }}
                        >
                            <TextField
                                placeholder="MM"
                                styles={{
                                    root: {
                                        flexBasis: "100%"
                                    }
                                }}
                                label="Expiry Date"
                                value={payment.expiryDateInMonth}
                                id="ExpiryDateInMonth"
                                required
                                errorMessage={validation && validation.expiryDateInMonth}
                                onChange={(event: any, newValue) => {
                                    handleFormElementValueChange({ expiryDateInMonth: newValue });
                                }}
                            />
                            <TextField
                                placeholder="YYYY"
                                styles={{
                                    root: {
                                        flexBasis: "100%"
                                    }
                                }}
                                label="Expiry Year"
                                value={payment.expiryDateInYear}
                                id="ExpiryDateInYear"
                                required
                                errorMessage={validation && validation.expiryDateInYear}
                                onChange={(event: any, newValue) => {
                                    handleFormElementValueChange({ expiryDateInYear: newValue });
                                }}
                            />
                            <TextField
                                styles={{
                                    root: {
                                        flexBasis: "90%"
                                    }
                                }}
                                label="CVV Code"
                                value={payment.cvvCode}
                                id="CVVCode"
                                required
                                errorMessage={validation && validation.cvvCode}
                                onChange={(event: any, newValue) => {
                                    handleFormElementValueChange({ cvvCode: newValue });
                                }}
                            />
                        </Stack>
                    </Stack>
                    <Stack
                        horizontal
                        styles={{
                            root: {
                                marginTop: "8px !important"
                            }
                        }}
                        tokens={{
                            childrenGap: 16
                        }}
                    >
                        <ComboBox
                            styles={{
                                container: {
                                    flexBasis: "100%"
                                }
                            }}
                            label="Country"
                            allowFreeform
                            autoComplete="on"
                            options={countryOptions}
                            selectedKey={payment.countryId}
                            id="CountryId"
                            required
                            errorMessage={validation && validation.countryId}
                            onChange={(event: any, option) => {
                                handleFormElementValueChange({ countryId: option ? option.key : payment.countryId });
                            }}
                        />
                        <TextField
                            styles={{
                                root: {
                                    flexBasis: "100%"
                                }
                            }}
                            label="Billing Address"
                            value={payment.billingAddress}
                            id="BillingAddress"
                            required
                            errorMessage={validation && validation.billingAddress}
                            onChange={(event: any, newValue) => {
                                handleFormElementValueChange({ billingAddress: newValue });
                            }}
                        />
                        <Stack
                            horizontal
                            styles={{
                                root: {
                                    flexBasis: "100%"
                                }
                            }}
                            tokens={{
                                childrenGap: 16
                            }}
                        >
                            <TextField
                                styles={{
                                    root: {
                                        flexBasis: "100%"
                                    }
                                }}
                                label="City"
                                value={payment.city}
                                id="City"
                                required
                                errorMessage={validation && validation.city}
                                onChange={(event: any, newValue) => {
                                    handleFormElementValueChange({ city: newValue });
                                }}
                            />
                            <TextField
                                placeholder="YYYY"
                                styles={{
                                    root: {
                                        flexBasis: "100%"
                                    }
                                }}
                                label="ZIP Code"
                                value={payment.zipCode}
                                id="ZIPCode"
                                required
                                errorMessage={validation && validation.zipCode}
                                onChange={(event: any, newValue) => {
                                    handleFormElementValueChange({ zipCode: newValue });
                                }}
                            />
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
        </>
    );
};
