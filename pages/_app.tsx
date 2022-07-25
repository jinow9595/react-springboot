import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit'
import rootReducer from '../modules/index'
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import logger from 'redux-logger';

/*
const store2 = createStore(rootReducer, 
  composeWithDevTools(applyMiddleware(ReduxThunk, logger)) );
*/

const store = configureStore({
  reducer: rootReducer,
  middleware: [ReduxThunk, logger],
  devTools: true,
  preloadedState: {
    loading: {
      loadingState: true,
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={ store }>
      <Component {...pageProps} />
    </Provider>
  )
  
}

export default MyApp
