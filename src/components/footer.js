import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import "../styles/footer.scss"

const Footer = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    author
                }
            }
        }
    `)
    return (
        <footer className="core-footer">
            <h2 className="core-footer__author">
                Website made by <a className="core-footer__link" href="https://twitter.com/foxnacity">{data.site.siteMetadata.author}</a>.
            </h2>
        </footer>
    )
}

export default Footer