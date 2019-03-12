;(window.webpackJsonp = window.webpackJsonp || []).push([
  [11],
  {
    162: function(e, t, n) {
      'use strict'
      n.r(t)
      n(39)
      var r = n(165),
        a = n(7),
        o = (n(0), n(1)),
        i = n.n(o),
        s = n(170),
        l = n.n(s),
        c = n(176),
        u = n.n(c),
        d = n(319),
        p = n.n(d),
        m = n(171),
        f = n(168),
        g = n(174),
        y = n(38),
        h = n(175),
        b = Object(r.a)('div', { target: 'eciaq930' })(function(e) {
          return {
            textAlign: e.prev ? 'left' : 'right',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            textTransform: 'uppercase',
            border: '1px',
          }
        }, ''),
        v = Object(r.a)('span', { target: 'eciaq931' })(function(e) {
          return { color: e.theme.textColor, opacity: 0.35, fontWeight: 'bold' }
        }, ''),
        k = Object(r.a)(y.Link, { target: 'eciaq932' })(function(e) {
          var t = e.theme
          return {
            color: t.textColor,
            textDecoration: 'none',
            fontWeight: 'bold',
            transition: 'color 250ms linear',
            ':hover': { color: t.accentColor },
          }
        }, ''),
        w = function(e) {
          var t = e.prev,
            n = e.post,
            r = n
              ? Object(a.c)(
                  k,
                  { to: n.frontmatter.path },
                  t ? 'Previous Post' : 'Next Post'
                )
              : Object(a.c)(v, null, t ? 'Previous Post' : 'Next Post')
          return Object(a.c)(
            b,
            { prev: t },
            r,
            Object(a.c)('small', null, n ? n.frontmatter.title : null)
          )
        }
      ;(w.propTypes = { prev: i.a.bool, post: h.a.isRequired }),
        (w.defaultProps = { prev: !1 })
      var x = w,
        O = function() {
          return Object(a.c)(a.a, {
            styles: {
              'code[class*="language-"],pre[class*="language-"]': {
                background: 'none',
                textShadow: '0 1px rgba(0, 0, 0, 0.3)',
                fontFamily:
                  "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
                textAlign: 'left',
                whiteSpace: 'pre',
                wordSpacing: 'normal',
                wordBreak: 'normal',
                wordWrap: 'normal',
                lineHeight: 1.5,
                tabSize: 4,
                hyphens: 'none',
              },
              'pre[class*="language-"]': {
                color: '#f8f8f2',
                background: '#272822',
                margin: '.5em 0',
                overflow: 'auto',
              },
              ':not(pre) > code[class*="language-"]': { whiteSpace: 'normal' },
              '.token.comment, .token.prolog, .token.doctype, .token.cdata': {
                color: 'slategray',
              },
              '.token.punctuation': { color: '#f8f8f2' },
              '.namespace': { opacity: '.7' },
              '.token.property, .token.tag, .token.constant, .token.symbol, .token.deleted': {
                color: '#f92672',
              },
              '.token.boolean, .token.number': { color: '#ae81ff' },
              '.token.selector, .token.attr-name, .token.string, .token.char, .token.builtin, .token.inserted': {
                color: '#a6e22e',
              },
              '.token.operator, .token.entity, .token.url, .language-css .token.string, .style .token.string, .token.variable': {
                color: '#f8f8f2',
              },
              '.token.atrule, .token.attr-value, .token.function': {
                color: '#e6db74',
              },
              '.token.keyword': { color: '#66d9ef' },
              '.token.regex, .token.important': { color: '#fd971f' },
              '.token.important, .token.bold': { fontWeight: 'bold' },
              '.token.italic': { fontStyle: 'italic' },
              '.token.entity': { cursor: 'help' },
            },
          })
        },
        T = n(196)
      n.d(t, 'query', function() {
        return N
      })
      var j = Object(r.a)('main', { target: 'e1lvfwdk0' })(function(e) {
          return { color: e.theme.textColor }
        }, ''),
        M = Object(r.a)('header', { target: 'e1lvfwdk1' })(function(e) {
          var t,
            n = e.theme
          return Object.assign(
            {},
            n.centerPadding,
            (((t = {
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
            })[n.smallMedia] = { flexDirection: 'column', flexWrap: 'nowrap' }),
            t)
          )
        }, ''),
        S = Object(r.a)('h1', { target: 'e1lvfwdk2' })(function(e) {
          var t,
            n = e.theme
          return (
            ((t = { width: '85%', marginBottom: n.spacing })[n.smallMedia] = {
              width: '100%',
              textAlign: 'center',
              marginBottom: 0,
            }),
            t
          )
        }, ''),
        P = Object(r.a)('time', { target: 'e1lvfwdk3' })(function(e) {
          var t
          return (
            ((t = { width: '15%', textAlign: 'right' })[e.theme.smallMedia] = {
              width: '100%',
              textAlign: 'center',
            }),
            t
          )
        }, ''),
        C = Object(r.a)('footer', { target: 'e1lvfwdk4' })(function(e) {
          var t = e.theme
          return Object.assign({}, t.centerPadding)
        }, ''),
        D = Object(r.a)('section', { target: 'e1lvfwdk5' })(function(e) {
          var t = e.theme
          return {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            '> *': {
              width: '100vw',
              wordWrap: 'break-word',
              ':not(.gatsby-highlight)': Object.assign({}, t.centerPadding),
            },
            '> .gatsby-highlight > pre': Object.assign({}, t.centerPadding, {
              paddingTop: t.spacing,
              paddingBottom: t.spacing,
            }),
            '>ul,>ol': {
              marginLeft: 4 * t.spacingPx + 'px',
              width: 'calc(100% - ' + 4 * t.spacingPx + 'px)',
            },
          }
        }, ''),
        _ = Object(r.a)('div', { target: 'e1lvfwdk6' })(function(e) {
          var t = e.theme
          return Object.assign({}, t.centerPadding, {
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'row',
            marginTop: t.spacing,
          })
        }, ''),
        A = function(e) {
          var t = e.data,
            n = e.pageContext,
            r = t.markdownRemark,
            o = t.site.siteMetadata,
            i = o.title,
            s = o.siteUrl,
            c = n.next,
            d = n.prev,
            m = '' + s + r.frontmatter.path
          return Object(a.c)(
            f.a,
            null,
            Object(a.c)(O, null),
            Object(a.c)(
              j,
              null,
              Object(a.c)(
                l.a,
                null,
                Object(a.c)('title', null, r.frontmatter.title, ' · ', i)
              ),
              Object(a.c)(
                'article',
                null,
                Object(a.c)(
                  M,
                  null,
                  Object(a.c)(S, null, r.frontmatter.title),
                  Object(a.c)(
                    P,
                    { dateTime: u()(r.frontmatter.date, 'isoDateTime') },
                    u()(r.frontmatter.date, 'mmmm d, yyyy')
                  ),
                  Object(a.c)(g.a, { tags: r.frontmatter.tags })
                ),
                Object(a.c)(D, { dangerouslySetInnerHTML: { __html: r.html } }),
                Object(a.c)(
                  C,
                  null,
                  Object(a.c)(p.a, {
                    shortname: 'kenpowers',
                    identifier: r.frontmatter.path,
                    title: r.frontmatter.title,
                    url: m,
                  })
                )
              ),
              Object(a.c)(
                _,
                null,
                Object(a.c)(x, { prev: !0, post: d }),
                Object(a.c)(x, { next: !0, post: c })
              )
            )
          )
        }
      A.propTypes = {
        data: i.a.shape({ site: m.a, markdownRemark: T.a }).isRequired,
        pageContext: h.b.isRequired,
      }
      t.default = A
      var N = '1536786877'
    },
    165: function(e, t, n) {
      'use strict'
      var r = n(0),
        a = n(61),
        o = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|default|defer|dir|disabled|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|itemProp|itemScope|itemType|itemID|itemRef|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
        i = Object(a.a)(function(e) {
          return (
            o.test(e) ||
            (111 === e.charCodeAt(0) &&
              110 === e.charCodeAt(1) &&
              e.charCodeAt(2) < 91)
          )
        }),
        s = n(60),
        l = n.n(s),
        c = n(7),
        u = n(19),
        d = n(16),
        p = i,
        m = function(e) {
          return 'theme' !== e && 'innerRef' !== e
        },
        f = function(e) {
          return 'string' == typeof e && e.charCodeAt(0) > 96 ? p : m
        }
      t.a = function e(t, n) {
        var a, o, i
        void 0 !== n &&
          ((a = n.label),
          (i = n.target),
          (o =
            t.__emotion_forwardProp && n.shouldForwardProp
              ? function(e) {
                  return t.__emotion_forwardProp(e) && n.shouldForwardProp(e)
                }
              : n.shouldForwardProp))
        var s = t.__emotion_real === t,
          p = (s && t.__emotion_base) || t
        'function' != typeof o && s && (o = t.__emotion_forwardProp)
        var m = o || f(p),
          g = !m('as')
        return function() {
          var y = arguments,
            h =
              s && void 0 !== t.__emotion_styles
                ? t.__emotion_styles.slice(0)
                : []
          if (
            (void 0 !== a && h.push('label:' + a + ';'),
            null == y[0] || void 0 === y[0].raw)
          )
            h.push.apply(h, y)
          else {
            h.push(y[0][0])
            for (var b = y.length, v = 1; v < b; v++) h.push(y[v], y[0][v])
          }
          var k = Object(c.d)(function(e, t, n) {
            return Object(r.createElement)(c.b.Consumer, null, function(a) {
              var s = (g && e.as) || p,
                l = '',
                c = [],
                y = e
              if (null == e.theme) {
                for (var b in ((y = {}), e)) y[b] = e[b]
                y.theme = a
              }
              'string' == typeof e.className &&
                (l += Object(u.a)(t.registered, c, e.className))
              var v = Object(d.a)(h.concat(c), t.registered, y)
              Object(u.b)(t, v, 'string' == typeof s),
                (l += t.key + '-' + v.name),
                void 0 !== i && (l += ' ' + i)
              var k = g && void 0 === o ? f(s) : m,
                w = {}
              for (var x in e) (g && 'as' === x) || (k(x) && (w[x] = e[x]))
              return (
                (w.className = l),
                (w.ref = n || e.innerRef),
                Object(r.createElement)(s, w)
              )
            })
          })
          return (
            (k.displayName =
              void 0 !== a
                ? a
                : 'Styled(' +
                  ('string' == typeof p
                    ? p
                    : p.displayName || p.name || 'Component') +
                  ')'),
            (k.defaultProps = t.defaultProps),
            (k.__emotion_real = k),
            (k.__emotion_base = p),
            (k.__emotion_styles = h),
            (k.__emotion_forwardProp = o),
            Object.defineProperty(k, 'toString', {
              value: function() {
                return '.' + i
              },
            }),
            (k.withComponent = function(t, r) {
              return e(t, void 0 !== r ? l()({}, n || {}, r) : n).apply(
                void 0,
                h
              )
            }),
            k
          )
        }
      }
    },
    171: function(e, t, n) {
      'use strict'
      var r = n(1),
        a = n.n(r)
      t.a = a.a.shape({
        siteMetadata: a.a.shape({ title: a.a.string, description: a.a.string })
          .isRequired,
      }).isRequired
    },
    174: function(e, t, n) {
      'use strict'
      n(81)
      var r = n(165),
        a = n(7),
        o = (n(0), n(1)),
        i = n.n(o),
        s = n(38),
        l = Object(r.a)('small', { target: 'e1j8ctkk0' })({
          name: '1lejymi',
          styles: 'text-transform:uppercase;',
        }),
        c = Object(r.a)(s.Link, { target: 'e1j8ctkk1' })(function(e) {
          var t = e.theme
          return {
            textDecoration: 'none',
            color: t.textColor,
            transition: 'color 250ms linear',
            ':hover': { textDecoration: 'underline', color: t.accentColor },
          }
        }, ''),
        u = function(e) {
          var t = e.tags
          return Object(a.c)(
            l,
            null,
            'Topics:',
            ' ',
            t.split(', ').map(function(e, t, n) {
              return Object(
                a.c
              )('span', { key: e }, Object(a.c)(c, { to: '/tag/' + e + '/' }, e), t < n.length - 1 ? ', ' : '')
            })
          )
        }
      ;(u.propTypes = { tags: i.a.string }),
        (u.defaultProps = { tags: '' }),
        (t.a = u)
    },
    175: function(e, t, n) {
      'use strict'
      n.d(t, 'a', function() {
        return o
      })
      var r = n(1),
        a = n.n(r),
        o = a.a.oneOfType([
          a.a.bool,
          a.a.shape({
            frontmatter: a.a.shape({
              title: a.a.string.isRequired,
              path: a.a.string.isRequired,
            }),
          }),
        ])
      t.b = a.a.shape({ next: o, prev: o })
    },
    176: function(e, t, n) {
      var r
      !(function(a) {
        'use strict'
        var o,
          i,
          s,
          l = ((o = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZWN]|"[^"]*"|'[^']*'/g),
          (i = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g),
          (s = /[^-+\dA-Z]/g),
          function(e, t, n, r) {
            if (
              (1 !== arguments.length ||
                'string' !==
                  (null === (a = e)
                    ? 'null'
                    : void 0 === a
                    ? 'undefined'
                    : 'object' != typeof a
                    ? typeof a
                    : Array.isArray(a)
                    ? 'array'
                    : {}.toString
                        .call(a)
                        .slice(8, -1)
                        .toLowerCase()) ||
                /\d/.test(e) ||
                ((t = e), (e = void 0)),
              (e = e || new Date()) instanceof Date || (e = new Date(e)),
              isNaN(e))
            )
              throw TypeError('Invalid date')
            var a,
              u = (t = String(l.masks[t] || t || l.masks.default)).slice(0, 4)
            ;('UTC:' !== u && 'GMT:' !== u) ||
              ((t = t.slice(4)), (n = !0), 'GMT:' === u && (r = !0))
            var d = n ? 'getUTC' : 'get',
              p = e[d + 'Date'](),
              m = e[d + 'Day'](),
              f = e[d + 'Month'](),
              g = e[d + 'FullYear'](),
              y = e[d + 'Hours'](),
              h = e[d + 'Minutes'](),
              b = e[d + 'Seconds'](),
              v = e[d + 'Milliseconds'](),
              k = n ? 0 : e.getTimezoneOffset(),
              w = (function(e) {
                var t = new Date(e.getFullYear(), e.getMonth(), e.getDate())
                t.setDate(t.getDate() - ((t.getDay() + 6) % 7) + 3)
                var n = new Date(t.getFullYear(), 0, 4)
                n.setDate(n.getDate() - ((n.getDay() + 6) % 7) + 3)
                var r = t.getTimezoneOffset() - n.getTimezoneOffset()
                t.setHours(t.getHours() - r)
                var a = (t - n) / 6048e5
                return 1 + Math.floor(a)
              })(e),
              x = (function(e) {
                var t = e.getDay()
                return 0 === t && (t = 7), t
              })(e),
              O = {
                d: p,
                dd: c(p),
                ddd: l.i18n.dayNames[m],
                dddd: l.i18n.dayNames[m + 7],
                m: f + 1,
                mm: c(f + 1),
                mmm: l.i18n.monthNames[f],
                mmmm: l.i18n.monthNames[f + 12],
                yy: String(g).slice(2),
                yyyy: g,
                h: y % 12 || 12,
                hh: c(y % 12 || 12),
                H: y,
                HH: c(y),
                M: h,
                MM: c(h),
                s: b,
                ss: c(b),
                l: c(v, 3),
                L: c(Math.round(v / 10)),
                t: y < 12 ? l.i18n.timeNames[0] : l.i18n.timeNames[1],
                tt: y < 12 ? l.i18n.timeNames[2] : l.i18n.timeNames[3],
                T: y < 12 ? l.i18n.timeNames[4] : l.i18n.timeNames[5],
                TT: y < 12 ? l.i18n.timeNames[6] : l.i18n.timeNames[7],
                Z: r
                  ? 'GMT'
                  : n
                  ? 'UTC'
                  : (String(e).match(i) || ['']).pop().replace(s, ''),
                o:
                  (k > 0 ? '-' : '+') +
                  c(100 * Math.floor(Math.abs(k) / 60) + (Math.abs(k) % 60), 4),
                S: ['th', 'st', 'nd', 'rd'][
                  p % 10 > 3 ? 0 : (((p % 100) - (p % 10) != 10) * p) % 10
                ],
                W: w,
                N: x,
              }
            return t.replace(o, function(e) {
              return e in O ? O[e] : e.slice(1, e.length - 1)
            })
          })
        function c(e, t) {
          for (e = String(e), t = t || 2; e.length < t; ) e = '0' + e
          return e
        }
        ;(l.masks = {
          default: 'ddd mmm dd yyyy HH:MM:ss',
          shortDate: 'm/d/yy',
          mediumDate: 'mmm d, yyyy',
          longDate: 'mmmm d, yyyy',
          fullDate: 'dddd, mmmm d, yyyy',
          shortTime: 'h:MM TT',
          mediumTime: 'h:MM:ss TT',
          longTime: 'h:MM:ss TT Z',
          isoDate: 'yyyy-mm-dd',
          isoTime: 'HH:MM:ss',
          isoDateTime: "yyyy-mm-dd'T'HH:MM:sso",
          isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'",
          expiresHeaderFormat: 'ddd, dd mmm yyyy HH:MM:ss Z',
        }),
          (l.i18n = {
            dayNames: [
              'Sun',
              'Mon',
              'Tue',
              'Wed',
              'Thu',
              'Fri',
              'Sat',
              'Sunday',
              'Monday',
              'Tuesday',
              'Wednesday',
              'Thursday',
              'Friday',
              'Saturday',
            ],
            monthNames: [
              'Jan',
              'Feb',
              'Mar',
              'Apr',
              'May',
              'Jun',
              'Jul',
              'Aug',
              'Sep',
              'Oct',
              'Nov',
              'Dec',
              'January',
              'February',
              'March',
              'April',
              'May',
              'June',
              'July',
              'August',
              'September',
              'October',
              'November',
              'December',
            ],
            timeNames: ['a', 'p', 'am', 'pm', 'A', 'P', 'AM', 'PM'],
          }),
          void 0 ===
            (r = function() {
              return l
            }.call(t, n, t, e)) || (e.exports = r)
      })()
    },
    196: function(e, t, n) {
      'use strict'
      var r = n(1),
        a = n.n(r),
        o = a.a.shape({
          date: a.a.string.isRequired,
          path: a.a.string.isRequired,
          tags: a.a.string.isRequired,
          title: a.a.string.isRequired,
        })
      t.a = a.a.shape({ id: a.a.string, frontmatter: o })
    },
    319: function(e, t, n) {
      'use strict'
      e.exports = n(320)
    },
    320: function(e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 })
      var r =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t]
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
          },
        a = (function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n]
              ;(r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                'value' in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
          }
          return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
          }
        })(),
        o = s(n(0)),
        i = s(n(1))
      function s(e) {
        return e && e.__esModule ? e : { default: e }
      }
      var l = [
          'shortname',
          'identifier',
          'title',
          'url',
          'category_id',
          'onNewComment',
          'language',
        ],
        c = !1
      function u(e, t) {
        var n = t.onNewComment,
          r = t.language,
          a = (function(e, t) {
            var n = {}
            for (var r in e)
              t.indexOf(r) >= 0 ||
                (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]))
            return n
          })(t, ['onNewComment', 'language'])
        for (var o in a) e.page[o] = a[o]
        ;(e.language = r), n && (e.callbacks = { onNewComment: [n] })
      }
      var d = (function(e) {
        function t() {
          return (
            (function(e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function')
            })(this, t),
            (function(e, t) {
              if (!e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                )
              return !t || ('object' != typeof t && 'function' != typeof t)
                ? e
                : t
            })(
              this,
              (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments)
            )
          )
        }
        return (
          (function(e, t) {
            if ('function' != typeof t && null !== t)
              throw new TypeError(
                'Super expression must either be null or a function, not ' +
                  typeof t
              )
            ;(e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
              t &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, t)
                  : (e.__proto__ = t))
          })(t, o.default.Component),
          a(t, [
            {
              key: 'componentDidMount',
              value: function() {
                this.loadDisqus()
              },
            },
            {
              key: 'componentDidUpdate',
              value: function() {
                this.loadDisqus()
              },
            },
            {
              key: 'shouldComponentUpdate',
              value: function(e, t) {
                return e.identifier !== this.props.identifier
              },
            },
            {
              key: 'render',
              value: function() {
                var e = this,
                  t = Object.keys(this.props).reduce(function(t, n) {
                    return l.some(function(e) {
                      return e === n
                    })
                      ? t
                      : r(
                          {},
                          t,
                          (function(e, t, n) {
                            return (
                              t in e
                                ? Object.defineProperty(e, t, {
                                    value: n,
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0,
                                  })
                                : (e[t] = n),
                              e
                            )
                          })({}, n, e.props[n])
                        )
                  }, {})
                return o.default.createElement(
                  'div',
                  t,
                  o.default.createElement('div', { id: 'disqus_thread' })
                )
              },
            },
            {
              key: 'addDisqusScript',
              value: function() {
                if (!c) {
                  var e = (this.disqus = document.createElement('script')),
                    t =
                      document.getElementsByTagName('head')[0] ||
                      document.getElementsByTagName('body')[0]
                  ;(e.async = !0),
                    (e.type = 'text/javascript'),
                    (e.src =
                      '//' + this.props.shortname + '.disqus.com/embed.js'),
                    t.appendChild(e),
                    (c = !0)
                }
              },
            },
            {
              key: 'loadDisqus',
              value: function() {
                var e = this,
                  t = {}
                l.forEach(function(n) {
                  'shortname' !== n && e.props[n] && (t[n] = e.props[n])
                }),
                  'undefined' != typeof DISQUS
                    ? DISQUS.reset({
                        reload: !0,
                        config: function() {
                          u(this, t),
                            (this.page.url =
                              this.page.url.replace(/#/, '') + '#!newthread')
                        },
                      })
                    : ((window.disqus_config = function() {
                        u(this, t)
                      }),
                      this.addDisqusScript())
              },
            },
          ]),
          t
        )
      })()
      ;(d.displayName = 'DisqusThread'),
        (d.propTypes = {
          id: i.default.string,
          shortname: i.default.string.isRequired,
          identifier: i.default.string,
          title: i.default.string,
          url: i.default.string,
          category_id: i.default.string,
          onNewComment: i.default.func,
          language: i.default.string,
        }),
        (d.defaultProps = {
          url: 'undefined' == typeof window ? null : window.location.href,
        }),
        (t.default = d)
    },
  },
])
//# sourceMappingURL=component---src-templates-blog-post-jsx-10247c530a4e6136bf38.js.map
