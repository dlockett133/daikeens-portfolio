import {
    react,
    game,
    backend,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    calendly,
    protools,
    folx,
    weatherOrNot,
    weatherMann,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "ReactJS Developer",
      icon: react,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Arcade Gamer",
      icon: game,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
  ];
  
  const experiences = [
    {
      title: "Audio Engineer",
      company_name: "Freelance",
      icon: protools,
      iconBg: "#383E56",
      date: "May 2016 - Nov 2021",
      points: [
       "As a freelance audio engineer, I utilized industry-standard tools such as ProTools, Logic Pro X, and Waves plugins to produce high-quality audio for my clients."
      ],
    },
    {
      title: "Software Specialist",
      company_name: "Calendly",
      icon: calendly,
      iconBg: "#E6DEDD",
      date: "Nov 2021 - Present",
      points: [
        "As a Software Specialist at Calendly, I played a crucial role in ensuring our customers had a seamless scheduling experience by utilizing various tools such as Zendesk, SuperAdmin, Twilio, and SendGrid. This contributed to Calendly's success and recognition as one of Forbes America's Best Startup Employers for two consecutive years."
      ],
    }
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Folx",
      description: "Discover a diverse and inclusive foodie community on Folx, the social media app for food enthusiasts. Follow other foodies, share your favorite recipes and cooking tips, and build your own community. Join us now to explore the delicious world of cuisine together!",      
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "three.js",
          color: "pink-text-gradient",
        },
      ],
      image: folx,
      source_code_link: "https://github.com/maxxAbow/Folx",
      deploy_link: "https://folx-project-three.herokuapp.com/",
    },
    {
      name: "Weather Or Not",
      description:
        "A calendar web application with the weekly weather forecast.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "CRUD",
          color: "green-text-gradient",
        },
        {
          name: "OpenWeatherAPI",
          color: "pink-text-gradient",
        },
      ],
      image: weatherOrNot,
      source_code_link: "https://github.com/maxxAbow/weatherOrNot",
      deploy_link: "https://diamonddougs.herokuapp.com/",
    },
    {
      name: "Weather Mann",
      description:
        "Have you ever been sitting at home studying on a rainy day and wished you had the perfect playlist? WeatherMann is here to match all your weather vibes. Think a Walkman for the weather! Upon visiting the page, type in the city of your choosing. This search will then result in displaying the current weather for your city as well as playing a songlist of warmer or winter tunes to coincide with the outdoor temperatures.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "spotify",
          color: "green-text-gradient",
        },
        {
          name: "OpenWeatherAPI",
          color: "pink-text-gradient",
        },
      ],
      image: weatherMann,
      source_code_link: "https://github.com/MontineSproul/the-a-team",
      deploy_link: "https://montinesproul.github.io/the-a-team/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };