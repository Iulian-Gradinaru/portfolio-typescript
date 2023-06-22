import Desktop from '../../assets/desktop.png';
import Tablet from '../../assets/tablet.png';
import Telephone from '../../assets/telephone.png';

export interface Project {
  title: string;
  description: string;
  imgUrl: string;
  imgUrl2: string;
  imgUrl3: string;
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
  MongoDb = 'MongoDB',
}

export const projects: Project[] = [
  {
    title: 'Smart-Brain',
    description:
      "Smart-Brain is a simple app that makes use of Clarifai's face detection API. In order to make the project more alluring, depending on the number of faces you detect, you get a score. The entire app makes use of React's useContext hook which makes state management easy, Material-UI's custom components that are built with the material design in mind and MongoDB, as one of the best databases for modern applications.",
    imgUrl: Desktop,
    imgUrl2: Tablet,
    imgUrl3: Telephone,
    stack: [
      Stack.React,
      Stack.MaterialUi,
      Stack.TypeScript,
      Stack.ExpressJs,
      Stack.NodeJs,
      Stack.MongoDb,
    ],
    github: 'https://github.com/cyps1000/smart-brain-ts',
    live: 'https://smart-brain-cyps1000.herokuapp.com/',
  },
  {
    title: 'Dev-Connector',
    description:
      'Dev Connector is a social media platform, that connects developers from all over the world. You can set up a profile, post questions, respond to users, like / unlike posts, find and connect with other developers. This app is backed by an express server built in NodeJS, that uses the NoSQL MongoDB as a database for storing all the information and Redux for state management across the entire app.',
    imgUrl:
      'https://res.cloudinary.com/ztm/image/upload/v1627723039/Portfolio%20-%20CR/dev-connector-min_l1dkgl.png',
    imgUrl2:
      'https://res.cloudinary.com/ztm/image/upload/v1627723039/Portfolio%20-%20CR/dev-connector-min_l1dkgl.png',
    imgUrl3:
      'https://res.cloudinary.com/ztm/image/upload/v1627723039/Portfolio%20-%20CR/dev-connector-min_l1dkgl.png',
    stack: [
      Stack.React,
      Stack.Redux,
      Stack.MaterialUi,
      Stack.TypeScript,
      Stack.ExpressJs,
      Stack.NodeJs,
      Stack.MongoDb,
    ],
    github: 'https://github.com/cyps1000/dev-connector',
    live: 'https://devconnector-cyps1000.herokuapp.com/',
  },
  {
    title: 'React-Colors',
    description:
      "React Colors is a pure React application, using Material-UI's custom components. It's main audience would be designers that need a place to store their favourite palettes. It has drag&drop features, validation, randomizing colors, twinkering with luminosity and more.",
    imgUrl:
      'https://res.cloudinary.com/ztm/image/upload/v1627723883/Portfolio%20-%20CR/react-colors-min_wlmpyg.png',
    imgUrl2:
      'https://res.cloudinary.com/ztm/image/upload/v1627723883/Portfolio%20-%20CR/react-colors-min_wlmpyg.png',
    imgUrl3:
      'https://res.cloudinary.com/ztm/image/upload/v1627723883/Portfolio%20-%20CR/react-colors-min_wlmpyg.png',
    stack: [Stack.React, Stack.MaterialUi, Stack.TypeScript],
    github: 'https://github.com/cyps1000/react-colors',
    live: 'https://react-colors-jet.vercel.app/',
  },
  {
    title: 'Lights Out',
    description:
      "Lights Out is a game made in React, based on the popular electronic game released in the 90's. The game consists of a 5 by 5 grid of lights. When the game starts, a random number or a stored pattern of these lights is switched on. Pressing any of the lights will toggle it and the adjacent lights. The goal of the puzzle is to switch all the lights off, preferably in as few button presses as possible.",
    imgUrl:
      'https://res.cloudinary.com/ztm/image/upload/v1627724620/Portfolio%20-%20CR/lights-out-min_gp9gvj.png',
    imgUrl2:
      'https://res.cloudinary.com/ztm/image/upload/v1627724620/Portfolio%20-%20CR/lights-out-min_gp9gvj.png',
    imgUrl3:
      'https://res.cloudinary.com/ztm/image/upload/v1627724620/Portfolio%20-%20CR/lights-out-min_gp9gvj.png',
    stack: [Stack.React, Stack.TypeScript],
    github: 'https://github.com/cyps1000/lights-out',
    live: 'https://cyps1000.github.io/lights-out/',
  },
  {
    title: 'Yahtzee!',
    description:
      'Yahtzee is a mix of casual, light-weight gambling and strategy, packaged nicely into a React only application. The objective of the game is to score points by rolling five dice to make certain combinations. You have 3 rolls, you are able to lock each dice and choose wisely from the table scores,',
    imgUrl:
      'https://res.cloudinary.com/ztm/image/upload/v1627725669/Portfolio%20-%20CR/yahtzee-min_aokyls.png',
    imgUrl2:
      'https://res.cloudinary.com/ztm/image/upload/v1627725669/Portfolio%20-%20CR/yahtzee-min_aokyls.png',
    imgUrl3:
      'https://res.cloudinary.com/ztm/image/upload/v1627725669/Portfolio%20-%20CR/yahtzee-min_aokyls.png',
    stack: [Stack.React],
    github: 'https://github.com/cyps1000/yahtzee',
    live: 'https://cyps1000.github.io/yahtzee/',
  },
  {
    title: 'react-material-cli Docs',
    description:
      "react-material-cli Docs is a documentation website made for the open-source NPM package with the same name. It's built on React using Docusaurus, a tool for building optimized websites quickly. The documentation pages are written with Markdown / MDX after which Docusaurus will publish a set of static HTML files ready to serve.",
    imgUrl:
      'https://res.cloudinary.com/ztm/image/upload/v1627726506/Portfolio%20-%20CR/react-material-cli-docs-min_lmovr5.png',
    imgUrl2:
      'https://res.cloudinary.com/ztm/image/upload/v1627726506/Portfolio%20-%20CR/react-material-cli-docs-min_lmovr5.png',
    imgUrl3:
      'https://res.cloudinary.com/ztm/image/upload/v1627726506/Portfolio%20-%20CR/react-material-cli-docs-min_lmovr5.png',
    stack: [Stack.React, Stack.Docusaurus, Stack.TypeScript],
    github: 'https://github.com/cyps1000/react-material-cli-docs',
    live: '',
  },
];
