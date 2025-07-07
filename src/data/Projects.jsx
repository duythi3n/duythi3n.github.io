import pic1 from "../assets/pic1.jpg";

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    image: pic1,
    description:
      "A personal portfolio website built with React and Tailwind CSS to showcase my projects and skills.",
    techStack: ["React", "Tailwind CSS", "Vite"],
    demo: "https://yourname.dev",
    github: "https://github.com/yourname/portfolio",
  },
  {
    id: 2,
    title: "E-commerce UI",
    image: pic1,
    description:
      "Frontend for an e-commerce site with product listing, cart, and filtering features.",
    techStack: ["React", "Redux Toolkit", "Bootstrap"],
    demo: "https://ecom-shop.vercel.app",
    github: "https://github.com/yourname/ecommerce-ui",
  },
  {
    id: 3,
    title: "Weather App",
    image: pic1,
    description:
      "Weather app using OpenWeatherMap API with search and 5-day forecast feature.",
    techStack: ["HTML", "CSS", "JavaScript", "API"],
    demo: "https://weather-lite.netlify.app",
    github: "https://github.com/yourname/weather-app",
  },
  {
    id: 4,
    title: "Todo App (with Firebase)",
    image: pic1,
    description:
      "A realtime todo app using Firebase for auth and data storage.",
    techStack: ["React", "Firebase", "Tailwind CSS"],
    demo: "https://todo-fireapp.vercel.app",
    github: "https://github.com/yourname/firebase-todo",
  },
];
export default projects;
