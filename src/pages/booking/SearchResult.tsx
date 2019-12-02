import React from "react";
import {
    Stack,
    Label,
    PrimaryButton,
    Dropdown,
    IDropdownOption,
    Image,
    DefaultButton,
    FontWeights,
    Separator
} from "office-ui-fabric-react";
import { Card, ICardTokens, ICardSectionStyles, ICardSectionTokens } from "@uifabric/react-cards";

const options: IDropdownOption[] = [
    { key: "price", text: "Price by Adult" },
    { key: "departTime", text: "Depart Time" },
    { key: "stops", text: "Stops" },
    { key: "airlines", text: "Airlines" }
];

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
                fontSize: "20px",
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
            color: "rgb(50, 208, 149)",
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

const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export const SearchResult: React.FunctionComponent = () => {
    return (
        <Stack
            styles={{
                root: {
                    flexBasis: "70%"
                }
            }}
        >
            <Stack
                horizontal
                horizontalAlign="space-between"
                verticalAlign="center"
                // styles={{
                //     root: {
                //         flexBasis: "44px"
                //     }
                // }}
            >
                <Label
                    styles={{
                        root: {
                            flexBasis: "50%",
                            fontSize: "16px"
                        }
                    }}
                >
                    565 Results
                </Label>
                <Stack
                    horizontal
                    gap="12px"
                    horizontalAlign="end"
                    verticalAlign="center"
                    styles={{
                        root: {
                            flexBasis: "50%"
                        }
                    }}
                >
                    <Label>Sort by:</Label>
                    <Dropdown
                        defaultSelectedKey="price"
                        options={options}
                        styles={{
                            root: {
                                width: "160px"
                            }
                        }}
                    />
                </Stack>
            </Stack>
            <Stack>
                <Stack>
                    {list.map(item => (
                        <Card
                            key={item}
                            horizontal
                            styles={{
                                root: {
                                    borderRadius: "2px",
                                    backgroundColor: "#FFFFFF",
                                    padding: "16px",
                                    flexBasis: "100%",
                                    maxWidth: "100%",
                                    marginTop: "16px !important",
                                    justifyContent: "space-between"
                                }
                            }}
                        >
                            <Card.Section
                                styles={{
                                    root: {
                                        marginRight: "16px"
                                    }
                                }}
                            >
                                <Stack horizontal verticalAlign="center" gap="12">
                                    <Stack>
                                        <Image src="http://placehold.it/30x30" />
                                    </Stack>
                                    <Stack>
                                        <Label styles={airlineInfoStyle.airlineName}>American Airlines</Label>
                                        <Label styles={airlineInfoStyle.airlineName}>BA-3271</Label>
                                    </Stack>
                                </Stack>
                                <Stack horizontal verticalAlign="center" gap="12">
                                    <Stack>
                                        <Image src="http://placehold.it/30x30" />
                                    </Stack>
                                    <Stack>
                                        <Label styles={airlineInfoStyle.airlineName}>Singapore Airlines</Label>
                                        <Label styles={airlineInfoStyle.airlineName}>BA-3271</Label>
                                    </Stack>
                                </Stack>
                            </Card.Section>
                            <Card.Section
                                styles={{
                                    root: {
                                        marginRight: "16px"
                                    }
                                }}
                            >
                                <Stack verticalAlign="start">
                                    <Label styles={airlineInfoStyle.depart.time}>09:45PM</Label>
                                    <Label styles={airlineInfoStyle.depart.date}>JUN 04, SUN</Label>
                                    <Label styles={airlineInfoStyle.depart.airport}>LOS ANGELES LAX</Label>
                                </Stack>
                            </Card.Section>
                            <Card.Section
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
                                    <Label styles={airlineInfoStyle.depart.date}>31h 10m</Label>
                                    <Label styles={airlineInfoStyle.stops}>2 stops</Label>
                                    <DefaultButton
                                        text="Detail"
                                        styles={{
                                            root: {
                                                marginTop: "14px !important",
                                                height: "22px",
                                                fontSize: "12px",
                                                color: "#FFFFFF",
                                                backgroundColor: "rgb(64, 65, 86)"
                                            }
                                        }}
                                    />
                                </Stack>
                            </Card.Section>
                            <Card.Section
                                styles={{
                                    root: {
                                        marginRight: "16px"
                                    }
                                }}
                            >
                                <Stack verticalAlign="start">
                                    <Label styles={airlineInfoStyle.depart.time}>12:55PM</Label>
                                    <Label styles={airlineInfoStyle.depart.date}>JUN 06, FRI</Label>
                                    <Label styles={airlineInfoStyle.depart.airport}>ISTANBUL IST</Label>
                                </Stack>
                            </Card.Section>
                            <Card.Section
                                styles={{
                                    root: {
                                        marginRight: "16px",
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        flexBasis: "120px"
                                    }
                                }}
                            >
                                <Separator vertical></Separator>
                                <Stack
                                    verticalAlign="center"
                                    horizontalAlign="center"
                                    styles={{
                                        root: {
                                            marginTop: "0px !important"
                                        }
                                    }}
                                >
                                    <Label styles={airlineInfoStyle.price.text}>$583</Label>
                                    <PrimaryButton
                                        text="Book"
                                        styles={{
                                            root: {
                                                backgroundColor: "rgb(50, 208, 149)"
                                            },
                                            rootHovered: {
                                                backgroundColor: "rgb(50, 208, 149)",
                                                opacity: "0.8"
                                            },
                                            rootPressed: {
                                                backgroundColor: "rgb(50, 208, 149)"
                                            }
                                        }}
                                    />
                                </Stack>
                            </Card.Section>
                        </Card>
                    ))}
                </Stack>
            </Stack>
        </Stack>
    );
};
