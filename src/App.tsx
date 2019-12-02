import React from 'react';
import { Stack, initializeIcons } from 'office-ui-fabric-react';
import { AppHeader } from "./AppHeader";
import { AppBody } from "./AppBody";
import { AppFooter } from "./AppFooter";

const rootStyle = {
  root: {
    margin: '0 auto',
    color: '#605e5c',
    fontSize: "14px",
    background: "#F2F2F2",
  }
};

initializeIcons();

export const App: React.FunctionComponent = () => {
  return (
    <Stack
      horizontalAlign="center"
      verticalFill
      styles={{
        root: rootStyle.root
      }}
      gap={20}
    >
      <AppHeader></AppHeader>
      <AppBody></AppBody>
      <AppFooter></AppFooter>
    </Stack>
  );
};

