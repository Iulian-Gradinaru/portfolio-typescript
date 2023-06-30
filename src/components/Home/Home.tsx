/**
 * Imports Material UI components
 */
import { Fragment } from 'react';

/**
 * Imports components
 */
import { HomeHeader } from '../HomeHeader';
import { HomeDescription } from '../HomeDescription';
import { HomeSkils } from '../HomeSkills';
import { HomeContact } from '../HomeContact';

/**
 * Displays the component
 */
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
