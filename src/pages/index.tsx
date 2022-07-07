import {
    Box,
    Button,
    Container,
    Divider,
    Flex,
    HStack,
    IconButton,
    Tab,
    TabIndicator,
    TabList,
    TabPanels,
    TabPanel,
    Tabs, Text,
    useBreakpointValue,
} from '@chakra-ui/react'
import * as React from 'react'
import { FiMenu } from 'react-icons/fi'
import { NextPage } from "next";
import { Content } from "../components/Content";
import { Navbar } from "../components/Navbar";

export const App :NextPage = () => {
    const isDesktop = useBreakpointValue({ base: false, lg: true })
    return (
        <Box as="section" height="100vh" overflowY="auto">
            <Navbar />
            {/*<Container pt={{ base: '8', lg: '12' }} pb={{ base: '12', lg: '24' }}>*/}
            {/*    <Content />*/}
            {/*</Container>*/}
        </Box>
    )
}

export default App