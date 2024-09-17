const projects = [
  {
    name: '"Job fusion"',
    type: "full-stack application",
    period: "September 2024 - present",
    desc: [
      "Job-Fusion is a job board application designed to connect job seekers and recruiters",
      "Node.js API provides a backend for handling various operations related to job postings, user authentication and role management",
      "The application uses Firestore as the database to manage and store job postings and user information",
    ],
    link: "https://github.com/FilipBabic/job-fusion-api",
    skills: ["javascript", "node js", "express", "firebase", "firestore", "git"],
  },
  {
    name: '"Basketball tournament simulation"',
    type: "javascript program",
    period: "August 2024",
    desc: [
      "JavaScript simulation of the basketball tournament at the 2024 Olympic Games",
      "Using node js running environment",
    ],
    link: "https://github.com/FilipBabic/basketball-tournament-olympic-games",
    skills: ["javascript", "node js", "git"],
  },
  {
    name: '"Filip Babić portfolio"',
    type: "static website",
    period: "June 2024 - present",
    desc: [
      "Portfolio website presenting my web development work",
      "Contain my portfolio, blog, definitions, usefull JavaScript programms and contact page",
      "Deployed to Github pages",
      "Register service worker for caching images",
      "Responsive for different devices",
    ],
    link: "https://github.com/FilipBabic/FilipBabic.github.io",
    skills: ["html", "css", "javascript", "responsive design", "git"],
  },
  {
    name: '"Pic Point"',
    type: "react native application",
    period: "April 2022 - March 2023",
    desc: [
      "React Native application that accesses the phone gallery and retrieves the location of photos",
      "Presents detailed information about nearby objects",
      "Allows users to link text and voice messages with photos",
    ],
    link: "https://github.com/FilipBabic/PicPoint",
    skills: ["react native", "expo", "javascript", "git"],
  },
  {
    name: '"Package management"',
    type: "full-stack application",
    period: "August 2021 - April 2022",
    desc: [
      "Application for managing packages of different goods and interaction with couriers",
      "Advanced Search Capabilities: Users can perform detailed searches with five customizable conditions, enhancing the precision and relevance of package queries based on various criteria",
      "Automated Payment Calculations: The application automatically computes the total payment amount due from couriers to suppliers, ensuring accurate and hassle-free financial transactions",
    ],
    link: "https://github.com/FilipBabic/PackageManagment",
    skills: ["html", "bootstrap", "php", "mysql", "web hosting"],
  },
  {
    name: '"Detektive Agency"',
    type: "dynamic website",
    period: "September 2015- November 2016",
    desc: [
      "Web presentation of detektive agency",
      "Top-Ranked SEO Optimization: The website is optimized to achieve and maintain the first-place position on Google search results for relevant keywords",
      "Admin Dashboard Integration: Features an intuitive admin dashboard that allows for easy posting of content to the website",
    ],
    link: "https://www.detektivskaagencija.rs",
    skills: ["html", "css", "bootstrap", "php", "mysql", "web hosting"],
  },
  {
    name: '"Private Detective"',
    type: "static website",
    period: "October 2021 - November 2021",
    desc: [
      "Web presentation of detektive agency",
      "Top-Ranked SEO Optimization: The website is optimized to achieve and maintain the first-place position on Google search results for relevant keywords",
      "Admin Dashboard Integration: Features an intuitive admin dashboard that allows for easy posting of content to the website",
    ],
    link: "https://www.privatnidetektiv.rs",
    skills: ["html", "bootstrap"],
  },
];

const projectsDiv = document.getElementById("projects");

projects.map((project) => {
  projectsDiv.innerHTML += `<div class="project">
    <div class="project-header">  
      <h3>${project.name}</h3>
      <h4>${project.type}</h4>
    </div>
    <h5>(${project.period})</h5>
    <ul>
        ${project.desc.map((des) => `<li>${des}</li>`).join("")}
    </ul>
    <a href="${project.link}" class="link">(${project.link})</a>
    <h4><p><b>${project.skills.join(" - ")}</b></p></h4>
    </div>`;
});
