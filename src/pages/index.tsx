import * as React from "react";
import type { HeadFC } from "gatsby";

import faccebookSVG from "../assets/icons/facebook.svg";
import instagramSVG from "../assets/icons/instagram.svg";
import githubSVG from "../assets/icons/github.svg";
import linkkedinSVG from "../assets/icons/linkkedin.svg";
import phoneSVG from "../assets/icons/phone.svg";
import emailSVG from "../assets/icons/email.svg";
import geoSVG from "../assets/icons/geo.svg";

import "../styles/reset.css";
import "../styles/global.css";
import "../styles/cv.css";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Gatsby",
  "React Router",
  "Redux-Toolkit",
  "React Hook Form",
  "yup",
  "i18next",
  "Bootstrap",
  "MUI",
  "Tailwind",
  "styled-components",
  "SASS/SCSS",
  "Figma",
  "Git",
  "GitHub",
  "Postman",
  "REST API",
  "Cypress",
];

const expirience = [
  {
    title: "Freelance | Leleka",
    href: "https://github.com/attech-org/leleka",
    date: "aug 2022 - oct 2022 • ATTech • 2 months",
    description:
      "Built an application  that mimic Twitter functionality. Using React, React Router, Redux-Toolkit, TypeScript, styled-components, Bootstrap, React Hook Form, yup, i18next, unit & e2e tests. REST API, Express.js MongoDB, Mongoose",
  },
];

const socialNetworks = [
  {
    href: "https://www.facebook.com/david.korystov",
    image: faccebookSVG,
    title: "david.korystov",
  },
  {
    href: "https://www.instagram.com/david.korystov",
    image: instagramSVG,
    title: "david.korystov",
  },
  {
    href: "https://github.com/DavidKorystov",
    image: githubSVG,
    title: "DavidKorystov",
  },
  {
    href: "https://www.linkedin.com/in/david-korystov-7ba80b236",
    image: linkkedinSVG,
    title: "David Korystov",
  },
];

const IndexPage = () => {
  return (
    <main>
      <section className="head-section">
        <div className="photo" />
        <div className="head-title">
          <h1>David Korystov</h1>
          <h3 className="text-2xl font-bold">WEB DEVELOPER</h3>
        </div>
      </section>
      <section className="social-networks-section">
        {socialNetworks.map((objMedia, index, arr) => (
          <>
            <a
              key={index}
              href={objMedia.href}
              target="_blank"
              className="blocks-social-networks"
            >
              <img src={objMedia.image} alt="" />
              <div className="social-networks-name">
                <p>{objMedia.title}</p>
              </div>
            </a>
            {arr.length - 1 !== index && (
              <div className="line-social-networks" />
            )}
          </>
        ))}
      </section>
      <div className="content">
        <section className="content-section-left">
          <div className="content-section-subtitle">
            <h4>CONTACT</h4>
            <div className="content-section-left-line"></div>
            <ul>
              <li className="block">
                <a href="tel:+380972715081">
                  <img src={phoneSVG} alt="" />
                  <p>+380972715081</p>
                </a>
              </li>
              <li className="block">
                <a href="mailto:david.korystov@gmail.com">
                  <img src={emailSVG} alt="" />
                  <p>david.korystov@gmail.com</p>
                </a>
              </li>
              <li className="block">
                <a href="https://goo.gl/maps/8ELkG4vxXGwJ5Byx9">
                  <img src={geoSVG} alt="" />
                  <p>Ukraine, Krivoy Rog</p>
                </a>
              </li>
            </ul>
          </div>
          <div className="contect-section-subtitle">
            <h4>EDUCATION</h4>
            <div className="content-section-left-line"></div>
            <ul className="education-list">
              <li>
                <h5>Student</h5>
                <p>Lyceum №81 of Kryvyi Rih</p>
                <p className="date">2011-2022</p>
              </li>
              <li>
                <h5>Classic Guitar</h5>
                <p>Musician School №4 of Kryvyi Rih</p>
                <p className="date">2014-2020</p>
              </li>
            </ul>
          </div>
          <div className="contect-section-subtitle">
            <h4>SKILLS</h4>
            <div className="content-section-left-line" />
            <ul className="flex flex-wrap  skill-list">
              {skills.map((skill, id) => (
                <li key={id}>{skill}</li>
              ))}
            </ul>
          </div>
        </section>
        <section className="content-section-right">
          <div className="content-section-subtitle-right">
            <h4>Profile</h4>
            <div className="content-section-right-line"></div>
            <p className="experience-desc">
              I am an ambitious person. If something attracts me it takes all my
              thoughts and makes me hardworking and energetic. I appreciate
              working in a team since I believe that good teammates may multiply
              each other's strengths.
            </p>
          </div>
          <div className="content-section-subtitle-right">
            <h4>EXPERIENCE</h4>
            <div className="content-section-right-line"></div>
            <ul>
              {expirience.map((objExperience, index) => (
                <li className="mb-4" key={index}>
                  <a
                    target="_blanlk"
                    href={objExperience.href}
                    className="experience-position"
                  >
                    {objExperience.title}
                  </a>
                  <p className="experience-company">{objExperience.date}</p>
                  <p className="experience-desc">{objExperience.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>CV | David Korystov</title>;
