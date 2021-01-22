import React from 'react'
import Layout from '../components/Layout'
import { HomeHeader, Banner, BannerButton } from '../utils'
import img from '../images/heroes/lilian_homeBcg.png'
import Intro from '../components/InicioComponents/Intro'
import AniLink from "gatsby-plugin-transition-link/AniLink";

const IndexPage = () => (
  <Layout>    
    <HomeHeader img={img}>
      <Banner title="Lilian Maa'Dhoor" subtitle="PERSONAJES | VESTUARIO | ESCENOGRAFÍA">
      </Banner>
    </HomeHeader>
    <Intro/> 
    <AniLink fade to="/contact" style={{ textDecoration: 'none' }}>
          <BannerButton >CONTACTO</BannerButton>
    </AniLink> 
  </Layout>
)

export default IndexPage
