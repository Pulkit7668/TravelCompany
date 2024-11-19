import { createRoot } from 'react-dom/client';
import './index.css';
import { Auth0Provider } from '@auth0/auth0-react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import JandK from './Pages/JandK.jsx'
import Ladakh from './Pages/Ladakh.jsx'
import Kerala from './Pages/Kerala.jsx';
import Rajasthan from './Pages/Rajasthan.jsx';
import SearchPage from './components/NavBar/SearchPage.jsx'
import AndamanNicobar from './Pages/AndamanNicobar.jsx';
import HimachalPradesh from './Pages/HimachalPradesh';
import Uttarakhand from './Pages/Uttarakhand';
import Sikkim from './Pages/Sikkim.jsx';
import Goa from './Pages/Goa.jsx';
import ArunachalPradesh from './Pages/ArunachalPradesh.jsx';
import Srinagar from './Pages/Srinagar.jsx'



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
        <Route path="/jandk" element={<JandK />} >
        </Route>
        <Route path="/ladakh" element={<Ladakh />} />
        <Route path="/kerala" element={<Kerala />} />
        <Route path="/rajasthan" element={<Rajasthan />} /> 
        <Route path="/andaman&nicobar" element={<AndamanNicobar />} /> 
        <Route path="/himachalpradesh" element={<HimachalPradesh />} />
        <Route path="/uttarakhand" element={<Uttarakhand />} />
        <Route path="/sikkim" element={<Sikkim />} />
        <Route path="/goa" element={<Goa />} />
        <Route path="/arunachalpradesh" element={<ArunachalPradesh />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/jandk/srinagar" element={<Srinagar />} />
      </Routes>
    </Auth0Provider>
  </BrowserRouter>
);
