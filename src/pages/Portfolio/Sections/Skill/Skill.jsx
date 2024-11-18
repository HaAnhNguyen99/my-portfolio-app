import { useEffect, useState } from 'react';
import { getSkills } from '../../../../libs/api/api';
import Loading from '../../../components/Loading';

export default function Skill() {
  const [skills, setSkills] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      const skills = await getSkills();
      console.log(skills);
      setSkills(skills);
      setIsLoading(false);
    }

    getData();
  }, []);

  return (
    <section id="skills" className="py-16 relative">
      {isLoading ? (
        <Loading />
      ) : (
        <div className="container mx-auto px-6 ">
          <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
            {skills?.map((skill) => (
              <div key={skill.id} className="bg-white p-4 rounded-lg shadow">
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">{skill.skill_name}</span>
                  {/* <span>{skill.proficiency}%</span> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
