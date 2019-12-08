import React, { useCallback, useState } from "react";
import { Stack, Label, SpinButton, Separator, DefaultButton, PrimaryButton, Checkbox } from "office-ui-fabric-react";
import { Position } from "office-ui-fabric-react/lib/utilities/positioning";
import { theme } from "../../style/theme";
import { SearchFlightCriteria } from "../../model/SearchFlightCriteria";

import { airlines } from "../../data/airlines";

type SearchFlightsProps = {
    criteria: SearchFlightCriteria;
    onCriteriaChanges: (criteria: SearchFlightCriteria) => void;
    onSearchClick: (criteria: SearchFlightCriteria) => void;
};

export const SearchFilter: React.FunctionComponent<SearchFlightsProps> = ({
    criteria,
    onCriteriaChanges,
    onSearchClick
}: SearchFlightsProps) => {
    const [before6am, setBefore6am] = useState(true);
    const [six_am_12am, setSix_am_12am] = useState(true);
    const [twelve_pm_6pm, setTwelve_pm_6pm] = useState(true);
    const [after6pm, setAfter6pm] = useState(true);

    const handleDepartTimeOnClick1 = () => {
        setBefore6am(!before6am);
    };

    const handleDepartTimeOnClick2 = () => {
        setSix_am_12am(!six_am_12am);
    };

    const handleDepartTimeOnClick3 = () => {
        setTwelve_pm_6pm(!twelve_pm_6pm);
    };

    const handleDepartTimeOnClick4 = () => {
        setAfter6pm(!after6pm);
    };

    const handleSearchFlightsClick = () => {
        onSearchClick(criteria);
    };

    return (
        <Stack
            styles={{
                root: {
                    backgroundColor: theme.palette.white,
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
                        backgroundColor: theme.palette.themePrimary,
                        color: theme.palette.white,
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
                    defaultValue="100"
                    label={"From ($):"}
                    labelPosition={Position.top}
                    min={0}
                    max={10000}
                    step={10}
                    incrementButtonAriaLabel={"Increase value by 1"}
                    decrementButtonAriaLabel={"Decrease value by 1"}
                    styles={{
                        label: {
                            fontSize: "12px"
                        }
                    }}
                />
                <SpinButton
                    defaultValue="1000"
                    label={"To ($):"}
                    labelPosition={Position.top}
                    min={0}
                    max={10000}
                    step={10}
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
                    id="Before 6am"
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
                    onClick={handleDepartTimeOnClick1}
                    checked={before6am}
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
                    onClick={handleDepartTimeOnClick2}
                    checked={six_am_12am}
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
                    onClick={handleDepartTimeOnClick3}
                    checked={twelve_pm_6pm}
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
                    onClick={handleDepartTimeOnClick4}
                    checked={after6pm}
                />
                <Separator></Separator>

                {/* <Label
                    styles={{
                        root: {
                            marginBottom: "12px"
                        }
                    }}
                >
                    Stops
                </Label>
                <Stack
                    horizontal
                    tokens={{
                        childrenGap: "12px"
                    }}
                >
                    <DefaultButton text="0" />
                    <DefaultButton checked={true} text="1" />
                    <DefaultButton text="2+" />
                </Stack>
                <Separator></Separator> */}

                <Label
                    styles={{
                        root: {
                            marginBottom: "12px"
                        }
                    }}
                >
                    Airlines
                </Label>
                <Stack
                    tokens={{
                        childrenGap: "12px"
                    }}
                >
                    <Checkbox label="All" />
                    {airlines.map(i => {
                        return <Checkbox key={i} label={i} />;
                    })}
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
                    onClick={handleSearchFlightsClick}
                />
            </Stack>
        </Stack>
    );
};
