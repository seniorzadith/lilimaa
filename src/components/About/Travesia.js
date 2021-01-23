import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Section, Title } from '../../utils'
import styled from 'styled-components'
import { styles } from '../../utils'
import Img from 'gatsby-image'

export default function Travesia () {
  
    return (
        <StaticQuery
        query={graphql`
          {
            img1: file(relativePath: { eq: "travesia/maadhoor_sala404.png" }) {
              childImageSharp {
                fluid(maxWidth: 500) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
            img2: file(relativePath: { eq: "travesia/lilian_tito_09.png" }) {
              childImageSharp {
                fluid(maxWidth: 500) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
            img3: file(relativePath: { eq: "travesia/sala404_06.png" }) {
              childImageSharp {
                fluid(maxWidth: 500) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
        `}
        render={data => {
            const img1 = data.img1.childImageSharp.fluid
            const img2 = data.img2.childImageSharp.fluid
            const img3 = data.img3.childImageSharp.fluid
            return (  
                <Section>
                    <Title message="Llegaron a mi vida y se quedaron para siempre" title="los títeres" />
                    <TravesiaWrapper>
                        <div className="item item-1">
                            <Img fluid={img1} />                            
                        </div>  
                        <p className="parrafo">
                            Desde hace décadas creo y realizo toda clase de personajes, vestuario y escenografía para cualquier técnica de teatro de títeres y teatro. He formado parte de alguna compañías de teatro de títeres con las que hemos presentado obras en festivales en muchos países del mundo. Gracias a UNESCO hice una estadía en Indonesia para aproximarme al teatro de sombras.</p> 
                        <div className="item item-1">
                            <Img fluid={img2} />                            
                        </div>             
                        <p className="parrafo">  
                            Desde hace décadas creo y realizo toda clase de personajes, vestuario y escenografía para cualquier técnica de teatro de títeres y teatro. He formado parte de alguna compañías de teatro de títeres con las que hemos presentado obras en festivales en muchos países del mundo. Gracias a UNESCO hice una estadía en Indonesia para aproximarme al teatro de sombras. Recientemente creo y realizo cajas lambe lambe y pronto ofreceré creación de personajes para stop motion y animación 2D.
                        </p>
                        <div className="item item-1">
                            <Img fluid={img3} />                            
                        </div>  
                    </TravesiaWrapper>
                </Section>
            )
        }}
    />
  )
}

const TravesiaWrapper = styled.div`
  width: 90%;
  margin: auto;
  .text {
    line-height: 1.5em;
    color: ${styles.colors.mainGrey};
    word-spacing: 0.2rem;
  }
  .info {
    position: absolute;
    top: 0;
    left: 0;
    background: ${styles.colors.mainYellow};
    padding: 0.1rem 0.3rem;
    text-transform: capitalize;
  }
  .margen{
    margin: auto !important;
  }
  blockquote{  
    font-size: 1.15rem;
    line-height: 1.35;
    font-style: italic;
    font-family: "isidora-bold", sans-serif;
    margin: auto;   
    /*border-left: 3px solid #ccc;*/ 
}

  @media (min-width: 768px) {
    width: 70%;
  }
  @media (min-width: 992px) {
    width: 60%;
  }
`
