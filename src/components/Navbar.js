import React from "react"
import styled from 'styled-components';

const Styles = styled.div
`
.navbar {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 2.5rem;
    position: absolute;
    z-index: 1;
    width: 100vw;
    Font-Family: 'Permanent Marker', Cursive;
  }
  
  .navbar-sticky {
    background-color: white;
    position: fixed;
    top: 0;
    left: 0;
    animation: moveDown 0.5s ease-in-out;
  }
  
  .navbar--logo {
    width: 2rem;
    height: 2rem;
    margin-right: 0.5rem;
    animation: rotate 0.7s ease-in-out 0.5s;
  }

  .navbar--link {
      display: flex;
      flex-direction: row;
      list-style-type: none;
      width: 100vw;
      justify-content: center;
      font-size: 2rem;
  }

  .navbar--link-item {
      padding-left: 2%;
      padding-right: 1%;
  }
  
  @keyframes moveDown {
    from {
      transform: translateY(-5rem);
    }
    to {
      transform: translateY(0rem);
    }
  }
`
const Navbar = ({ sticky }) => (
    <Styles>
    <nav className={sticky ? "navbar navbar-sticky" : "navbar"}>
      <ul className="navbar--link">
        <li className="navbar--link-item">Home</li>
        <li className="navbar--link-item">Radio</li>
        <li className="navbar--link-item">Video</li>
        <li className="navbar--link-item">About</li>
        <li className="navbar--link-item">Merch</li>
        <li className="navbar--link-item">Contact</li>
        </ul>
    </nav>
    </Styles>
  )


export default Navbar