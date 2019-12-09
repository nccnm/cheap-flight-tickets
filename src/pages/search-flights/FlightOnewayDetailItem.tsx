import React from "react";
import { Stack, Label, Image, FontWeights, DefaultPalette } from "office-ui-fabric-react";
import { theme } from "../../style/theme";

const airlineInfoStyle = {
    airlineName: {
        root: {
            fontSize: "11px",
            color: "#737373",
            padding: "0px"
        }
    },
    depart: {
        time: {
            root: {
                fontSize: "16px",
                color: "rgb(50, 49, 48)",
                padding: "0px"
            }
        },
        date: {
            root: {
                fontSize: "13px",
                color: "#737373",
                padding: "0px"
            }
        },
        airport: {
            root: {
                fontSize: "11px",
                fontWeight: FontWeights.bold,
                color: "rgb(50, 49, 48)",
                padding: "16px 0px 0px 0px"
            }
        }
    },
    stops: {
        root: {
            fontSize: "13px",
            color: DefaultPalette.themeSecondary,
            padding: "0px"
        }
    },
    price: {
        text: {
            root: {
                fontSize: "24px",
                fontWeight: FontWeights.bold,
                color: "rgb(50, 49, 48)"
            }
        }
    }
};

export const FlightOnewayDetailItem: React.FunctionComponent = () => {
    return (
        <Stack
            horizontal
            tokens={{
                childrenGap: 20
            }}
            styles={{
                root: {
                    borderRadius: "2px",
                    backgroundColor: theme.palette.white,
                    flexBasis: "100%",
                    maxWidth: "100%",
                    justifyContent: "space-between"
                }
            }}
        >
            <Stack
                verticalAlign="center"
                horizontalAlign="center"
                styles={{
                    root: {
                        marginRight: "16px"
                    }
                }}
            >
                <Stack
                    horizontal
                    verticalAlign="center"
                    horizontalAlign="center"
                    tokens={{
                        childrenGap: 12
                    }}
                >
                    <Stack>
                        <Image src="http://placehold.it/30x30" />
                    </Stack>
                    <Stack>
                        <Label styles={airlineInfoStyle.airlineName}>Singapore Airlines</Label>
                        <Label styles={airlineInfoStyle.airlineName}>BA-3271</Label>
                    </Stack>
                </Stack>
            </Stack>
            <Stack
                verticalAlign="center"
                horizontalAlign="center"
                styles={{
                    root: {
                        marginRight: "16px"
                    }
                }}
            >
                <Stack verticalAlign="start">
                    <Label styles={airlineInfoStyle.depart.date}>Los Angeles</Label>
                    <Label styles={airlineInfoStyle.depart.time}>JUN 13, SUN, 08:00PM</Label>
                    <Label styles={airlineInfoStyle.depart.date}>LOS ANGELES LAX, USA</Label>
                </Stack>
            </Stack>
            <Stack
                verticalAlign="center"
                horizontalAlign="center"
                styles={{
                    root: {
                        marginRight: "16px",
                        alignItems: "center"
                    }
                }}
            >
                <Stack
                    verticalAlign="center"
                    horizontalAlign="center"
                    styles={{
                        root: {
                            flexBasis: "100%"
                        }
                    }}
                >
                    <Label styles={airlineInfoStyle.depart.date}>10h 50m | Non stop</Label>
                    <Label styles={airlineInfoStyle.stops}>Economy class</Label>
                </Stack>
            </Stack>
            <Stack
                styles={{
                    root: {
                        marginRight: "16px"
                    }
                }}
            >
                <Stack verticalAlign="start">
                    <Label styles={airlineInfoStyle.depart.date}>London</Label>
                    <Label styles={airlineInfoStyle.depart.time}>JUN 14, SAT, 08:00PM</Label>
                    <Label styles={airlineInfoStyle.depart.date}>HEATHROW (LHR), UK</Label>
                </Stack>
            </Stack>
        </Stack>
    );
};
