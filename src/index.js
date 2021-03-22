import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'modern-normalize/modern-normalize.css';

// const app = React.createElement(App);
// ReactDOM.render(app, document.getElementById('root'));

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
// =============================================================================
// const link = React.createElement(
//   'a',
//   {
//     href: 'https://reactjs.org/',
//     target: '_blank',
//     rel: 'noreferrer noopener',
//   },
//   'ссылка на reactjs.org',
// );
// console.log('link', link);

// const jsxLink = (
//   <a href="https://google.com/" target="_blank" rel="noreferrer noopener">
//     ссылка на google
//   </a>
// );
// console.log(jsxLink);

// ReactDOM.render(link, document.getElementById('root'));
// ===============================================================================

// console.log(template);
// ReactDOM.render(template, document.getElementById('root'));
