import React, { useCallback } from "react";
import {
    Stack,
    FontIcon,
    DatePicker,
    PrimaryButton,
    Text,
    DefaultButton,
    ChoiceGroup,
    Dropdown,
    IDropdownOption
} from "office-ui-fabric-react";
import { mergeStyles } from "office-ui-fabric-react/lib/Styling";

import { SearchFlightCriteria } from "../../model/SearchFlightCriteria";
import { flightWaysOption } from "../../data/flightWaysOption";
import { adultOptions } from "../../data/adultOptions";
import { childrenOptions } from "../../data/childrenOptions";
import { infantOptions } from "../../data/infantOptions";
import { classTypeOptions } from "../../data/classTypeOptions";
import { fromToOptions } from "../../data/fromToOptions";

const departureIconClass = mergeStyles({
    fontSize: 30,
    color: "#FFFFFF",
    height: 30,
    width: 30,
    transform: "rotate(-45deg)"
});

const returnIconClass = mergeStyles({
    fontSize: 30,
    color: "#FFFFFF",
    height: 30,
    width: 30,
    transform: "rotate(225deg)"
});

const flynameClass = mergeStyles({
    fontSize: 18,
    color: "#FFFFFF"
});

const flytimeClass = mergeStyles({
    fontSize: 18,
    color: "#CCCCCC"
});

type SearchFlightsProps = {
    criteria: SearchFlightCriteria,
    onCriteriaChanges: (criteria: SearchFlightCriteria) => void;
}

export const SearchFlights: React.FunctionComponent<SearchFlightsProps> = ({ criteria, onCriteriaChanges }: SearchFlightsProps) => {
    const handleOnSelectDepartDate = useCallback((date: Date | null | undefined) => {
        onCriteriaChanges({ departDate: date || undefined });
    }, [onCriteriaChanges]);

    const handleOnSelectReturnDate = useCallback((date: Date | null | undefined) => {
        onCriteriaChanges({ returnDate: date || undefined });
    }, [onCriteriaChanges]);

    const handleOnFromChange = useCallback((event: React.FormEvent<HTMLDivElement>, option?: IDropdownOption) => {
        onCriteriaChanges({ from: option ? option.key.toString() : criteria.from });
    }, [criteria.from, onCriteriaChanges]);

    const handleOnToChange = useCallback((event: React.FormEvent<HTMLDivElement>, option?: IDropdownOption) => {
        onCriteriaChanges({ to: option ? option.key.toString() : criteria.to });
    }, [, criteria.to, onCriteriaChanges]);

    const handleOnAdultOptionChange = useCallback((event: React.FormEvent<HTMLDivElement>, option?: IDropdownOption) => {
        onCriteriaChanges({ adults: option ? option.key.toString() : criteria.adults });
    }, [criteria.adults, onCriteriaChanges]);

    const handleOnChildrenOptionChange = useCallback((event: React.FormEvent<HTMLDivElement>, option?: IDropdownOption) => {
        onCriteriaChanges({ children: option ? option.key.toString() : criteria.children });
    }, [criteria.children, onCriteriaChanges]);

    const handleOnInfantOptionChange = useCallback((event: React.FormEvent<HTMLDivElement>, option?: IDropdownOption) => {
        onCriteriaChanges({ infants: option ? option.key.toString() : criteria.infants });
    }, [criteria.infants, onCriteriaChanges]);

    const handleOnClassTypeOptionChange = useCallback((event: React.FormEvent<HTMLDivElement>, option?: IDropdownOption) => {
        onCriteriaChanges({ classType: option ? option.key.toString() : criteria.classType });
    }, [criteria.classType, onCriteriaChanges]);

    const handleSearchFlightsClick = useCallback(() => {
        console.log(criteria);
    }, []);

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
            <Stack
                horizontal
                horizontalAlign="space-between"
                verticalAlign="center"
            >
                <Stack horizontal horizontalAlign="space-between" verticalAlign="center" tokens={{
                    childrenGap: 15
                }}>
                    <FontIcon iconName="Airplane" className={departureIconClass} />
                    <Stack>
                        <Text className={flynameClass}>Los Angeles - Istanbul</Text>
                        <Text className={flytimeClass}>JUN 04, SAT | 2 TRAVELLERS</Text>
                    </Stack>
                </Stack>
                <Stack horizontal horizontalAlign="space-between" verticalAlign="center" tokens={{
                    childrenGap: 15
                }}>
                    <FontIcon iconName="Airplane" className={returnIconClass} />
                    <Stack>
                        <Text className={flynameClass}>Istanbul - Los Angeles</Text>
                        <Text className={flytimeClass}>MAY 27, SAT | 2 TRAVELLERS</Text>
                    </Stack>
                </Stack>
                <Stack>
                    <DefaultButton text="Change" />
                </Stack>
            </Stack>
            <Stack>
                <Stack
                    styles={{
                        root: {
                            marginTop: "20px",
                        }
                    }}
                >
                    <ChoiceGroup
                        defaultSelectedKey="A"
                        options={flightWaysOption}
                        required={true}
                        styles={{
                            flexContainer: {
                                display: "flex"
                            },

                        }}
                        className={mergeStyles({ display: "flex" })}
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
                        <Stack horizontal
                            styles={{
                                root: {
                                    margin: "16px 0"
                                }
                            }}
                        >
                            <Dropdown
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
                        <Stack horizontal
                            styles={{
                                root: {
                                    margin: "16px 0"
                                }
                            }}
                        >
                            <DatePicker
                                placeholder="Depart"
                                className={mergeStyles({
                                    marginRight: '16px',
                                    flexBasis: '50%'
                                })}
                                value={criteria.departDate}
                                onSelectDate={handleOnSelectDepartDate}
                            />
                            <DatePicker
                                placeholder="Return"
                                className={mergeStyles({ flexBasis: '50%' })}
                                value={criteria.returnDate}
                                onSelectDate={handleOnSelectReturnDate}
                            />
                        </Stack>
                        <PrimaryButton
                            text="Search Flights"
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
                            onClick={handleSearchFlightsClick}
                        />
                    </Stack>
                </Stack>

            </Stack>
        </Stack >

    );
};
