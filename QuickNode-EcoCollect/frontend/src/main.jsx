import '@coinbase/onchainkit/styles.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from './App.jsx';
import RecycleContractProvider from './context/RecycleContractProvider.jsx';
import RecycloxTokenProvider from './context/TokenProvider.jsx';
import './index.css';
import { WagmiProviders } from './providers/wagmi.jsx';



ReactDOM.createRoot(document.getElementById('root')).render(
  <WagmiProviders>
    <RecycloxTokenProvider>
      <RecycleContractProvider>
        <React.StrictMode>
      
          <BrowserRouter>
              <App />
          </BrowserRouter>
        
        </React.StrictMode>
      </RecycleContractProvider>
    </RecycloxTokenProvider>
  </WagmiProviders>
)

