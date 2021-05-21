import "./style.css";
import ReactPlayer from 'react-player'

const Work = () => {
  return (
    <div className="header">
      <a
        href="https://github.com/D0ubleZ"
        target="_blank"
      >
        <h1>My Project</h1>
      </a>
      <div className="works">
      <a
        href="https://github.com/D0ubleZ/Surrey-Restaurant-Tracking"
        target="_blank"
      >
        <img
          src={`${process.env.PUBLIC_URL}/logo.jpeg`}
          alt="SRT"
          width = "256"
          height = "256"
        />
        <p>Surrey Restaurant Tracking</p>
      </a>
      <a
        href="https://github.com/D0ubleZ/cmpt726-garbage-classification"
        target="_blank"
      >
        <img
          src={`${process.env.PUBLIC_URL}/logo.jpeg`}
          alt="garbage"
          width = "256"
          height = "256"
        />
        <p>Garbage Classification</p>
      </a>
      <a
        href="https://github.com/D0ubleZ/cmpt726-garbage-classification"
        target="_blank"
      >
        <img
          src={`${process.env.PUBLIC_URL}/logo.jpeg`}
          alt="profile"
          width = "256"
          height = "256"
        />
        <p>Personal Profile</p>
      </a>
      <a
        href="https://github.com/D0ubleZ/Rush-Life"
        target="_blank"
      >
        <img
          src={`${process.env.PUBLIC_URL}/logo.jpeg`}
          alt="rush-life"
          width = "256"
          height = "256"
        />
        <p>Fitness Webapp</p>
      </a>
      </div>
      
      <h1>My Hobby</h1>
      <div className = "video">
        <ReactPlayer url = "https://youtu.be/K-Y2RUac97A"/>
        <ReactPlayer url = "https://youtu.be/DnfqQlWOpy4"/>
      </div>
    </div>
  );
};

export default Work;