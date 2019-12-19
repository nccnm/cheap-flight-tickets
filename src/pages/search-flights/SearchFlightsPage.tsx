import React, { useState, useEffect } from "react";
import { Stack, IStackTokens } from "office-ui-fabric-react";

import { useQuery } from "../../hooks/useQuery";

import { SearchFilter } from "./SearchFilter";
import { SearchResult } from "./SearchResult";
import { SearchFlights } from "./SearchFlights";

import { SearchFlightCriteria } from "../../model/SearchFlightCriteria";
import { FlightDetail } from "../../model/FlightDetail";
import { FlightService } from "../../service/FlightService";

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

export const SearchFlightsPage: React.FunctionComponent = () => {
    const fightService = new FlightService();
    const query = useQuery();
    const [searchFlightCriteria, setSearchFlightCriteria] = useState(getSearchFlightCriteria(query));
    // const [searchResult, setSearchResult] = useState<FlightDetail[]>(fightService.search(searchFlightCriteria));
    const [searchResult, setSearchResult] = useState<FlightDetail[]>([]);

    useEffect(() => {
        fightService.search(searchFlightCriteria).then(function(flights) {
            setSearchResult(flights || []);
        });
    }, []);

    const onCriteriaChanges = (criteria: SearchFlightCriteria) => {
        setSearchFlightCriteria({ ...searchFlightCriteria, ...criteria });
    };

    const onSearchClick = async (criteria: SearchFlightCriteria) => {
        var flights = await fightService.search(criteria);
        setSearchResult(flights);
    };

    return (
        <Stack
            tokens={verticalGapStackTokens}
            verticalAlign="start"
            styles={{
                root: rootStyle.root
            }}
        >
            <SearchFlights
                criteria={searchFlightCriteria}
                onCriteriaChanges={onCriteriaChanges}
                onSearchClick={onSearchClick}
            />
            <Stack
                horizontal
                tokens={{
                    childrenGap: 20
                }}
            >
                <SearchFilter
                    criteria={searchFlightCriteria}
                    onCriteriaChanges={onCriteriaChanges}
                    onSearchClick={onSearchClick}
                />
                <SearchResult result={searchResult} criteria={searchFlightCriteria} />
            </Stack>
        </Stack>
    );
};
