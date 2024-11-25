import { createRoot } from 'react-dom/client';
import './index.css';
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
import SrinagarDetails from './Pages/SrinagarDetails.jsx'
import OtpAuthentication from './components/NavBar/OtpAuthentication.jsx';



createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/jandk" element={<JandK />} />
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
        <Route path="/jandk/srinagar/itinerary" element={<SrinagarDetails />} />
        <Route path="/otp-authentication" element={<OtpAuthentication />} />
      </Routes>
  </BrowserRouter>
);
