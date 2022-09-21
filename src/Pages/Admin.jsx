import styled from "styled-components";
import Asosiy from '../Assets/Images/asosiy.png';
import Elon from '../Assets/Images/elon.png';
import Savol from '../Assets/Images/savol.png';
import User from '../Assets/Images/user.png';
import Notification from '../Assets/Images/Notification.png';
import Avatar from '../Assets/Images/Avatar.png';
import Plus from '../Assets/Images/light.png';

function Admin(){
    return(
        <Wrapper>
            <div className="admin">
                <div className="admin-left">
                    <ul className="left-list">
                        <li className="left-item">
                            <img src={Asosiy} alt="asasiy-img" />
                            <p className="list-desc">Asosiy</p>
                        </li>
                        <li className="left-item">
                            <img src={Elon} alt="elon-img" />
                            <p className="list-desc">E'lonlar</p>
                        </li>
                        <li className="left-item">
                            <img src={Savol} alt="savol-img" />
                            <p className="list-desc">Savollar</p>
                        </li>
                    </ul>
                </div>
                <div className="admin-right">
                    <header className="header">
                        <button className="header-btn">
                            <img src={User} alt="user-img" />
                            <p className="header-btn-text">Asosiyga qaytish</p>
                        </button>
                        <div className="header-icon-section">
                            <img src={Notification} alt="Notification-img" />
                            <img className="header-icon" src={Avatar} alt="Avatar-img" />
                        </div>
                    </header>
                    <div className="right-section">
                        <div className="right-top">
                            <div className="top-section">
                                <p className="right-color"></p>
                                <h3 className="right-heading">Mashinalar</h3>
                            </div>
                            <div className="right-btn">
                                <button className="right-section-btn">
                                    <img src={Plus} alt="plus-section" />
                                    <h4 className="car-btn">Kategoriya qo’shish</h4>
                                </button>
                                <button className="right-section-btn">
                                    <img src={Plus} alt="" />
                                    <h4 className="car-btn">Mashina qo‘shish</h4>
                                </button>
                            </div>
                        </div>
                        <table>
                            {/* <tr>
                                <th className="thead">#</th>
                                <th className="thead">Markasi</th>
                                <th className="thead">Gearbook</th>
                                <th className="thead">Tanirovkasi</th>
                                <th className="thead">Motor</th>
                                <th className="thead">Year</th>
                                <th className="thead">Color</th>
                                <th className="thead">Distance</th>
                            </tr> */}
                        </table>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
}

export default Admin;

const Wrapper = styled.div`
      padding: 24px 0px 0px 24px;

      .admin {
        display: flex;
        align-items: flex-start;
        background: #e4e4e4;
      }

      .admin-left {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: flex-start;
          padding: 144px 24px;
          width: 340px;
          height: 1479px;
          background: #FCFCFC;
      }

      .left-list {
        margin: 0;
        padding: 0;
        list-style: none;
        display: flex;
        flex-direction: column;
      }

      .left-item {
        display: flex;
        align-items: center;
        padding: 12px;
      }

      .list-desc {
        margin: 0;
        margin-left: 12px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 15px;
        line-height: 24px;
        letter-spacing: -0.01em;
        color: #6F767E;
      }

      .admin-right {
        display: flex;
        flex-direction: column;

      }

      .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 40px;
        width: 1030px;
        background: #FCFCFC;
        box-shadow: inset 1px 0px 0px #F4F4F4;
      }

      .header-btn {
        display: flex;
        align-items: center;
        justify-content: center;

        width: 192px;
        height: 48px;
        background: #2A85FF;
        border-radius: 12px;
        border: 0px;
    }

    .header-btn-text {
        margin: 0;
        margin-left: 8px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 15px;
        line-height: 24px;
        letter-spacing: -0.01em;
        color: #FCFCFC;
    }

    .header-icon-section {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 120px;
    }

    .right-section {
        margin: 40px;
        padding: 12px;
        width: 1020px;
        height: 655px;
        left: 40px;
        top: 136px;
        background: #FCFCFC;
        border-radius: 8px;
    }

    .right-top {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .top-section {
        display: flex;
        align-items: center;
    }

    .right-color {
        width: 16px;
        height: 32px;
        background: #FFD88D;
        border-radius: 4px;
    }

    .right-heading {
        margin: 0;
        margin-left: 16px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 32px;
        letter-spacing: -0.02em;
        color: #1A1D1F;
    }

    .right-btn {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 416px;
    }

    .right-section-btn {
        display: flex;
        align-items: center;
        border: 0px;
        width: 192px;
        height: 48px;
        left: 632px;
        top: 160px;
        background: #2A85FF;
        border-radius: 12px;
    }

    .car-btn {
        margin-left: 8px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 15px;
        line-height: 24px;
        letter-spacing: -0.01em;
        color: #FCFCFC;
    }
/*
    .thead {
        padding: 12px;
        width: 190px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 13px;
        line-height: 16px;
        letter-spacing: -0.01em;
        color: #6F767E;
    }


    .tbody {
        margin-top: 32px;
        margin: 24px;
        width: 190px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 15px;
        line-height: 24px;
        letter-spacing: -0.01em;
        color: #1A1D1F;
    }

    .table {
        margin: 0;
        margin-top: 32px;
    } */
`