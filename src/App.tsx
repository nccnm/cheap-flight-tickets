import React from "react";
import { initializeIcons } from "office-ui-fabric-react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import { BookingPage } from "./pages/booking/BookingPage";
import { HomePage } from "./pages/home/HomePage";

initializeIcons();

export const App: React.FunctionComponent = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route path="/booking">
                    <BookingPage />
                </Route>
            </Switch>
        </Router>
    );
};
