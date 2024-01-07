import React, { useRef, useState } from "react";
import { Icon, ProfilePicture } from "../components";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

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
    <div className="flex flex-col flex-grow justify-center px-20">
      <motion.h2
        className="section-header relative -top-20"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, type: "spring", bounce: 0.5 }}
      >
        Contact Me.
      </motion.h2>

      <div className="flex flex-col justify-center items-center gap-12">
        <motion.div
          className="flex justify-center gap-3"
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.7, type: "spring" }}
        >
          <ProfilePicture className={"w-16 self-end z-10"}></ProfilePicture>
          <h1 className="msg-bubble text-3xl w-[60%] font-thin text-white bg-russian-blue rounded-[2rem] pl-5 py-3 self-end">
            I'm always excited to hear from new people and tackle new
            challenges!
          </h1>
        </motion.div>

        <motion.form
          ref={form}
          className="flex w-full items-center gap-3 px-32"
          onSubmit={sendEmail}
          initial={{ opacity: 0 }}
          animate={{ opacity: "100%" }}
          transition={{ ease: "easeOut", duration: 1 }}
        >
          <div className="flex flex-col gap-3 basis-1/3 mr-1">
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
            className="input resize-none h-full"
            required
          ></textarea>
          <button type="submit" className="">
            <Icon
              name={buttonStatus[currentEmailStatus].icon}
              fill="#8BA7B8"
              className="w-12 hover:animate-wiggle "
            ></Icon>
          </button>
        </motion.form>
      </div>
    </div>
  );
};

export default ContactMe;
