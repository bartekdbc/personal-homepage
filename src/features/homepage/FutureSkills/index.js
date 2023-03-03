import { nanoid } from "@reduxjs/toolkit";
import List from "../../../common/List";
import Section from "../../../common/Section";
import { futureSkills } from "./futureSkills";

const FutureSkills = () => {
  const futureSkillsWithIndex = futureSkills.map((skill) => ({
    ...skill,
    id: nanoid(),
  }));

  return (
    <Section
      title={"What I want to learn next 🎓"}
      body={<List listContent={futureSkillsWithIndex} />}
    />
  );
};

export default FutureSkills;
