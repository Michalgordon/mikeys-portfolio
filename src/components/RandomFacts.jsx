import { Fragment } from "react";
import { RANDOM_FACTS } from "../constants";
const RandomFacts = () => {
  return (
    <Fragment>
      {RANDOM_FACTS.map((fact, index) => (
        <h3
          className={`${
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
          {fact.title}
        </h3>
      ))}
    </Fragment>
  );
};

export default RandomFacts;
