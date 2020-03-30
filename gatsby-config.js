require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
});
const config = require("./config/website");

const pathPrefix = config.pathPrefix === "/" ? "" : config.pathPrefix;

module.exports = {
  /* General Information */
  pathPrefix: config.pathPrefix,
  siteMetadata: {
    siteUrl: config.siteUrl + pathPrefix
  },
  /* Plugins */
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-emotion",
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [
          require("tailwindcss")("./tailwind.config.js") // Optional: Load custom Tailwind CSS configuration
        ]
      }
    },
    {
      resolve: "gatsby-source-prismic",
      options: {
        repositoryName: "demo-bella",
        accessToken: `MC5YaUt0N0JBQUFDUUFldDVt.YO-_vVfvv73vv71377-9D--_ve-_vREGFjRvMX3vv70z77-977-9B--_ve-_vUrvv73vv71LOhHvv71L`,
        linkResolver: ({ node, key, value }) => doc => `/${doc.uid}`,
        htmlSerializer: ({ node, key, value }) => (
          type,
          element,
          content,
          children
        ) => {
          // Your HTML serializer
        },
        schemas: {
          homepage: require("./src/schemas/homepage.json"),
          pillarpage: require("./src/schemas/pillarpage.json"),
          aboutpage: require("./src/schemas/aboutpage.json"),
          legal: require("./src/schemas/legal.json")
        },
        shouldDownloadImage: ({ node, key, value }) => {
          // Return true to download the image or false to skip.
          return false;
        }
      }
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-lodash",
    {
      resolve: "gatsby-plugin-typography",
      options: {
        pathToConfigModule: "config/typography.js"
      }
    },
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: config.siteTitle,
        short_name: config.siteTitleAlt,
        description: config.siteDescription,
        start_url: config.pathPrefix,
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: "fullscreen",
        icon: `src/images/logo_zenops.svg` // This path is relative to the root of the site.
        // icons: [
        //   {
        //     src: "/favicons/android-chrome-192x192.png",
        //     sizes: "192x192",
        //     type: "image/png"
        //   },
        //   {
        //     src: "/favicons/android-chrome-512x512.png",
        //     sizes: "512x512",
        //     type: "image/png"
        //   }
        // ]
      }
    },
    /* Must be placed at the end */
    "gatsby-plugin-offline",
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
        threshold: 1, // Percentage of an element's area that needs to be visible to launch animation
        once: true, // Defines if animation needs to be launched once
        disable: false, // Flag for disabling animations

        // Advanced Options
        selector: "[data-sal]", // Selector of the elements to be animated
        animateClassName: "sal-animate", // Class name which triggers animation
        disabledClassName: "sal-disabled", // Class name which defines the disabled state
        rootMargin: "0% 50%", // Corresponds to root's bounding box margin
        enterEventName: "sal:in", // Enter event name
        exitEventName: "sal:out" // Exit event name
      }
    },
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: process.env.GA_ID,
          anonymize: true // default is true
        }
      }
    }
  ]
};
