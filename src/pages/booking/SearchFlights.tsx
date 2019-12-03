import React from "react";
import {
    Stack,
    FontIcon,
    DatePicker,
    PrimaryButton,
    Text,
    DefaultButton,
    ChoiceGroup,
    IChoiceGroupOption,
    TextField,
    Dropdown,
    IDropdownOption
} from "office-ui-fabric-react";
import { mergeStyles } from "office-ui-fabric-react/lib/Styling";

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

const chooseGroupClass = mergeStyles({
    display: "flex"
});

const flytimeClass = mergeStyles({
    fontSize: 18,
    color: "#CCCCCC"
});

const datePickerClass1 = mergeStyles({
    marginRight: '16px',
    flexBasis: '50%'
});

const datePickerClass2 = mergeStyles({
    flexBasis: '50%'
});

const optionsFlightWays: IChoiceGroupOption[] = [
    {
        key: 'A',
        text: 'Round Trip',
        styles: {
            choiceFieldWrapper: {
                marginRight: "16px",
                color: "#CCCCCC"
            },
        },
    },
    {
        key: 'B',
        text: 'One Way',
        styles: {
            choiceFieldWrapper: {
                marginRight: "16px",
                color: "#CCCCCC"
            }
        },
    }
]

const options1: IDropdownOption[] = [
    { key: "0", text: "1 Adults" }
];

const options2: IDropdownOption[] = [
    { key: "0", text: "0 Children" }
];

const options3: IDropdownOption[] = [
    { key: "0", text: "0 Infants" }
];

const options4: IDropdownOption[] = [
    { key: "0", text: "Class" }
];


export const SearchFlights: React.FunctionComponent = () => {
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
                <Stack horizontal horizontalAlign="space-between" verticalAlign="center" gap="15">
                    <FontIcon iconName="Airplane" className={departureIconClass} />
                    <Stack>
                        <Text className={flynameClass}>Los Angeles - Istanbul</Text>
                        <Text className={flytimeClass}>JUN 04, SAT | 2 TRAVELLERS</Text>
                    </Stack>
                </Stack>
                <Stack horizontal horizontalAlign="space-between" verticalAlign="center" gap="15">
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

                        options={optionsFlightWays}
                        required={true}
                        styles={{
                            flexContainer: {
                                display: "flex"
                            },

                        }}
                        className={chooseGroupClass}
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
                            <TextField
                                placeholder="From"
                                styles={{
                                    root: {
                                        flexBasis: "50%",
                                        marginRight: "16px"
                                    }
                                }}
                            />
                            <TextField
                                placeholder="To"
                                styles={{
                                    root: {
                                        flexBasis: "50%",
                                        marginRight: "16px"
                                    }
                                }}
                            />
                        </Stack>
                        <Stack horizontal horizontalAlign="space-between">
                            <Dropdown
                                options={options1}
                                selectedKey="0"
                                styles={{
                                    root: {
                                        flexBasis: "25%",
                                        marginRight: "16px"
                                    }
                                }}
                            />
                            <Dropdown
                                options={options2}
                                selectedKey="0"
                                styles={{
                                    root: {
                                        flexBasis: "25%",
                                        marginRight: "16px"
                                    }
                                }}
                            />
                            <Dropdown
                                options={options3}
                                selectedKey="0"
                                styles={{
                                    root: {
                                        flexBasis: "25%",
                                        marginRight: "16px"
                                    }
                                }}
                            />
                            <Dropdown
                                options={options4}
                                selectedKey="0"
                                styles={{
                                    root: {
                                        flexBasis: "25%",
                                        marginRight: "16px"
                                    }
                                }}
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
                                className={datePickerClass1}
                            />
                            <DatePicker
                                placeholder="Return"
                                className={datePickerClass2}
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
                        />
                    </Stack>
                </Stack>

            </Stack>
        </Stack >

    );
};
