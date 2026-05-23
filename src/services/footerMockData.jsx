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
      href: "https://github.com",
      label: "GitHub",
      icon: <FaGithub />,
    },
    {
      href: "https://linkedin.com",
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
      href: "/privacy",
      label: "Privacy Policy",
    },
    {
      href: "/terms",
      label: "Terms of Service",
    },
  ],

  copyright: {
    text: "© 2026 My Portfolio",
    license: "All rights reserved",
  },
};