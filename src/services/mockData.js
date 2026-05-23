import movewise1 from '../assets/Movewise/img1.jpeg';
import movewise2 from '../assets/Movewise/img2.jpeg';
import movewise3 from '../assets/Movewise/img3.jpeg';
import movewise4 from '../assets/Movewise/img4.jpeg';
import movewise5 from '../assets/Movewise/img5.jpeg';

import rentengine1 from '../assets/Rentengine/pic1.jpg';
import rentengine2 from '../assets/Rentengine/pic2.jpg';
import rentengine3 from '../assets/Rentengine/pic3.jpg';
import rentengine4 from '../assets/Rentengine/pic4.jpg';
import rentengine5 from '../assets/Rentengine/pic5.jpg';

import chatsphere1 from '../assets/ChatSphere/img1.jpg'
import chatsphere2 from '../assets/ChatSphere/img2.png'

import ayursutra1 from '../assets/Ayursutra/img1.png'
import ayursutra2 from '../assets/Ayursutra/img2.png'
import ayursutra3 from '../assets/Ayursutra/img3.png'
import ayursutra4 from '../assets/Ayursutra/img4.png'
import ayursutra5 from '../assets/Ayursutra/img5.png'

import cqengine from '../assets/cqengine.png';
import geoserver from '../assets/geoserver-icon.jpg';
import eclipse from '../assets/eclipse-icon.png';
import flashverse from '../assets/flashverse.jpg';

export const getRecentPosts = () => {
  return [
    {
      id: 1,
      title: 'RentEngine : Car Rental System',
      date: '12 March 2026',
      images: [rentengine1, rentengine2, rentengine3, rentengine4, rentengine5],
      navTo: '/rentengine',
      tags: ['MicroServices', 'SpringBoot','RabbitMQ'],
      summary: 'A full-stack microservices-based car rental platform where users can search rental agencies, browse vehicles, make bookings with real-time availability checks, and cancel bookings with automatic refund processing.'
    },
    {
      id: 2,
      title: 'MoveWise : City Relocator App',
      images: [movewise1, movewise2, movewise3, movewise4, movewise5],
      date: '23 October 2025',
      navTo: '/movewise',
      tags: ['React Native', 'Google Places API','Redis','SpringBoot'],
      summary: 'A smart city relocation assistant that maps your favorite spots to similar places in your new city. Powered by geo-spatial caching and concurrent API fetching for fast, personalized recommendations.'
    },
    {
      id: 3,
      title: 'Ayursutra : Hospital Management System',
      date: '15 August 2025',
      images: [ayursutra1, ayursutra2, ayursutra3, ayursutra4, ayursutra5],
      navTo: '/ayursutra',
      tags: ['MongoDB', 'Express', 'React','Google Authentication','FireBase'],
      image: '/assets/ayursutra.png',
      summary: 'Ayursutra is a comprehensive Hospital Management System designed to streamline hospital operations, improve patient care, and enhance administrative efficiency. It integrates patient records, appointment scheduling, billing, and inventory management into a unified platform.'
    },
    {
      id: 4,
      title: 'ChatSphere : Chat Application',
      date: '3 January 2025',
      images: [chatsphere1, chatsphere2],
      navTo: '/chatsphere',
      tags: ['MongoDB', 'SpringBoot', 'React','WebSockets'],
      image: '/assets/chatsphere.png',
      summary: 'A real-time instant messaging platform where users can create private and public chat rooms, exchange text messages, share images, and manage their conversations with features like read receipts, online presence indicators, and message history.'
    } 
  ];
};

export const getFeaturedWorks = () => {
  return [
    
  ];
};

export const getBlogPosts = () => {
  return Array(4).fill(null).map((_, i) => ({
    id: i + 1,
    title: 'UI Interactions of the week',
    date: '12 Feb 2019',
    tags: ['Express', 'Handlebars'],
    summary: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
  }));
};

export const getSkillSet = () => {
  return [
    {
      id: 1,
      title: 'Languages',
      tags: ['Java','C++','Python','JavaScript','TypeScript']
    },
    {
      id: 2,
      title: 'Backend Development',
      tags: ['SpringBoot','Microservices', 'RabbitMQ', 'Eureka', 'JWT', 'REST APIs','Spring Security']
    },
    {
      id: 3,
      title: 'Frontend Development',
      tags: ['React','React Native', 'JavaScript', 'TypeScript', 'HTML', 'CSS']
    },
    {
      id: 4,
      title: 'Databases',
      tags: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis']
    },
    {
      id: 5,
      title: 'Tools & Technologies',
      tags: ['Git', 'GitHub', 'Postman', 'Figma']
    },
    {
      id: 6,
      title: 'Cloud & DevOps',
      tags: ['AWS','Docker','Linux']
    },
  ];
} ;

export const getOpenSourceProjects = () => {
  return [
    {
      id: 1,
      title: 'geoserver/geoserver-cloud',
      year: '2025',
      image: geoserver,
      category: ['Java','Microservices','GeoServer'],
      description: 'The GeoServer Cloud project provides a lightweight, cloud-native GeoServer deployment for Kubernetes. It offers seamless management of GeoServer instances via a custom resource definition (CRD), automating deployment, scaling, and configuration for geospatial data services.'
    },
    {
      id: 2,
      title: 'cqengine/cqengine',
      year: '2025',
      image: cqengine,
      category: ['Java','Query Engine','Concurrency'],
      description: 'CQEngine is a high-performance Java-based object query engine that allows you to index and query Java collections as if they were database tables. It supports SQL-like queries, predicative indexes, and efficient in-memory data management, making it ideal for complex data retrieval and analysis scenarios where database overhead is not desired.'
    },
    {
      id: 3,
      title: 'Eclipse Collections',
      year: '2025',
      image: eclipse,
      category: ['Java','Collections','Functional Programming'],
      description: 'Eclipse Collections is a comprehensive set of Java Collections Framework extensions that provide high-performance APIs for collection manipulation and analysis. It includes optimized implementations of lists, sets, maps, and bags, along with rich APIs for bulk operations, parallel processing, and functional-style programming.'
    }
  ]
};
  
export const getExperience = () => {
  return [
    {
      id: 1,
      company: 'FlashVerse',
      role: 'Full Stack Developer Intern',
      type: 'Remote',
      duration: 'Jan 2026 - Present',
      image: flashverse,
      tags: ['React Native', 'Spring Boot', 'JWT', 'REST APIs', 'RBAC'],
      points: [
        'Built the complete authentication workflow using Spring Boot, including signup, login, logout, password reset, and persistent session management.',
        'Implemented secure JWT-based authentication with refresh tokens, protected routes, and role-based access control (RBAC) to secure APIs and user data.'
      ]
    }
  ];
};

export const getContactDetails = () => {
  return [
    {
      email: 'shreyanshg2905@gmail.com',
      phone: '+91 6394568282',
      linkedin: 'https://www.linkedin.com/in/shreyansh-gupta-503253294/',
      github: 'https://github.com/sgworld123'
    }
  ]
}
export const NAVIGATION_LINKS = [
  {
    label: "Home",
    path: "#home",
  },
  {
    label: "Projects",
    path: "#projects",
  },
  {
    label: "Skills and Technologies",
    path: "#skills",
  },
  {
    label: "Open Source Contributions",
    path: "#open-source",
  },
  { 
    label: "Experience",
    path: "#experience"
  },
  {
    label: "Contact",
    path: "#contact",
  },
];
