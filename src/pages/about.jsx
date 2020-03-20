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

const items = [
  {
    key_number: { text: "coucou" },
    key_number_details: { text: "coucou" }
  },
  {
    key_number: { text: "coucou" },
    key_number_details: { text: "coucou" }
  }
];

const AboutPage = () => {
  //   const { data } = homePage;
  return (
    <Layout>
      <Nav></Nav>
      <Hero title={"About"} description={"Une histoire à partager"} />
      <Stats title={"titre"} description={"desc"} items={items} />
      <Logos
      // title={data.body[1].primary.partners_title.text}
      // items={data.body[1].items}
      ></Logos>
      {/* {data.features.map(f => ( */}
      <Feature
      //   title={f.feature_title.text}
      //   desc={f.feature_description.raw}
      //   label={f.feature_label.text}
      //   img={f.feature_image}
      // {...console.log(f.feature_image, "f.feature_image")}
      />
      {/* ))} */}
      <Footer title={"title"} />
    </Layout>
  );
};

export default AboutPage;
