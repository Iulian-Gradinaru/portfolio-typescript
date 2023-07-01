import ReactDOM from 'react-dom/client';
/**
 * Imports App
 */
import { App } from './App.tsx';

/**
 * Imports Material UI components
 */
import { ThemeProvider } from '@mui/material/styles';

/**
 * Imports styling
 */
import { theme } from './index.styles.ts';

/**
 * Renders the App
 */
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);
