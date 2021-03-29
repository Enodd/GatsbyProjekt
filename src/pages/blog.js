import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'

const Blogpage = () => {
    const data = useStaticQuery(graphql`
    query {
        allMarkdownRemark{
            edges{
                node{
                    frontmatter{
                        title
                        date
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
            <main>
                <ol className="post-list">
                    {data.allMarkdownRemark.edges.map((edge) => {
                        return (
                            <li className="post-list__element post">
                                <Link className="post__link" to={`/blog/${edge.node.fields.slug}`}>
                                    <h2 className="post__title">
                                        {edge.node.frontmatter.title}
                                    </h2>
                                    <p className="post__date">
                                        {edge.node.frontmatter.date}
                                    </p>
                                </Link>
                            </li>
                        )
                    })}
                </ol>
            </main>
        </Layout>
    )
}

export default Blogpage