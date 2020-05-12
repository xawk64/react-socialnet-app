import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import * as serviceWorker from './serviceWorker';
import store from './store'


function rerenderVirtualDom (data) {
    ReactDOM.render(
      <React.StrictMode>
        <App data={data} dispatch={store.dispatch.bind(store)}/>
      </React.StrictMode>,
      document.getElementById("root")
    );
}
  
store.subscribe(rerenderVirtualDom);

store.init()

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
