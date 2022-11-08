import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root') as HTMLDivElement).render(
  <React.StrictMode>
    <BrowserRouter basename="/monynaldoni.com">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
