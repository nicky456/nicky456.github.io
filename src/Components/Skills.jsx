import SkillBar from "./SkillBar";
import "./skills.css";

const Skills = () => {
  const testData = [
    { bgcolor: "#2eb8e9", completed: 85, label: "JavaScipt" },
    { bgcolor: "#fe0b55", completed: 65, label: "TypeScript" },
    { bgcolor: "#5570d1", completed: 80, label: "React" },
    { bgcolor: "#fc670b", completed: 85, label: "Next.js" },
    { bgcolor: "#8f4ec2", completed: 70, label: "Redux" },
    { bgcolor: "#ffa101", completed: 70, label: "API" },
    { bgcolor: "#f00190", completed: 60, label: "Adobe Photoshop" },
    { bgcolor: "#63b873", completed: 90, label: "Wordpress" },
  ];

  return (
    <div className="skillsection">
      <h3 className="title text">my skills</h3>
      <div className="skills">
        {testData.map((item, idx) => (
          <SkillBar
            key={idx}
            label={item.label}
            bgcolor={item.bgcolor}
            completed={item.completed}
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;
