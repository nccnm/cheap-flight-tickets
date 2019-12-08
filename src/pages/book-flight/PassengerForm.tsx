import React from "react";
import { Stack, PrimaryButton } from "office-ui-fabric-react";
import { PassengerInfoForm } from "./PassengerInfoForm";
import { Payment } from "./Payment";
import { Confirmation } from "./Confirmation";
import { theme } from "../../style/theme";

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
