import React from "react";
import { Stack, Label, SpinButton, Separator, DefaultButton, PrimaryButton, Checkbox } from "office-ui-fabric-react";
import { Position } from "office-ui-fabric-react/lib/utilities/positioning";

export const SearchFilter: React.FunctionComponent = () => {
    return (
        <Stack
            styles={{
                root: {
                    backgroundColor: "#FFFFFF",
                    borderRadius: "6px 6px 0 0"
                }
            }}
        >
            <Label
                styles={{
                    root: {
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "6px 6px 0 0",
                        backgroundColor: "rgb(64, 65, 86)",
                        color: "#FFFFFF",
                        textAlign: "center",
                        height: "42px"
                    }
                }}
            >
                FILTERS
            </Label>
            <Stack
                styles={{
                    root: {
                        padding: "8px 16px",
                        fontSize: "16px"
                    }
                }}
            >
                <Label>Price Range</Label>
                <SpinButton
                    defaultValue="0"
                    label={"From ($):"}
                    labelPosition={Position.top}
                    min={0}
                    step={1}
                    incrementButtonAriaLabel={"Increase value by 1"}
                    decrementButtonAriaLabel={"Decrease value by 1"}
                    styles={{
                        label: {
                            fontSize: "12px"
                        }
                    }}
                />
                <SpinButton
                    defaultValue="0"
                    label={"To ($):"}
                    labelPosition={Position.top}
                    min={0}
                    step={1}
                    incrementButtonAriaLabel={"Increase value by 1"}
                    decrementButtonAriaLabel={"Decrease value by 1"}
                    styles={{
                        label: {
                            fontSize: "12px"
                        }
                    }}
                />
                <Separator></Separator>

                <Label
                    styles={{
                        root: {
                            marginBottom: "12px"
                        }
                    }}
                >
                    Depart Time
                </Label>

                <DefaultButton
                    text="Before 6am"
                    iconProps={{
                        iconName: "PartlyCloudyDay"
                    }}
                    styles={{
                        root: {
                            width: "100%",
                            margin: "6px 0px"
                        }
                    }}
                />
                <DefaultButton
                    text="6am - 12am"
                    iconProps={{
                        iconName: "Sunny"
                    }}
                    styles={{
                        root: {
                            width: "100%",
                            margin: "6px 0px"
                        }
                    }}
                    checked={true}
                />
                <DefaultButton
                    text="12pm - 6pm"
                    iconProps={{
                        iconName: "CloudWeather"
                    }}
                    styles={{
                        root: {
                            width: "100%",
                            margin: "6px 0px"
                        }
                    }}
                />
                <DefaultButton
                    text="After 6pm"
                    iconProps={{
                        iconName: "PartlyCloudyNight"
                    }}
                    styles={{
                        root: {
                            width: "100%",
                            margin: "6px 0px"
                        }
                    }}
                />
                <Separator></Separator>

                <Label
                    styles={{
                        root: {
                            marginBottom: "12px"
                        }
                    }}
                >
                    Stops
                </Label>
                <Stack horizontal gap="12px">
                    <DefaultButton text="0" />
                    <DefaultButton checked={true} text="1" />
                    <DefaultButton text="2+" />
                </Stack>
                <Separator></Separator>

                <Label
                    styles={{
                        root: {
                            marginBottom: "12px"
                        }
                    }}
                >
                    Airlines
                </Label>
                <Stack gap="12px">
                    <Checkbox label="All" />
                    <Checkbox label="Aeroflot" />
                    <Checkbox label="Air Berlin" defaultChecked />
                    <Checkbox label="Air Canada" />
                    <Checkbox label="Air France" defaultChecked />
                    <Checkbox label="Alitalia" />
                    <Checkbox label="Austrian Airline" />
                </Stack>
                <Separator></Separator>

                <PrimaryButton
                    text="Reset All Filters"
                    styles={{
                        root: {
                            backgroundColor: "#737373"
                        },
                        rootHovered: {
                            backgroundColor: "#737373",
                            opacity: "0.8"
                        },
                        rootPressed: {
                            backgroundColor: "#737373"
                        }
                    }}
                />
            </Stack>
        </Stack>
    );
};
