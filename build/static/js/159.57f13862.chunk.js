(this["webpackJsonpflone-react"] = this["webpackJsonpflone-react"] || []).push([
  [159],
  {
    1091: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, "default", function () {
          return I;
        });
      var n = a(804),
        l = a(202),
        r = a(196),
        o = a(197),
        s = a(198),
        c = a(199),
        i = a(0),
        m = a.n(i),
        d = a(621),
        u = a.n(d),
        g = a(649),
        p = a(663),
        E = (a(55), a(201)),
        h = a(666),
        f = a(690),
        v = a(607),
        b = a(618),
        y = a(958),
        N = a(644),
        S = a(956),
        w = a.n(S),
        C = (a(957), a(632)),
        H = a.n(C),
        O = a(2),
        P = a(78),
        I = (function (e) {
          Object(s.a)(a, e);
          var t = Object(c.a)(a);
          function a(e) {
            var o;
            return (
              Object(r.a)(this, a),
              ((o = t.call(this, e)).onChangeHandler = function (e) {
                o.setState({ selectedFile: e.target.files[0] }),
                  o.setState({ selectedName: e.target.files[0].name }),
                  console.log(e.target.files[0]);
              }),
              (o.otpHandler = function (e) {
                e.preventDefault(),
                  console.log("dddddhh", o.state),
                  P.a
                    .post("/user/userVryfyotp", {
                      mobile: parseInt(o.state.mobile),
                      otp: parseInt(o.state.otp),
                    })
                    .then(function (e) {
                      var t, a, n, l, r, s;
                      (console.log("@@@####", e.data), !0 === e.data.status) &&
                        (o.setState({ otpMsg: e.data.msg }),
                        localStorage.setItem(
                          "userData",
                          JSON.stringify(
                            null === e ||
                              void 0 === e ||
                              null === (t = e.data) ||
                              void 0 === t
                              ? void 0
                              : t.data
                          )
                        ),
                        localStorage.setItem(
                          "token",
                          JSON.stringify(
                            null === e ||
                              void 0 === e ||
                              null === (a = e.data) ||
                              void 0 === a
                              ? void 0
                              : a.token
                          )
                        ),
                        localStorage.setItem(
                          "user_id",
                          JSON.stringify(
                            null === e ||
                              void 0 === e ||
                              null === (n = e.data) ||
                              void 0 === n ||
                              null === (l = n.data) ||
                              void 0 === l
                              ? void 0
                              : l._id
                          )
                        ),
                        localStorage.setItem(
                          "user_mobile_no",
                          JSON.stringify(
                            null === e ||
                              void 0 === e ||
                              null === (r = e.data) ||
                              void 0 === r ||
                              null === (s = r.data) ||
                              void 0 === s
                              ? void 0
                              : s.mobile
                          )
                        ),
                        "otp verified" === e.data.msg &&
                          o.props.history.push("/"));
                    })
                    .catch(function (e) {
                      console.log(e);
                    });
              }),
              (o.loginHandler = function (e) {
                if ((e.preventDefault(), "" !== o.state.mobile)) {
                  var t = { mobile: parseInt(o.state.mobile) };
                  P.a
                    .post("http://13.234.48.35:8000/user/userlogin", t)
                    .then(function (e) {
                      console.log("@@@####", e.data),
                        o.setState({ otpMsg: e.data.msg }),
                        "otp Send Successfully" === e.data.msg &&
                          (localStorage.setItem("mobileNumber", o.state.mobile),
                          H()("OTP Send Successfully"));
                    })
                    .catch(function (e) {
                      console.log(e),
                        console.log(e.response),
                        H()("Error!", "User doesn't Exist", "error");
                    });
                } else
                  o.setState({ mobileError: "Please enter mobile number" });
              }),
              (o.changeHandler = function (e) {
                e.preventDefault(),
                  o.setState(Object(l.a)({}, e.target.name, e.target.value));
              }),
              (o.submitHandler = function (e) {
                e.preventDefault(), console.log(o.state.data);
                var t = new FormData();
                t.append("fullname", o.state.fullname),
                  t.append("email", o.state.email),
                  t.append("mobile", o.state.mobile),
                  t.append("gender", o.state.gender),
                  t.append("city", o.state.city),
                  t.append("dob", o.state.dob),
                  t.append("password", o.state.password),
                  t.append("cnfmPassword", o.state.cnfmPassword),
                  null !== o.state.selectedFile &&
                    t.append(
                      "userimg",
                      o.state.selectedFile,
                      o.state.selectedName
                    );
                var a,
                  l = Object(n.a)(t.values());
                try {
                  for (l.s(); !(a = l.n()).done; ) {
                    var r = a.value;
                    console.log(r);
                  }
                } catch (m) {
                  l.e(m);
                } finally {
                  l.f();
                }
                var s,
                  c = Object(n.a)(t.keys());
                try {
                  for (c.s(); !(s = c.n()).done; ) {
                    var i = s.value;
                    console.log(i);
                  }
                } catch (m) {
                  c.e(m);
                } finally {
                  c.f();
                }
                P.a
                  .post("http://13.234.48.35:8000/user/usersignup", t)
                  .then(function (e) {
                    console.log(e.data.msg),
                      localStorage.setItem("auth-token", e.data.token),
                      o.setState({ otpMsg: e.data.otp }),
                      H()("Success!", " Register Successful Done!", "success"),
                      o.props.history.push("/");
                  })
                  .catch(function (e) {
                    console.log(e.response),
                      H()("Error!", "Something went wrong", "error");
                  });
              }),
              (o.state = {
                fullname: "",
                email: "",
                mobile: "",
                dob: "",
                gender: "",
                city: "",
                userimg: "",
                selectedName: "",
                selectedFile: null,
                otp: "",
                otpMsg: "",
                passMsg: "",
                cnfmPassword: "",
                password: "",
                mobileError: "",
              }),
              o
            );
          }
          return (
            Object(o.a)(a, [
              {
                key: "render",
                value: function () {
                  var e = this;
                  return m.a.createElement(
                    i.Fragment,
                    null,
                    m.a.createElement(
                      u.a,
                      null,
                      m.a.createElement("title", null, "Astrogyata"),
                      m.a.createElement("meta", {
                        name: "description",
                        content:
                          "Compare page of flone react minimalist eCommerce template.",
                      })
                    ),
                    m.a.createElement(
                      E.a,
                      { headerTop: "visible" },
                      m.a.createElement(
                        "div",
                        { className: "login-register-area pt-100 pb-100" },
                        m.a.createElement(
                          "div",
                          { className: "container" },
                          m.a.createElement(
                            "div",
                            {
                              className:
                                "row d-flex align-items-center justify-content-center",
                            },
                            m.a.createElement(
                              "div",
                              {
                                className: "col-lg-7 col-md-12 ml-auto mr-auto",
                              },
                              m.a.createElement(
                                "div",
                                { className: "login-register-wrapper" },
                                m.a.createElement(
                                  g.a.Container,
                                  { defaultActiveKey: "login" },
                                  m.a.createElement(
                                    p.a,
                                    {
                                      variant: "pills",
                                      className: "login-register-tab-list",
                                    },
                                    m.a.createElement(
                                      p.a.Item,
                                      null,
                                      m.a.createElement(
                                        p.a.Link,
                                        { eventKey: "login" },
                                        m.a.createElement("h4", null, "Login")
                                      )
                                    ),
                                    m.a.createElement(
                                      p.a.Item,
                                      null,
                                      m.a.createElement(
                                        p.a.Link,
                                        { eventKey: "register" },
                                        m.a.createElement(
                                          "h4",
                                          null,
                                          "Register"
                                        )
                                      )
                                    )
                                  ),
                                  m.a.createElement(
                                    g.a.Content,
                                    null,
                                    m.a.createElement(
                                      g.a.Pane,
                                      { eventKey: "login" },
                                      m.a.createElement(
                                        "div",
                                        { className: "login-form-container" },
                                        "otp Send Successfully" ===
                                          this.state.otpMsg
                                          ? m.a.createElement(
                                              "div",
                                              {
                                                className:
                                                  "login-register-form",
                                              },
                                              m.a.createElement(
                                                h.a,
                                                { onSubmit: this.otpHandler },
                                                m.a.createElement(f.a, {
                                                  type: "otp",
                                                  name: "otp",
                                                  required: !0,
                                                  placeholder: "Enter OTP",
                                                  value: this.state.otp,
                                                  onChange: this.changeHandler,
                                                }),
                                                m.a.createElement(
                                                  "div",
                                                  { className: "button-box" },
                                                  m.a.createElement(
                                                    "div",
                                                    {
                                                      className:
                                                        "login-toggle-btn",
                                                    },
                                                    m.a.createElement(
                                                      O.c,
                                                      { to: "/password" },
                                                      "Login with password"
                                                    )
                                                  ),
                                                  m.a.createElement("div", {
                                                    className:
                                                      "login-toggle-btn",
                                                  }),
                                                  m.a.createElement(
                                                    "button",
                                                    { type: "submit" },
                                                    m.a.createElement(
                                                      "span",
                                                      null,
                                                      "OTP Verify"
                                                    )
                                                  )
                                                )
                                              )
                                            )
                                          : m.a.createElement(
                                              "div",
                                              {
                                                className:
                                                  "login-register-form",
                                              },
                                              m.a.createElement(
                                                h.a,
                                                { onSubmit: this.loginHandler },
                                                m.a.createElement(
                                                  v.a,
                                                  null,
                                                  m.a.createElement(
                                                    b.a,
                                                    { md: "12" },
                                                    m.a.createElement(w.a, {
                                                      className: "mob-int",
                                                      country: "in",
                                                      value: this.state.mobile,
                                                      onChange: function (t) {
                                                        return e.setState({
                                                          mobile: t,
                                                        });
                                                      },
                                                      width: "100%",
                                                    }),
                                                    "" !==
                                                      this.state.mobileError
                                                      ? m.a.createElement(
                                                          "span",
                                                          {
                                                            style: {
                                                              color: "red",
                                                            },
                                                          },
                                                          this.state.mobileError
                                                        )
                                                      : null
                                                  )
                                                ),
                                                m.a.createElement(
                                                  "div",
                                                  { className: "button-box" },
                                                  m.a.createElement(
                                                    "div",
                                                    {
                                                      className:
                                                        "login-toggle-btn",
                                                    },
                                                    m.a.createElement(
                                                      O.c,
                                                      { to: "/ForgotPassword" },
                                                      "Forgot Password?"
                                                    )
                                                  ),
                                                  m.a.createElement("div", {
                                                    className:
                                                      "login-toggle-btn",
                                                  }),
                                                  m.a.createElement(
                                                    "button",
                                                    { type: "submit" },
                                                    m.a.createElement(
                                                      "span",
                                                      null,
                                                      "Login"
                                                    )
                                                  )
                                                )
                                              )
                                            )
                                      )
                                    ),
                                    m.a.createElement(
                                      g.a.Pane,
                                      { eventKey: "register" },
                                      m.a.createElement(
                                        "div",
                                        { className: "login-form-container" },
                                        m.a.createElement(
                                          "div",
                                          { className: "login-register-form" },
                                          m.a.createElement(
                                            h.a,
                                            {
                                              className: "text-center",
                                              onSubmit: this.submitHandler,
                                              method: "post",
                                            },
                                            m.a.createElement(
                                              v.a,
                                              null,
                                              m.a.createElement(
                                                b.a,
                                                { md: "12" },
                                                m.a.createElement(
                                                  y.a,
                                                  null,
                                                  "User Image"
                                                ),
                                                m.a.createElement(f.a, {
                                                  type: "file",
                                                  name: "userimg",
                                                  onChange:
                                                    this.onChangeHandler,
                                                  className: "form-controller",
                                                })
                                              ),
                                              m.a.createElement(
                                                b.a,
                                                { md: "6" },
                                                m.a.createElement(f.a, {
                                                  type: "text",
                                                  name: "fullname",
                                                  required: !0,
                                                  placeholder:
                                                    "Enter Your Fullname",
                                                  value: this.state.fullname,
                                                  onChange: this.changeHandler,
                                                  className: "form-controller",
                                                })
                                              ),
                                              m.a.createElement(
                                                b.a,
                                                { md: "6" },
                                                m.a.createElement(f.a, {
                                                  type: "email",
                                                  name: "email",
                                                  required: !0,
                                                  placeholder:
                                                    "Enter Your Email",
                                                  value: this.state.email,
                                                  onChange: this.changeHandler,
                                                  className: "form-controller",
                                                })
                                              ),
                                              m.a.createElement(
                                                b.a,
                                                { md: "6" },
                                                m.a.createElement(w.a, {
                                                  country: "in",
                                                  value: this.state.mobile,
                                                  onChange: function (t) {
                                                    return e.setState({
                                                      mobile: t,
                                                    });
                                                  },
                                                  width: "80%",
                                                  className: "form-controller",
                                                })
                                              ),
                                              m.a.createElement(
                                                b.a,
                                                { md: "6" },
                                                m.a.createElement(f.a, {
                                                  type: "password",
                                                  name: "password",
                                                  maxLength: "12",
                                                  required: !0,
                                                  placeholder:
                                                    "Enter Your password",
                                                  value: this.state.password,
                                                  onChange: this.changeHandler,
                                                  className: "form-controller",
                                                })
                                              ),
                                              m.a.createElement(
                                                b.a,
                                                { md: "6" },
                                                " ",
                                                m.a.createElement(f.a, {
                                                  type: "password",
                                                  name: "cnfmPassword",
                                                  maxLength: "12",
                                                  required: !0,
                                                  placeholder:
                                                    "Enter Your Confirm password",
                                                  value:
                                                    this.state.cnfmPassword,
                                                  onChange: this.changeHandler,
                                                  className: "form-controller",
                                                })
                                              ),
                                              m.a.createElement(
                                                b.a,
                                                { md: "6" },
                                                m.a.createElement(f.a, {
                                                  type: "date",
                                                  name: "dob",
                                                  required: !0,
                                                  placeholder: "Date of birth",
                                                  value: this.state.dob,
                                                  onChange: this.changeHandler,
                                                  className: "form-controller",
                                                })
                                              )
                                            ),
                                            m.a.createElement(
                                              "div",
                                              { className: "button-box" },
                                              m.a.createElement(
                                                N.a,
                                                { type: "submit" },
                                                m.a.createElement(
                                                  "span",
                                                  null,
                                                  "Register"
                                                )
                                              )
                                            )
                                          )
                                        )
                                      )
                                    )
                                  )
                                )
                              ),
                              m.a.createElement(
                                m.a.Fragment,
                                null,
                                m.a.createElement(
                                  "div",
                                  { className: "login-form-container" },
                                  m.a.createElement(
                                    "div",
                                    { className: "login-register-form" },
                                    m.a.createElement(
                                      "div",
                                      { className: "button-box" },
                                      m.a.createElement("div", {
                                        className: "login-toggle-btn",
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
                  );
                },
              },
            ]),
            a
          );
        })(i.Component);
    },
  },
]);
//# sourceMappingURL=159.57f13862.chunk.js.map
