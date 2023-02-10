import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import App from './components/App/';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import AboutPage from './components/About'
import POPOSList from './components/POPOSList/POPOSList'
import POPOSDetails from './components/POPOSDetails/POPOSDetails'

// Add React Query 
import { QueryClientProvider, QueryClient } from 'react-query';
// Create a QueryClient
const queryClient = new QueryClient()
// Wrap your App in the QueryClientProvider
ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<POPOSList />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/details/:id" element={<POPOSDetails />} />
        </Route>
      </Routes>
    </Router>
  </QueryClientProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
