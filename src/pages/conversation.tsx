import {
    Box,
    Container, HStack, Stack, Text,

} from '@chakra-ui/react'
import * as React from 'react'
import { NextPage } from "next";
import { Navbar } from "../components/Navbar";
import { Viewer, Worker } from "@react-pdf-viewer/core";

export const Conversation :NextPage = () => {
    return (
        <Box as="section" height="100vh" overflowY="hidden" >
            <Navbar/>
            <Container pt={{ base: '4', lg: '6' }} pb={{ base: '6', lg: '12' }}>
                <Box borderWidth={{base: '0', md: '1px'}} p={{base: '0', md: '4'}} borderRadius="lg">
                    <Stack justify="space-between" direction={{base: 'column', md: 'row'}} spacing="5">
                        <HStack spacing="3">

                            <Box fontSize="sm">
                                <audio
                                    controls
                                    src="material.mp3">
                                    Your browser does not support the
                                    <code>audio</code> element.
                                </audio>
                            </Box>
                            <Text>
                                當你讀到第三課時請播放
                            </Text>
                        </HStack>

                    </Stack>
                </Box>
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.14.305/build/pdf.worker.min.js">
                    <div
                        style={{
                            border: '1px solid rgba(0, 0, 0, 0.3)',
                            height: '100vh',
                        }}
                    >
                        <Viewer fileUrl="material.pdf" />
                    </div>
                </Worker>
            </Container>
        </Box>
    )
}

export default Conversation