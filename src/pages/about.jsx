import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import Logos from "../components/Logos";
import Hero from "../components/Hero";
import Nav from "../components/nav";
import Stats from "../components/Stats";
import Feature from "../components/Feature";
import RichTextColumn from "../components/RichTextColumn";
import LargeImage from "../components/LargeImage";

const AboutPage = ({ data: { prismicAboutpage } }) => {
  const { data } = prismicAboutpage;
  return (
    <Layout>
      <Nav></Nav>
      <Hero
        title={data.title.text}
        description={data.about_description.raw}
        icon={data.pillar_icon}
      />
      <Stats
        title={data.body[1].primary.key_number_title.text}
        description={data.body[1].primary.key_numbers_intro.raw}
        items={data.body[1].items}
      />

      <RichTextColumn content={data.main_content} />
      <LargeImage
        title={data.body[0].primary.partners_title.text}
        img={data.body[0].items}
      ></LargeImage>
      <h2 className="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 mb-16 mt-16">
        {data.features_title.text}
      </h2>
      {data.features &&
        data.features.map(f => (
          <Feature
            title={f.feature_title.text}
            desc={f.feature_description.raw}
            label={f.feature_label.text}
            img={f.feature_image}
            // {...console.log(f.feature_image, "f.feature_image")}
          />
        ))}
      <Footer title={"Les Ops en toute confiance"} />
    </Layout>
  );
};

export default AboutPage;

export const pageQuery = graphql`
  query AboutQuery {
    prismicAboutpage {
      uid
      data {
        about_description {
          raw
        }
        features_title {
          text
        }
        features {
          feature_description {
            raw
          }
          feature_image {
            fluid {
              ...GatsbyPrismicImageFluid
            }
          }
          feature_label {
            text
          }
          feature_title {
            text
          }
        }
        body {
          ... on PrismicAboutpageBodyTrends {
            items {
              key_number {
                text
              }
              key_number_details {
                text
              }
            }
            primary {
              key_number_title {
                text
              }
              key_numbers_intro {
                raw
              }
            }
          }
          ... on PrismicAboutpageBodyBanniereLogos {
            id
            items {
              partner_logo {
                url
                alt
              }
            }
            primary {
              partners_title {
                text
              }
            }
          }
        }
        main_content {
          raw
        }
        title {
          text
        }
        video {
          url
        }
      }
    }
  }
`;
