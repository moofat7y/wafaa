import { GrMail } from "react-icons/gr";
import {
  BsFillCalendar2WeekFill,
  BsFillPersonFill,
  BsTelephoneFill,
} from "react-icons/bs";
import { FaBoxArchive, FaGraduationCap, FaLocationDot } from "react-icons/fa6";
import { BiLogoLinkedin } from "react-icons/bi";
import { FiGithub } from "react-icons/fi";
import { IoIosSpeedometer } from "react-icons/io";
import { IoOptions } from "react-icons/io5";
import { PiBagSimpleFill, PiProjectorScreenChartFill } from "react-icons/pi";
export const navList = [
  {
    id: "#home",
    label: "Home",
    icon: <BsFillPersonFill />,
  },
  {
    id: "#about",
    label: "About",
    icon: <IoIosSpeedometer />,
  },
  {
    id: "#education",
    label: "Education",
    icon: <FaGraduationCap />,
  },
  {
    id: "#skills",
    label: "Skills",
    icon: <IoOptions />,
  },
  {
    id: "#experience",
    label: "Experience",
    icon: <PiBagSimpleFill />,
  },
  {
    id: "#portfolio",
    label: "Portfolios",
    icon: <FaBoxArchive />,
  },
  {
    id: "#projects",
    label: "Projects",
    icon: <PiProjectorScreenChartFill />,
  },
];

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
];

export const courses = [
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

export const udemyCourses = [
  {
    title: "Crash course electronics and PCB Design ",
    time: "110 hours",
  },
  {
    title: "Learn to Design Your Own Boards by Altium",
    time: "15 hours",
  },
  {
    title: "Mastering the design of professional PCB by EasyEDA",
    time: "4 hours",
  },
  {
    title: "3D Character creation in Cinema 4D: Modelling a 3D Robot",
    time: "4 hours",
  },
  {
    title:
      "5- 3D Character creation in Cinema 4D: Modelling a 3D a Spider Robot",
    time: "6 hours",
  },
  {
    title: "The python and Django Learning Guid",
    time: "9 hours",
  },
  {
    title: "Learn Linux administration and linux command line",
    time: "30 hours",
  },
  {
    title: "ROS for beginners | : Basice , Motion , and Open CV",
    time: "14 hours",
  },
  {
    title: "Ros for beginners || : Localization, Navigation and SLAM",
    time: "4.5 hours",
  },
  {
    title: "ROS for beginners ||| : Web-based Navigation with ROSBridge",
    time: "3 hours",
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
      { label: "EsayEDA", prec: 85 },
      { label: "VS", prec: 90 },
      { label: "Atom", prec: 88 },
      { label: "Cinema", prec: 84 },
      { label: "4D and Solidworks", prec: 94 },
    ],
  },
  {
    title: "Other",
    skills: [
      { label: "Detail Oriented", prec: 90 },
      { label: "Problem Solving", prec: 84 },
      { label: "Leadership", prec: 80 },
      { label: "Active listening", prec: 90 },
      { label: "Time management", prec: 92 },
      { label: "Emotional intelligence", prec: 87 },
      { label: "Work under pressure", prec: 80 },
      { label: "Team-player", prec: 88 },
      { label: "Good reader and researcher", prec: 80 },
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

export const projects = [
  {
    title:
      "Dogs breed and breast cancer classification using convolutional neural networks with Resnet18",
    date: "2020",
  },
  {
    title: "Arduino Based Smart Irrigation System",
    date: "2020",
  },
  {
    title: "Line follower robot using Arduino Uno",
    date: "2020",
  },
  {
    title: "Brain Tumor Detection by Image Processing Using MATLAB",
    date: "2019",
  },
  {
    title:
      "Graduation project human health care monitors using Arduino uno (blood pressure, blood glucose, heartbeat, breathing counter, body temperature) with grade A",
    date: "2017",
  },
  {
    title:
      "Password Door Lock Security System using Arduino and Keypad | 2016 Fire alarm circuit",
    date: "2015",
  },
];
