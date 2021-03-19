import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout'

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
                }
            }
        }
    }
    `)
    return (
        <Layout>
            <ol className="post-list">
                {data.allMarkdownRemark.edges.map((edge) => {
                    return (
                        <li className="post-list__element post">
                            <Link to="/">
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
        </Layout>
    )
}

export default Blogpage