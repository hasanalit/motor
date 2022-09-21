import styled from "styled-components";
import Carm from '../Assets/Images/carm.png'
import Frame from '../Assets/Images/Frame.png'
import Home from '../Assets/Images/home.png'
import Malibu from '../Assets/Images/malibu.png'

function List1() {
    return (
        <Wrapper>
        <div className="car-kind">
            <div className="car-left">
                <h3 className="kind-heading">Chevrolet Malibu</h3>
                <p className="kind-text">329 900 000 so‘m dan</p>
                <img className="kind-imgs" src={Carm} alt="car-img" />
                    <ul className="car-list">
                        <li className="car-item">
                        <p className="car-sifat">Marka:</p>
                        <p className="car-xxx">CHEVROLET</p>
                        </li>
                        <li className="car-item">
                        <p className="car-sifat">Tanirovkasi:</p>
                        <p className="car-xxx">Yo'q</p>
                        </li>
                        <li className="car-item">
                        <p className="car-sifat">Motor:</p>
                        <p className="car-xxx">1.6</p>
                        </li>
                        <li className="car-item">
                        <p className="car-sifat">Year:</p>
                        <p className="car-xxx">2000</p>
                        </li>
                        <li className="car-item">
                        <p className="car-sifat">Color:</p>
                        <p className="car-xxx">Oq</p>
                        </li>
                        <li className="car-item">
                        <p className="car-sifat">Distance:</p>
                        <p className="car-xxx">3000 km</p>
                        </li>
                        <li className="car-item">
                        <p className="car-sifat">Gearbook:</p>
                        <p className="car-xxx">Avtomat karobka</p>
                        </li>
                        <li className="car-item">
                        <p className="car-xxxx"><span className="car-sifat">Deseription:</span> Mishina ideal holatda krasska top toza 100tali. Ayol kishiniki judayam akuratno haydalgan.</p>
                        </li>
                    </ul>
                    <div className="kind-bottom">
                        <p className="car-price">Umumiy xarajat:</p>
                        <p className="car-price-text">329 900 000 so'm dan</p>
                    </div>
            </div>
            <div className="car-right">
                <div className="right-top">
                    <h3 className="car-right-heading">Chevrolet Malibu</h3>
                    <div className="car-icon">
                        <img className="car-frame" src={Frame} alt="frame-icon" />
                        <img className="car-frame1" src={Home} alt="Home-icon" />
                    </div>
                    </div>
                    <div>
                    <img className="car-img" src={Malibu} alt="malibu-img" />
                    <p className="car-gradus">360</p>
                    <p className="car-history">Tasvir tanlangan konfiguratsiyaga mos kelmasligi mumkin. Mashinaning rangi ushbu saytda taqdim etilganidan farq qilishi mumkin.</p>
                    </div>
                    <ul className="car-right-list">
                        <li className="car-right-item">
                            <input className="checkbox" type="checkbox" />
                            <p className="checkbox-text">Tashqi</p>
                        </li>
                        <li className="car-right-item">
                            <input className="checkbox" type="checkbox" />
                            <p className="checkbox-text">Ichki</p>
                        </li>
                    </ul>
            </div>
        </div>
        </Wrapper>
    )}

    export default List1

    const Wrapper = styled.div`
      padding: 43px 94px;

      .car-kind {
        display: flex;
        align-items: flex-start;
      }

      .car-left {

        padding: 16px 24px;
        width: 396px;
        left: 94px;
        top: 242px;
        background: #F6F6F6;
        border-radius: 8px;
        height: 660px;
      }

      .kind-heading {
        margin: 0;
        margin-bottom: 8px;
        font-family: 'Noto Sans';
        font-weight: 500;
        font-size: 24px;
        line-height: 32px;
        text-transform: uppercase;
        color: #000000;
        font-style: normal;
      }

      .kind-text {
        margin: 0;
        font-family: 'Noto Sans';
        font-weight: 400;
        font-size: 16px;
        line-height: 32px;
        color: #000000;
        font-style: normal;
      }

      .kind-imgs {
        margin: 16px 0px;
      }

      .car-list {
        margin: 0px;
        padding: 0;
      }

      .car-item {
        display: flex;
        align-items: flex-start;
      }

      .car-sifat {
        margin: 0;
        font-family: 'Noto Sans';
        font-weight: 600;
        font-size: 16px;
        line-height: 32px;
        color: #000000;
        font-style: normal;
    }

    .car-xxx {
        margin: 0;
        margin-left: 4px;
        font-family: 'Noto Sans';
        font-weight: 400;
        font-size: 16px;
        line-height: 32px;
        color: rgba(0, 0, 0, 0.6);
    }

    .car-xxxx {
        margin: 0;
        margin-left: 4px;
        font-family: 'Noto Sans';
        font-weight: 400;
        line-height: 24px;
        color: #000000;
        font-size: 16px;
    }

    .kind-bottom {
        display: flex;
        align-items: flex-start;
        margin-left: 50px;
        margin-top: 8px;
    }

    .car-price {
        margin: 0;
        font-family: 'Noto Sans';
        font-weight: 600;
        font-size: 16px;
        line-height: 32px;
        color: #000000;
    }

    .car-price-text {
        margin: 0;
        margin-left: 4px;
        font-family: 'Noto Sans';
        font-weight: 400;
        font-size: 16px;
        line-height: 32px;
        color: rgba(0, 0, 0, 0.6);
    }


    /* RIGHT */
    .car-right {
        display: flex;
        flex-direction: column;
        margin-left: 32px;
    }

    .right-top {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .car-right-heading {
        margin: 0;
        font-family: 'Noto Sans';
        font-weight: 500;
        font-size: 24px;
        line-height: 32px;
        text-transform: uppercase;
        color: #000000;
        font-style: normal;
    }

    .car-icon {
        display: flex;
        align-items: center;
    }

    .car-frame1 {
        margin-left: 8px;
    }

    .car-gradus {
        margin: 0;
        text-align: center;
    }

    .car-history {
        margin: 0;
        margin-top: 12px;
        text-align: center;
        font-family: 'Noto Sans';
        font-weight: 400;
        font-size: 12px;
        line-height: 16px;
        color: #000000;
        font-style: normal;
    }

    .car-right-list {
        display: flex;
        align-items: center;
        margin: 0;
        padding: 0;
        list-style: none;
    }

    .car-right-item {
        display: flex;
        align-items: center;
        margin-top: 40px;
        margin-left: 48px;
    }

    .checkbox {
        border-radius: 50%;
    }

    .checkbox-text {
        margin: 0;
        font-family: 'Noto Sans';
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #000000;
    }
    `