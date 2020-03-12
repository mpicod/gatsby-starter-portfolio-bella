import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import Nav from "../components/nav";
import Stats from "../components/Stats";
import Background from "../images/background.png";
import Saltstack from "../images/ss.svg";
import PartnersBanner from "../components/PartnersBanner";
import Hero from "../components/Hero";
import Logos from "../components/Logos";
import Feature from "../components/Feature";
import Video from "../components/Video";

import "../style/custom.scss";
import Secure from "../images/secure.svg";
import Img from "gatsby-image";

const PillarPage = ({ data: { prismicPillarpage } }) => {
  // const { edges } = PillarQuery;
  const { data } = prismicPillarpage;
  console.log("DATAPILLAR", data);
  return (
    <Layout>
      <Nav></Nav>
      {/* <header className="container d-flex flex-column align-items-center justify-content-center ">
        <h1 className="text-primary font-weight-600">{data.title.text}</h1>
        <p className="lead text-white">{data.pillar_description.text}</p>
        <button className="btn btn-primary" type="button" value="Input">
          Contactez-nous !
        </button>
      </header> */}
      <Hero
        title={data.title.text}
        description={data.pillar_description.html}
        icon={data.pillar_icon}
      />
      <Stats
        title={data.body[0].primary.key_number_title.text}
        description={data.body[0].primary.key_numbers_intro.text}
        items={data.body[0].items}
      />

      {/* <section className="container d-flex flex-column align-items-center justify-content-center ">
        <h2>{data.features_title.text}</h2>
        {data.features.map(f => (
          <div className="row featured-bloc my-4">
            <div className="col-md-6 col-sm-12">
              {f.feature_image.localFile && (
                <Img fluid={f.feature_image.localFile.childImageSharp.fluid} />
              )}
            </div>
            <div className="col-md-6 col-sm-12 content">
              <small className="text-primary text-uppercase">
                {f.feature_label.text}
              </small>
              <h2>{f.feature_title.text}</h2>
              <p className="text-white">{f.feature_description.text}</p>
              <ul className="featured-partners">
                <li>
                  <img src={Saltstack} />
                </li>
                <li>
                  <img src={Saltstack} />
                </li>
              </ul>
            </div>
          </div>
        ))}
      </section> */}
      {data.features.map(f => (
        <Feature
          title={f.feature_title.text}
          desc={f.feature_description.html}
          label={f.feature_label.text}
          img={f.feature_image}
        />
      ))}

      <Video></Video>
      <Logos></Logos>
      <Footer />
    </Layout>
  );
};

export default PillarPage;

export const pageQuery = graphql`
  query PillarQuery($uid: String!) {
    prismicPillarpage(uid: { eq: $uid }) {
      uid
      data {
        body {
          primary {
            key_number_title {
              text
            }
            key_numbers_intro {
              text
            }
          }
          items {
            key_number {
              text
            }
            key_number_details {
              text
            }
          }
        }
        title {
          text
        }
        pillar_description {
          text
        }
        features {
          feature_title {
            text
          }
          feature_partners {
            localFile {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
          feature_label {
            text
          }
          feature_image {
            localFile {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
          feature_description {
            text
          }
        }
        features_title {
          text
        }
      }
    }
  }
`;
