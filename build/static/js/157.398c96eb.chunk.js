(this["webpackJsonpflone-react"] = this["webpackJsonpflone-react"] || []).push([
  [157],
  {
    1101: function (n, t, r) {
      "use strict";
      r.r(t),
        r.d(t, "generateToken", function () {
          return e;
        }),
        r.d(t, "randomID", function () {
          return a;
        }),
        r.d(t, "getRandomName", function () {
          return o;
        });
      r(0);
      function e(n, t, r) {
        return fetch(
          "http://13.234.48.35:8000/user/allchatwithuser/638dcc72ef0c127a0c5a0426"
        ).then(function (n) {
          return n.json();
        });
      }
      function a(n) {
        var t = "";
        if (t) return t;
        var r =
            "12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP",
          e = r.length;
        n = n || 5;
        for (var a = 0; a < n; a++)
          t += r.charAt(Math.floor(Math.random() * e));
        return console.log(t), t;
      }
      function o() {
        var n = [
          "Anjali",
          "Pratima",
          "Sadik",
          "Rohit",
          "Amit",
          "Pranay",
          "Anujesh",
          "Ashish",
        ];
        return n[Math.round(Math.random() * n.length)];
      }
    },
  },
]);
//# sourceMappingURL=157.398c96eb.chunk.js.map
