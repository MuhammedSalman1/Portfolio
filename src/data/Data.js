
import american from '/american.png'

import bmi from '/bmi.png'

import mealgenerator from '/mealgenerator.png'
import wesbite from '/wesbite.jpeg'


export const Bio = {
  name: "Muhammad Salman",
  roles: ["Web Developer", "Programmer"],
  description:
    "I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.",
  github: "https://github.com/MuhammedSalman1",
  resume:
    "https://drive.google.com/file/d/1rhFMxko9iNfq8ZlIPJHE7Xvo0OgyofBq/view?usp=drive_link",

  linkedin: "https://www.linkedin.com/in/muhammad-salmankhan/",
  insta: "https://www.instagram.com/muhammed__salman1/",
  facebook: "https://web.facebook.com/Salmankhan/",
};

 
export const experiences = [
  {
    id: 0,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmliLw33o-CTQ29k8NbMArjMw1heW3slUSNh-W-QdjlK2k0PNj96DjdS5LV9y17bR8gws&usqp=CAU",
    role: "Frontend Engineer Intern",
    company: "Lets Grow More",
    date: "July 2023 - Aug 2023",
    desc: "Working on the frontend of the web application using HTML, CSS, and JavaScript. Collaborating with the design team to implement user interfaces and enhance user experience. Utilizing modern frameworks and libraries such as React.js to develop responsive and interactive components.",
    skills: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    doc: "https://firebasestorage.googleapis.com/v0/b/buckoid-917cf.appspot.com/o/Screenshot%20from%202023-05-28%2023-20-46.png?alt=media&token=5570f995-e8f4-4f12-bb2f-73bcf4b20730",
  },
  {
    id: 1,
    img: "https://innovativetech.vercel.app/static/media/companylogo.9d0b65a8f2468f7181be.jpg",
    role: " Web Developer",
    company: "Innovative Tech",
    date: "Aug 2023 - Feb 2024",
    desc: " implement user interfaces to enhance user experience. With expertise in React.js and Next.js, I develop responsive and interactive components, leveraging Next.js for server-side rendering and routing to optimize performance and navigation.",
    skills: [
      "ReactJS",
      "Redux",
      "NextJS",
      "MaterialUI",
      "JavaScript",
      "TailwindCSS",
    ],
  },
  {
    id: 2,
    img: "https://media.licdn.com/dms/image/D560BAQGXiRzaEERI4g/company-logo_200_200/0/1711178738517?e=2147483647&v=beta&t=8MFqhTFzUWfW-rLQ2BF9vWp89PHwim32YPISSkgCxjw",
    role: "Open Source Contributor ",
    company: "Social  Summer of Code",
    date: "June 2023 - July 2023",
    desc: "As a contributor to Social Summer of Code, I had the privilege of collaborating with a diverse team on projects aimed at creating positive societal change. This experience allowed me to gain valuable insights into the transformative potential of technology and learn from industry experts",
    skills: ["HTML", "CSS", "JavaScript", "Bootstrap", "React JS"],
  },
];

export const education = [
  {
    id: 0,
    img: "/src/assets/school.jpeg",
    school: "Pearl House Grammer School ",
    date: "Oct 2013 - Sep 2019",
    degree: " Matriculation in Computer Science",
  },
  {
    id: 1,
    img: "/src/assets/college.png",
    school: " Goverment Superior Science College -  Karachi Pakistan ",
    date: "Oct 2019 - feb 2021",
    degree: " Intermediate In Pre-Engiennering",
  },
  {
    id: 3,
    img: "/src/assets/smiu.jpeg",
    school: "Sindh Madressatul Islam University",
    date: "Feb 2022 - Present",
    degree: " Bachelors In Computer Science",
  },
];

