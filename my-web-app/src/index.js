import React from 'react';
import ReactDOM from 'react-dom/client';
import Counter from './ExemploRedux/counter';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { reducer } from './redux/reducers';
 

const store = createStore(
  reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //Conecta o Redux com o devtools do navegador.
);//Cria a store.



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}> 
    < Counter />
  </Provider>
);//Provider é o componente que conecta o Redux com o React.
