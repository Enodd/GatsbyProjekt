import React, { useEffect } from 'react'
import Layout from '../components/layout'
import { graphql, Link } from 'gatsby'
import Head from '../components/head'


export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            frontmatter {
                title
                date
            }
            html
        }
    }
  
    `


const Blog = (props) => {
    console.log(props)
    const next = props.pageContext.next
        ? {
            url: `/blog/${props.pageContext.next.fields.slug}`,
            title: props.pageContext.next.frontmatter.title
        } : null
    const prev = props.pageContext.previous
        ? {
            url: `/blog/${props.pageContext.previous.fields.slug}`,
            title: props.pageContext.previous.frontmatter.title
        } : null
    return (
        <Layout>
            <Head title={props.data.markdownRemark.frontmatter.title} />
            <h2 className="blog__title">
                {props.data.markdownRemark.frontmatter.title}
            </h2>
            <p className="blog__date">
                {props.data.markdownRemark.frontmatter.date}
            </p>
            <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }} className="blog__content" >

            </div>
            {
                prev && (<Link to={prev.url}>
                    {prev.title}
                </Link>
                )
            }
            {
                next && (
                    <Link to={next.url}>
                        {next.title}
                    </Link>
                )
            }
        </Layout>
    )
}

export default Blog