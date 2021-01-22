import React, { Component } from 'react'
import styled from 'styled-components'
import { styles } from '../../utils'
import { FaInstagram, FaYoutubeSquare, FaFacebook } from 'react-icons/fa'
import logo from '../../images/logos/tito.png'
import AniLink from "gatsby-plugin-transition-link/AniLink";


export default class Footer extends Component {
  state = {
    icons: [
      {
        id: 1,
        icon: <FaFacebook className="icon facebook-icon" />,
        path: `https://www.facebook.com`,
      },
      {
        id: 2,
        icon: <FaYoutubeSquare className="icon youtube-icon" />,
        path: `https://www.facebook.com`,
      },
      {
        id: 3,
        icon: <FaInstagram className="icon instagram-icon" />,
        path: `https://www.instagram.com`,
      },
    ],
  }

   render() {
    return (
      
      <FooterWrapper> 
        <center>
          <div className="margen">                       
            <AniLink fade to="/"> 
              <img src={logo} height="40px"  alt="Inicio" />
            </AniLink>
          </div>
        </center>                
        <div className="title">Lilian Maa'Dhoor</div>
        <p className="lilian">PERSONAJES | VESTUARIO | ESCENOGRAFÍA</p>
        <div className="menu">
          <ul className="nav-link">
            <li><AniLink to="/">INICIO</AniLink></li>
            <li><AniLink to="/about">TRAVESÍA</AniLink></li>            
            <li><AniLink to="/proyecto">PROYECTOS</AniLink></li>
            <li><AniLink to="/contact">CONTACTO</AniLink></li>
          </ul>
        </div>
        <div className="icons">
          {this.state.icons.map(item => (
            <a
              href={item.path}
              key={item.id}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          ))}
        </div>
        <p className="copyright">&copy; 2021 Diseñado por Peli con Gatsby JS</p>
      </FooterWrapper>      
        
    )
  }
}

const FooterWrapper = styled.footer` 
  margin-bottom: 2rem;
  background: ${styles.colors.mainBlack}; 
  .icons {
    width: 10rem;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
  }
  .icon {
    color: ${styles.colors.mainWhite};
    font-size: 1.3rem;
   
    }
  }
  .copyright {
    color: ${styles.colors.mainWhite};
    font-size: 0.6rem;    
    text-align: center;
    margin: 1rem 0;
    padding-bottom: 1.5rem;
  }
  .title {
    text-align: center;  
    color: ${styles.colors.mainYellow};    
    padding: 0.3rem 1rem;
    margin: 0 auto;
    font-size: 1.4rem;
    font-style:italic;    
  }
  .margen{    
    margin-top: 1.5rem !important;
    padding-top:1.5rem !important;    
  }
  .centrado{
    margin: auto;
  }
  ul{
    width:30%;
  }
  .menu{
    display:flex;
    justify-content: center;
  }
  a{
    color: ${styles.colors.mainWhite};
  }
  li {
    color: ${styles.colors.mainWhite};
    list-style-type: none;
    padding: 0.5rem;
    text-decoration: none;
    font-size: 0.7rem;    
  }
  .nav-link {     
    display:flex;
    justify-content: center;
    padding: .7rem ;      
    text-transform: capitalize;
    cursor: pointer; 
  }
  .lilian{
    text-align: center;
    font-size: 0.8rem;
    color: ${styles.colors.mainprimary};
    margin: 0 auto;
  }  

 
`
