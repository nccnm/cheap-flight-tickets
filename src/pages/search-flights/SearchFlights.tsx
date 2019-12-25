import React, { useCallback } from "react";
import {
    Stack,
    FontIcon,
    DatePicker,
    PrimaryButton,
    Text,
    IChoiceGroupOption,
    ChoiceGroup,
    Dropdown,
    IDropdownOption
} from "office-ui-fabric-react";
import { mergeStyles } from "office-ui-fabric-react/lib/Styling";
import { theme } from "../../style/theme";

import { SearchFlightCriteria } from "../../model/SearchFlightCriteria";
import { flightWaysOption } from "../../data/flightWaysOption";
import { adultOptions } from "../../data/adultOptions";
import { childrenOptions } from "../../data/childrenOptions";
import { infantOptions } from "../../data/infantOptions";
import { classTypeOptions } from "../../data/classTypeOptions";
import { fromToOptions } from "../../data/fromToOptions";

const today: Date = new Date(Date.now());
const minDate: Date = today;

const departureIconClass = mergeStyles({
    fontSize: 30,
    color: "#FFFFFF",
    height: 30,
    width: 30,
    transform: "rotate(-45deg)"
});

// const returnIconClass = mergeStyles({
//     fontSize: 30,
//     color: theme.palette.white,
//     height: 30,
//     width: 30,
//     transform: "rotate(225deg)"
// });

const flynameClass = mergeStyles({
    fontSize: 18,
    color: "#FFFFFF"
});

const flytimeClass = mergeStyles({
    fontSize: 18,
    color: "#CCCCCC"
});

type SearchFlightsProps = {
    criteria: SearchFlightCriteria;
    onCriteriaChanges: (criteria: SearchFlightCriteria) => void;
    onSearchClick: (criteria: SearchFlightCriteria) => void;
};

