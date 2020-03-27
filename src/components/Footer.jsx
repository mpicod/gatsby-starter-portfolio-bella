import React from "react";
import PropTypes from "prop-types";
import Logo from "../images/logo_zenops_large_white.svg";

const Footer = ({ isCase }) => {
  const year = new Date().getFullYear();
  return (
    // <div>
    //   <footer className="container py-5">
    //     <div className="row">
    //       <div className="col-12 col-md">
    //         <img src={Logo} className="navbar-brand" />
    //         <small className="d-block mb-3 text-muted">© 1998-2020</small>
    //       </div>
    //       <div className="col-6 col-md">
    //         <h5>Offres</h5>
    //         <ul className="list-unstyled text-small">
    //           <li>
    //             <a className="text-muted" href="#">
    //               Moderniser
    //             </a>
    //           </li>
    //           <li>
    //             <a className="text-muted" href="#">
    //               Simplifier
    //             </a>
    //           </li>
    //           <li>
    //             <a className="text-muted" href="#">
    //               Sécuriser
    //             </a>
    //           </li>
    //         </ul>
    //       </div>
    //       <div className="col-6 col-md">
    //         <h5>Resources</h5>
    //         <ul className="list-unstyled text-small">
    //           <li>
    //             <a className="text-muted" href="#">
    //               FAQ
    //             </a>
    //           </li>
    //           <li>
    //             <a className="text-muted" href="#">
    //               Blog
    //             </a>
    //           </li>
    //         </ul>
    //       </div>

    //       <div className="col-6 col-md">
    //         <h5>À propos</h5>
    //         <ul className="list-unstyled text-small">
    //           <li>
    //             <a className="text-muted" href="#">
    //               Team
    //             </a>
    //           </li>
    //           <li>
    //             <button className="btn btn-primary" type="button" value="Input">
    //               Contactez-nous !
    //             </button>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   </footer>
    //   {/* {isCase ? (
    //       <React.Fragment>
    //         <StyledLink to="/">Return to home</StyledLink>
    //         <div>Contact Us</div>
    //       </React.Fragment>
    //     ) : (
    //       <React.Fragment>
    //         <div>
    //           Copyright &copy; {year} by{' '}
    //           <a href="https://github.com/LekoArts/gatsby-starter-portfolio-bella">Bella GitHub Repository</a>. Pictures
    //           by <a href="https://unsplash.com/">Unsplash</a>. Illustrations by{' '}
    //           <a href="https://undraw.co/illustrations">Undraw</a>.
    //         </div>
    //         <div>Snapchat &mdash; Musicaly &mdash; Twitter</div>
    //       </React.Fragment>
    //     )} */}
    // </div>
    <div className="bg-gray-900">
      <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="xl:col-span-1">
            <a href="/">
              <img className="h-10" src={Logo} alt="Zenops" />{" "}
            </a>
            <p className="mt-8 text-gray-500 text-base leading-6">
              Les Ops en toute confiance.
            </p>
            <div className="mt-8 flex">
              <a
                href="https://www.linkedin.com/company/zen-ops/"
                target="_blank"
                className="text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">LinkedIn</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 30 30"
                >
                  <path d="M9,25H4V10h5V25z M6.501,8C5.118,8,4,6.879,4,5.499S5.12,3,6.501,3C7.879,3,9,4.121,9,5.499C9,6.879,7.879,8,6.501,8z M27,25h-4.807v-7.3c0-1.741-0.033-3.98-2.499-3.98c-2.503,0-2.888,1.896-2.888,3.854V25H12V9.989h4.614v2.051h0.065 c0.642-1.18,2.211-2.424,4.551-2.424c4.87,0,5.77,3.109,5.77,7.151C27,16.767,27,25,27,25z"></path>
                </svg>
              </a>
              <a
                href="https://twitter.com/zenops360"
                target="_blank"
                className="ml-6 text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Twitter</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              {/* <a href="#" className="ml-6 text-gray-400 hover:text-gray-500">
                <span className="sr-only">LinkedIn</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a> */}
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <a href="/">
                  <h4 className="text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase">
                    Accueil
                  </h4>
                </a>
              </div>
              <div>
                <h4 className="text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase">
                  Expertises
                </h4>
                <ul className="mt-4">
                  <li>
                    <a
                      href="/moderniser"
                      className="text-base leading-6 text-gray-500 hover:text-primary-900"
                    >
                      Moderniser
                    </a>
                  </li>

                  <li>
                    <a
                      href="/securiser"
                      className="text-base leading-6 text-gray-500 hover:text-primary-900"
                    >
                      Sécuriser
                    </a>
                  </li>
                  <li>
                    <a
                      href="/simplifier"
                      className="text-base leading-6 text-gray-500 hover:text-primary-900"
                    >
                      Simplifier
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div className="mt-12 md:mt-0">
                <a href="/about">
                  <h4 className="text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase">
                    À propos
                  </h4>
                </a>
              </div>
              <div className="mt-12 md:mt-0">
                <a href="/legal">
                  <h4 className="text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase">
                    Mentions Légales
                  </h4>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-base leading-6 text-gray-400 xl:text-center">
            &copy; {new Date().getFullYear()} ZenOps, Tous droits réservés.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

Footer.propTypes = {
  isCase: PropTypes.bool
};

Footer.defaultProps = {
  isCase: false
};
