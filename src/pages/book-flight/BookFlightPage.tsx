import React, { useState } from "react";
import qs from "qs";
import { Stack, Panel } from "office-ui-fabric-react";
import { useLocation } from "react-router-dom";

import { FlightSummary } from "./FlightSummary";
import { PassengerForm } from "./PassengerForm";
import { Order } from "../../model/Order";

const rootStyle = {
    root: {
        color: "#605e5c",
        fontSize: "14px",
        width: "1024px"
    }
};

export const BookFlightPage: React.FunctionComponent = () => {
    const { search } = useLocation();
    const [order, setOrder] = useState<Order>(new Order(qs.parse(search.substr(1))));

    const onOrderChange = (order: Order) => {
        console.log(order);
    };

    return (
        <Stack
            verticalAlign="start"
            tokens={{
                childrenGap: 20
            }}
            styles={{
                root: rootStyle.root
            }}
        >
            <PassengerForm order={order} onChange={onOrderChange}></PassengerForm>
            <Panel headerText="SUMMARY" isBlocking={false} isOpen={true}>
                <FlightSummary></FlightSummary>
            </Panel>
        </Stack>
    );
};
