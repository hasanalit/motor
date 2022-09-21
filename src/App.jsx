
import './App.css';
import styled from 'styled-components'
import {Route, Routes} from 'react-router-dom'
import BoshSahifa from './Pages/BoshSahifa';
import Home from './Pages/Home';
import Chevrolet from "./Components/Chevrolet";
import Lada from "./Components/Lada";
import Lamborgini from "./Components/Lamborgini";
import Ferrari from "./Components/Ferrari";
import List1 from './PageComponent/List1';
import Admin from './Pages/Admin';


function App() {
  return (
    <Wrapper>
      <Home />
      <Routes>
            <Route path="/" element={<BoshSahifa />} />
            <Route path="/Components/Chevrolet" element={<Chevrolet/>} />
            <Route path="/Components/Lada" element={<Lada/>} />
            <Route path="/Components/Lamborgini" element={<Lamborgini/>} />
            <Route path="/Components/Ferrari" element={<Ferrari/>} />
            <Route path="/PageComponent/list1" element={<List1/>} />
            <Route path="/Pages/Admin" element={<Admin/>} />
      </Routes>


    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`

`