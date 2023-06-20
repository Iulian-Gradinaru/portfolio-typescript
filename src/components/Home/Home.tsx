import React from 'react';
import { Fragment } from 'react';
import { HomeHeader } from '../HomeHeader';
import { HomeDescription } from '../HomeDescription';
import { HomeSkils } from '../HomeSkils';

export const Home: React.FC = () => {
  return (
    <Fragment>
      <HomeHeader />
      <HomeDescription />
      <HomeSkils />
    </Fragment>
  );
};
