import React from "react";
import { Stack, Label, FontWeights, FontSizes } from "office-ui-fabric-react";
import { Traveller } from "../../model/Traverller";
import { FlightDetail } from "../../model/FlightDetail";
import { FlightService } from "../../service/FlightService";

type FlightSummaryProp = {
    travellers: Traveller[];
    flight: FlightDetail;
};

const flightService = new FlightService();

export const FlightSummary: React.FunctionComponent<FlightSummaryProp> = ({ travellers, flight }) => {
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
                        className="flights-detail"
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
                        ></Label>
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
                                    {flight.departTime}
                                </Label>
                                <Label
                                    styles={{
                                        root: {
                                            padding: 2,
                                            fontSize: FontSizes.small
                                        }
                                    }}
                                >
                                    {flight.depart}
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
                                    {flight.returnTime}
                                </Label>
                                <Label
                                    styles={{
                                        root: {
                                            padding: 2,
                                            fontSize: FontSizes.small
                                        }
                                    }}
                                >
                                    {flight.return}
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
                                Non stop
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
                        className="flights-travellers"
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
                    </Stack>
                    {travellers.map((item, index) => (
                        <Stack
                            key={item.id}
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
                                    {(item.firstName || "") +
                                        " " +
                                        (item.lastName || "") +
                                        " $" +
                                        flightService.getFlightPrice(item.personType, flight.totalMoney)}
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
                                        ${item.checkedBaggae + " x checked bag"}
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
                                        ${item.checkedBaggae * 12}
                                    </Label>
                                    <Label
                                        styles={{
                                            root: {
                                                padding: 2,
                                                fontSize: FontSizes.small
                                            }
                                        }}
                                    >
                                        {item.travelInsurance === "1"
                                            ? "$20"
                                            : item.travelInsurance === "2"
                                            ? "$30"
                                            : "free"}
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
                        className="flights-total"
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
                            ${flightService.getTotal(travellers, flight.totalMoney)}
                        </Label>
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    );
};