export const projects = [
  {
    id: 0,
    title: "Knowledgetech Academy",
    date: "Nov 2024",
    description:
      "Knowledgetech Academy is a Next.js and Aceternity UI-powered platform for delivering high-quality IT courses in topics like DevOps, AI, web development, and data science. This project focuses on a clean, responsive design for an engaging user experience.",
    image: wesbite,
    tags: ["Next Js", "Aceternity UI", "Firebase"],
    category: "web app",
    github: "https://github.com/MuhammedSalman1/knowledgetechh-Academy-nextjs-AceternityUI",
    webapp: "https://github.com/MuhammedSalman1/knowledgetechh-Academy-nextjs-AceternityUI",
  },  
  {
    id: 1,
    title: "Theme_Switcher_project",
    date: "Oct 2024",
    description:
    "A React-based theme switcher using Tailwind CSS, allowing users to toggle between light and dark modes with state management and local storage for persistence..",
    image: wesbite,
    tags: ["React Js", "Redux", "Firebase"],
    category: "web app",
    github: "https://github.com/MuhammedSalman1/knowledgetechh-Academy-nextjs-AceternityUI",
    webapp:"https://github.com/MuhammedSalman1/knowledgetechh-Academy-nextjs-AceternityUI",
  },
  {
    id: 2,
    title: "Food Meal Generator",
    date: "April 2024",
    description:
      "MealMaster: a convenient web app for generating meal ideas based on preferences and ingredients. Simplifying meal planning with a user-friendly interface for home cooks.",
    image: wesbite,
    tags: ["React Js", "Material UI", "Firebase"],
    category: "web app",
    github: "https://github.com/MuhammedSalman1/knowledgetechh-Academy-nextjs-AceternityUI",
    webapp:"https://github.com/MuhammedSalman1/knowledgetechh-Academy-nextjs-AceternityUI",
  },
  {
    id: 3,
    title: "Cricket-Academy-Website ",
    date: "Feb 2024",
    description:
    "This is the cricket Academy website ..      ",
    image: wesbite,
    tags: ["Html  ", "Css", "TailwindCss", "NextJs", "EmailJS "],
    category: "web app",
    webapp: "https://www.americanwebexpress.com/",
  },
  {
    id: 4,
    title: "Online Food Order",
    date: "Feb 2024",
    description:
      "OrderEats: an online platform transforming food ordering with easy browsing, seamless ordering, and quick delivery. Enhancing the dining experience with user-friendly features for modern food lovers.",
    image: wesbite,
    tags: ["React Js", "Tailwind Css"],
    category: "web app",
    github: "https://github.com/MuhammedSalman1/knowledgetechh-Academy-nextjs-AceternityUI",
    webapp:"https://github.com/MuhammedSalman1/knowledgetechh-Academy-nextjs-AceternityUI",
  },
  {
    id: 5,
    title: "Spotify-Clone-Website",
    date: "Dec 2023",
    description:
      "🎵 Spotify Clone: Built with HTML, CSS, and JavaScript. Features play/pause, track controls, and a dynamic progress bar. Explore the code for a hands-on learning experience. 🚀 #WebDev #JavaScript",
    image: wesbite,
    tags: ["Html  ", "Css", "TailwindCss", "ReactJS ", "Firebase"],
    category: "web app",
    webapp: "https://innovativetech.vercel.app/",
  },
  {
    id: 6,
    title: "BMI Calculator",
    date: "Feb 2024",
    description:
      "Built a responsive BMI Calculator web app using React.js, offering users a user-friendly interface to input their height and weight and obtain accurate BMI results instantly..",
    image:wesbite,
    tags: ["Html  ", "Css", "TailwindCss", "ReactJS "],
    category: "web app",
    github: "https://github.com/MuhammedSalman1/knowledgetechh-Academy-nextjs-AceternityUI",
    webapp:"https://github.com/MuhammedSalman1/knowledgetechh-Academy-nextjs-AceternityUI",
  },
  {
    id: 7,
    title: " Salt'n Pepper Resturant Website",
    date: " Sep - 2023",
    description:
      "Crafted Salt'n Pepper restaurant's website, showcasing its culinary offerings with an immersive, responsive design for enhanced user engagement.",
    image: wesbite,
    tags: ["Html", "Css", "Bootstrap", "Javascript"],
    category: "web app",
    github: "https://github.com/MuhammedSalman1/knowledgetechh-Academy-nextjs-AceternityUI",
    webapp:"https://github.com/MuhammedSalman1/knowledgetechh-Academy-nextjs-AceternityUI",
  },

  {
    id: 8,
    title: " Stop Watch",
    date: " Sep - 2023",
    description:
      "Designed and developed a sleek stopwatch application with precision timing features, ensuring optimal user experience across devices. Built using modern web technologies for seamless performance.",
    image: wesbite,
    tags: ["Html", "Css", "Bootstrap", "Javascript"],
    category: "web app",
    github: "https://github.com/MuhammedSalman1/knowledgetechh-Academy-nextjs-AceternityUI",
    webapp:"https://github.com/MuhammedSalman1/knowledgetechh-Academy-nextjs-AceternityUI",
  },
];

export const TimeLineData = [
  { year: 2017, text: "Started my journey" },
  { year: 2018, text: "Worked as a freelance developer" },
  { year: 2019, text: "Founded JavaScript Mastery" },
  { year: 2020, text: "Shared my projects with the world" },
  { year: 2021, text: "Started my own platform" },
];
