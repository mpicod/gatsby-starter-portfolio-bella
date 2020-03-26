import React, { useState, useEffect } from "react";
import queryString from "query-string";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Footer from "../components/Footer";

import Layout from "../components/Layout";
import Testimonial from "../components/Testimonial";
import Logos from "../components/Logos";
import ContactBanner from "../components/ContactBanner";
import TopBanner from "../components/TopBanner";

import Carousel from "../components/Carousel";
import Pillars from "../components/Pillars";
import Hero from "../components/Hero";
import Mission from "../components/Mission";

import Nav from "../components/nav";

const IndexPage = ({ data: { caseStudies, homePage } }, location) => {
  const { edges } = caseStudies;
  const { data } = homePage;

  const url = typeof window !== "undefined" ? window.location : "";
  console.log(url, "URL");
  const search = url.search ? queryString.parse(url.search) : {};
  const { redirect } = search;
  console.log("Search", search, "redirect", redirect);

  return (
    <Layout>
      {/* {redirect == "pr" && <TopBanner redirect={redirect} />} */}
      <TopBanner redirect={redirect} />
      <Nav isHome></Nav>
      <Hero
        title={data.title.text}
        description={data.page_subtitle.raw}
        isHome
      />
      <Carousel data={data.body[1]}></Carousel>
      <Mission
        title={data.mission_title}
        data={data.missions}
        story={data.story_title}
        know_how_title={data.know_how_title}
        description_know_how={data.description_know_how}
        philosophy_title={data.philosophy_title}
        philosophy_description={data.philosophy_description}
      />
      <Pillars pillars={data.pillar_group} title={data.pillar_title.text} />
      {/* <Testimonial data={data.body[0]} /> */}
      <ContactBanner
        title={data.contact_title.text}
        desc={data.contact_description.raw}
        data={data.adresses}
      />
      <Logos
        title={data.body[2].primary.partners_title.text}
        items={data.body[2].items}
      ></Logos>
      <Footer title={data.title.text} />
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
              carousel_link {
                url
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
              testimonial_logo {
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
          ... on PrismicHomepageBodyBanniereLogos {
            primary {
              partners_title {
                text
              }
            }
            items {
              partner_logo {
                url
                alt
              }
            }
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
          raw
        }
        missions {
          mission_text {
            raw
          }
          mission_title1 {
            text
          }
          mission_icon {
            url
          }
        }
        mission_title {
          text
        }
        story_title {
          text
        }
        know_how_title {
          text
        }
        description_know_how {
          raw
        }
        philosophy_title {
          text
        }
        philosophy_description {
          raw
        }
        contact_title {
          text
        }
        contact_description {
          raw
        }
        adresses {
          adress_details {
            raw
          }
          adress_label {
            text
          }
          telephone {
            text
          }
        }
      }
    }
  }
`;
