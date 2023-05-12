import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import "@shoelace-style/shoelace/dist/themes/light.css";
import { setBasePath } from "@shoelace-style/shoelace/dist/utilities/base-path.js";

// Set the base path to the folder you copied Shoelace's assets to
setBasePath("/path/to/shoelace/dist");


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);