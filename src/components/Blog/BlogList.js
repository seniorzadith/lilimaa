import React from "react"
import BlogCard from "./BlogCard"
//import { Banner } from '../../utils'
import styles from "./blog.module.css"
import { useStaticQuery, graphql } from "gatsby"

const getPosts = graphql`  
query{
  posts: allGraphCmsPost(sort: { fields: publishedAt, order: DESC }){
		edges{
			node{
				titulo
        slug
        id
        fecha
        textoSimple
        texto{
					html
        }
        imagenAlfa{
          localFile{
            childImageSharp{
              fluid{
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
      }
    }
  }
}
`


const BlogList = () => {
  const { posts } = useStaticQuery(getPosts)

  return (
    <section >
      <p className={styles.blog}>Díseño y realización de personajes; vestuario; escenografía; diseño gráfico e ilustración para teatro de títeres, lambe lambe y otros programas y proyectos comunicacionales</p>
      <div className={styles.center}>
        {posts.edges.map(({ node }) => {
          return <BlogCard key={node.id} blog={node} />
        })}
      </div>
    </section>
  )
}

export default BlogList
