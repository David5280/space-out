import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App/App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { rootReducer } from './reducers/';
import { composeWithDevTools } from 'redux-devtools-extension'
import * as serviceWorker from './serviceWorker';

const store = createStore(rootReducer, composeWithDevTools())

const application = 
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>

ReactDOM.render(application, document.getElementById('root'));
serviceWorker.unregister();
