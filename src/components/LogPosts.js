import React from 'react'
import dateformat from 'dateformat'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import groupBy from 'lodash/groupBy'
import last from 'lodash/last'
import { Link as GatsbyLink } from 'gatsby'
import TagsList from './TagsList'

const groupPosts = posts =>
  groupBy(posts, p => last(p.frontmatter.date.split(' ')))

const Header = styled.header(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  [theme.smallMedia]: {
    flexDirection: 'column-reverse',
    alignItems: 'flex-start',
  },
}))

const H3 = styled.h4(({ theme }) => ({
  marginBottom: theme.spacing,
}))

const Article = styled.article(({ theme }) => ({
  marginBottom: '1%',
  borderBottom: '0.2rem solid #bac8ff',
  borderLeft: '0.4rem solid #bac8ff',
  paddingLeft: '0.5rem',
  paddingBottom: '0.3rem',
}))

const H4 = styled.h4({
  margin: 0,
})

const TIME = styled.time({
  fontSize: '1.1rem',
  color: '#4f8e96',
  fontWeight: 'bold',
  borderBottom: '0.1rem solid #bac8ff',
  padding: '0 0.4rem',
  fontStyle: 'oblique',
})

const Link = styled(GatsbyLink)(({ theme }) => ({
  textDecoration: 'none',
  color: theme.textColor,
  transition: 'color 250ms linear',
  ':hover': {
    textDecoration: 'underline',
    color: theme.accentColor,
  },
}))

const LogList = ({ posts }) => {
  const grouped = groupPosts(posts)
  const years = Object.keys(grouped)
    .sort()
    .reverse()
  return (
    <section>
      {years.map(year => (
        <section key={year}>
          <H3>{year}</H3>
          {grouped[year].map(post => (
            <Article key={post.frontmatter.path}>
              <Header>
                <H4>
                  <Link to={post.frontmatter.path}>
                    {post.frontmatter.title}
                  </Link>
                </H4>
                <TIME
                  dateTime={dateformat(post.frontmatter.date, 'isoDateTime')}
                >
                  {dateformat(post.frontmatter.date, 'mmmm d, yyyy')}
                </TIME>
              </Header>
              <footer>
                <TagsList tags={post.frontmatter.tags}/>
              </footer>
            </Article>
          ))}
        </section>
      ))}
    </section>
  )
}

LogList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      node: PropTypes.shape({
        frontmatter: PropTypes.shape({
          path: PropTypes.string.isRequired,
          title: PropTypes.string.isRequired,
          date: PropTypes.string.isRequired,
          tags: PropTypes.string.isRequired,
        }).isRequired,
      }),
    }),
  ).isRequired,
}

export default LogList
