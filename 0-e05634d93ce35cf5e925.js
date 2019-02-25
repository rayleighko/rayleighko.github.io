;(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    147: function(e, a, t) {
      'use strict'
      t.r(a),
        t.d(a, 'graphql', function() {
          return h
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
        i = t(146),
        o = t.n(i)
      t.d(a, 'Link', function() {
        return o.a
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
      var s = t(156),
        m = t.n(s)
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
      function h() {
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
    151: function(e, a, t) {
      'use strict'
      var n = t(7),
        l = t.n(n),
        r = t(51),
        c = t.n(r),
        i = t(0),
        o = t.n(i),
        s = t(4),
        m = t.n(s),
        u = (t(158), t(147)),
        d = function(e) {
          return o.a.createElement(
            'header',
            { id: 'header', className: 'alt' },
            o.a.createElement(
              u.Link,
              { to: '/', className: 'logo' },
              o.a.createElement('strong', null, 'RAY LOG')
            ),
            o.a.createElement(
              'nav',
              null,
              o.a.createElement(
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
        h = function(e) {
          return o.a.createElement(
            'nav',
            { id: 'menu' },
            o.a.createElement(
              'div',
              { className: 'inner' },
              o.a.createElement(
                'ul',
                { className: 'links' },
                o.a.createElement(
                  'li',
                  null,
                  o.a.createElement(
                    u.Link,
                    { onClick: e.onToggleMenu, to: '/' },
                    'Home'
                  )
                ),
                o.a.createElement(
                  'li',
                  null,
                  o.a.createElement(
                    u.Link,
                    { onClick: e.onToggleMenu, to: '/techlog' },
                    'TECH LOG'
                  )
                ),
                o.a.createElement(
                  'li',
                  null,
                  o.a.createElement(
                    u.Link,
                    { onClick: e.onToggleMenu, to: '/dailylog' },
                    'DAILY LOG'
                  )
                ),
                o.a.createElement(
                  'li',
                  null,
                  o.a.createElement(
                    u.Link,
                    { onClick: e.onToggleMenu, to: '/portfolio' },
                    'PORTFOLIO'
                  )
                ),
                o.a.createElement(
                  'li',
                  null,
                  o.a.createElement(
                    u.Link,
                    { onClick: e.onToggleMenu, to: '/resume' },
                    'RESUME'
                  )
                )
              ),
              o.a.createElement(
                'ul',
                { className: 'actions vertical' },
                o.a.createElement(
                  'li',
                  null,
                  o.a.createElement(
                    'a',
                    { href: '#', className: 'button special fit' },
                    'Get Started'
                  )
                ),
                o.a.createElement(
                  'li',
                  null,
                  o.a.createElement(
                    'a',
                    { href: '#', className: 'button fit' },
                    'Log In'
                  )
                )
              )
            ),
            o.a.createElement(
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
      h.propTypes = { onToggleMenu: m.a.func }
      var p = h,
        f = function(e) {
          return o.a.createElement(
            'section',
            { id: 'contact' },
            o.a.createElement(
              'div',
              { className: 'inner' },
              o.a.createElement(
                'section',
                null,
                o.a.createElement(
                  'form',
                  { method: 'post', action: '#' },
                  o.a.createElement(
                    'div',
                    { className: 'field half first' },
                    o.a.createElement('label', { htmlFor: 'name' }, 'Name'),
                    o.a.createElement('input', {
                      type: 'text',
                      name: 'name',
                      id: 'name',
                    })
                  ),
                  o.a.createElement(
                    'div',
                    { className: 'field half' },
                    o.a.createElement('label', { htmlFor: 'email' }, 'Email'),
                    o.a.createElement('input', {
                      type: 'text',
                      name: 'email',
                      id: 'email',
                    })
                  ),
                  o.a.createElement(
                    'div',
                    { className: 'field' },
                    o.a.createElement(
                      'label',
                      { htmlFor: 'message' },
                      'Message'
                    ),
                    o.a.createElement('textarea', {
                      name: 'message',
                      id: 'message',
                      rows: '6',
                    })
                  ),
                  o.a.createElement(
                    'ul',
                    { className: 'actions' },
                    o.a.createElement(
                      'li',
                      null,
                      o.a.createElement('input', {
                        type: 'submit',
                        value: 'Send Message',
                        className: 'special',
                      })
                    ),
                    o.a.createElement(
                      'li',
                      null,
                      o.a.createElement('input', {
                        type: 'reset',
                        value: 'Clear',
                      })
                    )
                  )
                )
              ),
              o.a.createElement(
                'section',
                { className: 'split' },
                o.a.createElement(
                  'section',
                  null,
                  o.a.createElement(
                    'div',
                    { className: 'contact-method' },
                    o.a.createElement('span', {
                      className: 'icon alt fa-envelope',
                    }),
                    o.a.createElement('h3', null, 'Email'),
                    o.a.createElement('a', { href: '#' }, 'gmj1197@gmail.com')
                  )
                ),
                o.a.createElement(
                  'section',
                  null,
                  o.a.createElement(
                    'div',
                    { className: 'contact-method' },
                    o.a.createElement('span', {
                      className: 'icon alt fa-phone',
                    }),
                    o.a.createElement('h3', null, 'Phone'),
                    o.a.createElement('span', null, '(+082) 010-2925-6426')
                  )
                ),
                o.a.createElement(
                  'section',
                  null,
                  o.a.createElement(
                    'div',
                    { className: 'contact-method' },
                    o.a.createElement('span', {
                      className: 'icon alt fa-home',
                    }),
                    o.a.createElement('h3', null, 'Address'),
                    o.a.createElement('span', null, 'No office')
                  )
                )
              )
            )
          )
        },
        g = function(e) {
          return o.a.createElement(
            'footer',
            { id: 'footer' },
            o.a.createElement(
              'div',
              { className: 'inner' },
              o.a.createElement(
                'ul',
                { className: 'icons' },
                o.a.createElement(
                  'li',
                  null,
                  o.a.createElement(
                    'a',
                    {
                      href: 'https://www.facebook.com/RaykoDev',
                      className: 'icon alt fa-facebook',
                    },
                    o.a.createElement(
                      'span',
                      { className: 'label' },
                      'Facebook'
                    )
                  )
                ),
                o.a.createElement(
                  'li',
                  null,
                  o.a.createElement(
                    'a',
                    {
                      href: 'https://www.instagram.com/ray____ko',
                      className: 'icon alt fa-instagram',
                    },
                    o.a.createElement(
                      'span',
                      { className: 'label' },
                      'Instagram'
                    )
                  )
                ),
                o.a.createElement(
                  'li',
                  null,
                  o.a.createElement(
                    'a',
                    {
                      href: 'https://github.com/rayleighko',
                      className: 'icon alt fa-github',
                    },
                    o.a.createElement('span', { className: 'label' }, 'GitHub')
                  )
                ),
                o.a.createElement(
                  'li',
                  null,
                  o.a.createElement(
                    'a',
                    { href: '#', className: 'icon alt fa-linkedin' },
                    o.a.createElement(
                      'span',
                      { className: 'label' },
                      'LinkedIn'
                    )
                  )
                )
              ),
              o.a.createElement(
                'ul',
                { className: 'copyright' },
                o.a.createElement('li', null, '© rayleigh ko'),
                o.a.createElement(
                  'li',
                  null,
                  'Design: ',
                  o.a.createElement(
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
              return o.a.createElement(
                'div',
                {
                  className:
                    'body ' +
                    this.state.loading +
                    ' ' +
                    (this.state.isMenuVisible ? 'is-menu-visible' : ''),
                },
                o.a.createElement(
                  'div',
                  { id: 'wrapper' },
                  o.a.createElement(E, { onToggleMenu: this.handleToggleMenu }),
                  e,
                  o.a.createElement(f, null),
                  o.a.createElement(g, null)
                ),
                o.a.createElement(p, { onToggleMenu: this.handleToggleMenu })
              )
            }),
            a
          )
        })(o.a.Component)
      a.a = v
    },
    156: function(e, a, t) {
      var n
      e.exports = ((n = t(159)) && n.default) || n
    },
    158: function(e, a, t) {},
    159: function(e, a, t) {
      'use strict'
      t.r(a)
      t(32)
      var n = t(0),
        l = t.n(n),
        r = t(4),
        c = t.n(r),
        i = t(68),
        o = t(2),
        s = function(e) {
          var a = e.location,
            t = o.default.getResourcesForPathnameSync(a.pathname)
          return l.a.createElement(
            i.a,
            Object.assign({ location: a, pageResources: t }, t.json)
          )
        }
      ;(s.propTypes = {
        location: c.a.shape({ pathname: c.a.string.isRequired }).isRequired,
      }),
        (a.default = s)
    },
  },
])
//# sourceMappingURL=0-e05634d93ce35cf5e925.js.map
