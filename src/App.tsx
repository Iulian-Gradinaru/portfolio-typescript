import { Fragment } from 'react';

/**
 * Imports Routes
 */
import { Routes } from './components/Routes';

/**
 * Imports styling
 */
import './App.css';

/**
 * Dysplays the component
 */
export const App: React.FC = () => {
  return (
    <Fragment>
      <Routes />
    </Fragment>
  );
};
