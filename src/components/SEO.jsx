/* eslint-disable react/require-default-props */
import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import config from "../../config/website";
// import MetaBanner from "../images/meta_zenops.png";

const SEO = props => {
  const { caseNode, casePath, caseSEO } = props;
  let title;
  let description;
  let image;
  let postURL;
  if (caseSEO) {
    const caseMeta = caseNode.data;
    title = caseMeta.title.text;
    description = caseMeta.subtitle.text;
    image = caseMeta.header_image.localFile.childImageSharp.resize.src;
    postURL = config.siteUrl + config.pathPrefix + casePath;
  } else {
    title = config.siteTitle;
    description = config.siteDescription;
    image = config.siteLogo;
  }
  const realPrefix = config.pathPrefix === "/" ? "" : config.pathPrefix;
  image = config.siteUrl + realPrefix + image;
  const blogURL = config.siteUrl + config.pathPrefix;
  let schemaOrgJSONLD = [
    {
      "@context": "http://schema.org",
      "@type": "WebSite",
      "@id": blogURL,
      url: blogURL,
      name: title,
      alternateName: config.siteTitleAlt ? config.siteTitleAlt : ""
    }
  ];
  if (caseSEO) {
    schemaOrgJSONLD = [
      {
        "@context": "http://schema.org",
        "@type": "BlogPosting",
        "@id": postURL,
        url: postURL,
        name: title,
        alternateName: config.siteTitleAlt ? config.siteTitleAlt : "",
        headline: title,
        image: {
          "@type": "ImageObject",
          url: image
        },
        description,
        datePublished: caseNode.first_publication_date,
        dateModified: caseNode.last_publication_date,
        author: {
          "@type": "Person",
          name: config.author
        },
        publisher: {
          "@type": "Organization",
          name: config.author,
          logo: {
            "@type": "ImageObject",
            url: config.siteUrl + realPrefix + config.siteLogo
          }
        },
        isPartOf: blogURL,
        mainEntityOfPage: {
          "@type": "WebSite",
          "@id": blogURL
        }
      }
    ];
  }
  return (
    <Helmet>
      <html lang={config.siteLanguage} />
      <title>{title}</title>
      <link rel="apple-touch-icon" href="/favicons/apple-icon.png" />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicons/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicons/favicon-16x16.png"
      />
      <link rel="shortcut icon" href="/favicons/favicon.ico" />
      <meta name="msapplication-TileColor" content="#b710a1" />
      <meta name="msapplication-config" content="browserconfig.xml" />
      <meta name="description" content={description} />
      <meta name="image" content="/meta_banner.png" />
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgJSONLD)}
      </script>
      <meta property="og:locale" content={config.ogLanguage} />
      <meta property="og:site_name" content={config.ogSiteName} />
      <meta property="og:url" content={caseSEO ? postURL : blogURL} />
      {caseSEO ? <meta property="og:type" content="article" /> : null}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="/meta_banner.png" />
      <meta
        property="fb:app_id"
        content={config.siteFBAppID ? config.siteFBAppID : ""}
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:creator"
        content={config.userTwitter ? config.userTwitter : ""}
      />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="/meta_banner.png" />
      <link
        href="https://fonts.googleapis.com/css?family=Raleway:300,400,500,600,700,800,900&display=swap"
        rel="stylesheet"
      />
      {/* <script>
        {`        window.prismic =
        {
          endpoint: "https://demo-bella.cdn.prismic.io/api/v2"
        }
        ;`}
      </script> */}
      {/* <script
        async
        defer
        src="//static.cdn.prismic.io/prismic.js?repo=demo-bella&new=true"
      ></script>
      <script
        type="text/javascript"
        src="https://static.cdn.prismic.io/prismic.min.js?new=true"
      ></script> */}
      <link
        rel="stylesheet"
        type="text/css"
        charset="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=UA-160422852-2"
      ></script>
      <script>
        window.dataLayer = window.dataLayer || []; function gtag()
        dataLayer.push(arguments) gtag("js", new Date()); gtag("config",
        "UA-160422852-2");
      </script>
    </Helmet>
  );
};

export default SEO;

SEO.propTypes = {
  caseNode: PropTypes.object,
  casePath: PropTypes.string,
  caseSEO: PropTypes.bool
};
