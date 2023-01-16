import SkillBar from "./SkillBar";
import "./skills.css";

const Skills = () => {
  const testData = [
    { bgcolor: "#2eb8e9", completed: 80, label: "CSS" },
    { bgcolor: "#fe0b55", completed: 85, label: "HTML" },
    { bgcolor: "#5570d1", completed: 80, label: "JavaScipt" },
    { bgcolor: "#fc670b", completed: 80, label: "React" },
    { bgcolor: "#8f4ec2", completed: 20, label: "Node.js" },
    { bgcolor: "#ffa101", completed: 80, label: "Adobe Illustrator" },
    { bgcolor: "#f00190", completed: 60, label: "Adobe Photoshop" },
    { bgcolor: "#63b873", completed: 90, label: "Wordpress" },
  ];

  return (
    <>
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
    </>
  );
};

export default Skills;
