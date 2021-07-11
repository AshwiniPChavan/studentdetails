import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import App from './components/App';
import reducer from './reducers'
import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import './components/styles/index.css'
const theme = createTheme({
  palette: {
    primary: {
      main: '#ee9ca7',
      contrastText: "#fff"
    }
  },
  typography: {
    h4: { color: '#ae7575' }
  }
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(reduxThunk)));
ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.querySelector('#root')
);
