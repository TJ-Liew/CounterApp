import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { store } from './Redux/store.ts'
import { Provider } from 'react-redux'
import Counter from './Counter.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <Counter />
  </Provider>
);

