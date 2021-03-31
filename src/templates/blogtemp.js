import React from 'react'
import Layout from '../components/layout'
import { graphql, Link } from 'gatsby'
import Head from '../components/head'
import './templatestyles/template.scss'

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            frontmatter {
                title
                date(formatString: "DD.MM.YYYY")
                updatedate(formatString: "DD.MM.YYYY")
            }
            html
        }
    }
  
    `


const Blog = (props) => {

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
            <div className="blog">
                <h2 className="blog__title">
                    {props.data.markdownRemark.frontmatter.title}
                </h2>
                <p className="blog__date">
                    Data utworzenia: {props.data.markdownRemark.frontmatter.date}
                    <br />
                    Data aktualizacji: {props.data.markdownRemark.frontmatter.updatedate}
                </p>
                <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }} className="blog__content" >

                </div>
                {
                    prev && (
                        <Link className="blog__link--prev" to={prev.url}>
                            {prev.title}
                        </Link>
                    )
                }
                {
                    next && (
                        <Link className="blog__link--next" to={next.url}>
                            {next.title}
                        </Link>
                    )
                }
            </div>
        </Layout>
    )
}

export default Blog