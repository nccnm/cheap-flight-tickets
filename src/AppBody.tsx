import React from 'react';
import { Stack, DefaultButton, FontIcon, Text, Link, FontWeights, SearchBox, IStackStyles, IStackTokens, IStackItemStyles } from 'office-ui-fabric-react';
import { mergeStyles } from 'office-ui-fabric-react/lib/Styling';
import { SearchFilter } from "./pages/booking/SearchFilter";
import { SearchResult } from "./pages/booking/SearchResult";

const rootStyle = {
    root: {
        color: '#605e5c',
        fontSize: "14px",
        width: "1080px"
    }
};

const verticalGapStackTokens: IStackTokens = {
    childrenGap: 20
};

const iconClass = mergeStyles({
    fontSize: 30,
    color: "#FFFFFF",
    height: 30,
    width: 30,
});

const flynameClass = mergeStyles({
    fontSize: 18,
    color: "#FFFFFF"
});

const flytimeClass = mergeStyles({
    fontSize: 18,
    color: "#CCCCCC"
});

export const AppBody: React.FunctionComponent = () => {
    return (
        <Stack
            tokens={verticalGapStackTokens}
            verticalAlign="start"
            styles={{
                root: rootStyle.root
            }}
        >
            <Stack
                horizontal
                horizontalAlign="space-between"
                verticalAlign="center"
                styles={{
                    root: {
                        backgroundColor: "#434459",
                        borderRadius: "6px",
                        marginTop: "0",
                        flexBasis: "80px",
                        padding: "20px"
                    }
                }}
            >
                <Stack
                    horizontal
                    horizontalAlign="space-between"
                    verticalAlign="center"
                    gap="15"
                >
                    <FontIcon iconName="Airplane" className={iconClass} />
                    <Stack>
                        <Text className={flynameClass}>Los Angeles - Istanbul</Text>
                        <Text className={flytimeClass}>JUN 04, SAT | 2 TRAVELLERS</Text>
                    </Stack>
                </Stack>
                <Stack>
                    <DefaultButton text="Change" />
                </Stack>
            </Stack>
            <Stack
                horizontal
                gap="20"
            >
                <SearchFilter></SearchFilter>
                <SearchResult></SearchResult>
            </Stack>
        </Stack>
    );
};