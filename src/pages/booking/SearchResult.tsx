import React from "react";
import {
    Stack,
    Label,
    PrimaryButton,
    Dropdown,
    IDropdownOption,
    Image,
    DefaultButton,
    FontWeights,
    Separator
} from "office-ui-fabric-react";
import { FlyInfoItem } from "./FlyInfoItem";

const options: IDropdownOption[] = [
    { key: "price", text: "Price by Adult" },
    { key: "departTime", text: "Depart Time" },
    { key: "stops", text: "Stops" },
    { key: "airlines", text: "Airlines" }
];



const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

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
                verticalAlign="center"
            // styles={{
            //     root: {
            //         flexBasis: "44px"
            //     }
            // }}
            >
                <Label
                    styles={{
                        root: {
                            flexBasis: "50%",
                            fontSize: "16px"
                        }
                    }}
                >
                    565 Results
                </Label>
                <Stack
                    horizontal
                    gap="12px"
                    horizontalAlign="end"
                    verticalAlign="center"
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
                    {list.map(item => (
                        <FlyInfoItem key={item} ></FlyInfoItem>
                    ))}
                </Stack>
            </Stack>
        </Stack>
    );
};
