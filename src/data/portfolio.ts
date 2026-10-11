import type { Project } from '../types';
// Skills selected strictly from the supplied CV; Word, Excel and PowerPoint are grouped.
// Items 7 (internet research) and 11 (selected electronic-device maintenance) removed as requested.
export const skills = [
  'Website development',
  'Hardware maintenance',
  'Software maintenance',
  'Microsoft Office (Word, Excel & PowerPoint)',
  'Photography',
  'Video production and filmmaking',
  'Graphic design',
];
export const education = [
  {id:'ines',period:'Current',title:'Software Engineering (Final Year)',institution:'INES Ruhengeri',detail:'University education'},
  {id:'haip',period:'2019 to 2022',title:'Advanced Level in Software Development',institution:'Hanika Anglican Integrated Polytechnic (HAIP)',detail:''},
  {id:'tyazo',period:'2015 to 2018',title:'Ordinary Level',institution:'ES TYAZO',detail:''},
  {id:'murambi',period:'2007 to 2014',title:'Primary Education',institution:'EP MURAMBI',detail:''},
];
export const projects: Project[] = [
  {id:'ikizame',title:'ikizame.rw',problem:'People preparing for Rwanda provisional driving exams need accessible practice on phones and computers.',contribution:'Developed and maintain the website interface, server-side functionality, deployment, hosting, and mobile-money payment integration.',technologies:['Web development','Server-side development','Mobile-money integration'],description:'An online platform for provisional driving-exam practice. Project experience documented in my CV.',url:'https://ikizame.rw/',image:'ikizame'},
  {
    id:'personal-portfolio',
    title:'Personal Portfolio Website',
    problem:'Sharing professional skills, education and projects clearly with prospective employers and collaborators.',
    contribution:'Created a personal portfolio website to present my profile and development work.',
    technologies:['Website development','Web interface design'],
    description:'A personal website for presenting my background, skills and projects. Content should be checked against my actual website before final submission.',
    image:'portfolio',
  },
  {
    id:'crop-yield',
    title:'Crop Yield Prediction App',
    problem:'Farmers need practical ways to estimate possible crop harvests before planting.',
    contribution:'Developing a mobile app concept that uses agricultural historical information and selected farming inputs to estimate potential crop yields. The prediction feature is not presented as a completed or validated model.',
    technologies:['React Native','Expo','TypeScript','Agricultural data (planned)'],
    description:'Status: In Development. This student project is under development; prediction accuracy and production readiness have not yet been established.',
    status:'In Development',
    image:'crop',
  },
];
