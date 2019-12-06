import React from "react";
import { Stack, PrimaryButton } from "office-ui-fabric-react";
import { PassengerInfoForm } from "./PassengerInfoForm";
import { Payment } from "./Payment";
import { Confirmation } from "./Confirmation";

export const PassengerForm: React.FunctionComponent = () => {
    return (
        <Stack gap={20} styles={{}}>
            <PassengerInfoForm></PassengerInfoForm>
            <Payment></Payment>
            <Confirmation></Confirmation>
            <PrimaryButton
                text="Buy Now"
                styles={{
                    root: {
                        backgroundColor: "rgb(50, 208, 149)",
                        width: "160px"
                    },
                    rootHovered: {
                        backgroundColor: "rgb(50, 208, 149)",
                        opacity: "0.8"
                    },
                    rootPressed: {
                        backgroundColor: "rgb(50, 208, 149)"
                    }
                }}
            />
        </Stack>
    );
};
