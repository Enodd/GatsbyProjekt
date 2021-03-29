import React from 'react'
import "@fontsource/rubik"
import "@fontsource/source-serif-pro"
import Header from "../components/header"
import Footer from "../components/footer"


const Layout = (props) => {
    return (
        <div className="container">
            <Header />
            {props.children}
            <Footer />
        </div>
    )
}

export default Layout