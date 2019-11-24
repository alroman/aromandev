import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import kana from "../images/kana.png"
import play from "../images/playlist_logo.png"
import gmto from "../images/gmto.png"

import Twitter from "../components/twitter"
import LinkedIn from "../components/linkedin"
import Github from "../components/github"
import Insta from "../components/insta"
import Keybase from "../components/keybase"

const Container = styled.div`
  text-align: center;
  img {
    height: 150px;
    margin-bottom: 0;
  }

  color: #9fa5ad;

  h1 {
    font-weight: 100;
    margin-bottom: 8px;
  }

  .devtag {
    /*background: #880C23;
    color: #FCAB06;
    padding: 4px 10px;
    display: inline-block;
    border-radius: 20px;
    border-bottom: 4px solid #D11D32;
    border-right: 1px solid #D11D32;*/

    font-weight: 200;
  }

  .intro {
    font-weight: 100;
    color: #fff;
    /*font-size: 14px;*/
  }

  .projects {
    display: flex;
    flex-direction: column;
    justify-content: center;

    > div {
      padding: 20px;
    }

    .gmto-logo {
      height: 75px;
    }
    margin-bottom: 40px;
  }

  .social-links {
    display: flex;
    flex-direction: column;
    align-items: center;

    > a {
      font-weight: 100;
      margin-bottom: 20px;
      height: 30px;
    }
    > a {
      display: inline;
      justify-content: center;
    }
  }

  .social-icon {
    width: 25px;
    display: inline-block;
    margin-right: 10px;

    path {
      fill: #fff;
    }
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Container>
      <img src={kana} alt="ローマン" />
      <h1>Alfonso Roman</h1>
      <p className="devtag">software developer</p>
      <p className="intro">
        i make cool apps. currently creating the next generation UI for the next
        generation of extremely large telescopes at GMTO
      </p>
      <div className="projects">
        <div>
          <a href="https://www.gmto.org/" alt="GMTO link">
            <img className="gmto-logo" src={gmto} alt="GMTO" />
          </a>
        </div>
      </div>
      <div className="social-links">
        <a href="https://github.com/alroman">
          <Github />
          github.com/alroman
        </a>
        <a href="https://www.linkedin.com/in/aroman-dev/">
          <LinkedIn /> linkedin.com/in/aroman-dev
        </a>
        <a href="https://instagram.com/alromanb">
          <Insta /> instagram.com/alromanb
        </a>
        <a href="https://keybase.io/alroman">
          <Keybase /> keybase.io/alroman
        </a>
      </div>
    </Container>
  </Layout>
)

export default IndexPage
