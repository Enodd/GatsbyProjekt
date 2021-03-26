import React from 'react'
import Head from '../components/head'
import Layout from '../components/layout'
import '../styles/stylecomponents/main.scss'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'

const about = ({ data }) => {
    return (
        <Layout>
            <Head title="O autorze" />
            <main className="core-main">
                <section className="core-main__section section--author">
                    <h2 className="section__title">
                        Hey, jestem Damian!
                </h2>
                    <p className="section__content">
                        Kim jestem może zapytasz? Chcąc najłatwiej i&nbsp;najprościej to&nbsp;opisać,
                        jestem początkującym web-developerem (tak całkowicie początkującym),
                        który lubi projektować UI, tworzyć grafikę i&nbsp;łączyć te dwie rzecz
                        w&nbsp;jedną całość.
                </p>
                    <Img className="section__image" fluid={data.personalPhoto.childImageSharp.fluid} alt='Zdjecie Damiana' />
                    <p className="section__content">
                        Z takich bardziej ogólnych rzeczy to&nbsp;uwielbiam gry planszowe, gry karciane
                        (Magic The Gathering na&nbsp;zawsze w&nbsp;serduszku), a&nbsp;także gry komputerowe.
                        Pomimo tego wszystkiego ruch nie jest mi obcy i&nbsp;co&nbsp;jakiś czas staram się&nbsp;pomimo
                        pandemii wyjść na&nbsp;dwór, żeby aktywnie spędzić czas.
                </p>
                </section>
                <section className="core-main__section section--author">
                    <h3 className="section__title">
                        Moje socialmedia
                    </h3>
                    <p className="section__content">
                        <a className="section__link" href="https://twitter.com/foxnacity">
                            <i className="fab fa-twitter"></i>
                            <p className="link-label">@Foxnacity</p>
                        </a>
                        <a className="section__link" href="https://github.com/Foxnacity">
                            <i className="fab fa-github-alt"></i>
                            <p className="link-label">@Foxnacity</p>
                        </a>
                    </p>
                </section>
            </main>
        </Layout>
    )
}

export default about

export const query = graphql`
    query {
        personalPhoto: file(relativePath: {eq: "images/myImage.jpg"}){
            childImageSharp{
                fluid(maxWidth:1400){
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`