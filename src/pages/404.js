import React from 'react'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Layout from '../components/Layout'
//import SEO from '../components/seo'

const NotFoundPage = () => (
  <Layout>    
    <h1>NO ENCONTRADO</h1>
    <p>Señalaste una ruta que no tiene un resultado.</p>
    <AniLink fade to="/" className="btn-white">Regresa a inicio</AniLink>
  </Layout>
)

export default NotFoundPage
