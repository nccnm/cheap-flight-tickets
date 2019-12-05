import React from "react";
import { Stack } from "office-ui-fabric-react";
import {
    Switch,
    Route,
    useRouteMatch
} from "react-router-dom";

import { AppHeader } from "../../AppHeader";
import { AppFooter } from "../../AppFooter";

import { SearchFlightsPage } from "../../pages/search-flights/SearchFlightsPage";
import { BookFlightPage } from "../../pages/book-flight/BookFlightPage";

const rootStyle = {
    root: {
        margin: "0 auto",
        color: "#605e5c",
        fontSize: "14px",
        background: "#F2F2F2"
    }
};
export const BookingPage: React.FunctionComponent = () => {
    // The `path` lets us build <Route> paths that are
    // relative to the parent route, while the `url` lets
    // us build relative links.
    let { path } = useRouteMatch();

    return (
        <Stack
            horizontalAlign="center"
            verticalFill
            styles={{
                root: rootStyle.root
            }}
            gap={20}
        >
            <AppHeader></AppHeader>
            <Switch>
                <Route path={`${path}/book-flight`}>
                    <BookFlightPage />
                </Route>
                <Route path={`${path}/search-flights`}>
                    <SearchFlightsPage />
                </Route>
            </Switch>
            <AppFooter></AppFooter>
        </Stack>
    );
};
