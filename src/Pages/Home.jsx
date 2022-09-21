import styled from "styled-components";
import UsersImg from '../Assets/Images/user.png'
import RightIcon from '../Assets/Images/right.png'
import { NavLink } from 'react-router-dom'
// import Admin from './Pages/Admin';


function Home() {
    return (
      <Wrapper>
        <NavLink className='navlink' to="/Pages/Admin">
        <button className="home-btn">
            <img className="user-img" src={UsersImg} alt="User-img" />
            <p className="user-name-btn">Admin o‘tish</p>
        </button>
        </NavLink>
        <div className="home-section">
        <p className="home__text">Bosh sahifa</p>
        <img src={RightIcon} alt="Right-icon" />
        <p className="home__text">modellari</p>
        </div>
        <h1 className="hero__heading">Modellari</h1>
      </Wrapper>
    );
  }

  export default Home;

  const Wrapper = styled.div`
    padding: 40px 90px 0px;


    .home-btn {
        margin-left: 1148px;
        justify-content: center;
        display: flex;
        align-items: center;
        padding: 12px 20px;
        width: 192px;
        height: 48px;
        background: #2A85FF;
        border: 0px;
        border-radius: 12px;
        cursor: pointer;
    }

    .user-name-btn {
        font-family: 'Inter';
        font-weight: 700;
        font-size: 15px;
        line-height: 24px;
        letter-spacing: -0.01em;
        color: #FCFCFC;
    }

    .home-section {
        display: flex;
        align-items: center;
    }

    .home__text {
        margin: 0;
        font-family: 'Noto Sans';
        font-weight: 400;
        font-size: 12px;
        line-height: 24px;
        color: #000000;
        font-style: normal;
    }

    .hero__heading {
        margin: 0;
        margin-top: 24px;
        font-family: 'Noto Sans';
        font-weight: 600;
        font-size: 46px;
        line-height: 63px;
        color: #000000;
        font-style: normal;
    }

    .navlink {
      text-decoration: none;
    }
  `