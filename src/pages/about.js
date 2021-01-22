import React from 'react'
import Layout from '../components/Layout'
import { PageHeader, Banner } from '../utils'
import img from '../images/heroes/danilos_aboutBcg.png'
import Travesia from '../components/About/Travesia'

export default function about() {
  return (
    <Layout>      
      <PageHeader img={img}>
        <Banner title="travesía" subtitle="1980 / 2020" />
      </PageHeader>     
      <Travesia/>      
    </Layout>
  )
}
