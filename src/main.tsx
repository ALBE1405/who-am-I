import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import { pageIds, type PageId } from './lib/urls';
import './styles/index.css';

const root = document.getElementById('root');
const page = (root?.dataset.page || 'home') as PageId;
if (!root || !pageIds.includes(page)) throw new Error('A valid portfolio page is required.');

createRoot(root!).render(
  <React.StrictMode>
    <App page={page} base={import.meta.env.BASE_URL} />
  </React.StrictMode>
);
