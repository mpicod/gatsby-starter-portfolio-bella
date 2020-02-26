import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Footer from "../components/Footer";
import PartnersBanner from "../components/PartnersBanner";
import Layout from "../components/Layout";
import Moderniser from "../images/moderniser.svg";
import Simplify from "../images/simplify.svg";

import Secure from "../images/secure.svg";
import Background from "../images/background.png";
import Saltstack from "../images/ss.svg";
import Testimony from "../images/profil.png";
import Arrow from "../images/arrows.svg";
import Nav from "../components/nav";
// import "../style/custom.scss";

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
            <button className="btn btn-primary" type="button" value="Input">
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
      <div class="py-12 bg-white">
        <div class="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-screen-xl lg:px-8">
          <div class="lg:grid lg:grid-cols-3 lg:gap-8">
            <div>
              <div class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                <svg
                  class="h-6 w-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
              </div>
              <div class="mt-5">
                <h5 class="text-lg leading-6 font-medium text-gray-900">
                  Competitive exchange rates
                </h5>
                <p class="mt-2 text-base leading-6 text-gray-500">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Maiores impedit perferendis suscipit eaque, iste dolor
                  cupiditate blanditiis ratione.
                </p>
              </div>
            </div>
            <div class="mt-10 lg:mt-0">
              <div class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                <svg
                  class="h-6 w-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                  />
                </svg>
              </div>
              <div class="mt-5">
                <h5 class="text-lg leading-6 font-medium text-gray-900">
                  No hidden fees
                </h5>
                <p class="mt-2 text-base leading-6 text-gray-500">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Maiores impedit perferendis suscipit eaque, iste dolor
                  cupiditate blanditiis ratione.
                </p>
              </div>
            </div>
            <div class="mt-10 lg:mt-0">
              <div class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                <svg
                  class="h-6 w-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <div class="mt-5">
                <h5 class="text-lg leading-6 font-medium text-gray-900">
                  Transfers are instant
                </h5>
                <p class="mt-2 text-base leading-6 text-gray-500">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Maiores impedit perferendis suscipit eaque, iste dolor
                  cupiditate blanditiis ratione.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
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
