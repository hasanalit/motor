import styled from "styled-components";
import Car from '../Assets/Images/car.png'
import { NavLink }from 'react-router-dom';


function Chevrolet() {
    return (
      <Wrapper>
        <NavLink className='list-car' to='/PageComponent/list1'>
        <ul className="list">
          <li className="item">
            <img className="list-img" src={Car} alt="car-img" />
            <h4 className="list-heading">Chevrolet Tahoe</h4>
            <p className="list-text">Narxi: 329 900 000 </p>
          </li>
        </ul>
        </NavLink>
      </Wrapper>
    );
  }

  export default Chevrolet;

  const Wrapper = styled.div`
  padding: 43px 94px;

.list {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin: 0;
  margin-left: -32px;
  margin-bottom: -32px;
  padding: 0;
  list-style: none;
}

.item {
  margin-left: 32px;
}

/* .list-img {
  margin-left: 32px;
} */

.list-heading {
  margin: 0;
  width: 280px;
  font-family: 'Noto Sans';
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;
  text-transform: uppercase;
  color: #000000;
  font-style: normal;
}

.list-text {
  margin: 0;
  margin-top: 8px;
  font-family: 'Noto Sans';
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  color: rgba(0, 0, 0, 0.8);
  font-style: normal;
}

.list-car {
  text-decoration: none;
}
  `