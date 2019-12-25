import React, { useState } from "react";
import { Stack, FontIcon, Link, FontWeights, Label, Separator, Dialog, DialogType } from "office-ui-fabric-react";
import { SearchBox } from "office-ui-fabric-react/lib/SearchBox";
import { mergeStyles } from "office-ui-fabric-react/lib/Styling";
import { FlightService } from "./service/FlightService";
import { useHistory } from "react-router-dom";

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
    const rootStyleHeader1 = {
        backgroundColor: "rgb(64, 65, 86)",
        width: "100%",
        justifyContent: "center"
    };
    const rootStyleHeader2 = {
        backgroundColor: "rgb(255, 255, 255);",
        width: "100%",
        marginTop: "0 !important",
        justifyContent: "center"
    };
    const [hideDialog, setHideDialog] = useState(true);

    const showDialog = (): void => {
        setHideDialog(!hideDialog);
    };

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
                        <Dialog
                            hidden={hideDialog}
                            onDismiss={showDialog}
                            dialogContentProps={{
                                type: DialogType.normal,
                                title: "Please try again!",
                                closeButtonAriaLabel: "Close",
                                subText: "The code you entered is invalid"
                            }}
                            modalProps={{
                                isBlocking: false,
                                styles: { main: { maxWidth: 450 } }
                            }}
                        ></Dialog>
                    </Stack>
                </Stack>
            </Stack>
        </>
    );
};
