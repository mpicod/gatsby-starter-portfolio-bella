import React, { useState } from "react";
import axios from "axios";

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
    console.log("ENV", process.env);
    // console.log("ENV API", API_URL);
    axios({
      method: "POST",
      url: `${process.env.API_URL}/api/sendMail`,
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
    <main>
      <h1>React and Formspree</h1>
      <hr />
      <form onSubmit={handleOnSubmit}>
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
      )}
    </main>
  );
};