export const SearchFlights: React.FunctionComponent<SearchFlightsProps> = ({
    criteria,
    onCriteriaChanges,
    onSearchClick
}: SearchFlightsProps) => {
    const handleOnSelectDepartDate = useCallback(
        (date: Date | null | undefined) => {
            onCriteriaChanges({ departDate: date || undefined });
        },
        [onCriteriaChanges]
    );

    const handleOnSelectReturnDate = useCallback(
        (date: Date | null | undefined) => {
            onCriteriaChanges({ returnDate: date || undefined });
        },
        [onCriteriaChanges]
    );

    const handleOnFromChange = useCallback(
        (event: React.FormEvent<HTMLDivElement>, option?: IDropdownOption) => {
            onCriteriaChanges({ from: option ? option.key.toString() : criteria.from });
        },
        [criteria.from, onCriteriaChanges]
    );

    const handleOnToChange = useCallback(
        (event: React.FormEvent<HTMLDivElement>, option?: IDropdownOption) => {
            onCriteriaChanges({ to: option ? option.key.toString() : criteria.to });
        },
        [criteria.to, onCriteriaChanges]
    );

    const handleOnAdultOptionChange = useCallback(
        (event: React.FormEvent<HTMLDivElement>, option?: IDropdownOption) => {
            onCriteriaChanges({ adults: option ? option.key.toString() : criteria.adults });
        },
        [criteria.adults, onCriteriaChanges]
    );

    const handleOnChildrenOptionChange = useCallback(
        (event: React.FormEvent<HTMLDivElement>, option?: IDropdownOption) => {
            onCriteriaChanges({ children: option ? option.key.toString() : criteria.children });
        },
        [criteria.children, onCriteriaChanges]
    );

    const handleOnInfantOptionChange = useCallback(
        (event: React.FormEvent<HTMLDivElement>, option?: IDropdownOption) => {
            onCriteriaChanges({ infants: option ? option.key.toString() : criteria.infants });
        },
        [criteria.infants, onCriteriaChanges]
    );

    const handleOnClassTypeOptionChange = useCallback(
        (event: React.FormEvent<HTMLDivElement>, option?: IDropdownOption) => {
            onCriteriaChanges({ classType: option ? option.key.toString() : criteria.classType });
        },
        [criteria.classType, onCriteriaChanges]
    );

    const handleRoundtripOnChange = useCallback(
        (ev?: React.FormEvent<HTMLElement | HTMLInputElement>, option?: IChoiceGroupOption) => {
            onCriteriaChanges({ roundTrip: option ? parseInt(option.key) : criteria.roundTrip });
        },
        [criteria.roundTrip, onCriteriaChanges]
    );

    const findFromToText = useCallback((key: string) => {
        const from = fromToOptions.find(f => f.key === key);
        return from ? from.text : "";
    }, []);

    const handleSearchFlightsClick = useCallback(() => {
        onSearchClick(criteria);
    }, [criteria, onSearchClick]);

    return (
        <Stack
            styles={{
                root: {
                    backgroundColor: "rgb(64, 65, 86)",
                    borderRadius: "6px",
                    marginTop: "0",
                    padding: "20px"
                }
            }}
        >
            <Stack horizontal horizontalAlign="space-between" verticalAlign="center">
                <Stack
                    horizontal
                    horizontalAlign="space-between"
                    verticalAlign="center"
                    tokens={{
                        childrenGap: 15
                    }}
                >
                    <FontIcon iconName="Airplane" className={departureIconClass} />
                    <Stack className="flight-info ">
                        <Text className={flynameClass}>
                            {findFromToText(criteria.from)} - {findFromToText(criteria.to)}
                        </Text>
                        <Text className={flytimeClass}>
                            {criteria.departDate ? criteria.departDate.toDateString() + " | " : ""}
                            {parseInt(criteria.adults) + parseInt(criteria.children)} TRAVELLERS
                        </Text>
                    </Stack>
                </Stack>
                {/* <Stack
                    horizontal
                    horizontalAlign="space-between"
                    verticalAlign="center"
                    tokens={{
                        childrenGap: 15
                    }}
                >
                    <FontIcon iconName="Airplane" className={returnIconClass} />
                    <Stack>
                        <Text className={flynameClass}>
                            {findFromToText(criteria.to)} - {findFromToText(criteria.from)}
                        </Text>
                        <Text className={flytimeClass}>
                            {criteria.departDate ? criteria.departDate.toDateString() + " | " : ""}
                            {parseInt(criteria.adults) + parseInt(criteria.children)} TRAVELLERS
                        </Text>
                    </Stack>
                </Stack>
                <Stack /> */}
            </Stack>
            <Stack>
                <Stack
                    styles={{
                        root: {
                            marginTop: "20px"
                        }
                    }}
                >
                    <ChoiceGroup
                        defaultSelectedKey="0"
                        options={flightWaysOption}
                        required={true}
                        styles={{
                            flexContainer: {
                                display: "flex"
                            }
                        }}
                        className={mergeStyles({ display: "flex" })}
                        onChange={handleRoundtripOnChange}
                    />
                </Stack>
                <Stack horizontal horizontalAlign="space-between">
                    <Stack
                        styles={{
                            root: {
                                flexBasis: "60%"
                            }
                        }}
                    >
                        <Stack
                            horizontal
                            styles={{
                                root: {
                                    margin: "16px 0"
                                }
                            }}
                        >
                            <Dropdown
                                id="From"
                                placeholder="From"
                                options={fromToOptions}
                                selectedKey={criteria.from}
                                styles={{
                                    root: {
                                        flexBasis: "50%",
                                        marginRight: "16px"
                                    }
                                }}
                                onChange={handleOnFromChange}
                            />
                            <Dropdown
                                id="To"
                                placeholder="To"
                                options={fromToOptions}
                                selectedKey={criteria.to}
                                styles={{
                                    root: {
                                        flexBasis: "50%",
                                        marginRight: "16px"
                                    }
                                }}
                                onChange={handleOnToChange}
                            />
                        </Stack>
                        <Stack horizontal horizontalAlign="space-between">
                            <Dropdown
                                id="Adults"
                                options={adultOptions}
                                selectedKey={criteria.adults}
                                styles={{
                                    root: {
                                        flexBasis: "25%",
                                        marginRight: "16px"
                                    }
                                }}
                                onChange={handleOnAdultOptionChange}
                            />
                            <Dropdown
                                id="Children"
                                options={childrenOptions}
                                selectedKey={criteria.children}
                                styles={{
                                    root: {
                                        flexBasis: "25%",
                                        marginRight: "16px"
                                    }
                                }}
                                onChange={handleOnChildrenOptionChange}
                            />
                            <Dropdown
                                id="Infants"
                                options={infantOptions}
                                selectedKey={criteria.infants}
                                styles={{
                                    root: {
                                        flexBasis: "25%",
                                        marginRight: "16px"
                                    }
                                }}
                                onChange={handleOnInfantOptionChange}
                            />
                            <Dropdown
                                id="classType"
                                options={classTypeOptions}
                                selectedKey={criteria.classType}
                                styles={{
                                    root: {
                                        flexBasis: "25%",
                                        marginRight: "16px"
                                    }
                                }}
                                onChange={handleOnClassTypeOptionChange}
                            />
                        </Stack>
                    </Stack>
                    <Stack
                        styles={{
                            root: {
                                flexBasis: "40%"
                            }
                        }}
                    >
                        <Stack
                            horizontal
                            styles={{
                                root: {
                                    margin: "16px 0"
                                }
                            }}
                        >
                            <DatePicker
                                id="departDate"
                                placeholder="Depart"
                                allowTextInput={true}
                                className={mergeStyles({
                                    marginRight: "16px",
                                    flexBasis: "50%"
                                })}
                                minDate={minDate}
                                value={criteria.departDate}
                                onSelectDate={handleOnSelectDepartDate}
                            />
                            <DatePicker
                                id="returnDate"
                                placeholder="Return"
                                disabled={true}
                                allowTextInput={true}
                                className={mergeStyles({ flexBasis: "50%" })}
                                value={criteria.returnDate}
                                onSelectDate={handleOnSelectReturnDate}
                            />
                        </Stack>
                        <PrimaryButton
                            text="Search Flights"
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
                            onClick={handleSearchFlightsClick}
                        />
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    );
};
