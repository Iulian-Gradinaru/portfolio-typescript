import SmartBrain from '../../assets/mockup smartbrain.png';
import LightsOut from '../../assets/mockup lights out.png';
import eShop from '../../assets/e-Shop.png';
import Yathzee from '../../assets/mockup Yahtzee.png';
import Hangman from '../../assets/mockup Hangman.png';

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
    title: 'e-Shop',
    description: `
    The "e-Shop" project is an e-commerce application developed in TypeScript. With this project, we demonstrated the ability to build an online shopping platform using modern web technologies.
      
    Key Features:
    
    - The intuitive interface of the app makes it easy for users to navigate and shop.
    
    - The implementation of a shopping cart allows users to add and manage products before checkout.
    
    - Search functionality helps users quickly find the products they want.
    
    - Ability to sort products by price, from lowest to highest or vice versa.
    
    - The app is built for use on desktop and mobile devices, ensuring a consistent experience.
    `,
    imgUrl: eShop,
    stack: [Stack.React, Stack.MaterialUi, Stack.TypeScript],
    github: 'https://github.com/Iulian-Gradinaru/e-shopping-cart-typescript',
    live: 'https://e-iulianshop.netlify.app/',
  },

  {
    title: 'Lights Out',
    description:
      "Lights Out is a game made in React, based on the popular electronic game released in the 90s. The game consists of a grid that you can choose from 3 by 3, 5 by 5, 9 by 9 lights. You can start the game with help by clicking on the Star icon. Pressing any of the lights will toggle it and adjacent lights. The aim of the puzzle is to turn off all the lights, preferably with as few button presses as possible. Or if you wish you can switch to Lights On where the aim of the puzzle is to turn on all the lights. To make the project more appealing, we've added Top Score, a feature that displays the highest achievements in the game, and Game History is a valuable feature that gives players an overview of previous game sessions.",
    imgUrl: LightsOut,
    stack: [Stack.React, Stack.MaterialUi, Stack.TypeScript],
    github: 'https://github.com/Iulian-Gradinaru/lights-out-ts',
    live: 'https://iulian-lights-out.netlify.app',
  },

  {
    title: 'Hangman',
    description:
      'Hangman is a game application developed using TypeScript, which represents a digital version of the classic game with the same name. The objective is to guess a word by selecting the correct letters within a limited number of attempts. The Hangman application was developed in TypeScript, with a well-structured architecture and modular code, highlighting skills in object-oriented programming and application state management.',
    imgUrl: Hangman,

    stack: [Stack.React, Stack.MaterialUi, Stack.TypeScript],
    github: 'https://github.com/Iulian-Gradinaru/hangman-ts',
    live: 'https://iulian-hangman.netlify.app',
  },

  {
    title: 'Yahtzee!',
    description:
      'Yahtzee is a mix of casual, light-weight gambling and strategy, packaged nicely into a React only application. The objective of the game is to score points by rolling five dice to make certain combinations. You have 3 rolls, you are able to lock each dice and choose wisely from the table scores.',
    imgUrl: Yathzee,
    stack: [Stack.React, Stack.MaterialUi, Stack.TypeScript],
    github: 'https://github.com/Iulian-Gradinaru/yahtzee-ts',
    live: 'https://iulian-yahtzee.netlify.app',
  },

  {
    title: 'Smart-Brain',
    description:
      'SmartBrain is an innovative facial recognition platform developed to showcase advanced web development and artificial intelligence capabilities. The project combines cutting-edge technologies with modern development practices to create an engaging and functional experience. By leveraging Clarifai AI technology, SmartBrain can identify and tag with remarkable accuracy whether you want a single face or multiple human faces from images.',
    imgUrl: SmartBrain,

    stack: [
      Stack.React,
      Stack.MaterialUi,
      Stack.TypeScript,
      Stack.ExpressJs,
      Stack.NodeJs,
      Stack.PostgreSQL,
    ],
    github: 'https://github.com/Iulian-Gradinaru/smartbrain-fronted',
    live: 'https://iulian-smartbrain.netlify.app/',
  },
];
