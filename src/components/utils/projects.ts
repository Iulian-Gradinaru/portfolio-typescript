// import FaceDetectApp from '../../assets/face-detect-app.png';
// import LightsOut from '../../assets/lights-out.png';
// import LightOutTablet from '../../assets/lights-out-tablet.png';
// import LightOutTelephone from '../../assets/lights-out-telephone.png';

// import Yathzee from '../../assets/yahtzee.png';
// import Hangman from '../../assets/hangman.png';

export interface Project {
  title: string;
  description: string;
  imgUrl: string;
  stack: Stack[];
  github: string;
  live: string;
}

export enum Stack {
  React = 'React',
  Redux = 'Redux',
  MaterialUi = 'Material-UI',
  TypeScript = 'TypeScript',
  Docusaurus = 'Docusaurus',
  NodeJs = 'NodeJS',
  ExpressJs = 'ExpressJS',
  PostgreSQL = 'PostgreSQL',
}

export const projects: Project[] = [
  {
    title: 'Smart-Brain',
    description:
      'SmartBrain is an innovative facial recognition platform developed to showcase advanced web development and artificial intelligence skills. The project merges cutting-edge technologies with modern development practices to craft a captivating and functional experience. By harnessing Clarifai AI technology, SmartBrain can accurately identify and label human faces in images with remarkable precision.',
    imgUrl:
      'https://res.cloudinary.com/ztm/image/upload/v1627721870/Portfolio%20-%20CR/smart-brain-min_q4mjfd.png',

    stack: [
      Stack.React,
      Stack.MaterialUi,
      Stack.TypeScript,
      Stack.ExpressJs,
      Stack.NodeJs,
      Stack.PostgreSQL,
    ],
    github: 'https://github.com/Iulian-Gradinaru/smartbrain',
    live: 'https://github.com/Iulian-Gradinaru/smartbrain',
  },
  {
    title: 'Lights Out',
    description:
      "Lights Out is a game made in React, based on the popular electronic game released in the 90s. The game consists of a grid that you can choose from 3 by 3, 5 by 5, 9 by 9 lights. You can start the game with help by clicking on the Star icon. Pressing any of the lights will toggle it and adjacent lights. The aim of the puzzle is to turn off all the lights, preferably with as few button presses as possible. Or if you wish you can switch to Lights On where the aim of the puzzle is to turn on all the lights. To make the project more appealing, we've added Top Score, a feature that displays the highest achievements in the game, and Game History is a valuable feature that gives players an overview of previous game sessions.",
    imgUrl:
      'https://res.cloudinary.com/ztm/image/upload/v1627724620/Portfolio%20-%20CR/lights-out-min_gp9gvj.png',
    stack: [Stack.React, Stack.MaterialUi, Stack.TypeScript],
    github: 'https://github.com/Iulian-Gradinaru/lights-out-ts',
    live: 'https://iulian-lights-out.netlify.app',
  },

  {
    title: 'Hangman',
    description:
      'Hangman is a game application developed using TypeScript, which represents a digital version of the classic game with the same name. The objective is to guess a word by selecting the correct letters within a limited number of attempts. The Hangman application was developed in TypeScript, with a well-structured architecture and modular code, highlighting skills in object-oriented programming and application state management.',
    imgUrl:
      'https://res.cloudinary.com/ztm/image/upload/v1627721870/Portfolio%20-%20CR/smart-brain-min_q4mjfd.png',

    stack: [Stack.React, Stack.MaterialUi, Stack.TypeScript],
    github: 'https://github.com/Iulian-Gradinaru/hangman-ts',
    live: 'https://iulian-hangman.netlify.app',
  },

  {
    title: 'Yahtzee!',
    description:
      'Yahtzee is a mix of casual, light-weight gambling and strategy, packaged nicely into a React only application. The objective of the game is to score points by rolling five dice to make certain combinations. You have 3 rolls, you are able to lock each dice and choose wisely from the table scores.',
    imgUrl:
      'https://res.cloudinary.com/ztm/image/upload/v1627725669/Portfolio%20-%20CR/yahtzee-min_aokyls.png',
    stack: [Stack.React, Stack.MaterialUi, Stack.TypeScript],
    github: 'https://github.com/cyps1000/yahtzee',
    live: 'https://iulian-yahtzee.netlify.app',
  },
];
