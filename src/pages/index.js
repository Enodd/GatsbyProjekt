import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import '../styles/stylecomponents/main.scss'
import { Link, graphql } from "gatsby"
import Img from 'gatsby-image'

const IndexPage = ({ data }) => {
    return (
        <Layout>
            <Head title="Home" />
            <main className="core-main">
                <section className="core-main__section section">
                    <h2 className="section__title">
                        Hello there!
                    </h2>
                    <p className="section__content">
                        Ta strona została stworzona przy użyciu
                    <span className="highlight--purple">&nbsp;Gatsby.</span>
                    </p>
                    <div className="section__image">
                        <Img fluid={data.gatsbyArt.childImageSharp.fluid} alt="astronauta tworzący stronę w gatsby" />
                    </div>
                    <p className="section__content">
                        Co to za strona zapytasz?
                        <br />
                        To jest strona, która jest wynikiem moich przygód związanych z&nbsp;tworzeniem tej strony. Tutaj zamieszczone są poradniki i&nbsp;ogólne omówienie tego jak tworzyłem moją stronę.
                        <br />
                        Na tej stronie możesz się dowiesz takich rzeczy jak:
                    </p>
                    <ul className="section__content-list content-list">
                        <li className="content-list__element">
                            Czym jest renderowanie bezserwerowe (Serverless rendering)
                        </li>
                        <li className="content-list__element">
                            Jak zainstalować i skonfigurować Gatsbiego.
                        </li>
                        <li className="content-list__element">
                            Jak tworzyć strony i komponenty.
                        </li>
                        <li className="content-list__element">
                            Dynamiczne tworzenie postów do bloga.
                        </li>
                        <li className="content-list__element">
                            Stylizowanie swoich stron i postów.
                        </li>
                        <li className="content-list__element">
                            <Link to='/blog' className='content-list__link'>
                                I wiele więcej
                            </Link>
                        </li>
                    </ul>
                </section>
            </main>
        </Layout>
    )
}

export default IndexPage

export const query = graphql`
query{
    gatsbyArt: file(relativePath: {eq: "images/gatsbyArt.png"}){
        childImageSharp{
            fluid(maxWidth: 2000){
                ...GatsbyImageSharpFluid
            }
        }
    }
}
`