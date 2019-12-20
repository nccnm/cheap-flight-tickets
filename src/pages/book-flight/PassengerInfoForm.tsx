import React, { useState } from "react";
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

type PassengerInfoFormProps = {
    travellers: Traveller[];
    onChange: (travellers: Traveller[]) => void;
};

export const PassengerInfoForm: React.FunctionComponent<PassengerInfoFormProps> = ({ travellers, onChange }) => {
    const [localTravellers, setLocalTravellers] = useState<Traveller[]>(travellers);
    const handleFormElementValueChange = (index, newItem) => {
        localTravellers[index] = {
            ...localTravellers[index],
            ...newItem
        };

        setLocalTravellers([...localTravellers]);

        onChange(localTravellers);
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
            {localTravellers.map((item, index) => (
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
                            {item.FirstName + " " + item.LastName}
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
                        ></Stack>
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
                                value={item.FirstName}
                                id="FirstName"
                                onChange={(event: any, newValue) => {
                                    handleFormElementValueChange(index, { FirstName: newValue });
                                }}
                            />
                            <TextField
                                styles={{
                                    root: {
                                        flexBasis: "100%"
                                    }
                                }}
                                label="Last Name"
                                value={item.LastName}
                                id="LastName"
                                onChange={(event: any, newValue) => {
                                    handleFormElementValueChange(index, { LastName: newValue });
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
                                    value={item.DateOfBirth}
                                    onSelectDate={(date: any) => {
                                        handleFormElementValueChange(index, { DateOfBirth: date });
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
                                    options={genderOptions}
                                    allowFreeform
                                    autoComplete="on"
                                    selectedKey={item.Gender}
                                    onChange={(event: any, option?: IDropdownOption) => {
                                        handleFormElementValueChange(index, {
                                            Gender: option ? option.key : item.Gender
                                        });
                                    }}
                                ></ComboBox>
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
                                options={nationalitiesOptions}
                                allowFreeform
                                autoComplete="on"
                                selectedKey={item.Nationality}
                                onChange={(event: any, option?: IDropdownOption) => {
                                    handleFormElementValueChange(index, {
                                        Nationality: option ? option.key : item.Nationality
                                    });
                                }}
                            ></ComboBox>
                            <TextField
                                styles={{
                                    root: {
                                        flexBasis: "100%"
                                    }
                                }}
                                label="Pasport or ID number"
                                value={item.PasportId}
                                id="PasportId"
                                onChange={(event: any, newValue) => {
                                    handleFormElementValueChange(index, { PasportId: newValue });
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
                                    value={item.PasportExpiryDateMonth}
                                    id="PasportExpiryDateMonth"
                                    onChange={(event: any, newValue) => {
                                        handleFormElementValueChange(index, { PasportExpiryDateMonth: newValue });
                                    }}
                                />
                                <TextField
                                    placeholder="YYYY"
                                    styles={{
                                        root: {
                                            flexBasis: "100%"
                                        }
                                    }}
                                    label="&nbsp;"
                                    value={item.PasportExpiryDateYear}
                                    id="PasportExpiryDateYear"
                                    onChange={(event: any, newValue) => {
                                        handleFormElementValueChange(index, { PasportExpiryDateYear: newValue });
                                    }}
                                />
                                <Checkbox
                                    styles={{
                                        root: {
                                            flexBasis: "100%",
                                            alignSelf: "center"
                                        }
                                    }}
                                    label="No expiry"
                                    checked={item.PasportNoExpiry}
                                    id="PasportNoExpiry"
                                    onChange={(event: any, checked) => {
                                        handleFormElementValueChange(index, { PasportNoExpiry: checked });
                                    }}
                                ></Checkbox>
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
                        ></Stack>
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
                                value={item.CheckedBaggae}
                                onChange={(event: any) => {
                                    const numberValue = Number(event.target.value);
                                    if (numberValue) {
                                        if (numberValue <= 10 && numberValue >= 0) {
                                            handleFormElementValueChange(index, { CheckedBaggae: event.target.value });
                                        } else {
                                            handleFormElementValueChange(index, { CheckedBaggae: item.CheckedBaggae });
                                        }
                                    } else {
                                        handleFormElementValueChange(index, { CheckedBaggae: item.CheckedBaggae });
                                    }
                                }}
                                onBlur={(event: any) => {
                                    const numberValue = Number(event.target.value);
                                    if (numberValue) {
                                        if (numberValue <= 10 && numberValue >= 0) {
                                            handleFormElementValueChange(index, { CheckedBaggae: event.target.value });
                                        } else {
                                            handleFormElementValueChange(index, { CheckedBaggae: item.CheckedBaggae });
                                        }
                                    } else {
                                        handleFormElementValueChange(index, { CheckedBaggae: item.CheckedBaggae });
                                    }
                                }}
                            />
                            <Stack
                                styles={{
                                    root: {
                                        flexBasis: "100%"
                                    }
                                }}
                            ></Stack>
                            <Stack
                                styles={{
                                    root: {
                                        flexBasis: "100%"
                                    }
                                }}
                            ></Stack>
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
                        ></Stack>
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
                                selectedKey={item.TravelInsurance}
                                onChange={(event: any, checked) => {
                                    handleFormElementValueChange(index, { TravelInsurance: checked.key });
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
