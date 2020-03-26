import React from "react";
import Layout from "../components/Layout";
import Pattern from "../images/pattern.svg";
import Footer from "../components/Footer";

const NotFoundPage = () => (
  <Layout>
    <header className="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 xl:mt-28">
      <div className="text-center pb-16 md:pb-16 lg:pb-20 xl:pb-24">
        <h1 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl pt-16 md:pt-16 lg:pt-20 xl:pt-24">
          404 : Whoa, il n'y a rien ici !
        </h1>

        <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl richtext">
          Le contenu que vous cherchez ne se trouve pas ici, vous avez peut-être
          cliqué sur un lien erroné.
          <br /> <br />
          Retournez sur la page d'accueil ou contactez-nous.
        </p>
        <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
          <div className="rounded-md shadow transform hover:-translate-y-1 transition duration-300">
            <a
              href="/"
              data-sal="slide-up"
              data-sal-delay="300"
              data-sal-easing="ease-in-out"
              data-sal-duration="500"
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-primary-600 hover:bg-primary-500 focus:outline-none focus:shadow-outline-primary transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
            >
              Retour à la page d'accueil !
            </a>
          </div>

          <div className="absolute absolute-pattern">
            <img src={Pattern} />
          </div>
        </div>
      </div>
    </header>
    <Footer />
  </Layout>
);

export default NotFoundPage;
