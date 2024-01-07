import { Fragment } from "react";
import { RANDOM_FACTS } from "../constants";
import { Icon } from "./index";
const RandomFacts = () => {
  return (
    <Fragment>
      {RANDOM_FACTS.map((fact, index) => (
        <h3
          className={`flex items-center gap-4 ${
            index % 4 == 0
              ? "font-thin italic"
              : index % 2 == 0
              ? "text-base front-bold tracking-wider	"
              : index % 3 == 0
              ? "text-sm italic font-semibold uppercase"
              : "text-2xl last:uppercase"
          }`}
          key={index}
        >
          <Icon name={fact.iconName} className={"w-6"} fill="#8BA7B8"></Icon>

          {fact.title}
          <Icon name={fact.iconName} className={"w-6"} fill="#8BA7B8"></Icon>
        </h3>
      ))}
    </Fragment>
  );
};

export default RandomFacts;
