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
        proyectoOPrograma
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
      <div className={styles.center}>
        {posts.edges.map(({ node }) => {
          return <BlogCard key={node.id} blog={node} />
        })}
      </div>
    </section>
  )
}

export default BlogList
