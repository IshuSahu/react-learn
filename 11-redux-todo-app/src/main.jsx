import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './app/store'

createRoot(document.getElementById('root')).render(
  //here we dont provide the value like context we provide store
  <Provider store={store}> 
    <App />
  </Provider>,
)
