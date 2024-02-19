import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import GlobalStyle from './globalStyle.js';
import { BrowserRouter } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

import { register } from 'swiper/element/bundle';

register();
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade'

const root = createRoot(document.getElementById('root'));

// Coloque toda a aplicação dentro da função render
root.render(
  <BrowserRouter>
    <App />
    <GlobalStyle />
  </ BrowserRouter>
);