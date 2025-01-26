import { useEffect, useState } from "react";
import { getSkills } from "../../../../libs/api/api";
import Loading from "../../../components/Loading/Loading";
import quotes from "../../../../assets/svg/quotes.svg";
import "./Skill.less";

export default function Skill() {
  const [skills, setSkills] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      const skills = await getSkills();
      setSkills(skills);
      setIsLoading(false);
    }

    getData();
  }, []);

  const shouldChangeColor = (index, length) => {
    const groups = [4, 5, 6, 10, 11, 12, 16, 17, 18, 22, 23, 24];

    for (let i = 0; i < length; i++) {
      if (index === groups[i]) {
        return true;
      }
    }
    return false;
  };

  // TODO: Add a baseline skill base on https://www.vektora.studio/project and react-icon
  return (
    <section id="skills" className="py-16 relative">
      {isLoading ? (
        <Loading />
      ) : (
        <div className="bg-[rgba(255,247,212,0.38)]  rounded-xl px-[60px] py-[90px] mx-auto shadow">
          <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
          <p className="flex justify-center gap-4 mb-10">
            <img className="w-10 h-10 " src={quotes} alt="quotes" />
            <span className="self-end text-xl">
              Great things are built from the first line of code
            </span>
            <img className="w-10 h-10 rotate-180" src={quotes} alt="quotes" />
          </p>
          <div className="skill-container grid grid-cols-1 items-center md:grid-cols-3 gap-6 ">
            {skills?.map((skill, index) => (
              <div key={skill.id} className="p-4 rounded-lg">
                <div
                  className={`flex  mb-2 items-center ${
                    shouldChangeColor(index + 1, skills.length)
                      ? "justify-start"
                      : "justify-center"
                  }`}>
                  <img src={skill.img.url} alt={skill.skill_name} />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
