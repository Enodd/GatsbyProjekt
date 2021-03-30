import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'
import '../styles/stylecomponents/main.scss'

const Blogpage = () => {
    const data = useStaticQuery(graphql`
    query {
        allMarkdownRemark(sort: {fields: [frontmatter___id], order: ASC}){
            edges{
                node{
                    frontmatter{
                        title
                        date(formatString: "DD.MM.YYYY")
                        description
                        id
                    }
                    fields{
                        slug
                    }
                }
            }
        }
    }
    `)
    return (
        <Layout>
            <Head title="Blog" />
            <main className="core-main">
                <section className="core-main__section section">
                    <h2 className="section__title">Co dziś chcesz przeczytać?</h2>
                    {/* <div className="section__shortcut shortcut">
                        <ul className="shortcut__list">
                            {data.allMarkdownRemark.edges.map((edge) => {
                                return (
                                    <li className="shorcut__element">
                                        <Link to={`/blog/${edge.node.fields.slug}`}>
                                            <p className="shortcut__content">
                                                {edge.node.frontmatter.title}
                                            </p>
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </div> */}
                    <ul className="section__post-list post-list">
                        {data.allMarkdownRemark.edges.map((edge) => {
                            return (
                                <li className="post-list__element">
                                    <article className="post">
                                        <Link className="post__link" to={`/blog/${edge.node.fields.slug}`}>
                                            <h2 className="post__title">
                                                {edge.node.frontmatter.title}
                                            </h2>
                                            <p className="post__date">
                                                {edge.node.frontmatter.date}
                                            </p>
                                            <div dangerouslySetInnerHTML={{ __html: edge.node.frontmatter.description }} className="post__description">
                                            </div>
                                        </Link>
                                    </article>
                                </li>
                            )
                        })}
                    </ul>
                </section>
            </main>
        </Layout>
    )
}

export default Blogpage