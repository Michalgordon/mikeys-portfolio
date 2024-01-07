import { Skill } from "./index";
import { SKILLS, SOFT_SKILLS } from "../constants";
import { Fragment } from "react";
const Skills = () => {
  return (
    <Fragment>
      <div className="grid grid-cols-6 grid-flow-row gap-8">
        {SKILLS.map((skill, index) => (
          <Skill {...skill} key={index} iconColor="#8BA7B8"></Skill>
        ))}

        {SOFT_SKILLS.map((skill, index) => (
          <Skill {...skill} key={index} iconColor="#8BA7B8"></Skill>
        ))}
      </div>
    </Fragment>
  );
};
export default Skills;
