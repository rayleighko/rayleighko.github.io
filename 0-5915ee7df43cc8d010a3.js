;(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    146: function(e, a, t) {
      'use strict'
      t.r(a),
        t.d(a, 'graphql', function() {
          return f
        }),
        t.d(a, 'StaticQueryContext', function() {
          return d
        }),
        t.d(a, 'StaticQuery', function() {
          return E
        })
      var n = t(0),
        l = t.n(n),
        r = t(4),
        c = t.n(r),
        i = t(145),
        s = t.n(i)
      t.d(a, 'Link', function() {
        return s.a
      }),
        t.d(a, 'withPrefix', function() {
          return i.withPrefix
        }),
        t.d(a, 'navigate', function() {
          return i.navigate
        }),
        t.d(a, 'push', function() {
          return i.push
        }),
        t.d(a, 'replace', function() {
          return i.replace
        }),
        t.d(a, 'navigateTo', function() {
          return i.navigateTo
        })
      var o = t(155),
        m = t.n(o)
      t.d(a, 'PageRenderer', function() {
        return m.a
      })
      var u = t(48)
      t.d(a, 'parsePath', function() {
        return u.a
      })
      var d = l.a.createContext({}),
        E = function(e) {
          return l.a.createElement(d.Consumer, null, function(a) {
            return e.data || (a[e.query] && a[e.query].data)
              ? (e.render || e.children)(e.data ? e.data.data : a[e.query].data)
              : l.a.createElement('div', null, 'Loading (StaticQuery)')
          })
        }
      function f() {
        throw new Error(
          'It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.'
        )
      }
      E.propTypes = {
        data: c.a.object,
        query: c.a.string.isRequired,
        render: c.a.func,
        children: c.a.func,
      }
    },
    147: function(e, a, t) {
      'use strict'
      var n = t(7),
        l = t.n(n),
        r = t(51),
        c = t.n(r),
        i = t(0),
        s = t.n(i),
        o = t(4),
        m = t.n(o),
        u = (t(157), t(146)),
        d = function(e) {
          return s.a.createElement(
            'header',
            { id: 'header', className: 'alt' },
            s.a.createElement(
              u.Link,
              { to: '/', className: 'logo' },
              s.a.createElement('strong', null, 'Forty'),
              ' ',
              s.a.createElement('span', null, 'by HTML5 UP')
            ),
            s.a.createElement(
              'nav',
              null,
              s.a.createElement(
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
      d.propTypes = { onToggleMenu: m.a.func }
      var E = d,
        f = function(e) {
          return s.a.createElement(
            'nav',
            { id: 'menu' },
            s.a.createElement(
              'div',
              { className: 'inner' },
              s.a.createElement(
                'ul',
                { className: 'links' },
                s.a.createElement(
                  'li',
                  null,
                  s.a.createElement(
                    u.Link,
                    { onClick: e.onToggleMenu, to: '/' },
                    'Home'
                  )
                ),
                s.a.createElement(
                  'li',
                  null,
                  s.a.createElement(
                    u.Link,
                    { onClick: e.onToggleMenu, to: '/landing' },
                    'Landing'
                  )
                ),
                s.a.createElement(
                  'li',
                  null,
                  s.a.createElement(
                    u.Link,
                    { onClick: e.onToggleMenu, to: '/generic' },
                    'Generic'
                  )
                ),
                s.a.createElement(
                  'li',
                  null,
                  s.a.createElement(
                    u.Link,
                    { onClick: e.onToggleMenu, to: '/elements' },
                    'Elements'
                  )
                )
              ),
              s.a.createElement(
                'ul',
                { className: 'actions vertical' },
                s.a.createElement(
                  'li',
                  null,
                  s.a.createElement(
                    'a',
                    { href: '#', className: 'button special fit' },
                    'Get Started'
                  )
                ),
                s.a.createElement(
                  'li',
                  null,
                  s.a.createElement(
                    'a',
                    { href: '#', className: 'button fit' },
                    'Log In'
                  )
                )
              )
            ),
            s.a.createElement(
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
      f.propTypes = { onToggleMenu: m.a.func }
      var p = f,
        h = function(e) {
          return s.a.createElement(
            'section',
            { id: 'contact' },
            s.a.createElement(
              'div',
              { className: 'inner' },
              s.a.createElement(
                'section',
                null,
                s.a.createElement(
                  'form',
                  { method: 'post', action: '#' },
                  s.a.createElement(
                    'div',
                    { className: 'field half first' },
                    s.a.createElement('label', { htmlFor: 'name' }, 'Name'),
                    s.a.createElement('input', {
                      type: 'text',
                      name: 'name',
                      id: 'name',
                    })
                  ),
                  s.a.createElement(
                    'div',
                    { className: 'field half' },
                    s.a.createElement('label', { htmlFor: 'email' }, 'Email'),
                    s.a.createElement('input', {
                      type: 'text',
                      name: 'email',
                      id: 'email',
                    })
                  ),
                  s.a.createElement(
                    'div',
                    { className: 'field' },
                    s.a.createElement(
                      'label',
                      { htmlFor: 'message' },
                      'Message'
                    ),
                    s.a.createElement('textarea', {
                      name: 'message',
                      id: 'message',
                      rows: '6',
                    })
                  ),
                  s.a.createElement(
                    'ul',
                    { className: 'actions' },
                    s.a.createElement(
                      'li',
                      null,
                      s.a.createElement('input', {
                        type: 'submit',
                        value: 'Send Message',
                        className: 'special',
                      })
                    ),
                    s.a.createElement(
                      'li',
                      null,
                      s.a.createElement('input', {
                        type: 'reset',
                        value: 'Clear',
                      })
                    )
                  )
                )
              ),
              s.a.createElement(
                'section',
                { className: 'split' },
                s.a.createElement(
                  'section',
                  null,
                  s.a.createElement(
                    'div',
                    { className: 'contact-method' },
                    s.a.createElement('span', {
                      className: 'icon alt fa-envelope',
                    }),
                    s.a.createElement('h3', null, 'Email'),
                    s.a.createElement(
                      'a',
                      { href: '#' },
                      'information@untitled.tld'
                    )
                  )
                ),
                s.a.createElement(
                  'section',
                  null,
                  s.a.createElement(
                    'div',
                    { className: 'contact-method' },
                    s.a.createElement('span', {
                      className: 'icon alt fa-phone',
                    }),
                    s.a.createElement('h3', null, 'Phone'),
                    s.a.createElement('span', null, '(000) 000-0000 x12387')
                  )
                ),
                s.a.createElement(
                  'section',
                  null,
                  s.a.createElement(
                    'div',
                    { className: 'contact-method' },
                    s.a.createElement('span', {
                      className: 'icon alt fa-home',
                    }),
                    s.a.createElement('h3', null, 'Address'),
                    s.a.createElement(
                      'span',
                      null,
                      '1234 Somewhere Road #5432',
                      s.a.createElement('br', null),
                      'Nashville, TN 00000',
                      s.a.createElement('br', null),
                      'United States of America'
                    )
                  )
                )
              )
            )
          )
        },
        g = function(e) {
          return s.a.createElement(
            'footer',
            { id: 'footer' },
            s.a.createElement(
              'div',
              { className: 'inner' },
              s.a.createElement(
                'ul',
                { className: 'icons' },
                s.a.createElement(
                  'li',
                  null,
                  s.a.createElement(
                    'a',
                    { href: '#', className: 'icon alt fa-twitter' },
                    s.a.createElement('span', { className: 'label' }, 'Twitter')
                  )
                ),
                s.a.createElement(
                  'li',
                  null,
                  s.a.createElement(
                    'a',
                    { href: '#', className: 'icon alt fa-facebook' },
                    s.a.createElement(
                      'span',
                      { className: 'label' },
                      'Facebook'
                    )
                  )
                ),
                s.a.createElement(
                  'li',
                  null,
                  s.a.createElement(
                    'a',
                    { href: '#', className: 'icon alt fa-instagram' },
                    s.a.createElement(
                      'span',
                      { className: 'label' },
                      'Instagram'
                    )
                  )
                ),
                s.a.createElement(
                  'li',
                  null,
                  s.a.createElement(
                    'a',
                    { href: '#', className: 'icon alt fa-github' },
                    s.a.createElement('span', { className: 'label' }, 'GitHub')
                  )
                ),
                s.a.createElement(
                  'li',
                  null,
                  s.a.createElement(
                    'a',
                    { href: '#', className: 'icon alt fa-linkedin' },
                    s.a.createElement(
                      'span',
                      { className: 'label' },
                      'LinkedIn'
                    )
                  )
                )
              ),
              s.a.createElement(
                'ul',
                { className: 'copyright' },
                s.a.createElement('li', null, '© Untitled'),
                s.a.createElement(
                  'li',
                  null,
                  'Design: ',
                  s.a.createElement(
                    'a',
                    { href: 'https://html5up.net' },
                    'HTML5 UP'
                  )
                )
              )
            )
          )
        },
        v = (function(e) {
          function a(a) {
            var t
            return (
              ((t = e.call(this, a) || this).state = {
                isMenuVisible: !1,
                loading: 'is-loading',
              }),
              (t.handleToggleMenu = t.handleToggleMenu.bind(c()(c()(t)))),
              t
            )
          }
          l()(a, e)
          var t = a.prototype
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
              return s.a.createElement(
                'div',
                {
                  className:
                    'body ' +
                    this.state.loading +
                    ' ' +
                    (this.state.isMenuVisible ? 'is-menu-visible' : ''),
                },
                s.a.createElement(
                  'div',
                  { id: 'wrapper' },
                  s.a.createElement(E, { onToggleMenu: this.handleToggleMenu }),
                  e,
                  s.a.createElement(h, null),
                  s.a.createElement(g, null)
                ),
                s.a.createElement(p, { onToggleMenu: this.handleToggleMenu })
              )
            }),
            a
          )
        })(s.a.Component)
      a.a = v
    },
    155: function(e, a, t) {
      var n
      e.exports = ((n = t(158)) && n.default) || n
    },
    157: function(e, a, t) {},
    158: function(e, a, t) {
      'use strict'
      t.r(a)
      t(32)
      var n = t(0),
        l = t.n(n),
        r = t(4),
        c = t.n(r),
        i = t(68),
        s = t(2),
        o = function(e) {
          var a = e.location,
            t = s.default.getResourcesForPathnameSync(a.pathname)
          return l.a.createElement(
            i.a,
            Object.assign({ location: a, pageResources: t }, t.json)
          )
        }
      ;(o.propTypes = {
        location: c.a.shape({ pathname: c.a.string.isRequired }).isRequired,
      }),
        (a.default = o)
    },
  },
])
//# sourceMappingURL=0-5915ee7df43cc8d010a3.js.map
