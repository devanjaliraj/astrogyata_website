(this["webpackJsonpflone-react"] = this["webpackJsonpflone-react"] || []).push([
  [95],
  {
    1017: function (e, a, t) {
      e.exports = t.p + "static/media/tilak.7908f7b9.png";
    },
    1144: function (e, a, t) {
      "use strict";
      t.r(a);
      var n = t(200),
        l = t(196),
        s = t(197),
        c = t(198),
        o = t(199),
        r = t(0),
        i = t.n(r),
        d = t(25),
        u =
          (t(766),
          function () {
            var e = Object(r.useState)(0),
              a = Object(d.a)(e, 2),
              t = a[0],
              n = a[1],
              l = Object(r.useState)(!1),
              s = Object(d.a)(l, 2),
              c = s[0],
              o = s[1];
            return (
              Object(r.useEffect)(
                function () {
                  var e;
                  return (
                    c
                      ? (e = setInterval(function () {
                          n(function (e) {
                            return e + 10;
                          });
                        }, 10))
                      : c || clearInterval(e),
                    function () {
                      return clearInterval(e);
                    }
                  );
                },
                [c]
              ),
              i.a.createElement(
                "div",
                { className: "stopwatch" },
                i.a.createElement(
                  "div",
                  { className: "numbers" },
                  i.a.createElement(
                    "span",
                    null,
                    ("0" + Math.floor((t / 6e4) % 60)).slice(-2),
                    ":"
                  ),
                  i.a.createElement(
                    "span",
                    null,
                    ("0" + Math.floor((t / 1e3) % 60)).slice(-2),
                    ":"
                  ),
                  i.a.createElement(
                    "span",
                    null,
                    ("0" + ((t / 10) % 100)).slice(-2)
                  )
                ),
                i.a.createElement(
                  "div",
                  { className: "buttons" },
                  i.a.createElement(
                    "button",
                    {
                      onClick: function () {
                        return o(!0);
                      },
                    },
                    "Start"
                  ),
                  i.a.createElement(
                    "button",
                    {
                      onClick: function () {
                        return o(!1);
                      },
                    },
                    "Stop"
                  ),
                  i.a.createElement(
                    "button",
                    {
                      onClick: function () {
                        return n(0);
                      },
                    },
                    "Reset"
                  )
                )
              )
            );
          }),
        m = t(603),
        v = t(604),
        f = t(617),
        g = (t(1017), t(201)),
        p = t(636),
        h = t.n(p),
        E = t(204),
        b = (function (e) {
          Object(c.a)(t, e);
          var a = Object(o.a)(t);
          function t(e) {
            var s;
            return (
              Object(l.a)(this, t),
              ((s = a.call(this, e)).componentDidMount = function () {
                var e = JSON.parse(localStorage.getItem("astroId"));
                E.a
                  .get("/admin/getoneAstro/".concat(e))
                  .then(function (e) {
                    var a, t, l, c, o;
                    console.log(e.data),
                      s.setState(
                        ((o = {
                          fullname: e.data.data.fullname,
                          all_skills: e.data.data.all_skills,
                          language: e.data.data.language,
                          img: e.data.data.img[0],
                          status: e.data.status,
                        }),
                        Object(n.a)(
                          o,
                          "status",
                          null === e ||
                            void 0 === e ||
                            null === (a = e.data) ||
                            void 0 === a ||
                            null === (t = a.data) ||
                            void 0 === t
                            ? void 0
                            : t.status
                        ),
                        Object(n.a)(
                          o,
                          "astroId",
                          null === e ||
                            void 0 === e ||
                            null === (l = e.data) ||
                            void 0 === l ||
                            null === (c = l.data) ||
                            void 0 === c
                            ? void 0
                            : c._id
                        ),
                        o)
                      );
                  })
                  .catch(function (e) {
                    console.log(e);
                  });
              }),
              (s.submitHandler = function (e, a, t, n) {
                e.preventDefault();
                var l = s.props.match.params.id,
                  c = JSON.parse(localStorage.getItem("user_id")),
                  o = {
                    astroId: l,
                    astroid: a,
                    roomId: l,
                    roomid: n,
                    userid: c,
                    msg: s.state.msg,
                  };
                E.a
                  .post("/user/addchat/".concat(c), o)
                  .then(function (e) {
                    var a, t, n, l, c, o, r, i;
                    (console.log(
                      "@@@@@",
                      null === e ||
                        void 0 === e ||
                        null === (a = e.data) ||
                        void 0 === a ||
                        null === (t = a.data) ||
                        void 0 === t
                        ? void 0
                        : t.roomid
                    ),
                    s.setState({ msg: "" }),
                    s.setState({
                      roomid:
                        null === e ||
                        void 0 === e ||
                        null === (n = e.data) ||
                        void 0 === n ||
                        null === (l = n.data) ||
                        void 0 === l
                          ? void 0
                          : l.roomid,
                    }),
                    void 0 !==
                      (null === e ||
                      void 0 === e ||
                      null === (c = e.data) ||
                      void 0 === c ||
                      null === (o = c.data) ||
                      void 0 === o
                        ? void 0
                        : o.roomid)) &&
                      E.a
                        .get(
                          "/user/allchatwithuser/" +
                            (null === e ||
                            void 0 === e ||
                            null === (r = e.data) ||
                            void 0 === r ||
                            null === (i = r.data) ||
                            void 0 === i
                              ? void 0
                              : i.roomid)
                        )
                        .then(function (e) {
                          var a;
                          console.log("ROOMID", e.data.data),
                            s.setState({
                              msg: "",
                              chatMsgList:
                                null === e ||
                                void 0 === e ||
                                null === (a = e.data) ||
                                void 0 === a
                                  ? void 0
                                  : a.data,
                            });
                        })
                        .catch(function (e) {
                          console.log(e);
                        });
                    h()("Success!", "Submitted SuccessFull!", "success");
                  })
                  .catch(function (e) {
                    h()("Error!", "You clicked the button!", "error"),
                      console.log(e);
                  });
              }),
              (s.handleChange = function (e) {
                s.setState({ msg: e.target.value });
              }),
              (s.state = {
                astroid: "",
                msg: "",
                chatMsgList: [],
                userId: "",
                roomid: "",
              }),
              s
            );
          }
          return (
            Object(s.a)(t, [
              {
                key: "render",
                value: function () {
                  var e,
                    a = this,
                    t = this.state.chatMsgList;
                  return i.a.createElement(
                    g.a,
                    { headerTop: "visible" },
                    i.a.createElement(
                      "section",
                      { className: "pt-0 pb-0" },
                      i.a.createElement(
                        "div",
                        {
                          className: "",
                          style: {
                            backgroundColor: "#ffcc01",
                            width: "100%",
                            padding: "70px 0px",
                            backgroundSize: "cover",
                          },
                        },
                        i.a.createElement(
                          m.a,
                          null,
                          i.a.createElement(
                            v.a,
                            null,
                            i.a.createElement(
                              f.a,
                              { md: "12" },
                              i.a.createElement(
                                "div",
                                { className: "leftcont text-left" },
                                i.a.createElement(
                                  "h1",
                                  null,
                                  "Chat With Best Astrologers"
                                )
                              )
                            )
                          )
                        )
                      )
                    ),
                    i.a.createElement(
                      "section",
                      null,
                      i.a.createElement(
                        m.a,
                        null,
                        i.a.createElement(
                          "div",
                          { className: "" },
                          i.a.createElement(
                            "div",
                            { className: "" },
                            i.a.createElement(
                              "div",
                              { className: "col-md-12 col-xl-12 chat" },
                              i.a.createElement(
                                "div",
                                {
                                  className: "card cardchat",
                                  style: {
                                    backgroundColor: "#f0f0f0",
                                    width: "100%",
                                  },
                                },
                                i.a.createElement(
                                  "div",
                                  { className: "card-header msg_head" },
                                  i.a.createElement(
                                    "div",
                                    { className: "d-flex " },
                                    i.a.createElement(
                                      "div",
                                      { className: "img_cont" },
                                      i.a.createElement("img", {
                                        src:
                                          null === (e = this.state) ||
                                          void 0 === e
                                            ? void 0
                                            : e.img,
                                        alt: "",
                                        className: "rounded-circle user_st",
                                      }),
                                      i.a.createElement("span", {
                                        className: "online_icon",
                                      })
                                    ),
                                    i.a.createElement(
                                      "div",
                                      { className: "user_info" },
                                      i.a.createElement("span", null, "Tilak"),
                                      i.a.createElement(u, null),
                                      i.a.createElement("p", null, "typing....")
                                    )
                                  )
                                ),
                                i.a.createElement(
                                  "div",
                                  null,
                                  t.length > 0
                                    ? t.map(function (e, a) {
                                        return i.a.createElement(
                                          "div",
                                          null,
                                          i.a.createElement(
                                            "div",
                                            {
                                              className:
                                                "card-body msg_card_body",
                                            },
                                            i.a.createElement(
                                              "div",
                                              {
                                                className:
                                                  "d-flex justify-content-start mb-4",
                                              },
                                              i.a.createElement(
                                                "div",
                                                { className: "msg_cotainer" },
                                                e.msg_reply,
                                                i.a.createElement(
                                                  "span",
                                                  { className: "msg_time" },
                                                  "8:40 AM, Today"
                                                )
                                              )
                                            )
                                          ),
                                          i.a.createElement(
                                            "div",
                                            {
                                              className:
                                                "card-body msg_card_body",
                                            },
                                            i.a.createElement(
                                              "div",
                                              {
                                                className:
                                                  "d-flex justify-content-end mb-4",
                                              },
                                              i.a.createElement(
                                                "div",
                                                {
                                                  className:
                                                    "msg_cotainer_send",
                                                },
                                                e.msg,
                                                i.a.createElement(
                                                  "span",
                                                  {
                                                    className: "msg_time_send",
                                                  },
                                                  "8:55 AM, Today"
                                                )
                                              )
                                            )
                                          )
                                        );
                                      })
                                    : ""
                                ),
                                i.a.createElement(
                                  "div",
                                  { className: "card-footer" },
                                  i.a.createElement(
                                    "div",
                                    { className: "input-group" },
                                    i.a.createElement(
                                      "div",
                                      { className: "input-group-append" },
                                      i.a.createElement(
                                        "span",
                                        {
                                          className:
                                            "input-group-text attach_btn",
                                        },
                                        i.a.createElement("i", {
                                          class: "fa fa-paperclip",
                                          "aria-hidden": "true",
                                        })
                                      )
                                    ),
                                    i.a.createElement("textarea", {
                                      name: !0,
                                      className: "form-control type_msg",
                                      placeholder: "Type your message...",
                                      onChange: function (e) {
                                        a.handleChange(e);
                                      },
                                      value: this.state.msg,
                                      defaultValue: "",
                                    }),
                                    i.a.createElement(
                                      "div",
                                      { className: "input-group-append" },
                                      i.a.createElement(
                                        "span",
                                        {
                                          className:
                                            "input-group-text send_btn",
                                          onClick: function (e) {
                                            return a.submitHandler(
                                              e,
                                              a.state.astroId,
                                              a.state.userId,
                                              a.state.roomid
                                            );
                                          },
                                        },
                                        i.a.createElement("i", {
                                          class: "fa fa-location-arrow",
                                          "aria-hidden": "true",
                                        })
                                      )
                                    )
                                  )
                                )
                              )
                            )
                          )
                        )
                      )
                    )
                  );
                },
              },
            ]),
            t
          );
        })(i.a.Component);
      a.default = b;
    },
    617: function (e, a, t) {
      "use strict";
      var n = t(7),
        l = t(15),
        s = t(0),
        c = t.n(s),
        o = t(4),
        r = t.n(o),
        i = t(77),
        d = t.n(i),
        u = t(55),
        m = ["className", "cssModule", "widths", "tag"],
        v = r.a.oneOfType([r.a.number, r.a.string]),
        f = r.a.oneOfType([
          r.a.bool,
          r.a.number,
          r.a.string,
          r.a.shape({
            size: r.a.oneOfType([r.a.bool, r.a.number, r.a.string]),
            order: v,
            offset: v,
          }),
        ]),
        g = {
          tag: u.n,
          xs: f,
          sm: f,
          md: f,
          lg: f,
          xl: f,
          className: r.a.string,
          cssModule: r.a.object,
          widths: r.a.array,
        },
        p = { tag: "div", widths: ["xs", "sm", "md", "lg", "xl"] },
        h = function (e, a, t) {
          return !0 === t || "" === t
            ? e
              ? "col"
              : "col-" + a
            : "auto" === t
            ? e
              ? "col-auto"
              : "col-" + a + "-auto"
            : e
            ? "col-" + t
            : "col-" + a + "-" + t;
        },
        E = function (e) {
          var a = e.className,
            t = e.cssModule,
            s = e.widths,
            o = e.tag,
            r = Object(l.a)(e, m),
            i = [];
          s.forEach(function (a, n) {
            var l = e[a];
            if ((delete r[a], l || "" === l)) {
              var s = !n;
              if (Object(u.h)(l)) {
                var c,
                  o = s ? "-" : "-" + a + "-",
                  m = h(s, a, l.size);
                i.push(
                  Object(u.j)(
                    d()(
                      (((c = {})[m] = l.size || "" === l.size),
                      (c["order" + o + l.order] = l.order || 0 === l.order),
                      (c["offset" + o + l.offset] = l.offset || 0 === l.offset),
                      c)
                    ),
                    t
                  )
                );
              } else {
                var v = h(s, a, l);
                i.push(v);
              }
            }
          }),
            i.length || i.push("col");
          var v = Object(u.j)(d()(a, i), t);
          return c.a.createElement(o, Object(n.a)({}, r, { className: v }));
        };
      (E.propTypes = g), (E.defaultProps = p), (a.a = E);
    },
    766: function (e, a, t) {},
  },
]);
//# sourceMappingURL=95.4c7446b7.chunk.js.map
