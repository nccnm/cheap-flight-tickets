import React from "react";
import {
    Stack, Label, Separator, Image, DefaultButton, PrimaryButton, FontWeights,
    Dialog, DialogType, DialogFooter
} from "office-ui-fabric-react";
import { Card } from "@uifabric/react-cards";
import { FlightOnewayDetailItem } from "./FlightOnewayDetailItem"

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

export interface IDialogLargeHeaderExampleState {
    hideDialog: boolean;
}

export class FlyInfoItem extends React.Component<{}, IDialogLargeHeaderExampleState> {
    public state: IDialogLargeHeaderExampleState = { hideDialog: true };

    private _showDialog = (): void => {
        this.setState({ hideDialog: false });
    };

    private _closeDialog = (): void => {
        this.setState({ hideDialog: true });
    };

    public render() {
        return (
            <>
                <Card
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
                        <Stack
                            horizontal
                            verticalAlign="center"
                            tokens={{
                                childrenGap: 12
                            }} >
                            <Stack>
                                <Image src="http://placehold.it/30x30" />
                            </Stack>
                            <Stack>
                                <Label styles={airlineInfoStyle.airlineName}>American Airlines</Label>
                                <Label styles={airlineInfoStyle.airlineName}>BA-3271</Label>
                            </Stack>
                        </Stack>
                        <Stack horizontal verticalAlign="center" tokens={{
                            childrenGap: 12
                        }}>
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
                                onClick={this._showDialog}
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
                <Dialog
                    hidden={this.state.hideDialog}
                    onDismiss={this._closeDialog}
                    dialogContentProps={{
                        type: DialogType.largeHeader,
                        title: 'Flight Details'
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
                        }}>
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
                    <DialogFooter >
                        <Stack horizontal verticalAlign="end" horizontalAlign="space-between" >
                            <Stack
                                verticalAlign="center"
                                horizontalAlign="start"
                            >
                                <Label styles={airlineInfoStyle.price.text}>$583</Label>
                                <Label>Total Price</Label>
                            </Stack>
                            <Stack horizontal verticalAlign="space-between" tokens={{
                                childrenGap: 20
                            }}>
                                <PrimaryButton
                                    onClick={this._closeDialog}
                                    text="Select"
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
                                <DefaultButton onClick={this._closeDialog} text="Cancel" />
                            </Stack>

                        </Stack>
                    </DialogFooter>
                </Dialog>
            </>
        );


    }
};
