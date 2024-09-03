import React, { useState } from 'react';
import xususiysektor from '../../assets/imgs/xususiysektor.jpg';
import xususiysektor2 from '../../assets/imgs/xususiysektor2.jpeg';
import xususiysektor3 from '../../assets/imgs/xususiysektor3.jpg';
import '../Vareantlar/Vareantlar.css'; // Correct way to import CSS

const DynamicFilter = () => {
    const [selectedVariant, setSelectedVariant] = useState('');
    const [selectedRoomCount, setSelectedRoomCount] = useState('');
    const [selectedDoubleBeds, setSelectedDoubleBeds] = useState('');
    const [selectedSingleBeds, setSelectedSingleBeds] = useState('');
    const [selectedDistance, setSelectedDistance] = useState('');
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const [selectedItem, setSelectedItem] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [cardNumber, setCardNumber] = useState('');
    const [purchaseMessage, setPurchaseMessage] = useState('');

    const handleVariantChange = (event) => {
        setSelectedVariant(event.target.value);
    };

    const handleRoomCountChange = (event) => {
        setSelectedRoomCount(event.target.value);
    };

    const handleDoubleBedsChange = (event) => {
        setSelectedDoubleBeds(event.target.value);
    };

    const handleSingleBedsChange = (event) => {
        setSelectedSingleBeds(event.target.value);
    };

    const handleDistanceChange = (event) => {
        setSelectedDistance(event.target.value);
    };

    const handleSearch = () => {
        if (!selectedVariant || !selectedRoomCount || !selectedDoubleBeds || !selectedSingleBeds || !selectedDistance) {
            setErrorMessage('Iltimos, barcha katakchalarni to\'ldiring.');
            setResults([]);
            return;
        }

        setErrorMessage('');
        const searchResults = [
            { id: 1, name: "Rasm 1", imageUrl: xususiysektor, price: '15 mln' },
            { id: 2, name: "Rasm 2", imageUrl: xususiysektor2, price: '13 mln' },
            { id: 3, name: "Rasm 3", imageUrl: xususiysektor3, price: '17 mln' },
        ];
        setResults(searchResults);
    };

    const handleClearAll = () => {
        setSelectedVariant('');
        setSelectedRoomCount('');
        setSelectedDoubleBeds('');
        setSelectedSingleBeds('');
        setSelectedDistance('');
        setResults([]);
        setErrorMessage('');
        setSelectedItem(null);
        setShowModal(false);
        setCardNumber('');
        setPurchaseMessage('');
    };

    const handleShowMore = (item) => {
        setSelectedItem(item);
        setShowModal(true);
    };

    const handleModalClose = () => {
        setShowModal(false);
        setSelectedItem(null);
        setCardNumber('');
        setPurchaseMessage('');
    };

    const handleCardNumberChange = (event) => {
        setCardNumber(event.target.value);
    };

    const handlePurchase = () => {
        if (cardNumber.length === 16) {
            setPurchaseMessage('Uy sizniki!');
            setShowModal(false);
        } else {
            alert('Karta raqamini to\'liq kiriting.');
        }
    };

    return (
        <div className="container-1">
            <div className="regionSection">
                <h3 className="sectionTitle">Yaltaning rayonlari</h3>
                <label className="label">
                    <input
                        type="radio"
                        value="Uy"
                        checked={selectedVariant === 'Uy'}
                        onChange={handleVariantChange}
                    />
                    Uy
                </label>
                <label className="label">
                    <input
                        type="radio"
                        value="Kvartira"
                        checked={selectedVariant === 'Kvartira'}
                        onChange={handleVariantChange}
                    />
                    Kvartira
                </label>
            </div>

            {selectedVariant && (
                <div className="filterSection">
                    <label className="label">
                        Xonalar soni:
                        <select className="select" value={selectedRoomCount} onChange={handleRoomCountChange}>
                            <option value="">Tanlang</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </label>
                    <label className="label">
                        Ikki kishilik krovatlar soni:
                        <select className="select" value={selectedDoubleBeds} onChange={handleDoubleBedsChange}>
                            <option value="">Tanlang</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </label>
                    <label className="label">
                        Bir kishilik krovatlar soni:
                        <select className="select" value={selectedSingleBeds} onChange={handleSingleBedsChange}>
                            <option value="">Tanlang</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </label>
                    <label className="label">
                        O'quv markazga masofa:
                        <select className="select" value={selectedDistance} onChange={handleDistanceChange}>
                            <option value="">Tanlang</option>
                            <option value="0-1km">0-1 km</option>
                            <option value="1-3km">1-3 km</option>
                            <option value="3-5km">3-5 km</option>
                        </select>
                    </label>
                </div>
            )}

            <button className="button" onClick={handleSearch}>Izlash</button>
            <button className="button" onClick={handleClearAll}>Hammasini tozalash</button>

            {errorMessage && <p className="errorMessage">{errorMessage}</p>}

            {results.length > 0 && (
                <div className="resultsSection">
                    <h3 className="sectionTitle">Natijalar:</h3>
                    {results.map((result) => (
                        <div key={result.id} className="resultItem">
                            <img src={result.imageUrl} alt={result.name} className="resultImage" />
                            <div className="resultText">
                                <p>{result.name}</p>
                                <p>Price: {result.price}</p>
                                <button className="showMoreButton" onClick={() => handleShowMore(result)}>Ko'proq ko'rish</button>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {showModal && selectedItem && (
                <div className="modalOverlay">
                    <div className="modalContent">
                        <button className="closeButton" onClick={handleModalClose}>X</button>
                        <img src={selectedItem.imageUrl} alt={selectedItem.name} className="resultImage" />
                        <p>{selectedItem.name}</p>
                        <p>Price: {selectedItem.price}</p>
                        <input
                            type="text"
                            value={cardNumber}
                            onChange={handleCardNumberChange}
                            maxLength="16"
                            placeholder="Karta raqami"
                            className="input"
                        />
                        <button className="purchaseButton" onClick={handlePurchase}>Sotib olish</button>
                    </div>
                </div>
            )}

            {purchaseMessage && <p className="purchaseMessage">{purchaseMessage}</p>}
        </div>
    );
};

export default DynamicFilter;
