import React, { useState } from "react";
import img from '../../assets/imgs/kvartira1.jpg';
import img2 from '../../assets/imgs/kvartira2.jpg';
import img3 from '../../assets/imgs/kvartira3.jpg';
import uy from '../../assets/imgs/uylar1.jpg';
import uy2 from '../../assets/imgs/uylar2.jpg';
import uy3 from '../../assets/imgs/uylar3.jpg';
import mehmonuy1 from '../../assets/imgs/mehmonuy.webp';
import mehmonuy2 from '../../assets/imgs/mehmonuy2.jpg';
import mehmonuy3 from '../../assets/imgs/mehmonuy3.jpg';
import xususiysektor from '../../assets/imgs/xususiysektor.jpg';
import xususiysektor2 from '../../assets/imgs/xususiysektor2.jpeg';
import xususiysektor3 from '../../assets/imgs/xususiysektor3.jpg';
import samaliyot from '../../assets/imgs/samaliyot.jpg';
import './Navbar.css';

const Navbar = () => {
  const [selected, setSelected] = useState('');
  const [formData, setFormData] = useState({
    city: '',
    checkIn: '',
    checkOut: '',
    roomNumber: '',
    name: '',
  });

  const handleButtonClick = (content) => {
    if (formData.city && formData.checkIn && formData.checkOut && formData.roomNumber && formData.name) {
      setSelected(content);
    } else {
      alert("Iltimos, barcha kerakli katakchalarni to'ldiring.");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.city && formData.checkIn && formData.checkOut && formData.roomNumber && formData.name) {
      handleButtonClick('All');
    } else {
      alert("Iltimos, barcha kerakli katakchalarni to'ldiring.");
    }
  };

  return (
    <div className="navbar" style={{ backgroundImage: `url(${samaliyot})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="navbar-header">
        <h1 className="headline">Krimning Janubiy Sohilida Eng Yaxshi Joylashuv Takliflari</h1>
        <h2 className="subheadline">150,000 dan ortiq e'lonlar - 0% Komissiya</h2>
        <p className="mexmonlar">20,000 ta mehmonlar</p>
      </div>

      <form className="search-form" onSubmit={handleSubmit}>
        <input 
          className="search-input" 
          name="city" 
          type="text" 
          placeholder="Shahar" 
          onChange={handleInputChange} 
          value={formData.city}
        />
        <input 
          className="search-input" 
          name="checkIn" 
          type="date" 
          placeholder="Kirish sanasi" 
          onChange={handleInputChange} 
          value={formData.checkIn}
        />
        <input 
          className="search-input" 
          name="checkOut" 
          type="date" 
          placeholder="Chiqish sanasi" 
          onChange={handleInputChange} 
          value={formData.checkOut}
        />
        <input 
          className="search-input" 
          name="roomNumber" 
          type="number" 
          placeholder="Xona raqami" 
          onChange={handleInputChange} 
          value={formData.roomNumber}
        />
        <input 
          className="search-input" 
          name="name" 
          type="text" 
          placeholder="Ism" 
          onChange={handleInputChange} 
          value={formData.name}
        />
        <button type="submit" className="search-button">Joylashuvni Qidirish</button>
      </form>

      <div className="buttons">
        <button className="category-button" onClick={() => handleButtonClick('Kvartiralar')}>Kvartiralar</button>
        <button className="category-button" onClick={() => handleButtonClick('Uylar')}>Uylar</button>
        <button className="category-button" onClick={() => handleButtonClick('Mehmon uylari')}>Mehmon uylari</button>
        <button className="category-button" onClick={() => handleButtonClick('Xususiy sektor')}>Xususiy sektor</button>
        <button className="category-button" onClick={() => handleButtonClick('Mehmonlar')}>Mexmonlar</button>
      </div>

      <div className="content">
        {(selected === 'Kvartiralar' || selected === 'All') && (
          <div className="image-gallery2">
            <h3>Kvartiralar:</h3>
            <img src={img} alt="Kvartira 1" className="gallery-image" />
            <img src={img2} alt="Kvartira 2" className="gallery-image" />
            <img src={img3} alt="Kvartira 3" className="gallery-image" />
          </div>
        )}
        {(selected === 'Uylar' || selected === 'All') && (
          <div className="image-gallery1">
            <h3>Uylar:</h3>
            <img src={uy} alt="Uy 1" className="gallery-image" />
            <img src={uy2} alt="Uy 2" className="gallery-image" />
            <img src={uy3} alt="Uy 3" className="gallery-image" />
          </div>
        )}
        {(selected === 'Mehmon uylari' || selected === 'All') && (
          <div className="image-gallery">
            <h3>Mehmon uylari:</h3>
            <img src={mehmonuy1} alt="Mehmon uyi 1" className="gallery-image" />
            <img src={mehmonuy2} alt="Mehmon uyi 2" className="gallery-image" />
            <img src={mehmonuy3} alt="Mehmon uyi 3" className="gallery-image" />
          </div>
        )}
        {(selected === 'Xususiy sektor' || selected === 'All') && (
          <div className="image-gallery">
            <h3>Xususiy sektor:</h3>
            <img src={xususiysektor} alt="Xususiy sektor 1" className="gallery-image" />
            <img src={xususiysektor2} alt="Xususiy sektor 2" className="gallery-image" />
            <img src={xususiysektor3} alt="Xususiy sektor 3" className="gallery-image" />
          </div>
        )}
        {selected === 'Mehmonlar' && (
          <div className="guest-list">
            <h3>Mexmonlar:</h3>
            <table className="guest-table">
              <thead>
                <tr>
                  <th>Ism</th>
                  <th>Yosh</th>
                  <th>Kasb</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Ahmad</td>
                  <td>30</td>
                  <td>Dasturchi</td>
                </tr>
                <tr>
                  <td>Bekzod</td>
                  <td>25</td>
                  <td>Dizayner</td>
                </tr>
                <tr>
                  <td>Gulnora</td>
                  <td>28</td>
                  <td>Marketing mutaxassisi</td>
                </tr>
                <tr>
                  <td>Javlon</td>
                  <td>35</td>
                  <td>Biznesmen</td>
                </tr>
                <tr>
                  <td>Laylo</td>
                  <td>32</td>
                  <td>O'qituvchi</td>
                </tr>
                <tr>
                  <td>Mirza</td>
                  <td>40</td>
                  <td>Jurnalist</td>
                </tr>
                <tr>
                  <td>Odil</td>
                  <td>29</td>
                  <td>Tibbiyot mutaxassisi</td>
                </tr>
                <tr>
                  <td>Parvin</td>
                  <td>27</td>
                  <td>Arxitektor</td>
                </tr>
                <tr>
                  <td>Rustam</td>
                  <td>31</td>
                  <td>Muhandis</td>
                </tr>
                <tr>
                  <td>Sarina</td>
                  <td>26</td>
                  <td>Bloger</td>
                </tr>
                <tr>
                  <td>Temur</td>
                  <td>34</td>
                  <td>Iqtisodchi</td>
                </tr>
                <tr>
                  <td>Yulduz</td>
                  <td>30</td>
                  <td>Huquqshunos</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>

      <div className="map-container">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10299.145975107526!2d-0.1276479!3d51.507351!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b3f05fd35c1%3A0x1e8b889ce575409e!2sLondon%2C%20UK!5e0!3m2!1sen!2sus!4v1634070530600!5m2!1sen!2sus" 
          width="100%" 
          height="400" 
          frameBorder="0" 
          allowFullScreen
          title="Google Map"
        ></iframe>
      </div>
    </div>
  );
};

export default Navbar;
