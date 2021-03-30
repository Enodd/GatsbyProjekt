const path = require('path')

module.exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions

    if (node.internal.type === 'MarkdownRemark') {
        const slug = path.basename(node.fileAbsolutePath, '.md')

        createNodeField({
            node,
            name: 'slug',
            value: slug
        })
    }
}

module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const blogTemplate = path.resolve('./src/templates/blogtemp.js')
    const res = await graphql(`
        query {
            allMarkdownRemark(sort: {fields: [frontmatter___id], order: ASC}){
                edges {
                    node {
                        fields{
                            slug
                        }
                        frontmatter{
                            title
                        }
                    }
                }
            }
        }
    `)
    const articles = res.data.allMarkdownRemark.edges
    articles.forEach(({ node }, index) => {
        createPage({
            component: blogTemplate,
            path: `/blog/${node.fields.slug}`,
            context: {
                slug: node.fields.slug,
                previous: index === 0 ? null : articles[index - 1].node,
                next: index === articles.length - 1 ? null : articles[index + 1].node,
            }
        })
    })
}
