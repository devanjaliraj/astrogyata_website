(this["webpackJsonpflone-react"] = this["webpackJsonpflone-react"] || []).push([
  [21],
  {
    116: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return i;
      }),
        a.d(t, "c", function () {
          return s;
        }),
        a.d(t, "b", function () {
          return o;
        }),
        a.d(t, "d", function () {
          return u;
        }),
        a.d(t, "f", function () {
          return r;
        }),
        a.d(t, "e", function () {
          return n;
        });
      var i = "ADD_TO_WISHLIST",
        s = "DELETE_FROM_WISHLIST",
        o = "DELETE_ALL_FROM_WISHLIST",
        u = function (e, t) {
          return function (e) {
            t &&
              t("Added To Wishlist", {
                appearance: "success",
                autoDismiss: !0,
              });
          };
        },
        r = function (e, t) {
          return function (a) {
            t &&
              t("Removed From Wishlist", {
                appearance: "error",
                autoDismiss: !0,
              }),
              a({ type: s, payload: e });
          };
        },
        n = function (e) {
          return function (t) {
            e &&
              e("Removed All From Wishlist", {
                appearance: "error",
                autoDismiss: !0,
              }),
              t({ type: o });
          };
        };
    },
    143: function (e, t, a) {
      e.exports = a.p + "static/media/logoastro.b1937cf6.png";
    },
    147: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return i;
      }),
        a.d(t, "b", function () {
          return s;
        }),
        a.d(t, "c", function () {
          return o;
        }),
        a.d(t, "d", function () {
          return u;
        });
      var i = "ADD_TO_COMPARE",
        s = "DELETE_FROM_COMPARE",
        o = function (e, t) {
          return function (a) {
            t &&
              t("Added To Compare", { appearance: "success", autoDismiss: !0 }),
              a({ type: i, payload: e });
          };
        },
        u = function (e, t) {
          return function (a) {
            t &&
              t("Removed From Compare", {
                appearance: "error",
                autoDismiss: !0,
              }),
              a({ type: s, payload: e });
          };
        };
    },
    200: function (e, t, a) {
      "use strict";
      a.d(t, "e", function () {
        return s;
      }),
        a.d(t, "a", function () {
          return o;
        }),
        a.d(t, "g", function () {
          return u;
        }),
        a.d(t, "b", function () {
          return n;
        }),
        a.d(t, "d", function () {
          return m;
        }),
        a.d(t, "c", function () {
          return c;
        }),
        a.d(t, "f", function () {
          return l;
        }),
        a.d(t, "h", function () {
          return p;
        }),
        a.d(t, "i", function () {
          return d;
        });
      var i = a(50),
        s = function (e, t, a, i) {
          var s = t
            ? e.filter(function (e) {
                return e.category.filter(function (e) {
                  return e === t;
                })[0];
              })
            : e;
          if (a && "new" === a) {
            var o = s.filter(function (e) {
              return e.new;
            });
            return o.slice(0, i || o.length);
          }
          if (a && "bestSeller" === a)
            return s
              .sort(function (e, t) {
                return t.saleCount - e.saleCount;
              })
              .slice(0, i || s.length);
          if (a && "saleItems" === a) {
            var u = s.filter(function (e) {
              return e.discount && e.discount > 0;
            });
            return u.slice(0, i || u.length);
          }
          return s.slice(0, i || s.length);
        },
        o = function (e, t) {
          return t && t > 0 ? e - e * (t / 100) : null;
        },
        u = function (e, t, a) {
          if (e && t && a) {
            if ("productCategories" === t)
              return e.filter(function (e) {
                return e.productCategories.filter(function (e) {
                  return e === a;
                })[0];
              });
            if ("tag" === t)
              return e.filter(function (e) {
                return e.tag.filter(function (e) {
                  return e === a;
                })[0];
              });
            if ("color" === t)
              return e.filter(function (e) {
                return (
                  e.data &&
                  e.data.filter(function (e) {
                    return e.color === a;
                  })[0]
                );
              });
            if ("size" === t)
              return e.filter(function (e) {
                return (
                  e.data &&
                  e.data.filter(function (e) {
                    return e.size.filter(function (e) {
                      return e.name === a;
                    })[0];
                  })[0]
                );
              });
            if ("filterSort" === t) {
              var s = Object(i.a)(e);
              if ("default" === a) return s;
              if ("priceHighToLow" === a)
                return s.sort(function (e, t) {
                  return t.price - e.price;
                });
              if ("priceLowToHigh" === a)
                return s.sort(function (e, t) {
                  return e.price - t.price;
                });
            }
          }
          return e;
        },
        r = function (e) {
          return e.filter(function (e, t, a) {
            return t === a.indexOf(e);
          });
        },
        n = function (e) {
          var t = [];
          return (
            e &&
              e.map(function (e) {
                return (
                  e.productCategories &&
                  e.productCategories.map(function (e) {
                    return t.push(e);
                  })
                );
              }),
            r(t)
          );
        },
        m = function (e) {
          var t = [];
          return (
            e &&
              e.map(function (e) {
                return (
                  e.tag &&
                  e.tag.map(function (e) {
                    return t.push(e);
                  })
                );
              }),
            r(t)
          );
        },
        c = function (e) {
          var t = [];
          return (
            e &&
              e.map(function (e) {
                return (
                  e.data &&
                  e.data.map(function (e) {
                    return t.push(e.color);
                  })
                );
              }),
            r(t)
          );
        },
        l = function (e) {
          var t = [];
          return (
            e &&
              e.map(function (e) {
                return (
                  e.data &&
                  e.data.map(function (e) {
                    return e.size.map(function (e) {
                      return t.push(e.name);
                    });
                  })
                );
              }),
            r(t)
          );
        },
        p = function (e) {
          document
            .querySelectorAll(
              ".sidebar-widget-list-left button, .sidebar-widget-tag button, .product-filter button"
            )
            .forEach(function (e) {
              e.classList.remove("active");
            }),
            e.currentTarget.classList.add("active");
        },
        d = function (e) {
          var t = document.querySelector("#product-filter-wrapper");
          t.classList.toggle("active"),
            t.style.height
              ? (t.style.height = null)
              : (t.style.height = t.scrollHeight + "px"),
            e.currentTarget.classList.toggle("active");
        };
    },
    201: function (e, t, a) {
      "use strict";
      var i = a(0),
        s = a.n(i),
        o = a(25),
        u = a(2),
        r = function (e) {
          var t = e.imageUrl,
            a = e.logoClass;
          return s.a.createElement(
            "div",
            { className: "".concat(a || "") },
            s.a.createElement(
              u.c,
              { to: "/" },
              s.a.createElement("img", {
                alt: "",
                src: "" + t,
                style: { width: 200 },
              })
            )
          );
        },
        n = a(143),
        m = a.n(n),
        c = a(55),
        l = a.n(c),
        p = a(38),
        d = a(78),
        g = Object(p.multilanguage)(function (e) {
          var t = e.strings,
            a = e.menuWhiteClass,
            r = e.sidebarMenu,
            n = Object(i.useState)([]),
            m = Object(o.a)(n, 1)[0];
          return (
            Object(i.useEffect)(function () {
              d.a
                .get("/admin/getallCategory")
                .then(function (e) {
                  console.log("5555555", e.data.data), m(e.data.data);
                })
                .catch(function (e) {
                  console.log(e);
                });
            }, []),
            s.a.createElement(
              "div",
              {
                className: " ".concat(
                  r ? "sidebar-menu" : "main-menu ".concat(a || ""),
                  " "
                ),
              },
              s.a.createElement(
                "nav",
                null,
                s.a.createElement(
                  "ul",
                  null,
                  s.a.createElement(
                    "li",
                    null,
                    s.a.createElement(u.c, { to: "/" }, t.home)
                  ),
                  s.a.createElement(
                    "li",
                    null,
                    s.a.createElement(
                      u.c,
                      { to: "/kundaliform" },
                      "Match Making"
                    )
                  ),
                  s.a.createElement(
                    "li",
                    null,
                    s.a.createElement(
                      u.c,
                      { to: "/allastrologerlist" },
                      "Talk Astrologer"
                    )
                  ),
                  s.a.createElement(
                    "li",
                    null,
                    s.a.createElement(
                      u.c,
                      { to: "/liveAstrologer" },
                      "Live Astrologer"
                    )
                  ),
                  s.a.createElement(
                    "li",
                    null,
                    s.a.createElement(u.c, null, "Dosh"),
                    s.a.createElement(
                      "ul",
                      { className: "submenu" },
                      s.a.createElement(
                        "li",
                        { className: "" },
                        s.a.createElement(
                          u.c,
                          { to: "/manglikdosh" },
                          "Manglik Dosh"
                        )
                      ),
                      s.a.createElement(
                        "li",
                        { className: "" },
                        s.a.createElement(
                          u.c,
                          { to: "/pitraDosh" },
                          "Pitra Dosh"
                        )
                      ),
                      s.a.createElement(
                        "li",
                        { className: "" },
                        s.a.createElement(
                          u.c,
                          { to: "/kalsharpDosh" },
                          "Kalsharp Dosh"
                        )
                      )
                    )
                  ),
                  s.a.createElement(
                    "li",
                    null,
                    s.a.createElement(u.c, null, "Horoscopes"),
                    s.a.createElement(
                      "ul",
                      { className: "submenu" },
                      s.a.createElement(
                        "li",
                        { className: "" },
                        s.a.createElement(
                          u.c,
                          { to: "/heroscopestwo3" },
                          "Tomorrow"
                        )
                      ),
                      s.a.createElement(
                        "li",
                        { className: "" },
                        s.a.createElement(
                          u.c,
                          { to: "/heroscopestwo" },
                          "Daily"
                        )
                      ),
                      s.a.createElement(
                        "li",
                        { className: "" },
                        s.a.createElement(
                          u.c,
                          { to: "/heroscopestwo1" },
                          "Weekly"
                        )
                      ),
                      s.a.createElement(
                        "li",
                        { className: "" },
                        s.a.createElement(
                          u.c,
                          { to: "/heroscopestwo2" },
                          "Monthly"
                        )
                      )
                    )
                  ),
                  s.a.createElement(
                    "li",
                    { className: "" },
                    s.a.createElement(
                      u.c,
                      { to: "/astromallList" },
                      "Astromall"
                    )
                  )
                )
              )
            )
          );
        }),
        q = a(114),
        h = a(22),
        v = a(44),
        f = (a(115), a(200), a(71));
      function b() {
        b = function () {
          return e;
        };
        var e = {},
          t = Object.prototype,
          a = t.hasOwnProperty,
          i =
            Object.defineProperty ||
            function (e, t, a) {
              e[t] = a.value;
            },
          s = "function" == typeof Symbol ? Symbol : {},
          o = s.iterator || "@@iterator",
          u = s.asyncIterator || "@@asyncIterator",
          r = s.toStringTag || "@@toStringTag";
        function n(e, t, a) {
          return (
            Object.defineProperty(e, t, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          );
        }
        try {
          n({}, "");
        } catch (S) {
          n = function (e, t, a) {
            return (e[t] = a);
          };
        }
        function m(e, t, a, s) {
          var o = t && t.prototype instanceof p ? t : p,
            u = Object.create(o.prototype),
            r = new _(s || []);
          return i(u, "_invoke", { value: y(e, a, r) }), u;
        }
        function c(e, t, a) {
          try {
            return { type: "normal", arg: e.call(t, a) };
          } catch (S) {
            return { type: "throw", arg: S };
          }
        }
        e.wrap = m;
        var l = {};
        function p() {}
        function d() {}
        function g() {}
        var q = {};
        n(q, o, function () {
          return this;
        });
        var h = Object.getPrototypeOf,
          v = h && h(h(D([])));
        v && v !== t && a.call(v, o) && (q = v);
        var f = (g.prototype = p.prototype = Object.create(q));
        function j(e) {
          ["next", "throw", "return"].forEach(function (t) {
            n(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function k(e, t) {
          var s;
          i(this, "_invoke", {
            value: function (i, o) {
              function u() {
                return new t(function (s, u) {
                  !(function i(s, o, u, r) {
                    var n = c(e[s], e, o);
                    if ("throw" !== n.type) {
                      var m = n.arg,
                        l = m.value;
                      return l && "object" == typeof l && a.call(l, "__await")
                        ? t.resolve(l.__await).then(
                            function (e) {
                              i("next", e, u, r);
                            },
                            function (e) {
                              i("throw", e, u, r);
                            }
                          )
                        : t.resolve(l).then(
                            function (e) {
                              (m.value = e), u(m);
                            },
                            function (e) {
                              return i("throw", e, u, r);
                            }
                          );
                    }
                    r(n.arg);
                  })(i, o, s, u);
                });
              }
              return (s = s ? s.then(u, u) : u());
            },
          });
        }
        function y(e, t, a) {
          var i = "suspendedStart";
          return function (s, o) {
            if ("executing" === i)
              throw new Error("Generator is already running");
            if ("completed" === i) {
              if ("throw" === s) throw o;
              return N();
            }
            for (a.method = s, a.arg = o; ; ) {
              var u = a.delegate;
              if (u) {
                var r = x(u, a);
                if (r) {
                  if (r === l) continue;
                  return r;
                }
              }
              if ("next" === a.method) a.sent = a._sent = a.arg;
              else if ("throw" === a.method) {
                if ("suspendedStart" === i) throw ((i = "completed"), a.arg);
                a.dispatchException(a.arg);
              } else "return" === a.method && a.abrupt("return", a.arg);
              i = "executing";
              var n = c(e, t, a);
              if ("normal" === n.type) {
                if (
                  ((i = a.done ? "completed" : "suspendedYield"), n.arg === l)
                )
                  continue;
                return { value: n.arg, done: a.done };
              }
              "throw" === n.type &&
                ((i = "completed"), (a.method = "throw"), (a.arg = n.arg));
            }
          };
        }
        function x(e, t) {
          var a = t.method,
            i = e.iterator[a];
          if (void 0 === i)
            return (
              (t.delegate = null),
              ("throw" === a &&
                e.iterator.return &&
                ((t.method = "return"),
                (t.arg = void 0),
                x(e, t),
                "throw" === t.method)) ||
                ("return" !== a &&
                  ((t.method = "throw"),
                  (t.arg = new TypeError(
                    "The iterator does not provide a '" + a + "' method"
                  )))),
              l
            );
          var s = c(i, e.iterator, t.arg);
          if ("throw" === s.type)
            return (
              (t.method = "throw"), (t.arg = s.arg), (t.delegate = null), l
            );
          var o = s.arg;
          return o
            ? o.done
              ? ((t[e.resultName] = o.value),
                (t.next = e.nextLoc),
                "return" !== t.method &&
                  ((t.method = "next"), (t.arg = void 0)),
                (t.delegate = null),
                l)
              : o
            : ((t.method = "throw"),
              (t.arg = new TypeError("iterator result is not an object")),
              (t.delegate = null),
              l);
        }
        function w(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function E(e) {
          var t = e.completion || {};
          (t.type = "normal"), delete t.arg, (e.completion = t);
        }
        function _(e) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(w, this),
            this.reset(!0);
        }
        function D(e) {
          if (e) {
            var t = e[o];
            if (t) return t.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var i = -1,
                s = function t() {
                  for (; ++i < e.length; )
                    if (a.call(e, i)) return (t.value = e[i]), (t.done = !1), t;
                  return (t.value = void 0), (t.done = !0), t;
                };
              return (s.next = s);
            }
          }
          return { next: N };
        }
        function N() {
          return { value: void 0, done: !0 };
        }
        return (
          (d.prototype = g),
          i(f, "constructor", { value: g, configurable: !0 }),
          i(g, "constructor", { value: d, configurable: !0 }),
          (d.displayName = n(g, r, "GeneratorFunction")),
          (e.isGeneratorFunction = function (e) {
            var t = "function" == typeof e && e.constructor;
            return (
              !!t &&
              (t === d || "GeneratorFunction" === (t.displayName || t.name))
            );
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, g)
                : ((e.__proto__ = g), n(e, r, "GeneratorFunction")),
              (e.prototype = Object.create(f)),
              e
            );
          }),
          (e.awrap = function (e) {
            return { __await: e };
          }),
          j(k.prototype),
          n(k.prototype, u, function () {
            return this;
          }),
          (e.AsyncIterator = k),
          (e.async = function (t, a, i, s, o) {
            void 0 === o && (o = Promise);
            var u = new k(m(t, a, i, s), o);
            return e.isGeneratorFunction(a)
              ? u
              : u.next().then(function (e) {
                  return e.done ? e.value : u.next();
                });
          }),
          j(f),
          n(f, r, "Generator"),
          n(f, o, function () {
            return this;
          }),
          n(f, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (e) {
            var t = Object(e),
              a = [];
            for (var i in t) a.push(i);
            return (
              a.reverse(),
              function e() {
                for (; a.length; ) {
                  var i = a.pop();
                  if (i in t) return (e.value = i), (e.done = !1), e;
                }
                return (e.done = !0), e;
              }
            );
          }),
          (e.values = D),
          (_.prototype = {
            constructor: _,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(E),
                !e)
              )
                for (var t in this)
                  "t" === t.charAt(0) &&
                    a.call(this, t) &&
                    !isNaN(+t.slice(1)) &&
                    (this[t] = void 0);
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ("throw" === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var t = this;
              function i(a, i) {
                return (
                  (u.type = "throw"),
                  (u.arg = e),
                  (t.next = a),
                  i && ((t.method = "next"), (t.arg = void 0)),
                  !!i
                );
              }
              for (var s = this.tryEntries.length - 1; s >= 0; --s) {
                var o = this.tryEntries[s],
                  u = o.completion;
                if ("root" === o.tryLoc) return i("end");
                if (o.tryLoc <= this.prev) {
                  var r = a.call(o, "catchLoc"),
                    n = a.call(o, "finallyLoc");
                  if (r && n) {
                    if (this.prev < o.catchLoc) return i(o.catchLoc, !0);
                    if (this.prev < o.finallyLoc) return i(o.finallyLoc);
                  } else if (r) {
                    if (this.prev < o.catchLoc) return i(o.catchLoc, !0);
                  } else {
                    if (!n)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < o.finallyLoc) return i(o.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var s = this.tryEntries[i];
                if (
                  s.tryLoc <= this.prev &&
                  a.call(s, "finallyLoc") &&
                  this.prev < s.finallyLoc
                ) {
                  var o = s;
                  break;
                }
              }
              o &&
                ("break" === e || "continue" === e) &&
                o.tryLoc <= t &&
                t <= o.finallyLoc &&
                (o = null);
              var u = o ? o.completion : {};
              return (
                (u.type = e),
                (u.arg = t),
                o
                  ? ((this.method = "next"), (this.next = o.finallyLoc), l)
                  : this.complete(u)
              );
            },
            complete: function (e, t) {
              if ("throw" === e.type) throw e.arg;
              return (
                "break" === e.type || "continue" === e.type
                  ? (this.next = e.arg)
                  : "return" === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === e.type && t && (this.next = t),
                l
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var a = this.tryEntries[t];
                if (a.finallyLoc === e)
                  return this.complete(a.completion, a.afterLoc), E(a), l;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var a = this.tryEntries[t];
                if (a.tryLoc === e) {
                  var i = a.completion;
                  if ("throw" === i.type) {
                    var s = i.arg;
                    E(a);
                  }
                  return s;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (e, t, a) {
              return (
                (this.delegate = { iterator: D(e), resultName: t, nextLoc: a }),
                "next" === this.method && (this.arg = void 0),
                l
              );
            },
          }),
          e
        );
      }
      var j = Object(v.connect)(
          function (e) {
            return {
              currency: e.currencyData,
              cartData: e.cartData,
              wishlistData: e.wishlistData,
              compareData: e.compareData,
            };
          },
          function (e) {
            return {
              deleteFromCart: function (t, a) {
                e(Object(f.h)(t, a));
              },
            };
          }
        )(function (e) {
          e.currency,
            e.cartData,
            e.wishlistData,
            e.compareData,
            e.deleteFromCart;
          var t = e.iconWhiteClass,
            a = Object(i.useState)([]),
            r = Object(o.a)(a, 2),
            n = (r[0], r[1]),
            m = (function () {
              var e = Object(q.a)(
                b().mark(function e(t) {
                  var a, i, s;
                  return b().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            l.a.get({
                              headers: {
                                "auth-token":
                                  localStorage.getItem("auth-token"),
                              },
                            })
                          );
                        case 2:
                          (a = e.sent),
                            (i = a.data),
                            (s = i.data),
                            n(s),
                            console.log(s);
                        case 7:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })();
          Object(i.useEffect)(function () {
            localStorage.getItem("auth-token") && m();
          }, []);
          Object(h.g)();
          var c = Object(i.useState)([]),
            p = Object(o.a)(c, 2),
            g = (p[0], p[1]),
            v = (function () {
              var e = Object(q.a)(
                b().mark(function e() {
                  var t, a, i;
                  return b().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            l.a.get({
                              headers: {
                                "auth-token":
                                  localStorage.getItem("auth-token"),
                              },
                            })
                          );
                        case 2:
                          (t = e.sent),
                            (a = t.data),
                            (i = a.data),
                            g(i),
                            console.log(i);
                        case 7:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })();
          Object(i.useEffect)(function () {
            localStorage.getItem("auth-token") && v();
          }, []);
          var f = Object(i.useState)({}),
            j = Object(o.a)(f, 2),
            k = j[0],
            y = j[1],
            x = Object(i.useState)(""),
            w = Object(o.a)(x, 2),
            E = (w[0], w[1]),
            _ = (function () {
              var e = Object(q.a)(
                b().mark(function e() {
                  var t;
                  return b().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          (t = JSON.parse(localStorage.getItem("user_id"))),
                            console.log("first", t),
                            d.a
                              .get("/user/viewoneuser/".concat(t))
                              .then(function (e) {
                                console.log(e.data.data), y(e.data.data);
                              })
                              .catch(function (e) {
                                console.log(e);
                              });
                        case 3:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })();
          return (
            Object(i.useEffect)(function () {
              var e = localStorage.getItem("token");
              E(e), _();
            }, []),
            s.a.createElement(
              "div",
              { className: "header-right-wrap ".concat(t || "") },
              s.a.createElement(
                "div",
                { className: "dropdown" },
                s.a.createElement(
                  "button",
                  { className: "dropbtn" },
                  (null === k || void 0 === k ? void 0 : k.userimg)
                    ? s.a.createElement(
                        s.a.Fragment,
                        null,
                        s.a.createElement(
                          "span",
                          { className: "username" },
                          null === k || void 0 === k ? void 0 : k.fullname
                        ),
                        s.a.createElement(
                          "span",
                          { "data-tour": "user" },
                          s.a.createElement("img", {
                            src:
                              null === k || void 0 === k
                                ? void 0
                                : k.userimg[0],
                            className: "round ftt",
                            height: "40",
                            width: "40",
                            alt: "Login",
                          })
                        )
                      )
                    : s.a.createElement(
                        "span",
                        { className: "username btn btn-primary" },
                        "Login"
                      )
                ),
                s.a.createElement(
                  "div",
                  { className: "dropdown-content" },
                  s.a.createElement(
                    "ul",
                    null,
                    localStorage.getItem("token")
                      ? s.a.createElement(
                          s.a.Fragment,
                          null,
                          s.a.createElement(
                            "li",
                            null,
                            s.a.createElement(
                              u.c,
                              { to: "/my-order" },
                              "My Order"
                            )
                          ),
                          s.a.createElement(
                            "li",
                            null,
                            s.a.createElement(
                              u.c,
                              { to: "/notificationlist" },
                              "Notification"
                            )
                          ),
                          s.a.createElement(
                            "li",
                            null,
                            s.a.createElement(
                              u.c,
                              { to: "/my-account" },
                              "My Account"
                            )
                          ),
                          s.a.createElement(
                            "li",
                            null,
                            s.a.createElement(
                              u.c,
                              { to: "/wallettransaclist" },
                              "Wallet Transaction"
                            )
                          ),
                          s.a.createElement(
                            "li",
                            null,
                            s.a.createElement(
                              u.c,
                              { to: "/walletmoney" },
                              "Wallet Recharge",
                              " ",
                              s.a.createElement(
                                "span",
                                { className: "ml-2" },
                                "\u20b9 ",
                                null === k || void 0 === k ? void 0 : k.amount
                              )
                            )
                          ),
                          s.a.createElement(
                            "li",
                            null,
                            s.a.createElement(
                              u.c,
                              { to: "/askQuestionList" },
                              "Ask Question"
                            )
                          ),
                          s.a.createElement(
                            "li",
                            null,
                            s.a.createElement(
                              u.c,
                              { to: "/userChatHistoryList" },
                              "User Chat History List"
                            )
                          ),
                          s.a.createElement(
                            "li",
                            null,
                            s.a.createElement(
                              u.c,
                              { to: "/orderHistory" },
                              "Order History List"
                            )
                          ),
                          s.a.createElement(
                            "li",
                            null,
                            s.a.createElement(
                              u.c,
                              { to: "/customersupport" },
                              "Customer Support Chat"
                            )
                          ),
                          s.a.createElement(
                            "li",
                            null,
                            s.a.createElement(
                              u.c,
                              {
                                to: "/",
                                onClick: function (e) {
                                  return (
                                    window.localStorage.clear(),
                                    void window.location.replace("/")
                                  );
                                },
                              },
                              "Logout"
                            )
                          )
                        )
                      : s.a.createElement(
                          s.a.Fragment,
                          null,
                          s.a.createElement(
                            "li",
                            null,
                            s.a.createElement(
                              u.c,
                              { to: "/login-register" },
                              "Login"
                            )
                          ),
                          s.a.createElement(
                            "li",
                            null,
                            s.a.createElement(
                              u.c,
                              { to: "/login-register" },
                              "Register"
                            )
                          ),
                          s.a.createElement(
                            "li",
                            null,
                            s.a.createElement(
                              "a",
                              {
                                href: "http://astro.Astrogyata.in/#/pages/login",
                              },
                              "Astrologer login"
                            )
                          ),
                          s.a.createElement(
                            "li",
                            null,
                            s.a.createElement(
                              u.c,
                              { to: "/astrologersignup" },
                              "Astrologer Register"
                            )
                          )
                        )
                  )
                )
              ),
              s.a.createElement(
                "div",
                { className: "same-style mobile-off-canvas d-block d-lg-none" },
                s.a.createElement(
                  "button",
                  {
                    className: "mobile-aside-button",
                    onClick: function () {
                      document
                        .querySelector("#offcanvas-mobile-menu")
                        .classList.add("active");
                    },
                  },
                  s.a.createElement("i", { className: "pe-7s-menu" })
                )
              )
            )
          );
        }),
        k = function () {
          return s.a.createElement("div", {
            className: "offcanvas-mobile-search-area",
          });
        },
        y = Object(p.multilanguage)(function (e) {
          var t = e.strings;
          return s.a.createElement(
            "nav",
            { className: "offcanvas-navigation", id: "offcanvas-navigation" },
            s.a.createElement(
              "ul",
              null,
              s.a.createElement(
                "li",
                null,
                s.a.createElement(u.c, { to: "/" }, t.home)
              ),
              s.a.createElement(
                "li",
                null,
                s.a.createElement(
                  u.c,
                  { to: "/kundaliform" },
                  "Kundli Matching"
                )
              ),
              s.a.createElement(
                "li",
                null,
                s.a.createElement(
                  u.c,
                  { to: "/allastrochatlist" },
                  "Chat Astrologer"
                )
              ),
              s.a.createElement(
                "li",
                null,
                s.a.createElement(
                  u.c,
                  { to: "/allastrologerlist" },
                  "Talk Astrologer"
                )
              ),
              s.a.createElement(
                "li",
                null,
                s.a.createElement(u.c, null, "Horoscopes"),
                s.a.createElement(
                  "ul",
                  { className: "submenu" },
                  s.a.createElement(
                    "li",
                    { className: "" },
                    s.a.createElement(u.c, { to: "/" }, "Horoscope 2022")
                  ),
                  s.a.createElement(
                    "li",
                    { className: "" },
                    s.a.createElement(u.c, { to: "/" }, "Today's Horoscope")
                  ),
                  s.a.createElement(
                    "li",
                    { className: "" },
                    s.a.createElement(u.c, { to: "/" }, "Weekly Horoscope")
                  ),
                  s.a.createElement(
                    "li",
                    { className: "" },
                    s.a.createElement(u.c, { to: "/" }, "Monthly Horoscope")
                  ),
                  s.a.createElement(
                    "li",
                    { className: "" },
                    s.a.createElement(u.c, { to: "/" }, "Yearly Horoscope")
                  ),
                  s.a.createElement(
                    "li",
                    { className: "" },
                    s.a.createElement(u.c, { to: "/" }, "Daily Horoscope")
                  ),
                  s.a.createElement(
                    "li",
                    { className: "" },
                    s.a.createElement(u.c, { to: "/" }, "Tomorrow's Horoscope")
                  ),
                  s.a.createElement(
                    "li",
                    { className: "" },
                    s.a.createElement(u.c, { to: "/" }, "Yesterday's Horoscope")
                  ),
                  s.a.createElement(
                    "li",
                    { className: "" },
                    s.a.createElement(u.c, { to: "/" }, "Chinese Horoscope")
                  )
                )
              ),
              s.a.createElement(
                "li",
                { className: "" },
                s.a.createElement(u.c, { to: "/astromallList" }, "Astromall")
              ),
              s.a.createElement(
                "li",
                null,
                s.a.createElement(u.c, { to: "/contact" }, t.contact_us)
              )
            )
          );
        }),
        x = a(90),
        w = Object(v.connect)(
          function (e) {
            return { currency: e.currencyData };
          },
          function (e) {
            return {
              setCurrency: function (t) {
                e(Object(x.b)(t));
              },
            };
          }
        )(
          Object(p.multilanguage)(function (e) {
            e.currency, e.setCurrency, e.currentLanguageCode, e.dispatch;
            return s.a.createElement("div", {
              className: "mobile-menu-middle",
            });
          })
        ),
        E = function () {
          return s.a.createElement("div", {
            className: "offcanvas-widget-area",
          });
        },
        _ = function () {
          Object(i.useEffect)(function () {
            for (
              var a = document.querySelector("#offcanvas-navigation"),
                i = a.querySelectorAll(".sub-menu"),
                s = a.querySelectorAll("a"),
                o = 0;
              o < i.length;
              o++
            )
              i[o].insertAdjacentHTML(
                "beforebegin",
                "<span class='menu-expand'><i></i></span>"
              );
            for (
              var u = a.querySelectorAll(".menu-expand"), r = u.length, n = 0;
              n < r;
              n++
            )
              u[n].addEventListener("click", function (t) {
                e(t);
              });
            for (var m = 0; m < s.length; m++)
              s[m].addEventListener("click", function () {
                t();
              });
          });
          var e = function (e) {
              e.currentTarget.parentElement.classList.toggle("active");
            },
            t = function () {
              document
                .querySelector("#offcanvas-mobile-menu")
                .classList.remove("active");
            };
          return s.a.createElement(
            "div",
            { className: "offcanvas-mobile-menu", id: "offcanvas-mobile-menu" },
            s.a.createElement(
              "button",
              {
                className: "offcanvas-menu-close",
                id: "mobile-menu-close-trigger",
                onClick: function () {
                  return t();
                },
              },
              s.a.createElement("i", { className: "pe-7s-close" })
            ),
            s.a.createElement(
              "div",
              { className: "offcanvas-wrapper" },
              s.a.createElement(
                "div",
                { className: "offcanvas-inner-content" },
                s.a.createElement(k, null),
                s.a.createElement(y, null),
                s.a.createElement(w, null),
                s.a.createElement(E, null)
              )
            )
          );
        },
        D = Object(v.connect)(
          function (e) {
            return { currency: e.currencyData };
          },
          function (e) {
            return {
              setCurrency: function (t) {
                e(Object(x.b)(t));
              },
            };
          }
        )(
          Object(p.multilanguage)(function (e) {
            e.currency, e.setCurrency, e.currentLanguageCode, e.dispatch;
            var t = e.borderStyle;
            return s.a.createElement(
              "div",
              {
                className: "header-top-wap ".concat(
                  "fluid-border" === t ? "border-bottom" : ""
                ),
              },
              s.a.createElement("div", { className: "header-offer" })
            );
          })
        ),
        N = function (e) {
          var t = e.layout,
            a = e.top,
            u = e.borderStyle,
            n = e.headerPaddingClass,
            c = e.headerPositionClass,
            l = e.headerBgClass,
            p = Object(i.useState)(0),
            d = Object(o.a)(p, 2),
            q = d[0],
            h = d[1],
            v = Object(i.useState)(0),
            f = Object(o.a)(v, 2),
            b = f[0],
            k = f[1];
          Object(i.useEffect)(function () {
            var e = document.querySelector(".sticky-bar");
            return (
              k(e.offsetTop),
              window.addEventListener("scroll", y),
              function () {
                window.removeEventListener("scroll", y);
              }
            );
          }, []);
          var y = function () {
            h(window.scrollY);
          };
          return s.a.createElement(
            "header",
            {
              className: "header-area clearfix "
                .concat(l || "", " ")
                .concat(c || ""),
            },
            s.a.createElement(
              "div",
              {
                className: ""
                  .concat(n || "", " ")
                  .concat(
                    "visible" === a ? "d-none d-lg-block" : "d-none",
                    " header-top-area "
                  )
                  .concat("fluid-border" === u ? "border-none" : ""),
              },
              s.a.createElement(
                "div",
                { className: "container-fluid" === t ? t : "container" },
                s.a.createElement(D, { borderStyle: u })
              )
            ),
            s.a.createElement(
              "div",
              {
                className: " "
                  .concat(n || "", " sticky-bar header-res-padding clearfix ")
                  .concat(q > b ? "stick" : ""),
              },
              s.a.createElement(
                "div",
                { className: "container-fluid" === t ? t : "container" },
                s.a.createElement(
                  "div",
                  { className: "row", style: { marginBottom: "-10px" } },
                  s.a.createElement(
                    "div",
                    { className: "col-xl-2 col-lg-2 col-md-2 col-4" },
                    s.a.createElement(
                      "div",
                      { className: "logoo" },
                      s.a.createElement(r, { imageUrl: m.a })
                    )
                  ),
                  s.a.createElement(
                    "div",
                    { className: "col-xl-8 col-lg-8 d-none d-lg-block" },
                    s.a.createElement(g, null)
                  ),
                  s.a.createElement(
                    "div",
                    { className: "col-xl-2 col-lg-2 col-md-2 col-8" },
                    s.a.createElement(j, null)
                  )
                )
              ),
              s.a.createElement(_, null)
            )
          );
        },
        S = a(315),
        O = function (e) {
          var t = e.footerLogo,
            a = e.spaceBottomClass,
            i = e.colorClass;
          return s.a.createElement(
            "div",
            { className: "copyright ".concat(a || "", " ").concat(i || "") },
            s.a.createElement(
              "div",
              { className: "footer-logo" },
              s.a.createElement(
                u.c,
                { to: "/" },
                s.a.createElement("img", {
                  alt: "",
                  src: "" + t,
                  style: { width: 180 },
                })
              )
            ),
            s.a.createElement(
              "p",
              null,
              "\xa9 ",
              new Date().getFullYear(),
              " ",
              s.a.createElement(
                "a",
                { href: "/", rel: "noopener noreferrer", target: "" },
                "Astrogyata"
              ),
              ".",
              s.a.createElement("br", null),
              " All Rights Reserved"
            )
          );
        },
        C =
          (a(320),
          function (e) {
            var t = e.spaceBottomClass,
              a = e.spaceLeftClass,
              i = e.sideMenu,
              o = e.colorClass,
              u = e.widgetColorClass;
            return s.a.createElement(
              "div",
              {
                className: "footer-widget "
                  .concat(t || "", " ")
                  .concat(i ? "ml-ntv5" : a || "", " ")
                  .concat(u || ""),
              },
              s.a.createElement(
                "div",
                { className: "subscribe-style ".concat(o || "") },
                s.a.createElement(
                  "p",
                  null,
                  "Get E-mail updates about our latest shop and special offers."
                ),
                s.a.createElement(
                  "div",
                  { className: "social-box" },
                  s.a.createElement(
                    "ul",
                    null,
                    s.a.createElement(
                      "li",
                      null,
                      s.a.createElement("i", {
                        class: "fa fa-facebook foot-icon",
                        "aria-hidden": "true",
                      }),
                      s.a.createElement(
                        "a",
                        {
                          href: "//www.facebook.com",
                          target: "_blank",
                          rel: "noopener noreferrer",
                        },
                        "Facebook"
                      )
                    ),
                    s.a.createElement(
                      "li",
                      null,
                      s.a.createElement("i", {
                        class: "fa fa-twitter foot-icon",
                        "aria-hidden": "true",
                      }),
                      s.a.createElement(
                        "a",
                        {
                          href: "//www.twitter.com",
                          target: "_blank",
                          rel: "noopener noreferrer",
                        },
                        "Twitter"
                      )
                    ),
                    s.a.createElement(
                      "li",
                      null,
                      s.a.createElement("i", {
                        class: "fa fa-instagram foot-icon",
                        "aria-hidden": "true",
                      }),
                      s.a.createElement(
                        "a",
                        {
                          href: "//www.instagram.com",
                          target: "_blank",
                          rel: "noopener noreferrer",
                        },
                        "Instagram"
                      )
                    ),
                    s.a.createElement(
                      "li",
                      null,
                      s.a.createElement("i", {
                        class: "fa fa-youtube-play foot-icon",
                        "aria-hidden": "true",
                      }),
                      s.a.createElement(
                        "a",
                        {
                          href: "//www.youtube.com",
                          target: "_blank",
                          rel: "noopener noreferrer",
                        },
                        "Youtube"
                      )
                    )
                  )
                )
              )
            );
          }),
        L = function (e) {
          var t = e.backgroundColorClass,
            a = e.spaceTopClass,
            r = e.spaceBottomClass,
            n = e.spaceLeftClass,
            c = e.spaceRightClass,
            l = e.containerClass,
            p = e.extraFooterClass,
            g = e.sideMenu,
            q = Object(i.useState)(0),
            h = Object(o.a)(q, 2),
            v = h[0],
            f = h[1],
            b = Object(i.useState)(0),
            j = Object(o.a)(b, 2),
            k = j[0],
            y = j[1],
            x = Object(i.useState)([]),
            w = Object(o.a)(x, 1)[0];
          Object(i.useEffect)(function () {
            d.a
              .get("/admin/getallCategory")
              .then(function (e) {
                console.log("5555555", e.data.data), w(e.data.data);
              })
              .catch(function (e) {
                console.log(e);
              });
          }, []),
            Object(i.useEffect)(function () {
              return (
                y(100),
                window.addEventListener("scroll", E),
                function () {
                  window.removeEventListener("scroll", E);
                }
              );
            }, []);
          var E = function () {
            f(window.scrollY);
          };
          return s.a.createElement(
            "footer",
            {
              className: "footer-area "
                .concat(t || "", " ")
                .concat(a || "", " ")
                .concat(r || "", " ")
                .concat(p || "", " ")
                .concat(n || "", " ")
                .concat(c || ""),
            },
            s.a.createElement(
              "div",
              { className: "".concat(l || "container") },
              s.a.createElement(
                "div",
                { className: "row" },
                s.a.createElement(
                  "div",
                  {
                    className: "".concat(
                      g ? "col-xl-2 col-sm-4" : "col-lg-2 col-sm-4"
                    ),
                  },
                  s.a.createElement(O, {
                    footerLogo: m.a,
                    spaceBottomClass: "mb-30",
                  })
                ),
                s.a.createElement(
                  "div",
                  {
                    className: "".concat(
                      g ? "col-xl-2 col-sm-4" : "col-lg-2 col-sm-6"
                    ),
                  },
                  s.a.createElement(
                    "div",
                    {
                      className: "".concat(
                        g
                          ? "footer-widget mb-30 ml-145"
                          : "footer-widget mb-30 ml-75"
                      ),
                    },
                    s.a.createElement(
                      "div",
                      { className: "footer-title" },
                      s.a.createElement("h3", null, "Horoscope")
                    ),
                    s.a.createElement(
                      "div",
                      { className: "footer-list" },
                      s.a.createElement(
                        "ul",
                        null,
                        s.a.createElement(
                          "li",
                          null,
                          s.a.createElement(
                            "ul",
                            { className: "submenu" },
                            s.a.createElement(
                              "li",
                              { className: "" },
                              s.a.createElement(
                                u.c,
                                { to: "/heroscopestwo3" },
                                "Tomorrow"
                              )
                            ),
                            s.a.createElement(
                              "li",
                              { className: "" },
                              s.a.createElement(
                                u.c,
                                { to: "/heroscopestwo" },
                                "Daily"
                              )
                            ),
                            s.a.createElement(
                              "li",
                              { className: "" },
                              s.a.createElement(
                                u.c,
                                { to: "/heroscopestwo1" },
                                "Weekly"
                              )
                            ),
                            s.a.createElement(
                              "li",
                              { className: "" },
                              s.a.createElement(
                                u.c,
                                { to: "/heroscopestwo2" },
                                "Monthly"
                              )
                            ),
                            s.a.createElement(
                              "li",
                              { className: "" },
                              s.a.createElement(
                                u.c,
                                { to: "/zodicPage" },
                                "Zodiac Signs"
                              )
                            ),
                            s.a.createElement(
                              "li",
                              { className: "" },
                              s.a.createElement(
                                u.c,
                                { to: "/loveAstrologer" },
                                "Love & Astrologer"
                              )
                            ),
                            s.a.createElement(
                              "li",
                              { className: "" },
                              s.a.createElement(
                                u.c,
                                { to: "/numerology" },
                                "Numerology"
                              )
                            ),
                            s.a.createElement(
                              "li",
                              { className: "" },
                              s.a.createElement(
                                u.c,
                                { to: "/tarot" },
                                "Tarot Reading Predictions"
                              )
                            )
                          )
                        )
                      )
                    )
                  )
                ),
                s.a.createElement(
                  "div",
                  {
                    className: "".concat(
                      g ? "col-xl-2 col-sm-4" : "col-lg-2 col-sm-6"
                    ),
                  },
                  s.a.createElement(
                    "div",
                    {
                      className: "".concat(
                        g
                          ? "footer-widget mb-30 ml-145"
                          : "footer-widget mb-30 ml-75"
                      ),
                    },
                    s.a.createElement(
                      "div",
                      { className: "footer-title" },
                      s.a.createElement("h3", null, "Dosh")
                    ),
                    s.a.createElement(
                      "div",
                      { className: "footer-list" },
                      s.a.createElement(
                        "ul",
                        null,
                        s.a.createElement(
                          "li",
                          null,
                          s.a.createElement(
                            "ul",
                            { className: "submenu" },
                            s.a.createElement(
                              "li",
                              { className: "" },
                              s.a.createElement(
                                u.c,
                                { to: "/ManglikDosh" },
                                "Manglik Dosh"
                              )
                            ),
                            s.a.createElement(
                              "li",
                              { className: "" },
                              s.a.createElement(
                                u.c,
                                { to: "/pitraDosh" },
                                "Pitra Dosh"
                              )
                            ),
                            s.a.createElement(
                              "li",
                              { className: "" },
                              s.a.createElement(
                                u.c,
                                { to: "/kalsharpDosh" },
                                "Kalsharvp Dosh"
                              )
                            )
                          )
                        )
                      )
                    ),
                    s.a.createElement(
                      "div",
                      { className: "footer-title" },
                      s.a.createElement("h3", null, "Remedies")
                    ),
                    s.a.createElement(
                      "div",
                      { className: "footer-list" },
                      s.a.createElement(
                        "ul",
                        null,
                        s.a.createElement(
                          "li",
                          null,
                          s.a.createElement(
                            "ul",
                            { className: "submenu" },
                            s.a.createElement(
                              "li",
                              { className: "" },
                              s.a.createElement(
                                u.c,
                                { to: "/luckyGemstone" },
                                "Know your Lucky Gemstone"
                              )
                            ),
                            s.a.createElement(
                              "li",
                              { className: "" },
                              s.a.createElement(
                                u.c,
                                { to: "/lalKitab" },
                                "Lal Kitab"
                              )
                            ),
                            s.a.createElement(
                              "li",
                              { className: "" },
                              s.a.createElement(
                                u.c,
                                { to: "/lalkitabPlanets" },
                                "Lal Kitab Planets"
                              )
                            ),
                            s.a.createElement(
                              "li",
                              { className: "" },
                              s.a.createElement(
                                u.c,
                                { to: "/bookEvent" },
                                "Book Online Puja"
                              )
                            )
                          )
                        )
                      )
                    )
                  )
                ),
                s.a.createElement(
                  "div",
                  {
                    className: "".concat(
                      g ? "col-xl-2 col-sm-4" : "col-lg-2 col-sm-6"
                    ),
                  },
                  s.a.createElement(
                    "div",
                    {
                      className: "".concat(
                        g
                          ? "footer-widget mb-30 ml-145"
                          : "footer-widget mb-30 ml-75"
                      ),
                    },
                    s.a.createElement(
                      "div",
                      { className: "footer-title" },
                      s.a.createElement("h3", null, "Panchanag")
                    ),
                    s.a.createElement(
                      "div",
                      { className: "footer-list" },
                      s.a.createElement(
                        "ul",
                        null,
                        s.a.createElement(
                          "li",
                          null,
                          s.a.createElement(
                            "ul",
                            { className: "submenu" },
                            s.a.createElement(
                              "li",
                              { className: "" },
                              s.a.createElement(
                                u.c,
                                { to: "/basicPanchang" },
                                "Basic Panchanag"
                              )
                            ),
                            s.a.createElement(
                              "li",
                              { className: "" },
                              s.a.createElement(
                                u.c,
                                { to: "/todayPanchang" },
                                "Today Panchanag"
                              )
                            ),
                            s.a.createElement(
                              "li",
                              { className: "" },
                              s.a.createElement(
                                u.c,
                                { to: "/shubhMuhurat" },
                                "Shubh Muhurat"
                              )
                            ),
                            s.a.createElement(
                              "li",
                              { className: "" },
                              s.a.createElement(
                                u.c,
                                { to: "/todayFestival" },
                                "Today Festival"
                              )
                            )
                          )
                        )
                      )
                    ),
                    s.a.createElement(
                      "div",
                      { className: "footer-title" },
                      s.a.createElement("h3", null, "Astrologer")
                    ),
                    s.a.createElement(
                      "div",
                      { className: "footer-list" },
                      s.a.createElement(
                        "ul",
                        null,
                        s.a.createElement(
                          "li",
                          null,
                          s.a.createElement(
                            "ul",
                            { className: "submenu" },
                            s.a.createElement(
                              "li",
                              { className: "" },
                              s.a.createElement(
                                u.c,
                                { to: "/pages/login" },
                                "Astrologer Login"
                              )
                            ),
                            s.a.createElement(
                              "li",
                              { className: "" },
                              s.a.createElement(
                                u.c,
                                { to: "/astrologersignup" },
                                "Astrologer Register"
                              )
                            )
                          )
                        )
                      )
                    )
                  )
                ),
                s.a.createElement(
                  "div",
                  {
                    className: "".concat(
                      g ? "col-xl-2 col-sm-4" : "col-lg-2 col-sm-4"
                    ),
                  },
                  s.a.createElement(
                    "div",
                    {
                      className: "".concat(
                        g
                          ? "footer-widget mb-30 ml-95"
                          : "footer-widget mb-30 ml-50"
                      ),
                    },
                    s.a.createElement(
                      "div",
                      { className: "footer-title" },
                      s.a.createElement("h3", null, "Useful Links")
                    ),
                    s.a.createElement(
                      "div",
                      { className: "footer-list" },
                      s.a.createElement(
                        "ul",
                        null,
                        s.a.createElement(
                          "li",
                          null,
                          s.a.createElement(
                            "li",
                            null,
                            s.a.createElement(
                              u.c,
                              { to: "/ourservice" },
                              "Our Services"
                            )
                          ),
                          s.a.createElement(
                            "li",
                            null,
                            s.a.createElement(
                              u.c,
                              { to: "/freekundli" },
                              "Free Kundli"
                            )
                          ),
                          s.a.createElement(
                            "li",
                            null,
                            s.a.createElement(
                              u.c,
                              { to: "/kundaliform" },
                              "Match Making"
                            )
                          ),
                          s.a.createElement(
                            "li",
                            null,
                            s.a.createElement(
                              u.c,
                              { to: "/blog-standard" },
                              "Blog"
                            )
                          ),
                          s.a.createElement(
                            "li",
                            null,
                            s.a.createElement(
                              u.c,
                              { to: "/aboutdetail" },
                              "About us"
                            )
                          ),
                          s.a.createElement(
                            "li",
                            null,
                            s.a.createElement(
                              u.c,
                              { to: "/contact" },
                              "Contact"
                            )
                          ),
                          s.a.createElement(
                            "li",
                            null,
                            s.a.createElement(u.c, { to: "#/" })
                          ),
                          s.a.createElement(
                            u.c,
                            { to: "/TermsOfUse" },
                            "Terms of Use"
                          )
                        ),
                        s.a.createElement(
                          "li",
                          null,
                          s.a.createElement(
                            u.c,
                            { to: "/privacyPolicy" },
                            "Privacy Policy"
                          )
                        ),
                        s.a.createElement(
                          "li",
                          null,
                          s.a.createElement(u.c, { to: "/Faq" }, "FAQs")
                        )
                      )
                    )
                  )
                ),
                s.a.createElement(
                  "div",
                  {
                    className: "".concat(
                      g ? "col-xl-2 col-sm-8" : "col-lg-2 col-sm-6"
                    ),
                  },
                  s.a.createElement(C, {
                    spaceBottomClass: "mb-30",
                    spaceLeftClass: "ml-70",
                    sideMenu: g,
                  })
                )
              )
            ),
            s.a.createElement(
              "button",
              {
                className: "scroll-top ".concat(v > k ? "show" : ""),
                onClick: function () {
                  S.animateScroll.scrollToTop();
                },
              },
              s.a.createElement("i", { className: "fa fa-angle-double-up" })
            )
          );
        };
      t.a = function (e) {
        var t = e.children,
          a = e.headerContainerClass,
          o = e.headerTop,
          u = e.headerPaddingClass,
          r = e.headerPositionClass;
        return s.a.createElement(
          i.Fragment,
          null,
          s.a.createElement(N, {
            layout: a,
            top: o,
            headerPaddingClass: u,
            headerPositionClass: r,
          }),
          t,
          s.a.createElement(L, {
            backgroundColorClass: "bg-gray",
            spaceTopClass: "pt-100",
            spaceBottomClass: "pb-70",
          })
        );
      };
    },
    205: function (e, t) {
      e.exports =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAAAPAQMAAADgX9AdAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAZQTFRFAAAA/8wBC7cl9gAAAAJ0Uk5TAP9bkSK1AAAA60lEQVR4nHVRQUoEMRDsECGXxX7C+ISRvU8e4xP2OpKAV//gI7xrZEEvq/uEDfgAA3twxJgym5lRCWsRQqjqKqoJ0QQNNz8lIlUQKNzZSZmErWSFaCyJqPOVNHwl8w2uPMnHC0fqAR9h5hdj9rVA6Enut446hj0f01u6LI3UJujYWHn77MSgIy9LuryjLxRsAkMF+f7m2CPwcmTvZ/dLKz59EslYo3Z2sZrdp1PzQF2vEfPpeuKpefuzd8jl1xgarHNtrvc+TOyT9MqZ7RHtgM7ASaT+uEr8BCK8hn/k7CQyv19TwwxETfrLfANeyHa8/RmhxQAAAABJRU5ErkJggg==";
    },
    312: function (e) {
      e.exports = JSON.parse(
        '[{"id":"1","sku":"asdf123","name":"Lorem ipsum jacket","price":12.45,"discount":10,"offerEnd":"October 5, 2020 12:11:00","new":false,"rating":4,"saleCount":54,"category":["fashion","men"],"tag":["fashion","men","jacket","full sleeve"],"variation":[{"color":"white","image":"/assets/img/product/fashion/men.jpg","size":[{"name":"x","stock":3},{"name":"m","stock":2},{"name":"xl","stock":5}]},{"color":"black","image":"/assets/img/product/fashion/women.jpg","size":[{"name":"x","stock":4},{"name":"m","stock":7},{"name":"xl","stock":9},{"name":"xxl","stock":1}]},{"color":"brown","image":"/assets/img/product/fashion/kid.jpg","size":[{"name":"x","stock":1},{"name":"m","stock":2},{"name":"xl","stock":4},{"name":"xxl","stock":0}]}],"image":["/assets/img/product/fashion/men.jpg","/assets/img/product/fashion/women.jpg","/assets/img/product/fashion/kid.jpg","/assets/img/product/fashion/men.jpg","/assets/img/product/fashion/women.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"},{"id":"2","sku":"asdf124","name":"Lorem ipsum coat","price":18.5,"discount":15,"new":false,"rating":3,"saleCount":12,"category":["fashion","women"],"tag":["fashion","women","coat","full sleeve"],"variation":[{"color":"blue","image":"/assets/img/product/fashion/women.jpg","size":[{"name":"x","stock":3},{"name":"m","stock":6},{"name":"xl","stock":7}]},{"color":"brown","image":"/assets/img/product/fashion/men.jpg","size":[{"name":"x","stock":4},{"name":"m","stock":8},{"name":"xl","stock":3},{"name":"xxl","stock":7}]},{"color":"black","image":"/assets/img/product/fashion/kid.jpg","size":[{"name":"x","stock":3},{"name":"m","stock":7},{"name":"xl","stock":0},{"name":"xxl","stock":7}]}],"image":["/assets/img/product/fashion/women.jpg","/assets/img/product/fashion/men.jpg","/assets/img/product/fashion/kid.jpg","/assets/img/product/fashion/women.jpg","/assets/img/product/fashion/men.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"},{"id":"3","sku":"asdf125","name":"Lorem ipsum jacket","price":17.45,"discount":40,"offerEnd":"October 2, 2020 12:11:00","new":true,"rating":5,"saleCount":36,"category":["fashion","men"],"tag":["fashion","men","jacket","full sleeve"],"variation":[{"color":"white","image":"/assets/img/product/fashion/kid.jpg","size":[{"name":"x","stock":3},{"name":"m","stock":2},{"name":"xl","stock":5}]},{"color":"black","image":"/assets/img/product/fashion/women.jpg","size":[{"name":"x","stock":4},{"name":"m","stock":7},{"name":"xl","stock":9},{"name":"xxl","stock":1}]},{"color":"brown","image":"/assets/img/product/fashion/men.jpg","size":[{"name":"x","stock":1},{"name":"m","stock":2},{"name":"xl","stock":4},{"name":"xxl","stock":0}]}],"image":["/assets/img/product/fashion/kid.jpg","/assets/img/product/fashion/women.jpg","/assets/img/product/fashion/men.jpg","/assets/img/product/fashion/kid.jpg","/assets/img/product/fashion/men.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"},{"id":"4","sku":"asdf126","name":"Lorem ipsum fashion coat","price":15.5,"discount":0,"new":true,"rating":4,"saleCount":20,"category":["fashion","women"],"tag":["fashion","women","coat","full sleeve"],"variation":[{"color":"blue","image":"/assets/img/product/fashion/women.jpg","size":[{"name":"x","stock":3},{"name":"m","stock":6},{"name":"xl","stock":7}]},{"color":"brown","image":"/assets/img/product/fashion/kid.jpg","size":[{"name":"x","stock":4},{"name":"m","stock":8},{"name":"xl","stock":3},{"name":"xxl","stock":7}]},{"color":"black","image":"/assets/img/product/fashion/men.jpg","size":[{"name":"x","stock":3},{"name":"m","stock":7},{"name":"xl","stock":0},{"name":"xxl","stock":7}]}],"image":["/assets/img/product/fashion/women.jpg","/assets/img/product/fashion/kid.jpg","/assets/img/product/fashion/men.jpg","/assets/img/product/fashion/women.jpg","/assets/img/product/fashion/kid.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"},{"id":"5","sku":"asdf127","name":"Lorem ipsum female coat","price":25.5,"discount":10,"new":true,"rating":5,"saleCount":25,"category":["fashion","women"],"tag":["fashion","women","coat","full sleeve"],"variation":[{"color":"blue","image":"/assets/img/product/fashion/men.jpg","size":[{"name":"x","stock":3},{"name":"m","stock":6},{"name":"xl","stock":7}]},{"color":"brown","image":"/assets/img/product/fashion/women.jpg","size":[{"name":"x","stock":4},{"name":"m","stock":8},{"name":"xl","stock":3},{"name":"xxl","stock":7}]},{"color":"black","image":"/assets/img/product/fashion/kid.jpg","size":[{"name":"x","stock":3},{"name":"m","stock":7},{"name":"xl","stock":0},{"name":"xxl","stock":7}]}],"image":["/assets/img/product/fashion/5.jpg","/assets/img/product/fashion/2.jpg","/assets/img/product/fashion/4.jpg","/assets/img/product/fashion/7.jpg","/assets/img/product/fashion/9.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"},{"id":"6","sku":"asdf128","name":"Lorem ipsum jacket","price":19.85,"discount":0,"offerEnd":"October 17, 2020 12:11:00","new":true,"rating":5,"saleCount":65,"category":["fashion","men"],"tag":["fashion","men","jacket","full sleeve"],"variation":[{"color":"white","image":"/assets/img/product/fashion/1.jpg","size":[{"name":"x","stock":3},{"name":"m","stock":2},{"name":"xl","stock":5}]},{"color":"black","image":"/assets/img/product/fashion/8.jpg","size":[{"name":"x","stock":4},{"name":"m","stock":7},{"name":"xl","stock":9},{"name":"xxl","stock":1}]},{"color":"brown","image":"/assets/img/product/fashion/3.jpg","size":[{"name":"x","stock":1},{"name":"m","stock":2},{"name":"xl","stock":4},{"name":"xxl","stock":0}]}],"image":["/assets/img/product/fashion/6.jpg","/assets/img/product/fashion/3.jpg","/assets/img/product/fashion/1.jpg","/assets/img/product/fashion/8.jpg","/assets/img/product/fashion/9.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"},{"id":"7","sku":"asdf129","name":"Lorem ipsum fashion female coat","price":55.5,"discount":40,"new":true,"rating":5,"saleCount":55,"category":["fashion","women"],"tag":["fashion","women","coat","full sleeve"],"variation":[{"color":"blue","image":"/assets/img/product/fashion/2.jpg","size":[{"name":"x","stock":3},{"name":"m","stock":6},{"name":"xl","stock":7}]},{"color":"brown","image":"/assets/img/product/fashion/4.jpg","size":[{"name":"x","stock":4},{"name":"m","stock":8},{"name":"xl","stock":3},{"name":"xxl","stock":7}]},{"color":"black","image":"/assets/img/product/fashion/5.jpg","size":[{"name":"x","stock":3},{"name":"m","stock":7},{"name":"xl","stock":0},{"name":"xxl","stock":7}]}],"image":["/assets/img/product/fashion/7.jpg","/assets/img/product/fashion/5.jpg","/assets/img/product/fashion/2.jpg","/assets/img/product/fashion/4.jpg","/assets/img/product/fashion/9.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"},{"id":"8","sku":"asdf130","name":"Lorem ipsum fashion jacket","price":29.85,"discount":10,"offerEnd":"October 18, 2020 12:11:00","new":false,"rating":5,"saleCount":83,"category":["fashion","men"],"tag":["fashion","men","jacket","full sleeve"],"stock":0,"image":["/assets/img/product/fashion/8.jpg","/assets/img/product/fashion/6.jpg","/assets/img/product/fashion/3.jpg","/assets/img/product/fashion/1.jpg","/assets/img/product/fashion/9.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"},{"id":"9","sku":"asdf131","name":"Lorem ipsum fashion female top","price":35.6,"discount":0,"new":false,"rating":4,"saleCount":95,"category":["fashion","women"],"tag":["fashion","women","top","sleeveless"],"stock":5,"affiliateLink":"//www.amazon.com","image":["/assets/img/product/fashion/9.jpg","/assets/img/product/fashion/7.jpg","/assets/img/product/fashion/5.jpg","/assets/img/product/fashion/2.jpg","/assets/img/product/fashion/4.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"10","sku":"asdf132","name":"Lorem ipsum blender","price":15.6,"discount":0,"new":false,"rating":4,"saleCount":90,"category":["electronics"],"tag":["electronics"],"stock":15,"image":["/assets/img/product/electronics/1.jpg","/assets/img/product/electronics/2.jpg","/assets/img/product/electronics/3.jpg","/assets/img/product/electronics/4.jpg","/assets/img/product/electronics/5.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"11","sku":"asdf133","name":"Lorem ipsum speaker","price":10.6,"discount":10,"new":true,"rating":5,"saleCount":190,"category":["electronics"],"tag":["electronics"],"stock":25,"image":["/assets/img/product/electronics/2.jpg","/assets/img/product/electronics/3.jpg","/assets/img/product/electronics/4.jpg","/assets/img/product/electronics/5.jpg","/assets/img/product/electronics/6.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"12","sku":"asdf134","name":"Lorem ipsum camera","price":12.5,"discount":20,"new":true,"rating":3,"saleCount":90,"category":["electronics"],"tag":["electronics"],"stock":20,"image":["/assets/img/product/electronics/3.jpg","/assets/img/product/electronics/4.jpg","/assets/img/product/electronics/5.jpg","/assets/img/product/electronics/6.jpg","/assets/img/product/electronics/7.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"13","sku":"asdf135","name":"Lorem ipsum monitor","price":14.5,"discount":30,"new":false,"rating":4,"saleCount":100,"category":["electronics"],"tag":["electronics"],"stock":40,"image":["/assets/img/product/electronics/4.jpg","/assets/img/product/electronics/5.jpg","/assets/img/product/electronics/6.jpg","/assets/img/product/electronics/7.jpg","/assets/img/product/electronics/8.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"14","sku":"asdf136","name":"Lorem ipsum small speaker","price":2.5,"discount":10,"new":true,"rating":5,"saleCount":120,"category":["electronics"],"tag":["electronics"],"stock":45,"image":["/assets/img/product/electronics/5.jpg","/assets/img/product/electronics/6.jpg","/assets/img/product/electronics/7.jpg","/assets/img/product/electronics/8.jpg","/assets/img/product/electronics/1.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"15","sku":"asdf137","name":"Lorem ipsum microphone","price":12.5,"discount":0,"new":false,"rating":4,"saleCount":20,"category":["electronics"],"tag":["electronics"],"stock":5,"image":["/assets/img/product/electronics/6.jpg","/assets/img/product/electronics/7.jpg","/assets/img/product/electronics/8.jpg","/assets/img/product/electronics/1.jpg","/assets/img/product/electronics/2.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"16","sku":"asdf138","name":"Lorem ipsum grinder","price":22.5,"discount":20,"new":true,"rating":5,"saleCount":25,"category":["electronics"],"tag":["electronics"],"stock":7,"image":["/assets/img/product/electronics/7.jpg","/assets/img/product/electronics/8.jpg","/assets/img/product/electronics/1.jpg","/assets/img/product/electronics/2.jpg","/assets/img/product/electronics/3.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"17","sku":"asdf139","name":"Lorem ipsum bluetooth","price":32.5,"discount":10,"new":true,"rating":4,"saleCount":15,"category":["electronics"],"tag":["electronics"],"stock":6,"image":["/assets/img/product/electronics/8.jpg","/assets/img/product/electronics/1.jpg","/assets/img/product/electronics/2.jpg","/assets/img/product/electronics/3.jpg","/assets/img/product/electronics/4.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"18","sku":"asdf140","name":"Lorem ipsum chair one","price":15.6,"discount":0,"new":false,"rating":4,"saleCount":90,"category":["furniture"],"tag":["furniture"],"stock":15,"image":["/assets/img/product/furnitures/1.jpg","/assets/img/product/furnitures/2.jpg","/assets/img/product/furnitures/3.jpg","/assets/img/product/furnitures/4.jpg","/assets/img/product/furnitures/5.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"19","sku":"asdf141","name":"Lorem ipsum chair two","price":10.6,"discount":10,"new":true,"rating":5,"saleCount":190,"category":["furniture"],"tag":["furniture"],"stock":25,"image":["/assets/img/product/furnitures/2.jpg","/assets/img/product/furnitures/3.jpg","/assets/img/product/furnitures/4.jpg","/assets/img/product/furnitures/5.jpg","/assets/img/product/furnitures/6.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"20","sku":"asdf142","name":"Lorem ipsum chair three","price":12.5,"discount":20,"new":true,"rating":3,"saleCount":90,"category":["furniture"],"tag":["furniture"],"stock":20,"image":["/assets/img/product/furnitures/3.jpg","/assets/img/product/furnitures/4.jpg","/assets/img/product/furnitures/5.jpg","/assets/img/product/furnitures/6.jpg","/assets/img/product/furnitures/7.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"21","sku":"asdf143","name":"Lorem ipsum sofa one","price":14.5,"discount":30,"new":false,"rating":4,"saleCount":100,"category":["furniture"],"tag":["furniture"],"stock":40,"image":["/assets/img/product/furnitures/4.jpg","/assets/img/product/furnitures/5.jpg","/assets/img/product/furnitures/6.jpg","/assets/img/product/furnitures/7.jpg","/assets/img/product/furnitures/8.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"22","sku":"asdf144","name":"Lorem ipsum sofa two","price":22.5,"discount":10,"new":true,"rating":5,"saleCount":120,"category":["furniture"],"tag":["furniture"],"stock":45,"image":["/assets/img/product/furnitures/5.jpg","/assets/img/product/furnitures/6.jpg","/assets/img/product/furnitures/7.jpg","/assets/img/product/furnitures/8.jpg","/assets/img/product/furnitures/1.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"23","sku":"asdf145","name":"Lorem ipsum sofa three","price":12.5,"discount":0,"new":false,"rating":4,"saleCount":20,"category":["furniture"],"tag":["furniture"],"stock":5,"image":["/assets/img/product/furnitures/6.jpg","/assets/img/product/furnitures/7.jpg","/assets/img/product/furnitures/8.jpg","/assets/img/product/furnitures/1.jpg","/assets/img/product/furnitures/2.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"24","sku":"asdf146","name":"Lorem ipsum sofa four","price":22.5,"discount":20,"new":true,"rating":5,"saleCount":25,"category":["furniture"],"tag":["furniture"],"stock":7,"image":["/assets/img/product/furnitures/7.jpg","/assets/img/product/furnitures/8.jpg","/assets/img/product/furnitures/1.jpg","/assets/img/product/furnitures/2.jpg","/assets/img/product/furnitures/3.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"25","sku":"asdf147","name":"Lorem ipsum sofa five","price":32.5,"discount":10,"new":true,"rating":4,"saleCount":15,"category":["furniture"],"tag":["furniture"],"stock":6,"image":["/assets/img/product/furnitures/8.jpg","/assets/img/product/furnitures/1.jpg","/assets/img/product/furnitures/2.jpg","/assets/img/product/furnitures/3.jpg","/assets/img/product/furnitures/4.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"26","sku":"asdf148","name":"Lorem ipsum plant one","price":15.6,"discount":0,"new":false,"rating":4,"saleCount":90,"category":["plant"],"tag":["plant"],"stock":15,"image":["/assets/img/product/plants/1.jpg","/assets/img/product/plants/2.jpg","/assets/img/product/plants/3.jpg","/assets/img/product/plants/4.jpg","/assets/img/product/plants/5.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"27","sku":"asdf149","name":"Lorem ipsum plant two","price":10.6,"discount":10,"new":true,"rating":5,"saleCount":190,"category":["plant"],"tag":["plant"],"stock":25,"image":["/assets/img/product/plants/2.jpg","/assets/img/product/plants/3.jpg","/assets/img/product/plants/4.jpg","/assets/img/product/plants/5.jpg","/assets/img/product/plants/6.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"28","sku":"asdf150","name":"Lorem ipsum plant three","price":12.5,"discount":20,"new":true,"rating":3,"saleCount":90,"category":["plant"],"tag":["plant"],"stock":20,"image":["/assets/img/product/plants/3.jpg","/assets/img/product/plants/4.jpg","/assets/img/product/plants/5.jpg","/assets/img/product/plants/6.jpg","/assets/img/product/plants/7.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"29","sku":"asdf151","name":"Lorem ipsum plant four","price":14.5,"discount":30,"new":false,"rating":4,"saleCount":100,"category":["plant"],"tag":["plant"],"stock":40,"image":["/assets/img/product/plants/4.jpg","/assets/img/product/plants/5.jpg","/assets/img/product/plants/6.jpg","/assets/img/product/plants/7.jpg","/assets/img/product/plants/8.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"30","sku":"asdf152","name":"Lorem ipsum plant five","price":22.5,"discount":10,"new":true,"rating":5,"saleCount":120,"category":["plant"],"tag":["plant"],"stock":45,"image":["/assets/img/product/plants/5.jpg","/assets/img/product/plants/6.jpg","/assets/img/product/plants/7.jpg","/assets/img/product/plants/8.jpg","/assets/img/product/plants/1.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"31","sku":"asdf153","name":"Lorem ipsum plant six","price":12.5,"discount":0,"new":false,"rating":4,"saleCount":20,"category":["plant"],"tag":["plant"],"stock":5,"image":["/assets/img/product/plants/6.jpg","/assets/img/product/plants/7.jpg","/assets/img/product/plants/8.jpg","/assets/img/product/plants/1.jpg","/assets/img/product/plants/2.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"32","sku":"asdf154","name":"Lorem ipsum plant seven","price":22.5,"discount":20,"new":true,"rating":5,"saleCount":25,"category":["plant"],"tag":["plant"],"stock":7,"image":["/assets/img/product/plants/7.jpg","/assets/img/product/plants/8.jpg","/assets/img/product/plants/1.jpg","/assets/img/product/plants/2.jpg","/assets/img/product/plants/3.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"33","sku":"asdf155","name":"Lorem ipsum plant eight","price":32.5,"discount":10,"new":true,"rating":4,"saleCount":15,"category":["plant"],"tag":["plant"],"stock":6,"image":["/assets/img/product/plants/8.jpg","/assets/img/product/plants/1.jpg","/assets/img/product/plants/2.jpg","/assets/img/product/plants/3.jpg","/assets/img/product/plants/4.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"34","sku":"asdf156","name":"Lorem ipsum fruit one","price":15.6,"discount":0,"new":false,"rating":4,"saleCount":90,"category":["organic food"],"tag":["organic food"],"stock":15,"image":["/assets/img/product/fruits/1.jpg","/assets/img/product/fruits/2.jpg","/assets/img/product/fruits/3.jpg","/assets/img/product/fruits/4.jpg","/assets/img/product/fruits/5.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"35","sku":"asdf157","name":"Lorem ipsum fruit two","price":10.6,"discount":10,"new":true,"rating":5,"saleCount":190,"category":["organic food"],"tag":["organic food"],"stock":25,"image":["/assets/img/product/fruits/2.jpg","/assets/img/product/fruits/3.jpg","/assets/img/product/fruits/4.jpg","/assets/img/product/fruits/5.jpg","/assets/img/product/fruits/6.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"36","sku":"asdf158","name":"Lorem ipsum fruit three","price":12.5,"discount":20,"new":true,"rating":3,"saleCount":90,"category":["organic food"],"tag":["organic food"],"stock":20,"image":["/assets/img/product/fruits/3.jpg","/assets/img/product/fruits/4.jpg","/assets/img/product/fruits/5.jpg","/assets/img/product/fruits/6.jpg","/assets/img/product/fruits/7.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"37","sku":"asdf159","name":"Lorem ipsum fruit four","price":14.5,"discount":30,"new":false,"rating":4,"saleCount":100,"category":["organic food"],"tag":["organic food"],"stock":40,"image":["/assets/img/product/fruits/4.jpg","/assets/img/product/fruits/5.jpg","/assets/img/product/fruits/6.jpg","/assets/img/product/fruits/7.jpg","/assets/img/product/fruits/8.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"38","sku":"asdf160","name":"Lorem ipsum fruit five","price":22.5,"discount":10,"new":true,"rating":5,"saleCount":120,"category":["organic food"],"tag":["organic food"],"stock":45,"image":["/assets/img/product/fruits/5.jpg","/assets/img/product/fruits/6.jpg","/assets/img/product/fruits/7.jpg","/assets/img/product/fruits/8.jpg","/assets/img/product/fruits/1.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"39","sku":"asdf161","name":"Lorem ipsum fruit six","price":12.5,"discount":0,"new":false,"rating":4,"saleCount":20,"category":["organic food"],"tag":["organic food"],"stock":5,"image":["/assets/img/product/fruits/6.jpg","/assets/img/product/fruits/7.jpg","/assets/img/product/fruits/8.jpg","/assets/img/product/fruits/1.jpg","/assets/img/product/fruits/2.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"40","sku":"asdf162","name":"Lorem ipsum fruit seven","price":22.5,"discount":20,"new":true,"rating":5,"saleCount":25,"category":["organic food"],"tag":["organic food"],"stock":7,"image":["/assets/img/product/fruits/7.jpg","/assets/img/product/fruits/8.jpg","/assets/img/product/fruits/1.jpg","/assets/img/product/fruits/2.jpg","/assets/img/product/fruits/3.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"41","sku":"asdf163","name":"Lorem ipsum fruit eight","price":32.5,"discount":10,"new":true,"rating":4,"saleCount":15,"category":["organic food"],"tag":["organic food"],"stock":6,"image":["/assets/img/product/fruits/8.jpg","/assets/img/product/fruits/1.jpg","/assets/img/product/fruits/2.jpg","/assets/img/product/fruits/3.jpg","/assets/img/product/fruits/4.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"42","sku":"asdf164","name":"Lorem ipsum lamp","price":12.5,"discount":20,"new":true,"rating":4,"saleCount":15,"category":["electronics"],"tag":["electronics"],"stock":7,"image":["/assets/img/product/electronics/9.jpg","/assets/img/product/electronics/10.jpg","/assets/img/product/electronics/1.jpg","/assets/img/product/electronics/2.jpg","/assets/img/product/electronics/3.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"43","sku":"asdf165","name":"Lorem ipsum headphone","price":16.5,"discount":10,"new":false,"rating":5,"saleCount":5,"category":["electronics"],"tag":["electronics"],"stock":6,"image":["/assets/img/product/electronics/10.jpg","/assets/img/product/electronics/1.jpg","/assets/img/product/electronics/2.jpg","/assets/img/product/electronics/3.jpg","/assets/img/product/electronics/4.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"44","sku":"asdf166","name":"Lorem ipsum flower one","price":1.5,"discount":20,"new":true,"rating":4,"saleCount":10,"category":["flower"],"tag":["flower"],"stock":6,"image":["/assets/img/product/flowers/1.jpg","/assets/img/product/flowers/2.jpg","/assets/img/product/flowers/3.jpg","/assets/img/product/flowers/4.jpg","/assets/img/product/flowers/5.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"45","sku":"asdf167","name":"Lorem ipsum flower two","price":6.5,"discount":30,"new":false,"rating":5,"saleCount":5,"category":["flower"],"tag":["flower"],"stock":7,"image":["/assets/img/product/flowers/2.jpg","/assets/img/product/flowers/3.jpg","/assets/img/product/flowers/4.jpg","/assets/img/product/flowers/5.jpg","/assets/img/product/flowers/6.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"46","sku":"asdf168","name":"Lorem ipsum flower three","price":3.5,"discount":5,"new":true,"rating":4,"saleCount":7,"category":["flower"],"tag":["flower"],"stock":10,"image":["/assets/img/product/flowers/3.jpg","/assets/img/product/flowers/4.jpg","/assets/img/product/flowers/5.jpg","/assets/img/product/flowers/6.jpg","/assets/img/product/flowers/7.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"47","sku":"asdf169","name":"Lorem ipsum flower four","price":4.5,"discount":20,"new":true,"rating":5,"saleCount":10,"category":["flower"],"tag":["flower"],"stock":6,"image":["/assets/img/product/flowers/4.jpg","/assets/img/product/flowers/5.jpg","/assets/img/product/flowers/6.jpg","/assets/img/product/flowers/7.jpg","/assets/img/product/flowers/8.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"48","sku":"asdf170","name":"Lorem ipsum flower five","price":7.5,"discount":30,"new":true,"rating":3,"saleCount":4,"category":["flower"],"tag":["flower"],"stock":7,"image":["/assets/img/product/flowers/5.jpg","/assets/img/product/flowers/6.jpg","/assets/img/product/flowers/7.jpg","/assets/img/product/flowers/8.jpg","/assets/img/product/flowers/1.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"49","sku":"asdf171","name":"Lorem ipsum flower six","price":4.5,"discount":10,"new":false,"rating":5,"saleCount":2,"category":["flower"],"tag":["flower"],"stock":10,"image":["/assets/img/product/flowers/6.jpg","/assets/img/product/flowers/7.jpg","/assets/img/product/flowers/8.jpg","/assets/img/product/flowers/1.jpg","/assets/img/product/flowers/2.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"50","sku":"asdf172","name":"Lorem ipsum flower seven","price":3.5,"discount":20,"new":true,"rating":5,"saleCount":5,"category":["flower"],"tag":["flower"],"stock":6,"image":["/assets/img/product/flowers/7.jpg","/assets/img/product/flowers/8.jpg","/assets/img/product/flowers/1.jpg","/assets/img/product/flowers/2.jpg","/assets/img/product/flowers/3.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"51","sku":"asdf173","name":"Lorem ipsum flower eight","price":2.5,"discount":30,"new":true,"rating":5,"saleCount":9,"category":["flower"],"tag":["flower"],"stock":10,"image":["/assets/img/product/flowers/8.jpg","/assets/img/product/flowers/1.jpg","/assets/img/product/flowers/2.jpg","/assets/img/product/flowers/3.jpg","/assets/img/product/flowers/4.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"52","sku":"asdf174","name":"Lorem ipsum book one","price":6.5,"discount":30,"new":true,"rating":5,"saleCount":10,"category":["book"],"tag":["book"],"stock":20,"image":["/assets/img/product/books/1.jpg","/assets/img/product/books/2.jpg","/assets/img/product/books/3.jpg","/assets/img/product/books/4.jpg","/assets/img/product/books/5.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"53","sku":"asdf175","name":"Lorem ipsum book two","price":4.2,"discount":0,"new":true,"rating":5,"saleCount":10,"category":["book"],"tag":["book"],"stock":20,"image":["/assets/img/product/books/2.jpg","/assets/img/product/books/3.jpg","/assets/img/product/books/4.jpg","/assets/img/product/books/5.jpg","/assets/img/product/books/6.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"54","sku":"asdf176","name":"Lorem ipsum book three","price":6.6,"discount":20,"new":true,"rating":3,"saleCount":11,"category":["book"],"tag":["book"],"stock":20,"image":["/assets/img/product/books/3.jpg","/assets/img/product/books/4.jpg","/assets/img/product/books/5.jpg","/assets/img/product/books/6.jpg","/assets/img/product/books/7.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"55","sku":"asdf177","name":"Lorem ipsum book four","price":7.1,"discount":40,"new":true,"rating":4,"saleCount":19,"category":["book"],"tag":["book"],"stock":40,"image":["/assets/img/product/books/4.jpg","/assets/img/product/books/5.jpg","/assets/img/product/books/6.jpg","/assets/img/product/books/7.jpg","/assets/img/product/books/8.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"56","sku":"asdf178","name":"Lorem ipsum book five","price":8.6,"discount":30,"new":false,"rating":4,"saleCount":12,"category":["book"],"tag":["book"],"stock":8,"image":["/assets/img/product/books/5.jpg","/assets/img/product/books/6.jpg","/assets/img/product/books/7.jpg","/assets/img/product/books/8.jpg","/assets/img/product/books/1.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"57","sku":"asdf179","name":"Lorem ipsum book six","price":5.5,"discount":10,"new":true,"rating":4,"saleCount":19,"category":["book"],"tag":["book"],"stock":20,"image":["/assets/img/product/books/6.jpg","/assets/img/product/books/7.jpg","/assets/img/product/books/8.jpg","/assets/img/product/books/1.jpg","/assets/img/product/books/2.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"58","sku":"asdf180","name":"Lorem ipsum book seven","price":3.2,"discount":20,"new":false,"rating":2,"saleCount":9,"category":["book"],"tag":["book"],"stock":11,"image":["/assets/img/product/books/7.jpg","/assets/img/product/books/8.jpg","/assets/img/product/books/1.jpg","/assets/img/product/books/2.jpg","/assets/img/product/books/3.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"59","sku":"asdf181","name":"Lorem ipsum book eight","price":8.5,"discount":5,"new":true,"rating":3,"saleCount":19,"category":["book"],"tag":["book"],"stock":30,"image":["/assets/img/product/books/8.jpg","/assets/img/product/books/1.jpg","/assets/img/product/books/2.jpg","/assets/img/product/books/3.jpg","/assets/img/product/books/4.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"60","sku":"asdf182","name":"Lorem ipsum cosmetics one","price":3.5,"discount":10,"new":true,"rating":3,"saleCount":20,"category":["cosmetics"],"tag":["cosmetics"],"stock":20,"image":["/assets/img/product/cosmetics/1.jpg","/assets/img/product/cosmetics/2.jpg","/assets/img/product/cosmetics/3.jpg","/assets/img/product/cosmetics/4.jpg","/assets/img/product/cosmetics/5.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"61","sku":"asdf183","name":"Lorem ipsum cosmetics two","price":18.5,"discount":15,"new":false,"rating":5,"saleCount":9,"category":["cosmetics"],"tag":["cosmetics"],"stock":20,"image":["/assets/img/product/cosmetics/2.jpg","/assets/img/product/cosmetics/3.jpg","/assets/img/product/cosmetics/4.jpg","/assets/img/product/cosmetics/5.jpg","/assets/img/product/cosmetics/6.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"62","sku":"asdf184","name":"Lorem ipsum cosmetics three","price":4.2,"discount":15,"new":true,"rating":5,"saleCount":29,"category":["cosmetics"],"tag":["cosmetics"],"stock":20,"image":["/assets/img/product/cosmetics/3.jpg","/assets/img/product/cosmetics/4.jpg","/assets/img/product/cosmetics/5.jpg","/assets/img/product/cosmetics/6.jpg","/assets/img/product/cosmetics/7.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"63","sku":"asdf185","name":"Lorem ipsum cosmetics four","price":1.5,"discount":0,"new":false,"rating":4,"saleCount":20,"category":["cosmetics"],"tag":["cosmetics"],"stock":10,"image":["/assets/img/product/cosmetics/4.jpg","/assets/img/product/cosmetics/5.jpg","/assets/img/product/cosmetics/6.jpg","/assets/img/product/cosmetics/7.jpg","/assets/img/product/cosmetics/8.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"64","sku":"asdf186","name":"Lorem ipsum cosmetics five","price":6.3,"discount":15,"new":true,"rating":5,"saleCount":20,"category":["cosmetics"],"tag":["cosmetics"],"stock":20,"image":["/assets/img/product/cosmetics/5.jpg","/assets/img/product/cosmetics/6.jpg","/assets/img/product/cosmetics/7.jpg","/assets/img/product/cosmetics/8.jpg","/assets/img/product/cosmetics/1.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"65","sku":"asdf187","name":"Lorem ipsum cosmetics six","price":4.5,"discount":20,"new":false,"rating":2,"saleCount":29,"category":["cosmetics"],"tag":["cosmetics"],"stock":20,"image":["/assets/img/product/cosmetics/6.jpg","/assets/img/product/cosmetics/7.jpg","/assets/img/product/cosmetics/8.jpg","/assets/img/product/cosmetics/1.jpg","/assets/img/product/cosmetics/2.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"66","sku":"asdf188","name":"Lorem ipsum cosmetics seven","price":7.1,"discount":45,"new":true,"rating":4,"saleCount":10,"category":["cosmetics"],"tag":["cosmetics"],"stock":20,"image":["/assets/img/product/cosmetics/7.jpg","/assets/img/product/cosmetics/8.jpg","/assets/img/product/cosmetics/1.jpg","/assets/img/product/cosmetics/2.jpg","/assets/img/product/cosmetics/3.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"67","sku":"asdf189","name":"Lorem ipsum cosmetics eight","price":9,"discount":10,"new":false,"rating":4,"saleCount":29,"category":["cosmetics"],"tag":["cosmetics"],"stock":20,"image":["/assets/img/product/cosmetics/8.jpg","/assets/img/product/cosmetics/1.jpg","/assets/img/product/cosmetics/2.jpg","/assets/img/product/cosmetics/3.jpg","/assets/img/product/cosmetics/4.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"68","sku":"asdf190","name":"Lorem ipsum accessories one","price":3.1,"discount":10,"new":true,"rating":4,"saleCount":29,"category":["accessories"],"tag":["accessories"],"stock":20,"image":["/assets/img/product/accessories/1.jpg","/assets/img/product/accessories/2.jpg","/assets/img/product/accessories/3.jpg","/assets/img/product/accessories/4.jpg","/assets/img/product/accessories/5.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"69","sku":"asdf191","name":"Lorem ipsum accessories two","price":12.43,"discount":20,"new":false,"rating":5,"saleCount":19,"category":["accessories"],"tag":["accessories"],"stock":30,"image":["/assets/img/product/accessories/2.jpg","/assets/img/product/accessories/3.jpg","/assets/img/product/accessories/4.jpg","/assets/img/product/accessories/5.jpg","/assets/img/product/accessories/6.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"70","sku":"asdf192","name":"Lorem ipsum accessories three","price":12.5,"discount":0,"new":true,"rating":5,"saleCount":30,"category":["accessories"],"tag":["accessories"],"stock":10,"image":["/assets/img/product/accessories/3.jpg","/assets/img/product/accessories/4.jpg","/assets/img/product/accessories/5.jpg","/assets/img/product/accessories/6.jpg","/assets/img/product/accessories/7.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"71","sku":"asdf193","name":"Lorem ipsum accessories four","price":19.33,"discount":20,"new":false,"rating":5,"saleCount":20,"category":["accessories"],"tag":["accessories"],"stock":30,"image":["/assets/img/product/accessories/4.jpg","/assets/img/product/accessories/5.jpg","/assets/img/product/accessories/6.jpg","/assets/img/product/accessories/7.jpg","/assets/img/product/accessories/8.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"72","sku":"asdf194","name":"Lorem ipsum accessories five","price":12.35,"discount":20,"new":true,"rating":5,"saleCount":20,"category":["accessories"],"tag":["accessories"],"stock":10,"image":["/assets/img/product/accessories/5.jpg","/assets/img/product/accessories/6.jpg","/assets/img/product/accessories/7.jpg","/assets/img/product/accessories/8.jpg","/assets/img/product/accessories/9.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"73","sku":"asdf195","name":"Lorem ipsum accessories six","price":12.45,"discount":20,"new":true,"rating":5,"saleCount":19,"category":["accessories"],"tag":["accessories"],"stock":30,"image":["/assets/img/product/accessories/6.jpg","/assets/img/product/accessories/7.jpg","/assets/img/product/accessories/8.jpg","/assets/img/product/accessories/9.jpg","/assets/img/product/accessories/10.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"74","sku":"asdf196","name":"Lorem ipsum accessories seven","price":2.43,"discount":10,"new":true,"rating":5,"saleCount":15,"category":["accessories"],"tag":["accessories"],"stock":10,"image":["/assets/img/product/accessories/7.jpg","/assets/img/product/accessories/8.jpg","/assets/img/product/accessories/9.jpg","/assets/img/product/accessories/10.jpg","/assets/img/product/accessories/11.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"75","sku":"asdf197","name":"Lorem ipsum accessories eight","price":13.4,"discount":30,"new":true,"rating":5,"saleCount":2,"category":["accessories"],"tag":["accessories"],"stock":10,"image":["/assets/img/product/accessories/8.jpg","/assets/img/product/accessories/9.jpg","/assets/img/product/accessories/10.jpg","/assets/img/product/accessories/11.jpg","/assets/img/product/accessories/12.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"76","sku":"asdf198","name":"Lorem ipsum accessories nine","price":5.24,"discount":30,"new":true,"rating":5,"saleCount":34,"category":["accessories"],"tag":["accessories"],"stock":10,"image":["/assets/img/product/accessories/9.jpg","/assets/img/product/accessories/10.jpg","/assets/img/product/accessories/11.jpg","/assets/img/product/accessories/12.jpg","/assets/img/product/accessories/1.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"77","sku":"asdf199","name":"Lorem ipsum accessories ten","price":2.2,"discount":0,"new":true,"rating":5,"saleCount":19,"category":["accessories"],"tag":["accessories"],"stock":30,"image":["/assets/img/product/accessories/10.jpg","/assets/img/product/accessories/11.jpg","/assets/img/product/accessories/12.jpg","/assets/img/product/accessories/1.jpg","/assets/img/product/accessories/2.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"78","sku":"asdf200","name":"Lorem ipsum accessories eleven","price":12.65,"discount":20,"new":true,"rating":4,"saleCount":20,"category":["accessories"],"tag":["accessories"],"stock":23,"image":["/assets/img/product/accessories/11.jpg","/assets/img/product/accessories/12.jpg","/assets/img/product/accessories/1.jpg","/assets/img/product/accessories/2.jpg","/assets/img/product/accessories/3.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"79","sku":"asdf201","name":"Lorem ipsum accessories twelve","price":9.52,"discount":0,"new":true,"rating":5,"saleCount":19,"category":["accessories"],"tag":["accessories"],"stock":10,"image":["/assets/img/product/accessories/12.jpg","/assets/img/product/accessories/1.jpg","/assets/img/product/accessories/2.jpg","/assets/img/product/accessories/3.jpg","/assets/img/product/accessories/4.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"80","sku":"asdf202","name":"Lorem ipsum handmade one","price":19,"discount":10,"new":true,"rating":4,"saleCount":19,"category":["handmade"],"tag":["handmade"],"stock":10,"image":["/assets/img/product/handmade/1.jpg","/assets/img/product/handmade/2.jpg","/assets/img/product/handmade/3.jpg","/assets/img/product/handmade/4.jpg","/assets/img/product/handmade/5.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"81","sku":"asdf203","name":"Lorem ipsum handmade two","price":12,"discount":50,"new":false,"rating":4,"saleCount":15,"category":["handmade"],"tag":["handmade"],"stock":7,"image":["/assets/img/product/handmade/2.jpg","/assets/img/product/handmade/3.jpg","/assets/img/product/handmade/4.jpg","/assets/img/product/handmade/5.jpg","/assets/img/product/handmade/6.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"82","sku":"asdf204","name":"Lorem ipsum handmade three","price":5.52,"discount":10,"new":true,"rating":5,"saleCount":12,"category":["handmade"],"tag":["handmade"],"stock":6,"image":["/assets/img/product/handmade/3.jpg","/assets/img/product/handmade/4.jpg","/assets/img/product/handmade/5.jpg","/assets/img/product/handmade/6.jpg","/assets/img/product/handmade/7.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"83","sku":"asdf205","name":"Lorem ipsum handmade four","price":2.13,"discount":0,"new":true,"rating":3,"saleCount":14,"category":["handmade"],"tag":["handmade"],"stock":12,"image":["/assets/img/product/handmade/4.jpg","/assets/img/product/handmade/5.jpg","/assets/img/product/handmade/6.jpg","/assets/img/product/handmade/7.jpg","/assets/img/product/handmade/8.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"84","sku":"asdf206","name":"Lorem ipsum handmade five","price":12.9,"discount":40,"new":false,"rating":3,"saleCount":13,"category":["handmade"],"tag":["handmade"],"stock":8,"image":["/assets/img/product/handmade/5.jpg","/assets/img/product/handmade/6.jpg","/assets/img/product/handmade/7.jpg","/assets/img/product/handmade/8.jpg","/assets/img/product/handmade/1.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"85","sku":"asdf207","name":"Lorem ipsum handmade six","price":3.78,"discount":20,"new":true,"rating":5,"saleCount":17,"category":["handmade"],"tag":["handmade"],"stock":5,"image":["/assets/img/product/handmade/6.jpg","/assets/img/product/handmade/7.jpg","/assets/img/product/handmade/8.jpg","/assets/img/product/handmade/1.jpg","/assets/img/product/handmade/2.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"86","sku":"asdf208","name":"Lorem ipsum handmade seven","price":2.52,"discount":10,"new":true,"rating":4,"saleCount":18,"category":["handmade"],"tag":["handmade"],"stock":5,"image":["/assets/img/product/handmade/7.jpg","/assets/img/product/handmade/8.jpg","/assets/img/product/handmade/1.jpg","/assets/img/product/handmade/2.jpg","/assets/img/product/handmade/3.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"87","sku":"asdf209","name":"Lorem ipsum handmade eight","price":6.4,"discount":0,"new":true,"rating":5,"saleCount":20,"category":["handmade"],"tag":["handmade"],"stock":10,"image":["/assets/img/product/handmade/8.jpg","/assets/img/product/handmade/1.jpg","/assets/img/product/handmade/2.jpg","/assets/img/product/handmade/3.jpg","/assets/img/product/handmade/4.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"88","sku":"asdf210","name":"Lorem ipsum kids one","price":12.45,"discount":10,"offerEnd":"October 5, 2020 12:11:00","new":false,"rating":4,"saleCount":54,"category":["fashion","kids"],"tag":["fashion","kids"],"variation":[{"color":"white","image":"/assets/img/product/fashion/23.jpg","size":[{"name":"x","stock":3},{"name":"m","stock":2},{"name":"xl","stock":5}]},{"color":"black","image":"/assets/img/product/fashion/24.jpg","size":[{"name":"x","stock":4},{"name":"m","stock":7},{"name":"xl","stock":9},{"name":"xxl","stock":1}]},{"color":"brown","image":"/assets/img/product/fashion/25.jpg","size":[{"name":"x","stock":1},{"name":"m","stock":2},{"name":"xl","stock":4},{"name":"xxl","stock":0}]}],"image":["/assets/img/product/fashion/23.jpg","/assets/img/product/fashion/24.jpg","/assets/img/product/fashion/25.jpg","/assets/img/product/fashion/26.jpg","/assets/img/product/fashion/27.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"},{"id":"89","sku":"asdf211","name":"Lorem ipsum kids two","price":18.5,"discount":15,"new":false,"rating":3,"saleCount":12,"category":["fashion","kids"],"tag":["fashion","kids"],"variation":[{"color":"blue","image":"/assets/img/product/fashion/24.jpg","size":[{"name":"x","stock":3},{"name":"m","stock":6},{"name":"xl","stock":7}]},{"color":"brown","image":"/assets/img/product/fashion/25.jpg","size":[{"name":"x","stock":4},{"name":"m","stock":8},{"name":"xl","stock":3},{"name":"xxl","stock":7}]},{"color":"black","image":"/assets/img/product/fashion/26.jpg","size":[{"name":"x","stock":3},{"name":"m","stock":7},{"name":"xl","stock":0},{"name":"xxl","stock":7}]}],"image":["/assets/img/product/fashion/24.jpg","/assets/img/product/fashion/25.jpg","/assets/img/product/fashion/26.jpg","/assets/img/product/fashion/27.jpg","/assets/img/product/fashion/28.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"},{"id":"90","sku":"asdf212","name":"Lorem ipsum kids three","price":17.45,"discount":40,"offerEnd":"October 2, 2020 12:11:00","new":true,"rating":5,"saleCount":36,"category":["fashion","kids"],"tag":["fashion","kids"],"variation":[{"color":"white","image":"/assets/img/product/fashion/25.jpg","size":[{"name":"x","stock":3},{"name":"m","stock":2},{"name":"xl","stock":5}]},{"color":"black","image":"/assets/img/product/fashion/26.jpg","size":[{"name":"x","stock":4},{"name":"m","stock":7},{"name":"xl","stock":9},{"name":"xxl","stock":1}]},{"color":"brown","image":"/assets/img/product/fashion/27.jpg","size":[{"name":"x","stock":1},{"name":"m","stock":2},{"name":"xl","stock":4},{"name":"xxl","stock":0}]}],"image":["/assets/img/product/fashion/25.jpg","/assets/img/product/fashion/26.jpg","/assets/img/product/fashion/27.jpg","/assets/img/product/fashion/28.jpg","/assets/img/product/fashion/29.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"},{"id":"91","sku":"asdf213","name":"Lorem ipsum kids four","price":15.5,"discount":0,"new":true,"rating":4,"saleCount":20,"category":["fashion","kids"],"tag":["fashion","kids"],"variation":[{"color":"blue","image":"/assets/img/product/fashion/26.jpg","size":[{"name":"x","stock":3},{"name":"m","stock":6},{"name":"xl","stock":7}]},{"color":"brown","image":"/assets/img/product/fashion/27.jpg","size":[{"name":"x","stock":4},{"name":"m","stock":8},{"name":"xl","stock":3},{"name":"xxl","stock":7}]},{"color":"black","image":"/assets/img/product/fashion/28.jpg","size":[{"name":"x","stock":3},{"name":"m","stock":7},{"name":"xl","stock":0},{"name":"xxl","stock":7}]}],"image":["/assets/img/product/fashion/26.jpg","/assets/img/product/fashion/27.jpg","/assets/img/product/fashion/28.jpg","/assets/img/product/fashion/29.jpg","/assets/img/product/fashion/30.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"},{"id":"92","sku":"asdf214","name":"Lorem ipsum kids five","price":25.5,"discount":10,"new":true,"rating":5,"saleCount":25,"category":["fashion","kids"],"tag":["fashion","kids"],"variation":[{"color":"blue","image":"/assets/img/product/fashion/27.jpg","size":[{"name":"x","stock":3},{"name":"m","stock":6},{"name":"xl","stock":7}]},{"color":"brown","image":"/assets/img/product/fashion/28.jpg","size":[{"name":"x","stock":4},{"name":"m","stock":8},{"name":"xl","stock":3},{"name":"xxl","stock":7}]},{"color":"black","image":"/assets/img/product/fashion/29.jpg","size":[{"name":"x","stock":3},{"name":"m","stock":7},{"name":"xl","stock":0},{"name":"xxl","stock":7}]}],"image":["/assets/img/product/fashion/27.jpg","/assets/img/product/fashion/28.jpg","/assets/img/product/fashion/29.jpg","/assets/img/product/fashion/30.jpg","/assets/img/product/fashion/23.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"},{"id":"93","sku":"asdf215","name":"Lorem ipsum kids six","price":19.85,"discount":0,"offerEnd":"October 17, 2020 12:11:00","new":true,"rating":5,"saleCount":65,"category":["fashion","kids"],"tag":["fashion","kids"],"variation":[{"color":"white","image":"/assets/img/product/fashion/28.jpg","size":[{"name":"x","stock":3},{"name":"m","stock":2},{"name":"xl","stock":5}]},{"color":"black","image":"/assets/img/product/fashion/29.jpg","size":[{"name":"x","stock":4},{"name":"m","stock":7},{"name":"xl","stock":9},{"name":"xxl","stock":1}]},{"color":"brown","image":"/assets/img/product/fashion/30.jpg","size":[{"name":"x","stock":1},{"name":"m","stock":2},{"name":"xl","stock":4},{"name":"xxl","stock":0}]}],"image":["/assets/img/product/fashion/28.jpg","/assets/img/product/fashion/29.jpg","/assets/img/product/fashion/30.jpg","/assets/img/product/fashion/23.jpg","/assets/img/product/fashion/24.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"},{"id":"94","sku":"asdf216","name":"Lorem ipsum kids seven","price":55.5,"discount":40,"new":true,"rating":5,"saleCount":55,"category":["fashion","kids"],"tag":["fashion","kids"],"variation":[{"color":"blue","image":"/assets/img/product/fashion/29.jpg","size":[{"name":"x","stock":3},{"name":"m","stock":6},{"name":"xl","stock":7}]},{"color":"brown","image":"/assets/img/product/fashion/30.jpg","size":[{"name":"x","stock":4},{"name":"m","stock":8},{"name":"xl","stock":3},{"name":"xxl","stock":7}]},{"color":"black","image":"/assets/img/product/fashion/23.jpg","size":[{"name":"x","stock":3},{"name":"m","stock":7},{"name":"xl","stock":0},{"name":"xxl","stock":7}]}],"image":["/assets/img/product/fashion/29.jpg","/assets/img/product/fashion/30.jpg","/assets/img/product/fashion/23.jpg","/assets/img/product/fashion/24.jpg","/assets/img/product/fashion/25.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"},{"id":"95","sku":"asdf217","name":"Lorem ipsum kids eight","price":29.85,"discount":10,"offerEnd":"October 18, 2020 12:11:00","new":false,"rating":5,"saleCount":83,"category":["fashion","kids"],"tag":["fashion","kids"],"stock":0,"image":["/assets/img/product/fashion/30.jpg","/assets/img/product/fashion/23.jpg","/assets/img/product/fashion/24.jpg","/assets/img/product/fashion/25.jpg","/assets/img/product/fashion/26.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"},{"id":"96","sku":"asdf218","name":"Lorem ipsum auto part one","price":16.4,"discount":10,"new":true,"rating":5,"saleCount":20,"category":["auto parts"],"tag":["auto parts"],"stock":15,"image":["/assets/img/product/auto-parts/1.jpg","/assets/img/product/auto-parts/2.jpg","/assets/img/product/auto-parts/3.jpg","/assets/img/product/auto-parts/4.jpg","/assets/img/product/auto-parts/2.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"97","sku":"asdf219","name":"Lorem ipsum auto part two","price":26.5,"discount":0,"new":false,"rating":4,"saleCount":10,"category":["auto parts"],"tag":["auto parts"],"stock":10,"image":["/assets/img/product/auto-parts/2.jpg","/assets/img/product/auto-parts/3.jpg","/assets/img/product/auto-parts/4.jpg","/assets/img/product/auto-parts/1.jpg","/assets/img/product/auto-parts/3.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"98","sku":"asdf220","name":"Lorem ipsum auto part three","price":14.2,"discount":30,"new":true,"rating":3,"saleCount":30,"category":["auto parts"],"tag":["auto parts"],"stock":13,"image":["/assets/img/product/auto-parts/3.jpg","/assets/img/product/auto-parts/4.jpg","/assets/img/product/auto-parts/1.jpg","/assets/img/product/auto-parts/2.jpg","/assets/img/product/auto-parts/4.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"99","sku":"asdf221","name":"Lorem ipsum auto part four","price":6.4,"discount":0,"new":false,"rating":2,"saleCount":10,"category":["auto parts"],"tag":["auto parts"],"stock":5,"image":["/assets/img/product/auto-parts/4.jpg","/assets/img/product/auto-parts/1.jpg","/assets/img/product/auto-parts/2.jpg","/assets/img/product/auto-parts/3.jpg","/assets/img/product/auto-parts/2.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"100","sku":"asdf222","name":"Lorem ipsum cake one","price":6.4,"discount":0,"new":false,"rating":5,"saleCount":10,"category":["cakes"],"tag":["cakes"],"stock":20,"image":["/assets/img/product/cake-shop/1.jpg","/assets/img/product/cake-shop/2.jpg","/assets/img/product/cake-shop/3.jpg","/assets/img/product/cake-shop/4.jpg","/assets/img/product/cake-shop/5.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"101","sku":"asdf223","name":"Lorem ipsum cake two","price":3,"discount":10,"new":true,"rating":4,"saleCount":15,"category":["cakes"],"tag":["cakes"],"stock":25,"image":["/assets/img/product/cake-shop/2.jpg","/assets/img/product/cake-shop/3.jpg","/assets/img/product/cake-shop/4.jpg","/assets/img/product/cake-shop/5.jpg","/assets/img/product/cake-shop/6.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"102","sku":"asdf224","name":"Lorem ipsum cake three","price":2.4,"discount":10,"new":false,"rating":5,"saleCount":30,"category":["cakes"],"tag":["cakes"],"stock":10,"image":["/assets/img/product/cake-shop/3.jpg","/assets/img/product/cake-shop/4.jpg","/assets/img/product/cake-shop/5.jpg","/assets/img/product/cake-shop/6.jpg","/assets/img/product/cake-shop/7.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"103","sku":"asdf225","name":"Lorem ipsum cake four","price":3.5,"discount":10,"new":true,"rating":4,"saleCount":14,"category":["cakes"],"tag":["cakes"],"stock":10,"image":["/assets/img/product/cake-shop/4.jpg","/assets/img/product/cake-shop/5.jpg","/assets/img/product/cake-shop/6.jpg","/assets/img/product/cake-shop/7.jpg","/assets/img/product/cake-shop/8.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"104","sku":"asdf226","name":"Lorem ipsum cake five","price":4.2,"discount":0,"new":false,"rating":5,"saleCount":30,"category":["cakes"],"tag":["cakes"],"stock":40,"image":["/assets/img/product/cake-shop/5.jpg","/assets/img/product/cake-shop/6.jpg","/assets/img/product/cake-shop/7.jpg","/assets/img/product/cake-shop/8.jpg","/assets/img/product/cake-shop/1.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"105","sku":"asdf227","name":"Lorem ipsum cake six","price":5.7,"discount":30,"new":true,"rating":3,"saleCount":30,"category":["cakes"],"tag":["cakes"],"stock":25,"image":["/assets/img/product/cake-shop/6.jpg","/assets/img/product/cake-shop/7.jpg","/assets/img/product/cake-shop/8.jpg","/assets/img/product/cake-shop/1.jpg","/assets/img/product/cake-shop/2.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"106","sku":"asdf228","name":"Lorem ipsum cake seven","price":6.5,"discount":10,"new":true,"rating":3,"saleCount":20,"category":["cakes"],"tag":["cakes"],"stock":40,"image":["/assets/img/product/cake-shop/7.jpg","/assets/img/product/cake-shop/8.jpg","/assets/img/product/cake-shop/1.jpg","/assets/img/product/cake-shop/2.jpg","/assets/img/product/cake-shop/3.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"107","sku":"asdf229","name":"Lorem ipsum cake eight","price":4.5,"discount":10,"new":true,"rating":3,"saleCount":20,"category":["cakes"],"tag":["cakes"],"stock":60,"image":["/assets/img/product/cake-shop/8.jpg","/assets/img/product/cake-shop/1.jpg","/assets/img/product/cake-shop/2.jpg","/assets/img/product/cake-shop/3.jpg","/assets/img/product/cake-shop/4.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"108","sku":"asdf222","name":"Lorem ipsum cake one","price":6.4,"discount":0,"new":false,"rating":5,"saleCount":10,"category":["cakes"],"tag":["cakes"],"stock":20,"image":["/assets/img/product/cake-shop/1.jpg","/assets/img/product/cake-shop/2.jpg","/assets/img/product/cake-shop/3.jpg","/assets/img/product/cake-shop/4.jpg","/assets/img/product/cake-shop/5.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"109","sku":"asdf223","name":"Lorem ipsum cake two","price":3,"discount":10,"new":true,"rating":4,"saleCount":15,"category":["cakes"],"tag":["cakes"],"stock":25,"image":["/assets/img/product/cake-shop/2.jpg","/assets/img/product/cake-shop/3.jpg","/assets/img/product/cake-shop/4.jpg","/assets/img/product/cake-shop/5.jpg","/assets/img/product/cake-shop/6.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"110","sku":"asdf224","name":"Lorem ipsum cake three","price":2.4,"discount":10,"new":false,"rating":5,"saleCount":30,"category":["cakes"],"tag":["cakes"],"stock":10,"image":["/assets/img/product/cake-shop/3.jpg","/assets/img/product/cake-shop/4.jpg","/assets/img/product/cake-shop/5.jpg","/assets/img/product/cake-shop/6.jpg","/assets/img/product/cake-shop/7.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"111","sku":"asdf225","name":"Lorem ipsum cake four","price":3.5,"discount":10,"new":true,"rating":4,"saleCount":14,"category":["cakes"],"tag":["cakes"],"stock":10,"image":["/assets/img/product/cake-shop/4.jpg","/assets/img/product/cake-shop/5.jpg","/assets/img/product/cake-shop/6.jpg","/assets/img/product/cake-shop/7.jpg","/assets/img/product/cake-shop/8.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"112","sku":"asdf226","name":"Lorem ipsum cake five","price":4.2,"discount":0,"new":false,"rating":5,"saleCount":30,"category":["cakes"],"tag":["cakes"],"stock":40,"image":["/assets/img/product/cake-shop/5.jpg","/assets/img/product/cake-shop/6.jpg","/assets/img/product/cake-shop/7.jpg","/assets/img/product/cake-shop/8.jpg","/assets/img/product/cake-shop/1.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"113","sku":"asdf227","name":"Lorem ipsum cake six","price":5.7,"discount":30,"new":true,"rating":3,"saleCount":30,"category":["cakes"],"tag":["cakes"],"stock":25,"image":["/assets/img/product/cake-shop/6.jpg","/assets/img/product/cake-shop/7.jpg","/assets/img/product/cake-shop/8.jpg","/assets/img/product/cake-shop/1.jpg","/assets/img/product/cake-shop/2.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"114","sku":"asdf228","name":"Lorem ipsum cake seven","price":6.5,"discount":10,"new":true,"rating":3,"saleCount":20,"category":["cakes"],"tag":["cakes"],"stock":40,"image":["/assets/img/product/cake-shop/7.jpg","/assets/img/product/cake-shop/8.jpg","/assets/img/product/cake-shop/1.jpg","/assets/img/product/cake-shop/2.jpg","/assets/img/product/cake-shop/3.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"115","sku":"asdf229","name":"Lorem ipsum cake eight","price":4.5,"discount":10,"new":true,"rating":3,"saleCount":20,"category":["cakes"],"tag":["cakes"],"stock":60,"image":["/assets/img/product/cake-shop/8.jpg","/assets/img/product/cake-shop/1.jpg","/assets/img/product/cake-shop/2.jpg","/assets/img/product/cake-shop/3.jpg","/assets/img/product/cake-shop/4.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"116","sku":"asdf230","name":"Lorem ipsum pet food one","price":6.4,"discount":0,"new":false,"rating":5,"saleCount":10,"category":["pet food"],"tag":["pet food"],"stock":20,"image":["/assets/img/product/pet-food/1.jpg","/assets/img/product/pet-food/2.jpg","/assets/img/product/pet-food/3.jpg","/assets/img/product/pet-food/4.jpg","/assets/img/product/pet-food/5.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"117","sku":"asdf231","name":"Lorem ipsum pet food two","price":3,"discount":10,"new":true,"rating":4,"saleCount":15,"category":["pet food"],"tag":["pet food"],"stock":25,"image":["/assets/img/product/pet-food/2.jpg","/assets/img/product/pet-food/3.jpg","/assets/img/product/pet-food/4.jpg","/assets/img/product/pet-food/5.jpg","/assets/img/product/pet-food/6.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"118","sku":"asdf232","name":"Lorem ipsum pet food three","price":2.4,"discount":10,"new":false,"rating":5,"saleCount":30,"category":["pet food"],"tag":["pet food"],"stock":10,"image":["/assets/img/product/pet-food/3.jpg","/assets/img/product/pet-food/4.jpg","/assets/img/product/pet-food/5.jpg","/assets/img/product/pet-food/6.jpg","/assets/img/product/pet-food/7.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"119","sku":"asdf233","name":"Lorem ipsum pet food four","price":3.5,"discount":10,"new":true,"rating":4,"saleCount":14,"category":["pet food"],"tag":["pet food"],"stock":10,"image":["/assets/img/product/pet-food/4.jpg","/assets/img/product/pet-food/5.jpg","/assets/img/product/pet-food/6.jpg","/assets/img/product/pet-food/7.jpg","/assets/img/product/pet-food/8.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"120","sku":"asdf234","name":"Lorem ipsum pet food five","price":4.2,"discount":0,"new":false,"rating":5,"saleCount":30,"category":["pet food"],"tag":["pet food"],"stock":40,"image":["/assets/img/product/pet-food/5.jpg","/assets/img/product/pet-food/6.jpg","/assets/img/product/pet-food/7.jpg","/assets/img/product/pet-food/8.jpg","/assets/img/product/pet-food/1.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"121","sku":"asdf235","name":"Lorem ipsum pet food six","price":5.7,"discount":30,"new":true,"rating":3,"saleCount":30,"category":["pet food"],"tag":["pet food"],"stock":25,"image":["/assets/img/product/pet-food/6.jpg","/assets/img/product/pet-food/7.jpg","/assets/img/product/pet-food/8.jpg","/assets/img/product/pet-food/1.jpg","/assets/img/product/pet-food/2.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"122","sku":"asdf236","name":"Lorem ipsum pet food seven","price":6.5,"discount":10,"new":true,"rating":3,"saleCount":20,"category":["pet food"],"tag":["pet food"],"stock":40,"image":["/assets/img/product/pet-food/7.jpg","/assets/img/product/pet-food/8.jpg","/assets/img/product/pet-food/1.jpg","/assets/img/product/pet-food/2.jpg","/assets/img/product/pet-food/3.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"123","sku":"asdf237","name":"Lorem ipsum pet food eight","price":4.5,"discount":10,"new":true,"rating":3,"saleCount":20,"category":["pet food"],"tag":["pet food"],"stock":60,"image":["/assets/img/product/pet-food/8.jpg","/assets/img/product/pet-food/1.jpg","/assets/img/product/pet-food/2.jpg","/assets/img/product/pet-food/3.jpg","/assets/img/product/pet-food/4.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"124","sku":"asdf238","name":"Lorem ipsum medical one","price":6.4,"discount":0,"new":false,"rating":5,"saleCount":10,"category":["medical"],"tag":["medical"],"stock":20,"image":["/assets/img/product/medical/1.jpg","/assets/img/product/medical/2.jpg","/assets/img/product/medical/3.jpg","/assets/img/product/medical/4.jpg","/assets/img/product/medical/5.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"125","sku":"asdf239","name":"Lorem ipsum medical two","price":3,"discount":10,"new":true,"rating":4,"saleCount":15,"category":["medical"],"tag":["medical"],"stock":25,"image":["/assets/img/product/medical/2.jpg","/assets/img/product/medical/3.jpg","/assets/img/product/medical/4.jpg","/assets/img/product/medical/5.jpg","/assets/img/product/medical/6.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"126","sku":"asdf240","name":"Lorem ipsum medical three","price":2.4,"discount":10,"new":false,"rating":5,"saleCount":30,"category":["medical"],"tag":["medical"],"stock":10,"image":["/assets/img/product/medical/3.jpg","/assets/img/product/medical/4.jpg","/assets/img/product/medical/5.jpg","/assets/img/product/medical/6.jpg","/assets/img/product/medical/7.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"127","sku":"asdf241","name":"Lorem ipsum medical four","price":3.5,"discount":10,"new":true,"rating":4,"saleCount":14,"category":["medical"],"tag":["medical"],"stock":10,"image":["/assets/img/product/medical/4.jpg","/assets/img/product/medical/5.jpg","/assets/img/product/medical/6.jpg","/assets/img/product/medical/7.jpg","/assets/img/product/medical/8.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"128","sku":"asdf242","name":"Lorem ipsum medical five","price":4.2,"discount":0,"new":false,"rating":5,"saleCount":30,"category":["medical"],"tag":["medical"],"stock":40,"image":["/assets/img/product/medical/5.jpg","/assets/img/product/medical/6.jpg","/assets/img/product/medical/7.jpg","/assets/img/product/medical/8.jpg","/assets/img/product/medical/1.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"129","sku":"asdf243","name":"Lorem ipsum medical six","price":5.7,"discount":30,"new":true,"rating":3,"saleCount":30,"category":["medical"],"tag":["medical"],"stock":25,"image":["/assets/img/product/medical/6.jpg","/assets/img/product/medical/7.jpg","/assets/img/product/medical/8.jpg","/assets/img/product/medical/1.jpg","/assets/img/product/medical/2.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"130","sku":"asdf244","name":"Lorem ipsum medical seven","price":6.5,"discount":10,"new":true,"rating":3,"saleCount":20,"category":["medical"],"tag":["medical"],"stock":40,"image":["/assets/img/product/medical/7.jpg","/assets/img/product/medical/8.jpg","/assets/img/product/medical/1.jpg","/assets/img/product/medical/2.jpg","/assets/img/product/medical/3.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"131","sku":"asdf245","name":"Lorem ipsum medical eight","price":4.5,"discount":10,"new":true,"rating":3,"saleCount":20,"category":["medical"],"tag":["medical"],"stock":60,"image":["/assets/img/product/medical/8.jpg","/assets/img/product/medical/1.jpg","/assets/img/product/medical/2.jpg","/assets/img/product/medical/3.jpg","/assets/img/product/medical/4.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"132","sku":"asdf246","name":"Lorem ipsum black one","price":6.4,"discount":0,"new":false,"rating":5,"saleCount":10,"category":["black friday"],"tag":["black friday"],"stock":20,"image":["/assets/img/product/black-friday/1.jpg","/assets/img/product/black-friday/2.jpg","/assets/img/product/black-friday/3.jpg","/assets/img/product/black-friday/4.jpg","/assets/img/product/black-friday/5.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"133","sku":"asdf247","name":"Lorem ipsum black two","price":3,"discount":10,"new":true,"rating":4,"saleCount":15,"category":["black friday"],"tag":["black friday"],"stock":25,"image":["/assets/img/product/black-friday/2.jpg","/assets/img/product/black-friday/3.jpg","/assets/img/product/black-friday/4.jpg","/assets/img/product/black-friday/5.jpg","/assets/img/product/black-friday/6.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"134","sku":"asdf248","name":"Lorem ipsum black three","price":2.4,"discount":10,"new":false,"rating":5,"saleCount":30,"category":["black friday"],"tag":["black friday"],"stock":10,"image":["/assets/img/product/black-friday/3.jpg","/assets/img/product/black-friday/4.jpg","/assets/img/product/black-friday/5.jpg","/assets/img/product/black-friday/6.jpg","/assets/img/product/black-friday/7.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"135","sku":"asdf249","name":"Lorem ipsum black four","price":3.5,"discount":10,"new":true,"rating":4,"saleCount":14,"category":["black friday"],"tag":["black friday"],"stock":10,"image":["/assets/img/product/black-friday/4.jpg","/assets/img/product/black-friday/5.jpg","/assets/img/product/black-friday/6.jpg","/assets/img/product/black-friday/7.jpg","/assets/img/product/black-friday/8.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"136","sku":"asdf250","name":"Lorem ipsum black five","price":4.2,"discount":0,"new":false,"rating":5,"saleCount":30,"category":["black friday"],"tag":["black friday"],"stock":40,"image":["/assets/img/product/black-friday/5.jpg","/assets/img/product/black-friday/6.jpg","/assets/img/product/black-friday/7.jpg","/assets/img/product/black-friday/8.jpg","/assets/img/product/black-friday/1.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"137","sku":"asdf251","name":"Lorem ipsum black six","price":5.7,"discount":30,"new":true,"rating":3,"saleCount":30,"category":["black friday"],"tag":["black friday"],"stock":25,"image":["/assets/img/product/black-friday/6.jpg","/assets/img/product/black-friday/7.jpg","/assets/img/product/black-friday/8.jpg","/assets/img/product/black-friday/1.jpg","/assets/img/product/black-friday/2.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"138","sku":"asdf252","name":"Lorem ipsum black seven","price":6.5,"discount":10,"new":true,"rating":3,"saleCount":20,"category":["black friday"],"tag":["black friday"],"stock":40,"image":["/assets/img/product/black-friday/7.jpg","/assets/img/product/black-friday/8.jpg","/assets/img/product/black-friday/1.jpg","/assets/img/product/black-friday/2.jpg","/assets/img/product/black-friday/3.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"139","sku":"asdf253","name":"Lorem ipsum black eight","price":4.5,"discount":10,"new":true,"rating":3,"saleCount":20,"category":["black friday"],"tag":["black friday"],"stock":60,"image":["/assets/img/product/black-friday/8.jpg","/assets/img/product/black-friday/1.jpg","/assets/img/product/black-friday/2.jpg","/assets/img/product/black-friday/3.jpg","/assets/img/product/black-friday/4.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"140","sku":"asdf249","name":"Lorem ipsum christmas one","price":3.5,"discount":10,"new":true,"rating":4,"saleCount":14,"category":["christmas"],"tag":["christmas"],"stock":10,"image":["/assets/img/product/christmas/1.jpg","/assets/img/product/christmas/2.jpg","/assets/img/product/christmas/3.jpg","/assets/img/product/christmas/4.jpg","/assets/img/product/christmas/5.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"141","sku":"asdf250","name":"Lorem ipsum christmas two","price":4.2,"discount":0,"new":false,"rating":5,"saleCount":30,"category":["christmas"],"tag":["christmas"],"stock":40,"image":["/assets/img/product/christmas/2.jpg","/assets/img/product/christmas/3.jpg","/assets/img/product/christmas/4.jpg","/assets/img/product/christmas/5.jpg","/assets/img/product/christmas/1.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"142","sku":"asdf251","name":"Lorem ipsum christmas three","price":5.7,"discount":30,"new":true,"rating":3,"saleCount":30,"category":["christmas"],"tag":["christmas"],"stock":25,"image":["/assets/img/product/christmas/3.jpg","/assets/img/product/christmas/4.jpg","/assets/img/product/christmas/5.jpg","/assets/img/product/christmas/1.jpg","/assets/img/product/christmas/2.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"143","sku":"asdf252","name":"Lorem ipsum christmas four","price":6.5,"discount":10,"new":true,"rating":3,"saleCount":20,"category":["christmas"],"tag":["christmas"],"stock":40,"image":["/assets/img/product/christmas/4.jpg","/assets/img/product/christmas/5.jpg","/assets/img/product/christmas/1.jpg","/assets/img/product/christmas/2.jpg","/assets/img/product/christmas/3.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"144","sku":"asdf253","name":"Lorem ipsum christmas five","price":4.5,"discount":10,"new":true,"rating":3,"saleCount":20,"category":["christmas"],"tag":["christmas"],"stock":60,"image":["/assets/img/product/christmas/5.jpg","/assets/img/product/christmas/1.jpg","/assets/img/product/christmas/2.jpg","/assets/img/product/christmas/3.jpg","/assets/img/product/christmas/4.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."}]'
      );
    },
    323: function (e, t, a) {
      e.exports = a(604);
    },
    600: function (e) {
      e.exports = JSON.parse(
        '{"home":"Home","home_group_one":"Home Group One","home_group_two":"Home Group Two","home_group_three":"Home Group Three","home_fashion":"Home Fashion","home_fashion_two":"Home Fashion Two","home_fashion_three":"Home Fashion Three","home_fashion_four":"Home Fashion Four","home_fashion_five":"Home Fashion Five","home_fashion_six":"Home Fashion Six","home_fashion_seven":"Home Fashion Seven","home_fashion_eight":"Home Fashion Eight","home_kids_fashion":"Home Kids Fashion","home_cosmetics":"Home Cosmetics","home_furniture":"Home Furniture","home_furniture_two":"Home Furniture Two","home_furniture_three":"Home Furniture Three","home_furniture_four":"Home Furniture Four","home_furniture_five":"Home Furniture Five","home_furniture_six":"Home Furniture Six","home_furniture_seven":"Home Furniture Seven","home_electronics":"Home Electronics","home_electronics_two":"Home Electronics Two","home_electronics_three":"Home Electronics Three","home_book_store":"Home Book Store","home_book_store_two":"Home Book Store Two","home_plants":"Home Plants","home_flower_shop":"Home Flower Shop","home_flower_shop_two":"Home Flower Shop Two","home_organic_food":"Home Organic Food","home_organic_food_two":"Home Organic Food Two","home_onepage_scroll":"Home Onepage Scroll","home_grid_banner":"Home Grid Banner","home_auto_parts":"Home Auto Parts","home_cake_shop":"Home Cake Shop","home_handmade":"Home Handmade","home_pet_food":"Home Pet Food","home_medical_equipment":"Home Medical Equipment","home_christmas":"Home Christmas","home_black_friday":"Home Black Friday","home_black_friday_two":"Home Black Friday Two","home_valentines_day":"Home Valentines Day","shop":"Shop","shop_layout":"Shop Layout","shop_grid_standard":"Shop Grid Standard","shop_grid_filter":"Shop Grid Filter","shop_grid_two_column":"Shop Grid Two Column","shop_grid_no_sidebar":"Shop Grid No Sidebar","shop_grid_full_width":"Shop Grid Full Width","shop_grid_right_sidebar":"Shop Grid Right Sidebar","shop_list_standard":"Shop List Standard","shop_list_full_width":"Shop List Full Width","shop_list_two_column":"Shop List Two Column","products":"Products","product_details":"Product Details","product_tab_bottom":"Product Tab Bottom","product_tab_left":"Product Tab Left","product_tab_right":"Product Tab Right","product_sticky":"Product Sticky","product_slider":"Product Slider","product_fixed_image":"Product Fixed Image","product_simple":"Product Simple","product_variation":"Product Variation","product_affiliate":"Product Affiliate","collection":"Collection","pages":"Pages","cart":"Cart","checkout":"Checkout","wishlist":"Wishlist","compare":"Compare","my_account":"My Account","login_register":"Login / Register","about_us":"About Us","contact_us":"Contact Us","404_page":"404 Page","blog":"Blog","blog_standard":"Blog Standard","blog_no_sidebar":"Blog No Sidebar","blog_right_sidebar":"Blog Right Sidebar","blog_details_standard":"Blog Details Standard","blog_details_video":"Blog Details Video","blog_details_slider":"Blog Details Slider"}'
      );
    },
    601: function (e) {
      e.exports = JSON.parse(
        '{"home":"Accueil","home_group_one":"Home Group One","home_group_two":"Groupe de maison deux","home_group_three":"Groupe d\'accueil 3","home_fashion":"Mode maison","home_fashion_two":"Mode maison deux","home_fashion_three":"Accueil Mode Trois","home_fashion_four":"Accueil Fashion Four","home_fashion_five":"Accueil Fashion Five","home_fashion_six":"Accueil Fashion Six","home_fashion_seven":"Accueil Fashion Seven","home_fashion_eight":"Accueil Fashion Eight","home_kids_fashion":"Accueil Mode Enfants","home_cosmetics":"Cosm\xe9tiques \xe0 la maison","home_furniture":"Meubles de maison","home_furniture_two":"Meubles de maison deux","home_furniture_three":"Meubles de maison trois","home_furniture_four":"Meubles de maison four","home_furniture_five":"Meubles de maison five","home_furniture_six":"Meubles de maison six","home_furniture_seven":"Meubles de maison seven","home_electronics":"Electronique domestique","home_electronics_two":"\xc9lectronique grand Two","home_electronics_three":"\xc9lectronique grand Three","home_book_store":"Accueil librairie","home_book_store_two":"Accueil librairie two","home_plants":"Plantes d\'int\xe9rieur","home_flower_shop":"Maison Fleuriste","home_flower_shop_two":"Maison Fleuriste two","home_organic_food":"Accueil biologiques","home_organic_food_two":"Accueil Alimentation Deux","home_onepage_scroll":"Accueil Onepage Scroll","home_grid_banner":"Accueil Grid Banner","home_auto_parts":"Accueil automobiles","home_cake_shop":"Accueil P\xe2tisserie","home_handmade":"Maison \xe0 la main","home_pet_food":"Accueil pour animaux","home_medical_equipment":"\xe9quipement m\xe9dical \xe0 domicile","home_christmas":"Maison Christmas","home_black_friday":"Maison Black Friday","home_black_friday_two":"Maison Black Friday Two","home_valentines_day":"Maison Valentines Day","shop":"Boutique","shop_layout":"Disposition de magasin","shop_grid_standard":"Boutique Grid Standard","shop_grid_filter":"Filtre de grille d\'achat","shop_grid_two_column":"Boutique Grille Colonnes","shop_grid_no_sidebar":"Boutique Grid No Sidebar","shop_grid_full_width":"Grille de magasin largeur","shop_grid_right_sidebar":"Shop Grid Right lat\xe9rale","shop_list_standard":"Liste de magasin standard","shop_list_full_width":"Liste pleine largeur","shop_list_two_column":"Liste deux colonnes","product_details":"d\xe9tails du produit","product_tab_bottom":"Onglet Produit Bas","product_tab_left":"Onglet Produit \xe0 gauche","product_tab_right":"Onglet Produit Droite","product_sticky":"Produit collant","product_slider":"Produit slider","product_fixed_image":"Image fixe du produit","product_simple":"Produit simple","product_variation":"Variation du produit","product_affiliate":"Produit affili\xe9","collection":"Collection","pages":"Des pages","cart":"Chariot","checkout":"Checkout","wishlist":"Liste de souhaits","compare":"Comparer","my_account":"Mon compte","login_register":"Connexion / S\'inscrire","about_us":"\xc0 propos de nous","contact_us":"Contactez nous","404_page":"404 Page","blog":"Blog","blog_standard":"Blog Standard","blog_no_sidebar":"Blog No Sidebar","blog_right_sidebar":"Blog Barre lat\xe9rale droite","blog_details_standard":"D\xe9tails du blog Standard","blog_details_video":"Blog D\xe9tails Vid\xe9o","blog_details_slider":"D\xe9tails du blog"}'
      );
    },
    602: function (e) {
      e.exports = JSON.parse(
        '{"home":"Zuhause","home_group_one":"Heimatgruppe Eins","home_group_two":"Heimatgruppe zwei","home_group_three":"Home Gruppe Drei","home_fashion":"Zuhause Mode","home_fashion_two":"Home Fashion Zwei","home_fashion_three":"Home Fashion Drei","home_fashion_four":"Hauptart und weise vier","home_fashion_five":"Home Fashion Five","home_fashion_six":"Home Fashion Six","home_fashion_seven":"Home Fashion Seven","home_fashion_eight":"Home Fashion Eight","home_kids_fashion":"Startseite Kindermode","home_cosmetics":"Hauptkosmetik","home_furniture":"Haus m\xf6bel","home_furniture_two":"Wohnm\xf6bel Zwei","home_furniture_three":"Wohnm\xf6bel Drei","home_furniture_four":"Wohnm\xf6bel vier","home_furniture_five":"Wohnm\xf6bel Five","home_furniture_six":"Wohnm\xf6bel Six","home_furniture_seven":"Wohnm\xf6bel Seven","home_electronics":"Heimelektronik","home_electronics_two":"Heimelektronik Zwei","home_electronics_three":"Heimelektronik Drei","home_book_store":"Home Buchhandlung","home_book_store_two":"Home Buchhandlung Zwei","home_plants":"Home Pflanzen","home_flower_shop":"Hauptblumenladen","home_flower_shop_two":"Hauptblumenladen Zwei","home_organic_food":"Bio-Lebensmittel","home_organic_food_two":"Bio-Lebensmittel Zwei","home_onepage_scroll":"Home Onepage Scroll","home_grid_banner":"Hauptrasterfeld Fahne","home_auto_parts":"Home Autoteile","home_cake_shop":"Hauptkuchen-Gesch\xe4ft","home_handmade":"Haus handgemacht","home_pet_food":"Heimtierfutter","home_medical_equipment":"medizinische Heimausr\xfcstung","home_christmas":"Home Christmas","home_black_friday":"Home Black Friday","home_black_friday_two":"Home Black Friday Two","home_valentines_day":"Home Valentines Day","shop":"Gesch\xe4ft","shop_layout":"Ladengestaltung","shop_grid_standard":"Shop Grid Standard","shop_grid_filter":"Shop Grid Filter","shop_grid_two_column":"Shop-Raster zwei Spalte","shop_grid_no_sidebar":"Shop Grid No Sidebar","shop_grid_full_width":"Shop-Gitter in voller Breite","shop_grid_right_sidebar":"Shop-Gitter Seitenleiste","shop_list_standard":"Shop List Standard","shop_list_full_width":"Shop List Volle Breite","shop_list_two_column":"Shop-Liste zweispaltig","product_details":"Produktdetails","product_tab_bottom":"Produktregisterkarte Unten","product_tab_left":"Produktregisterkarte Links","product_tab_right":"Registerkarte Rechts","product_sticky":"Produkt klebrig","product_slider":"Produkt-Schieberegler","product_fixed_image":"Produktfixiertes Image","product_simple":"Produkt Einfach","product_variation":"Produktvariation","product_affiliate":"Produkt-Partner","collection":"Sammlung","pages":"Seiten","cart":"Wagen","checkout":"Auschecken","wishlist":"Wunschzettel","compare":"Vergleichen Sie","my_account":"Mein Konto","login_register":"Anmeldung Registrieren","about_us":"\xdcber uns","contact_us":"Kontaktiere uns","404_page":"404 Seite","blog":"Blog","blog_standard":"Blog Standard","blog_no_sidebar":"Blog keine Sidebar","blog_right_sidebar":"Blog rechte Seitenleiste","blog_details_standard":"Blog Details Standard","blog_details_video":"Blog Details Video","blog_details_slider":"Blog Details Schieberegler"}'
      );
    },
    603: function (e, t, a) {},
    604: function (e, t, a) {
      "use strict";
      a.r(t);
      a(324), a(341);
      var i = a(0),
        s = a.n(i),
        o = a(34),
        u = a.n(o),
        r = a(91),
        n = a(319),
        m = a(194),
        c = a(44),
        l = a(18),
        p = a(90),
        d = { currencySymbol: "\u20b9", currencyName: "INR", currencyRate: 1 },
        g = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : d,
            t = arguments.length > 1 ? arguments[1] : void 0;
          if (t.type === p.a) {
            var a = t.payload.currencyName;
            if ("USD" === a)
              return Object(l.a)(
                Object(l.a)({}, e),
                {},
                {
                  currencySymbol: "$",
                  currencyRate: t.payload.currencyRate,
                  currencyName: a,
                }
              );
            if ("EUR" === a)
              return Object(l.a)(
                Object(l.a)({}, e),
                {},
                {
                  currencySymbol: "\u20ac",
                  currencyRate: t.payload.currencyRate,
                  currencyName: a,
                }
              );
            if ("GBP" === a)
              return Object(l.a)(
                Object(l.a)({}, e),
                {},
                {
                  currencySymbol: "\xa3",
                  currencyRate: t.payload.currencyRate,
                  currencyName: a,
                }
              );
          }
          return e;
        },
        q = { products: [] },
        h = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : q,
            t = arguments.length > 1 ? arguments[1] : void 0;
          return "FETCH_PRODUCTS_SUCCESS" === t.type
            ? Object(l.a)(Object(l.a)({}, e), {}, { products: t.payload })
            : e;
        },
        v = a(50),
        f = a(144),
        b = a.n(f),
        j = a(71),
        k = [],
        y = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : k,
            t = arguments.length > 1 ? arguments[1] : void 0,
            a = e,
            i = t.payload;
          if (t.type === j.a) {
            if (void 0 === i.variation) {
              var s = a.filter(function (e) {
                return e.id === i.id;
              })[0];
              return void 0 === s
                ? [].concat(Object(v.a)(a), [
                    Object(l.a)(
                      Object(l.a)({}, i),
                      {},
                      {
                        quantity: i.quantity ? i.quantity : 1,
                        cartItemId: b()(),
                      }
                    ),
                  ])
                : a.map(function (e) {
                    return e.cartItemId === s.cartItemId
                      ? Object(l.a)(
                          Object(l.a)({}, e),
                          {},
                          {
                            quantity: i.quantity
                              ? e.quantity + i.quantity
                              : e.quantity + 1,
                          }
                        )
                      : e;
                  });
            }
            var o = a.filter(function (e) {
              return (
                e.id === i.id &&
                i.selectedProductColor &&
                i.selectedProductColor === e.selectedProductColor &&
                i.selectedProductSize &&
                i.selectedProductSize === e.selectedProductSize &&
                (!i.cartItemId || i.cartItemId === e.cartItemId)
              );
            })[0];
            return void 0 === o
              ? [].concat(Object(v.a)(a), [
                  Object(l.a)(
                    Object(l.a)({}, i),
                    {},
                    { quantity: i.quantity ? i.quantity : 1, cartItemId: b()() }
                  ),
                ])
              : void 0 === o ||
                (o.selectedProductColor === i.selectedProductColor &&
                  o.selectedProductSize === i.selectedProductSize)
              ? a.map(function (e) {
                  return e.cartItemId === o.cartItemId
                    ? Object(l.a)(
                        Object(l.a)({}, e),
                        {},
                        {
                          quantity: i.quantity
                            ? e.quantity + i.quantity
                            : e.quantity + 1,
                          selectedProductColor: i.selectedProductColor,
                          selectedProductSize: i.selectedProductSize,
                        }
                      )
                    : e;
                })
              : [].concat(Object(v.a)(a), [
                  Object(l.a)(
                    Object(l.a)({}, i),
                    {},
                    { quantity: i.quantity ? i.quantity : 1, cartItemId: b()() }
                  ),
                ]);
          }
          if (t.type === j.b) {
            if (1 === i.quantity) {
              var u = function (e, t) {
                return e.filter(function (e) {
                  return e.cartItemId !== t.cartItemId;
                });
              };
              return u(a, i);
            }
            return a.map(function (e) {
              return e.cartItemId === i.cartItemId
                ? Object(l.a)(
                    Object(l.a)({}, e),
                    {},
                    { quantity: e.quantity - 1 }
                  )
                : e;
            });
          }
          if (t.type === j.d) {
            var r = function (e, t) {
              return e.filter(function (e) {
                return e.cartItemId !== t.cartItemId;
              });
            };
            return r(a, i);
          }
          return t.type === j.c
            ? a.filter(function (e) {
                return !1;
              })
            : e;
        },
        x = a(116),
        w = [],
        E = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : w,
            t = arguments.length > 1 ? arguments[1] : void 0,
            a = e,
            i = t.payload;
          if (t.type === x.a) {
            var s = a.filter(function (e) {
              return e.id === i.id;
            })[0];
            return void 0 === s ? [].concat(Object(v.a)(a), [i]) : a;
          }
          if (t.type === x.c) {
            var o = function (e, t) {
              return e.filter(function (e) {
                return e.id !== t.id;
              });
            };
            return o(a, i);
          }
          return t.type === x.b
            ? a.filter(function (e) {
                return !1;
              })
            : a;
        },
        _ = a(147),
        D = [],
        N = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : D,
            t = arguments.length > 1 ? arguments[1] : void 0,
            a = e,
            i = t.payload;
          if (t.type === _.a) {
            var s = a.filter(function (e) {
              return e.id === i.id;
            })[0];
            return void 0 === s ? [].concat(Object(v.a)(a), [i]) : a;
          }
          if (t.type === _.b) {
            var o = function (e, t) {
              return e.filter(function (e) {
                return e.id !== t.id;
              });
            };
            return o(a, i);
          }
          return a;
        },
        S = a(38),
        O = Object(r.combineReducers)({
          multilanguage: Object(S.createMultilanguageReducer)({
            currentLanguageCode: "en",
          }),
          currencyData: g,
          productData: h,
          cartData: y,
          wishlistData: E,
          compareData: N,
        }),
        C = a(312),
        L = a(22),
        P = Object(L.i)(function (e) {
          return (
            Object(i.useEffect)(function () {
              window.scrollTo(0, 0);
            }),
            e.children
          );
        }),
        z = a(2),
        U = a(115),
        Q = a(204),
        A = a(196),
        T = a(197),
        H = a(198),
        F = a(199),
        B = a(201),
        R = a(606),
        I = a(607),
        M = a(608),
        G = a(205),
        W = a.n(G),
        K = (function (e) {
          Object(H.a)(a, e);
          var t = Object(F.a)(a);
          function a() {
            return Object(A.a)(this, a), t.apply(this, arguments);
          }
          return (
            Object(T.a)(a, [
              {
                key: "render",
                value: function () {
                  return s.a.createElement(
                    B.a,
                    { headerTop: "visible" },
                    s.a.createElement(
                      R.a,
                      { fluid: !0, className: "mb-4" },
                      s.a.createElement(
                        I.a,
                        { className: "mb-5" },
                        s.a.createElement(
                          "div",
                          { className: "headingtitle text-center ptb-40" },
                          s.a.createElement("h2", null, "Terms and Conditions"),
                          s.a.createElement("img", {
                            src: W.a,
                            alt: "",
                            className: "sb-img",
                          })
                        )
                      ),
                      s.a.createElement(
                        R.a,
                        null,
                        s.a.createElement(
                          I.a,
                          null,
                          s.a.createElement(
                            M.a,
                            null,
                            s.a.createElement(
                              "h3",
                              { style: { fontWeight: "500" } },
                              "UPDATION"
                            ),
                            s.a.createElement(
                              "p",
                              null,
                              "The Website may update/amend/modify these Terms of Usage from time to time. The User is responsible to check the Terms of Usage periodically to remain in compliance with these terms."
                            ),
                            s.a.createElement("br", null),
                            s.a.createElement(
                              "h3",
                              { style: { fontWeight: "500" } },
                              "USER CONSENT"
                            ),
                            s.a.createElement(
                              "p",
                              null,
                              "By accessing the Website and using it, you (\u201cMember\u201d, \u201cYou\u201d, \u201cYour\u201d) indicate that you understand the terms and unconditionally & expressly consent to the Terms of Usage of this Website. If you do not agree with the Terms of Usage, please do not click on the \u201cI AGREE\u201d button. The User is advised to read the Terms of Usage carefully before using or registering on the Website or accessing any material, information or services through the Website. Your use and continued usage of the Website (irrespective of the amendments made from time to time) shall signify your acceptance of the terms of usage and your agreement to be legally bound by the same."
                            ),
                            s.a.createElement("br", null),
                            s.a.createElement(
                              "h3",
                              { style: { fontWeight: "500" } },
                              "GENERAL DESCRIPTION"
                            ),
                            s.a.createElement(
                              "p",
                              null,
                              "The Website is an internet-based portal having its existence on World Wide Web, Application and other electronic medium and provides astrological content, reports, data, telephone, video and email consultations (hereinafter referred as \u201cContent\u201d). The Website is offering \u201cFree Services\u201d and \u201cPaid Services\u201d (Collectively referred as \u201cServices\u201d). Free Services are easily accessible without becoming a member however for accessing the personalised astrological services and/or receive additional Content and get access to Paid Services, You are required to register as a member on the portal. By registering for Paid Services, a Member agrees to:"
                            ),
                            s.a.createElement(
                              "p",
                              null,
                              "Our prices do not vary according to the market needs, competitor pricing etc."
                            ),
                            s.a.createElement("br", null),
                            s.a.createElement("br", null)
                          )
                        )
                      )
                    )
                  );
                },
              },
            ]),
            a
          );
        })(i.Component),
        V = a(30),
        Z = Object(V.a)({ basename: "" }),
        Y = Object(i.lazy)(function () {
          return Promise.all([a.e(4), a.e(17), a.e(39), a.e(41)]).then(
            a.bind(null, 1178)
          );
        }),
        J = Object(i.lazy)(function () {
          return Promise.all([a.e(1), a.e(3), a.e(4), a.e(6), a.e(35)]).then(
            a.bind(null, 1063)
          );
        }),
        X = Object(i.lazy)(function () {
          return Promise.all([a.e(4), a.e(6), a.e(13), a.e(16), a.e(148)]).then(
            a.bind(null, 1072)
          );
        }),
        $ = Object(i.lazy)(function () {
          return Promise.all([a.e(1), a.e(3), a.e(6), a.e(10), a.e(116)]).then(
            a.bind(null, 1073)
          );
        }),
        ee = Object(i.lazy)(function () {
          return Promise.all([a.e(1), a.e(3), a.e(6), a.e(10), a.e(115)]).then(
            a.bind(null, 1074)
          );
        }),
        te = Object(i.lazy)(function () {
          return Promise.all([a.e(1), a.e(3), a.e(6), a.e(10), a.e(117)]).then(
            a.bind(null, 1075)
          );
        }),
        ae = Object(i.lazy)(function () {
          return Promise.all([a.e(1), a.e(3), a.e(6), a.e(10), a.e(114)]).then(
            a.bind(null, 1076)
          );
        }),
        ie = Object(i.lazy)(function () {
          return Promise.all([a.e(4), a.e(6), a.e(13), a.e(16), a.e(149)]).then(
            a.bind(null, 1077)
          );
        }),
        se = Object(i.lazy)(function () {
          return Promise.all([a.e(1), a.e(3), a.e(4), a.e(6), a.e(33)]).then(
            a.bind(null, 1078)
          );
        }),
        oe = Object(i.lazy)(function () {
          return Promise.all([a.e(1), a.e(3), a.e(4), a.e(6), a.e(34)]).then(
            a.bind(null, 1079)
          );
        }),
        ue = Object(i.lazy)(function () {
          return Promise.all([a.e(1), a.e(3), a.e(4), a.e(6), a.e(37)]).then(
            a.bind(null, 1080)
          );
        }),
        re = Object(i.lazy)(function () {
          return Promise.all([a.e(1), a.e(3), a.e(4), a.e(6), a.e(36)]).then(
            a.bind(null, 1081)
          );
        }),
        ne = Object(i.lazy)(function () {
          return Promise.all([a.e(4), a.e(6), a.e(13), a.e(16), a.e(150)]).then(
            a.bind(null, 1082)
          );
        }),
        me = Object(i.lazy)(function () {
          return Promise.all([a.e(1), a.e(2), a.e(3), a.e(4), a.e(24)]).then(
            a.bind(null, 1083)
          );
        }),
        ce = Object(i.lazy)(function () {
          return Promise.all([a.e(1), a.e(2), a.e(3), a.e(4), a.e(26)]).then(
            a.bind(null, 1084)
          );
        }),
        le = Object(i.lazy)(function () {
          return Promise.all([a.e(1), a.e(2), a.e(3), a.e(4), a.e(27)]).then(
            a.bind(null, 1085)
          );
        }),
        pe = Object(i.lazy)(function () {
          return Promise.all([a.e(1), a.e(2), a.e(3), a.e(7), a.e(38)]).then(
            a.bind(null, 1185)
          );
        }),
        de = Object(i.lazy)(function () {
          return Promise.all([a.e(1), a.e(2), a.e(3), a.e(4), a.e(28)]).then(
            a.bind(null, 1179)
          );
        }),
        ge = Object(i.lazy)(function () {
          return Promise.all([a.e(1), a.e(2), a.e(3), a.e(4), a.e(25)]).then(
            a.bind(null, 1086)
          );
        }),
        qe = Object(i.lazy)(function () {
          return a.e(53).then(a.bind(null, 1186));
        }),
        he = Object(i.lazy)(function () {
          return a.e(59).then(a.bind(null, 1187));
        }),
        ve = Object(i.lazy)(function () {
          return a.e(52).then(a.bind(null, 1087));
        }),
        fe = Object(i.lazy)(function () {
          return Promise.all([a.e(11), a.e(54), a.e(130)]).then(
            a.bind(null, 1183)
          );
        }),
        be = Object(i.lazy)(function () {
          return Promise.all([a.e(4), a.e(17), a.e(44)]).then(
            a.bind(null, 1180)
          );
        }),
        je = Object(i.lazy)(function () {
          return Promise.all([a.e(42), a.e(146)]).then(a.bind(null, 1188));
        }),
        ke = Object(i.lazy)(function () {
          return Promise.all([a.e(2), a.e(20), a.e(151)]).then(
            a.bind(null, 1088)
          );
        }),
        ye = Object(i.lazy)(function () {
          return Promise.all([a.e(2), a.e(131)]).then(a.bind(null, 1089));
        }),
        xe = Object(i.lazy)(function () {
          return a.e(161).then(a.bind(null, 1090));
        }),
        we = Object(i.lazy)(function () {
          return a.e(49).then(a.bind(null, 1181));
        }),
        Ee = Object(i.lazy)(function () {
          return Promise.all([a.e(0), a.e(2), a.e(7), a.e(45), a.e(159)]).then(
            a.bind(null, 1091)
          );
        }),
        _e = Object(i.lazy)(function () {
          return Promise.all([a.e(2), a.e(18), a.e(104)]).then(
            a.bind(null, 1092)
          );
        }),
        De = Object(i.lazy)(function () {
          return Promise.all([a.e(2), a.e(46)]).then(a.bind(null, 863));
        }),
        Ne = Object(i.lazy)(function () {
          return Promise.all([a.e(2), a.e(18), a.e(147)]).then(
            a.bind(null, 864)
          );
        }),
        Se = Object(i.lazy)(function () {
          return Promise.all([a.e(0), a.e(88)]).then(a.bind(null, 1093));
        }),
        Oe = Object(i.lazy)(function () {
          return Promise.all([a.e(0), a.e(2), a.e(7), a.e(60)]).then(
            a.bind(null, 1094)
          );
        }),
        Ce = Object(i.lazy)(function () {
          return Promise.all([a.e(0), a.e(2), a.e(7), a.e(78)]).then(
            a.bind(null, 1095)
          );
        }),
        Le = Object(i.lazy)(function () {
          return Promise.all([a.e(0), a.e(2), a.e(7), a.e(75)]).then(
            a.bind(null, 1096)
          );
        }),
        Pe = Object(i.lazy)(function () {
          return Promise.all([a.e(0), a.e(89)]).then(a.bind(null, 1097));
        }),
        ze = Object(i.lazy)(function () {
          return a.e(87).then(a.bind(null, 1098));
        }),
        Ue = Object(i.lazy)(function () {
          return a.e(153).then(a.t.bind(null, 1099, 7));
        }),
        Qe = Object(i.lazy)(function () {
          return a.e(152).then(a.t.bind(null, 1100, 7));
        }),
        Ae = Object(i.lazy)(function () {
          return a.e(157).then(a.bind(null, 1101));
        }),
        Te = Object(i.lazy)(function () {
          return Promise.all([a.e(1), a.e(2), a.e(3), a.e(7), a.e(30)]).then(
            a.bind(null, 1102)
          );
        }),
        He = Object(i.lazy)(function () {
          return Promise.all([a.e(1), a.e(2), a.e(3), a.e(7), a.e(31)]).then(
            a.bind(null, 1103)
          );
        }),
        Fe = Object(i.lazy)(function () {
          return a.e(158).then(a.t.bind(null, 1104, 7));
        }),
        Be = Object(i.lazy)(function () {
          return Promise.all([a.e(1), a.e(2), a.e(3), a.e(7), a.e(29)]).then(
            a.bind(null, 1105)
          );
        }),
        Re = Object(i.lazy)(function () {
          return a.e(132).then(a.bind(null, 1106));
        }),
        Ie = Object(i.lazy)(function () {
          return Promise.all([a.e(0), a.e(118)]).then(a.bind(null, 1107));
        }),
        Me = Object(i.lazy)(function () {
          return Promise.all([a.e(0), a.e(92)]).then(a.bind(null, 1108));
        }),
        Ge = Object(i.lazy)(function () {
          return Promise.all([a.e(40), a.e(133)]).then(a.bind(null, 744));
        }),
        We = Object(i.lazy)(function () {
          return a.e(79).then(a.bind(null, 1109));
        }),
        Ke = Object(i.lazy)(function () {
          return Promise.all([a.e(8), a.e(81)]).then(a.bind(null, 1110));
        }),
        Ve = Object(i.lazy)(function () {
          return Promise.all([a.e(0), a.e(1), a.e(5), a.e(62)]).then(
            a.bind(null, 1111)
          );
        }),
        Ze = Object(i.lazy)(function () {
          return Promise.all([a.e(0), a.e(1), a.e(5), a.e(64)]).then(
            a.bind(null, 1115)
          );
        }),
        Ye = Object(i.lazy)(function () {
          return Promise.all([a.e(0), a.e(1), a.e(5), a.e(63)]).then(
            a.bind(null, 1116)
          );
        }),
        Je = Object(i.lazy)(function () {
          return Promise.all([a.e(0), a.e(1), a.e(5), a.e(43)]).then(
            a.bind(null, 1189)
          );
        }),
        Xe = Object(i.lazy)(function () {
          return a.e(122).then(a.bind(null, 1117));
        }),
        $e = Object(i.lazy)(function () {
          return Promise.all([a.e(0), a.e(1), a.e(5), a.e(65)]).then(
            a.bind(null, 1118)
          );
        }),
        et = Object(i.lazy)(function () {
          return a.e(121).then(a.bind(null, 1119));
        }),
        tt = Object(i.lazy)(function () {
          return a.e(123).then(a.bind(null, 1120));
        }),
        at = Object(i.lazy)(function () {
          return a.e(119).then(a.bind(null, 1121));
        }),
        it = Object(i.lazy)(function () {
          return a.e(120).then(a.bind(null, 1122));
        }),
        st = Object(i.lazy)(function () {
          return Promise.all([a.e(0), a.e(1), a.e(5), a.e(68)]).then(
            a.bind(null, 1123)
          );
        }),
        ot = Object(i.lazy)(function () {
          return Promise.all([a.e(0), a.e(1), a.e(5), a.e(61)]).then(
            a.bind(null, 1124)
          );
        }),
        ut = Object(i.lazy)(function () {
          return Promise.all([a.e(0), a.e(93)]).then(a.bind(null, 1125));
        }),
        rt = Object(i.lazy)(function () {
          return a.e(107).then(a.bind(null, 1126));
        }),
        nt = Object(i.lazy)(function () {
          return a.e(67).then(a.bind(null, 1127));
        }),
        mt = Object(i.lazy)(function () {
          return a.e(69).then(a.bind(null, 1128));
        }),
        ct = Object(i.lazy)(function () {
          return Promise.all([a.e(0), a.e(1), a.e(5), a.e(137)]).then(
            a.bind(null, 1129)
          );
        }),
        lt = Object(i.lazy)(function () {
          return Promise.all([a.e(0), a.e(99)]).then(a.bind(null, 1130));
        }),
        pt = Object(i.lazy)(function () {
          return Promise.all([a.e(0), a.e(100)]).then(a.bind(null, 1131));
        }),
        dt = Object(i.lazy)(function () {
          return Promise.all([a.e(0), a.e(15), a.e(134)]).then(
            a.bind(null, 1132)
          );
        }),
        gt = Object(i.lazy)(function () {
          return Promise.all([a.e(0), a.e(108)]).then(a.bind(null, 1133));
        }),
        qt = Object(i.lazy)(function () {
          return Promise.all([a.e(8), a.e(55)]).then(a.bind(null, 1134));
        }),
        ht = Object(i.lazy)(function () {
          return Promise.all([a.e(0), a.e(1), a.e(5), a.e(83)]).then(
            a.bind(null, 1135)
          );
        }),
        vt = Object(i.lazy)(function () {
          return Promise.all([a.e(0), a.e(1), a.e(5), a.e(80)]).then(
            a.bind(null, 1136)
          );
        }),
        ft = Object(i.lazy)(function () {
          return Promise.all([a.e(0), a.e(1), a.e(5), a.e(82)]).then(
            a.bind(null, 1137)
          );
        }),
        bt = Object(i.lazy)(function () {
          return a.e(127).then(a.bind(null, 1190));
        }),
        jt = Object(i.lazy)(function () {
          return a.e(129).then(a.bind(null, 862));
        }),
        kt = Object(i.lazy)(function () {
          return Promise.all([a.e(9), a.e(154)]).then(a.bind(null, 871));
        }),
        yt = Object(i.lazy)(function () {
          return a.e(111).then(a.bind(null, 851));
        }),
        xt = Object(i.lazy)(function () {
          return Promise.all([a.e(2), a.e(7), a.e(9), a.e(143)]).then(
            a.bind(null, 1138)
          );
        }),
        wt = Object(i.lazy)(function () {
          return a.e(125).then(a.bind(null, 852));
        }),
        Et = Object(i.lazy)(function () {
          return Promise.all([a.e(17), a.e(72)]).then(a.bind(null, 1139));
        }),
        _t = Object(i.lazy)(function () {
          return Promise.all([a.e(1), a.e(2), a.e(3), a.e(7), a.e(32)]).then(
            a.bind(null, 787)
          );
        }),
        Dt = Object(i.lazy)(function () {
          return Promise.all([a.e(0), a.e(20), a.e(51)]).then(
            a.bind(null, 1191)
          );
        }),
        Nt = Object(i.lazy)(function () {
          return a.e(126).then(a.bind(null, 1140));
        }),
        St = Object(i.lazy)(function () {
          return a.e(90).then(a.bind(null, 1141));
        }),
        Ot = Object(i.lazy)(function () {
          return a.e(128).then(a.bind(null, 853));
        }),
        Ct = Object(i.lazy)(function () {
          return a.e(112).then(a.bind(null, 1142));
        }),
        Lt = Object(i.lazy)(function () {
          return Promise.all([a.e(11), a.e(12), a.e(57)]).then(
            a.bind(null, 1143)
          );
        }),
        Pt = Object(i.lazy)(function () {
          return a.e(102).then(a.bind(null, 1144));
        }),
        zt = Object(i.lazy)(function () {
          return Promise.all([a.e(9), a.e(139)]).then(a.bind(null, 1145));
        }),
        Ut = Object(i.lazy)(function () {
          return Promise.all([a.e(9), a.e(140)]).then(a.bind(null, 1146));
        }),
        Qt = Object(i.lazy)(function () {
          return Promise.all([a.e(9), a.e(141)]).then(a.bind(null, 1147));
        }),
        At = Object(i.lazy)(function () {
          return Promise.all([a.e(9), a.e(142)]).then(a.bind(null, 1148));
        }),
        Tt = Object(i.lazy)(function () {
          return Promise.all([a.e(0), a.e(94)]).then(a.bind(null, 1149));
        }),
        Ht = Object(i.lazy)(function () {
          return Promise.all([a.e(0), a.e(95)]).then(a.bind(null, 1150));
        }),
        Ft = Object(i.lazy)(function () {
          return Promise.all([a.e(0), a.e(96)]).then(a.bind(null, 1151));
        }),
        Bt = Object(i.lazy)(function () {
          return Promise.all([a.e(0), a.e(97)]).then(a.bind(null, 1152));
        }),
        Rt = Object(i.lazy)(function () {
          return a.e(124).then(a.bind(null, 1153));
        }),
        It = Object(i.lazy)(function () {
          return Promise.all([a.e(8), a.e(11), a.e(12), a.e(101)]).then(
            a.bind(null, 1154)
          );
        }),
        Mt = Object(i.lazy)(function () {
          return Promise.all([a.e(8), a.e(98)]).then(a.bind(null, 1155));
        }),
        Gt = Object(i.lazy)(function () {
          return a.e(19).then(a.bind(null, 1156));
        }),
        Wt = Object(i.lazy)(function () {
          return Promise.all([a.e(0), a.e(11), a.e(12), a.e(48)]).then(
            a.bind(null, 1157)
          );
        }),
        Kt = Object(i.lazy)(function () {
          return a.e(136).then(a.bind(null, 814));
        }),
        Vt = Object(i.lazy)(function () {
          return Promise.all([a.e(4), a.e(110)]).then(a.bind(null, 1192));
        }),
        Zt = Object(i.lazy)(function () {
          return Promise.all([a.e(14), a.e(15), a.e(86)]).then(
            a.bind(null, 1158)
          );
        }),
        Yt = Object(i.lazy)(function () {
          return Promise.all([a.e(15), a.e(85)]).then(a.bind(null, 1159));
        }),
        Jt = Object(i.lazy)(function () {
          return Promise.all([a.e(8), a.e(138)]).then(a.bind(null, 821));
        }),
        Xt = Object(i.lazy)(function () {
          return Promise.all([a.e(8), a.e(135)]).then(a.bind(null, 773));
        }),
        $t = Object(i.lazy)(function () {
          return a.e(155).then(a.bind(null, 813));
        }),
        ea = Object(i.lazy)(function () {
          return Promise.all([a.e(4), a.e(144)]).then(a.bind(null, 854));
        }),
        ta = Object(i.lazy)(function () {
          return Promise.all([a.e(0), a.e(103)]).then(a.bind(null, 1193));
        }),
        aa = Object(i.lazy)(function () {
          return a.e(113).then(a.bind(null, 1184));
        }),
        ia = Object(i.lazy)(function () {
          return a.e(109).then(a.bind(null, 1160));
        }),
        sa = Object(i.lazy)(function () {
          return Promise.all([a.e(0), a.e(1), a.e(5), a.e(8), a.e(56)]).then(
            a.bind(null, 1161)
          );
        }),
        oa = Object(i.lazy)(function () {
          return Promise.all([a.e(0), a.e(73)]).then(a.bind(null, 1162));
        }),
        ua = Object(i.lazy)(function () {
          return Promise.all([a.e(14), a.e(70)]).then(a.bind(null, 1163));
        }),
        ra = Object(i.lazy)(function () {
          return a.e(71).then(a.bind(null, 1164));
        }),
        na = Object(i.lazy)(function () {
          return a.e(19).then(a.bind(null, 1156));
        }),
        ma = Object(i.lazy)(function () {
          return Promise.all([a.e(14), a.e(47)]).then(a.bind(null, 1165));
        }),
        ca = Object(i.lazy)(function () {
          return Promise.all([a.e(0), a.e(66)]).then(a.bind(null, 1166));
        }),
        la = Object(i.lazy)(function () {
          return Promise.all([a.e(0), a.e(84)]).then(a.bind(null, 1167));
        }),
        pa = Object(i.lazy)(function () {
          return Promise.all([a.e(0), a.e(91)]).then(a.bind(null, 1168));
        }),
        da = Object(i.lazy)(function () {
          return Promise.all([a.e(0), a.e(105)]).then(a.bind(null, 1169));
        }),
        ga = Object(i.lazy)(function () {
          return Promise.all([a.e(0), a.e(106)]).then(a.bind(null, 1170));
        }),
        qa = Object(i.lazy)(function () {
          return a.e(156).then(a.t.bind(null, 1171, 7));
        }),
        ha = Object(i.lazy)(function () {
          return Promise.all([a.e(50), a.e(145)]).then(a.bind(null, 1172));
        }),
        va = Object(i.lazy)(function () {
          return a.e(76).then(a.bind(null, 1173));
        }),
        fa = Object(i.lazy)(function () {
          return a.e(160).then(a.t.bind(null, 1174, 7));
        }),
        ba = Object(i.lazy)(function () {
          return a.e(58).then(a.bind(null, 1175));
        }),
        ja = Object(i.lazy)(function () {
          return a.e(74).then(a.bind(null, 1176));
        }),
        ka = Object(i.lazy)(function () {
          return a.e(77).then(a.bind(null, 1177));
        }),
        ya = Object(c.connect)()(
          Object(S.multilanguage)(function (e) {
            return (
              Object(i.useEffect)(function () {
                e.dispatch(
                  Object(S.loadLanguages)({
                    languages: { en: a(600), fn: a(601), de: a(602) },
                  })
                );
              }),
              s.a.createElement(
                U.ToastProvider,
                { placement: "bottom-left" },
                s.a.createElement(
                  Q.BreadcrumbsProvider,
                  null,
                  s.a.createElement(
                    z.a,
                    { history: Z },
                    s.a.createElement(
                      P,
                      null,
                      s.a.createElement(
                        i.Suspense,
                        {
                          fallback: s.a.createElement(
                            "div",
                            { className: "flone-preloader-wrapper" },
                            s.a.createElement(
                              "div",
                              { className: "flone-preloader" },
                              s.a.createElement("span", null),
                              s.a.createElement("span", null)
                            )
                          ),
                        },
                        s.a.createElement(
                          z.b,
                          null,
                          s.a.createElement(
                            L.d,
                            null,
                            s.a.createElement(L.b, {
                              exact: !0,
                              path: "/",
                              component: Y,
                            }),
                            s.a.createElement(L.b, {
                              path: "/homecategory",
                              component: kt,
                            }),
                            s.a.createElement(L.b, {
                              path: "/shop-grid-standard",
                              component: J,
                            }),
                            s.a.createElement(L.b, {
                              path: "/shop-grid-filter",
                              component: X,
                            }),
                            s.a.createElement(L.b, {
                              path: "/shop-grid-two-column",
                              component: $,
                            }),
                            s.a.createElement(L.b, {
                              path: "/shop-grid-men-column",
                              component: ee,
                            }),
                            s.a.createElement(L.b, {
                              path: "/shop-grid-women-column",
                              component: te,
                            }),
                            s.a.createElement(L.b, {
                              path: "/shop-grid-kids-column",
                              component: ae,
                            }),
                            s.a.createElement(L.b, {
                              path: "/shop-grid-no-sidebar",
                              component: ie,
                            }),
                            s.a.createElement(L.b, {
                              path: "/shop-grid-full-width",
                              component: se,
                            }),
                            s.a.createElement(L.b, {
                              path: "/shop-grid-right-sidebar",
                              component: oe,
                            }),
                            s.a.createElement(L.b, {
                              path: "/shop-list-standard/:_id",
                              render: function (e) {
                                return s.a.createElement(
                                  me,
                                  Object.assign({}, e, {
                                    key: e.match.params._id,
                                  })
                                );
                              },
                              component: ue,
                            }),
                            s.a.createElement(L.b, {
                              path: "/shop-list-full-width",
                              component: re,
                            }),
                            s.a.createElement(L.b, {
                              path: "/shop-list-two-column",
                              component: ne,
                            }),
                            s.a.createElement(L.b, {
                              path: "/product/:id",
                              render: function (e) {
                                return s.a.createElement(
                                  me,
                                  Object.assign({}, e, {
                                    key: e.match.params.id,
                                  })
                                );
                              },
                            }),
                            s.a.createElement(L.b, {
                              path: "/product-tab-left/:id",
                              component: ce,
                            }),
                            s.a.createElement(L.b, {
                              path: "/product-tab-right/:id",
                              component: le,
                            }),
                            s.a.createElement(L.b, {
                              path: "/product-sticky/:id",
                              component: pe,
                            }),
                            s.a.createElement(L.b, {
                              path: "/product-slider/:id",
                              component: de,
                            }),
                            s.a.createElement(L.b, {
                              path: "/room",
                              component: Ae,
                            }),
                            s.a.createElement(L.b, {
                              path: "/home",
                              component: qa,
                            }),
                            s.a.createElement(L.b, {
                              path: "/product-fixed-image/:id",
                              component: ge,
                            }),
                            s.a.createElement(L.b, {
                              path: "/blog-standard/:id",
                              component: qe,
                            }),
                            s.a.createElement(L.b, {
                              path: "/blog-details-standard/:id",
                              component: fe,
                            }),
                            s.a.createElement(L.b, {
                              path: "/blog-no-sidebar",
                              component: he,
                            }),
                            s.a.createElement(L.b, {
                              path: "/blog-right-sidebar",
                              component: ve,
                            }),
                            s.a.createElement(L.b, {
                              path: "/bannerSection",
                              component: bt,
                            }),
                            s.a.createElement(L.b, {
                              path: "/notificationlist",
                              component: ca,
                            }),
                            s.a.createElement(L.b, {
                              path: "/wallettransaclist",
                              component: ra,
                            }),
                            s.a.createElement(L.b, {
                              path: "/conversationList",
                              component: na,
                            }),
                            s.a.createElement(L.b, {
                              path: "/astrorating",
                              component: rt,
                            }),
                            s.a.createElement(L.b, {
                              path: "/lalKitab",
                              component: Ve,
                            }),
                            s.a.createElement(L.b, {
                              path: "/lalkitabPlanets",
                              component: Ze,
                            }),
                            s.a.createElement(L.b, {
                              path: "/lalKitabPage",
                              component: Ye,
                            }),
                            s.a.createElement(L.b, {
                              path: "/numerology",
                              component: Je,
                            }),
                            s.a.createElement(L.b, {
                              path: "/tarot",
                              component: Xe,
                            }),
                            s.a.createElement(L.b, {
                              path: "/loveAstrologer",
                              component: at,
                            }),
                            s.a.createElement(L.b, {
                              path: "/shubhMuhurat",
                              component: et,
                            }),
                            s.a.createElement(L.b, {
                              path: "/todayFestival",
                              component: tt,
                            }),
                            s.a.createElement(L.b, {
                              path: "/luckyGemstone",
                              component: $e,
                            }),
                            s.a.createElement(L.b, {
                              path: "/panchangPage",
                              component: it,
                            }),
                            s.a.createElement(L.b, {
                              path: "/todayPanchang",
                              component: st,
                            }),
                            s.a.createElement(L.b, {
                              path: "/basicPanchang",
                              component: ot,
                            }),
                            s.a.createElement(L.b, {
                              path: "/bookEvent",
                              component: ut,
                            }),
                            s.a.createElement(L.b, {
                              path: "/paymentdetail",
                              component: ma,
                            }),
                            s.a.createElement(L.b, {
                              path: "/walletaddform",
                              component: la,
                            }),
                            s.a.createElement(L.b, {
                              path: "/my-account",
                              component: we,
                            }),
                            s.a.createElement(L.b, {
                              path: "/my-order",
                              component: va,
                            }),
                            s.a.createElement(L.b, {
                              path: "/addEvent",
                              component: pa,
                            }),
                            s.a.createElement(L.b, {
                              path: "/addressform/:id",
                              component: da,
                            }),
                            s.a.createElement(L.b, {
                              path: "/askquestion/:id",
                              component: Me,
                            }),
                            s.a.createElement(L.b, {
                              path: "/askquestionList",
                              component: We,
                            }),
                            s.a.createElement(L.b, {
                              path: "/orderHistory",
                              component: nt,
                            }),
                            s.a.createElement(L.b, {
                              path: "/userChatHistoryList",
                              component: mt,
                            }),
                            s.a.createElement(L.b, {
                              path: "/astroProfileVideo",
                              component: Ge,
                            }),
                            s.a.createElement(L.b, {
                              path: "/walletmoney",
                              component: ua,
                            }),
                            s.a.createElement(L.b, {
                              path: "/liveAstrologer",
                              component: Ke,
                            }),
                            s.a.createElement(L.b, {
                              path: "/profiledetail",
                              component: Ct,
                            }),
                            s.a.createElement(L.b, {
                              path: "/TeamMemberOne",
                              component: jt,
                            }),
                            s.a.createElement(L.b, {
                              path: "/ourworkflow",
                              component: yt,
                            }),
                            s.a.createElement(L.b, {
                              path: "/predictionallhome",
                              component: xt,
                            }),
                            s.a.createElement(L.b, {
                              path: "/astrologerdetail/:id",
                              component: _t,
                            }),
                            s.a.createElement(L.b, {
                              path: "/astrologersignup",
                              component: Dt,
                            }),
                            s.a.createElement(L.b, {
                              path: "/astrologerlogin",
                              component: Nt,
                            }),
                            s.a.createElement(L.b, {
                              path: "/astroteam",
                              component: St,
                            }),
                            s.a.createElement(L.b, {
                              path: "/freekundli",
                              component: qt,
                            }),
                            s.a.createElement(L.b, {
                              path: "/manglikdosh",
                              component: ft,
                            }),
                            s.a.createElement(L.b, {
                              path: "/kalsharpdosh",
                              component: vt,
                            }),
                            s.a.createElement(L.b, {
                              path: "/pitradosh",
                              component: ht,
                            }),
                            s.a.createElement(L.b, {
                              path: "/sectionpooja",
                              component: Ot,
                            }),
                            s.a.createElement(L.b, {
                              path: "/aboutus",
                              component: wt,
                            }),
                            s.a.createElement(L.b, {
                              path: "/aboutdetail",
                              component: Et,
                            }),
                            s.a.createElement(L.b, {
                              path: "/faq",
                              component: ye,
                            }),
                            s.a.createElement(L.b, {
                              path: "/poojadetail/:id",
                              component: Lt,
                            }),
                            s.a.createElement(L.b, {
                              path: "/consultantlist/:id",
                              component: Gt,
                            }),
                            s.a.createElement(L.b, {
                              path: "/addressformedit/:id",
                              component: ga,
                            }),
                            s.a.createElement(L.b, {
                              path: "/cartlist/:id",
                              component: Wt,
                            }),
                            s.a.createElement(L.b, {
                              path: "/heroscopesall",
                              component: Pt,
                            }),
                            s.a.createElement(L.b, {
                              path: "/heroscopestwo",
                              component: zt,
                            }),
                            s.a.createElement(L.b, {
                              path: "/heroscopestwo1",
                              component: Ut,
                            }),
                            s.a.createElement(L.b, {
                              path: "/heroscopestwo2",
                              component: Qt,
                            }),
                            s.a.createElement(L.b, {
                              path: "/heroscopestwo3",
                              component: At,
                            }),
                            s.a.createElement(L.b, {
                              path: "/horoscopedetail/:id",
                              component: Tt,
                            }),
                            s.a.createElement(L.b, {
                              path: "/horoscopedetail1/:id",
                              component: Ht,
                            }),
                            s.a.createElement(L.b, {
                              path: "/horoscopedetail2/:id",
                              component: Ft,
                            }),
                            s.a.createElement(L.b, {
                              path: "/horoscopedetail3/:id",
                              component: Bt,
                            }),
                            s.a.createElement(L.b, {
                              path: "/zodicPage",
                              component: Rt,
                            }),
                            s.a.createElement(L.b, {
                              path: "/astromallList",
                              component: It,
                            }),
                            s.a.createElement(L.b, {
                              path: "/productlist/:id",
                              component: Mt,
                            }),
                            s.a.createElement(L.b, {
                              path: "/alertpage",
                              component: Re,
                            }),
                            s.a.createElement(L.b, {
                              path: "/customersupport",
                              component: Ie,
                            }),
                            s.a.createElement(L.b, {
                              path: "/customersupportform",
                              component: dt,
                            }),
                            s.a.createElement(L.b, {
                              path: "/customersupportview",
                              component: gt,
                            }),
                            s.a.createElement(L.b, {
                              path: "/userrequestform",
                              component: ct,
                            }),
                            s.a.createElement(L.b, {
                              path: "/userrequestformCall",
                              component: lt,
                            }),
                            s.a.createElement(L.b, {
                              path: "/userrequestformVideoCall",
                              component: pt,
                            }),
                            s.a.createElement(L.b, {
                              path: "/ourservice",
                              component: Kt,
                            }),
                            s.a.createElement(L.b, {
                              path: "/servicelist",
                              component: Vt,
                            }),
                            s.a.createElement(L.b, {
                              path: "/allastrologerlist",
                              component: Zt,
                            }),
                            s.a.createElement(L.b, {
                              path: "/allastrochatlist",
                              component: Yt,
                            }),
                            s.a.createElement(L.b, {
                              path: "/autosearch",
                              component: Jt,
                            }),
                            s.a.createElement(L.b, {
                              path: "/matchsearch",
                              component: Xt,
                            }),
                            s.a.createElement(L.b, {
                              path: "/sliderdemo",
                              component: $t,
                            }),
                            s.a.createElement(L.b, {
                              path: "/sliderlist",
                              component: ea,
                            }),
                            s.a.createElement(L.b, {
                              path: "/chatlist",
                              component: ta,
                            }),
                            s.a.createElement(L.b, {
                              path: "/chatApp",
                              component: aa,
                            }),
                            s.a.createElement(L.b, {
                              path: "/demochat",
                              component: ia,
                            }),
                            s.a.createElement(L.b, {
                              path: "/kundaliform",
                              component: sa,
                            }),
                            s.a.createElement(L.b, {
                              path: "/kundalimatchlist",
                              component: oa,
                            }),
                            s.a.createElement(L.b, {
                              path: "/about",
                              component: be,
                            }),
                            s.a.createElement(L.b, {
                              path: "/contact",
                              component: je,
                            }),
                            s.a.createElement(L.b, {
                              path: "/faqPage",
                              component: ke,
                            }),
                            s.a.createElement(L.b, {
                              path: "/privacyPolicy",
                              component: xe,
                            }),
                            s.a.createElement(L.b, {
                              path: "/TermsOfUse",
                              component: K,
                            }),
                            s.a.createElement(L.b, {
                              path: "/login-register",
                              component: Ee,
                            }),
                            s.a.createElement(L.b, {
                              path: "/Password",
                              component: Oe,
                            }),
                            s.a.createElement(L.b, {
                              path: "/ResetPassword",
                              component: Ce,
                            }),
                            s.a.createElement(L.b, {
                              path: "/ForgotPassword",
                              component: Le,
                            }),
                            s.a.createElement(L.b, {
                              path: "/otpverify",
                              component: Se,
                            }),
                            s.a.createElement(L.b, {
                              path: "/registerastro",
                              component: Pe,
                            }),
                            s.a.createElement(L.b, {
                              path: "/completeproastro",
                              component: ze,
                            }),
                            s.a.createElement(L.b, {
                              path: "/demovideocall",
                              component: Ue,
                            }),
                            s.a.createElement(L.b, {
                              path: "/democall",
                              component: Qe,
                            }),
                            s.a.createElement(L.b, {
                              path: "/step",
                              component: _e,
                            }),
                            s.a.createElement(L.b, {
                              path: "/Phone",
                              component: De,
                            }),
                            s.a.createElement(L.b, {
                              path: "/livevideo",
                              component: Te,
                            }),
                            s.a.createElement(L.b, {
                              path: "/videocall",
                              component: He,
                            }),
                            s.a.createElement(L.b, {
                              path: "/videocall2",
                              component: Fe,
                            }),
                            s.a.createElement(L.b, {
                              path: "/call",
                              component: Be,
                            }),
                            s.a.createElement(L.b, {
                              path: "/Otp",
                              component: Ne,
                            }),
                            s.a.createElement(L.b, {
                              render: function () {
                                return localStorage.getItem("auth-token")
                                  ? s.a.createElement(
                                      s.a.Fragment,
                                      null,
                                      s.a.createElement(L.b, {
                                        path: "/cart",
                                        component: ha,
                                      }),
                                      s.a.createElement(L.b, {
                                        path: "/wishlist",
                                        component: fa,
                                      }),
                                      s.a.createElement(L.b, {
                                        path: "/checkout",
                                        component: ja,
                                      })
                                    )
                                  : s.a.createElement(L.a, {
                                      to: "/login-register",
                                    });
                              },
                            }),
                            s.a.createElement(L.b, {
                              path: "/compare",
                              component: ba,
                            }),
                            s.a.createElement(L.b, {
                              path: "/not-found",
                              component: ka,
                            }),
                            s.a.createElement(L.b, { exact: !0, component: ka })
                          )
                        )
                      )
                    )
                  )
                )
              )
            );
          })
        );
      a(603),
        Boolean(
          "localhost" === window.location.hostname ||
            "[::1]" === window.location.hostname ||
            window.location.hostname.match(
              /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
            )
        );
      var xa = a(318),
        wa = Object(r.createStore)(
          O,
          Object(m.load)(),
          Object(xa.composeWithDevTools)(
            Object(r.applyMiddleware)(n.a, Object(m.save)())
          )
        );
      wa.dispatch(
        (function (e) {
          return function (t) {
            t(
              (function (e) {
                return { type: "FETCH_PRODUCTS_SUCCESS", payload: e };
              })(e)
            );
          };
        })(C)
      ),
        u.a.render(
          s.a.createElement(
            c.Provider,
            { store: wa },
            s.a.createElement(ya, null)
          ),
          document.getElementById("root")
        ),
        "serviceWorker" in navigator &&
          navigator.serviceWorker.ready.then(function (e) {
            e.unregister();
          });
    },
    71: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return s;
      }),
        a.d(t, "b", function () {
          return o;
        }),
        a.d(t, "d", function () {
          return u;
        }),
        a.d(t, "c", function () {
          return r;
        }),
        a.d(t, "e", function () {
          return n;
        }),
        a.d(t, "f", function () {
          return m;
        }),
        a.d(t, "h", function () {
          return c;
        }),
        a.d(t, "g", function () {
          return l;
        });
      var i = a(18),
        s = "ADD_TO_CART",
        o = "DECREASE_QUANTITY",
        u = "DELETE_FROM_CART",
        r = "DELETE_ALL_FROM_CART",
        n = function (e, t, a, o, u) {
          return function (r) {
            t && t("Added To Cart", { appearance: "success", autoDismiss: !0 }),
              r({
                type: s,
                payload: Object(i.a)(
                  Object(i.a)({}, e),
                  {},
                  {
                    quantity: a,
                    selectedProductColor:
                      o || (e.colorName ? e.colorName : null),
                    selectedProductSize:
                      u || (e.colorName ? e.colorName : null),
                  }
                ),
              });
          };
        },
        m = function (e, t) {
          return function (a) {
            t &&
              t("Item Decremented From Cart", {
                appearance: "warning",
                autoDismiss: !0,
              }),
              a({ type: o, payload: e });
          };
        },
        c = function (e, t) {
          return function (a) {
            t &&
              t("Removed From Cart", { appearance: "error", autoDismiss: !0 }),
              a({ type: u, payload: e });
          };
        },
        l = function (e) {
          return function (t) {
            e &&
              e("Removed All From Cart", {
                appearance: "error",
                autoDismiss: !0,
              }),
              t({ type: r });
          };
        };
    },
    78: function (e, t, a) {
      "use strict";
      var i = a(55),
        s = a.n(i).a.create({ baseURL: "http://13.234.48.35:8000" });
      t.a = s;
    },
    90: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return o;
      }),
        a.d(t, "b", function () {
          return u;
        });
      var i = a(55),
        s = a.n(i),
        o = "SET_CURRENCY",
        u = function (e) {
          return function (t) {
            s.a
              .get(
                "http://api.exchangeratesapi.io/v1/latest?access_key=523380ab42abd25f9ebdc193dd3b19e7&symbols=USD,GBP,EUR,INR"
              )
              .then(function (a) {
                var i = a.data.rates,
                  s = 0;
                for (var u in i) u === e && (s = i[u]);
                t({ type: o, payload: { currencyName: e, currencyRate: s } });
              })
              .catch(function (e) {
                console.log("Error: ", e), console.log(e.response);
              });
          };
        };
    },
  },
  [[323, 22, 23]],
]);
//# sourceMappingURL=main.930f244a.chunk.js.map
