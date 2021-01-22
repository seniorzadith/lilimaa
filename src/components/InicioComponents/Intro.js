import React, { Component } from 'react'
import { Section, Title, SectionButton} from '../../utils'
import styled from 'styled-components'
import { styles } from '../../utils'
import AniLink from "gatsby-plugin-transition-link/AniLink";

export default class Intro extends Component {
  render() {
    return (
      <Section>
        <Title message="Agenda 2021" title="asesoría + diseño + creación" />
        <IntroWrapper>
          <p className="text parrafo">
            Soy titiritera venezolana y desde hace décadas he creado y realizado toda clase de personajes articulados, vestuario y escenografía para obras desarrolladas mediante diversas técnicas de teatro de títeres para proyectos propios, compañías o agrupaciones de las que he formado parte o para proyectos de artistas muy cercanos. Viajé mucho presentando mis creaciones en muchos países y luego en Venezuela pude participar en proyectos de comunicación más amplios en los que además desarrollé diseño gráfico e ilustración. Desde hace un tiempo estoy residenciada en Santiago de Chile y, aparte de participar en el movimiento lambe lambe y empujar algunos proyectos personales que tengo en mente, siento que estoy lista para aportar experiencia y calidad en diseño y realización de personajes articulados, vestuario y escenografía a proyectos de otros artistas, tanto del mundo de los títeres cuanto de la animación, especialmente para la técnica <em>stop motion</em>. En la sección Proyectos hay una muestra muy resumida de lo que he hecho hasta ahora
            y algunos indicios de lo que estoy haciendo ahora mismo.
          </p>
          <p>Por tanto, si tienes un proyecto de teatro de títeres en cualquier técnica para el que necesitas discutir ideas, soluciones y un presupuesto, contáctame ya.</p>          
          <p className="text">
            Actualmente estoy muy interesada y experimentando posibilidades expresivas de la animación de personajes articulados para <em>stop motion</em>. Si estás pensando un proyecto o eres parte de un equipo que necesita apoyo en la creación de personajes articulados, vestuario o escenografía, escríbeme. Me encantaría participar.
          </p> 
          <AniLink fade to="/contact/" style={{ textDecoration: 'none' }}>
            <SectionButton className="margen">contáctame</SectionButton>
          </AniLink>         
        </IntroWrapper>
      </Section>
    )
  }
}

const IntroWrapper = styled.div`
  width: 90%;
  margin: auto;
  .text {
    line-height: 1.5em;
    color: ${styles.colors.mainGrey};
    word-spacing: 0.2rem;
  }
  .margen{
    margin: auto !important;
  }
  .blockquote{  
    font-size: 1.15rem;
    line-height: 1.35;
    font-style: italic;
    font-family: "isidora-bold", sans-serif;
    margin: 0.5rem auto;   
    /*border-left: 3px solid #ccc;*/ 
}

  @media (min-width: 768px) {
    width: 70%;
  }
  @media (min-width: 992px) {
    width: 60%;
  }
`
