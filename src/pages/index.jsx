import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Footer from "../components/Footer";
import PartnersBanner from "../components/PartnersBanner";
import Layout from "../components/Layout";
import Moderniser from "../images/moderniser.svg";
import Simplify from "../images/simplify.svg";
import Img from "gatsby-image";
import Secure from "../images/secure.svg";
import Background from "../images/background.png";
import Saltstack from "../images/ss.svg";
import Testimony from "../images/profil.png";
import Arrow from "../images/arrows.svg";
import Nav from "../components/nav";
import "../style/custom.scss";

const IndexPage = ({ data: { caseStudies, homePage } }) => {
  const { edges } = caseStudies;
  const { data } = homePage;
  return (
    <Layout>
      <Nav></Nav>
      <header className="container d-flex home">
        <div className="row w-100">
          <div className="col-md-6 col-sm-12">
            <h1>{data.title.text}</h1>
            <h3>{data.page_subtitle.text}</h3>
            <button class="btn btn-primary" type="button" value="Input">
              Contactez-nous !
            </button>
          </div>
          <div className="col-md-6 col-sm-12">
            <img src={Background} />
          </div>
        </div>
      </header>

      <div className="container-fluid bg-black team-section">
        <section className="container d-flex flex-column align-items-center justify-content-center ">
          <h2 className="mb-4 font-weight-600">{data.mission_title.text}</h2>
          <div className="row">
            {data.missions.map(m => (
              <div className="col-md-4 col-sm-12">
                <div className="card p-4">
                  <h2 className="text-black font-weight-500">
                    {m.mission_title1.text}
                  </h2>
                  <p className="text-black-secondary">{m.mission_text.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <div className="container-fluid" style={{ backgroundColor: "#202020" }}>
        <section className="container d-flex flex-column align-items-center justify-content-center">
          <h2 className="mb-4 font-weight-600">{data.pillar_title.text}</h2>
          <div className="row">
            {data.pillar_group.map(p => (
              <div className="col-md-4 col-sm-6">
                <div className="card p-4 justify-content-start">
                  <img src={p.pillar_icon.url} alt={p.pillar_icon.alt} />
                  <h2 className="text-black mt-3">{p.pillar_title1.text}</h2>
                  <p className="text-black-secondary">{p.pillar_text.text}</p>
                  <a className="align-self-end text-black-secondary font-weight-600">
                    Voir plus <img src={Arrow} className="btn-arrow" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <section className="container d-flex flex-column align-items-center justify-content-center">
        <h2 className="mb-4 font-weight-600">Témoignages</h2>
        <div className="row justify-content-center">
          <div className="col-md-6 col-sm-12 ">
            <div className="card p-4">
              <img src={Testimony} className="testimony-img" />
              <h5 className="text-black">
                "L'équipe ZenOps est vraiment très Zen, c'est très z'agréable de
                bosser avec tant de zenitude !"
              </h5>
              <small className="text-primary">Jean-Yves</small>
              <small className="">CEO of MyCompany</small>
            </div>
          </div>
        </div>
      </section>
      <PartnersBanner />
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
            header_image {
              localFile {
                childImageSharp {
                  fluid(
                    maxWidth: 900
                    maxHeight: 900
                    quality: 90
                    traceSVG: { color: "#021212" }
                    cropFocus: ENTROPY
                  ) {
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                  }
                }
              }
            }
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
      id
      data {
        body {
          id
          slice_type
          primary {
            quote {
              text
            }
            portrait_author {
              localFile {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid_tracedSVG
                  }
                }
              }
            }
            name_of_the_author {
              text
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
          pillar_title1 {
            text
          }
        }
        page_subtitle {
          text
        }
        missions {
          mission_text {
            text
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
