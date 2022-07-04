import { NextPage } from "next";
import { Box, Container, Text, Center, useColorModeValue, Stack, Square, Icon, HStack, Button } from "@chakra-ui/react";
import { Navbar } from "../components/Navbar";
import * as React from "react";
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { FiFileText } from "react-icons/fi";


const Recording: NextPage = () => {


    return (
        <Box as="section" height="100vh" overflowY="hidden">
            <Navbar/>
            <Box as="section" py={{base: '4', md: '8'}}>
                <Container maxW="3xl">
                    <Box
                        bg="bg-surface"
                        boxShadow={useColorModeValue('sm', 'sm-dark')}
                        borderRadius="lg"
                        p={{base: '4', md: '6'}}
                    >
                        <Stack spacing="5">
                            <Stack spacing="1">
                                <Text fontSize="lg" fontWeight="medium">
                                    第三課 課文對話
                                </Text>
                                <Text fontSize="sm" color="muted">
                                    安全至上，安全第一
                                </Text>
                            </Stack>
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
                                    </HStack>

                                </Stack>
                            </Box>
                        </Stack>
                    </Box>
                </Container>
            </Box>
        </Box>
    )
}

export default Recording;


