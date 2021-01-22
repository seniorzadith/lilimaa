import React from "react"
import styles from "./blogcard.module.css"
import Image from "gatsby-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const BlogCard = ({ blog }) => {
  const { slug, titulo, imagenAlfa, fecha } = blog
  return (
    <article className={styles.blog}>
      <div className={styles.imgContainer}>
        <Image fluid={imagenAlfa.fluid} className={styles.img} alt="ejemplo" />
        <AniLink fade className={styles.link} to={`/blog/${slug}`}>
          read more
        </AniLink>
        <h6 className={styles.date}>{fecha}</h6>
      </div>
      <div className={styles.footer}>
        <h4>{titulo}</h4>
      </div>
    </article>
  )
}

export default BlogCard
