import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import styles from "./single-blog.module.css"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { PageHeader, Banner } from '../utils'
import Image from "gatsby-image"
import img from '../images/heroes/gisela_menuBcg.png'
import { MDXRenderer } from "gatsby-plugin-mdx"

const Blog = ({ data }) => {
  const {
    titulo,
    textoSimple, 
    imagenBeta,
    proyectoOPrograma,
    texto,  
  } = data.post

  return (
    <Layout>
      <PageHeader img={img}>
        <Banner title="" subtitle="" />        
      </PageHeader>     
      <section className={styles.blog}>
        <div className={styles.center}>
          <h3>{proyectoOPrograma}</h3>
          <h1 className={styles.titulo}>{titulo}</h1>                  
          <p>{textoSimple}</p>
          <div>
            <Image  fluid={imagenBeta.localFile.childImageSharp.fluid} alt="Gráfica de apoyo" className={styles.image}/>
          </div>
          <MDXRenderer>
             {texto.markdownNode.childMdx.body}
          </MDXRenderer>                
          <AniLink fade to="/blog" className="btn-primary">
            otros proyectos
          </AniLink>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`

query getPost($slug: String!) {
  post: graphCmsPost(slug: { eq: $slug }) {
    titulo
    fecha
    slug
    id
    textoSimple
    proyectoOPrograma   
    imagenAlfa {
      localFile {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }    
    imagenBeta{
      localFile {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
    texto {
      markdownNode {
        childMdx {
          body
        }
      }
    }
  }  
}
`

export default Blog

