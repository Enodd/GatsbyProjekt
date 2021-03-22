import React, { useState } from "react"
import { Link, graphql, useStaticQuery } from 'gatsby'
import { Helmet } from 'react-helmet'
import "../styles/stylecomponents/header.scss"


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
    const windowWidth = window.matchMedia('(min-width: 540px)')

    const [show, setShow] = useState(false)

    window.addEventListener('resize', () => {
        if (windowWidth.matches) {
            setShow(false)
        } else {
            setShow(true)
        }
    })



    return (
        <header className="core-header">
            <h1 className="core-header__title" id='link' onLoad={() => {
                if (windowWidth.matches) {
                    setShow(false)
                } else {
                    setShow(true)
                }
                console.log(1)
            }}>
                {data.site.siteMetadata.title}
            </h1>

            <div className="core-header__menu">
                {
                    !show && <ul className="menu">
                        <li className="menu__element">
                            <Link to="/blog" className="menu__link">
                                blog
                    </Link>
                        </li>
                        <li className="menu__element">
                            <Link to="/404" className="menu__link">
                                404
                    </Link>
                        </li>
                        <li className="menu__element">
                            <Link to="/" className="menu__link">
                                Main web
                    </Link>
                        </li>
                        <li className="menu__element">
                            <Link to="/author" className="menu__link">
                                About author
                    </Link>
                        </li>
                    </ul>
                }
                {
                    show && <div className="socials">
                        <ul>
                            <li>
                                ha
                        </li>
                            <li>
                                ha
                        </li>
                            <li>
                                ha
                        </li>
                        </ul>
                    </div>
                }
            </div>
        </header>
    )
}

export default Header