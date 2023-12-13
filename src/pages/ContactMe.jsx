import React, { useRef } from "react";
import { Icon } from "../components";
import emailjs from "@emailjs/browser";

const ContactMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_yw9f5jn", //service id
        "template_9iyz96m", //template id
        form.current,
        "pA4Tk0FGJWjYeDvdj" //public key
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
    <div className="flex flex-col flex-grow gap-20 pt-20">
      <h1 className="text-center text-5xl font-thin">
        I'm always excited to hear from new people <br></br> and tackle new
        challenges!
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
          className="-left-1/3 overflow-hidden flex justify-self-end justify-center items-center gap- w-fit ml-auto animate-slide-out-and-back-right"
        >
          send
          <Icon name="paper-plane" fill="white" className="w-6"></Icon>
        </button>
      </form>
    </div>
  );
};

export default ContactMe;
