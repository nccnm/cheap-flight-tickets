import React from "react";
import {
    Stack,
    IStackTokens
} from "office-ui-fabric-react";
import { SearchFilter } from "./SearchFilter";
import { SearchResult } from "./SearchResult";
import { SearchFlights } from "./SearchFlights";

const rootStyle = {
    root: {
        color: "#605e5c",
        fontSize: "14px",
        width: "1080px"
    }
};

const verticalGapStackTokens: IStackTokens = {
    childrenGap: 20
};

export const BookingPage: React.FunctionComponent = () => {
    return (
        <Stack
            tokens={verticalGapStackTokens}
            verticalAlign="start"
            styles={{
                root: rootStyle.root
            }}
        >
            <SearchFlights></SearchFlights>
            <Stack horizontal gap="20">
                <SearchFilter></SearchFilter>
                <SearchResult></SearchResult>
            </Stack>
        </Stack>
    );
};
