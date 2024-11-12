import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import JandK from './JandK.jsx'
import Ladakh from './Ladakh.jsx'
import { Auth0Provider } from '@auth0/auth0-react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SearchPage from './components/NavBar/SearchPage.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Auth0Provider
      domain="dev-7rliujw7wdyubv0z.us.auth0.com"
      clientId="lS9OMF6Vk4eIJzMnKEpDqIDPHRiNqojw"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/jandk" element={<JandK />} /> {/* Define /app1 route */}
        <Route path="/ladakh" element={<Ladakh />} /> {/* Define /app1 route */}
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </Auth0Provider>
  </BrowserRouter>
);
