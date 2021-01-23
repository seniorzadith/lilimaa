import React from "react"
import styles from "./blogcard.module.css"
import Image from "gatsby-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const BlogCard = ({ blog }) => {
  const { slug, titulo, imagenAlfa, fecha, textoSimple, proyectoOPrograma } = blog
  return (
    <article className={styles.blog}>
      <h4 className="titulo">{titulo}</h4>
      <div className={styles.imgContainer}>
        <Image fluid={imagenAlfa.localFile.childImageSharp.fluid} className={styles.img} alt="ejemplo" />
        <AniLink fade className={styles.link} to={`/blog/${slug}`}>
          más información
        </AniLink>
        <h6 className={styles.date}>{fecha}</h6>
      </div>
      <div className={styles.footer}>        
        <p className="italica">{textoSimple}</p>
        <h4>{proyectoOPrograma}</h4>
      </div>
    </article>
  )
}

export default BlogCard
