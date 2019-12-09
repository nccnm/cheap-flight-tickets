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
                        tokens={{
                            childrenGap: 16
                        }}
                    >
                        <Checkbox label="I Accept the Rules of this Trip" />
                        <Checkbox label="Send Me the Best Deals by Email" />
                    </Stack>
                </Stack>
            </Stack>
        </>
    );
};
