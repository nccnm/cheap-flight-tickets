import React from "react";
import { Stack, PrimaryButton } from "office-ui-fabric-react";
import { PassengerInfoForm } from "./PassengerInfoForm";
import { Payment } from "./Payment";
import { Confirmation } from "./Confirmation";
import { theme } from "../../style/theme";
import { Order } from "../../model/Order";
import { Traverller } from "../../model/Traverller";

type PassengerFormProps = {
    order: Order;
    onChange: (order: Order) => void;
};

export const PassengerForm: React.FunctionComponent<PassengerFormProps> = ({ order, onChange }) => {
    const onPassengerInfoForm = (traveller: Traverller) => {
        onChange(order);
    };

    return (
        <Stack
            tokens={{
                childrenGap: 20
            }}
        >
            <PassengerInfoForm order={order} onChange={onPassengerInfoForm}></PassengerInfoForm>
            <Payment></Payment>
            <Confirmation></Confirmation>
            <PrimaryButton
                text="Buy Now"
                styles={{
                    root: {
                        backgroundColor: theme.palette.themeSecondary,
                        width: "160px"
                    },
                    rootHovered: {
                        backgroundColor: theme.palette.themeSecondary,
                        opacity: "0.8"
                    },
                    rootPressed: {
                        backgroundColor: theme.palette.themeSecondary
                    }
                }}
            />
        </Stack>
    );
};
