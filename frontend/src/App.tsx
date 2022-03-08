/* Common Section Css Code  */
import { useState } from 'react';
import IndexPage from './Templates/IndexPage';
import FaqPage from './Templates/FaqPage';
import MarketPage from './Templates/Market-page';
import LoginSignup from './Templates/Login-Signup-page';
import Header from './Header-Footer/Header';
import Footer from './Header-Footer/Footer';
import { Routes, Route, useLocation } from "react-router-dom";

function App() {
  let location = useLocation();
  let formHeader: Boolean = false;
  if (location.pathname !== '/forgot-password' && location.pathname !== '/signup' && location.pathname !== '/login' && location.pathname !== '/login-qr') {
    formHeader = false
  } else {
    formHeader = true;
  }


  
  const [getheaderHeightlet, setgetheaderHeightlet]=useState(95)
  console.log("App",getheaderHeightlet)
  return (
    <>
      <Header formHeader={formHeader} headerHeight={setgetheaderHeightlet}/>
      <main id="mainContent">
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/signup" element={<LoginSignup formType="signup" getheaderHeightlet={getheaderHeightlet} />} />
          <Route path="/login" element={<LoginSignup formType="login" getheaderHeightlet={getheaderHeightlet}/>} />
          <Route path="/login-qr" element={<LoginSignup formType="login-qr" getheaderHeightlet={getheaderHeightlet}/>} />
          <Route path="/forgot-password" element={<LoginSignup formType="forgot-password" getheaderHeightlet={getheaderHeightlet}/>} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/market" element={<MarketPage />} />

          <Route path="*" element={<IndexPage />}/>
        </Routes>
      </main>
      {formHeader ? null : <Footer />}
    </>
  );
}

export default App;

