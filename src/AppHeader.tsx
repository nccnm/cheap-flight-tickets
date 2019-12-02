import React from 'react';
import { Stack, Text, Link, FontWeights } from 'office-ui-fabric-react';
import { SearchBox } from 'office-ui-fabric-react/lib/SearchBox';

export const AppHeader: React.FunctionComponent = () => {
    return (
        <>
            <Stack horizontal gap={15} horizontalAlign="center">
                <Stack horizontal gap={15} disableShrink styles={{
                    root: {
                        margin: '0 auto',
                        color: '#605e5c'
                    }
                }}>
                    <Link href="#">555-555-555555</Link>
                    <Link href="#">Facebook</Link>
                    <Link href="#">Twitter</Link>
                </Stack>
                <Stack horizontal gap={15} disableShrink styles={{
                    root: {
                        margin: '0 auto',
                        color: '#605e5c'
                    }
                }}>
                    <Link href="#">
                        Register
        </Link>
                    <Link href="#">
                        Login
        </Link>
                    <Link href="#">
                        USD
        </Link>
                </Stack>
            </Stack>
            <Stack
                horizontal gap={15}
                horizontalAlign="center"
                styles={{
                    root: {
                        flexBasis: "40px"
                    }
                }}
            >
                <Link href="#">Home</Link>
                <Link href="#"></Link>
                <Link href="#"></Link>
                <Text>  Fly Plan</Text>
                <SearchBox
                    placeholder="Search"
                    onSearch={(newValue: any) => console.log('value is ' + newValue)}
                    onFocus={() => console.log('onFocus called')}
                    onBlur={() => console.log('onBlur called')}
                    onChange={() => console.log('onChange called')}
                />
            </Stack>
        </>
    );
};