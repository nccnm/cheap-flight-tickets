import React, { useState } from "react";
import { Stack, Label, SpinButton, Separator, PrimaryButton, Checkbox, TextField } from "office-ui-fabric-react";
import { Position } from "office-ui-fabric-react/lib/utilities/positioning";
import { theme } from "../../style/theme";
import { SearchFlightCriteria } from "../../model/SearchFlightCriteria";

import { airlines } from "../../data/airlines";

type SearchFlightsProps = {
    criteria: SearchFlightCriteria;
    onCriteriaChanges: (criteria: SearchFlightCriteria) => void;
    onSearchClick: (criteria: SearchFlightCriteria) => void;
};

type AirlinesChecked = {
    airline: string;
    checked: boolean;
};

export const SearchFilter: React.FunctionComponent<SearchFlightsProps> = ({
    criteria,
    onCriteriaChanges,
    onSearchClick
}: SearchFlightsProps) => {
    const [allAirlines, setAllAirlines] = useState<boolean>(false);
    const [selectedAirlines, setSelectedAirlines] = useState<AirlinesChecked[]>(
        airlines.map(a => {
            return {
                airline: a,
                checked: false
            };
        })
    );

    // const [before6am, setBefore6am] = useState(true);
    // const [six_am_12am, setSix_am_12am] = useState(true);
    // const [twelve_pm_6pm, setTwelve_pm_6pm] = useState(true);
    // const [after6pm, setAfter6pm] = useState(true);

    // const handleDepartTimeOnClick1 = () => {
    //     setBefore6am(!before6am);
    // };

    // const handleDepartTimeOnClick2 = () => {
    //     setSix_am_12am(!six_am_12am);
    // };

    // const handleDepartTimeOnClick3 = () => {
    //     setTwelve_pm_6pm(!twelve_pm_6pm);
    // };

    // const handleDepartTimeOnClick4 = () => {
    //     setAfter6pm(!after6pm);
    // };

    const handleFormElementValueChange = newItem => {
        onCriteriaChanges({ ...criteria, ...newItem });
    };

    const handleResetAllFilterClick = () => {
        selectedAirlines.forEach(a => {
            a.checked = false;
        });
        setSelectedAirlines([...selectedAirlines]);

        setAllAirlines(false);

        const newItem = {
            priceFrom: 100,
            priceTo: 1000
        };
        onCriteriaChanges({ ...criteria, ...newItem });
    };

    const handSelectAllAirlines = () => {
        if (!allAirlines) {
            selectedAirlines.forEach(a => {
                a.checked = true;
            });
            setSelectedAirlines([...selectedAirlines]);
        } else {
            selectedAirlines.forEach(a => {
                a.checked = false;
            });
            setSelectedAirlines([...selectedAirlines]);
        }

        setAllAirlines(!allAirlines);
        onCriteriaChanges({ ...criteria, ...{ airlines: [] } });
    };

    const handSelectAirline = (airline: string, index: number) => {
        selectedAirlines[index].checked = !selectedAirlines[index].checked;
        setSelectedAirlines([...selectedAirlines]);
        const selectedAirlinesIsTrue = selectedAirlines.filter(s => s.checked === true);

        if (selectedAirlinesIsTrue) {
            if (selectedAirlinesIsTrue.length < airlines.length) {
                setAllAirlines(false);
            }
            onCriteriaChanges({ ...criteria, ...{ airlines: selectedAirlinesIsTrue.map(a => a.airline) } });
        }
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

                <TextField
                    id="priceFrom"
                    label={"From ($):"}
                    min={0}
                    max={10000}
                    value={criteria.priceFrom + ""}
                    onChange={(event: any, newValue) => {
                        // @ts-ignore
                        newValue = newValue >= 10000 ? criteria.priceFrom : newValue;
                        // @ts-ignore
                        newValue = newValue < 0 ? criteria.priceFrom : newValue;

                        // @ts-ignore
                        if (!isNaN(newValue)) {
                            handleFormElementValueChange({ priceFrom: newValue });
                        }
                    }}
                />
                <TextField
                    id="priceTo"
                    label={"To ($):"}
                    min={0}
                    max={10000}
                    value={criteria.priceTo + ""}
                    onChange={(event: any, newValue) => {
                        // @ts-ignore
                        newValue = newValue >= 10000 ? criteria.priceTo : newValue;
                        // @ts-ignore
                        newValue = newValue < 0 ? criteria.priceTo : newValue;

                        // @ts-ignore
                        if (!isNaN(newValue)) {
                            handleFormElementValueChange({ priceTo: newValue });
                        }
                    }}
                />
                <Separator></Separator>

                {/* <Label
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
                <Separator></Separator> */}

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
                    <Checkbox checked={allAirlines} label="All" onChange={handSelectAllAirlines} />
                    {airlines.map((i, index) => {
                        return (
                            <Checkbox
                                checked={selectedAirlines[index].checked}
                                key={i}
                                label={i}
                                onChange={() => handSelectAirline(i, index)}
                            />
                        );
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
                    onClick={handleResetAllFilterClick}
                />
            </Stack>
        </Stack>
    );
};
