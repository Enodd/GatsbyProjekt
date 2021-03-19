import React from "react"
import { Link, graphql, useStaticQuery } from 'gatsby'
import "../styles/header.scss"

const Header = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata{
                    title
                }
            }
        }
    `)

    return (
        <header className="core-header">
            <h1 className="core-header__title">{data.site.siteMetadata.title}</h1>
            <ul className="core-header__menu menu">
                <li className="menu__element">
                    <Link to="/blog" ClassName="menu__link">
                        blog
                    </Link>
                </li>
                <li className="menu__element">
                    <Link to="/404" ClassName="menu__link">
                        404
                    </Link>
                </li>
                <li className="menu__element">
                    <Link to="/404" ClassName="menu__link">
                        404
                    </Link>
                </li>
                <li className="menu__element">
                    <Link to="/404" ClassName="menu__link">
                        404
                    </Link>
                </li>
            </ul>
        </header>
    )
}

export default Header