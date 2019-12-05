import React from "react";
import {
    Stack,
    IStackTokens,

} from "office-ui-fabric-react";

const rootStyle = {
    root: {
        color: "#605e5c",
        fontSize: "14px",
        width: "1024px"
    }
};

const verticalGapStackTokens: IStackTokens = {
    childrenGap: 20
};

export const HomePage: React.FunctionComponent = () => {
    return (
        <Stack
            tokens={verticalGapStackTokens}
            verticalAlign="start"
            styles={{
                root: rootStyle.root
            }}
        >

            <Stack horizontal gap="20">

                <h2>HomePage</h2>
            </Stack>
        </Stack>
    );
};
