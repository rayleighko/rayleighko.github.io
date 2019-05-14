import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'

class HomeIndex extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet
          title="RAY LOG"
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        />
        <Banner/>
        <div id="main">
          <section id="one" className="tiles">
            <article style={{ backgroundImage: `url(${pic01})` }}>
              <header className="major">
                <h3>TECH LOG</h3>
                <p>기술 블로그</p>
              </header>
              <Link to="/techlog" className="link primary"/>
            </article>
            <article style={{ backgroundImage: `url(${pic02})` }}>
              <header className="major">
                <h3>DAILY LOG</h3>
                <p>일상 공유 - INSTAGRAM</p>
              </header>
              <a
                href="https://www.instagram.com/ray____ko/"
                className="link primary"
              />
            </article>
            <article style={{ backgroundImage: `url(${pic03})` }}>
              <header className="major">
                <h3>PORTFOLIO</h3>
                <p>포트폴리오 - 지난 프로젝트(개설 중)</p>
              </header>
              <Link to="/portfolio" className="link primary"/>
            </article>
            <article style={{ backgroundImage: `url(${pic04})` }}>
              <header className="major">
                <h3>RESUME</h3>
                <p>이력서</p>
              </header>
              <Link to="/resume" className="link primary"/>
            </article>
          </section>
          <section id="two">
            <div className="inner">
              <header className="major">
                <h2>Ray Ko</h2>
              </header>
              <p>
                "당연히 있어야 할 자리에, 누구나 이해하기 쉽도록. 저는 이런
                당연하고 쉬운 코드를 만들고 싶습니다"
                <br/>
                <br/>이 구절은 제가 개발을 함에 있어 신념과도 같이 생각하는
                문장입니다. 생성이 있으면 삭제가 있어야 하는 것처럼 당연하면서,
                이해하기 쉽게 코드를 작성한다는 것은 기초적이지만 결코 쉽지 않은
                것이라고 생각하기 때문입니다.
                <br/>
                <br/>
                그렇기 때문에 저는 기본에 충실한 사람이 되고 싶습니다. 기본에
                충실하기 위해 저는 아래와 같은 하나의 저장소를 만들어 이를
                실천하고 있습니다.
              </p>
              <ul className="actions">
                <li>
                  <a
                    href="https://github.com/rayleighko/doMemorize2019"
                    className="button next"
                  >
                    GET MY 2019 STUDY REPOSITORY
                  </a>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}

export default HomeIndex
