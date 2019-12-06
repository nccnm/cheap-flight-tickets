import React from "react";
import {
    Stack,
    Label,
    TextField,
    DatePicker,
    Dropdown,
    Checkbox,
    SpinButton,
    FontIcon,
    FontWeights,
    FontSizes,
    Icon
} from "office-ui-fabric-react";
import { mergeStyles } from "office-ui-fabric-react/lib/Styling";

export const PassengerInfoForm: React.FunctionComponent = () => {
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
            {[1, 2].map(item => (
                <Stack
                    key={item}
                    styles={{
                        root: {
                            borderRadius: "4px",
                            padding: "24px",
                            backgroundColor: "#FFFFFF"
                        }
                    }}
                    gap="24px"
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
                                1
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
                            Olivia Davidson
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
                            gap="16px"
                        >
                            <TextField
                                styles={{
                                    root: {
                                        flexBasis: "100%"
                                    }
                                }}
                                label="First Name"
                            />
                            <TextField
                                styles={{
                                    root: {
                                        flexBasis: "100%"
                                    }
                                }}
                                label="Last Name"
                            />
                            <Stack
                                horizontal
                                styles={{
                                    root: {
                                        flexBasis: "100%"
                                    }
                                }}
                                gap="16px"
                            >
                                <DatePicker
                                    allowTextInput={true}
                                    className={mergeStyles({
                                        flexBasis: "50%"
                                    })}
                                    label="Date of Birth"
                                />
                                <Dropdown
                                    styles={{
                                        root: {
                                            flexBasis: "50%"
                                        }
                                    }}
                                    label="Gender"
                                    options={[]}
                                ></Dropdown>
                            </Stack>
                        </Stack>
                        <Stack
                            horizontal
                            styles={{
                                root: {
                                    marginTop: "8px !important"
                                }
                            }}
                            gap="16px"
                        >
                            <Dropdown
                                styles={{
                                    root: {
                                        flexBasis: "100%"
                                    }
                                }}
                                label="Nationality"
                                options={[]}
                            ></Dropdown>
                            <TextField
                                styles={{
                                    root: {
                                        flexBasis: "100%"
                                    }
                                }}
                                label="Pasport or ID number"
                            />
                            <Stack
                                horizontal
                                verticalAlign="end"
                                styles={{
                                    root: {
                                        flexBasis: "100%"
                                    }
                                }}
                                gap="16px"
                            >
                                <TextField
                                    placeholder="MM"
                                    styles={{
                                        root: {
                                            flexBasis: "100%"
                                        }
                                    }}
                                    label="Expiry Date"
                                />
                                <TextField
                                    placeholder="YYYY"
                                    styles={{
                                        root: {
                                            flexBasis: "100%"
                                        }
                                    }}
                                    label=""
                                />
                                <Checkbox
                                    styles={{
                                        root: {
                                            flexBasis: "100%"
                                        }
                                    }}
                                    label="No expiry"
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
                            gap="16px"
                        >
                            <SpinButton
                                styles={{
                                    root: {
                                        flexBasis: "100%"
                                    }
                                }}
                                label="Checked Baggae"
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
                            gap="16px"
                        >
                            <Stack
                                styles={{
                                    root: {
                                        flexBasis: "100%",
                                        marginTop: "8px !important"
                                    }
                                }}
                            >
                                <Checkbox
                                    styles={{
                                        root: {
                                            flexBasis: "100%"
                                        }
                                    }}
                                    label="No Insurance"
                                />
                                <Stack
                                    styles={{
                                        root: {
                                            marginTop: "8px !important"
                                        }
                                    }}
                                >
                                    <Stack horizontal verticalAlign="center" gap="4px">
                                        <FontIcon
                                            iconName="Cancel"
                                            className={mergeStyles({ color: "#F21D6B", fontWeight: FontWeights.bold })}
                                        />
                                        <Label>Medical Expenses</Label>
                                    </Stack>
                                    <Stack horizontal verticalAlign="center" gap="4px">
                                        <FontIcon
                                            iconName="Cancel"
                                            className={mergeStyles({ color: "#F21D6B", fontWeight: FontWeights.bold })}
                                        />
                                        <Label>Trip Cancellation</Label>
                                    </Stack>
                                    <Stack horizontal verticalAlign="center" gap="4px">
                                        <FontIcon
                                            iconName="Cancel"
                                            className={mergeStyles({ color: "#F21D6B", fontWeight: FontWeights.bold })}
                                        />
                                        <Label>Lost Baggage</Label>
                                    </Stack>
                                    <Stack horizontal verticalAlign="center" gap="4px">
                                        <FontIcon
                                            iconName="Cancel"
                                            className={mergeStyles({ color: "#F21D6B", fontWeight: FontWeights.bold })}
                                        />
                                        <Label>Air Travel Insurance</Label>
                                    </Stack>
                                    <Stack horizontal verticalAlign="center" gap="4px">
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
                                <Checkbox
                                    styles={{
                                        root: {
                                            flexBasis: "100%"
                                        }
                                    }}
                                    label="Travel Basic"
                                />
                                <Stack
                                    styles={{
                                        root: {
                                            marginTop: "8px !important"
                                        }
                                    }}
                                >
                                    <Stack horizontal verticalAlign="center" gap="4px">
                                        <FontIcon
                                            iconName="CheckMark"
                                            className={mergeStyles({ color: "#32d095", fontWeight: FontWeights.bold })}
                                        />
                                        <Label>Medical Expenses</Label>
                                    </Stack>
                                    <Stack horizontal verticalAlign="center" gap="4px">
                                        <FontIcon
                                            iconName="CheckMark"
                                            className={mergeStyles({ color: "#32d095", fontWeight: FontWeights.bold })}
                                        />
                                        <Label>Trip Cancellation</Label>
                                    </Stack>
                                    <Stack horizontal verticalAlign="center" gap="4px">
                                        <FontIcon
                                            iconName="Cancel"
                                            className={mergeStyles({ color: "#F21D6B", fontWeight: FontWeights.bold })}
                                        />
                                        <Label>Lost Baggage</Label>
                                    </Stack>
                                    <Stack horizontal verticalAlign="center" gap="4px">
                                        <FontIcon
                                            iconName="Cancel"
                                            className={mergeStyles({ color: "#F21D6B", fontWeight: FontWeights.bold })}
                                        />
                                        <Label>Air Travel Insurance</Label>
                                    </Stack>
                                    <Stack horizontal verticalAlign="center" gap="4px">
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
                                <Checkbox
                                    styles={{
                                        root: {
                                            flexBasis: "100%"
                                        }
                                    }}
                                    label="Travel Plus"
                                />
                                <Stack
                                    styles={{
                                        root: {
                                            marginTop: "8px !important"
                                        }
                                    }}
                                >
                                    <Stack horizontal verticalAlign="center" gap="4px">
                                        <FontIcon
                                            iconName="CheckMark"
                                            className={mergeStyles({ color: "#32d095", fontWeight: FontWeights.bold })}
                                        />
                                        <Label>Medical Expenses</Label>
                                    </Stack>
                                    <Stack horizontal verticalAlign="center" gap="4px">
                                        <FontIcon
                                            iconName="CheckMark"
                                            className={mergeStyles({ color: "#32d095", fontWeight: FontWeights.bold })}
                                        />
                                        <Label>Trip Cancellation</Label>
                                    </Stack>
                                    <Stack horizontal verticalAlign="center" gap="4px">
                                        <FontIcon
                                            iconName="CheckMark"
                                            className={mergeStyles({ color: "#32d095", fontWeight: FontWeights.bold })}
                                        />
                                        <Label>Lost Baggage</Label>
                                    </Stack>
                                    <Stack horizontal verticalAlign="center" gap="4px">
                                        <FontIcon
                                            iconName="CheckMark"
                                            className={mergeStyles({ color: "#32d095", fontWeight: FontWeights.bold })}
                                        />
                                        <Label>Air Travel Insurance</Label>
                                    </Stack>
                                    <Stack horizontal verticalAlign="center" gap="4px">
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
