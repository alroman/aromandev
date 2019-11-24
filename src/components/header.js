import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import img from "../images/rlogo.png"

const Container = styled.header`
  /*margin-bottom: 1.45rem;*/

  .logo {
    margin: 0 auto;
    max-width: 960;
    padding: 1.45rem 1.0875rem 0;
    text-align: center;
  }

  img {
    width: 150px;
    display: inline-block;
  }
`

const Header = ({ siteTitle }) => (
  <Container>
    <div className="logo">
      <h1 style={{ margin: 0 }}>
        <Link to="/">
          <img src={img} alt='Site logo'/>
        </Link>
      </h1>
    </div>
  </Container>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
