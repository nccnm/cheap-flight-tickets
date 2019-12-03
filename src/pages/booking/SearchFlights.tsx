import React from "react";
import { Stack, FontIcon, Text, DefaultButton } from "office-ui-fabric-react";
import { mergeStyles } from "office-ui-fabric-react/lib/Styling";

const iconClass = mergeStyles({
    fontSize: 30,
    color: "#FFFFFF",
    height: 30,
    width: 30
});

const flynameClass = mergeStyles({
    fontSize: 18,
    color: "#FFFFFF"
});

const flytimeClass = mergeStyles({
    fontSize: 18,
    color: "#CCCCCC"
});


export const SearchFlights: React.FunctionComponent = () => {
    return (
        <Stack
            horizontal
            horizontalAlign="space-between"
            verticalAlign="center"
            styles={{
                root: {
                    backgroundColor: "rgb(64, 65, 86)",
                    borderRadius: "6px",
                    marginTop: "0",
                    flexBasis: "80px",
                    padding: "20px"
                }
            }}
        >
            <Stack horizontal horizontalAlign="space-between" verticalAlign="center" gap="15">
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

    );
};
