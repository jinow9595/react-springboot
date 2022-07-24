import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit'
import rootReducer from '../modules/index'
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import logger from 'redux-logger';

// createStore 대신 configureStore 사용을 권장 (configureStore 사용법 공부 예정)
const store = createStore(rootReducer, 
  composeWithDevTools(applyMiddleware(ReduxThunk, logger)) );

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={ store }>
      <Component {...pageProps} />
    </Provider>
  )
  
}

export default MyApp
