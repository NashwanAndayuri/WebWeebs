import HeroImage from "/assets/teto.gif";
import Sybau from "/assets/teto_sad.gif";

const Image = {
  HeroImage,Sybau,
};

export default Image;

import Tools1 from "/assets/himakom.jpeg";
import Tools2 from "/assets/himakom.jpeg";
import Tools3 from "/assets/himakom.jpeg";
import Tools4 from "/assets/himakom.jpeg";
import Tools5 from "/assets/himakom.jpeg";
import Tools6 from "/assets/himakom.jpeg";
import Tools7 from "/assets/himakom.jpeg";
import Tools8 from "/assets/himakom.jpeg";

export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "General Manager",
    ket: "A General Manager oversees all daily operations, manages resources and staff, and executes strategic plans to ensure a company or division achieves its financial and operational goals.",
    skills: "Leadership, Planning",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "Human Resource",
    ket: "Manages the entire employee lifecycle, including recruitment, training, compensation, and employee relations, to support the organization's goals.",
    skills: "Interpersonal, Conflict Resolution",
    dad: "200",
  },
  {
    id: 3,
    gambar: Tools3,
    nama: "IPC",
    ket: "Establishes and monitors internal rules and procedures to ensure operational efficiency, risk management, and compliance with regulations.",
    skills: "Analytical, Critical Thinking",
    dad: "300",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "Sekretaris & Bendahara",
    ket: "A dual role handling the organization's administrative, communication, and record-keeping tasks (Secretary) while also managing its financial assets, budgeting, and reporting (Treasurer).",
    skills: "Organizational & Administrative Skills",
    dad: "400",
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "Skill Development",
    ket: "Identifies competency gaps and creates targeted training programs to enhance the abilities of the workforce and support career growth.",
    skills: "Coaching, Facilitation",
    dad: "500",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "SNF",
    ket: "Creating sponsorship proposals, pitching to companies, and managing donor relationships.",
    skills: "negotiations, sales, proposal writing, professionalism, financial literacy",
    dad: "600",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "Media",
    ket: "Manages the creation, production, and distribution of all digital and print content to communicate the organization's message to its target audience.",
    skills: "Content Creation, Digital Marketing",
    dad: "700",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "Public Relation",
    ket: "Strategically manages communication to build and maintain a positive public image and a strong, favorable relationship with stakeholders, the media, and the community.",
    skills: "Crisis Communication, Media Relations, Strategic Communication",
    dad: "800",
  },
];


import Oti1 from "/assets/OmahTi.png";
import Oti2 from "/assets/OmahTi.png";
import Oti3 from "/assets/OmahTi.png";
import Oti4 from "/assets/OmahTi.png";
import Oti5 from "/assets/OmahTi.png";
import Oti6 from "/assets/OmahTi.png";
import Oti7 from "/assets/OmahTi.png";
import Oti8 from "/assets/OmahTi.png";


export const listOTi = [
  {
    id: 1,
    gambar: Oti1,
    nama: "Front-End",
    ket: "Learning how to build the part of the website you see and interact with. You'll turn UI/UX designs into functional code.",
    skills: "HTML, CSS, JavaScript, and a framework like React, Vue, or Svelte.",
    dad: "100",
  },
  {
    id: 2,
    gambar: Oti2,
    nama: "Back-End",
    ket: "Learning how to build the 'brain' of an application. You'll manage databases, server logic, and APIs.",
    skills: "Node.js, Python (Django/Flask), Go, SQL/NoSQL databases, API design (REST/gRPC).",
    dad: "200",
  },
  {
    id: 3,
    gambar: Oti3,
    nama: "UI/UX",
    ket: "Focusing on how a product feels and looks. You'll conduct user research, create wireframes, and design high-fidelity mockups for apps/websites.",
    skills: "Figma, design thinking, user research, wireframing, prototyping, user empathy.",
    dad: "300",
  },
  {
    id: 4,
    gambar: Oti4,
    nama: "CyberSecurty",
    ket: "Learning to break and defend systems. Expect to practice on 'Capture The Flag' (CTF) challenges, study network security, and learn penetration testing.",
    skills: "Network security, web exploitation, reverse engineering, cryptography, pentesting tools.",
    dad: "400",
  },
  {
    id: 5,
    gambar: Oti5,
    nama: "Mobile App",
    ket: "Developing applications for smartphones. You'll likely choose a path: native (Kotlin/Swift) or cross-platform (Flutter/React Native).",
    skills: "Flutter (Dart), React Native (JS), or native Kotlin (Android) / Swift (iOS).",
    dad: "500",
  },
  {
    id: 6,
    gambar: Oti6,
    nama: "Game Dev",
    ket: "Learning to create video games. This involves programming game logic, using game engines, and potentially 2D/3D asset creation.",
    skills: "Game Dev, creativity, game logic",
    dad: "600",
  },
  {
    id: 7,
    gambar: Oti7,
    nama: "DSAI",
    ket: "Focusing on data analysis and machine learning. You'll learn to clean data, build predictive models, and work with AI libraries.",
    skills: "Python, Pandas, NumPy, Scikit-learn, TensorFlow/PyTorch, SQL",
    dad: "700",
  },
  {
    id: 8,
    gambar: Oti8,
    nama: "CP",
    ket: "Training for programming competitions (like ICPC). This is less about building projects and more about solving complex logic puzzles and algorithm problems efficiently.",
    skills: "Advanced algorithms, data structures, C++/Java/Python, problem-solving, mathematics.",
    dad: "800",
  },
];

import OmahTi from "/assets/urmom.jpg";
import Himakom from "/assets/urdad.jpg";


export const listProyek = [
  {
    id: 1,
    gambar: OmahTi,
    nama: "OmahTi",
    desk: "Organization specializes in skill-development",
    tools: ["Front-End", "Back-End", "UI/UX", "CyberSecurty","Mobile App","Game Dev","DSAI","CP"],
    dad: "200",
    link: "https://www.instagram.com/omahti_ugm/",
    more: "#oti",
  },
  {
    id: 2,
    gambar: Himakom,
    nama: "Himakom",
    desk: "Organization as a forum for the aspirations of all Computer Science students",
    tools: ["GM","HR","IPC","SekBend", "SkillDev", "SNF",  "Media","PR"],
    dad: "300",
    link: "https://www.instagram.com/himakomugm/",
    more: "#hima",
  },
  
];
