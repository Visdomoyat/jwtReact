import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router';
import { UserProvider } from './contexts/UserContext.jsx';
import App from './App.jsx'
import './index.css'


createRoot(document.getElementById('root')).render(

  <StrictMode>
    <Router>
      <UserProvider>
        <App />
      </UserProvider>

    </Router>

  </StrictMode>,


)
