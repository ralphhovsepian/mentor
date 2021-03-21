import React from 'react';
import { registerRootComponent } from 'expo';
import { AppRegistry } from 'react-native';
import App from './Components/App/App';
import store from './redux/store';
import { Provider } from 'react-redux';

const Root = () => (
    <Provider store={store}>
      <App />
    </Provider>
  )

AppRegistry.registerComponent('main', () => Root);
