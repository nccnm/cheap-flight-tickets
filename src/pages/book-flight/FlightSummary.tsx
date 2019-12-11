import React from "react";
import { Stack, Label, FontWeights, FontSizes } from "office-ui-fabric-react";
import { Traveller } from "../../model/Traverller";

type FlightSummaryProp = {
    travellers: Traveller[];
};

export const FlightSummary: React.FunctionComponent<FlightSummaryProp> = ({ travellers }) => {
    return (
        <Stack
            verticalAlign="start"
            styles={{
                root: {
                    marginTop: "0px !important"
                }
            }}
        >
            <Stack>
                <Stack>
                    <Stack
                        horizontal
                        verticalAlign="center"
                        styles={{
                            root: {
                                borderLeft: "solid 4px #32d095"
                            }
                        }}
                    >
                        <Label
                            styles={{
                                root: {
                                    fontSize: 16,
                                    color: "#32d095",
                                    marginLeft: "16px",
                                    marginRight: "20px"
                                }
                            }}
                        >
                            Flights
                        </Label>
                        <Label
                            styles={{
                                root: {
                                    fontSize: 16,
                                    color: "#404156"
                                }
                            }}
                        >
                            $2,799
                        </Label>
                    </Stack>
                    <Stack
                        styles={{
                            root: {
                                marginTop: "12px !important"
                            }
                        }}
                    >
                        <Stack>
                            <Label
                                styles={{
                                    root: {
                                        fontSize: 16,
                                        color: "#404156",
                                        padding: 2
                                    }
                                }}
                            >
                                Departure
                            </Label>
                        </Stack>
                        <Stack horizontal>
                            <Stack
                                styles={{
                                    root: {
                                        padding: 2,
                                        marginRight: "16px"
                                    }
                                }}
                            >
                                <Label
                                    styles={{
                                        root: {
                                            padding: 2,
                                            fontSize: FontSizes.small
                                        }
                                    }}
                                >
                                    09:45PM | JUN 04, FRI
                                </Label>
                                <Label
                                    styles={{
                                        root: {
                                            padding: 2,
                                            fontSize: FontSizes.small
                                        }
                                    }}
                                >
                                    LOS ANGELES LAX
                                </Label>
                            </Stack>
                            <Stack
                                styles={{
                                    root: {
                                        padding: 2
                                    }
                                }}
                            >
                                <Label
                                    styles={{
                                        root: {
                                            padding: 2,
                                            fontSize: FontSizes.small
                                        }
                                    }}
                                >
                                    09:45PM | JUN 06, FRI
                                </Label>
                                <Label
                                    styles={{
                                        root: {
                                            padding: 2,
                                            fontSize: FontSizes.small
                                        }
                                    }}
                                >
                                    ISTANBUL IST
                                </Label>
                            </Stack>
                        </Stack>
                        <Stack>
                            <Label
                                styles={{
                                    root: {
                                        color: "#32d095",
                                        padding: 2,
                                        fontSize: FontSizes.small
                                    }
                                }}
                            >
                                1 Stop - London LHR
                            </Label>
                        </Stack>
                    </Stack>
                    <Stack
                        styles={{
                            root: {
                                marginTop: "12px !important"
                            }
                        }}
                    >
                        <Stack>
                            <Label
                                styles={{
                                    root: {
                                        fontSize: 16,
                                        color: "#404156",
                                        padding: 2
                                    }
                                }}
                            >
                                Return
                            </Label>
                        </Stack>
                        <Stack horizontal>
                            <Stack
                                styles={{
                                    root: {
                                        padding: 2,
                                        marginRight: "16px"
                                    }
                                }}
                            >
                                <Label
                                    styles={{
                                        root: {
                                            padding: 2,
                                            fontSize: FontSizes.small
                                        }
                                    }}
                                >
                                    09:45PM | JUN 04, FRI
                                </Label>
                                <Label
                                    styles={{
                                        root: {
                                            padding: 2,
                                            fontSize: FontSizes.small
                                        }
                                    }}
                                >
                                    ISTANBUL IST
                                </Label>
                            </Stack>
                            <Stack
                                styles={{
                                    root: {
                                        padding: 2
                                    }
                                }}
                            >
                                <Label
                                    styles={{
                                        root: {
                                            padding: 2,
                                            fontSize: FontSizes.small
                                        }
                                    }}
                                >
                                    09:45PM | JUN 06, FRI
                                </Label>
                                <Label
                                    styles={{
                                        root: {
                                            padding: 2,
                                            fontSize: FontSizes.small
                                        }
                                    }}
                                >
                                    LOS ANGELES LAX
                                </Label>
                            </Stack>
                        </Stack>
                        <Stack>
                            <Label
                                styles={{
                                    root: {
                                        color: "#32d095",
                                        padding: 2,
                                        fontSize: FontSizes.small
                                    }
                                }}
                            >
                                1 Stop - London LHR
                            </Label>
                        </Stack>
                    </Stack>
                </Stack>
                <Stack
                    styles={{
                        root: {
                            marginTop: "20px !important"
                        }
                    }}
                >
                    <Stack
                        horizontal
                        verticalAlign="center"
                        styles={{
                            root: {
                                borderLeft: "solid 4px #32d095"
                            }
                        }}
                    >
                        <Label
                            styles={{
                                root: {
                                    fontSize: 16,
                                    color: "#32d095",
                                    marginLeft: "16px",
                                    marginRight: "20px"
                                }
                            }}
                        >
                            Travellers
                        </Label>
                        <Label
                            styles={{
                                root: {
                                    fontSize: 16,
                                    color: "#404156"
                                }
                            }}
                        >
                            $186
                        </Label>
                    </Stack>
                    {travellers.map((item, index) => (
                        <Stack
                            key={item._id}
                            styles={{
                                root: {
                                    marginTop: "12px !important"
                                }
                            }}
                        >
                            <Stack>
                                <Label
                                    styles={{
                                        root: {
                                            color: "#404156",
                                            fontSize: FontSizes.mediumPlus
                                        }
                                    }}
                                >
                                    {item.FirstName + " " + item.LastName}
                                </Label>
                            </Stack>
                            <Stack horizontal>
                                <Stack
                                    styles={{
                                        root: {
                                            marginRight: "72px",
                                            padding: 2
                                        }
                                    }}
                                >
                                    <Label
                                        styles={{
                                            root: {
                                                padding: 2,
                                                fontSize: FontSizes.small
                                            }
                                        }}
                                    >
                                        1 x cabin bag
                                    </Label>
                                    <Label
                                        styles={{
                                            root: {
                                                padding: 2,
                                                fontSize: FontSizes.small
                                            }
                                        }}
                                    >
                                        {item.CheckedBaggae}x checked bag
                                    </Label>
                                    <Label
                                        styles={{
                                            root: {
                                                padding: 2,
                                                fontSize: FontSizes.small
                                            }
                                        }}
                                    >
                                        Insurance
                                    </Label>
                                </Stack>
                                <Stack>
                                    <Label
                                        styles={{
                                            root: {
                                                padding: 2,
                                                fontSize: FontSizes.small
                                            }
                                        }}
                                    >
                                        free
                                    </Label>
                                    <Label
                                        styles={{
                                            root: {
                                                padding: 2,
                                                fontSize: FontSizes.small
                                            }
                                        }}
                                    >
                                        $80
                                    </Label>
                                    <Label
                                        styles={{
                                            root: {
                                                padding: 2,
                                                fontSize: FontSizes.small
                                            }
                                        }}
                                    >
                                        $13
                                    </Label>
                                </Stack>
                            </Stack>
                        </Stack>
                    ))}
                </Stack>
            </Stack>
            <Stack>
                <Stack
                    styles={{
                        root: {
                            marginTop: "20px"
                        }
                    }}
                >
                    <Stack
                        horizontal
                        verticalAlign="center"
                        styles={{
                            root: {
                                borderLeft: "solid 6px #32d095"
                            }
                        }}
                    >
                        <Label
                            styles={{
                                root: {
                                    fontSize: FontSizes.large,
                                    color: "#32d095",
                                    marginLeft: "22px",
                                    marginRight: "40px"
                                }
                            }}
                        >
                            Totals
                        </Label>
                        <Label
                            styles={{
                                root: {
                                    fontSize: FontSizes.large,
                                    color: "#404156",
                                    fontWeight: FontWeights.bold
                                }
                            }}
                        >
                            $2,985
                        </Label>
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    );
};
