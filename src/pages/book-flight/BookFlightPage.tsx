import React from "react";
import { Stack, Label } from "office-ui-fabric-react";

export const BookFlightPage: React.FunctionComponent = () => {
    return (
        <Stack
            verticalAlign="start"
            tokens={{
                childrenGap: 20
            }}
            // @ts-ignore
            styles={{
                root: {
                    color: "#605e5c",
                    fontSize: "14px",
                    width: "1024px",
                    alignSelf: "center",
                    marginLeft: "0px"
                }
            }}
        >
            <Label>Not Implemented</Label>
        </Stack>
    );
};
