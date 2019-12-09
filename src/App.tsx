import React from "react";
import { initializeIcons } from "office-ui-fabric-react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Stack } from "office-ui-fabric-react";

import { AppHeader } from "./AppHeader";
import { AppFooter } from "./AppFooter";

import { BookFlightPage } from "./pages/book-flight/BookFlightPage";
import { SearchFlightsPage } from "./pages/search-flights/SearchFlightsPage";

const rootStyle = {
    root: {
        margin: "0 auto",
        color: "#605e5c",
        fontSize: "14px",
        background: "#F2F2F2"
    }
};

initializeIcons();

export const App: React.FunctionComponent = () => {
    return (
        <Router>
            <Stack
                horizontalAlign="center"
                verticalFill
                styles={{
                    root: rootStyle.root
                }}
                tokens={{
                    childrenGap: 20
                }}
            >
                <AppHeader></AppHeader>
                <Switch>
                    <Route exact path="/">
                        <SearchFlightsPage />
                    </Route>
                    <Route path="/book">
                        <BookFlightPage />
                    </Route>
                </Switch>
                <AppFooter></AppFooter>
            </Stack>
        </Router>
    );
};
