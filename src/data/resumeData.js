import moviesAppImg from "../assets/moviesapp.jpg";
import medicinalPlantsImg from "../assets/medicinal-plants.jpg";
import driveGuardImg from "../assets/drive-guard.jpg";

export const personalInfo = {
  name: "Jayaram",
  fullName: "Jayaram Bantumilli",
  phone: "+91 8179888471",
  email: "bjayaram189@gmail.com",
  tagline: "Full Stack Developer & ML Enthusiast",
  heroSubtitle:
    "I'm a full-stack developer from India. From responsive web applications to machine learning models, I build solutions that are both powerful and elegant.",
  aboutIntro:
    "I'm a motivated Computer Science graduate with hands-on experience in full-stack development and machine learning. I aim to apply my skills, grow professionally, and contribute meaningfully in a collaborative and dynamic environment that fosters creativity and learning.",
  socials: {
    linkedin: "https://www.linkedin.com/in/jayaram-bantumilli",
    github: "https://github.com/Jayaram13690/",
    leetcode: "https://leetcode.com/u/jayaram233/",
    hackerrank: "https://www.hackerrank.com/profile/20A91A0568",
  },
};

export const education = [
  {
    institution: "Aditya Engineering College",
    degree: "Bachelor of Technology",
    field: "Computer Science Engineering",
    gpa: "8.47",
    duration: "Aug 2020 — Jun 2024",
  },
];

export const internships = [
  {
    role: "Java Full Stack Developer",
    company: "ExcelR",
    duration: "Aug 2024 — Feb 2025",
    highlights: [
      "Gained hands-on experience in frontend technologies (HTML, CSS, JavaScript, React.js) and backend technologies (Java, Spring Boot, MySQL).",
      "Developed and deployed end-to-end web applications, integrating responsive user interfaces with backend services.",
      "Implemented CRUD operations and API integration with Spring Boot and MySQL, ensuring efficient data management.",
    ],
  },
  {
    role: "AI/ML Intern",
    company: "Technical Hub",
    duration: "Jun 2022 — Nov 2022",
    highlights: [
      "Supported the creation and refinement of machine learning models, resulting in a 15% increase in predictive performance.",
      "Worked with multidisciplinary teams to define data needs and optimized data gathering strategies.",
      "Actively engaged in project discussions, providing valuable input on AI strategies and presenting analytical results.",
    ],
  },
];

export const projects = [
  {
    title: "MoviesApp",
    date: "Dec 2024",
    description:
      "A dynamic frontend web application built with React.js to present an extensive movie collection. Users can add and manage their favorite movies with a fully responsive, user-friendly interface.",
    tech: ["React.js", "JavaScript", "HTML", "CSS"],
    image: moviesAppImg,
    link: "https://github.com/Jayaram13690/MoviesApp",
    highlights: [
      "Designed and implemented a dynamic frontend using HTML, CSS, JavaScript, and React.js.",
      "Developed user-friendly features for adding and managing favorite movies.",
      "Integrated responsive design principles for optimal cross-device performance.",
    ],
  },
  {
    title: "Medicinal Plants Identification",
    subtitle: "Using MobileNet",
    date: "Mar 2024",
    description:
      "A web application leveraging MobileNet deep learning architecture for identifying medicinal plants from images, providing detailed information on their medicinal properties.",
    tech: ["Python", "MobileNet", "Deep Learning", "TensorFlow"],
    image: medicinalPlantsImg,
    link: "https://github.com/Jayaram13690/MedicinalPlantIdentification",
    highlights: [
      "Created a web application leveraging MobileNet for identifying medicinal plants.",
      "Utilized advanced deep learning techniques for precise image classification.",
      "Delivered detailed information on the medicinal properties of recognized plants.",
    ],
  },
  {
    title: "Drive Guard Alert System",
    date: "Nov 2022",
    description:
      "A drowsiness detection system that monitors a driver's eye status via webcam using OpenCV and a CNN model. Triggers an alarm when prolonged eye closure is detected to prevent accidents.",
    tech: ["Python", "OpenCV", "CNN", "TensorFlow", "Deep Learning"],
    image: driveGuardImg,
    link: "https://github.com/Jayaram13690/Drive_Guard_Alert_System",
    highlights: [
      "Built a real-time drowsiness detection pipeline using OpenCV for webcam-based eye tracking and face detection.",
      "Trained a Convolutional Neural Network (CNN) to classify eye states as 'Open' or 'Closed' with high accuracy.",
      "Implemented an automated alarm system that triggers upon detecting prolonged eye closure to enhance driver safety.",
      "Designed the system for easy integration into vehicles or other safety-critical applications.",
    ],
  },
];

export const skills = [
  {
    category: "Programming Languages",
    items: ["Python", "Java", "C++", "JavaScript"],
    icon: "code",
  },
  {
    category: "Frontend",
    items: ["HTML", "CSS", "ReactJS", "TailwindCSS"],
    icon: "layout",
  },
  {
    category: "Backend",
    items: ["Spring Boot", "Spring", "JDBC", "REST APIs"],
    icon: "server",
  },
  {
    category: "Database",
    items: ["MySQL", "DDL", "DML"],
    icon: "database",
  },
  {
    category: "Mobile",
    items: ["React Native", "Expo", "NativeWind CSS"],
    icon: "smartphone",
  },
  {
    category: "Machine Learning",
    items: [
      "Numpy",
      "pandas",
      "Supervised Learning",
      "TensorFlow",
      "MobileNet",
    ],
    icon: "brain",
  },
];

export const certificates = [
  {
    title: "Programming Essentials in C++",
    issuer: "CISCO",
  },
  {
    title: "Programming Essentials in Python",
    issuer: "CISCO",
  },
  {
    title: "Java Foundation Certificate",
    issuer: "Oracle",
  },
  {
    title: "Python Certificate",
    issuer: "HackerRank",
  },
];
