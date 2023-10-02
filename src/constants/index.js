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
    greenwood,
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
      date: "Nov 2021 - Jun 2022",
      points: [
        "As a Software Specialist at Calendly, I played a crucial role in ensuring our customers had a seamless scheduling experience by utilizing various tools such as Zendesk, SuperAdmin, Twilio, and SendGrid. This contributed to Calendly's success and recognition as one of Forbes America's Best Startup Employers for two consecutive years."
      ],
    },
    {
      title: "Software Engineer",
      company_name: "Greenwood",
      icon: greenwood,
      iconBg: "#E6DEDD",
      date: "Jun 2022 - Present",
      points: [
        "As a Software Engineer at Greenwood, I specialized in React.js for front-end development. My role involved creating and maintaining features for our web application, implementing feature flags with LaunchDarkly, and developing personalized customer flows based on subscription tiers. I thrived in an Agile environment, collaborating closely with cross-functional teams to deliver efficient and user-centric solutions"
      ],
    }
  ];
  
  const testimonials = [
    {
      testimonial:
        "Daikeen is an extremely hard-working and dedicated developer who always goes the extra mile to ensure his work is thorough and of the highest quality. His outgoing personality and enthusiasm for web development make him a great team player and leader.",
      name: "David Mackey",
      designation: "Teammate and Collaborator",
      company: "on Folx and WeatherOrNot Applications",
      image: "https://avatars.githubusercontent.com/u/102687673?v=4",
    },
    {
      testimonial:
        "I had the pleasure of studying and working with Daikeen at the GT coding bootcamp and Calendly. Daikeen's exceptional work ethic, passion for coding, and teamwork skills shine during group projects. He's always ready to assist and ensure everyone's success. Daikeen's expertise in the MERN stack enables him to create dynamic web apps effectively. He'd be a valuable addition to any web development team, known for his positivity and dedication. I wholeheartedly recommend Daikeen!",
      name: "Sarah Wattles",
      designation: "Coworker at",
      company: "Calendly",
      image: "https://media.licdn.com/dms/image/C5103AQE9nls3RFiYng/profile-displayphoto-shrink_400_400/0/1516746402401?e=1701907200&v=beta&t=nwZIoV-j3Axs_yGrT-O57jAhdR0r_Xr1dMtAuc0M528",
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
        "A calendar web application in which you are able to create an account and dynamically plan and save events for the month. There is also a 5-day weather forecast implemented into the calendar so you are never caught off guard on a rainy day!",
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