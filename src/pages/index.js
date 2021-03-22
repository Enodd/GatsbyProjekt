import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import '../styles/stylecomponents/main.scss'

const IndexPage = () => {
    return (
        <Layout>
            <Head title="Home" />
            <main className="core-main">
                <section className="core-main__section section">
                    <h2 className="section__title">
                        O Stronie słów kilka
                    </h2>
                </section>
            </main>
        </Layout>
    )
}

export default IndexPage