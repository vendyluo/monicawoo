import {
    Avatar,
    Box,
    Button,
    ButtonGroup,
    Container,
    Flex,
    HStack,
    useBreakpointValue,
    useColorModeValue,
    useDisclosure,
} from '@chakra-ui/react'
import Link from 'next/link'
import * as React from 'react'
import { FiHelpCircle, FiSearch, FiSettings } from 'react-icons/fi'
import { Logo } from './Logo'
import { Sidebar } from './Sidebar'
import { ToggleButton } from './ToggleButton'
import Image from "next/image";

export const Navbar = () => {
    const isDesktop = useBreakpointValue({base: false, lg: true})
    const {isOpen, onToggle, onClose} = useDisclosure()

    return (
        <Box as="nav" bg="bg-surface" boxShadow={useColorModeValue('sm', 'sm-dark')}>
            <Container py={{base: '3', lg: '4'}}>
                <Flex justify="space-between">
                    <HStack spacing="4">
                        <Link href="/">
                            <Image src={"/mm.png"} width={"50px"} height={"50px"}/>

                        </Link>
                        <ButtonGroup variant="ghost" spacing="1">
                            {/*<Button ></Button>*/}
                            <Link href="/conversation">
                                <Button>課文對話</Button>
                            </Link>
                            <Link href="/recording">
                                <Button>音檔</Button>
                            </Link>

                        </ButtonGroup>
                    </HStack>
                </Flex>
            </Container>
        </Box>
    )
}