/* eslint-disable max-len, react/jsx-one-expression-per-line */
import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from '@emotion/styled'
import Layout from '../components/layout'
import siteShape from '../shapes/site'

const ghLink = <a href="https://github.com/rayleighko">my GitHub</a>
const ausgLink = <a href="https://www.facebook.com/ausgkr/">AUSG</a>
const dgLink = <a href="https://djangogirls.org/seoul/">Djangogirls Seoul</a>

const ResumeWrap = styled.div(({}) => ({
  margin: '3% 6%',
}))
const ResumeInnerWrap = styled.div(({}) => ({
  background: '#fdfdfd',
  borderRadius: '2px',
}))

const ResumeHeader = styled.header(({ theme }) => ({
  padding: '0 2%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  '> h5': {
    margin: 0,
    color: '#6741d9',
  },
}))

const H2 = styled.h2(({ theme }) => ({
  borderBottom: '1px solid #bac8ff',
  padding: '0 2%',
  marginBottom: theme.spacing,
  color: ' #5f3dc4',
}))
const H3 = styled.h3(({ theme }) => ({
  padding: '0 2%',
  marginBottom: theme.spacing,
  color: '#6741d9',
}))
const H4 = styled.h4(({ theme }) => ({
  padding: '0 2%',
  marginBottom: theme.spacing,
  color: '#5f3dc4',
}))
const P = styled.p(({ theme }) => ({
  padding: '0 2%',
  fontWeight: 'bold',
}))
const Ul = styled.ul(({ theme }) => ({
  padding: '0 5%',
  marginBottom: '1%',
  marginLeft: '2px',
  fontWeight: 'bold',
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
              Proficient in: Chrome Browser, HTML5, CSS3(SCSS), JavaScript(React, Redux)
            </li>
            <li>
              Familiar with: TypeScript, Universal Node, AWS(only for 'Serverless'), Python, MySQL
            </li>
            <li>
              Under study: JavaScript(Next, GraphQL), AWS(Except 'Serverless'), Docker, NginX, K8S
            </li>
          </Ul>
          <H3>Software Ability</H3>
          <Ul>
            <li>Client: React(Redux)</li>
            <li>Server: Node(Express)</li>
            <li>Database: MySQL</li>
            <li>Tools: AWS, optional Docker, optional NginX</li>
            <li>Platforms: macOS, Linux, optional Windows</li>
          </Ul>
          <H3>Experience</H3>
          <ResumeHeader>
            <h4>Weplanet &middot; Web Engineer - Intern &middot; 서울, 강남</h4>
            <h5>2019. 03. 04 ~ 2019. 06. 21</h5>
          </ResumeHeader>
          <Ul>
            <li>중소 개발사에서 웹 프론트엔드(React, Redux, Next), 웹 백엔드(Node, Express, Swagger UI), 웹 어드민(React-Admin, Node,
              Express)에 대한
              업무를 보조함. 별도로 프로젝트 배포 시 AWS, Docker, NginX를 사용하는 인프라 구축에 대해 경험함.
            </li>
          </Ul>
          <H3>Education</H3>
          <ResumeHeader>
            <h4>
              Woowahan Brothers &middot; 서울, 송파구 &middot; Front-end Education
            </h4>
            <h5>2019. 05. ~ 2019. 06.</h5>
          </ResumeHeader>
          <Ul>
            <li>React와 TypeScript를 이용한 웹 프론트엔드 개발자 교육 수료</li>
          </Ul>
          <ResumeHeader>
            <h4>
              Sahmyook University &middot; 서울, 노원구 &middot; graduate(Bachelor's degree)
            </h4>
            <h5>2013. 03. ~ 2020. 02.</h5>
          </ResumeHeader>
          <Ul>
            <li>컴퓨터 공학, 소프트웨어 전공 학사 학위 수료</li>
          </Ul>
          <H3>Major Activities</H3>
          <ResumeHeader>
            <h4>
              AUSG &middot; 서울
            </h4>
            <h5>2018. 08. ~ Current</h5>
          </ResumeHeader>
          <Ul>
            <li>AWS University Student Group의 운영진으로 활동하며 AWS에 대한 기술 전파, 관련 스터디 및 프로젝트를 진행함.
              주요 활동은 {ausgLink}에서 확인할 수 있음.
            </li>
          </Ul>
          <ResumeHeader>
            <h4>
              Djangogirls Seoul &middot; 서울
            </h4>
            <h5>2018. 04. ~ Current</h5>
          </ResumeHeader>
          <Ul>
            <li>{dgLink}은 상대적으로 IT에 대한 경험을 겪기 어려운 여성들을 위해 다양한 행사를 진행합니다. 더불어 여성의
              IT분야 진출을 장려하고, 더 많은 여성들이 프로그래밍에 흥미를 느낄 수 있도록 다양한 행사를 진행합니다.
            </li>
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
