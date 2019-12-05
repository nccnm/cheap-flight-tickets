import React, { useState } from "react";
import {
    Stack,
    IStackTokens,
} from "office-ui-fabric-react";

import { useQuery } from "../../hooks/useQuery"

import { SearchFilter } from "./SearchFilter";
import { SearchResult } from "./SearchResult";
import { SearchFlights } from "./SearchFlights";

import { SearchFlightCriteria } from "../../model/SearchFlightCriteria";

const rootStyle = {
    root: {
        color: "#605e5c",
        fontSize: "14px",
        width: "1024px"
    }
};

const verticalGapStackTokens: IStackTokens = {
    childrenGap: 20
};

export const SearchFlightsPage: React.FunctionComponent = () => {
    const query = useQuery();
    const [searchFlightCriteria, setSearchFlightCriteria] = useState(getSearchFlightCriteria(query));

    const onCriteriaChanges = (criteria: SearchFlightCriteria) => {
        setSearchFlightCriteria({ ...criteria });
    };

    return (
        <Stack
            tokens={verticalGapStackTokens}
            verticalAlign="start"
            styles={{
                root: rootStyle.root
            }}
        >
            <SearchFlights criteria={searchFlightCriteria} onCriteriaChanges={onCriteriaChanges}></SearchFlights>
            <Stack horizontal gap="20">
                <SearchFilter></SearchFilter>
                <SearchResult></SearchResult>
            </Stack>
        </Stack>
    );
};

function getSearchFlightCriteria(query: any): SearchFlightCriteria {
    const searchFlightCriteria = new SearchFlightCriteria();

    searchFlightCriteria.from = query.get("from") || "0";
    searchFlightCriteria.to = query.get("to") || "1";
    searchFlightCriteria.departDate = query.get("departDate") || undefined;
    searchFlightCriteria.returnDate = query.get("returnDate") || undefined;
    searchFlightCriteria.adults = query.get("adults") || "1";
    searchFlightCriteria.children = query.get("children") || "0";
    searchFlightCriteria.infants = query.get("infants") || "0";
    searchFlightCriteria.classType = query.get("classType") || "0";

    return searchFlightCriteria;
}
