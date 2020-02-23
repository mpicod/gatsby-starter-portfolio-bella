import React from "react";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import Nav from "../components/nav";
import Background from "../images/background.png";
import Saltstack from "../images/ss.svg";
import PartnersBanner from "../components/PartnersBanner";
import "../style/custom.scss";
import Secure from "../images/secure.svg";
import Img from "gatsby-image";

const PillarPage = ({ data: { prismicPillarpage } }) => {
  // const { edges } = PillarQuery;
  const { data } = prismicPillarpage;
  return (
    <Layout>
      <Nav></Nav>
      <header className="container d-flex flex-column align-items-center justify-content-center ">
        <h1 className="text-primary font-weight-600">{data.title.text}</h1>
        <p className="lead text-white">{data.pillar_description.text}</p>
        {console.log(data, "pillar desc")}
        <button className="btn btn-primary" type="button" value="Input">
          Contactez-nous !
        </button>
      </header>
      <section className="container d-flex flex-column align-items-center justify-content-center ">
        <h2 className="mb-4">Tendances</h2>
        <div className="row">
          <div className="col-md-4 col-sm-6">
            <div className="p-4 card">
              <p className="trend-number">58%</p>
              <p className="">Text trop cool :D</p>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="p-4 card">
              <p className="trend-number">58%</p>
              <p className="">Text trop cool :D</p>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="p-4 card">
              <p className="trend-number">58%</p>
              <p className="">Text trop cool :D</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container d-flex flex-column align-items-center justify-content-center ">
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
      </section>
      <section className="container d-flex flex-column align-items-center justify-content-center mt-4">
        <h2>Le mot de l'expert</h2>
        <iframe
          title="vimeo-player"
          src="https://player.vimeo.com/video/386424847"
          width="640"
          height="360"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </section>
      <PartnersBanner />
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
