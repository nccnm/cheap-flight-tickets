import React from "react";
import { Stack, PrimaryButton } from "office-ui-fabric-react";
import { PassengerInfoForm } from "./PassengerInfoForm";
import { Payment } from "./Payment";
import { Confirmation } from "./Confirmation";
import { theme } from "../../style/theme";
import { Order } from "../../model/Order";
import { Traveller } from "../../model/Traverller";
import { PaymentInfo } from "../../model/PaymentInfo";
import { ConfirmationInfo } from "../../model/ConfirmationInfo";

type PassengerFormProps = {
    order: Order;
    onChange: (order: Order) => void;
};

export const PassengerForm: React.FunctionComponent<PassengerFormProps> = ({ order, onChange }) => {
    const handlePassengerInfoFormOnChange = (travellers: Traveller[]) => {
        order.Travellers = travellers;
        onChange(order);
    };

    const handlePaymentOnChange = (payment: PaymentInfo) => {
        order.Payment = payment;
        onChange(order);
    };

    const handleConfirmationOnChange = (confirmation: ConfirmationInfo) => {
        order.Confirmation = confirmation;
        onChange(order);
    };

    const handleBuyNowClick = () => {
        console.log(order);
    };

    return (
        <Stack
            tokens={{
                childrenGap: 20
            }}
        >
            <PassengerInfoForm
                travellers={order.Travellers}
                onChange={handlePassengerInfoFormOnChange}
            ></PassengerInfoForm>
            <Payment payment={order.Payment} onChange={handlePaymentOnChange}></Payment>
            <Confirmation confirmation={order.Confirmation} onChange={handleConfirmationOnChange}></Confirmation>
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
                onClick={handleBuyNowClick}
            />
        </Stack>
    );
};
