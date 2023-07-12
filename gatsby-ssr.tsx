import React from "react"
import { Layout } from './src/component/Layout'

// Adds a class name to the body element
export const onRenderBody = ({ setBodyAttributes }, pluginOptions) => {
    setBodyAttributes({
        className: "my-body-class",
    })
}

// Wraps every page in a component
export const wrapPageElement = ({ element, props }) => {
    return <Layout {...props}>{element}</Layout>
}