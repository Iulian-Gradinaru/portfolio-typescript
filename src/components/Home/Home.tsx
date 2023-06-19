import React from 'react';
import { Fragment } from 'react';
import { HomeHeader } from '../HomeHeader';
import { HomeDescription } from '../HomeDescription';

export const Home: React.FC = () => {
  return (
    <Fragment>
      <HomeHeader />
      <HomeDescription />
    </Fragment>
  );
};
