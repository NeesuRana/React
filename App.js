import React from 'react';
import ReactDOM from 'react-dom/client';

const child = React.createElement(
    'div',
 {id:'child'},
 [React.createElement('h1', {id: 'heading' }, 'Hello World' ),
 React.createElement('h2', {id: 'heading2' }, 'Hello World2' ),
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading);
root.render(child);
