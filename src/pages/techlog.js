import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Layout from '../components/layout'
import CenterWrap from '../components/CenterWrap'
import LogPosts from '../components/LogPosts'
import postShape from '../shapes/post'
import styled from '@emotion/styled'

const H2 = styled.h2({
  color: '#228be6',
  fontSize: '2.7rem',
  margin: 0,
  padding: '0 1rem',
  height: '4.5rem',
  borderBottom: '0.2rem solid #dbe4ff'
})

const TechLog = ({
  data: {
    allMarkdownRemark: { edges: posts },
  },
}) => (
  <Layout>
    <CenterWrap className="blog">
      <H2>Blog</H2>
      <LogPosts posts={posts.map(post => post.node)} />
    </CenterWrap>
  </Layout>
)

TechLog.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(postShape),
    }),
  }).isRequired,
}

export default TechLog

export const query = graphql`
  query TechLogQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
            tags
          }
        }
      }
    }
  }
`
