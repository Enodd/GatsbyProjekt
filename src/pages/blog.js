import React, { useEffect, useState } from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'
import { useFlexSearch } from 'react-use-flexsearch'
import SearchBar from '../components/search'
import '../styles/stylecomponents/main.scss'

const Blogpage = () => {
    const data = useStaticQuery(graphql`
    query {
        localSearchPages {
            index
            store
        }

        idki: allMarkdownRemark(sort: {fields: [frontmatter___id], order: ASC}){
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
        daty: allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}){
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
            nodes{
                excerpt
                fields{
                    slug
                }
                frontmatter{
                    title
                    date(formatString: "DD.MM.YYYY")
                    description
                }
            }
        }
    }
    `)

    const { search } = window.location
    const query = new URLSearchParams(search).get('s')
    const [searchQuery, setSearchQuery] = useState(query || '')

    const results = useFlexSearch(searchQuery, data.localSearchPages.index, data.localSearchPages.store)

    const articles = searchQuery ? unFlattenResults(results) : data.daty.nodes

    // pagination
    const [offset, setOffset] = useState(0);
    const perPage = 3;

    useEffect(() => {
        console.log(data.daty.edges.slice(offset * perPage, (offset * perPage) + perPage))
    }, [offset])

    return (
        <Layout>
            <button onClick={() => setOffset(offset + 1)}>next</button>
            <button onClick={() => setOffset(offset - 1)}>prev</button>
            <Head title="Blog" />
            <main className="core-main">
                <section className="core-main__section section">
                    <h2 className="section__title">Najnowsze posty</h2>
                    <ul className="section__post-list post-list">
                        {
                            data.daty.edges.slice(0, 2).map((edge) => (
                                <li key={edge.node.fields.slug} className="post-list__element">
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
                            )}
                    </ul>
                </section>
                <section className="core-main__section section">
                    <h2 className="section__title">Wszystkie posty</h2>
                    <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
                    <ul className="section__post-list post-list">
                        {
                            articles && articles.map(article =>
                            (<li key={article.fields.slug} className="post-list__element">
                                <article className="post">
                                    <Link className="post__link" to={`/blog/${article.fields.slug}`}>
                                        <h2 className="post__title">
                                            {article.frontmatter.title}
                                        </h2>
                                        <p className="post__date">
                                            {article.frontmatter.date}
                                        </p>
                                        <div dangerouslySetInnerHTML={{ __html: article.frontmatter.description }} className="post__description">
                                        </div>
                                    </Link>
                                </article>
                            </li>)
                            )
                        }
                    </ul>
                </section>
            </main>
        </Layout>
    )
}
export default Blogpage

export const unFlattenResults = results =>
    results.map(article => {
        const { title, date, description, slug } = article
        return { fields: { slug }, frontmatter: { title, date, description } }
    })

