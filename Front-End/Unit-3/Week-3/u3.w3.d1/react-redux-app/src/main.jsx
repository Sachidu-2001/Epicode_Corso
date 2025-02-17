import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider0 } from 'react-redux'


createRoot(document.getElementById('root')).render(
  <Provider store={stores}>
    <App />
  </Provider>
)
