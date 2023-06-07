import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import logo from "../../../static/images/logo-white.png";

const FooterBackground = styled.div`
  background: var(--color-dark);
  color: var(--color-on-primary);
  padding: 40px 0;
`;

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  color: rgba(255, 255, 255, 0.6);

  h5 {
    color: rgba(255, 255, 255, 1);
  }

  ul {
    list-style-type: none;
    padding: 0;

    li {
      padding: 4px 0;
      &:hover {
        color: rgba(255, 255, 255, 1);
      }
    }
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  @media only screen and (min-width: 992px) {
    flex-direction: row;
  }
`;

const Section = styled.div`
  margin-bottom: 20px;

  h5 {
    margin-bottom: 18px;
  }

  @media only screen and (min-width: 992px) {
    margin-left: 100px;

    &.logo {
      margin-left: 0;
      margin-top: 30px;
    }
  }
`;

const Space = styled.div`
  flex: 1;
`;

const FooterCopyright = styled.div`
  text-align: center;
  color: rgba(255, 255, 255, 0.6);
`;

export default function Footer() {
  return (
    <FooterBackground>
      <FooterContainer className="container">
        <Section className="logo">
          <img src={logo} height="40" />
          <div>est. 2021</div>
        </Section>
        <Space />
        <Section>
          <h5>Information</h5>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/features">Features</Link>
            </li>
            <li>
              <a href="https://github.com/arjyo851/Imapulator">
                Source code
              </a>
            </li>
          </ul>
        </Section>
        <Section>
          <h5>Follow me on social media</h5>
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/arjyo-chakraborty-baa9351bb/">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://github.com/arjyo851">GitHub</a>
            </li>
            <li>
              <a href="https://www.instagram.com/arjyo74/">Instagram</a>
            </li>
          </ul>
        </Section>
      </FooterContainer>
      <div class="container">
        <hr />
        <FooterCopyright>
          Copyright &#169; 2023 arjyo851. All rights reserved
        </FooterCopyright>
      </div>
    </FooterBackground>
  );
}
