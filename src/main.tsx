import ReactDOM from 'react-dom/client';
import { App } from './App.tsx';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './index.styles.ts';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);
