import React from "react";
import { Stack, Label, Dropdown, IDropdownOption } from "office-ui-fabric-react";
import { FlyInfoItem } from "./FlyInfoItem";
import { FlightDetail } from "../../model/FlightDetail";

const options: IDropdownOption[] = [
    { key: "price", text: "Price by Adult" },
    { key: "departTime", text: "Depart Time" },
    // { key: "stops", text: "Stops" },
    { key: "airlines", text: "Airlines" }
];

type SearchResultProp = {
    result: FlightDetail[];
};

export const SearchResult: React.FunctionComponent<SearchResultProp> = (props: SearchResultProp) => {
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
                    {props.result.length} Results
                </Label>
                <Stack
                    horizontal
                    tokens={{
                        childrenGap: "12px"
                    }}
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
                    {props.result.map(item => (
                        <FlyInfoItem key={item._id} item={item}></FlyInfoItem>
                    ))}
                </Stack>
            </Stack>
        </Stack>
    );
};
