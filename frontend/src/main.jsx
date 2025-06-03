import './styles/globals.css'
import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter as Router} from 'react-router-dom'
import MuiThemeProvider from './theme/MuiThemeProvider';


createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Router>
            <MuiThemeProvider>
                <App/>
            </MuiThemeProvider>
        </Router>
    </StrictMode>,
)
