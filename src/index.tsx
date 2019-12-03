import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { FluentCustomizations } from "@uifabric/fluent-theme";
import { Customizer, mergeStyles } from "office-ui-fabric-react";
import * as serviceWorker from "./serviceWorker";
import { loadTheme } from "office-ui-fabric-react/lib/Styling";

loadTheme({
    palette: {
        themePrimary: '#404156',
        themeLighterAlt: '#eff6fc',
        themeLighter: '#deecf9',
        themeLight: '#c7e0f4',
        themeTertiary: '#71afe5',
        themeSecondary: '#2b88d8',
        themeDarkAlt: '#106ebe',
        themeDark: '#005a9e',
        themeDarker: '#004578',
        neutralLighterAlt: '#f8f8f8',
        neutralLighter: '#f4f4f4',
        neutralLight: '#eaeaea',
        neutralQuaternaryAlt: '#dadada',
        neutralQuaternary: '#d0d0d0',
        neutralTertiaryAlt: '#c8c8c8',
        neutralTertiary: '#c2c2c2',
        neutralSecondary: '#858585',
        neutralPrimaryAlt: '#4b4b4b',
        neutralPrimary: '#333333',
        neutralDark: '#272727',
        black: '#1d1d1d',
        white: '#ffffff'
    }
});

// Inject some global styles
mergeStyles({
    selectors: {
        ":global(body), :global(html), :global(#root)": {
            margin: 0,
            padding: 0
        }
    }
});

ReactDOM.render(
    <Customizer {...FluentCustomizations}>
        <App />
    </Customizer>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
