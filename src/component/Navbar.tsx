import { Box, Container, Flex, Link } from '@chakra-ui/react'
import React from 'react'



export const Navbar = () => {
    return (
        <Container maxW={'container.lg'}>
            <Flex p={4} justifyContent={'space-between'}>
                <Box>Logo</Box>
                <Flex gap={4}>
                    <Link>Home</Link>
                    <Link>New</Link>
                </Flex>
            </Flex>
        </Container>
    )
}
