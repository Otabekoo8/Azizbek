import React, { useState } from "react";
import "./Keyingi.css";

// Import images
import kvartira1 from '../../assets/imgs/kvartira1.jpg';
import kvartira2 from '../../assets/imgs/kvartira2.jpg';
import kvartira3 from '../../assets/imgs/kvartira3.jpg';
import uylar1 from '../../assets/imgs/uylar1.jpg';
import uylar2 from '../../assets/imgs/uylar2.jpg';
import uylar3 from '../../assets/imgs/uylar3.jpg';
import mehmonuy1 from '../../assets/imgs/mehmonuy.webp';
import mehmonuy2 from '../../assets/imgs/mehmonuy2.jpg';
import mehmonuy3 from '../../assets/imgs/mehmonuy3.jpg';
import xususiysektor from '../../assets/imgs/xususiysektor.jpg';
import xususiysektor2 from '../../assets/imgs/xususiysektor2.jpeg';
import xususiysektor3 from '../../assets/imgs/xususiysektor3.jpg';

// Update images object
const images = {
  Danilovka: [kvartira1, kvartira2, kvartira3],
  Beregovoе: [uylar1, uylar2, uylar3],
  Foros: [mehmonuy1, mehmonuy2, mehmonuy3],
  Gaspra: [xususiysektor, xususiysektor2, xususiysektor3],
  Gurzuf: [xususiysektor, xususiysektor2, xususiysektor3],
  Katsiveli: [kvartira1, kvartira2],
  Kuibishevo: [kvartira1, kvartira2],
  Kurpatы: [kvartira1, kvartira2],
  Yana: [kvartira1, kvartira2, kvartira3],
};

const Keyingi = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="container2">
    <div className="vareantlar-container">
      <section className="section">
        <h3>Yaltaning rayonlari</h3>
        <div className="options1">
          <button onClick={() => handleOptionClick("Beregovoе")}>Beregovoе (Kastropol)</button>
          <button onClick={() => handleOptionClick("Danilovka")}>Danilovka</button>
          <button onClick={() => handleOptionClick("Foros")}>Foros</button>
          <button onClick={() => handleOptionClick("Gaspra")}>Gaspra</button>
          <button onClick={() => handleOptionClick("Gurzuf")}>Gurzuf</button>
          <button onClick={() => handleOptionClick("Katsiveli")}>Katsiveli</button>
          <button onClick={() => handleOptionClick("Kuibishevo")}>Kuibishevo</button>
          <button onClick={() => handleOptionClick("Kurpatы")}>Kurpatы</button>
          <button onClick={() => handleOptionClick("Yana")}>Yana...</button>
        </div>  
      </section>

      {selectedOption && (
        <section className="images-section">
          <h3>{selectedOption} rasimlari</h3>
          <div className="images">
            {images[selectedOption].map((image, index) => (
              <img key={index} src={image} alt={`${selectedOption} ${index + 1}`} />
            ))}
          </div>
        </section>
      )}
    </div>
    </div>
  );
};

export default Keyingi;