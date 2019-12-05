import {
    IChoiceGroupOption
} from "office-ui-fabric-react";

export const flightWaysOption: IChoiceGroupOption[] = [
    {
        key: 'A',
        text: 'Round Trip',
        styles: {
            choiceFieldWrapper: {
                marginRight: "16px",
                color: "#CCCCCC"
            },
        },
    },
    {
        key: 'B',
        text: 'One Way',
        styles: {
            choiceFieldWrapper: {
                marginRight: "16px",
                color: "#CCCCCC"
            }
        },
    }
]