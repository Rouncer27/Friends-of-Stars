import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const LogoWrap = styled.div`
  width: 100%;
  height: 100%;
`

const getData = graphql`
  {
    logo: file(relativePath: { eq: "freinds-of-stars-experience-alberta.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 1500) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

const Logo = () => {
  const data = useStaticQuery(getData)
  const imageData = data.logo.childImageSharp.fluid
  return (
    <LogoWrap>
      <Img fluid={imageData} alt="Friends of Stars Experience Alberta" />
    </LogoWrap>
  )
}

export default Logo
