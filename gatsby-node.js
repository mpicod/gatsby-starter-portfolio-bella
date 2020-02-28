const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const pages = await graphql(`
    {
      allPrismicCaseStudy {
        edges {
          node {
            id
            uid
          }
        }
      }
    }
  `);

  const caseTemplate = path.resolve("src/templates/case.jsx");

  pages.data.allPrismicCaseStudy.edges.forEach(edge => {
    createPage({
      path: `/${edge.node.uid}`,
      component: caseTemplate,
      context: {
        uid: edge.node.uid
      }
    });
  });

  const pillars = await graphql(`
    {
      allPrismicPillarpage {
        edges {
          node {
            id
            uid
          }
        }
      }
    }
  `);

  const pillarTemplate = path.resolve("src/templates/pillar.jsx");

  pillars.data.allPrismicPillarpage.edges.forEach(edge => {
    createPage({
      path: `/${edge.node.uid}`,
      component: pillarTemplate,
      context: {
        uid: edge.node.uid
      }
    });
  });

//   const homePage = await graphql(`
//     {
//       prismicHomepage {
//         id
//         data {
//           page_subtitle {
//             text
//           }
//           title {
//             text
//           }
//         }
//       }
//     }
//   `);

//   const templateHomePage = path.resolve("src/template/index.jsx");

//   homePage.data.prismicHomePage.edges.forEach(edge => {
//     createPage({
//       path: `/`,
//       component: templateHomePage,
//       context: {
//         uid: edge.node.uid
//       }
//     });
//   });
// };
