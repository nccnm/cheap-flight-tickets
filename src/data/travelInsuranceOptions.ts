import {
    IChoiceGroupOption
} from "office-ui-fabric-react";

export const travelInsuranceOptions: IChoiceGroupOption[] = [
    {
        key: "0",
        text: "No Insurance",
        styles: {
            root: {
                flexBasis: "100%",
                marginTop: "8px !important"
            }
        }
    },
    {
        key: "1", text: "Travel Basic", styles: {
            root: {
                flexBasis: "100%",
                marginLeft: "16px",
                marginTop: "8px !important"
            }
        }
    },
    {
        key: "2", text: "Travel Plus", styles: {
            root: {
                flexBasis: "100%",
                marginLeft: "16px",
                marginTop: "8px !important"
            }
        }
    }
];