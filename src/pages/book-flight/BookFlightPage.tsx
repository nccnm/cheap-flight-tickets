import React, { useState, useEffect } from "react";
import qs from "qs";
import { Stack, Panel } from "office-ui-fabric-react";
import { useLocation } from "react-router-dom";

import { PassengerForm } from "./PassengerForm";
import { Order } from "../../model/Order";
import { FlightService } from "../../service/FlightService";
import { OrderValidationResult } from "../../model/OrderValidationResult";
import { FlightSummary } from "./FlightSummary";
import { FlightDetail } from "../../model/FlightDetail";
import { useHistory } from "react-router-dom";

const rootStyle = {
    root: {
        color: "#605e5c",
        fontSize: "14px",
        width: "1024px"
    }
};

const flightService = new FlightService();

export const BookFlightPage: React.FunctionComponent = () => {
    const { search } = useLocation();
    const [order, setOrder] = useState<Order>(new Order(qs.parse(search.substr(1))));
    const [validationResult, setValidationResult] = useState<OrderValidationResult>(new OrderValidationResult());
    const [flight, setFlight] = useState<FlightDetail>(new FlightDetail());

    useEffect(() => {
        flightService.getById(order.flightId).then(function(flight) {
            setFlight(flight);
        });
    }, [order.flightId]);

    let history = useHistory();

    const onOrderChange = (order: Order) => {
        order.travellerViewModels = [...order.travellerViewModels];
        order.paymentViewModel = { ...order.paymentViewModel };
        order.confirmationInfoViewModel = { ...order.confirmationInfoViewModel };

        setOrder({ ...order });
    };

    const onClick = () => {
        const result = flightService.validate(order);

        setValidationResult(result);

        if (result.isValid()) {
            flightService.booking(order).then((result: any) => {
                history.push(`booking-success/?code=${result.Code}`);
            });
        }
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
            <PassengerForm order={order} onChange={onOrderChange} onClick={onClick} validation={validationResult} />
            <Panel headerText="SUMMARY" isBlocking={false} isOpen={true} hasCloseButton={false}>
                <FlightSummary travellers={order.travellerViewModels} flight={flight} />
            </Panel>
        </Stack>
    );
};
