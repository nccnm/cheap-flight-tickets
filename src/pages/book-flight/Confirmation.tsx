import React, { useState } from "react";
import { Checkbox, FontSizes, Label, Stack, TextField } from "office-ui-fabric-react";
import { ConfirmationInfo } from "../../model/ConfirmationInfo";

type PaymentProps = {
    confirmation: ConfirmationInfo;
    onChange: (confirmation: ConfirmationInfo) => void;
};

export const Confirmation: React.FunctionComponent<PaymentProps> = ({ confirmation, onChange }) => {
    const [localConfirmationInfo, setConfirmationInfo] = useState<ConfirmationInfo>(confirmation);
    const handleFormElementValueChange = newItem => {
        setConfirmationInfo({
            ...localConfirmationInfo,
            ...newItem
        });

        onChange({
            ...localConfirmationInfo,
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
                        />
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
