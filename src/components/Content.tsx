import {
    Badge,
    Box,
    Button,
    Container,
    Heading,
    Img,
    Stack,
    Text,
    useBreakpointValue,
} from '@chakra-ui/react'
import * as React from 'react'

export const Content = () => (
    <Box as="section" bg="bg-surface">
        <Box position="relative" height={{ lg: '720px' }}>
            <Container py={{ base: '16', md: '24' }} height="full">
                <Stack
                    direction={{ base: 'column', lg: 'row' }}
                    spacing={{ base: '16' }}
                    align={{ lg: 'center' }}
                    height="full"
                >
                    <Stack spacing={{ base: '8', md: '12' }}>
                        <Stack spacing="4">
                            {/*<Badge*/}
                            {/*    colorScheme="blue"*/}
                            {/*    alignSelf="start"*/}
                            {/*    size={useBreakpointValue({ base: 'md', md: 'lg' })}*/}
                            {/*>*/}
                            {/*    New components available*/}
                            {/*</Badge>*/}
                            <Stack spacing={{ base: '4', md: '6' }} maxW={{ md: 'xl', lg: 'md', xl: 'xl' }}>
                                <Heading size={useBreakpointValue({ base: 'md', md: 'xl' })}>
我是 monica                                </Heading>
                                <Text fontSize={{ base: 'lg', md: 'xl' }} color="muted">
                                    我很強
                                </Text>
                            </Stack>
                        </Stack>
                        <Stack direction={{ base: 'column', md: 'row' }} spacing="3">

                            {/*<Button variant="primary" size={useBreakpointValue({ base: 'lg', md: 'xl' })}>*/}
                            {/*    Buy now*/}
                            {/*</Button>*/}
                            {/*<Button variant="secondary" size={useBreakpointValue({ base: 'lg', md: 'xl' })}>*/}
                            {/*    Learm more*/}
                            {/*</Button>*/}
                        </Stack>
                    </Stack>
                    <Box
                        pos={{ lg: 'absolute' }}
                        right="0"
                        bottom="0"
                        w={{ base: 'full', lg: '50%' }}
                        height={{ base: '96', lg: 'full' }}
                        sx={{
                            clipPath: { lg: 'polygon(7% 0%, 100% 0%, 100% 100%, 0% 100%)' },
                        }}
                    >
                        <Img
                            boxSize="full"
                            objectFit="cover"
                            src="monica.jpg"
                            alt="Lady at work"
                        />
                    </Box>
                </Stack>
            </Container>
        </Box>
    </Box>
)