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
import { OrderResult, OrderValidationResult } from "../../model/OrderValidationResult";

type PassengerFormProps = {
    order: Order;
    onChange: (order: Order) => void;
    onClick: () => void;
    validation: OrderValidationResult;
};

export const PassengerForm: React.FunctionComponent<PassengerFormProps> = ({
    order,
    onChange,
    onClick,
    validation
}) => {
    const handlePassengerInfoFormOnChange = (travellers: Traveller[]) => {
        order.travellerViewModels = travellers;
        onChange(order);
    };

    const handlePaymentOnChange = (payment: PaymentInfo) => {
        order.paymentViewModel = payment;
        onChange(order);
    };

    const handleConfirmationOnChange = (confirmation: ConfirmationInfo) => {
        order.confirmationInfoViewModel = confirmation;
        onChange(order);
    };

    const handleBuyNowClick = () => {
        onClick();
    };

    return (
        <Stack
            tokens={{
                childrenGap: 20
            }}
        >
            <PassengerInfoForm
                travellers={order.travellerViewModels}
                onChange={handlePassengerInfoFormOnChange}
                validation={validation.result.travellerViewModels}
            />
            <Payment
                payment={order.paymentViewModel}
                onChange={handlePaymentOnChange}
                validation={validation.result.paymentViewModel}
            />
            <Confirmation
                confirmation={order.confirmationInfoViewModel}
                onChange={handleConfirmationOnChange}
                validation={validation.result.confirmationInfoViewModel}
            />
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
