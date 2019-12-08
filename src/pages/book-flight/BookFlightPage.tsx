import React from "react";
import { Stack, Panel, Label, FontWeights } from "office-ui-fabric-react";
import { BrowserRouter as Router, Switch, Route, Link, useParams } from "react-router-dom";

import { FlightSummary } from "./FlightSummary";
import { PassengerForm } from "./PassengerForm";

const rootStyle = {
    root: {
        color: "#605e5c",
        fontSize: "14px",
        width: "1024px"
    }
};

export const BookFlightPage: React.FunctionComponent = () => {
    let { _id } = useParams();

    return (
        <Stack
            verticalAlign="start"
            gap={20}
            styles={{
                root: rootStyle.root
            }}
        >
            <PassengerForm></PassengerForm>
            <Panel headerText="SUMMARY" isBlocking={false} isOpen={true}>
                <FlightSummary></FlightSummary>
            </Panel>
        </Stack>
    );
};
