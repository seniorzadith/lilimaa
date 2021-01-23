import React from "react"
import Layout from "../components/Layout"
import { PageHeader, Banner } from '../utils'
import BlogList from "../components/Blog/BlogList"
import img from '../images/heroes/gisela_menuBcg.png'

const blog = ({ data }) => {
  return (
    <Layout>      
      <PageHeader img={img}>
        <Banner title="proyectos" subtitle="1980 / 2020" />
        
      </PageHeader>
      <p className="introblog">Díseño y realización de personajes; vestuario; escenografía; diseño gráfico e ilustración para teatro de títeres, lambe lambe y otros programas y proyectos comunicacionales</p>   
      <BlogList/>
    </Layout>
  )
}



export default blog