/* eslint-disable max-len, react/jsx-one-expression-per-line */
import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from '@emotion/styled'
import Layout from '../components/layout'
import siteShape from '../shapes/site'

const ghLink = <a href="https://github.com/rayleighko">my GitHub</a>

const ResumeWrap = styled.div(({}) => ({
  margin: '2% 10%',
}))
const ResumeInnerWrap = styled.div(({}) => ({
  background: '#000000',
  border:				'1px solid rgba(10,10,10,0.2)',
  borderRadius: '2px',
}))

const ResumeHeader = styled.header(({ theme }) => ({
  padding: '0 2%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  '> h5': {
    margin: 0,
    color: '#b197fc',
  },
}))

const H2 = styled.h2(({ theme }) => ({
  borderBottom: '1px solid #bac8ff',
  padding: '0 2%',
  marginBottom: theme.spacing,
  color: ' #9775fa',
}))
const H3 = styled.h3(({ theme }) => ({
  padding: '0 2%',
  marginBottom: theme.spacing,
  color: '#b197fc',
}))
const H4 = styled.h4(({ theme }) => ({
  padding: '0 2%',
  marginBottom: theme.spacing,
  color: '#b197fc',
}))
const P = styled.p(({ theme }) => ({
  padding: '0 2%',
}))
const Ul = styled.ul(({ theme }) => ({
  padding: '0 5%',
  marginBottom: '1%',
  marginLeft: '2px',
}))

const Resume = ({
  data: {
    site: { siteMetadata: site },
  },
}) => (
  <ResumeWrap>
    <Layout>
      <main>
        <Helmet>
          <title>Resume &middot; {site.title}</title>
        </Helmet>
        <H2>Resume</H2>
        <P> Take a look at {ghLink} to see my personal projects.</P>
        <ResumeInnerWrap>
          <H4>Languages</H4>
          <Ul>
            <li>
              Proficient in: JavaScript (Universal Node / Browser, TypeScript,
              React), HTML5, CSS3 (SCSS)
            </li>
            <li>
              Familiar with: C# and .NET Framework, Java, Scala, Ruby, Swift,
              Rust, SQL
            </li>
          </Ul>
          <H4>Software</H4>
          <Ul>
            <li>Database:</li>
            <li>Server: </li>
            <li>Tools: </li>
            <li>Platforms: macOS, Linux / Unix, Microsoft Windows</li>
          </Ul>
          <H4>Experience</H4>
          <ResumeHeader>
            <h5>Company Title &middot; Job Title &middot; City, Contry</h5>
            <h5>Start Date - End Date</h5>
          </ResumeHeader>
          <Ul>
            <li>What doing here?</li>
          </Ul>
          <ResumeHeader>
            <h5>Company Title &middot; Job Title &middot; City, Contry</h5>
            <h5>Start Date - End Date</h5>
          </ResumeHeader>
          <Ul>
            <li>What doing here?</li>
          </Ul>
          <H4>Education</H4>
          <ResumeHeader>
            <h5>
              Education Org Title &middot; City, Contry &middot; Average Grade
            </h5>
            <h5>Start Date - End Date</h5>
          </ResumeHeader>
          <Ul>
            <li>What doing here?</li>
          </Ul>{' '}
          <ResumeHeader>
            <h5>
              Education Org Title &middot; City, Contry &middot; Average Grade
            </h5>
            <h5>Start Date - End Date</h5>
          </ResumeHeader>
          <Ul>
            <li>What doing here?</li>
          </Ul>
        </ResumeInnerWrap>
      </main>
    </Layout>
  </ResumeWrap>
)

Resume.propTypes = {
  data: PropTypes.shape({
    site: siteShape,
  }).isRequired,
}

export default Resume

export const resumePageQuery = graphql`
  query ResumePageSiteMetadata {
    site {
      siteMetadata {
        title
      }
    }
  }
`
