/* eslint-disable react/no-danger */
import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import dateformat from 'dateformat'
import ReactDisqusComments from 'react-disqus-comments'
import styled from '@emotion/styled'
import site from '../shapes/site'
import Layout from '../components/layout'
import TagsList from '../components/TagsList'
import LogNav from '../components/LogNav'
import CodeStyle from '../emotion/code'
import pageContextShape from '../shapes/page-context'
import postShape from '../shapes/post'

const ArticleWrap = styled.div(({}) => ({
  width: '100%',
  height: '100%',
  padding: '0 1%',
  background: '#ffffff',
  borderBottom: '0.4rem solid #bac8ff',
  borderRadius: '2px',
  margin: '1% 0',
  wordBreak: 'break-all',
  wordWrap: 'break-word',
}))

const Main = styled.main(({ theme }) => ({
  color: '#000000',
  padding: '0 10%',
  fontFamily: 'Source Sans Pro, Helvetica, sans-serif',
}))

const Header = styled.header(({ theme }) => ({
  borderBottom: '0.2rem solid #bac8ff',
  marginBottom: '1%',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  [theme.smallMedia]: {
    flexDirection: 'column',
    flexWrap: 'nowrap',
  },
}))

const HeaderTitle = styled.h1(({ theme }) => ({
  width: '85%',
  [theme.smallMedia]: {
    width: '100%',
    textAlign: 'center',
    marginBottom: 0,
  },
}))

const HeaderDate = styled.time(({ theme }) => ({
  width: '15%',
  textAlign: 'right',
  [theme.smallMedia]: {
    width: '100%',
    textAlign: 'center',
  },
  fontSize: '1.2rem',
  color: '#4f8e96',
  fontWeight: 'bold',
  fontStyle: 'oblique',
}))

const Footer = styled.footer(({ theme }) => ({}))

const PostWrap = styled.section(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  '> *': {
    width: '100%',
    wordWrap: 'break-word',
    ':not(.gatsby-highlight)': {
      ...theme.centerPadding,
    },
  },
  '> .gatsby-highlight > pre': {
    ...theme.centerPadding,
    paddingTop: theme.spacing,
    paddingBottom: theme.spacing,
  },
  '>ul,>ol': {
    width: `calc(100% - ${theme.spacingPx * 4}px)`,
  },
  '>h1': { color: ' #845ef7' },
  '>h2': { color: ' #9775fa' },
  '>h3 ': { color: '#b197fc' },
}))

const LogNavWrap = styled.div(({ theme }) => ({
  ...theme.centerPadding,
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'row',
  marginTop: theme.spacing,
}))

const BlogPost = ({ data, pageContext }) => {
  const { markdownRemark: post } = data
  const { title, siteUrl } = data.site.siteMetadata
  const { next, prev } = pageContext

  const isProduction = process.env.NODE_ENV === 'production'
  const fullUrl = `${siteUrl}${post.frontmatter.path}`

  return (
    <Layout>
      <CodeStyle/>
      <Main>
        <Helmet>
          <title>
            {post.frontmatter.title} &middot; {title}
          </title>
        </Helmet>
        <article>
          <Header>
            <HeaderTitle>{post.frontmatter.title}</HeaderTitle>
            <HeaderDate
              dateTime={dateformat(post.frontmatter.date, 'isoDateTime')}
            >
              {dateformat(post.frontmatter.date, 'mmmm d, yyyy')}
            </HeaderDate>
            <TagsList tags={post.frontmatter.tags}/>
          </Header>
          <ArticleWrap>
            <PostWrap dangerouslySetInnerHTML={{ __html: post.html }}/>
          </ArticleWrap>
          <Footer>
            {isProduction && (
              <ReactDisqusComments
                shortname="rayleighko"
                identifier={post.frontmatter.path}
                title={post.frontmatter.title}
                url={fullUrl}
              />
            )}
          </Footer>
        </article>
        <LogNavWrap>
          <LogNav prev post={prev}/>
          <LogNav next post={next}/>
        </LogNavWrap>
      </Main>
    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    site,
    markdownRemark: postShape,
  }).isRequired,
  pageContext: pageContextShape.isRequired,
}

export default BlogPost

export const query = graphql`
  query BlogPostByPath($refPath: String!) {
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
    markdownRemark(frontmatter: { path: { eq: $refPath } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        tags
        title
      }
    }
  }
`
