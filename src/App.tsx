import React, { useState } from "react";

import { initializeIcons } from "office-ui-fabric-react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Stack } from "office-ui-fabric-react";

import { AppHeader } from "./AppHeader";
import { AppFooter } from "./AppFooter";

import { BookFlightPage } from "./pages/book-flight/BookFlightPage";
import { SearchFlightsPage } from "./pages/search-flights/SearchFlightsPage";
import { BookingSuccessPage } from "./pages/booking-success/BookingSuccessPage";

const rootStyle = {
    root: {
        margin: "0 auto",
        color: "#605e5c",
        fontSize: "14px",
        background: "#F2F2F2",
        height: "auto"
    }
};

initializeIcons();

export const App: React.FunctionComponent = () => {
    const [isShowLeftPanel, setIsShowLeftPanel] = useState(false);
    const isMounted = () => {
        setIsShowLeftPanel(!isShowLeftPanel);
    };

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
                <AppHeader isShowLeftPanel={isShowLeftPanel}></AppHeader>
                <Switch>
                    <Route exact path="/">
                        <SearchFlightsPage />
                    </Route>
                    <Route path="/book">
                        <BookFlightPage isMounted={isMounted} />
                    </Route>
                    <Route path="/booking-success">
                        <BookingSuccessPage />
                    </Route>
                </Switch>
                <AppFooter></AppFooter>
            </Stack>
        </Router>
    );
};
