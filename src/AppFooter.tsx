import React from "react";
import { Stack, Label, Separator, FontWeights } from "office-ui-fabric-react";

export const AppFooter: React.FunctionComponent = () => {
    return (
        <>
            <Stack
                horizontal
                tokens={{
                    childrenGap: 15
                }}
                horizontalAlign="center"
                styles={{
                    root: {
                        backgroundColor: "rgb(64, 65, 86)",
                        width: "100%"
                    }
                }}
            >
                <Stack
                    horizontal
                    horizontalAlign="space-between"
                    styles={{
                        root: {
                            padding: "36px",
                            width: "1024px"
                        }
                    }}
                >
                    <Stack>
                        <Label
                            styles={{
                                root: {
                                    fontSize: "36px",
                                    fontWeight: FontWeights.bold,
                                    color: "rgb(255, 255, 255);"
                                }
                            }}
                        >
                            flyplan
                        </Label>
                    </Stack>
                    <Separator vertical></Separator>
                    <Stack>
                        <Label
                            styles={{
                                root: {
                                    fontSize: "12px",
                                    color: "rgb(255, 255, 255);"
                                }
                            }}
                        >
                            1556 Broadway, New York
                        </Label>
                        <Label
                            styles={{
                                root: {
                                    fontSize: "12px",
                                    color: "rgb(255, 255, 255);"
                                }
                            }}
                        >
                            NY, 10120, USA
                        </Label>
                    </Stack>
                    <Separator vertical></Separator>
                    <Stack>
                        <Label
                            styles={{
                                root: {
                                    fontSize: "12px",
                                    color: "rgb(255, 255, 255);"
                                }
                            }}
                        >
                            flyplan@gmail.com
                        </Label>
                        <Label
                            styles={{
                                root: {
                                    fontSize: "12px",
                                    color: "rgb(255, 255, 255);"
                                }
                            }}
                        >
                            555-555-5555
                        </Label>
                    </Stack>
                </Stack>
            </Stack>
            <Stack
                horizontal
                tokens={{
                    childrenGap: 15
                }}
                horizontalAlign="center"
                styles={{
                    root: {
                        backgroundColor: "rgb(46, 47, 65)",
                        width: "100%",
                        marginTop: "0 !important"
                    }
                }}
            >
                <Stack
                    horizontal
                    horizontalAlign="space-between"
                    styles={{
                        root: {
                            padding: "16px",
                            width: "1024px"
                        }
                    }}
                >
                    <Label
                        styles={{
                            root: {
                                fontSize: "12px",
                                color: "rgb(255, 255, 255);"
                            }
                        }}
                    >
                        Copyright@me 2019
                    </Label>
                </Stack>
            </Stack>
        </>
    );
};
