import React from "react";
import {
    Stack,
    Label,
    TextField,
    DatePicker,
    ComboBox,
    IDropdownOption,
    Checkbox,
    SpinButton,
    FontIcon,
    FontWeights,
    FontSizes,
    ChoiceGroup
} from "office-ui-fabric-react";
import { mergeStyles } from "office-ui-fabric-react/lib/Styling";
import { Traveller } from "../../model/Traverller";
import { genderOptions } from "../../data/genderOptions";
import { nationalitiesOptions } from "../../data/nationalitiesOptions";
import { travelInsuranceOptions } from "../../data/travelInsuranceOptions";
import { TravellerResult } from "../../model/OrderValidationResult";

type PassengerInfoFormProps = {
    travellers: Traveller[];
    onChange: (travellers: Traveller[]) => void;
    validation: TravellerResult[];
};

export const PassengerInfoForm: React.FunctionComponent<PassengerInfoFormProps> = ({
    travellers,
    onChange,
    validation
}) => {
    const handleFormElementValueChange = (index, newItem) => {
        travellers[index] = {
            ...travellers[index],
            ...newItem
        };

        onChange([...travellers]);
    };
    const handleCheckedBaggagesValueChange = (value: any, index: number, item: Traveller) => {
        const numberValue = Number(value);
        if (numberValue) {
            if (numberValue <= 10 && numberValue >= 0) {
                handleFormElementValueChange(index, { checkedBaggae: numberValue });
            } else {
                handleFormElementValueChange(index, { checkedBaggae: item.checkedBaggae });
            }
        } else {
            handleFormElementValueChange(index, { checkedBaggae: item.checkedBaggae });
        }
    };

    return (
        <>
            <Stack
                styles={{
                    root: {
                        borderRadius: "4px",
                        padding: "2px",
                        backgroundColor: "#404156"
                    }
                }}
                horizontalAlign="center"
            >
                <Label
                    styles={{
                        root: {
                            fontSize: FontSizes.large,
                            color: "#FFFFFF"
                        }
                    }}
                >
                    Who's Travelling?
                </Label>
            </Stack>
            {travellers.map((item, index) => (
                <Stack
                    key={item.id}
                    styles={{
                        root: {
                            borderRadius: "4px",
                            padding: "24px",
                            backgroundColor: "#FFFFFF"
                        }
                    }}
                    tokens={{
                        childrenGap: 24
                    }}
                >
                    <Stack
                        styles={{
                            root: {}
                        }}
                        horizontal
                        verticalAlign="center"
                    >
                        <Stack
                            styles={{
                                root: {
                                    borderRadius: "4px",
                                    padding: "0px",
                                    backgroundColor: "#404156",
                                    width: "32px",
                                    marginRight: "16px"
                                }
                            }}
                            horizontalAlign="center"
                        >
                            <Label
                                styles={{
                                    root: {
                                        fontSize: FontSizes.large,
                                        color: "#FFFFFF"
                                    }
                                }}
                            >
                                {index + 1}
                            </Label>
                        </Stack>
                        <Label
                            styles={{
                                root: {
                                    fontSize: FontSizes.large,
                                    color: "#404156"
                                }
                            }}
                        >
                            {(item.firstName || "") + " " + (item.lastName || "")}
                        </Label>
                    </Stack>
                    <Stack
                        horizontal
                        verticalAlign="center"
                        styles={{
                            root: {}
                        }}
                    >
                        <Stack
                            styles={{
                                root: {
                                    borderRadius: "2px",
                                    border: "solid 2px #32d095",
                                    flexBasis: "2px",
                                    height: "32px",
                                    marginRight: "16px"
                                }
                            }}
                        />
                        <Label>Personal information</Label>
                    </Stack>
                    <Stack
                        styles={{
                            root: {
                                marginTop: "0px !important"
                            }
                        }}
                    >
                        <Stack
                            horizontal
                            styles={{
                                root: {
                                    marginTop: "8px !important"
                                }
                            }}
                            tokens={{
                                childrenGap: 16
                            }}
                        >
                            <TextField
                                styles={{
                                    root: {
                                        flexBasis: "100%"
                                    }
                                }}
                                label="First Name"
                                value={item.firstName}
                                id="FirstName"
                                errorMessage={validation[index] && validation[index].firstName}
                                required
                                onChange={(event: any, newValue) => {
                                    handleFormElementValueChange(index, { firstName: newValue });
                                }}
                            />
                            <TextField
                                styles={{
                                    root: {
                                        flexBasis: "100%"
                                    }
                                }}
                                label="Last Name"
                                value={item.lastName}
                                id="LastName"
                                errorMessage={validation[index] && validation[index].lastName}
                                required
                                onChange={(event: any, newValue) => {
                                    handleFormElementValueChange(index, { lastName: newValue });
                                }}
                            />
                            <Stack
                                horizontal
                                styles={{
                                    root: {
                                        flexBasis: "100%"
                                    }
                                }}
                                tokens={{
                                    childrenGap: 16
                                }}
                            >
                                <DatePicker
                                    allowTextInput={true}
                                    className={mergeStyles({
                                        flexBasis: "50%"
                                    })}
                                    label="Date of Birth"
                                    id="DateOfBirth"
                                    isRequired={true}
                                    // errorMessage={validation[index] && validation[index].dateOfBirth}
                                    value={item.dateOfBirth}
                                    onSelectDate={(date: any) => {
                                        handleFormElementValueChange(index, { dateOfBirth: date });
                                    }}
                                />
                                <ComboBox
                                    styles={{
                                        container: {
                                            flexBasis: "50%"
                                        }
                                    }}
                                    label="Gender"
                                    id="Gender"
                                    required
                                    errorMessage={validation[index] && validation[index].gender}
                                    options={genderOptions}
                                    allowFreeform
                                    autoComplete="on"
                                    selectedKey={item.gender}
                                    onChange={(event: any, option?: IDropdownOption) => {
                                        handleFormElementValueChange(index, {
                                            gender: option ? option.key : item.gender
                                        });
                                    }}
                                />
                            </Stack>
                        </Stack>
                        <Stack
                            horizontal
                            styles={{
                                root: {
                                    marginTop: "8px !important"
                                }
                            }}
                            tokens={{
                                childrenGap: 16
                            }}
                        >
                            <ComboBox
                                styles={{
                                    container: {
                                        flexBasis: "100%"
                                    }
                                }}
                                label="Nationality"
                                id="Nationality"
                                required
                                errorMessage={validation[index] && validation[index].nationality}
                                options={nationalitiesOptions}
                                allowFreeform
                                autoComplete="on"
                                selectedKey={item.nationality}
                                onChange={(event: any, option?: IDropdownOption) => {
                                    handleFormElementValueChange(index, {
                                        nationality: option ? option.key : item.nationality
                                    });
                                }}
                            />
                            <TextField
                                styles={{
                                    root: {
                                        flexBasis: "100%"
                                    }
                                }}
                                label="Pasport or ID number"
                                value={item.pasportId}
                                id="PasportId"
                                required
                                errorMessage={validation[index] && validation[index].pasportId}
                                onChange={(event: any, newValue) => {
                                    handleFormElementValueChange(index, { pasportId: newValue });
                                }}
                            />
                            <Stack
                                horizontal
                                styles={{
                                    root: {
                                        flexBasis: "100%"
                                    }
                                }}
                                tokens={{
                                    childrenGap: 16
                                }}
                            >
                                <TextField
                                    placeholder="MM"
                                    styles={{
                                        root: {
                                            flexBasis: "100%"
                                        }
                                    }}
                                    label="Expiry Date"
                                    value={item.pasportExpiryDateMonth}
                                    id="PasportExpiryDateMonth"
                                    required
                                    errorMessage={validation[index] && validation[index].pasportExpiryDateMonth}
                                    onChange={(event: any, newValue) => {
                                        handleFormElementValueChange(index, { pasportExpiryDateMonth: newValue });
                                    }}
                                />
                                <TextField
                                    placeholder="YYYY"
                                    styles={{
                                        root: {
                                            flexBasis: "100%"
                                        }
                                    }}
                                    label="Expiry Year"
                                    value={item.pasportExpiryDateYear}
                                    id="PasportExpiryDateYear"
                                    required
                                    errorMessage={validation[index] && validation[index].pasportExpiryDateYear}
                                    onChange={(event: any, newValue) => {
                                        handleFormElementValueChange(index, { pasportExpiryDateYear: newValue });
                                    }}
                                />
                                <Checkbox
                                    styles={{
                                        root: {
                                            flexBasis: "90%",
                                            alignSelf: "center"
                                        }
                                    }}
                                    label="No expiry"
                                    checked={item.pasportNoExpiry}
                                    id="PasportNoExpiry"
                                    onChange={(event: any, checked) => {
                                        handleFormElementValueChange(index, { pasportNoExpiry: checked });
                                    }}
                                />
                            </Stack>
                        </Stack>
                    </Stack>
                    <Stack
                        horizontal
                        verticalAlign="center"
                        styles={{
                            root: {}
                        }}
                    >
                        <Stack
                            styles={{
                                root: {
                                    borderRadius: "2px",
                                    border: "solid 2px #32d095",
                                    flexBasis: "2px",
                                    height: "32px",
                                    marginRight: "16px"
                                }
                            }}
                        />
                        <Label>Baggage</Label>
                    </Stack>
                    <Stack
                        styles={{
                            root: {
                                marginTop: "8px !important"
                            }
                        }}
                    >
                        <Stack
                            horizontal
                            styles={{
                                root: {
                                    marginTop: "8px !important"
                                }
                            }}
                            tokens={{
                                childrenGap: 16
                            }}
                        >
                            <SpinButton
                                styles={{
                                    root: {
                                        flexBasis: "100%"
                                    }
                                }}
                                min={0}
                                max={10}
                                label="Checked Baggages"
                                value={item.checkedBaggae + ""}
                                onChange={(event: any) =>
                                    handleCheckedBaggagesValueChange(event.target.value, index, item)
                                }
                                onBlur={event => handleCheckedBaggagesValueChange(event.target.value, index, item)}
                            />
                            <Stack
                                styles={{
                                    root: {
                                        flexBasis: "100%"
                                    }
                                }}
                            >
                                <Label>$12 per baggage</Label>
                            </Stack>
                            <Stack
                                styles={{
                                    root: {
                                        flexBasis: "100%"
                                    }
                                }}
                            />
                        </Stack>
                    </Stack>
                    <Stack
                        horizontal
                        verticalAlign="center"
                        styles={{
                            root: {}
                        }}
                    >
                        <Stack
                            styles={{
                                root: {
                                    borderRadius: "2px",
                                    border: "solid 2px #32d095",
                                    flexBasis: "2px",
                                    height: "32px",
                                    marginRight: "16px"
                                }
                            }}
                        />
                        <Label>Travel Insurance</Label>
                    </Stack>
                    <Stack
                        styles={{
                            root: {
                                marginTop: "0px !important"
                            }
                        }}
                    >
                        <Stack
                            horizontal
                            styles={{
                                root: {
                                    marginTop: "8px !important"
                                }
                            }}
                            tokens={{
                                childrenGap: 16
                            }}
                        >
                            <ChoiceGroup
                                defaultSelectedKey="0"
                                options={travelInsuranceOptions}
                                required={true}
                                styles={{
                                    root: {
                                        display: "flex",
                                        flexBasis: "100%"
                                    },
                                    flexContainer: {
                                        display: "flex",
                                        flexBasis: "100%"
                                    }
                                }}
                                className={mergeStyles({
                                    display: "flex",
                                    flexBasis: "100%",
                                    flexDirection: "row"
                                })}
                                id="TravelInsurance"
                                selectedKey={item.travelInsurance}
                                onChange={(event: any, checked) => {
                                    handleFormElementValueChange(index, { travelInsurance: checked.key });
                                }}
                            />
                        </Stack>
                        <Stack
                            horizontal
                            styles={{
                                root: {
                                    marginTop: "0px !important"
                                }
                            }}
                            tokens={{
                                childrenGap: 16
                            }}
                        >
                            <Stack
                                styles={{
                                    root: {
                                        flexBasis: "100%"
                                    }
                                }}
                            >
                                <Stack>
                                    <Stack
                                        horizontal
                                        verticalAlign="center"
                                        tokens={{
                                            childrenGap: 4
                                        }}
                                    >
                                        <FontIcon
                                            iconName="Cancel"
                                            className={mergeStyles({ color: "#F21D6B", fontWeight: FontWeights.bold })}
                                        />
                                        <Label>Medical Expenses</Label>
                                    </Stack>
                                    <Stack
                                        horizontal
                                        verticalAlign="center"
                                        tokens={{
                                            childrenGap: 4
                                        }}
                                    >
                                        <FontIcon
                                            iconName="Cancel"
                                            className={mergeStyles({ color: "#F21D6B", fontWeight: FontWeights.bold })}
                                        />
                                        <Label>Trip Cancellation</Label>
                                    </Stack>
                                    <Stack
                                        horizontal
                                        verticalAlign="center"
                                        tokens={{
                                            childrenGap: 4
                                        }}
                                    >
                                        <FontIcon
                                            iconName="Cancel"
                                            className={mergeStyles({ color: "#F21D6B", fontWeight: FontWeights.bold })}
                                        />
                                        <Label>Lost Baggage</Label>
                                    </Stack>
                                    <Stack
                                        horizontal
                                        verticalAlign="center"
                                        tokens={{
                                            childrenGap: 4
                                        }}
                                    >
                                        <FontIcon
                                            iconName="Cancel"
                                            className={mergeStyles({ color: "#F21D6B", fontWeight: FontWeights.bold })}
                                        />
                                        <Label>Air Travel Insurance</Label>
                                    </Stack>
                                    <Stack
                                        horizontal
                                        verticalAlign="center"
                                        tokens={{
                                            childrenGap: 4
                                        }}
                                    >
                                        <FontIcon
                                            iconName="Cancel"
                                            className={mergeStyles({ color: "#F21D6B", fontWeight: FontWeights.bold })}
                                        />
                                        <Label>Liability</Label>
                                    </Stack>
                                </Stack>
                            </Stack>
                            <Stack
                                styles={{
                                    root: {
                                        flexBasis: "100%"
                                    }
                                }}
                            >
                                <Stack>
                                    <Stack
                                        horizontal
                                        verticalAlign="center"
                                        tokens={{
                                            childrenGap: 4
                                        }}
                                    >
                                        <FontIcon
                                            iconName="CheckMark"
                                            className={mergeStyles({ color: "#32d095", fontWeight: FontWeights.bold })}
                                        />
                                        <Label>Medical Expenses</Label>
                                    </Stack>
                                    <Stack
                                        horizontal
                                        verticalAlign="center"
                                        tokens={{
                                            childrenGap: 4
                                        }}
                                    >
                                        <FontIcon
                                            iconName="CheckMark"
                                            className={mergeStyles({ color: "#32d095", fontWeight: FontWeights.bold })}
                                        />
                                        <Label>Trip Cancellation</Label>
                                    </Stack>
                                    <Stack
                                        horizontal
                                        verticalAlign="center"
                                        tokens={{
                                            childrenGap: 4
                                        }}
                                    >
                                        <FontIcon
                                            iconName="Cancel"
                                            className={mergeStyles({ color: "#F21D6B", fontWeight: FontWeights.bold })}
                                        />
                                        <Label>Lost Baggage</Label>
                                    </Stack>
                                    <Stack
                                        horizontal
                                        verticalAlign="center"
                                        tokens={{
                                            childrenGap: 4
                                        }}
                                    >
                                        <FontIcon
                                            iconName="Cancel"
                                            className={mergeStyles({ color: "#F21D6B", fontWeight: FontWeights.bold })}
                                        />
                                        <Label>Air Travel Insurance</Label>
                                    </Stack>
                                    <Stack
                                        horizontal
                                        verticalAlign="center"
                                        tokens={{
                                            childrenGap: 4
                                        }}
                                    >
                                        <FontIcon
                                            iconName="Cancel"
                                            className={mergeStyles({ color: "#F21D6B", fontWeight: FontWeights.bold })}
                                        />
                                        <Label>Liability</Label>
                                    </Stack>
                                </Stack>
                            </Stack>
                            <Stack
                                styles={{
                                    root: {
                                        flexBasis: "100%"
                                    }
                                }}
                            >
                                <Stack>
                                    <Stack
                                        horizontal
                                        verticalAlign="center"
                                        tokens={{
                                            childrenGap: 4
                                        }}
                                    >
                                        <FontIcon
                                            iconName="CheckMark"
                                            className={mergeStyles({ color: "#32d095", fontWeight: FontWeights.bold })}
                                        />
                                        <Label>Medical Expenses</Label>
                                    </Stack>
                                    <Stack
                                        horizontal
                                        verticalAlign="center"
                                        tokens={{
                                            childrenGap: 4
                                        }}
                                    >
                                        <FontIcon
                                            iconName="CheckMark"
                                            className={mergeStyles({ color: "#32d095", fontWeight: FontWeights.bold })}
                                        />
                                        <Label>Trip Cancellation</Label>
                                    </Stack>
                                    <Stack
                                        horizontal
                                        verticalAlign="center"
                                        tokens={{
                                            childrenGap: 4
                                        }}
                                    >
                                        <FontIcon
                                            iconName="CheckMark"
                                            className={mergeStyles({ color: "#32d095", fontWeight: FontWeights.bold })}
                                        />
                                        <Label>Lost Baggage</Label>
                                    </Stack>
                                    <Stack
                                        horizontal
                                        verticalAlign="center"
                                        tokens={{
                                            childrenGap: 4
                                        }}
                                    >
                                        <FontIcon
                                            iconName="CheckMark"
                                            className={mergeStyles({ color: "#32d095", fontWeight: FontWeights.bold })}
                                        />
                                        <Label>Air Travel Insurance</Label>
                                    </Stack>
                                    <Stack
                                        horizontal
                                        verticalAlign="center"
                                        tokens={{
                                            childrenGap: 4
                                        }}
                                    >
                                        <FontIcon
                                            iconName="CheckMark"
                                            className={mergeStyles({ color: "#32d095", fontWeight: FontWeights.bold })}
                                        />
                                        <Label>Liability</Label>
                                    </Stack>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Stack>
                </Stack>
            ))}
        </>
    );
};
