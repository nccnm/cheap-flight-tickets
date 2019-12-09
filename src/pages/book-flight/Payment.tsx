import React from "react";
import { ChoiceGroup, Dropdown, FontSizes, Label, Stack, TextField } from "office-ui-fabric-react";
import { mergeStyles } from "office-ui-fabric-react/lib/Styling";
import { creditCardTypeOptions } from "../../data/creditCardTypeOptions";

export const Payment: React.FunctionComponent = () => {
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
                        ></TextField>
                        <TextField
                            styles={{
                                root: {
                                    flexBasis: "100%"
                                }
                            }}
                            label="Name on the Card"
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
                            />
                            <TextField
                                placeholder="YYYY"
                                styles={{
                                    root: {
                                        flexBasis: "100%"
                                    }
                                }}
                                label=""
                            />
                            <TextField
                                styles={{
                                    root: {
                                        flexBasis: "100%"
                                    }
                                }}
                                label="CVV Code"
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
                        <Dropdown
                            styles={{
                                root: {
                                    flexBasis: "100%"
                                }
                            }}
                            label="Country"
                            options={[]}
                        ></Dropdown>
                        <TextField
                            styles={{
                                root: {
                                    flexBasis: "100%"
                                }
                            }}
                            label="Billing Address"
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
                            <Dropdown
                                styles={{
                                    root: {
                                        flexBasis: "100%"
                                    }
                                }}
                                label="City"
                                options={[]}
                            ></Dropdown>
                            <TextField
                                placeholder="YYYY"
                                styles={{
                                    root: {
                                        flexBasis: "100%"
                                    }
                                }}
                                label="ZIP Code"
                            />
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
        </>
    );
};
