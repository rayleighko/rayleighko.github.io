;(window.webpackJsonp = window.webpackJsonp || []).push([
  [4],
  {
    139: function(e, t, n) {
      'use strict'
      n.r(t)
      var a = n(0),
        r = n.n(a),
        o = n(151)
      t.default = function() {
        return r.a.createElement(
          o.a,
          null,
          r.a.createElement(
            'div',
            { id: 'main', className: 'alt' },
            r.a.createElement(
              'section',
              { id: 'one' },
              r.a.createElement(
                'div',
                { className: 'inner' },
                r.a.createElement('h1', null, 'NOT FOUND'),
                r.a.createElement(
                  'p',
                  null,
                  "You just hit a route that doesn't exist... the sadness."
                )
              )
            )
          )
        )
      }
    },
    146: function(e, t, n) {
      'use strict'
      var a = n(8)
      ;(t.__esModule = !0),
        (t.withPrefix = f),
        (t.navigateTo = t.replace = t.push = t.navigate = t.default = void 0)
      var r = a(n(154)),
        o = a(n(155)),
        i = a(n(7)),
        s = a(n(51)),
        u = a(n(52)),
        l = a(n(4)),
        c = a(n(0)),
        p = n(22),
        d = n(147)
      function f(e) {
        return (function(e) {
          return e.replace(/\/+/g, '/')
        })('/' + e)
      }
      var h = {
          activeClassName: l.default.string,
          activeStyle: l.default.object,
        },
        v = (function(e) {
          function t(t) {
            var n
            ;(n = e.call(this) || this),
              (0, u.default)(
                (0, s.default)((0, s.default)(n)),
                'defaultGetProps',
                function(e) {
                  return e.isCurrent
                    ? {
                        className: [n.props.className, n.props.activeClassName]
                          .filter(Boolean)
                          .join(' '),
                        style: (0, o.default)(
                          {},
                          n.props.style,
                          n.props.activeStyle
                        ),
                      }
                    : null
                }
              )
            var a = !1
            return (
              'undefined' != typeof window &&
                window.IntersectionObserver &&
                (a = !0),
              (n.state = { IOSupported: a }),
              (n.handleRef = n.handleRef.bind(
                (0, s.default)((0, s.default)(n))
              )),
              n
            )
          }
          ;(0, i.default)(t, e)
          var n = t.prototype
          return (
            (n.componentDidUpdate = function(e, t) {
              this.props.to === e.to ||
                this.state.IOSupported ||
                ___loader.enqueue((0, d.parsePath)(this.props.to).pathname)
            }),
            (n.componentDidMount = function() {
              this.state.IOSupported ||
                ___loader.enqueue((0, d.parsePath)(this.props.to).pathname)
            }),
            (n.handleRef = function(e) {
              var t,
                n,
                a,
                r = this
              this.props.innerRef && this.props.innerRef(e),
                this.state.IOSupported &&
                  e &&
                  ((t = e),
                  (n = function() {
                    ___loader.enqueue((0, d.parsePath)(r.props.to).pathname)
                  }),
                  (a = new window.IntersectionObserver(function(e) {
                    e.forEach(function(e) {
                      t === e.target &&
                        (e.isIntersecting || e.intersectionRatio > 0) &&
                        (a.unobserve(t), a.disconnect(), n())
                    })
                  })).observe(t))
            }),
            (n.render = function() {
              var e = this,
                t = this.props,
                n = t.to,
                a = t.getProps,
                i = void 0 === a ? this.defaultGetProps : a,
                s = t.onClick,
                u = t.onMouseEnter,
                l = (t.activeClassName,
                t.activeStyle,
                t.ref,
                t.innerRef,
                t.state),
                h = t.replace,
                v = (0, r.default)(t, [
                  'to',
                  'getProps',
                  'onClick',
                  'onMouseEnter',
                  'activeClassName',
                  'activeStyle',
                  'ref',
                  'innerRef',
                  'state',
                  'replace',
                ]),
                m = f(n)
              return c.default.createElement(
                p.Link,
                (0, o.default)(
                  {
                    to: m,
                    state: l,
                    getProps: i,
                    innerRef: this.handleRef,
                    onMouseEnter: function(e) {
                      u && u(e),
                        ___loader.hovering((0, d.parsePath)(n).pathname)
                    },
                    onClick: function(t) {
                      return (
                        s && s(t),
                        0 !== t.button ||
                          e.props.target ||
                          t.defaultPrevented ||
                          t.metaKey ||
                          t.altKey ||
                          t.ctrlKey ||
                          t.shiftKey ||
                          (t.preventDefault(), w(n, { state: l, replace: h })),
                        !0
                      )
                    },
                  },
                  v
                )
              )
            }),
            t
          )
        })(c.default.Component)
      v.propTypes = (0, o.default)({}, h, {
        innerRef: l.default.func,
        onClick: l.default.func,
        to: l.default.string.isRequired,
        replace: l.default.bool,
      })
      var m = v
      t.default = m
      var w = function(e, t) {
        window.___navigate(f(e), t)
      }
      t.navigate = w
      var _ = function(e) {
        console.warn(
          'The "push" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'
        ),
          window.___push(f(e))
      }
      t.push = _
      t.replace = function(e) {
        console.warn(
          'The "replace" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'
        ),
          window.___replace(f(e))
      }
      t.navigateTo = function(e) {
        return (
          console.warn(
            'The "navigateTo" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'
          ),
          _(e)
        )
      }
    },
    154: function(e, t) {
      e.exports = function(e, t) {
        if (null == e) return {}
        var n,
          a,
          r = {},
          o = Object.keys(e)
        for (a = 0; a < o.length; a++)
          (n = o[a]), t.indexOf(n) >= 0 || (r[n] = e[n])
        return r
      }
    },
    155: function(e, t) {
      function n() {
        return (
          (e.exports = n =
            Object.assign ||
            function(e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t]
                for (var a in n)
                  Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
              }
              return e
            }),
          n.apply(this, arguments)
        )
      }
      e.exports = n
    },
  },
])
//# sourceMappingURL=component---src-pages-404-js-d8724a378dc66bed6a07.js.map
