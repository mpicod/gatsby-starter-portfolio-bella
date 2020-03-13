import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Footer from "../components/Footer";
import PartnersBanner from "../components/PartnersBanner";
import Layout from "../components/Layout";
import Testimonial from "../components/Testimonial";
import Logos from "../components/Logos";
import ContactBanner from "../components/ContactBanner";
import ContactForm from "../components/ContactForm";
import Carousel from "../components/Carousel";
import Pillars from "../components/Pillars";
import Hero from "../components/Hero";
import Mission from "../components/Mission";

import Moderniser from "../images/moderniser.svg";
import Simplify from "../images/simplify.svg";

import Secure from "../images/secure.svg";

import Saltstack from "../images/ss.svg";
import Testimony from "../images/profil.png";

import Nav from "../components/nav";
// import "../style/custom.scss";

const IndexPage = ({ data: { caseStudies, homePage } }) => {
  const { edges } = caseStudies;
  const { data } = homePage;
  console.log("HomeDATA", data);
  return (
    <Layout>
      <Nav></Nav>
      <Hero title={data.title.text} description={data.page_subtitle.text} />
      <Carousel data={data.body[1]}></Carousel>
      <Mission title={data.mission_title} data={data.missions} />
      <Pillars pillars={data.pillar_group} title={data.pillar_title.text} />
      <Testimonial
        Quote={
          "ZenOps360 est une équipe vraiment top ! Nous avons ré-achitecturé toute l'infrastructure de notre base de donnée sensible, sans aucun problème et en un temps record grace à eux !"
        }
        Name={"Jean-Yves"}
        Job={"CEO of MyCompany"}
        Logo={Testimony}
        data={data.body[0]}
      />

      <ContactBanner />
      <Logos></Logos>
      <Footer />
    </Layout>
  );
};

export default IndexPage;

IndexPage.propTypes = {
  data: PropTypes.shape({
    caseStudies: PropTypes.shape({
      edges: PropTypes.array.isRequired
    })
  }).isRequired
};

export const pageQuery = graphql`
  query IndexQuery {
    caseStudies: allPrismicCaseStudy(
      sort: { fields: [last_publication_date], order: DESC }
    ) {
      edges {
        node {
          uid
          data {
            title {
              text
            }
            subtitle {
              text
            }
          }
        }
      }
    }
    homePage: prismicHomepage {
      data {
        body {
          ... on PrismicHomepageBodyCarousel {
            primary {
              featured_image {
                fluid {
                  ...GatsbyPrismicImageFluid
                }
              }
            }
            items {
              carousel_title {
                text
              }
              carousel_description {
                text
              }
            }
            slice_type
          }
          ... on PrismicHomepageBodyQuote {
            primary {
              quote {
                text
              }
              portrait_author {
                fluid {
                  ...GatsbyPrismicImageFluid
                }
              }
              name_of_the_author {
                text
              }
            }
            slice_type
          }
        }
        title {
          text
        }
        pillar_title {
          text
        }
        pillar_group {
          pillar_icon {
            url
          }
          pillar_text {
            text
          }
          pillar_cta {
            url
          }
          pillar_title1 {
            text
          }
        }
        page_subtitle {
          text
        }
        missions {
          mission_text {
            raw
          }
          mission_title1 {
            text
          }
        }
        mission_title {
          text
        }
      }
    }
  }
`;
