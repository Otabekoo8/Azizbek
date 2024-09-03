import React, { useState } from 'react';
import './Uylar.css';
import zoruy from '../../assets/imgs/zoruy.jpeg';
import zoruy2 from '../../assets/imgs/zoruy2.jpg';
import zoruy3 from '../../assets/imgs/zoruy3.jpg';
import zoruy4 from '../../assets/imgs/zoruy4.jpg';

function Uylar() {
  const [yurakTanlangan, setYurakTanlangan] = useState([false, false, false, false]);
  const [valyuta, setValyuta] = useState('som');
  const [filter, setFilter] = useState('tanlangan'); 
  const [tanlanganListing, setTanlanganListing] = useState(null); 
  const [xabarYuborildi, setXabarYuborildi] = useState(false);
  const [xabarlar, setXabarlar] = useState([]);
  const [yangiXabar, setYangiXabar] = useState('');

  const yurakniAlmashtirish = (index) => {
    const yangiYurakTanlangan = [...yurakTanlangan];
    yangiYurakTanlangan[index] = !yangiYurakTanlangan[index];
    setYurakTanlangan(yangiYurakTanlangan);
  };

  const ValyutaniKonvertatsiyaQilish = (miqdor, valyuta) => {
    const kurslar = {
      som: 1,
      rub: 1.25,
      usd: 0.00009,
      eur: 0.00008,
      gbp: 0.00007,
    };

    return (miqdor * kurslar[valyuta]).toFixed(2);
  };

  const ValyutaniOzgartirish = (e) => {
    setValyuta(e.target.value);
  };

  const rasmlar = [zoruy, zoruy2, zoruy3, zoruy4];

  const listingData = [
    { title: 'Birinchi Ro‘yxat', narx: 20000000, imgIndex: 0 },
    { title: 'Ikkinchi Ro‘yxat', narx: 26000000, imgIndex: 1 },
    { title: 'Uchinchi Ro‘yxat', narx: 15000000, imgIndex: 2 },
    { title: 'To‘rtinchi Ro‘yxat', narx: 12000000, imgIndex: 3 }
  ];

  const filteredListings = filter === 'eng_arzon'
    ? [listingData[3]]
    : filter === 'eng_yangi'
    ? [listingData[0]]
    : filter === 'eng_qimmat'
    ? [listingData[1]]
    : filter === 'eng_zamonaviy'
    ? [listingData[3]]
    : listingData;

  const SortOptionOzgartirish = (e) => {
    setFilter(e.target.value);
  };

  const ListingniTanlash = (listing) => {
    setTanlanganListing(listing);
  };

  const XabarYuborish = () => {
    if (yangiXabar.trim() !== '') {
      setXabarlar([...xabarlar, yangiXabar]);
      setYangiXabar(''); // Input maydonini tozalash
      setTanlanganListing(null); // Tanlangan ro'yxatdan chiqish
      setXabarYuborildi(true);
    }
  };

  return (
    <div className="container">
      {!tanlanganListing ? (
        <>
          <div className="filter-section">
            <form>
              <select>
                <option value="category">Rukn</option>
                <option value="daily">Sutkalik Ijarasi</option>
              </select>
              <select>
                <option value="type">Ichki toifa</option>
                <option value="apartments">Kvartiralar</option>
              </select>
            </form>
          </div>

          <div className="sort-currency-section">
            <div className="sorting">
              <div className="dropdown">
                <div className="dropdown-content">
                  <select onChange={SortOptionOzgartirish} value={filter}>
                    <option value="tanlangan">Tanlangan</option>
                    <option value="eng_yangi">Eng Yangi</option>
                    <option value="eng_arzon">Eng Arzon</option>
                    <option value="eng_qimmat">Eng Qimmat</option>
                    <option value="eng_zamonaviy">Eng Zamonaviy</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="currency">
              <select onChange={ValyutaniOzgartirish} value={valyuta}>
                <option value="som">UZS</option>
                <option value="rub">RUB</option>
                <option value="usd">USD</option>
                <option value="eur">EUR</option>
                <option value="gbp">GBP</option>
              </select>
            </div>
          </div>

          <div className="listings">
            {filteredListings.map((listing, index) => (
              <div className="listing" key={index} onClick={() => ListingniTanlash(listing)}>
                <img src={rasmlar[listing.imgIndex]} alt={`Listing Image ${index + 1}`} />
                <div className="listing-details">
                  <h3>{listing.title}</h3>
                  <p>Ro'yxatning ta'rifi</p>
                  <span>{ValyutaniKonvertatsiyaQilish(listing.narx, valyuta)} {valyuta.toUpperCase()}</span>
                </div>
                <div
                  className={`heart-icon ${yurakTanlangan[listing.imgIndex] ? 'selected' : ''}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    yurakniAlmashtirish(listing.imgIndex);
                  }}
                >
                  ♥
                </div>
              </div>
            ))}
          </div>

          {xabarlar.length > 0 && (
            <button className="xabarlar-button" onClick={() => setXabarlar([...xabarlar])}>
              Xabarlar
            </button>
          )}
        </>
      ) : (
        <div className="selected-listing">
          <img src={rasmlar[tanlanganListing.imgIndex]} alt={tanlanganListing.title} className="selected-image" />
          <div className="listing-info">
            <h2>{tanlanganListing.title}</h2>
            <p>Ro'yxatning to'liq ta'rifi.</p>
            <input
              type="text"
              value={yangiXabar}
              onChange={(e) => setYangiXabar(e.target.value)}
              placeholder="Xabar yozing..."
              className="xabar-input"
            />
            <button className="xabar-button" onClick={XabarYuborish}>
              Xabar yuborish
            </button>
            {xabarYuborildi && <p>Xabar yuborildi va bosh sahifaga qaytildi</p>}
          </div>
        </div>
      )}

      {xabarlar.length > 0 && (
        <div className="messages-section">
          <h3>Yozilgan xabarlar:</h3>
          <ul>
            {xabarlar.map((xabar, index) => (
              <li key={index}>{xabar}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Uylar;
