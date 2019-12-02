import React from 'react';
import { Stack, Label, Dropdown, IDropdownOption } from 'office-ui-fabric-react';

const options: IDropdownOption[] = [
    { key: 'price', text: 'Price by Adult' },
    { key: 'departTime', text: 'Depart Time' },
    { key: 'stops', text: 'Stops' },
    { key: 'airlines', text: 'Airlines' }
]

export const SearchResult: React.FunctionComponent = () => {
    return (
        <Stack
            styles={{
                root: {
                    flexBasis: "70%"
                }
            }}
        >
            <Stack
                horizontal
                horizontalAlign="space-between"
            >
                <Label
                    styles={{
                        root: {
                            flexBasis: "50%"
                        }
                    }}
                >
                    565 Results
                </Label>
                <Stack
                    horizontal gap='12px'
                    horizontalAlign="end"
                    styles={{
                        root: {
                            flexBasis: "50%"
                        }
                    }}
                >
                    <Label>Sort by:</Label>
                    <Dropdown
                        defaultSelectedKey="price"
                        options={options}
                        styles={{
                            root: {
                                width: "160px"
                            }
                        }}
                    />
                </Stack>
            </Stack>
            <Stack>
                <Stack>

                </Stack>
            </Stack>
        </Stack>
    );
};