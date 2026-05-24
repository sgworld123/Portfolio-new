import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
} from "react-icons/fa";

export const footerData = {
  brandName: "My Portfolio",

  logo: null,

  socialLinks: [
    {
      href: "https://github.com/sgworld123",
      label: "GitHub",
      icon: <FaGithub />,
    },
    {
      href: "https://www.linkedin.com/in/shreyansh-gupta-503253294/",
      label: "LinkedIn",
      icon: <FaLinkedin />,
    },
    {
      href: "https://twitter.com",
      label: "Twitter",
      icon: <FaTwitter />,
    },
  ],

  mainLinks: [
    {
      href: "#home",
      label: "Home",
    },
    {
      href: "#projects",
      label: "Projects",
    },
    {
      href: "#experience",
      label: "Experience",
    },
    {
      href: "#contact",
      label: "Contact",
    },
  ],

  legalLinks: [
    {
      href: "/privacy-policy",
      label: "Privacy Policy",
    },
    {
      href: "/terms-of-service",
      label: "Terms of Service",
    },
  ],

  copyright: {
    text: "© 2026 My Portfolio",
    license: "All rights reserved",
  },
};