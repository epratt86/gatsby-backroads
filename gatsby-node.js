const path = require("path")

// Creates pages programatically from contentful tours data
exports.createPages = async function({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      tours: allContentfulTour {
        edges {
          node {
            slug
          }
        }
      }
      posts: allContentfulPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  data.tours.edges.forEach(edge => {
    actions.createPage({
      path: `tours/${edge.node.slug}`,
      component: path.resolve("./src/templates/tour-template.js"),
      context: {
        slug: edge.node.slug,
      },
    })
  })
  data.posts.edges.forEach(edge => {
    actions.createPage({
      path: `blog/${edge.node.slug}`,
      component: path.resolve("./src/templates/blog-template.js"),
      context: {
        slug: edge.node.slug,
      },
    })
  })
}
