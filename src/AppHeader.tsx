import React, { useState, useEffect } from "react";
import { Stack, FontIcon, Link, FontWeights, Label, Separator } from "office-ui-fabric-react";
import { SearchBox } from "office-ui-fabric-react/lib/SearchBox";
import { mergeStyles } from "office-ui-fabric-react/lib/Styling";
import { useWindowWidth } from "./hooks/useWindowWidth";

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

type AppHeaderProps = {
    isShowLeftPanel: boolean;
};

export const AppHeader: React.FunctionComponent<AppHeaderProps> = ({ isShowLeftPanel }) => {
    const width = useWindowWidth();
    const isBigScreen = () => !isShowLeftPanel || width >= 1800;
    const [rootStyleHeader1, setRootStyleHeader1] = useState({
        backgroundColor: "rgb(64, 65, 86)",
        width: "100%",
        justifyContent: isBigScreen() ? "center" : "start",
        paddingLeft: isBigScreen() ? "0px" : (width - 1024 - 340) / 2 + "px"
    });
    const [rootStyleHeader2, setRootStyleHeader2] = useState({
        backgroundColor: "rgb(255, 255, 255);",
        width: "100%",
        marginTop: "0 !important",
        justifyContent: isBigScreen() ? "center" : "start",
        paddingLeft: isBigScreen() ? "0px" : (width - 1024 - 340) / 2 + "px"
    });

    useEffect(() => {
        const handleResize = () => {
            if (!isBigScreen()) {
                const newStyle = {
                    justifyContent: isBigScreen() ? "center" : "start",
                    paddingLeft: (width - 1024 - 340) / 2 + "px"
                };
                setRootStyleHeader1({ ...rootStyleHeader1, ...newStyle });
                setRootStyleHeader2({ ...rootStyleHeader2, ...newStyle });
            } else {
                const newStyle = { alignSelf: "center" };
                setRootStyleHeader1({ ...rootStyleHeader1, ...newStyle });
                setRootStyleHeader2({ ...rootStyleHeader2, ...newStyle });
            }
        };
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    });

    return (
        <>
            <Stack
                horizontal
                tokens={{
                    childrenGap: 15
                }}
                horizontalAlign="center"
                //@ts-ignore
                styles={{
                    root: rootStyleHeader1
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
                        <Separator
                            vertical
                            styles={{
                                root: {
                                    marginRight: "22px",
                                    marginLeft: "22px"
                                }
                            }}
                        />
                        <FontIcon iconName="Lock" className={iconClass} />
                        <Link
                            styles={{
                                root: {
                                    fontSize: "12px",
                                    color: "rgb(255, 255, 255);"
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
                tokens={{
                    childrenGap: 15
                }}
                horizontalAlign="center"
                // @ts-ignore
                styles={{
                    root: rootStyleHeader2
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
                    <Stack horizontal horizontalAlign="start" verticalAlign="center">
                        <Link
                            href="/"
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
                            href="/"
                            styles={{
                                root: {
                                    fontSize: "28px",
                                    fontWeight: FontWeights.bold,
                                    color: "rgb(46, 47, 65)",
                                    marginRight: "22px"
                                }
                            }}
                        >
                            HaiLua AirLine
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
