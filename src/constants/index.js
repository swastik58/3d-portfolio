import {
    web,
    cricket,
    student,
    gamer,
    guitar,
    music,
    reader,
    movies,
    instagram,
    linkedin,
    twitter,
    spotify,
    links,
    css,
    cpp,
    firebase,
    sql,
    gcp,
    github,
    linux,
    python,
    graph,
    windows,
    git,
    html,
    javascript,
    mongodb,
    nodejs,
    reactjs,
    tailwind,
    three,
    cogni,
    oracle,
    amazon,
    blogger,
    realtor,
    shareme,
    lyriks,
    admin,
    explorix,
    onestop
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Experience",
    },
    {
      id: "project",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];

  const social = [
    {
      name:"Linkedin",
      icon: linkedin,
      link: "https://www.linkedin.com/in/swastik-s-697214100/"
    },
    {
      name:"Instagram",
      icon: instagram,
      link: "https://www.instagram.com/a_wave_with_0_amplitude/"
    },
    {
      name:"Github",
      icon: github,
      link: "https://github.com/swastik58"
    },
    {
      name:"Twitter",
      icon: twitter,
      link: "https://twitter.com/xcavator58"
    },
    {
      name: "Spotify",
      icon: spotify,
      link: "https://open.spotify.com/user/4h0tl3w6vz5333qsdr1zbhtox?si=a52e2382de164e97"
    }
  ]
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Sports Lover",
      icon: cricket,
    },
    {
      title: "Moderate Student",
      icon: student,
    },
    {
      title: "Hardcore Gamer",
      icon: gamer,
    },
    {
      title: "Music Lover",
      icon: music,
    },
    {
      title: "Guitarist",
      icon: guitar,
    },
    {
      title: "Movies and Series Freak",
      icon: movies,
    },
    {
      title: "Avid Reader",
      icon: reader,
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
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Firebase",
      icon: firebase,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Three JS",
      icon: three,
    },
    {
      name: "Google Cloud Platform",
      icon: gcp,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Graph QL",
      icon: graph,
    },
    {
      name: "SQL",
      icon: sql,
    },
    {
      name: "C++",
      icon: cpp,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Linux",
      icon: linux,
    },
    {
      name: "Git",
      icon: git,
    }
  ];
  
  const experiences = [
    {
      title: "Associate Consultant",
      company_name: "Oracle",
      icon: oracle,
      iconBg: "#E6DEDD",
      date: "August 2022 - Present",
      points: [
        "Working in HCM department.",
        "Working with different extracts and BI publisher reports.",
        "Implementing BI reports using SQL in Oracle Analytics Cloud.",
        "Participating in extract reviews and creating design documents to be sent to clients.",
      ],
    },
    {
      title: "JAVA Basics and Advanced React Intern",
      company_name: "Cognizant",
      icon: cogni,
      iconBg: "#383E56",
      date: "March 2022 - July 2022",
      points: [
        "Working on Web Designing using HTML5, CSS3 and JavaScript, Java Programming, Database",
        "Using, MySQL, Spring Core, Maven Junit, Mockito and Code Quality, Spring MVC",
        "Also worked with Spring Boot, Spring REST with Spring Boot, jQuery, Bootstrap, Angular, Microservices, Cloud, Splunk and Git.",
        "Developed a project using the technologies mentioned as a final project to be submitted at the end of internship"
      ],
    },
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
      name: "Amazon 2.0",
      link: "https://amazon-2-clone.netlify.app/",
      description:
        "A clone of the amazon website where a person can order demo products and also process demo payments.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Firebase",
          color: "green-text-gradient",
        },
        {
          name: "Stripe",
          color: "pink-text-gradient",
        },
      ],
      image: amazon,
      source_code_link: "https://github.com/swastik58/amazon-clone",
    },
    {
      name: "Share Me",
      link: "https://shareme-swastik.netlify.app/",
      description:
      "A platform where users can share images and also comment on images posted by others.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Tailwind CSS",
          color: "green-text-gradient",
        },
        {
          name: "Sanity",
          color: "pink-text-gradient",
        },
      ],
      image: shareme,
      source_code_link: "https://github.com/swastik58/share_me",
    },
    {
      name: "Explorix",
      link: "https://explorix-tourism.netlify.app/",
      description:
        "The frontend design of a travel website.",
      tags: [
        {
          name: "Gatsby",
          color: "blue-text-gradient",
        },
        {
          name: "Graph QL",
          color: "green-text-gradient",
        },
        {
          name: "Styled Components",
          color: "pink-text-gradient",
        },
      ],
      image: explorix,
      source_code_link: "https://github.com/swastik58/explorix",
    },
    {
      name: "Lyriks",
      link: "https://lyriks-swastik.netlify.app/",
      description:
        "The frontend design of a travel website.",
      tags: [
        {
          name: "Vite",
          color: "blue-text-gradient",
        },
        {
          name: "Shazam Core API",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind CSS",
          color: "pink-text-gradient",
        },
      ],
      image: lyriks,
      source_code_link: "https://github.com/swastik58/lyriks",
    },
    {
      name: "Admin Dashboard",
      link: "https://admin-dashboard-swastik.netlify.app/",
      description:
        "The frontend design of a travel website.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Tailwind CSS",
          color: "green-text-gradient",
        },
        {
          name: "Sync Fusion React Components",
          color: "pink-text-gradient",
        },

      ],
      image: admin,
      source_code_link: "https://github.com/swastik58/admin-dashboard",
    },
    {
      name: "One Stop Entertainment",
      link: "https://one-stop-entertainment.netlify.app/",
      description:
        "The frontend design of a travel website.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Material UI",
          color: "green-text-gradient",
        },
        {
          name: "React Hooks",
          color: "pink-text-gradient",
        },

      ],
      image: onestop,
      source_code_link: "https://github.com/swastik58/movie-series",
    },
  ];
  
  export { services, social, technologies, experiences, testimonials, projects };