import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Popup from './Components/Popup.jsx';
import Navbar from './Components/Navbar.jsx';
import Footer from './Components/Footer.jsx';
import { EventProvider } from './Components/context/EventContext'; // Correct path

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <EventProvider> {/* Wrap the App component with EventProvider */}
        <Navbar />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/popup" element={<Popup />} />
        </Routes>
        <Footer />
      </EventProvider>
    </Router>
  </React.StrictMode>,
);
