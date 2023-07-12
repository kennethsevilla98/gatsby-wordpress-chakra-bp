import React from "react"
import { Layout } from './src/component/Layout'
import { ThemeProvider } from "@chakra-ui/react"
import theme from './src/theme'

// Logs when the client route changes
export const onRouteUpdate = ({ location, prevLocation }) => {
    console.log("new pathname", location.pathname)
    console.log("old pathname", prevLocation ? prevLocation.pathname : null)
}

// Wraps every page in a component
export const wrapPageElement = ({ element, props }) => {
    return <ThemeProvider theme={theme}><Layout {...props}>{element}</Layout></ThemeProvider>
}