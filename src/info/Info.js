import self from "../img/self.png";
import mock1 from "../img/mock1.png";
import mock2 from "../img/mock2.png";
import mock3 from "../img/mock3.png";
import mock4 from "../img/mock4.png";

export let colors = ["#79db75", "#447b41 "];

export const info = {
  firstName: "Mustafa",
  lastName: "Marzouk",
  initials: "👽",
  position: "a Full Stack Developer",
  selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
  gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
  baseColor: colors[0],
  miniBio: [
    {
      emoji: "☕",
      text: "fueled by tea",
    },
    {
      emoji: "🌎",
      text: "based in Egypt",
    },
    {
      emoji: "🎓",
      text: "cs student at MSA university",
    },
    {
      emoji: "📧",
      text: "mwmma5000@gmail.com",
    },
  ],
  socials: [
    {
      link: "https://github.com/TopVirusMinus",
      icon: "fa fa-github",
      label: "github",
    },
    {
      link: "https://www.youtube.com/channel/UC8giOecbRtB_szJMiVu_mAQ",
      icon: "fa fa-youtube-play",
      label: "youtube",
    },
    {
      link: "https://www.linkedin.com/in/mustafa-walid-273b951a9/",
      icon: "fa fa-linkedin",
      label: "linkedin",
    },
    {
      link: "https://www.instagram.com/marzouk.dev/",
      icon: "fa fa-instagram",
      label: "instagram",
    },
  ],
  bio: "Hello! I'm Mustafa. I'm a full stack web developer . I studied CS at MSA university, You should hire me!",
  skills: {
    proficientWith: [
      "javascript",
      "python",
      "react",
      "git",
      "github",
      "bootstrap",
      "tailwind",
      "Redux Toolkit",
    ],
    exposedTo: ["nodejs", "PHP", "C/C++", "C#", "FastAPI", "adobe photoshop"],
  },
  hobbies: [
    {
      label: "competitive programming",
      emoji: "🏹",
    },
    {
      label: "gaming",
      emoji: "🎮",
    },
    {
      label: "gym",
      emoji: "💪",
    },
    {
      label: "eating",
      emoji: "🍕",
    },
  ],
  portfolio: [
    {
      title: "Job Finding Site",
      live: "https://topvirusminus.github.io/Job-Finding-Website/",
      source: "https://github.com/TopVirusMinus/Job-Finding-Website",
      technologies: ["React ⚛", "Redux Toolkit"],
      displayType: "image",
      image: mock1,
    },
    {
      title: "Graph Pathfinder Visualization",
      live: "https://topvirusminus.github.io/Graph-Path-Finding-Visualizer/",
      source: "https://github.com/TopVirusMinus/Graph-Path-Finding-Visualizer",
      technologies: ["js", "FastAPI 🐍"],
      displayType: "image",
      image: mock2,
    },
    {
      title: "Maze Pathfinder Visualization",
      live: "https://topvirusminus.github.io/Maze-Solver-React/",
      source: "https://github.com/TopVirusMinus/Maze-Solver-React",
      technologies: ["React ⚛", "Redux Toolkit", "FastAPI 🐍"],
      displayType: "image",
      image: mock3,
    },
    {
      title: "Pyro Notes",
      live: "https://topvirusminus.github.io/pyro-notes/",
      source: "https://github.com/TopVirusMinus/pyro-notes",
      technologies: ["React ⚛", "Redux Toolkit"],
      displayType: "image",
      image: mock4,
    },
    {
      title: "Python Manim Library Animation",
      live: "https://www.youtube.com/watch?v=njSApz0S9GI",
      source: "https://github.com/TopVirusMinus/manim-projects",
      technologies: ["Python 🐍"],
      displayType: "yt",
      image: "https://www.youtube.com/embed/njSApz0S9GI",
    },
  ],
};
