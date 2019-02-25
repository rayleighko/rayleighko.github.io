/* eslint-disable max-len, react/jsx-one-expression-per-line */
import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from '@emotion/styled'
import Layout from '../components/layout'
import siteShape from '../shapes/site'

const ghLink = <a href="https://github.com/rayleighko">my GitHub</a>

const ResumeHeader = styled.header(({ theme }) => ({
  ...theme.centerPadding,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  '> h5': {
    margin: 0,
  },
}))

const H2 = styled.h2(({ theme }) => ({
  ...theme.centerPadding,
  marginBottom: theme.spacing,
}))
const H3 = styled.h3(({ theme }) => ({
  ...theme.centerPadding,
  marginBottom: theme.spacing,
}))
const H4 = styled.h4(({ theme }) => ({
  ...theme.centerPadding,
  marginBottom: theme.spacing,
}))
const P = styled.p(({ theme }) => ({
  ...theme.centerPadding,
}))
const Ul = styled.ul(({ theme }) => ({
  ...theme.centerPadding,
  marginBottom: theme.spacing,
  marginLeft: `${theme.spacingPx * 4}px`,
}))

const Resume = ({
  data: {
    site: { siteMetadata: site },
  },
}) => (
  <Layout>
    <main>
      <Helmet>
        <title>Resume &middot; {site.title}</title>
      </Helmet>
      <H2>Resume</H2>
      <P> Take a look at {ghLink} to see my personal projects.</P>
      <H4>Languages</H4>
      <Ul>
        <li>
          Proficient in: JavaScript (Universal Node / Browser, TypeScript,
          React), HTML5, CSS3 (SCSS)
        </li>
        <li>
          Familiar with: C# and .NET Framework, Java, Scala, Ruby, Swift, Rust,
          SQL
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
    </main>
  </Layout>
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
