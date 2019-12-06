import React from "react";
import { Checkbox, FontSizes, Label, Stack, TextField } from "office-ui-fabric-react";

export const Confirmation: React.FunctionComponent = () => {
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
                gap="24px"
            >
                <Stack
                    styles={{
                        root: {
                            marginTop: "0px !important"
                        }
                    }}
                    gap="16px"
                >
                    <Stack
                        horizontal
                        styles={{
                            root: {
                                marginTop: "8px !important"
                            }
                        }}
                        gap="16px"
                    >
                        <TextField
                            styles={{
                                root: {
                                    flexBasis: "100%"
                                }
                            }}
                            label="Email Address"
                        ></TextField>
                        <TextField
                            styles={{
                                root: {
                                    flexBasis: "100%"
                                }
                            }}
                            label="Phone Number"
                        />
                    </Stack>
                    <Stack
                        verticalAlign="end"
                        styles={{
                            root: {
                                flexBasis: "100%"
                            }
                        }}
                        gap="16px"
                    >
                        <Checkbox label="I Accept the Rules of this Trip" />
                        <Checkbox label="Send Me the Best Deals by Email" />
                    </Stack>
                </Stack>
            </Stack>
        </>
    );
};
