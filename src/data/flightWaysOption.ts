import { IChoiceGroupOption } from "office-ui-fabric-react";

export const flightWaysOption: IChoiceGroupOption[] = [
    {
        key: "1",
        text: "Round Trip",
        styles: {
            choiceFieldWrapper: {
                marginRight: "16px",
                color: "#CCCCCC"
            }
        }
    },
    {
        key: "0",
        text: "One Way",
        styles: {
            choiceFieldWrapper: {
                marginRight: "16px",
                color: "#CCCCCC"
            }
        }
    }
];
