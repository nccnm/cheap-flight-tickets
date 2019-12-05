import React from "react";
import { Stack, Label, FontWeights } from "office-ui-fabric-react";

const rootStyle = {
    root: {
        color: "#605e5c",
        fontSize: "14px",
        width: "1024px"
    }
};

export const BookFlightPage: React.FunctionComponent = () => {
    return (
        <Stack
            verticalAlign="start"
            styles={{
                root: rootStyle.root
            }}
        >
            <Stack
                verticalAlign="start"
                styles={{
                    root: {
                        marginTop: "0px !important"
                    }
                }}
            >
                <Stack verticalAlign="center">
                    <Label
                        styles={{
                            root: {
                                fontSize: 30,
                                color: "#404156"
                            }
                        }}
                    >
                        SUMMARY
                    </Label>
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
                                        fontSize: 22,
                                        color: "#32d095",
                                        marginLeft: "22px",
                                        marginRight: "40px"
                                    }
                                }}
                            >
                                Flights
                            </Label>
                            <Label
                                styles={{
                                    root: {
                                        fontSize: 18,
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
                                            fontSize: 22,
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
                                            marginRight: "72px",
                                            padding: 2
                                        }
                                    }}
                                >
                                    <Label
                                        styles={{
                                            root: {
                                                fontSize: 18,
                                                color: "#404156",
                                                padding: 2
                                            }
                                        }}
                                    >
                                        09:45PM | JUN 04, FRI
                                    </Label>
                                    <Label
                                        styles={{
                                            root: {
                                                padding: 2
                                            }
                                        }}
                                    >
                                        LOS ANGELES LAX
                                    </Label>
                                </Stack>
                                <Stack>
                                    <Label
                                        styles={{
                                            root: {
                                                fontSize: 18,
                                                color: "#404156",
                                                padding: 2
                                            }
                                        }}
                                    >
                                        09:45PM | JUN 06, FRI
                                    </Label>
                                    <Label
                                        styles={{
                                            root: {
                                                padding: 2
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
                                            padding: 2
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
                                            fontSize: 22,
                                            color: "#404156"
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
                                            marginRight: "72px"
                                        }
                                    }}
                                >
                                    <Label
                                        styles={{
                                            root: {
                                                fontSize: 18,
                                                color: "#404156"
                                            }
                                        }}
                                    >
                                        09:45PM | JUN 04, FRI
                                    </Label>
                                    <Label>ISTANBUL IST</Label>
                                </Stack>
                                <Stack>
                                    <Label
                                        styles={{
                                            root: {
                                                fontSize: 18,
                                                color: "#404156"
                                            }
                                        }}
                                    >
                                        09:45PM | JUN 06, FRI
                                    </Label>
                                    <Label>LOS ANGELES LAX</Label>
                                </Stack>
                            </Stack>
                            <Stack>
                                <Label
                                    styles={{
                                        root: {
                                            color: "#32d095"
                                        }
                                    }}
                                >
                                    Non Stop
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
                                    borderLeft: "solid 6px #32d095"
                                }
                            }}
                        >
                            <Label
                                styles={{
                                    root: {
                                        fontSize: 20,
                                        color: "#32d095",
                                        marginLeft: "22px",
                                        marginRight: "40px"
                                    }
                                }}
                            >
                                Traverllers
                            </Label>
                            <Label
                                styles={{
                                    root: {
                                        fontSize: 20,
                                        color: "#404156"
                                    }
                                }}
                            >
                                $186
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
                                            fontSize: 22,
                                            color: "#404156"
                                        }
                                    }}
                                >
                                    Olivia Davidson
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
                                                padding: 2
                                            }
                                        }}
                                    >
                                        1 x cabin bag
                                    </Label>
                                    <Label
                                        styles={{
                                            root: {
                                                padding: 2
                                            }
                                        }}
                                    >
                                        0x checked bag
                                    </Label>
                                    <Label
                                        styles={{
                                            root: {
                                                padding: 2
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
                                                padding: 2
                                            }
                                        }}
                                    >
                                        free
                                    </Label>
                                    <Label
                                        styles={{
                                            root: {
                                                padding: 2
                                            }
                                        }}
                                    >
                                        $80
                                    </Label>
                                    <Label
                                        styles={{
                                            root: {
                                                padding: 2
                                            }
                                        }}
                                    >
                                        $13
                                    </Label>
                                </Stack>
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
                                            fontSize: 22,
                                            color: "#404156",
                                            padding: 2
                                        }
                                    }}
                                >
                                    Adult 2
                                </Label>
                            </Stack>
                            <Stack horizontal>
                                <Stack
                                    styles={{
                                        root: {
                                            marginRight: "72px"
                                        }
                                    }}
                                >
                                    <Label
                                        styles={{
                                            root: {
                                                padding: 2
                                            }
                                        }}
                                    >
                                        1 x cabin bag
                                    </Label>
                                    <Label
                                        styles={{
                                            root: {
                                                padding: 2
                                            }
                                        }}
                                    >
                                        0x checked bag
                                    </Label>
                                    <Label
                                        styles={{
                                            root: {
                                                padding: 2
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
                                                padding: 2
                                            }
                                        }}
                                    >
                                        free
                                    </Label>
                                    <Label
                                        styles={{
                                            root: {
                                                padding: 2
                                            }
                                        }}
                                    >
                                        $160
                                    </Label>
                                    <Label
                                        styles={{
                                            root: {
                                                padding: 2
                                            }
                                        }}
                                    >
                                        $13
                                    </Label>
                                </Stack>
                            </Stack>
                        </Stack>
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
                                        fontSize: 22,
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
                                        fontSize: 26,
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
            <Stack>Who's Travelling?</Stack>
            <Stack>How Would You Like to Pay?</Stack>
            <Stack>Where Should We Send Confirmation?</Stack>
        </Stack>
    );
};
