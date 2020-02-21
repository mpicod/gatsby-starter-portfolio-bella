import React from "react";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import Nav from "../components/nav";
import Background from "../images/background.png";
import Saltstack from "../images/ss.svg";
import PartnersBanner from "../components/PartnersBanner";
import "../style/custom.scss";
import Secure from "../images/secure.svg";

const PillarPage = () => (
  <Layout>
    <Nav></Nav>
    <header className="container d-flex flex-column align-items-center justify-content-center ">
      <h1 className="text-primary font-weight-600">Moderniser</h1>
      <p className="lead text-white">
        Description du pilliers qui donne envie de payer di-rect !{" "}
      </p>
      <button class="btn btn-primary" type="button" value="Input">
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
      <div className="row featured-bloc my-4">
        <div className="col-md-6 col-sm-12">
          <img src={Background} />
        </div>
        <div className="col-md-6 col-sm-12">
          <small className="text-primary text-uppercase">
            Description du bloc
          </small>
          <h2>Label</h2>
          <p className="text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore{" "}
          </p>
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
      <div className="row featured-bloc my-4">
        <div className="col-md-6 col-sm-12">
          <img src={Background} />
        </div>
        <div className="col-md-6 col-sm-12">
          <small className="text-primary text-uppercase">
            Description du bloc
          </small>
          <h2>Label</h2>
          <p className="text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore{" "}
          </p>
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
      <div className="row featured-bloc my-4">
        <div className="col-md-6 col-sm-12">
          <img src={Background} />
        </div>
        <div className="col-md-6 col-sm-12">
          <small className="text-primary text-uppercase">
            Description du bloc
          </small>
          <h2>Label</h2>
          <p className="text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore{" "}
          </p>
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

export default PillarPage;
