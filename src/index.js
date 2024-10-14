import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import ContextfoeHomeData from './constants/HomeContext'

ReactDOM.createRoot(document.getElementById("root")).render(
    <ContextfoeHomeData>
        <App />
    </ContextfoeHomeData>
)