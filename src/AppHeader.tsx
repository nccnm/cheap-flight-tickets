import React from "react";
import { Stack, FontIcon, Link, FontWeights, Label, Separator } from "office-ui-fabric-react";
import { SearchBox } from "office-ui-fabric-react/lib/SearchBox";
import { mergeStyles } from "office-ui-fabric-react/lib/Styling";

const iconClass = mergeStyles({
    fontSize: 12,
    color: "rgb(255, 255, 255);",
    margin: "7px"
});

const iconLogo = mergeStyles({
    fontSize: 32,
    color: "rgb(50, 208, 149);",
    margin: "6px 12px"
});

export const AppHeader: React.FunctionComponent = () => {
    return (
        <>
            <Stack
                horizontal
                gap={15}
                horizontalAlign="center"
                styles={{
                    root: {
                        backgroundColor: "rgb(64, 65, 86)",
                        width: "100%"
                    }
                }}
            >
                <Stack
                    horizontal
                    horizontalAlign="space-between"
                    styles={{
                        root: {
                            padding: "6px",
                            width: "1024px"
                        }
                    }}
                >
                    <Stack horizontal horizontalAlign="center">
                        <FontIcon iconName="Phone" className={iconClass} />
                        <Label
                            styles={{
                                root: {
                                    fontSize: "11px",
                                    fontWeight: FontWeights.bold,
                                    color: "rgb(255, 255, 255);"
                                }
                            }}
                        >
                            555-555-5555
                        </Label>
                    </Stack>

                    <Stack horizontal>
                        <FontIcon iconName="AddFriend" className={iconClass} />
                        <Link
                            styles={{
                                root: {
                                    fontSize: "12px",
                                    color: "rgb(255, 255, 255);",
                                    margin: "0px 22px"
                                }
                            }}
                        >
                            Register
                        </Link>
                        <Separator vertical
                            styles={{
                                root: {
                                    marginRight: "22px",
                                    marginLeft: "22px"
                                }
                            }}
                        ></Separator>
                        <FontIcon iconName="Lock" className={iconClass} />
                        <Link
                            styles={{
                                root: {
                                    fontSize: "12px",
                                    color: "rgb(255, 255, 255);",
                                }
                            }}
                        >
                            Login
                        </Link>
                    </Stack>
                </Stack>
            </Stack>
            <Stack
                horizontal
                gap={15}
                horizontalAlign="center"
                styles={{
                    root: {
                        backgroundColor: "rgb(255, 255, 255);",
                        width: "100%",
                        marginTop: "0 !important"
                    }
                }}
            >
                <Stack
                    horizontal
                    horizontalAlign="space-between"
                    styles={{
                        root: {
                            paddingTop: "20px",
                            paddingBottom: "20px",
                            width: "1024px"
                        }
                    }}
                >
                    <Stack horizontal horizontalAlign="start">
                        <Link
                            styles={{
                                root: {
                                    fontSize: "16px",
                                    fontWeight: FontWeights.bold,
                                    color: "rgb(50, 208, 149);",
                                    marginRight: "22px"
                                }
                            }}
                        >
                            Home
                        </Link>
                        <Link
                            styles={{
                                root: {
                                    fontSize: "16px",
                                    fontWeight: FontWeights.bold,
                                    color: "rgb(115, 115, 115)",
                                    marginRight: "22px"
                                }
                            }}
                        >
                            News
                        </Link>
                        <Link
                            styles={{
                                root: {
                                    fontSize: "16px",
                                    fontWeight: FontWeights.bold,
                                    color: "rgb(115, 115, 115)",
                                    marginRight: "22px"
                                }
                            }}
                        >
                            Blog
                        </Link>
                    </Stack>
                    <Stack horizontal verticalAlign="center">
                        <FontIcon iconName="AirTickets" className={iconLogo} />

                        <Link
                            styles={{
                                root: {
                                    fontSize: "28px",
                                    fontWeight: FontWeights.bold,
                                    color: "rgb(46, 47, 65)",
                                    marginRight: "22px"
                                }
                            }}
                        >
                            flyplan
                        </Link>
                    </Stack>
                    <Stack verticalAlign="center">
                        <SearchBox placeholder="Search" />
                    </Stack>
                </Stack>
            </Stack>
        </>
    );
};
