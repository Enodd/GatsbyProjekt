module.exports = {
  siteMetadata: {
    title: "GatsbyProb",
    author: "Foxnacity",
  },
  pathPrefix: "/GatsbyProjekt",
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      }
    },
    'gatsby-transformer-remark',

  ],
};
