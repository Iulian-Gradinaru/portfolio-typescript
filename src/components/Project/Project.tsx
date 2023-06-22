import { Fragment } from 'react';

/**
 * External Imports
 */
import { v4 } from 'uuid';

/**
 * Imports Material UI components
 */

import {
  Tooltip,
  Grid,
  Typography,
  Box,
  Link,
  IconButton,
} from '@mui/material';

/**
 * Imports Material UI Icons
 */
// import { GitHub as GitHubIcon, Language as LanguageIcon } from "@material-ui/icons";

import LanguageSharpIcon from '@mui/icons-material/LanguageSharp';
import GitHubIcon from '@mui/icons-material/GitHub';

import { ProjectProps } from './Project.types';

import {
  CustomGrid,
  CustomChip,
  CustomImg,
  CustomBox,
  Stacklinks,
  StackBox,
} from './Project.styles';

/**
 * Displays the component
 */
export const Project: React.FC<ProjectProps> = (props) => {
  const { project } = props;

  // /**
  //  * Gets the component styles
  //  */
  // const classes = useStyles();

  /**
   * Handles generating stack chips
   */
  const generateStack = () => {
    return project.stack.map(
      (stack: string): JSX.Element => (
        <CustomChip
          key={v4()}
          color="secondary"
          variant="outlined"
          label={stack}
          // className={classes.stacks} gata
        />
      )
    );
  };

  /**
   * Handles generating a GitHub Icon
   */
  const generateGitHubIcon = () => (
    <Box>
      <Tooltip
        title="GitHub Repository"
        aria-label="github"
        placement="left"
        arrow
      >
        <Link target="_blank" href={project.github}>
          <IconButton>
            <GitHubIcon fontSize="large" />
          </IconButton>
        </Link>
      </Tooltip>
    </Box>
  );

  /**
   * Handles generating a website icon
   */
  const generateWebsiteIcon = () => (
    <Box>
      <Tooltip
        title={`Some of the projects are hosted on heroku free tier.
        It may take up to 20 seconds to wake up the server 
        (it goes to sleep if there are no requests for 30 minutes). 
        Sorry for the inconvenience!`}
        aria-label="website"
        placement="right"
        arrow
      >
        <Link target="_blank" href={project.live}>
          <IconButton>
            <LanguageSharpIcon fontSize="large" />
          </IconButton>
        </Link>
      </Tooltip>
    </Box>
  );

  return (
    <Fragment>
      <Grid item xs={12} sm={12} md={7} lg={7}>
        <CustomImg src={project.imgUrl} alt="example-responsive" />
      </Grid>
      <CustomGrid item xs={12} sm={12} md={5} lg={5}>
        <CustomBox>
          <Typography variant="h4" color="secondary">
            {project.title}
          </Typography>
          <Stacklinks>
            <Box>{generateGitHubIcon()}</Box>
            <Box>{project.live.length > 0 && generateWebsiteIcon()}</Box>
          </Stacklinks>
          <Typography variant="h6" color="textSecondary">
            {project.description}
          </Typography>
          <StackBox>{generateStack()}</StackBox>
        </CustomBox>
      </CustomGrid>
    </Fragment>
  );
};
