import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "./Logo"
import styled from 'styled-components'

const StyledLogoWrap = styled.div`
  width: 100%;
  max-width: 100rem;
  margin: 3rem auto;
  padding: 2rem;
`

const Header = ({ siteTitle }) => (
  <header>
    <StyledLogoWrap>
      <h1>
        <Link to="/">
          <Logo />
        </Link>
      </h1>
    </StyledLogoWrap>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
