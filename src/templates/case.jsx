import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Helmet from "react-helmet";
import Img from "gatsby-image";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import config from "../../config/website";

const CaseTemplate = ({ data: { prismicCaseStudy: caseNode } }) => {
  const { data } = caseNode;
  return (
    <Layout>
      {/* <Helmet title={`${data.title.text} | ${config.siteTitle}`} />
      <SEO caseNode={caseNode} casePath={caseNode.uid} caseSEO /> */}
      {/* <Hero>
        <Img fluid={data.header_image.localFile.childImageSharp.fluid} />
        <TitleWrapper py={4}>
          <Title>{data.title.text}</Title>
        </TitleWrapper>
      </Hero>
      <Wrapper py={4} px={4} mx="auto">
        <SubTitle>{data.subtitle.text}</SubTitle>
        <Content dangerouslySetInnerHTML={{ __html: data.content.html }} />
      </Wrapper>
      <Footer isCase /> */}
    </Layout>
  );
};

export default CaseTemplate;

CaseTemplate.propTypes = {
  data: PropTypes.shape({
    prismicCaseStudy: PropTypes.object.isRequired
  }).isRequired
};

// export const pageQuery = graphql`
//   query CaseBySlug($uid: String!) {
//     prismicCaseStudy(uid: { eq: $uid }) {
//       uid
//       first_publication_date
//       last_publication_date
//       data {
//         header_image {
//           localFile {
//             childImageSharp {
//               fluid(
//                 maxWidth: 1920
//                 quality: 90
//                 traceSVG: { color: "#021212" }
//               ) {
//                 ...GatsbyImageSharpFluid_withWebp_tracedSVG
//               }
//               resize(width: 800) {
//                 src
//               }
//             }
//           }
//         }
//         title {
//           text
//         }
//         subtitle {
//           text
//         }
//         content {
//           html
//         }
//       }
//     }
//   }
// `;
