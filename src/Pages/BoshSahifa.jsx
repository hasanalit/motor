import styled from "styled-components";
import { NavLink } from 'react-router-dom';
import  Chevrolet  from '../Assets/Images/Chevrolet.png'
import  Lada  from '../Assets/Images/Lada.png'
import  Lamborgini  from '../Assets/Images/Lamborgina.png'
import  Ferrari  from '../Assets/Images/Ferrari.png'




function BoshSahifa() {
    return (
      <Wrapper>
        <div className="container">

        <ul className="list">
            <li className="item">
            <NavLink className='navlink' to="/Components/Chevrolet">
                <img src={Chevrolet} alt="Chevrolet-img" />
                <h4 className="car_name">CHEVROLET</h4>
            </NavLink></li>
            <li className="item">
            <NavLink className='navlink' to="/Components/Lada">
            <img src={Lada} alt="Lada-img" />
            <h4 className="car_name">LADA</h4>
            </NavLink></li>
            <li className="item">
            <NavLink className='navlink' to="/Components/Lamborgini">
            <img src={Lamborgini} alt="Lamborgini-img" />
            <h4 className="car_name">LAMBORGHINI</h4>
            </NavLink></li>
            <li className="item">
            <NavLink className='navlink' to="/Components/Ferrari">
            <img src={Ferrari} alt="Ferrari-img" />
            <h4 className="car_name">FERRARI</h4>
            </NavLink></li>
        </ul>
        </div>


      </Wrapper>


    );
  }

  export default BoshSahifa;

  const Wrapper = styled.div`
  .navlink {
    margin-left: 50px;
    text-decoration: none;
    color: #000;
  }

  .list {
    display: flex;
    align-items: center;
    margin-left: -32px;
    margin-top: 48px;
    padding: 0;
  }

  .item {
    display: flex;
    flex-direction: column;
    margin-left: 32px;
    text-align: center;
  }

  car_name {
    font-family: 'Noto Sans';
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;
    text-transform: uppercase;
    color: #000000;
    font-style: normal;
  }
  `