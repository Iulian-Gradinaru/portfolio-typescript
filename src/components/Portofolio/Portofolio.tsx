import { Fragment } from 'react';
import { ProjectsHeader } from '../ProjectsHeader';
import { Projects } from '../Projects';

export const Portofolio: React.FC = () => {
  return (
    <Fragment>
      <ProjectsHeader />
      <Projects />
    </Fragment>
  );
};
