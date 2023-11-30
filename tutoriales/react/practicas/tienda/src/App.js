/*
  APLICACION TIENDA REACT
    - Uso react, react router y styled components

*/
import React from 'react';
import styled from 'styled-components';

const App = () => {
  return (
    <div>
      <h1>Hola mundo!!</h1>
    </div>    
  );
}
export default App;


 
const Menu = styled.nav`
    width: 100%;
    text-align: center;
    background: #092c4c;
    grid-column: span 2;
    border-radius: 3px;
 
    a {
        color: #fff;
        display: inline-block;
        padding: 15px 20px;
    }
 
    a:hover {
        background: #1d85e8;
        text-decoration: none;
    }
`;
