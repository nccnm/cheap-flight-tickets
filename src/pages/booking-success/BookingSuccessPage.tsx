import React, { useState, useEffect } from "react";
import qs from "qs";
import { Stack, Label, FontSizes, FontWeights } from "office-ui-fabric-react";
import { useLocation } from "react-router-dom";
import { Order } from "../../model/Order";
import { FlightService } from "../../service/FlightService";
import { FlightDetail } from "../../model/FlightDetail";
import { theme } from "../../style/theme";
import { Card } from "@uifabric/react-cards";

const rootStyle = {
    root: {
        color: "#605e5c",
        fontSize: "14px",
        width: "1024px"
    }
};

const flightService = new FlightService();

export const BookingSuccessPage: React.FunctionComponent = () => {
    const { search } = useLocation();
    const [order, setOrder] = useState<any>(new Order());
    const [flight, setFlight] = useState<FlightDetail>(new FlightDetail());

    useEffect(() => {
        const queryString = qs.parse(search.substr(1));
        flightService.getBookingByCode(queryString.code).then(function(order: any) {
            setOrder(order);
            setFlight(order.flightViewModel);
        });
    }, [search]);

    return (
        <Card
            className="flightInfo"
            horizontal
            styles={{
                root: {
                    borderRadius: "2px",
                    backgroundColor: theme.palette.white,
                    padding: "16px",
                    flexBasis: "100%",
                    maxWidth: "100%",
                    marginTop: "16px !important",
                    justifyContent: "space-between"
                }
            }}
        >
            <Stack
                verticalAlign="start"
                tokens={{
                    childrenGap: 20
                }}
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
                    <Label
                        styles={{
                            root: {
                                margin: "16px !important",
                                fontSize: FontSizes.large
                            }
                        }}
                    >
                        Thank you for booking: {qs.parse(search.substr(1)).code}
                    </Label>
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
                                                    fontSize: FontSizes.medium
                                                }
                                            }}
                                        >
                                            {flight.departTime}
                                        </Label>
                                        <Label
                                            styles={{
                                                root: {
                                                    padding: 2,
                                                    fontSize: FontSizes.medium
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
                                                    fontSize: FontSizes.medium
                                                }
                                            }}
                                        >
                                            {flight.returnTime}
                                        </Label>
                                        <Label
                                            styles={{
                                                root: {
                                                    padding: 2,
                                                    fontSize: FontSizes.medium
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
                                                fontSize: FontSizes.medium
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
                            {order.travellerViewModels &&
                                order.travellerViewModels.map((item, index) => (
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
                                                            fontSize: FontSizes.medium
                                                        }
                                                    }}
                                                >
                                                    ${item.checkedBaggae + " x checked bag"}
                                                </Label>
                                                <Label
                                                    styles={{
                                                        root: {
                                                            padding: 2,
                                                            fontSize: FontSizes.medium
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
                                                            fontSize: FontSizes.medium
                                                        }
                                                    }}
                                                >
                                                    ${item.checkedBaggae * 12}
                                                </Label>
                                                <Label
                                                    styles={{
                                                        root: {
                                                            padding: 2,
                                                            fontSize: FontSizes.medium
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
                                    $
                                    {order.travellerViewModels
                                        ? flightService.getTotal(order.travellerViewModels, flight.totalMoney)
                                        : 0}
                                </Label>
                            </Stack>
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
        </Card>
    );
};
