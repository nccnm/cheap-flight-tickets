import React, { useState } from "react";
import qs from "qs";
import { Stack, Panel } from "office-ui-fabric-react";
import { useLocation } from "react-router-dom";

import { FlightSummary } from "./FlightSummary";
import { PassengerForm } from "./PassengerForm";
import { Order } from "../../model/Order";

import { Traveller } from "../../model/Traverller";

const rootStyle = {
    root: {
        color: "#605e5c",
        fontSize: "14px",
        width: "1024px"
    }
};

export const BookFlightPage: React.FunctionComponent = () => {
    const { search } = useLocation();
    const order = new Order(qs.parse(search.substr(1)));
    const [travellers, setTravellers] = useState<Traveller[]>(order.Travellers);

    const onOrderChange = (order: Order) => {
        setTravellers(order.Travellers);
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
                <FlightSummary travellers={travellers}></FlightSummary>
            </Panel>
        </Stack>
    );
};
