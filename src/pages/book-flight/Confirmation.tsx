import React, { useState } from "react";
import { Checkbox, FontSizes, Label, Stack, TextField, MessageBar, MessageBarType } from "office-ui-fabric-react";
import { ConfirmationInfo } from "../../model/ConfirmationInfo";
import { ConfirmationInfoResult } from "../../model/OrderValidationResult";

type PaymentProps = {
    confirmation: ConfirmationInfo;
    onChange: (confirmation: ConfirmationInfo) => void;
    validation: ConfirmationInfoResult;
};

export const Confirmation: React.FunctionComponent<PaymentProps> = ({ confirmation, onChange, validation }) => {
    const handleFormElementValueChange = newItem => {
        onChange({
            ...confirmation,
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
                    Where Should We Send Confirmation?
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
                    tokens={{
                        childrenGap: 16
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
                        <TextField
                            styles={{
                                root: {
                                    flexBasis: "100%"
                                }
                            }}
                            label="Email Address"
                            value={confirmation.emailAddress}
                            id="EmailAddress"
                            errorMessage={validation && validation.emailAddress}
                            required
                            onChange={(event: any, newValue) => {
                                handleFormElementValueChange({ emailAddress: newValue });
                            }}
                        />
                        <TextField
                            styles={{
                                root: {
                                    flexBasis: "100%"
                                }
                            }}
                            label="Phone Number"
                            value={confirmation.phoneNumber}
                            id="PhoneNumber"
                            errorMessage={validation && validation.phoneNumber}
                            required
                            onChange={(event: any, newValue) => {
                                handleFormElementValueChange({ phoneNumber: newValue });
                            }}
                        />
                    </Stack>
                    <Stack
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
                        <Checkbox
                            label="I Accept the Rules of this Trip"
                            checked={confirmation.isAcceptedRule}
                            id="IsAcceptedRule"
                            onChange={(event: any, newValue) => {
                                handleFormElementValueChange({ isAcceptedRule: newValue });
                            }}
                        ></Checkbox>
                        <p className="ms-TextField-errorMessage errorMessage-117" style={{ marginTop: "0px" }}>
                            <span data-automation-id="error-message">{validation && validation.isAcceptedRule}</span>
                        </p>
                        <Checkbox
                            label="Send Me the Best Deals by Email"
                            checked={confirmation.isSendEmail}
                            id="IsSendEmail"
                            onChange={(event: any, newValue) => {
                                handleFormElementValueChange({ isSendEmail: newValue });
                            }}
                        />
                    </Stack>
                </Stack>
            </Stack>
        </>
    );
};
