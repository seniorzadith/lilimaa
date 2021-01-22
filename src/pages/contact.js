import React from 'react'
import Layout from '../components/Layout'
import { PageHeader, Banner } from '../utils'
import Contact from '../components/Contact/Contact'
import img from '../images/heroes/dinosaurio_contactBcg.png'

export default function about() {
  return (
    <Layout>     
      <PageHeader img={img}>
        <Banner title="contacta a Lilian" subtitle="hablemos un rato" />
      </PageHeader>
      <Contact/>
    </Layout>
  )
}
