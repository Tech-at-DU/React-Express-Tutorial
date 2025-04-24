import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AboutPage from './components/About'
import POPOSList from './components/POPOSList/POPOSList'
import POPOSDetails from './components/POPOSDetails/POPOSDetails'
import './index.css'
import App from './components/App'

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
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
    </QueryClientProvider>
  </StrictMode>,
)
