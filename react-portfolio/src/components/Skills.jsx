
function Skills() {
  const skills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React",
    "Responsive Design",
    "UI/UX Design",
    "Figma",
    "Git & GitHub",
  ];

  return (
    <section className="section skills" id="skills">
      <p className="eyebrow">03 / EXPERTISE</p>

      <h2 className="section-title">
        My <span>toolkit.</span>
      </h2>

      <div className="skill-grid">
        {skills.map((skill) => (
          <div className="skill-card" key={skill}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
