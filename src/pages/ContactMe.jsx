import { Icon } from "../components";

const ContactMe = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const inputs = event.target.elements;
    const data = {};

    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].name) {
        data[inputs[i].name] = inputs[i].value;
      }
    }
    console.log(JSON.stringify(data));
  };

  return (
    <div className="flex flex-col flex-grow gap-20 pt-20">
      <h1 className="text-center text-5xl font-thin">
        I'm always excited to hear from new people <br></br> and tackle new
        challenges!
      </h1>

      <form
        className="flex flex-col gap-4 px-32 flex-grow"
        // onSubmit={handleSubmit}
        action="mailto:michalgordon92@gmail.com"
        method="post"
        encType="text/plain"
      >
        <div className="flex gap-4">
          <div className="flex flex-col gap-4 basis-1/3">
            <input
              type="text"
              placeholder="Name"
              name="name"
              className="input"
              maxLength="160"
              required
            ></input>
            <input
              type="text"
              placeholder="Email"
              name="email"
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
          className="flex justify-self-end justify-center items-center gap- w-fit ml-auto"
        >
          send
          <Icon name="paper-plane" fill="white" className="w-6"></Icon>
        </button>
      </form>
    </div>
  );
};

export default ContactMe;
