module.exports = {
  siteMetadata: {
    title: "Serverless Adventure",
    author: "Damian Nowak",
  },
  pathPrefix: "/GatsbyProjekt",
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Serverless Adventure',
        short_name: 'S.A.',
        description: 'Strona o mojej przygodzie z Gatsbym',
        lang: 'pl',
        display: 'standalone',
        icon: `src/images/favicons/favicon.png`,
        icons: [
          {
            src: `src/images/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`
          },
          {
            src: `src/images/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`
          },
        ],
        start_url: '/',
        background_color: '#233D4D',
        theme_color: '#233D4D',
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      }
    },
    'gatsby-plugin-image',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false
            }
          },
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-local-search',
      options: {
        name: 'pages',
        engine: 'flexsearch',
        query: `
        query{
          allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC}){
            nodes{
              excerpt
              fields{
                slug
              }
              frontmatter{
                date(formatString: "DD.MM.YYYY")
                title
                description
              }
            }
          }
        }
        `,
        ref: 'slug',
        index: ['title', 'excerpt', 'description'],
        store: ['title', 'date', 'excerpt', 'description', 'slug'],
        normalizer: ({ data }) => data.allMarkdownRemark.nodes.map(node => ({
          title: node.frontmatter.title,
          date: node.frontmatter.date,
          excerpt: node.excerpt,
          description: node.frontmatter.description,
          slug: node.fields.slug,
        }))
      }
    }

  ],
};
