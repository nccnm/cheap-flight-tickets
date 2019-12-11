import React, { useState } from "react";
import {
    ChoiceGroup,
    ComboBox,
    Dropdown,
    IDropdownOption,
    FontSizes,
    Label,
    Stack,
    TextField
} from "office-ui-fabric-react";
import { mergeStyles } from "office-ui-fabric-react/lib/Styling";
import { creditCardTypeOptions } from "../../data/creditCardTypeOptions";
import { countryOptions } from "../../data/countryOptions";
import { PaymentInfo } from "../../model/PaymentInfo";

type PaymentProps = {
    payment: PaymentInfo;
    onChange: (payment: PaymentInfo) => void;
};

export const Payment: React.FunctionComponent<PaymentProps> = ({ payment, onChange }) => {
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
                            defaultSelectedKey="1"
                            options={creditCardTypeOptions}
                            required={true}
                            styles={{
                                flexContainer: {
                                    display: "flex"
                                }
                            }}
                            className={mergeStyles({ display: "flex", color: "rgb(50, 49, 48)" })}
                            id="TravelInsurance"
                            selectedKey={payment.CreditCardType}
                            onChange={(event: any, checked) => {
                                handleFormElementValueChange({ CreditCardType: checked.key });
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
                            value={payment.CardNumber}
                            id="CardNumber"
                            onChange={(event: any, newValue) => {
                                handleFormElementValueChange({ CardNumber: newValue });
                            }}
                        ></TextField>
                        <TextField
                            styles={{
                                root: {
                                    flexBasis: "100%"
                                }
                            }}
                            label="Name on the Card"
                            value={payment.NameOnTheCard}
                            id="NameOnTheCard"
                            onChange={(event: any, newValue) => {
                                handleFormElementValueChange({ NameOnTheCard: newValue });
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
                                value={payment.ExpiryDateInMonth}
                                id="ExpiryDateInMonth"
                                onChange={(event: any, newValue) => {
                                    handleFormElementValueChange({ ExpiryDateInMonth: newValue });
                                }}
                            />
                            <TextField
                                placeholder="YYYY"
                                styles={{
                                    root: {
                                        flexBasis: "100%"
                                    }
                                }}
                                label=""
                                value={payment.ExpiryDateInYear}
                                id="ExpiryDateInYear"
                                onChange={(event: any, newValue) => {
                                    handleFormElementValueChange({ ExpiryDateInYear: newValue });
                                }}
                            />
                            <TextField
                                styles={{
                                    root: {
                                        flexBasis: "100%"
                                    }
                                }}
                                label="CVV Code"
                                value={payment.CVVCode}
                                id="CVVCode"
                                onChange={(event: any, newValue) => {
                                    handleFormElementValueChange({ CVVCode: newValue });
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
                            selectedKey={payment.CountryId}
                            id="CountryId"
                            onChange={(event: any, option) => {
                                handleFormElementValueChange({ CountryId: option ? option.key : payment.CountryId });
                            }}
                        ></ComboBox>
                        <TextField
                            styles={{
                                root: {
                                    flexBasis: "100%"
                                }
                            }}
                            label="Billing Address"
                            value={payment.BillingAddress}
                            id="BillingAddress"
                            onChange={(event: any, newValue) => {
                                handleFormElementValueChange({ BillingAddress: newValue });
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
                                value={payment.City}
                                id="City"
                                onChange={(event: any, newValue) => {
                                    handleFormElementValueChange({ City: newValue });
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
                                value={payment.ZIPCode}
                                id="ZIPCode"
                                onChange={(event: any, newValue) => {
                                    handleFormElementValueChange({ ZIPCode: newValue });
                                }}
                            />
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
        </>
    );
};
