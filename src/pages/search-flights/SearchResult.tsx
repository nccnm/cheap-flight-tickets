import React, { useCallback } from "react";
import { Stack, Label, Dropdown, IDropdownOption } from "office-ui-fabric-react";
import { FlyInfoItem } from "./FlyInfoItem";
import { FlightDetail } from "../../model/FlightDetail";
import { SearchFlightCriteria } from "../../model/SearchFlightCriteria";

const options: IDropdownOption[] = [
    { key: "TotalMoney", text: "Price by Adult" },
    { key: "DepartTime", text: "Depart Time" }
];

type SearchResultProp = {
    result: FlightDetail[];
    criteria: SearchFlightCriteria;
    onCriteriaChanges: (criteria: SearchFlightCriteria) => void;
};

export const SearchResult: React.FunctionComponent<SearchResultProp> = ({ result, criteria, onCriteriaChanges }) => {
    const handleSortOnchange = useCallback(
        (event: React.FormEvent<HTMLDivElement>, option?: IDropdownOption) => {
            onCriteriaChanges({ orderBy: option ? option.key.toString() : criteria.orderBy });
        },
        [criteria.orderBy, onCriteriaChanges]
    );

    return (
        <Stack
            styles={{
                root: {
                    flexBasis: "80%"
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
                    {result.length} Results
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
                        id="SortBy"
                        defaultSelectedKey="TotalMoney"
                        options={options}
                        styles={{
                            root: {
                                width: "160px"
                            }
                        }}
                        onChange={handleSortOnchange}
                    />
                </Stack>
            </Stack>
            <Stack>
                <Stack>
                    {result.map(item => (
                        <FlyInfoItem key={item.id} item={item} criteria={criteria} />
                    ))}
                </Stack>
            </Stack>
        </Stack>
    );
};
