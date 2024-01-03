import React, { useRef, useState } from "react";
import { Icon } from "../components";
import emailjs from "@emailjs/browser";

const ContactMe = () => {
  const form = useRef();
  const FORM_STATUSES = {
    INITIAL: "initial",
    SENDING: "sending",
    SUCCESS: "success",
    FAILED: "failed",
  };
  const [currentEmailStatus, setCurrentEmailStatus] = useState(
    FORM_STATUSES.INITIAL
  );
  const buttonStatus = {
    [FORM_STATUSES.SUCCESS]: {
      text: "sent",
      icon: "thumbs-up-solid",
    },
    [FORM_STATUSES.FAILED]: { text: "Try Again", icon: "redo-alt-solid" },
    [FORM_STATUSES.SENDING]: { text: "sending", icon: "three-dots-loading" },
    [FORM_STATUSES.INITIAL]: { text: "send", icon: "paper-plane" },
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setCurrentEmailStatus(FORM_STATUSES.SENDING);
    emailjs
      .sendForm(
        "service_yw9f5jn", //service id
        "template_9iyz96m", //template id
        form.current,
        "pA4Tk0FGJWjYeDvdj" //public key
      )
      .then(
        () => {
          setCurrentEmailStatus(FORM_STATUSES.SUCCESS);
          setTimeout(() => {
            resetForm();
          }, 3000);
        },
        (error) => {
          setCurrentEmailStatus(FORM_STATUSES.FAILED);
          console.log(error.text);
        }
      );
  };
  const resetForm = () => {
    form.current.reset();
    setCurrentEmailStatus(FORM_STATUSES.INITIAL);
  };

  return (
    <div className="flex flex-col flex-grow p-20">
      <h2 className="flex justify-end text-5xl font-semibold "> Contact Me.</h2>

      <h1 className="text-center text-4xl font-thin px-4">
        I'm always excited to hear from new people and tackle new challenges!
      </h1>

      <form
        ref={form}
        className="flex flex-col gap-4 px-32 flex-grow"
        onSubmit={sendEmail}
      >
        <div className="flex gap-4">
          <div className="flex flex-col gap-4 basis-1/3">
            <input
              type="text"
              placeholder="Name"
              name="from_name"
              className="input"
              maxLength="160"
              required
            ></input>
            <input
              type="text"
              placeholder="Email"
              name="reply_to"
              className="input"
              maxLength="160"
              required
            ></input>
          </div>
          <textarea
            type="text"
            placeholder="Message"
            name="message"
            rows="10"
            className="flex-grow input min-h-[100%] resize-none tall:resize-y tall:max-h-[300px] overflow-auto"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="group -left-1/3 overflow-hidden flex justify-self-end justify-center items-center gap- w-fit ml-auto hover:shadow-lg"
        >
          {buttonStatus[currentEmailStatus].text}
          <Icon
            name={buttonStatus[currentEmailStatus].icon}
            fill="white"
            className="w-6 group-hover:animate-wiggle"
          ></Icon>
        </button>
      </form>
    </div>
  );
};

export default ContactMe;
