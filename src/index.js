import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import * as serviceWorker from './serviceWorker';
import store from './redux/redux_store'


function rerenderVirtualDom () {
    ReactDOM.render(
      <React.StrictMode>
        <App data={store.getState()} dispatch={store.dispatch.bind(store)} store={store}/>
      </React.StrictMode>,
      document.getElementById("root")
    );
}
  
store.subscribe(rerenderVirtualDom)

rerenderVirtualDom ()

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
