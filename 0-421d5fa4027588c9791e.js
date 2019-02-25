;(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    168: function(e, c, t) {
      'use strict'
      var l = t(9),
        n = t.n(l),
        a = t(40),
        i = t.n(a),
        s = t(7),
        o = t(0),
        b = t.n(o),
        u = t(1),
        O = t.n(u),
        j = (t(226), t(38)),
        m = function(e) {
          return Object(s.c)(
            'header',
            { id: 'header', className: 'alt' },
            Object(s.c)(
              j.Link,
              { to: '/', className: 'logo' },
              Object(s.c)('strong', null, 'RAY LOG')
            ),
            Object(s.c)(
              'nav',
              null,
              Object(s.c)(
                'a',
                {
                  className: 'menu-link',
                  onClick: e.onToggleMenu,
                  href: 'javascript:;',
                },
                'Menu'
              )
            )
          )
        }
      m.propTypes = { onToggleMenu: O.a.func }
      var r = m,
        g = function(e) {
          return Object(s.c)(
            'nav',
            { id: 'menu' },
            Object(s.c)(
              'div',
              { className: 'inner' },
              Object(s.c)(
                'ul',
                { className: 'links' },
                Object(s.c)(
                  'li',
                  null,
                  Object(s.c)(
                    j.Link,
                    { onClick: e.onToggleMenu, to: '/' },
                    'Home'
                  )
                ),
                Object(s.c)(
                  'li',
                  null,
                  Object(s.c)(
                    j.Link,
                    { onClick: e.onToggleMenu, to: '/techlog' },
                    'TECH LOG'
                  )
                ),
                Object(s.c)(
                  'li',
                  null,
                  Object(s.c)(
                    j.Link,
                    { onClick: e.onToggleMenu, to: '/dailylog' },
                    'DAILY LOG'
                  )
                ),
                Object(s.c)(
                  'li',
                  null,
                  Object(s.c)(
                    j.Link,
                    { onClick: e.onToggleMenu, to: '/portfolio' },
                    'PORTFOLIO'
                  )
                ),
                Object(s.c)(
                  'li',
                  null,
                  Object(s.c)(
                    j.Link,
                    { onClick: e.onToggleMenu, to: '/resume' },
                    'RESUME'
                  )
                )
              ),
              Object(s.c)(
                'ul',
                { className: 'actions vertical' },
                Object(s.c)(
                  'li',
                  null,
                  Object(s.c)(
                    'a',
                    {
                      href: 'https://github.com/rayleighko',
                      className: 'button special fit',
                    },
                    "AUTHOR'S GITHUB"
                  )
                ),
                Object(s.c)(
                  'li',
                  null,
                  Object(s.c)(
                    j.Link,
                    {
                      className: 'button fit',
                      onClick: e.onToggleMenu,
                      to: '/#contact',
                    },
                    'CONTACT ME'
                  )
                )
              )
            ),
            Object(s.c)(
              'a',
              {
                className: 'close',
                onClick: e.onToggleMenu,
                href: 'javascript:;',
              },
              'Close'
            )
          )
        }
      g.propTypes = { onToggleMenu: O.a.func }
      var h = g,
        d = function(e) {
          return Object(s.c)(
            'section',
            { id: 'contact' },
            Object(s.c)(
              'div',
              { className: 'inner' },
              Object(s.c)(
                'section',
                null,
                Object(s.c)(
                  'form',
                  { method: 'post', action: '#' },
                  Object(s.c)(
                    'div',
                    { className: 'field half first' },
                    Object(s.c)('label', { htmlFor: 'name' }, 'Name'),
                    Object(s.c)('input', {
                      type: 'text',
                      name: 'name',
                      id: 'name',
                    })
                  ),
                  Object(s.c)(
                    'div',
                    { className: 'field half' },
                    Object(s.c)('label', { htmlFor: 'email' }, 'Email'),
                    Object(s.c)('input', {
                      type: 'text',
                      name: 'email',
                      id: 'email',
                    })
                  ),
                  Object(s.c)(
                    'div',
                    { className: 'field' },
                    Object(s.c)('label', { htmlFor: 'message' }, 'Message'),
                    Object(s.c)('textarea', {
                      name: 'message',
                      id: 'message',
                      rows: '6',
                    })
                  ),
                  Object(s.c)(
                    'ul',
                    { className: 'actions' },
                    Object(s.c)(
                      'li',
                      null,
                      Object(s.c)('input', {
                        type: 'submit',
                        value: 'Send Message',
                        className: 'special',
                      })
                    ),
                    Object(s.c)(
                      'li',
                      null,
                      Object(s.c)('input', { type: 'reset', value: 'Clear' })
                    )
                  )
                )
              ),
              Object(s.c)(
                'section',
                { className: 'split' },
                Object(s.c)(
                  'section',
                  null,
                  Object(s.c)(
                    'div',
                    { className: 'contact-method' },
                    Object(s.c)('span', { className: 'icon alt fa-envelope' }),
                    Object(s.c)('h3', null, 'Email'),
                    Object(s.c)('a', { href: '#' }, 'gmj1197@gmail.com')
                  )
                ),
                Object(s.c)(
                  'section',
                  null,
                  Object(s.c)(
                    'div',
                    { className: 'contact-method' },
                    Object(s.c)('span', { className: 'icon alt fa-phone' }),
                    Object(s.c)('h3', null, 'Phone'),
                    Object(s.c)('span', null, '(+082) 010-2925-6426')
                  )
                ),
                Object(s.c)(
                  'section',
                  null,
                  Object(s.c)(
                    'div',
                    { className: 'contact-method' },
                    Object(s.c)('span', { className: 'icon alt fa-home' }),
                    Object(s.c)('h3', null, 'Address'),
                    Object(s.c)('span', null, 'No office')
                  )
                )
              )
            )
          )
        },
        p = function(e) {
          return Object(s.c)(
            'footer',
            { id: 'footer' },
            Object(s.c)(
              'div',
              { className: 'inner' },
              Object(s.c)(
                'ul',
                { className: 'icons' },
                Object(s.c)(
                  'li',
                  null,
                  Object(s.c)(
                    'a',
                    {
                      href: 'https://www.facebook.com/RaykoDev',
                      className: 'icon alt fa-facebook',
                    },
                    Object(s.c)('span', { className: 'label' }, 'Facebook')
                  )
                ),
                Object(s.c)(
                  'li',
                  null,
                  Object(s.c)(
                    'a',
                    {
                      href: 'https://www.instagram.com/ray____ko',
                      className: 'icon alt fa-instagram',
                    },
                    Object(s.c)('span', { className: 'label' }, 'Instagram')
                  )
                ),
                Object(s.c)(
                  'li',
                  null,
                  Object(s.c)(
                    'a',
                    {
                      href: 'https://github.com/rayleighko',
                      className: 'icon alt fa-github',
                    },
                    Object(s.c)('span', { className: 'label' }, 'GitHub')
                  )
                ),
                Object(s.c)(
                  'li',
                  null,
                  Object(s.c)(
                    'a',
                    { href: '#', className: 'icon alt fa-linkedin' },
                    Object(s.c)('span', { className: 'label' }, 'LinkedIn')
                  )
                )
              ),
              Object(s.c)(
                'ul',
                { className: 'copyright' },
                Object(s.c)('li', null, '© rayleigh ko'),
                Object(s.c)(
                  'li',
                  null,
                  'Design: ',
                  Object(s.c)('a', { href: 'https://html5up.net' }, 'HTML5 UP')
                )
              )
            )
          )
        },
        f = (function(e) {
          function c(c) {
            var t
            return (
              ((t = e.call(this, c) || this).state = {
                isMenuVisible: !1,
                loading: 'is-loading',
              }),
              (t.handleToggleMenu = t.handleToggleMenu.bind(i()(i()(t)))),
              t
            )
          }
          n()(c, e)
          var t = c.prototype
          return (
            (t.componentDidMount = function() {
              var e = this
              this.timeoutId = setTimeout(function() {
                e.setState({ loading: '' })
              }, 100)
            }),
            (t.componentWillUnmount = function() {
              this.timeoutId && clearTimeout(this.timeoutId)
            }),
            (t.handleToggleMenu = function() {
              this.setState({ isMenuVisible: !this.state.isMenuVisible })
            }),
            (t.render = function() {
              var e = this.props.children
              return Object(s.c)(
                'div',
                {
                  className:
                    'body ' +
                    this.state.loading +
                    ' ' +
                    (this.state.isMenuVisible ? 'is-menu-visible' : ''),
                },
                Object(s.c)(
                  'div',
                  { id: 'wrapper' },
                  Object(s.c)(r, { onToggleMenu: this.handleToggleMenu }),
                  e,
                  Object(s.c)(d, null),
                  Object(s.c)(p, null)
                ),
                Object(s.c)(h, { onToggleMenu: this.handleToggleMenu })
              )
            }),
            c
          )
        })(b.a.Component)
      c.a = f
    },
    226: function(e, c, t) {},
  },
])
//# sourceMappingURL=0-421d5fa4027588c9791e.js.map
