import React from 'react';
import { Fragment } from 'react';
import { HomeHeader } from '../HomeHeader';
import { HomeDescription } from '../HomeDescription';
import { HomeSkils } from '../HomeSkills';
import { HomeContact } from '../HomeContact';

export const Home: React.FC = () => {
  return (
    <Fragment>
      <HomeHeader />
      <HomeDescription />
      <HomeSkils />
      <HomeContact />
    </Fragment>
  );
};
