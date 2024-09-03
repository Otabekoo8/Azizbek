import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import Vareant from '../Vareantlar/Vareantlar';
import Keyingi from '../Keyingi/Keyingi';
import Header from '../Header/Header';
import Uylar from '../Uylar/Uylar';

const App = () => {
  return (
    <Router>
      <Header/>
      <Navbar />
      <Routes>
        <Route path="/" element={<Vareant />} />
        <Route path="/vareant" element={<Vareant />} />
        {/* Add more routes as needed */}
      </Routes>
      <Footer />
      <Uylar/>
      <Keyingi/>
    </Router>
  );
};

export default App;
