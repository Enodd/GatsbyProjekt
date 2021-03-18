import * as React from "react"
import { Link } from 'gatsby'
import * as cs from "../styles/global.scss"
import Header from "../components/header"

const IndexPage = () => {
    return (
        <div className="container">
            <Header />
            <p>wassup</p>
            <Link to="">pozdrawiam</Link>
        </div>
    )
}

export default IndexPage