import React, { PropsWithChildren } from 'react'
import { Navbar } from './Navbar'
import { Box } from '@chakra-ui/react'

export const Layout: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <Box bg={'dark.blue'} height={'100vh'}>
            <Navbar />
            <main>
                {children}
            </main>
        </Box>
    )
}
