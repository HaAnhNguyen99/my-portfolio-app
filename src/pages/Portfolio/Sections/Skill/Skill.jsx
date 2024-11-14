export default function Skill() {
  const skills = [
    { name: 'React', proficiency: 90 },
    { name: 'JavaScript', proficiency: 85 },
    { name: 'TypeScript', proficiency: 80 },
    { name: 'HTML/CSS', proficiency: 95 },
    { name: 'Node.js', proficiency: 75 },
    { name: 'Tailwind CSS', proficiency: 85 },
  ];

  return (
    <section id="skills" className="py-16 bg-[#D4F6FF]">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills?.map((skill, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow">
              <div className="flex justify-between mb-2">
                <span className="font-semibold">{skill.name}</span>
                <span>{skill.proficiency}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-[#FFDDAE] h-2.5 rounded-full transition-all duration-500"
                  style={{ width: `${skill.proficiency}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
