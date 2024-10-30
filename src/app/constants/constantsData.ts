
import {
  contactObj,
  listObj,
  sideNavfullObj,
  skillExperienceObj,
  textbody,
} from './constantsStructure';


export const educationDataArr: Array<listObj> = [
  {
    title: 'Batchelors of Technology in Computer Science',
    description: 'Graphic Era Hill University, Dehradun, Uttarakhand 248001',
    date: '2016 - 2020',
  },
  {
    title: 'High School',
    description: "St. Mary's Academy, Saharanpur, Uttar Pradesh 247001",
    date: '2015 - 2016',
  },
  {
    title: 'Secondary School',
    description: "St. Mary's Academy, Saharanpur, Uttar Pradesh 247001",
    date: '2014 - 2015',
  },
];

export const educationHeader: string = 'Education';

export const homeHeader: string = 'Home';

export const experienceHeader: string = 'Experience';

export const aboutHeader: string = 'About Me!!';

export const contactusHeader: string = 'Contact Us';

export const skillsHeader: string = 'Skill and Expertise';

export const experienceData: Array<listObj> = [
  {
    title: 'Automated User Assistance Bot Interface',
    date: '2024 - 2024',
    duration: '8 Months',
    projectOverview:
      'Designed and developed an interactive chatbot interface aimed at global deployment to enhance real-time user support. This project provided a centralized, responsive tool for user assistance, increasing engagement and user satisfaction for internal and external clients.',
    role: 'Angular UI Developer',
    responsibilities: [
      'Crafted a seamless chatbot interface focusing on intuitive, user-friendly interaction.',
      'Employed Angular routing to streamline navigation and improve user workflow.',
      'Integrated RESTful APIs for dynamic, real-time data updates, enhancing response accuracy and relevance.',
      'Ensured a consistent user experience across browsers through detailed CSS adjustments for cross-browser compatibility.',
    ],
  },
  {
    title: 'Employee Management Portal',
    date: '2021 - 2024',
    duration: '36 Months',
    projectOverview:
      'Created a React-based management portal to centralize employee information, streamline performance tracking, and provide administrative tools for an efficient, data-driven workflow.',
    role: 'React UI Developer',
    responsibilities: [
      'Spearheaded the UI development, implementing responsive components for optimal viewing across devices.',
      'Utilized React hooks for effective state management and data flow.',
      'Enhanced app performance and load speed through lazy loading.',
      'Connected the app to live data using Axios, ensuring real-time, accessible updates for efficient resource management.',
    ],
  },
  {
    title: 'Dynamic Website Transformation',
    date: '2024 - present',
    duration: '2 Months',
    projectOverview:
      'Converted a static site to a dynamic, API-driven platform, enhancing the website’s interactivity and engagement.',
    role: 'Angular Developer',
    responsibilities: [
      'Shifted the site to a dynamic structure, focusing on user engagement through enhanced interactivity.',
      'Integrated REST APIs, providing real-time data updates for a more responsive experience.',
      "Managed component data communication using Angular's Input/Output decorators.",
      'Applied performance optimizations to ensure a smooth user experience.',
    ],
  },
];

export const homeData: textbody = {
  description1:
    "Hey2! I'm Anurag Sundriyal 👋</br> A UI Developer with a knack for crafting smooth, user-friendly web apps. With skills in Angular and React, I’ve worked on projects like chatbot UIs for instant support and employee management tools to simplify workflows. My goal? Building intuitive and efficient digital experiences.",
  highlight: [
    'Angular | React | TypeScript',
    'RESTful APIs | Node.js | Express.js',
    'SCSS | Responsive Web Design | Performance Optimization',
  ],
  description2:
    "Check out the Education, Experience, and About sections for a peek into my journey and projects. And if you're interested in collaborating, feel free to reach out via the Contact tab!",
};

export const aboutData: textbody = {
  description1:
    'Hey there! So, a bit about me </br> I love coding and keeping up with what’s new in tech. Started out playing around with web development, but it turned into a serious passion for building cool, functional interfaces that people love to use.',
  highlight: [
    'Built a global chatbot UI for easier support.',
    'Turned a static site into a dynamic, API-driven experience.',
    'Created an employee portal for better team management.',
  ],
  description2:
    'When I’m not working, I’m checking out new tools, reading tech blogs, or relaxing with some gaming or cricket (it’s my way to recharge and spark new ideas). </br> If you’re into cool projects too, let’s see what we can build!',
};


export const contactData: Array<contactObj> = [
  {
    url: 'https://www.linkedin.com/in/anurag-sundriyal/',
    imgSrc: 'assets/icons/linkedin.png',
    title: 'LinkedIn',
    alt: 'LinkedIn',
  },
  {
    url: 'https://www.instagram.com/anurag_sundriyal/',
    imgSrc: 'assets/icons/instagram.png',
    title: 'Instagram',
    alt: 'Instagram',
  },
  {
    url: 'tel:7906959823',
    imgSrc: 'assets/icons/phone.png',
    title: '7906959823',
    alt: 'Phone',
  },
  {
    url: 'mailto:sundriyal.anurag1998@gmail.com',
    imgSrc: 'assets/icons/email.png',
    title: 'sundriyal.anurag1998@gmail.com',
    alt: 'Email',
  },
];



export const skillExperienceData: Array<listObj> = [

  {
    title: 'Primary Skill',
    description: 'Angular',
  },
  {

    title: 'Frontend Technologies',
    description: 'Angular, ReactJS, TypeScript, JavaScript, HTML5, CSS3, SASS',
  },
  {
    title: 'Backend Technologies',
    description: 'NodeJS, ExpressJS',
  },
  {
    title: 'Version Control',
    description: 'Git, GitHub, Bitbucket',
  },
];

export const sideNavData: sideNavfullObj = {
  name: 'Anurag Sundriyal',
  profileImgUrl: 'assets/AnuragSundriyalPP.jpg',
  designation: 'Angular Developer',
  resumeUrl:
    'https://drive.google.com/uc?export=download&id=1KpLomoVUvWH_3jbuYO-XGgmCXveF3Ke1',
  resumeIcon: 'assets/icons/download.png',
  navLinks: [
    { title: 'Home', navLinkUrl: '/home', navIcon: 'assets/icons/home.png' },
    {
      title: 'Education',
      navLinkUrl: '/education',
      navIcon: 'assets/icons/education.png',
    },
    {
      title: 'Experience',
      navLinkUrl: '/experience',
      navIcon: 'assets/icons/experience.png',
    },
    {
      title: 'skills and expertise',
      navLinkUrl: '/skills-and-expertise',
      navIcon: 'assets/icons/skills.png',
    },
    { title: 'About', navLinkUrl: '/about', navIcon: 'assets/icons/about.png' },
    {
      title: 'Contact',
      navLinkUrl: '/contact',
      navIcon: 'assets/icons/contact.png',
    },
  ],
};


