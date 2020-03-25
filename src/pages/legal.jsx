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

const LegalPage = () => {
  return (
    <Layout>
      <Nav></Nav>
      <Hero title={"Mentions Légales"} description={"Nos mentions légales"} />

      <RichTextColumn content={"le contenu"} />

      <Footer title={"Les Ops en toute confiance"} />
    </Layout>
  );
};

export default LegalPage;
