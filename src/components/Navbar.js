import React, { Component } from "react"
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

  a {
    text-decoration: none;
    color: #0a0e1e;
  }
  
  @keyframes moveDown {
    from {
      transform: translateY(-5rem);
    }
    to {
      transform: translateY(0rem);
    }
  }

  @media (max-width: 768px) {
    li {
      margin-left: 7px;
      margin-right: 7px;
    }
  }
`

const iconSize = '2.5rem';
const iconColor = '#0a0e1e'
const homeIcon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" height={iconSize}><path fill={iconColor} d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"/></svg>
const radioIcon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={iconSize}><path fill={iconColor} d="M256 32C114.52 32 0 146.496 0 288v48a32 32 0 0 0 17.689 28.622l14.383 7.191C34.083 431.903 83.421 480 144 480h24c13.255 0 24-10.745 24-24V280c0-13.255-10.745-24-24-24h-24c-31.342 0-59.671 12.879-80 33.627V288c0-105.869 86.131-192 192-192s192 86.131 192 192v1.627C427.671 268.879 399.342 256 368 256h-24c-13.255 0-24 10.745-24 24v176c0 13.255 10.745 24 24 24h24c60.579 0 109.917-48.098 111.928-108.187l14.382-7.191A32 32 0 0 0 512 336v-48c0-141.479-114.496-256-256-256z"/></svg>
const tvIcon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" height={iconSize}><path fill={iconColor} d="M592 0H48A48 48 0 0 0 0 48v320a48 48 0 0 0 48 48h240v32H112a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16H352v-32h240a48 48 0 0 0 48-48V48a48 48 0 0 0-48-48zm-16 352H64V64h512z"/></svg>
const aboutIcon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" height={iconSize}><path fill={iconColor} d="M336 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM192 128c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64zm112 236.8c0 10.6-10 19.2-22.4 19.2H102.4C90 384 80 375.4 80 364.8v-19.2c0-31.8 30.1-57.6 67.2-57.6h5c12.3 5.1 25.7 8 39.8 8s27.6-2.9 39.8-8h5c37.1 0 67.2 25.8 67.2 57.6v19.2z"/></svg>
const merchIcon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" height={iconSize}><path fill="#196495" d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"/></svg>
const contactIcon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={iconSize}><path fill={iconColor} d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"/></svg>


class Navbar extends Component {
  constructor(props) {
      super(props);
      this.state = { 
        sticky: props.sticky,
        home: 'Home',
        radio: 'Radio',
        tv: 'TV',
        about: 'About',
        merch: 'Merch',
        contact: 'Contact'};
      this.updateWindowWidth = this.updateWindowWidth.bind(this);
    }
    
    componentDidMount() {
      this.updateWindowWidth();
      window.addEventListener('resize', this.updateWindowWidth);
    }

    componentDidUpdate(prevProps) {
      if (prevProps.sticky !== this.props.sticky) {
        this.setState({sticky: this.props.sticky})
    }
    }

    componentWillUnmount() {
      window.removeEventListener('resize', this.updateWindowWidth);
    }
    
    updateWindowWidth() {
      // this.setState({ width: window.innerWidth});
      if (window.innerWidth < 768) {
          this.setState({
            home: homeIcon,
            radio: radioIcon,
            tv: tvIcon,
            about: aboutIcon,
            merch: merchIcon,
            contact: contactIcon
          })
      }

      else {
          this.setState({
            home: 'Home',
            radio: 'Radio',
            tv: 'TV',
            about: 'Socials',
            merch: 'Merch',
            contact: 'Contact'
          })
      }

    }
  
  render () {
  return (
    <Styles>
    <nav className={this.state.sticky ? "navbar navbar-sticky" : "navbar"}>
    {/* <nav className="navbar"> */}
      <ul className="navbar--link">
        <li className="navbar--link-item"><a href='#home'>{this.state.home}</a></li>
        <li className="navbar--link-item"><a href='#radio'>{this.state.radio}</a></li>
        <li className="navbar--link-item"><a href='#tv'>{this.state.tv}</a></li>
        <li className="navbar--link-item"><a href='#socials'>{this.state.about}</a></li>
        <li className="navbar--link-item"><a href='#contact'>{this.state.contact}</a></li>
        <li className="navbar--link-item"><a href='https://streamlabs.com/flipofficial/merch' style={{color: '#196495'}}>{this.state.merch}</a></li>
        </ul>
    </nav>
    </Styles>
  )};
}


export default Navbar;