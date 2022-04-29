import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Usestate from './Exemplos/usestate';
import SorveteForm from './Exemplos/formularioReactComplexo';

import Form from './Exemplos/formularioReact';
;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    < SorveteForm />
  </React.StrictMode>
);

