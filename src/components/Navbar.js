import React, { useState } from "react";
import styled from "styled-components";

const Navbar = () => {
  return (
    <Nav>
      <div className="nav-center">
        <h3>ReduxGear</h3>
        <div className="nav-container">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M16 6v2h2l2 12H0L2 8h2V6a6 6 0 1 1 12 0zm-2 0a4 4 0 1 0-8 0v2h8V6zM4 10v2h2v-2H4zm10 0v2h2v-2h-2z" />
          </svg>
          <div className="amount-container">
            <p className="total-amount">0</p>
          </div>
        </div>
      </div>
    </Nav>
  );
};

const Nav = styled.nav`
  background: blue;
  padding: 1.25rem 2rem;
  height: 6vh;

  .nav-center {
    max-width: 50rem;
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .nav-container {
    display: block;
    position: relative;
    margin-top: -2.8%;
  }
  .nav-container svg {
    width: 2rem;
    fill: #fff;
  }

  .amount-container {
    position: absolute;
    top: -0.75rem;
    left: 1.2rem;
    width: 1.75rem;
    height: 1.75rem;
    border-radius: 50%;
    background: #85c6f4;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .nav-center h3 {
    font-size: 2rem;
    color: white;
    letter-spacing: 1mm;
    margin-top: -0.5%;
  }
`;

export default Navbar;
