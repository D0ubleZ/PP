import "./style.css";

const Skill = () => {
  return (
    <div className="skills">
      <h1>Skills</h1>
      <div className="content">
        <div>
          <strong>Languages:</strong>
          <li>Java</li>
          <li>JavaScript</li>
          <li>C++</li>
          <li>HTML5</li>
          <li>Python</li>
        </div>
        <div>
          <strong>Tool:</strong>
          <li>Matlab</li>
          <li>Git & Github</li>
          <li>Google Colaboratory</li>
          <li>Android Studio</li>
          <li>Visual Studio Code</li>
        </div>
        <div>
          <strong>Other :</strong>
          <li>Adobe Premiere</li>
          <li>Go Programming</li>
          <li>RStudio</li>
          <li>Microsoft Office</li>
        </div>
      </div>
    </div>
  );
};

export default Skill;