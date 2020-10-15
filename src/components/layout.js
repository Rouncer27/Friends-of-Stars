import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { ThemeProvider } from "styled-components"
import styled from 'styled-components'

import theme from "../styles/theme/Theme"
import GlobalStyle from "../styles/global/Golbal"
import Header from "./header"
import {B1DarkGrey, fontSizer } from '../styles/helpers'

const FooterStyled = styled.footer`
  width: 100%;
  max-width: 100rem;
  margin: 1rem auto;
  text-align: center;

  p {
    ${B1DarkGrey};
    ${fontSizer(1.4, 1.6, 76.8, 150, 1.2)};
    margin: 0;
  }
`


const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
        <main>{children}</main>
        <FooterStyled>
          <p>© {new Date().getFullYear()} Friends of Stars Experience Alberta</p>
          <p>Designed, and developed by Switchback Creative.</p>
        </FooterStyled>
      </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
