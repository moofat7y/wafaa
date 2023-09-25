import { GrMail } from "react-icons/gr";
import { BsFillCalendar2WeekFill, BsTelephoneFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { BiLogoLinkedin } from "react-icons/bi";
import { FiGithub } from "react-icons/fi";
export const contactData = [
  {
    text: "+966580611708",
    icon: <BsTelephoneFill />,
    href: "tel:+966580611708",
  },
  {
    text: "18/3/1994",
    icon: <BsFillCalendar2WeekFill />,
  },
  {
    text: "Taif,Saudi Arabia",
    icon: <FaLocationDot />,
  },
];

export const contactIcons = [
  {
    text: "wafaa-almadhoun@hotmail.com",
    icon: <GrMail />,
    color: "bg-[#f44336]",
    href: "mailto:wafaa-almadhoun@hotmail.com",
  },
  {
    text: "wafa'a-almadhoun",
    icon: <BiLogoLinkedin />,
    color: "bg-[#1565C0]",
    href: "http://www.linkedin.com/wafa'a-almadhoun",
  },
  {
    text: "wafa'a-almadhoun",
    icon: <FiGithub />,
    color: "bg-[#111]",
    href: "https://github.com/wafaa-almadhoun",
  },
];

export const educations = [
  {
    title: "Computer Engineering",
    place: "Taif university",
    finish: "Graduation year | 2020",
  },
  {
    title: "Advanced Motor Theory",
    finish: "12-9-2023",
  },
  {
    title: "Robot and artificial intelligence",
    finish: "29-8-2022",
  },
  {
    title: "Designing an Online store course",
    finish: "25-6-2020",
  },
  {
    title: "Programming smart phone application using Native React",
    finish: "5-7-2020",
  },
  {
    title: "Certification of participation in LEGO Education SPIKE Prime",
    finish: "28-7-2020",
  },
  {
    title: "Digital Marketing course",
    finish: "18-9-2020",
  },
];

export const skills = [
  {
    title: "Programming Languages",
    skills: [
      { label: "C++", prec: 90 },
      { label: "Python", prec: 95 },
      { label: "Assembly", prec: 85 },
      { label: "Front End (HTML,CSS,JS)", prec: 85 },
    ],
  },
  {
    title: "Programs",
    skills: [
      { label: "Proteus", prec: 80 },
      { label: "Matlab", prec: 82 },
      { label: "Arduino IDE", prec: 88 },
      { label: "Altium", prec: 90 },
    ],
  },
  {
    title: "Other",
    skills: [
      { label: "Detail Oriented", prec: 90 },
      { label: "Problem Solving", prec: 84 },
      { label: "Leadership", prec: 80 },
    ],
  },
];

export const experince = [
  {
    title: "Training Supervisor",
    status: "part time",
    date: "Jun 2023 - Aug 2023",
    desc: "best supervisor in the summer training , At smart methods company.",
  },
  {
    title: "Full Stack Robotics Engineer",
    status: "training",
    date: "Jun 2022 - Sep 2022",
    desc: "best Intern engineer in all branches with 18 tasks completed , At smart methods company.",
  },
  {
    title: "Digital Markting",
    status: "Full Time",
    date: "Sep 2020 - Present",
    desc: "At mall of Saudi Arabia company.",
  },
  {
    title: "General manager",
    status: "Full Time",
    date: "May 2016 - Jun 2020",
    desc: "At at Alqurnafil institution (EVA EVENT).",
  },
];

import img1 from "/Image1.png";
import img2 from "/Image2.png";
import img3 from "/Image3.png";
import img4 from "/Image4.png";
export const portfoliosImages = [
  { image: img1, title: "Robotics" },
  { image: img2, title: "Electronics" },
  { image: img3, title: "Mechanical Design" },
  { image: img4, title: "Iot" },
];
