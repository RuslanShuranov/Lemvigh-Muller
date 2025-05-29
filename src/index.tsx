import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from '@hooks/useTheme';
import { SWRConfig } from 'swr';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <SWRConfig
        value={{
          dedupingInterval: 10000,
          revalidateOnFocus: true,
          focusThrottleInterval: 1000,
        }}
      >
        <App />
      </SWRConfig>
    </ThemeProvider>
  </React.StrictMode>
);
