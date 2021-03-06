import React, { useState } from "react";
import axios from "axios";
import Check from "../images/check.svg";

export default () => {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, message: null }
  });
  const [inputs, setInputs] = useState({
    email: "",
    message: ""
  });
  const handleServerResponse = (success, message) => {
    if (success) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, message: message }
      });
      setInputs({
        email: "",
        message: ""
      });
    } else {
      setStatus({
        info: { error: true, message: message }
      });
    }
  };
  const handleOnChange = e => {
    e.persist();
    setInputs(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, message: null }
    });
  };
  const handleOnSubmit = e => {
    e.preventDefault();
    setStatus(prevStatus => ({ ...prevStatus, submitting: true }));
    console.log("ENV", process.env.API_URL);
    // console.log("ENV", process.env);
    // console.log("ENV API", API_URL);
    axios({
      method: "POST",
      url: `https://zenops.mktgzenops360.now.sh/api/sendMail`,
      data: inputs,
      headers: {}
    })
      .then(response => {
        // console.log("response", response);
        handleServerResponse(
          true,
          "Thank you, your message has been submitted."
        );
      })
      .catch(error => {
        // console.log(error, "ERROR");
        handleServerResponse(false, error.response.data.error);
      });
  };
  return (
    <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 ">
      <div className="">
        {/* <div
          className="mt-8 text-base leading-6 font-semibold uppercase tracking-wider text-primary-300"
          data-sal="slide-up"
          data-sal-delay="300"
          data-sal-easing="ease-in-out"
          data-sal-duration="500"
        >
          Commencez maintenant
        </div> */}
        <h2
          className="mt-2 text-gray-900 text-3xl leading-9 font-bold tracking-tight sm:text-4xl sm:leading-10"
          data-sal="slide-up"
          data-sal-delay="300"
          data-sal-easing="ease-in-out"
          data-sal-duration="500"
        >
          Envoyez un message
        </h2>
        <form
          className=" sm:flex flex-col"
          method="POST"
          onSubmit={handleOnSubmit}
        >
          <input
            className="mt-3 appearance-none w-full px-5 py-3 border border-gray-300 text-base leading-6 rounded-md text-gray-900 bg-white placeholder-gray-500 focus:outline-none focus:shadow-outline focus:border-blue-300 transition duration-150 ease-in-out"
            id="email"
            type="email"
            name="_replyto"
            placeholder="Entrez votre adresse mail"
            onChange={handleOnChange}
            required
            value={inputs.email}
            data-sal="slide-up"
            data-sal-delay="300"
            data-sal-easing="ease-in-out"
            data-sal-duration="500"
          />
          <textarea
            className="mt-3  appearance-none w-full px-5 py-3 border border-gray-300 text-base leading-6 rounded-md text-gray-900 bg-white placeholder-gray-500 focus:outline-none focus:shadow-outline focus:border-blue-300 transition duration-150 ease-in-out "
            id="message"
            name="message"
            placeholder="Écrivez votre message"
            onChange={handleOnChange}
            required
            value={inputs.message}
            data-sal="slide-up"
            data-sal-delay="300"
            data-sal-easing="ease-in-out"
            data-sal-duration="500"
          />
          <div className="my-3 mt-3 rounded-md shadow sm:flex-shrink-0">
            <button
              disabled={status.submitting}
              data-sal="slide-up"
              data-sal-delay="300"
              data-sal-easing="ease-in-out"
              data-sal-duration="500"
              className="transform hover:translate-x-1 transition duration-300 w-full flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-primary-600 hover:bg-primary-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
            >
              {!status.submitting ? (
                !status.submitted ? (
                  "Envoyez le message!"
                ) : (
                  <img src={Check} className="sent-check" />
                )
              ) : (
                "Envoi en cours..."
              )}
            </button>
          </div>
        </form>
        {/* <form
            className="mt-8 sm:flex flex-col"
            method="POST"
            action="https://gatsby-starter-portfolio-bella.now.sh/api/sendMail"
            onSubmit={handleOnSubmit}
          >
            <input
              className="mt-3 appearance-none w-full px-5 py-3 border border-gray-300 text-base leading-6 rounded-md text-gray-900 bg-white placeholder-gray-500 focus:outline-none focus:shadow-outline focus:border-blue-300 transition duration-150 ease-in-out sm:max-w-xs"
              id="email"
              type="email"
              name="_replyto"
              placeholder="Entrez votre adresse mail"
              onChange={handleOnChange}
              required
              value={inputs.email}
              data-sal="slide-up"
              data-sal-delay="300"
              data-sal-easing="ease-in-out"
              data-sal-duration="500"
            />
            <textarea
              className="mt-3  appearance-none w-full px-5 py-3 border border-gray-300 text-base leading-6 rounded-md text-gray-900 bg-white placeholder-gray-500 focus:outline-none focus:shadow-outline focus:border-blue-300 transition duration-150 ease-in-out sm:max-w-xs"
              id="message"
              name="message"
              placeholder="Écrivez votre message"
              onChange={handleOnChange}
              required
              value={inputs.message}
              data-sal="slide-up"
              data-sal-delay="300"
              data-sal-easing="ease-in-out"
              data-sal-duration="500"
            />
            <div className="my-3 mt-3 rounded-md shadow sm:flex-shrink-0">
              <button
                disabled={status.submitting}
                data-sal="slide-up"
                data-sal-delay="300"
                data-sal-easing="ease-in-out"
                data-sal-duration="500"
                className="transform hover:translate-x-1 transition duration-300 w-full flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-primary-600 hover:bg-primary-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out sm:max-w-xs"
              >
                {!status.submitting ? (
                  !status.submitted ? (
                    "Envoyer le message!"
                  ) : (
                    <img src={Check} className="sent-check" />
                  )
                ) : (
                  "Envoi en cours..."
                )}
              </button>
              {status.info.error && (
                <div className="error">Error: {status.info.message}</div>
              )}
              {!status.info.error && status.info.message && (
                <p>{status.info.message}</p>
              )}
            </div>
          </form> */}
      </div>
    </div>
  );
};

{
  /* <form onSubmit={handleOnSubmit}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="_replyto"
          onChange={handleOnChange}
          required
          value={inputs.email}
        />
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          onChange={handleOnChange}
          required
          value={inputs.message}
        />
        <button type="submit" disabled={status.submitting}>
          {!status.submitting
            ? !status.submitted
              ? "Submit"
              : "Submitted"
            : "Submitting..."}
        </button>
      </form>
      {status.info.error && (
        <div className="error">Error: {status.info.message}</div>
      )}
      {!status.info.error && status.info.message && (
        <p>{status.info.message}</p>
      )} */
}
