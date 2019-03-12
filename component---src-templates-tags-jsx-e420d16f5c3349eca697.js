;(window.webpackJsonp = window.webpackJsonp || []).push([
  [12],
  {
    156: function(t, e, n) {
      'use strict'
      n.r(e),
        n.d(e, 'tagsQuery', function() {
          return g
        })
      var a = n(7),
        r = (n(0), n(1)),
        i = n.n(r),
        c = n(170),
        o = n.n(c),
        s = n(168),
        u = n(183),
        l = n(175),
        p = n(171),
        m = n(184),
        f = function(t) {
          var e = t.pageContext,
            n = e.posts,
            r = e.tag,
            i = t.data.site.siteMetadata
          return Object(a.c)(
            s.a,
            null,
            Object(a.c)(
              u.a,
              null,
              Object(a.c)(
                o.a,
                null,
                Object(a.c)('title', null, r, ' · ', i.title)
              ),
              Object(a.c)('h2', null, r),
              Object(a.c)(
                'section',
                null,
                n.length,
                ' ',
                1 !== n.length ? 'posts' : 'post',
                ' in ',
                r,
                '.'
              ),
              Object(a.c)('section', null, Object(a.c)(m.a, { posts: n }))
            )
          )
        }
      ;(f.propTypes = {
        data: i.a.shape({ site: p.a }).isRequired,
        pageContext: l.b.isRequired,
      }),
        (e.default = f)
      var g = '743772494'
    },
    171: function(t, e, n) {
      'use strict'
      var a = n(1),
        r = n.n(a)
      e.a = r.a.shape({
        siteMetadata: r.a.shape({ title: r.a.string, description: r.a.string })
          .isRequired,
      }).isRequired
    },
    174: function(t, e, n) {
      'use strict'
      n(81)
      var a = n(165),
        r = n(7),
        i = (n(0), n(1)),
        c = n.n(i),
        o = n(38),
        s = Object(a.a)('small', { target: 'e1j8ctkk0' })({
          name: '1lejymi',
          styles: 'text-transform:uppercase;',
        }),
        u = Object(a.a)(o.Link, { target: 'e1j8ctkk1' })(function(t) {
          var e = t.theme
          return {
            textDecoration: 'none',
            color: e.textColor,
            transition: 'color 250ms linear',
            ':hover': { textDecoration: 'underline', color: e.accentColor },
          }
        }, ''),
        l = function(t) {
          var e = t.tags
          return Object(r.c)(
            s,
            null,
            'Topics:',
            ' ',
            e.split(', ').map(function(t, e, n) {
              return Object(
                r.c
              )('span', { key: t }, Object(r.c)(u, { to: '/tag/' + t + '/' }, t), e < n.length - 1 ? ', ' : '')
            })
          )
        }
      ;(l.propTypes = { tags: c.a.string }),
        (l.defaultProps = { tags: '' }),
        (e.a = l)
    },
    175: function(t, e, n) {
      'use strict'
      n.d(e, 'a', function() {
        return i
      })
      var a = n(1),
        r = n.n(a),
        i = r.a.oneOfType([
          r.a.bool,
          r.a.shape({
            frontmatter: r.a.shape({
              title: r.a.string.isRequired,
              path: r.a.string.isRequired,
            }),
          }),
        ])
      e.b = r.a.shape({ next: i, prev: i })
    },
    183: function(t, e, n) {
      'use strict'
      n(39)
      var a = n(165)
      e.a = Object(a.a)('main', { target: 'e18mvhky0' })(function(t) {
        var e = t.theme
        return Object.assign({}, e.centerPadding)
      }, '')
    },
    184: function(t, e, n) {
      'use strict'
      n(82), n(62), n(198), n(199), n(81)
      var a = n(165),
        r = n(7),
        i = (n(0), n(176)),
        c = n.n(i),
        o = n(1),
        s = n.n(o),
        u = n(200),
        l = n.n(u),
        p = n(218),
        m = n.n(p),
        f = n(38),
        g = n(174),
        b = Object(a.a)('header', { target: 'eyo4piz0' })(function(t) {
          var e
          return (
            ((e = {
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            })[t.theme.smallMedia] = {
              flexDirection: 'column-reverse',
              alignItems: 'flex-start',
            }),
            e
          )
        }, ''),
        d = Object(a.a)('h4', { target: 'eyo4piz1' })(function(t) {
          return { marginBottom: t.theme.spacing }
        }, ''),
        j = Object(a.a)('article', { target: 'eyo4piz2' })(function(t) {
          return { marginBottom: t.theme.spacing }
        }, ''),
        O = Object(a.a)('h4', { target: 'eyo4piz3' })({
          name: '1uk1gs8',
          styles: 'margin:0;',
        }),
        h = Object(a.a)(f.Link, { target: 'eyo4piz4' })(function(t) {
          var e = t.theme
          return {
            textDecoration: 'none',
            color: e.textColor,
            transition: 'color 250ms linear',
            ':hover': { color: e.accentColor },
          }
        }, ''),
        y = function(t) {
          var e = (function(t) {
              return l()(t, function(t) {
                return m()(t.frontmatter.date.split(' '))
              })
            })(t.posts),
            n = Object.keys(e)
              .sort()
              .reverse()
          return Object(r.c)(
            'section',
            null,
            n.map(function(t) {
              return Object(r.c)(
                'section',
                { key: t },
                Object(r.c)(d, null, t),
                e[t].map(function(t) {
                  return Object(
                    r.c
                  )(j, { key: t.frontmatter.path }, Object(r.c)(b, null, Object(r.c)(O, null, Object(r.c)(h, { to: t.frontmatter.path }, t.frontmatter.title)), Object(r.c)('time', { dateTime: c()(t.frontmatter.date, 'isoDateTime') }, c()(t.frontmatter.date, 'mmmm d, yyyy'))), Object(r.c)('footer', null, Object(r.c)(g.a, { tags: t.frontmatter.tags })))
                })
              )
            })
          )
        }
      ;(y.propTypes = {
        posts: s.a.arrayOf(
          s.a.shape({
            node: s.a.shape({
              frontmatter: s.a.shape({
                path: s.a.string.isRequired,
                title: s.a.string.isRequired,
                date: s.a.string.isRequired,
                tags: s.a.string.isRequired,
              }).isRequired,
            }),
          })
        ).isRequired,
      }),
        (e.a = y)
    },
  },
])
//# sourceMappingURL=component---src-templates-tags-jsx-e420d16f5c3349eca697.js.map
