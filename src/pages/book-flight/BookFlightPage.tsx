import React, { useState } from "react";
import qs from "qs";
import { Stack, Panel } from "office-ui-fabric-react";
import { useLocation } from "react-router-dom";

import { PassengerForm } from "./PassengerForm";
import { Order } from "../../model/Order";
import { FlightService } from "../../service/FlightService";
import { OrderValidationResult } from "../../model/OrderValidationResult";

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
    const [validationResult, setValidationResult] = useState<OrderValidationResult>(
        new OrderValidationResult(order.travellerViewModels.length)
    );

    const onOrderChange = (order: Order) => {
        order.travellerViewModels = [...order.travellerViewModels];
        setOrder(order);
    };

    const onClick = () => {
        const fightService = new FlightService();

        fightService.booking(order);
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
            <PassengerForm order={order} onChange={onOrderChange} onClick={onClick} />
            {/* <Panel headerText="SUMMARY" isBlocking={false} isOpen={true}>
                <FlightSummary travellers={travellers} />
            </Panel> */}
        </Stack>
    );
};
