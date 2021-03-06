import React, { Component } from "react";
import BBLogo from "../components/BBLogo";
import emailjs from "emailjs-com";
import Navbar from "../components/Nav";

const styles = {
  formGroup: "form-group flex flex-wrap mb-6",
  label: "block uppercase tracking-wide text-black text-lg font-bold my-2 mr-2",
  inputField:
    "form-control appearance-none block w-full bg-gray-100 text-black border border-gray-500 rounded-sm py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-200",
  sendButton: "px-4 py-2 rounded-full text-black font-bold border border-gray-500"
};

const Help = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hisctgp",
        "template_l986ync",
        e.target,
        "user_X20hK54ISCWfTYwMexShN"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="flex flex-col items-center bg-pink-200 min-h-screen">
      <Navbar />
      <h1 className="text-4xl font-semibold m-6">
        Need help? Send an issue report!
      </h1>
      <form
        id="contact-form"
        onSubmit={sendEmail}
        className="w-full max-w-lg px-10"
      >
        <div className={styles.formGroup}>
          <label htmlFor="name" className={styles.label}>
            Name
          </label>
          <input
            type="username"
            name="username"
            className={styles.inputField}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="exampleInputEmail1">
            Email address
          </label>
          <input
            type="email"
            name="user_email"
            className={styles.inputField}
            aria-describedby="emailHelp"
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="message">
            Please describe the issue or bug
          </label>
          <textarea
            name="message"
            className={styles.inputField}
            rows="5"
          ></textarea>
        </div>
        <input className={styles.sendButton} type="submit" value="Send" />
      </form>
    </div>
  );
};

export default Help;
