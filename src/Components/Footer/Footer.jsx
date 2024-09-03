import React from 'react';
import '../Footer/Footer.css';
import uy from '../../assets/imgs/uy.png';
import Mastercard from '../../assets/imgs/Mastercard.png';
import maestro from '../../assets/imgs/maestro.png';
import mircard from '../../assets/imgs/mircard.png';
import visa from '../../assets/imgs/visa.png';

const Footer = () => {
    return (
        <div className="container1">
        <div className="footer-bgc">
            <div className="logo">
                <img className='ssss' src={uy} alt="uy" />
                <h1 className='ijara'>Mehmon xonalar</h1>
                <h1 className='tolov'>Ekspress tanlov <br /> eng past narxlarda uy-joy</h1>
                <h1 className='ishlash'>Biz 2020 yildan beri ishlaymiz</h1>
            </div>
            <div className="topishbolganmanzillar">
                <div className="cartalar">
                    <h1 className='tolovlar'>Biz to'lovni qabul qilamiz:</h1>
                    <img className='visa' src={visa} alt="visa" />
                    <img className='Mastercard' src={Mastercard} alt="Mastercard" />
                    <img className='mircard' src={mircard} alt="mircard" />
                    <img className='maestro' src={maestro} alt="maestro" />
                </div>
            </div>
        </div>
        </div>
    );
}

export default Footer;
