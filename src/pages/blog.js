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
      <BlogList/>
    </Layout>
  )
}



export default blog