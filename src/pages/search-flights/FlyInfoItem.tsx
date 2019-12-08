import React from "react";
import moment from "moment";
import {
    Stack,
    Label,
    Separator,
    Image,
    DefaultButton,
    PrimaryButton,
    FontWeights,
    Dialog,
    DialogType,
    DialogFooter,
    FontSizes
} from "office-ui-fabric-react";
import { Card } from "@uifabric/react-cards";
import { FlightOnewayDetailItem } from "./FlightOnewayDetailItem";
import { theme } from "../../style/theme";
import { FlightDetail } from "../../model/FlightDetail";
import { BrowserRouter as Router, Switch, Route, Link, Redirect, useHistory, useLocation } from "react-router-dom";

const airlineInfoStyle = {
    airlineName: {
        root: {
            fontSize: FontSizes.small,
            color: theme.palette.neutralSecondary,
            padding: "0px"
        }
    },
    depart: {
        time: {
            root: {
                fontSize: FontSizes.large,
                color: "rgb(50, 49, 48)",
                padding: "0px"
            }
        },
        date: {
            root: {
                fontSize: FontSizes.medium,
                color: theme.palette.neutralSecondary,
                padding: "0px"
            }
        },
        airport: {
            root: {
                fontSize: FontSizes.small,
                fontWeight: FontWeights.bold,
                color: "rgb(50, 49, 48)",
                padding: "16px 0px 0px 0px"
            }
        }
    },
    stops: {
        root: {
            fontSize: "13px",
            color: theme.palette.themeSecondary,
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

export interface IDialogLargeHeaderExampleState {
    hideDialog: boolean;
}

type FlyInfoItemProps = {
    item: FlightDetail;
};

export const FlyInfoItem: React.FunctionComponent<FlyInfoItemProps> = (props: FlyInfoItemProps) => {
    let history = useHistory();
    const handleBookClick = (): void => {
        history.push("/booking/book-flight?_id=" + props.item._id);
    };

    return (
        <>
            <Card
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
                <Card.Section
                    styles={{
                        root: {
                            flexBasis: "180px"
                        }
                    }}
                >
                    <Stack
                        horizontal
                        verticalAlign="center"
                        tokens={{
                            childrenGap: 12
                        }}
                    >
                        <Stack>
                            <Image src={props.item.DepartAirlinePicture} />
                        </Stack>
                        <Stack>
                            <Label styles={airlineInfoStyle.airlineName}>{props.item.DepartAirlineName}</Label>
                            <Label styles={airlineInfoStyle.airlineName}>{props.item.DepartAirlinePlane}</Label>
                        </Stack>
                    </Stack>
                    <Stack
                        horizontal
                        verticalAlign="center"
                        tokens={{
                            childrenGap: 12
                        }}
                    >
                        <Stack>
                            <Image src={props.item.ReturnAirlinePicture} />
                        </Stack>
                        <Stack>
                            <Label styles={airlineInfoStyle.airlineName}>{props.item.ReturnAirlineName}</Label>
                            <Label styles={airlineInfoStyle.airlineName}>{props.item.ReturnAirlinePlane}</Label>
                        </Stack>
                    </Stack>
                </Card.Section>
                <Card.Section
                    styles={{
                        root: {
                            flexBasis: "20%"
                        }
                    }}
                >
                    <Stack verticalAlign="start">
                        <Label styles={airlineInfoStyle.depart.time}>
                            {moment(props.item.DepartTime).format("LT")}
                        </Label>
                        <Label styles={airlineInfoStyle.depart.date}>
                            {moment(props.item.DepartTime).format("LL")}
                        </Label>
                        <Label styles={airlineInfoStyle.depart.airport}>{props.item.Depart}</Label>
                    </Stack>
                </Card.Section>
                <Card.Section
                    styles={{
                        root: {
                            alignItems: "center",
                            flexBasis: "20%"
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
                        <Label styles={airlineInfoStyle.depart.date}>{props.item.TotalTime}</Label>
                        <Label styles={airlineInfoStyle.stops}>
                            {props.item.Stops.length > 0 ? props.item.Stops.length + " stops" : "Non stop"}
                        </Label>
                        {/* <DefaultButton
                                text="Detail"
                                styles={{
                                    root: {
                                        marginTop: "14px !important",
                                        height: "22px",
                                        fontSize: "12px",
                                        color: theme.palette.white,
                                        backgroundColor: "rgb(64, 65, 86)"
                                    }
                                }}
                                onClick={this._showDialog}
                            /> */}
                    </Stack>
                </Card.Section>
                <Card.Section
                    styles={{
                        root: {
                            flexBasis: "20%"
                        }
                    }}
                >
                    <Stack verticalAlign="start">
                        <Label styles={airlineInfoStyle.depart.time}>
                            {moment(props.item.ReturnTime).format("LT")}
                        </Label>
                        <Label styles={airlineInfoStyle.depart.date}>
                            {moment(props.item.ReturnTime).format("LL")}
                        </Label>
                        <Label styles={airlineInfoStyle.depart.airport}>{props.item.Return}</Label>
                    </Stack>
                </Card.Section>
                <Card.Section
                    styles={{
                        root: {
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
                        <Label styles={airlineInfoStyle.price.text}>${props.item.TotalMoney}</Label>
                        <PrimaryButton
                            text="Book"
                            onClick={handleBookClick}
                            styles={{
                                root: {
                                    backgroundColor: theme.palette.themeSecondary
                                },
                                rootHovered: {
                                    backgroundColor: theme.palette.themeSecondary,
                                    opacity: "0.8"
                                },
                                rootPressed: {
                                    backgroundColor: theme.palette.themeSecondary
                                }
                            }}
                        />
                    </Stack>
                </Card.Section>
            </Card>

            {/* <Dialog
                    hidden={this.state.hideDialog}
                    onDismiss={this._closeDialog}
                    dialogContentProps={{
                        type: DialogType.largeHeader,
                        title: "Flight Details"
                    }}
                    modalProps={{
                        isBlocking: false,
                        styles: { main: { maxWidth: "fit-content !important" } }
                    }}
                >
                    <Label
                        styles={{
                            root: {
                                fontSize: "16px"
                            }
                        }}
                    >
                        DEPARTURE: LOSANGELES - ISTANBUL
                    </Label>
                    <FlightOnewayDetailItem></FlightOnewayDetailItem>
                    <Stack
                        verticalAlign="center"
                        horizontalAlign="center"
                        styles={{
                            root: {
                                margin: "20px 0",
                                borderRadius: "2px",
                                backgroundColor: "rgb(237, 235, 233)",
                                height: "40px"
                            }
                        }}
                    >
                        <Label>Layover: LHR London | Time: 20h 50m</Label>
                    </Stack>
                    <FlightOnewayDetailItem></FlightOnewayDetailItem>
                    <Separator></Separator>
                    <Label
                        styles={{
                            root: {
                                fontSize: "16px"
                            }
                        }}
                    >
                        RETURNS: ISTANBUL - LOSANGELES
                    </Label>
                    <FlightOnewayDetailItem></FlightOnewayDetailItem>
                    <DialogFooter>
                        <Stack horizontal verticalAlign="end" horizontalAlign="space-between">
                            <Stack verticalAlign="center" horizontalAlign="start">
                                <Label styles={airlineInfoStyle.price.text}>$583</Label>
                                <Label>Total Price</Label>
                            </Stack>
                            <Stack
                                horizontal
                                verticalAlign="space-between"
                                tokens={{
                                    childrenGap: 20
                                }}
                            >
                                <PrimaryButton
                                    onClick={this._closeDialog}
                                    text="Select"
                                    styles={{
                                        root: {
                                            backgroundColor: theme.palette.themeSecondary
                                        },
                                        rootHovered: {
                                            backgroundColor: theme.palette.themeSecondary,
                                            opacity: "0.8"
                                        },
                                        rootPressed: {
                                            backgroundColor: theme.palette.themeSecondary
                                        }
                                    }}
                                />
                                <DefaultButton onClick={this._closeDialog} text="Cancel" />
                            </Stack>
                        </Stack>
                    </DialogFooter>
                </Dialog> */}
        </>
    );
};
