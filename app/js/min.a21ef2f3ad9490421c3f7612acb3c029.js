window.DEBUG = !1, function () {
    "use strict";
    var Br = Number.isFinite, Hr = Number.MAX_SAFE_INTEGER, zr = Number.MIN_SAFE_INTEGER, Yr = Number.isInteger,
        Wr = Number.prototype, Gr = String.prototype, Xr = Math.round, Jr = Math.PI, Kr = Math.atan2, Zr = Math.sqrt,
        Qr = Math.log, ei = Math.pow, ti = Math.abs, ni = Math.floor, ai = Number.isNaN;

    function e(e) {
        var t = new Map;
        return function (n) {
            if (t.has(n)) return t.get(n);
            var a = e(n);
            return t.set(n, a), a
        }
    }

    function t(e, t) {
        return "function" == typeof e ? e.apply(null, t) : e
    }

    function n(a, o, r) {
        r = r || a.length;
        var i = 1 === r ? o ? a : e(a) : e(function (e) {
            return n(function () {
                var t = [e];
                return t.push.apply(t, arguments), a.apply(null, t)
            }, o, r - 1)
        });
        return function e(n) {
            return 0 === arguments.length ? e : 1 === arguments.length ? i(n) : arguments.length === r ? a.apply(null, arguments) : arguments.length > r ? t(a.apply(null, oi.splice.call(arguments, 0, r)), arguments) : t(i(n), oi.slice.call(arguments, 1))
        }
    }

    function a(e, t) {
        if (t.slice) return t.slice(e);
        if (t.rest) return t.rest(e);
        for (var o = [], a = t.length - e; a--;) o[a] = t[a + e];
        return o
    }

    function o(e) {
        return function (t) {
            var n = e[t] || e.default;
            return n && n.apply(this, a(1, arguments))
        }
    }

    function r() {
    }

    function s(e) {
        return ri.then(e), e
    }

    function l(e) {
        if (e.toArray) return e.toArray();
        var t = [], n = e.length, a;
        if ("number" != typeof e.length) return t;
        for (t.length = n, a = 0; a < n; a++) t[a] = e[a];
        return t
    }

    function d(e, t) {
        var a, o;
        if ("function" == typeof t.each) t.each(e); else for (a = t.length, o = -1; ++o < a;) e(t[o]);
        return t
    }

    function c(e, t) {
        return t && t.map ? t.map(e) : ii.map.call(t, e)
    }

    function p(e, t) {
        return t.filter ? t.filter(e) : ii.filter.call(t, e)
    }

    function u(e, t) {
        function n() {
            s = !1, e.apply(l, d)
        }

        function a() {
            i = r, s && clearTimeout(s)
        }

        function o() {
            l = this, d = arguments, i()
        }

        var i = function () {
            s && clearTimeout(s), s = setTimeout(n, 1e3 * (t || 0))
        }, s, l, d;
        return o.cancel = a, o
    }

    function m(e, t) {
        return function () {
            return e(t.apply(null, arguments))
        }
    }

    function h(e, t) {
        return function () {
            return console.warn("Deprecation warning: " + t), e.apply(this, arguments)
        }
    }

    function f(e) {
        return e
    }

    function g(e) {
        return !!e || void 0 !== e && null !== e && !ai(e)
    }

    function b(e) {
        var t = e.shift();
        return void 0 === t ? arguments[1] : b(e, t)
    }

    function y() {
        return +new Date / 1e3
    }

    function v(e) {
        return function () {
            var t = e.apply(this, arguments);
            return e = r, t
        }
    }

    function x(e, t) {
        return "function" == typeof t.get ? function () {
            var n = e.apply(null, arguments);
            return t.get(n).apply(this, arguments)
        } : function () {
            const n = e.apply(null, arguments), a = t[n] || t.default;
            if (!a) throw new Error("overload() no handler for \"" + n + "\"");
            return a.apply(this, arguments)
        }
    }

    function k(e, t) {
        return t(e)
    }

    function T() {
        const e = arguments;
        return e.length ? t => ci.reduce.call(e, k, t) : f
    }

    function E(e) {
        return pi.toString.apply(e).slice(8, -1)
    }

    function w(e) {
        return void 0 === e ? void 0 : parseInt(e, 10)
    }

    function C(e) {
        return e.toString()
    }

    function _(e) {
        return typeof e
    }

    function N(e, t) {
        return "" + e + t
    }

    function S(e) {
        return 0 === e.length || "done" === e.status
    }

    function j(e, t) {
        var n = Object.create(e);
        return n.shift = t, n
    }

    function q(e, t) {
        return e.push(t), e
    }

    function L(e, t) {
        return function () {
            var n = e();
            return void 0 !== n && t(n), n
        }
    }

    function M(e, t, a) {
        var o = D(e, function (e) {
            return t(a, e)
        });
        e.splice(o, 0, a)
    }

    function D(e, t) {
        for (var a = e.length, o = a + a % 2, r = 0; (o = ni(o / 2)) && r + o <= a;) 0 <= t(e[r + o - 1]) && (r += o, o += o % 2);
        return r
    }

    function P(e) {
        if (!this || !P.prototype.isPrototypeOf(this)) return new P(e);
        var t = this;
        if (!e) return void (t.status = "done");
        var n = e();
        return void 0 === n ? void (t.status = "done") : void (this.shift = function () {
            if ("done" !== t.status) {
                var a = n;
                return n = e(), void 0 === n && (t.status = "done"), a
            }
        })
    }

    function U(e, t) {
        e.remove && e.remove(t);
        var n = e.indexOf(t);
        -1 !== n && e.splice(n, 1)
    }

    function I(e, t) {
        function n() {
            var e = a.length;
            for (r = void 0, o = t(); e--;) a.shift()(o)
        }

        if ("number" != typeof e) throw new Error("Timer(duration) requires a duration in seconds (" + e + ")");
        t = t || y;
        var a = [], o = -Infinity, r;
        return {
            now: t, request: function (i) {
                if ("function" != typeof i) throw new Error("fn is not a function.");
                if (a.push(i), !r) {
                    var l = t();
                    return o + e > l ? r = setTimeout(n, 1e3 * (o + e - l)) : s(n), i
                }
            }, cancel: function (e) {
                var t = a.indexOf(e);
                -1 === t || (a.splice(t, 1), !a.length && (clearTimeout(r), r = void 0))
            }
        }
    }

    function F(e, t) {
        return t(e)
    }

    function $(e) {
        return void 0 !== e
    }

    function R(e) {
        return "done" === e.status
    }

    function V(e, t) {
        var a = t[hi];
        if (a && a[e]) for (var o = -1, r = a[e].length, i; ++o < r;) if (i = a[e][o](e, t), void 0 !== i) return i
    }

    function B(e) {
        var t = V;
        return function (n) {
            var a = t;
            t = r;
            var o = a(n, e);
            return t = a, o
        }
    }

    function H(e, t, n) {
        this.source = e, this.n = t, this.done = n
    }

    function z(e, t) {
        function a() {
            s.status = "done", d = fi
        }

        function o(e) {
            delete s[hi], e ? d = new H(d, e, a) : a(), l(s)
        }

        function i() {
            var n = B(s);
            return d = new e(n, o, t), d.stop || (d.stop = r), i = function () {
                return d
            }, d
        }

        if (!z.prototype.isPrototypeOf(this)) return new z(e, t);
        var s = this, l = r, d, c;
        this[hi] = {}, this.push = function () {
            var e = i();
            return e.push.apply(e, arguments), this
        }, this.shift = function () {
            return i().shift()
        }, this.start = function () {
            var e = i();
            return e.start.apply(e, arguments), this
        }, this.stop = function () {
            var e = i();
            return e.stop.apply(e, arguments), this
        }, this.done = function (e) {
            return c = c || new Promise(e => {
                l = e
            }), c.then(e), this
        }
    }

    function Y(e, t, n) {
        const a = void 0 === n ? [] : P.prototype.isPrototypeOf(n) ? n : Array.from(n).filter($);
        this._buffer = a, this._notify = e, this._stop = t
    }

    function W(e, t, n) {
        const a = this;
        n.catch(t).then(function (n) {
            a.value = n, e("push"), t()
        })
    }

    function G(e, t, n) {
        this.notify = e, this.end = t, this.timer = n;
        const a = this.event = gi.shift() || {};
        a.stopTime = 1 / 0, this.frame = e => a.stopTime <= a.t2 ? void 0 : e < a.startTime ? void (this.requestId = this.timer.request(this.frame)) : void (this.frame = e => this.update(e), this.frame(e))
    }

    function X(e) {
        var t = e.source, n = e.value;
        return e.value = void 0 === n ? b(t) : n
    }

    function J(e, t, n, a) {
        var o = this;
        this._notify = e, this._stop = t, this._fn = n, this._sources = a, this._hot = !0, this._store = a.map(function (t) {
            function n() {
                a.value = void 0, o._hot = !0
            }

            var a = {source: t, listen: n};
            return t.on("push", n), t.on("push", e), a
        })
    }

    function K(e, t, n) {
        function a(e, t) {
            r.push(t)
        }

        var o = [], r = [];
        this._notify = e, this._stop = t, this._sources = n, this._values = o, this._buffer = r, this._i = 0, this._update = a, d(function (t) {
            o.push.apply(o, l(t)), t.on("push", a), t.on("push", e)
        }, n)
    }

    function Z(e) {
        var t = this, n = [], a = [];
        this.fns = n, e.each(function () {
            t.fns = a, n.reduce(F, void 0), n.length = 0, a = n, n = t.fns
        })
    }

    function Q() {
        var e = this.timer;
        this.queue = r, this.ref = e.request(this.update)
    }

    function ee(e, t, n) {
        var a = this;
        this._stop = t, this.timer = n, this.queue = Q, this.update = function () {
            a.queue = Q, e("push")
        }
    }

    function te(e) {
        return e && "object" == typeof e && "number" == typeof e.length
    }

    function ne(e, t) {
        return e[yi].properties[t] || (e[yi].properties[t] = [])
    }

    function ae(e, t, a) {
        if (e) {
            e = e.slice(0);
            for (var o = -1; e[++o];) e[o](t, a)
        }
    }

    function oe(e, t) {
        let n;
        return "symbol" != typeof t && (n = Object.getOwnPropertyDescriptor(e, t), !n || n.writable) && se(e[t]) || e[t]
    }

    function re(e) {
        var t = new Proxy(e, te(e) ? Ti : Ei);
        return e[yi] = {target: e, observer: t, properties: {}, mutate: []}, t
    }

    function ie(e) {
        return e && ki(e) && !Node.prototype.isPrototypeOf(e) && ("undefined" == typeof BaseAudioContext || !BaseAudioContext.prototype.isPrototypeOf(e)) && !(e instanceof Date) && !(e instanceof RegExp) && !(e instanceof Map) && !(e instanceof WeakMap) && !(e instanceof Set) && !(window.WeakSet && e instanceof WeakSet) && !ArrayBuffer.isView(e)
    }

    function se(e) {
        return e ? e[yi] ? e[yi].observer : ie(e) ? re(e) : void 0 : void 0
    }

    function le(e) {
        return e && e[yi] && e[yi].target || e
    }

    function de(e) {
        const t = parseFloat(e);
        return t + "" === e
    }

    function ce(e, t, a, o) {
        const r = "string" == typeof o ? o : o.input.slice(o.index + o[0].length + (o.consumed || 0)), i = e.exec(r);
        if (!i) throw new Error("Observer: Invalid path: " + r + " : " + o.input);
        for (let r = -1; ++r < i.length;) a = void 0 !== i[r] && t[r] ? t[r](a, i) : a;
        return o.consumed = i.index + i[0].length + (i.consumed || 0), a
    }

    function pe(e) {
        return ce(wi, Ci, {}, e)
    }

    function ue(e) {
        return !(e && "object" == typeof e)
    }

    function me(e, t) {
        return e !== t.value && (t.old = t.value, t.value = e, t.fn(e)), r
    }

    function he(e, t) {
        var n = e[yi].mutate;
        return n.push(t.fn), e !== t.value && (t.old = t.value, t.value = e, t.fn(e, {
            index: 0,
            removed: t.old ? t.old : Ni,
            added: t.value
        })), () => {
            U(n, t.fn)
        }
    }

    function fe(e, t, n, a) {
        function o(e) {
            var o = e && _i.find.call(e, t);
            i(), i = ve(o, n, a)
        }

        var i = r, s = he(e, {fn: o});
        return () => {
            i(), s()
        }
    }

    function ge(e, t, n, a) {
        function o(e) {
            s(), s = ve(e, n, a)
        }

        var i = ne(e, t), s = r;
        return i.push(o), o(e[t]), () => {
            s(), U(i, o)
        }
    }

    function be(e, t, n, a) {
        var o = e && _i.find.call(e, t);
        return ve(se(o) || o, n, a)
    }

    function ye(e, t, n, a) {
        return ve(se(e[t]) || e[t], n, a)
    }

    function ve(e, t, n) {
        if (!t.length) return me(e, n);
        if ("." === t) return e && e[yi] ? he(e, n) : me(e, n);
        if (ue(e)) return me(void 0, n);
        const a = Si.exec(t);
        if (!a) throw new Error("Observer: Invalid path: " + t + " : " + t.length);
        const o = a[1] || a[2] || a[3] || a[4];
        if (o) return t = a.input.slice(a.index + a[0].length), e[yi] ? ge(e, o, t, n) : ye(e, o, t, n);
        const r = pe(a);
        return t = a.input.slice(a.index + a[0].length + (a.consumed || 0)), e[yi] ? fe(e, r, t, n) : be(e, r, t, n)
    }

    function xe(e, t, n, a) {
        return ve(se(n) || n, e + "", {value: a, fn: t})
    }

    function ke(e, t, n) {
        this.observer = se(n[1]), this.path = n[0], this.object = n[1], this.end = t, this.unobserve = xe(this.path, t => {
            this.value = void 0 === t ? null : t, e("push")
        }, this.object)
    }

    function Te() {
        return new z(ke, arguments)
    }

    function Ee(e, t) {
        if (e === t) return !0;
        if (null === e || null === t || "object" != typeof e || "object" != typeof t) return !1;
        const a = Object.keys(e);
        for (let o = a.length; o--;) if (void 0 === e[a[o]]) {
            if (void 0 === t[a[o]]) return !0;
        } else if (t.hasOwnProperty(a[o]) && !Ee(e[a[o]], t[a[o]])) return !1;
        return !0
    }

    function we(e, t, n) {
        let a;
        void 0 !== n.input && void 0 !== n.index && (a = n, n = a.input.slice(n.index + n[0].length + (n.consumed || 0)));
        const o = e.exec(n);
        if (o) {
            const e = t(o);
            return a && (a.consumed = (a.consumed || 0) + o.index + o[0].length + (o.consumed || 0)), e
        }
    }

    function Ce(e, t, n) {
        throw void 0 !== n.input && void 0 !== n.index && (n = n.input), new Error("Cannot capture() in invalid string \"" + n + "\"")
    }

    function _e(e, t, a) {
        for (let o = -1; ++o < a.length;) t = void 0 !== a[o] && e[o] ? e[o](t, a) : t;
        return e.close ? e.close(t, a) : t
    }

    function Ne(e, t, n, a) {
        const o = we(e, e => _e(t, n, e), a);
        return void 0 === o ? t.catch ? t.catch(n, a) : Ce(e, t, a) : o
    }

    function Se(e, t, n) {
        return "function" == typeof t.set ? t.set(e, n) : t[e] = n
    }

    function je(e, t, a) {
        for (var o = a.length, r = -1; ++r < o;) if (a[r][e] === t) return a[r]
    }

    function Ae(e, t, n, a) {
        var o = e.exec(t);
        if (!o) throw new Error("Fn.getPath(path, object): invalid path \"" + t + "\"");
        var r = o[1], i = o[3] ? je(r, o[2] ? o[3] : o[4] ? !!o[4] : parseFloat(o[5]), n) : n[r];
        return a(e, t, i)
    }

    function qe(e, t, n) {
        return e.lastIndex === t.length ? n : n && "object" == typeof n ? Ae(e, t, n, qe) : void 0
    }

    function Le(e, t) {
        return Ai.lastIndex = 0, qe(Ai, e, t)
    }

    function Me(e, t, n, a) {
        var o = e.exec(t);
        if (!o) throw new Error("Fn.getPath(path, object): invalid path \"" + t + "\"");
        var r = o[1];
        if (e.lastIndex === t.length) {
            if (o[3]) throw new Error("Fn.setPath(path, object): invalid path \"" + t + "\"");
            return n[r] = a
        }
        var i = o[3] ? je(r, o[2] ? o[3] : o[4] ? !!o[4] : parseFloat(o[5])) : n[r];
        if (!(i && "object" == typeof i)) {
            if (i = {}, o[3]) if (n.push) i[r] = o[2] ? o[3] : parseFloat(o[3]), n.push(i); else throw new Error("Not supported");
            Se(r, n, i)
        }
        return Me(e, t, i, a)
    }

    function De(e, t, a) {
        for (var o = -1, r = t.length, i = e(a); ++o < r && e(t[o]) <= i;) ;
        return qi.splice.call(t, o, 0, a), a
    }

    function Pe(e, t) {
        if (t.slice) return t.slice(0, e);
        if (t.take) return t.take(e);
        for (var o = [], a = e; a--;) o[a] = t[a];
        return o
    }

    function Ue(e) {
        if ("number" == typeof e.length) return e[e.length - 1]
    }

    function Ie(e, t, n) {
        for (var a = n + "", o = -1, r = ""; r.length < t - a.length;) r += e[++o % e.length];
        return a = r + a, a.slice(a.length - t)
    }

    function Oe(e) {
        return e.replace(/-(\w)?/g, function (e, t) {
            return t ? t.toUpperCase() : ""
        })
    }

    function Fe(e, t, n, a) {
        var o = e.split(/\s*[=-]>\s*/), r = o[0].split(/\s*,\s*/), i = o[1];
        return Mi ? function () {
            Ui(r, arguments, n, a);
            const e = t.apply(this, arguments);
            return Pi(i, e, n, a, "return value not of type \"" + i + "\": " + e), e
        } : t
    }

    function $e(e, n, a, o) {
        return ((e * o + n) * o + a) * o
    }

    function Re(e, n, a, o) {
        return (3 * e * o + 2 * n) * o + a
    }

    function Ve(e, t, n, a, o) {
        var r = a, s, l, d;
        for (d = 0; 8 > d; d++) {
            if (s = $e(e, t, n, r) - a, ti(s) < o) return r;
            if (l = Re(e, t, n, r), 1e-6 > ti(l)) break;
            r -= s / l
        }
        var c = 0, p = 1;
        if (r = a, r < c) return c;
        if (r > p) return p;
        for (; c < p;) {
            if (s = $e(e, t, n, r), ti(s - a) < o) return r;
            a > s ? c = r : p = r, r = .5 * (p - c) + c
        }
        return r
    }

    function Be(e, t, n, a) {
        var o = 3 * e[0], r = 3 * (t[0] - e[0]) - o, i = 3 * e[1], s = 3 * (t[1] - e[1]) - i,
            l = Ve(1 - o - r, r, o, a, 1 / (200 * n));
        return $e(1 - i - s, s, i, l)
    }

    function He(e, t) {
        var n = t % e;
        return 0 > n ? n + e : n
    }

    function ze(e, t) {
        return t ? ze(t, e % t) : e
    }

    function Ye(e) {
        var t = Math.log10;
        return 20 * t(e) * Zi
    }

    function We(e) {
        return ei(2, e / 6)
    }

    function Ge(e) {
        return e / Ki
    }

    function Xe(e) {
        return e * Ki
    }

    function Je(e) {
        var t = e[0], n = e[1];
        return [0 === t ? ti(n) : 0 === n ? ti(t) : Zr(t * t + n * n), Kr(t, n)]
    }

    function Ke(e) {
        var t = Math.cos, n = Math.sin, o = e[0], r = e[1];
        return [n(r) * o, t(r) * o]
    }

    function Ze(e) {
        for (var t = [], a = 0; 31 > a++;) t[a] = e[a] || e.n;
        return t
    }

    function Qe(e) {
        return "Date" === E(e) && !ai(e.getTime())
    }

    function et(e, t, n) {
        return function (a) {
            var o = e.exec(a);
            if (!o && n) throw n;
            return o ? t.apply(null, o) : void 0
        }
    }

    function tt(e) {
        return new Date(xt(e))
    }

    function nt(e, t, n, a) {
        return "+" === e ? (a.setUTCHours(a.getUTCHours() - parseInt(t, 10)), n && a.setUTCMinutes(a.getUTCMinutes() - parseInt(n, 10))) : "-" == e && (a.setUTCHours(a.getUTCHours() + parseInt(t, 10)), n && a.setUTCMinutes(a.getUTCMinutes() + parseInt(n, 10))), a
    }

    function at(e, t, n) {
        var a = e.exec(n);
        return a ? (t.apply(null, a), at(e, t, n)) : void 0
    }

    function ot(e, t, n) {
        ls.timeZone = e || "UTC";
        var a = n.toLocaleString(t, ls);
        return a
    }

    function rt(e, t, n) {
        var a = ot(e, t, n), o = {}, r = ss[t] || ss.default, s = 0;
        return at(cs, function (e) {
            o[r[s++]] = e
        }, a), o
    }

    function it(e, t, n, a) {
        var o = n ? n.slice(0, 2) : document.documentElement.lang;
        n = "en" === n ? "en-US" : n ? n : "en-US";
        var r = rt(t, n, a), i = rs;
        return e.replace(ds, function (e) {
            return i[e] ? i[e](r, o) : e
        })
    }

    function st(e, t, n) {
        var a = os, o = t.slice(0, 2);
        return e.replace(ds, function (e) {
            return a[e] ? a[e](n, o) : e
        })
    }

    function lt(e) {
        return ps.exec(JSON.stringify(ns(e)))[1]
    }

    function dt(e) {
        return ms[e.getDay()]
    }

    function ct(e) {
        return new Date(+e)
    }

    function pt(e, t, n, a, o) {
        if (o.setUTCFullYear(o.getUTCFullYear() + e * parseInt(t, 10)), !!n) {
            var r = o.getUTCMonth(), i = e * parseInt(n, 10), s = He(12, r + i);
            for (o.setUTCMonth(r + i); o.getUTCMonth() > s;) o.setUTCDate(0);
            a && o.setUTCDate(o.getUTCDate() + e * parseInt(a, 10))
        }
    }

    function ut(e, t) {
        t = ct(t);
        var n = ts.exec(e), a = 1;
        if (n) {
            if (a = "-" === n[1] ? -1 : 1, pt(a, n[2], n[3], n[4], t), !n[5]) return t;
            if (e = e.slice(n[0].length), "-" === e[0]) return t
        }
        var o = ks(e);
        if (void 0 !== o) return t.setTime(t.getTime() + 1e3 * (a * o)), t
    }

    function mt(e, n, a) {
        var o = n.getUTCFullYear(), r = n.getUTCMonth(), i = a.getUTCFullYear(), s = a.getUTCMonth();
        return o === i && r === s ? e + a.getUTCDate() - n.getUTCDate() : (e += a.getUTCDate(), a.setUTCDate(0), mt(e, n, a))
    }

    function ht(e, t) {
        var n = ns(e), a = ns(t);
        return a > n ? mt(0, n, a === t || n === a ? ct(a) : a) : -1 * mt(0, a, n === e || a === n ? ct(n) : n)
    }

    function ft(e, t) {
        var n, a;
        return "ms" === e ? t : (t.setUTCMilliseconds(0), "second" === e) ? t : (t.setUTCSeconds(0), "minute" === e) ? t : (t.setUTCMinutes(0), "hour" === e) ? t : (t.setUTCHours(0), "day" === e) ? t : "week" === e ? (t.setDate(t.getDate() - dt(t)), t) : "fortnight" === e ? (a = gt(1, new Date), n = He(14, ht(a, t)), t.setUTCDate(t.getUTCDate() - n), t) : (t.setUTCDate(1), "month" === e) ? t : (t.setUTCMonth(0), "year" === e) ? t : (t.setUTCFullYear(0), t)
    }

    function gt(e, t) {
        var n = t.getUTCDay();
        if (e === n) return t;
        var a = n - e;
        return 0 > a && (a += 7), ut("-0000-00-0" + a, t)
    }

    function bt(e, t) {
        t = ct(t);
        var n = "number" == typeof e ? e : us[e];
        return g(n) ? gt(n, t) : ft(e, t)
    }

    function yt(e) {
        return 60 * e
    }

    function vt(e) {
        return 3600 * e
    }

    function xt(e) {
        return 1e3 * e
    }

    function kt(e) {
        return e / 60
    }

    function Tt(e) {
        return e / 3600
    }

    function Et(e) {
        return e / 86400
    }

    function wt(e) {
        return e / 604800
    }

    function Ct(e) {
        return 10 <= e ? "" : "0"
    }

    function _t(e, t, n, a, o) {
        var r = vt(parseInt(n, 10)) + (a ? yt(parseInt(a, 10)) + (o ? parseFloat(o, 10) : 0) : 0);
        return "-" === t ? -r : r
    }

    function Nt(e, t) {
        return e.replace(ds, function (e) {
            return Es[e] ? Es[e](t) : e
        })
    }

    function St(e) {
        var t = 0 > e ? "-" : "";
        0 > e && (e = -e);
        var n = ni(e / 3600), a = Ct(n) + n;
        if (e %= 3600, 0 === e) return t + a + ":00";
        var o = ni(e / 60), r = Ct(o) + o;
        if (e %= 60, 0 === e) return t + a + ":" + r;
        var i = Ct(e) + jt(9, e);
        return t + a + ":" + r + ":" + i
    }

    function jt(e, t) {
        return t.toFixed(e).replace(/\.?0+$/, "")
    }

    function At(e, t, n) {
        const a = Ls(), o = document.createElement("article");
        o.setAttribute("class", "span-" + (n || 2) + "-test-article test-article");
        const r = document.createElement("h2");
        r.setAttribute("class", "test-title"), r.innerHTML = t;
        const i = document.createElement("div");
        return i.setAttribute("class", "test-fixture"), i.innerHTML = e, o.appendChild(r), o.appendChild(i), a.appendChild(o), {
            section: a,
            article: o,
            title: r,
            fixture: i
        }
    }

    function qt(e) {
        if ("function" != typeof e) throw new TypeError("multiline: expects a function.");
        var t = js.exec(e.toString());
        if (!t) throw new TypeError("multiline: comment missing.");
        return t[1]
    }

    function Lt() {
        return window.performance.now() / 1e3
    }

    function Mt(e, t) {
        return window.getComputedStyle ? window.getComputedStyle(e, null).getPropertyValue(t) : 0
    }

    function Dt() {
        return Jl || (Jl = parseFloat(Mt(document.documentElement, "font-size"), 10))
    }

    function Pt(e) {
        var t = Object.keys(e), a = t.length, o;
        if (0 === t.length) return !1;
        for (; a--;) if (o = t[a], !zl[o](e[o])) return !1;
        return !0
    }

    function Ut() {
        for (var e = Rl.length, t; e--;) t = Rl[e], t.state && !Pt(t.query) && (t.state = !1, t.exit && t.exit());
        for (e = Rl.length; e--;) t = Rl[e], !t.state && Pt(t.query) && (t.state = !0, t.enter && t.enter())
    }

    function It(e, t, n) {
        var a = {};
        return a.query = e, a.enter = t, a.exit = n, Rl.push(a), e
    }

    function Ot(e) {
        if (e in Zl.style) return e;
        for (var t = e.charAt(0).toUpperCase() + e.slice(1), n = Kl.length, a; n--;) if (a = Kl[n] + t, a in Zl.style) return a;
        return !1
    }

    function Ft(e) {
        return Ql[e] || (Ql[e] = Ot(e))
    }

    function $t(e) {
        return 11 === e.nodeType
    }

    function Rt(e) {
        return (/^\//.test(e) ? "" : "/") + e
    }

    function Vt(e) {
        var t = window.location;
        return (!e.hostname || t.hostname === e.hostname) && t.pathname === Rt(e.pathname)
    }

    function Bt(e) {
        return e.tagName && e.tagName.toLowerCase()
    }

    function Ht(e, t) {
        return t.contains ? t.contains(e) : !!e.parentNode && (e.parentNode === t || Ht(e.parentNode, t))
    }

    function zt(e) {
        return document.getElementById(e) || void 0
    }

    function Yt(e) {
        return e.nextElementSibling || void 0
    }

    function Wt(e) {
        return e.previousElementSibling || void 0
    }

    function Gt(e, t) {
        return t.matches ? t.matches(e) : t.matchesSelector ? t.matchesSelector(e) : t.webkitMatchesSelector ? t.webkitMatchesSelector(e) : t.mozMatchesSelector ? t.mozMatchesSelector(e) : t.msMatchesSelector ? t.msMatchesSelector(e) : t.oMatchesSelector ? t.oMatchesSelector(e) : Bt(t) === e
    }

    function Xt(e, t) {
        var n = arguments[2];
        if (t && t !== document && t !== n && 11 !== t.nodeType) return t = t.correspondingUseElement || t, Gt(e, t) ? t : Xt(e, t.parentNode, n)
    }

    function Jt(e) {
        return l(e.children || e.querySelectorAll("*"))
    }

    function Kt(e, t) {
        return l(t.querySelectorAll(e))
    }

    function Zt(e, t) {
        return e.append(t), t
    }

    function Qt(e, t) {
        for (var a = Object.keys(t), o = a.length; o--;) rd(a[o], e, t[a[o]])
    }

    function en(e, t) {
        for (var a = Object.keys(t), o = a.length; o--;) e.setAttributeNS(null, a[o], t[a[o]])
    }

    function tn(e, t) {
        let n;
        if ("string" == typeof e) {
            if (ld[e]) return ld[e](t);
            n = document.createElement(e)
        } else n = document.createElement(e.tagName), delete e.tagName, Qt(n, e);
        return t && ("string" == typeof t ? n.innerHTML = t : Qt(n, t)), n
    }

    function nn(e) {
        var t = Math.ceil, n = e.id;
        if (!n) {
            do n = t(1e5 * Math.random()); while (document.getElementById(n));
            e.id = n
        }
        return n
    }

    function an(e) {
        for (; e.lastChild;) e.removeChild(e.lastChild);
        return e
    }

    function rn(e) {
        return e.remove ? e.remove() : (console.warn("deprecated: remove() no longer removes lists of nodes."), e.parentNode && e.parentNode.removeChild(e)), e
    }

    function sn(e, t) {
        return e.parentNode && e.parentNode.insertBefore(t, e), t
    }

    function ln(e, a) {
        (function n(o) {
            return e-- ? requestAnimationFrame(n) : a(o)
        })()
    }

    function dn() {
        return {
            left: 0,
            top: 0,
            right: window.innerWidth,
            bottom: window.innerHeight,
            width: window.innerWidth,
            height: window.innerHeight
        }
    }

    function cn(e) {
        return e === window ? dn() : e.getClientRects()[0]
    }

    function pn(e) {
        return e.split("(")[1].split(")")[0].split(/\s*,\s*/)
    }

    function un(e, t) {
        return window.getComputedStyle ? window.getComputedStyle(t, null).getPropertyValue(e) : 0
    }

    function mn(e, t) {
        if (pd[e]) return pd[e](t);
        var n = un(e, t);
        return "string" == typeof n && cd.test(n) ? parseFloat(n) : n
    }

    function hn() {
        return hd || (hd = parseFloat(mn("font-size", document.documentElement), 10))
    }

    function fn(e) {
        return fd(e) / hn() + "rem"
    }

    function gn(e) {
        for (var t = tn("fragment"); e.firstChild;) Zt(t, e.firstChild);
        return t
    }

    function bn(e, t) {
        if (t) {
            let n = document.createElement(t);
            return n.innerHTML = e, gn(n)
        }
        return document.createRange().createContextualFragment(e)
    }

    function yn(e, t) {
        let n;
        "object" == typeof e && (n = gd({}, yd, e), e = n.type), t && t.detail && (n ? n.detail = t.detail : n = gd({detail: t.detail}, yd));
        var a = new bd(e, n || yd);
        return t && (delete t.detail, gd(a, t)), a
    }

    function vn(e) {
        return td.events[e] || e
    }

    function xn(e, t, n, a, o) {
        function r(t) {
            s.push(t), e("push")
        }

        const i = n.split(xd).map(vn), s = [];
        this.stop = t, this.types = i, this.node = o, this.buffer = s, this.update = r, i.forEach(function (e) {
            o.addEventListener(e, r, a)
        })
    }

    function kn(t) {
        return 1 === t.which && !t.ctrlKey && !t.altKey && !t.shiftKey
    }

    function Tn(t) {
        t.preventDefault()
    }

    function En(t) {
        return t.target === t.currentTarget
    }

    function wn(e) {
        var t = kd.slice.call(arguments, 1);
        return function () {
            kd.push.apply(arguments, t), e.apply(null, arguments)
        }
    }

    function Cn(e, t, a, o) {
        var r;
        "object" == typeof t && (r = t, t = r.type);
        for (var i = t.split(xd), s = e[Td] || (e[Td] = {}), l = o ? wn(a, o) : a, d = -1, c; ++d < i.length;) t = i[d], c = s[t] || (s[t] = []), c.push([a, l]), e.addEventListener(t, l, r);
        return e
    }

    function on(e, t, a) {
        var o;
        "object" == typeof t && (o = t, t = o.type);
        var r = t.split(xd), s = e[Td], l, d;
        if (!s) return e;
        for (var c = -1; c++ < r.length;) if (t = r[c], l = s[t], !!l) for (d = l.length; d--;) l[d][0] === a && (e.removeEventListener(t, l[d][1]), l.splice(d, 1));
        return e
    }

    function _n(t) {
        function n() {
            var e = query("[tabindex], a, input, textarea, button", t)[0];
            e && e.focus()
        }

        function a(a) {
            t.contains(a.target) || (n(), a.preventDefault(), a.stopPropagation())
        }

        Ed();
        var o = document.activeElement || document.body;
        return document.addEventListener("focus", a, !0), requestTick(n), Ed = function () {
            Ed = r, document.removeEventListener("focus", a, !0), requestTick(function () {
                o.focus()
            })
        }
    }

    function Nn(e, t) {
        function n(r) {
            var i = (r - a) / (1e3 * e);
            1 > i ? (0 < i && t(i), o = _d(n)) : t(1)
        }

        var a = Cd.now(), o = _d(n);
        return function () {
            Nd(o)
        }
    }

    function Sn(e) {
        e = e || document.documentElement;
        var t = e.scrollLeft, n = e.scrollTop;
        e.style.overflow = "hidden", n && (e.scrollTop = n), t && (e.scrollLeft = t)
    }

    function jn(e) {
        e = e || document.documentElement;
        var t = e.scrollLeft, n = e.scrollTop;
        e.style.overflow = "", n && (e.scrollTop = n), t && (e.scrollLeft = t)
    }

    function An(e) {
        ac === e || (nc.remove(ac), nc.add(e), ac = e)
    }

    function qn(t) {
        t.timeStamp < oc + 1e3 * ec.simulatedEventDelay || (oc = void 0, An(ec.mouseClass))
    }

    function Ln(e) {
        return Pd("[href$=\"#" + e + "\"]", document.body).filter(x(Bt, {
            a: Vt, default: function () {
                return !0
            }
        })).concat(Pd("[data-href=\"#" + e + "\"]", document))
    }

    function Mn(e) {
        var t = dc.get(e);
        return t || (t = {}, dc.set(e, t)), t
    }

    function Dn(e) {
        var t = Mn(e), n = e.id;
        return t.node || (t.node = e), t.buttons || (t.buttons = n && Ln(n)), t
    }

    function Pn(e) {
        return e.buttons || e.node.id && Ln(e.node.id)
    }

    function Un() {
        var e = this.data || Dn(this.target), t;
        e.active || (e.active = !0, this.preventDefault(), dd(e.node).add(pc.activeClass), t = Pn(e), t && t.forEach(function (e) {
            dd(e).add(pc.onClass)
        }))
    }

    function In() {
        var e = this.data || Dn(this.target), t;
        e.active && (e.active = !1, this.preventDefault(), dd(e.node).remove(pc.activeClass), t = Pn(e), t && t.forEach(function (e) {
            dd(e).remove(pc.onClass)
        }))
    }

    function On(e) {
        var t = tn("div", {class: "dialog-layer layer"}), n = tn("div", {class: "dialog popable"}),
            a = tn("button", {class: "close-thumb thumb"});
        return Id(n, e), Id(t, n), Id(t, a), Id(document.body, t), n
    }

    function Fn(t) {
        "mousedown" === t.type && rc(t.currentTarget, "click", function t(n) {
            ic(n.currentTarget, "click", t), n.preventDefault()
        })
    }

    function $n(t) {
        return !!t.defaultPrevented || !kn(t) || ("keydown" === t.type || "keyup" === t.type) && 13 !== t.keyCode || void 0
    }

    function Rn(t, e) {
        t.preventDefault(), "mousedown" === t.type && Fn(t);
        var n = yn("dom-activate", {relatedTarget: t.delegateTarget});
        e.dispatchEvent(n)
    }

    function Vn(e) {
        return (g(e.hash) ? e.hash : e.getAttribute("href")).substring(1)
    }

    function Bn(t, e) {
        var n = document.getElementById(e);
        !n || uc.find(cc(n)) && Rn(t, n)
    }

    function Hn(e) {
        return (e.hash ? e.hash : e.getAttribute("href")).substring(1)
    }

    function zn(t) {
        if (t.default) {
            var e = t.target;
            if (Cc(e)) {
                var n = Jt(e.parentNode).filter(Cc), a = n.indexOf(e);
                n.splice(a, 1);
                var o = n.filter(Dd(".active"));
                t.default(), P.from(o).each(Nc)
            }
        }
    }

    function Yn(e, t) {
        const n = parseInt(getComputedStyle(document.documentElement).scrollPaddingTop, 10),
            a = zd(document.scrollingElement, e), o = document.scrollingElement.scrollHeight,
            r = document.scrollingElement === document.body ? window.innerHeight : cn(document.scrollingElement).height,
            i = a[1] - n > o - r ? o - r : a[1] - n;
        Pc(), "smooth" === t ? Pc = Zd(Dc.scrollDuration, Dc.scrollTransform, "scrollTop", document.scrollingElement, i) : document.scrollingElement.scrollTop = i
    }

    function Wn(t) {
        if (Bc && t.default) {
            var e = t.target;
            e !== Hc && Ic(e) && (Hc && Jd("dom-deactivate", Hc), (t.relatedTarget || Rc < t.timeStamp - 1e3 * Fc.scrollIdleDuration) && (e.scrollIntoView($c), Vc = t.timeStamp), t.default(), Hc = e, history.replaceState({}, "", "#" + e.id))
        }
    }

    function Gn(t) {
        if (t.default) {
            var e = t.target;
            Ic(e) && (t.default(), e === Hc && (Hc = void 0))
        }
    }

    function Xn(t) {
        if (Rc = t.timeStamp, Vc > t.timeStamp - 1e3 * Fc.scrollIdleDuration) return void (Vc = t.timeStamp);
        for (var e = Pd(Uc, document), a = e.map(cn).sort(Ks(Vs("top"))), o = cn(window), r = -1; a[++r] && !(a[r].top > o.height / 3);) ;
        if (--r, 0 > r || r >= a.length) return void (Hc && Jd("dom-deactivate", Hc));
        var i = e[r];
        if (Hc) {
            if (i === Hc) return;
            Jd("dom-deactivate", Hc)
        }
        Jd("dom-activate", i)
    }

    function Jn(e) {
        dd(e).add(Wc.validatedInputClass)
    }

    function Kn(e) {
        return "[name=\"" + e + "\"]"
    }

    function Zn(e, t) {
        var n = [];
        for (name in e) n.push.apply(n, e[name].map(function (e) {
            return {form: t, name: name, text: e}
        }));
        return n
    }

    function Qn(e) {
        var t = Kn(e.name), n = Ld(t, e.form);
        return n ? void n.setCustomValidity(e.text) : void console.warn("Error given for non-existent field name=\"" + e.name + "\"", e)
    }

    function ea(e) {
        return "string" == typeof e ? e : e.label
    }

    function ta(e) {
        return {
            Label: e.label,
            Source: e.tokens ? e.tokens.filter(e => "Listener" !== e.label).map(ea).join("") : e.path,
            Rendered: e.renderedValue,
            "Total renders (accumulative)": e.renderCount
        }
    }

    function na(e) {
        return "Listener" !== e.constructor.name
    }

    function aa(e, t) {
        Jc && (console.table(Array.from(Zc).concat(Qc).filter(na).map(ta)), console.log("%c" + Zc.size + " cued renderer" + (1 === Zc.size ? "" : "s") + ". " + Qc.length + " in-frame renderer" + (1 === Qc.length ? "" : "s") + ". " + ep + " DOM mutation" + (1 === ep ? "" : "s") + ". %c" + (t - e).toFixed(3) + "s", "color: #6894ab; font-weight: 300;", ""), console.groupEnd()), t - e > Kc && console.log("%c  " + Zc.size + " cued renderer" + (1 === Zc.size ? "" : "s") + ". " + Qc.length + " in-frame renderer" + (1 === Qc.length ? "" : "s") + ". " + ep + " DOM mutation" + (1 === ep ? "" : "s") + ". %c" + (t - e).toFixed(3) + "s", "color: #d34515; font-weight: 300;", "")
    }

    function oa(e) {
        var t, n;
        for (n of e) Jc && (t = n.renderCount, "number" != typeof t && console.log("OIOIO", n)), n.fire(), Jc && (ep += n.renderCount - t)
    }

    function ra(e) {
        Jc && console.groupCollapsed("%cSparky %cframe " + (e / 1e3).toFixed(3), "color: #a3b31f; font-weight: 600;", "color: #6894ab; font-weight: 400;"), ep = 0, Qc.length = 0;
        const t = Lt();
        tp = !0, oa(Zc), tp = void 0;
        const n = Lt();
        aa(t, n), Zc.clear()
    }

    function ia(e) {
        var t;
        return !0 === tp ? (Jc && ("number" != typeof e.renderCount && console.warn("Sparky renderer has no property renderCount", e), t = e.renderCount), e.fire(), void (Jc && (Qc.push(e), ep += e.renderCount - t))) : void (Zc.has(e) || (Zc.add(e), void 0 === tp && (tp = requestAnimationFrame(ra))))
    }

    function sa(e) {
        Zc.delete(e), void 0 !== tp && !0 !== tp && 0 === Zc.size && (cancelAnimationFrame(tp), tp = void 0)
    }

    function la(e, t) {
        const n = e.replace(/[^\/]+$/, "");
        t.querySelectorAll("style, template").forEach(function (e) {
            e.title || (e.title = n), document.head.appendChild(document.adoptNode(e))
        }), t.querySelectorAll("link[rel=\"stylesheet\"]").forEach(function (e) {
            e.title || (e.title = n);
            const t = e.getAttribute("href");
            if (/^[^\/]/.test(t)) {
                const a = t.replace(/^\.\//, "");
                e.setAttribute("href", n + a)
            }
            document.head.appendChild(document.adoptNode(e))
        });
        const a = Promise.all(Pd("script", t).map(da)).then(() => t);
        return DEBUG ? a.then(t => (console.log("%cSparky %cinclude", "color: #a3b31f; font-weight: 600;", "color: #6894ab; font-weight: 400;", e), t)) : a
    }

    function da(e) {
        return new Promise(function (t) {
            window["sparkyScriptImport" + ++ap] = t;
            const n = document.createElement("script");
            n.type = "module", n.title = e.title || e.baseURL, n.textContent = e.textContent + ";window.sparkyScriptImport" + ap + "();", document.head.appendChild(n)
        })
    }

    function ca(e) {
        const t = e.split("#"), n = t[0] || "", a = t[1] || "";
        return n ? a ? np(n).then(e => la(n, e)).then(() => document.getElementById(a)).then(t => {
            if (!t) throw new Error("Sparky template \"" + e + "\" not found");
            return t
        }) : np(n).then(e => document.adoptNode(e.body)) : a ? Promise.resolve(document.getElementById(a)).then(t => {
            if (!t) throw new Error("Sparky template \"" + e + "\" not found");
            return t
        }) : Promise.reject(new Error("Sparky template \"" + e + "\" not found. URL must have a path or a hash ref"))
    }

    function pa() {
    }

    function ua(e, t) {
        if (!fp) return tn("text", "");
        var n = e && e.getAttribute(t ? t.attributeFn : "fn"),
            a = e && e.getAttribute(t ? t.attributeInclude : "include");
        return tn("comment", Bt(e) + (n ? " " + (t ? t.attributeFn : "fn") + "=\"" + n + "\"" : "") + (a ? " " + (t ? t.attributeInclude : "include") + "=\"" + a + "\"" : ""))
    }

    function ma(e, t) {
        this.label = "EachChild", this.scope = e, this.node = t[1], this.marker = t[2], this.sparkies = t[3], this.isOption = t[4], this.options = t[5], this.renderCount = 0
    }

    function ha(e) {
        this.label = "EachParent", this.input = e, this.args = arguments
    }

    function fa(e, t) {
        const n = e.cloneNode(!0), a = document.createDocumentFragment();
        a.appendChild(n);
        const o = new qo(n, t);
        return o.fragment = a, o
    }

    function ga(e, t, a, o) {
        for (var r = -1, i = 0; ++r < t.length;) {
            const n = t[r];
            let s = a[r];
            if (s && n === s[vp]) continue;
            let l = r - 1;
            for (; a[++l] && a[l][vp] !== n;) ;
            s = l === a.length ? fa(e, o) : a.splice(l, 1)[0], a.splice(r, 0, s)
        }
        for (; a.length > t.length;) {
            const e = a.pop().stop();
            e.nodes && (gp.forEach.call(e.nodes, e => e.remove()), i += e.nodes.length)
        }
        return i
    }

    function ba(e, t, a) {
        const o = a.length, r = e.parentNode;
        for (var s = 0, l = -1; l < o;) {
            for (e = e ? e.nextSibling : null; ++l < o && (!a[l].nodes || a[l].nodes[0] !== e);) if (a[l][vp] || (a[l].push(t[l]), a[l][vp] = t[l]), a[l].fragment) a[l].nodes = Array.from(a[l].fragment.childNodes), r.insertBefore(a[l].fragment, e), a[l].fragment = void 0, ++s; else for (let t = -1; a[l].nodes[++t];) r.insertBefore(a[l].nodes[t], e), ++s;
            if (!a[l]) break;
            e = Ue(a[l].nodes)
        }
        return s
    }

    function ya(e) {
        return {key: e[0], value: e[1]}
    }

    function va(e) {
        return Tp(e, Ep).then(is("json", di))
    }

    function xa(e, t) {
        va(e).then(function (n) {
            n && (wp[e] = n, t.push(n))
        }).catch(function () {
            console.warn("Sparky: no data found at", e)
        })
    }

    function ka() {
        this.renderCount = 0
    }

    function Ta(e) {
        return !!e.valueOf()
    }

    function Ea(e, t, n) {
        return n ? t.setAttribute(e, e) : t.removeAttribute(e), 1
    }

    function wa(e, t, n) {
        return t[e] = n, 1
    }

    function Ca(e, t, n) {
        this.label = "BooleanRenderer", this.node = t, this.name = n, this.tokens = e, this.render = n in t ? wa : Ea, this.renderCount = 0
    }

    function _a(e, t) {
        var n = t.trim().split(Ap);
        return e.add.apply(e, n), 1
    }

    function Na(e, t) {
        var n = t.trim().split(Ap);
        return e.remove.apply(e, n), 1
    }

    function Sa(e, t) {
        return e[typeof t].push(t), e
    }

    function ja(e, t) {
        this.label = "ClassRenderer", this.renderCount = 0;
        const n = e.reduce(Sa, {string: [], object: []});
        this.tokens = n.object, this.classList = dd(t), t.setAttribute("class", n.string.join(" "))
    }

    function Aa(e, t, n, a) {
        this.label = "StringRenderer", this.render = t, this.node = n, this.name = a, this.tokens = e, this.renderCount = 0
    }

    function qa(e, t) {
        var n = new MutationObserver(t);
        return n.observe(e, {childList: !0}), function () {
            n.disconnect()
        }
    }

    function La(e, t, n, a) {
        this.label = "TokenRenderer", this.renderCount = 0, this.render = t, this.node = n, this.name = a, this.tokens = [e], "select" === n.tagName.toLowerCase() && (this.unobserveMutations = qa(n, () => {
            n.value === this.renderedValue + "" || (this.renderedValue = void 0, ia(this))
        }))
    }

    function Ma(e, t, a) {
        for (var o = -1; ++o < e.length && e[o] < a;) ;
        if (0 === o) return t[0];
        if (o >= e.length) return Ue(t);
        if (a === e[o]) return t[o];
        var r = (a - e[o - 1]) / (e[o] - e[o - 1]);
        return r * (t[o] - t[o - 1]) + t[o - 1]
    }

    function Da(e) {
        return Up[e] && Up[e].ix
    }

    function Pa() {
        ka.prototype.fire.apply(this, arguments), void 0 === Xs(this.path, this.scope) && (this.token.noRender = !0, this.fn(), this.token.noRender = !1)
    }

    function Ua(e, t, n, a, o, r) {
        this.label = "Listener", this.node = e, this.token = t, this.path = t.path, this.pipe = t.pipe, this.type = n, this.renderCount = 0, this.read = a, this.readAttributeValue = o, this.coerce = r || f, this.fns = "input" === n ? Op : "change" === n ? Fp : void 0
    }

    function Ia(e, t) {
        return t.push(e), e
    }

    function Oa(e) {
        return e.stop(), e
    }

    function Fa(e) {
        return Up[e] ? Up[e].tx : Ip[e]
    }

    function $a(e, t) {
        return e.args && e.args.length ? t.apply(null, e.args) : t
    }

    function Ra(e, t) {
        const n = t && (t[Hp] || (t[Hp] = {})), a = JSON.stringify(e);
        if (Xp[a]) return Xp[a];
        if (n && n[a]) return n[a];
        var o = Xp;
        const r = e.map(e => {
            var a = Fa(e.name);
            if (!a && (o = n, a = t[e.name], Rp && !a)) throw new Error("pipe " + e.name + "() not found.");
            if (Rp && e.args.length !== a.length - 1) throw new Error(e.name + ":" + /\(((?:(?:,\s*)?\w*)*),/.exec(a.toString())[1].replace(/\s*/g, "") + " takes " + (a.length - 1) + " arguments, " + e.args.length + " given " + e.args);
            return $a(e, a)
        });
        return o[a] = T.apply(null, r)
    }

    function Va(e, t) {
        return t.pipe && (t.transform = Ra(t.pipe, e)), e
    }

    function Ba(e) {
        return e || void 0
    }

    function Ha(e) {
        return e = +e, e || 0 === e ? e : void 0
    }

    function za(e) {
        const t = e.value;
        return t || 0 === t ? t : void 0
    }

    function Ya(e) {
        return g(e.getAttribute("value")) ? e.checked ? e.value : void 0 : e.checked
    }

    function Wa(e) {
        return e.checked ? g(e.getAttribute("value")) ? e.value : e.checked : void 0
    }

    function Ga(e) {
        return e.getAttribute("value") || void 0
    }

    function Xa(e) {
        const t = e.getAttribute("value"), n = !!e.getAttribute("checked");
        return t ? t : n
    }

    function Ja(e, t, n) {
        return t.nodeValue = n, 1
    }

    function Ka(e, t, n) {
        return t.setAttribute(zp[e] || e, n), 1
    }

    function Za(e, t, n) {
        return e in t ? t[e] = n : t.setAttribute(e, n), 1
    }

    function Qa(e, t, n) {
        return e in t ? t[e] = n : n ? t.setAttribute(e, e) : t.removeAttribute(e), 1
    }

    function eo(e, t, n) {
        if (document.activeElement === t) return 0;
        if (n = typeof n === (Gp[t.type] || "string") ? n : null, n === t.value || n + "" === t.value) return 0;
        const a = Za("value", t, n);
        return Jd("dom-update", t), a
    }

    function to(e, t, n) {
        if (document.activeElement === t) return 0;
        if (n = "number" == typeof n ? n : null, n === ("" === t.value ? null : +t.value)) return 0;
        const a = Za("value", t, n);
        return Jd("dom-update", t), a
    }

    function no(e, t, n) {
        const a = g(t.getAttribute("value")) ? n === t.value : !0 === n;
        if (a === t.checked) return 0;
        const o = Qa("checked", t, a);
        return Jd("dom-update", t), o
    }

    function ao(e, t, n, a, o, r) {
        if (e) {
            const i = pp(a.pipes, e);
            if (i) {
                Va(a.pipes, i);
                const e = new La(i, t, o, r);
                return n.push(e), e
            }
        }
    }

    function oo(e, t, n, a, o, r) {
        if (e) {
            const i = mp([], e);
            if (i) {
                i.reduce(Va, a.pipes);
                const e = new Aa(i, t, o, r);
                return n.push(e), e
            }
        }
    }

    function ro(e, t, n, a, o) {
        e = zp[e] || e;
        var r = !1 !== o && t.getAttribute(a.attributePrefix + e);
        return r ? t.removeAttribute(a.attributePrefix + e) : r = t.getAttribute(e), oo(r, Ka, n, a, t, e)
    }

    function io(e, t, a, o) {
        for (var r = -1, i; i = e[++r];) ro(i, t, a, o)
    }

    function so(e, t, n, a) {
        const o = t.getAttribute(a.attributePrefix + e);
        o && t.removeAttribute(a.attributePrefix + e);
        const r = o || t.getAttribute(e);
        if (r) {
            const o = up([], r);
            if (o) {
                o.reduce(Va, a.pipes);
                const r = new Ca(o, t, e);
                return n.push(r), r
            }
        }
    }

    function lo(e, t, a, o) {
        for (var r = -1, i; i = e[++r];) so(i, t, a, o)
    }

    function co(e, t, n) {
        const a = e.getAttribute(n.attributePrefix + "class");
        a && e.removeAttribute(n.attributePrefix + "class");
        const o = a || e.getAttribute("class");
        if (o) {
            const a = mp([], o);
            if (a) {
                a.reduce(Va, n.pipes);
                const o = new ja(a, e);
                t.push(o)
            }
        }
    }

    function po(e, t, n, a, o, r, i, s) {
        const l = e.getAttribute(n.attributePrefix + "value");
        l && e.removeAttribute(n.attributePrefix + "value");
        const d = l || e.getAttribute("value");
        if (d) {
            const l = ao(d, a, t, n, e, "value");
            if (l) {
                const n = new Ua(e, l.tokens[0], o, r, i, s);
                n && t.splice(t.length - 1, 0, n)
            }
        }
    }

    function uo(e, t, n, a, o, r, i) {
        const s = e.getAttribute("value");
        oo(s, Za, t, n, e, "value");
        const l = e.getAttribute(n.attributePrefix + "value"), d = ao(l, a, t, n, e, "value");
        if (d) {
            const n = new Ua(e, d.tokens[0], "change", o, r, i);
            n && t.splice(t.length - 1, 0, n)
        }
    }

    function mo(e, t, n, a) {
        var o = Yp(t), r = e[o] || e.default;
        r && (r.booleans && lo(r.booleans, t, n, a), r.attributes && io(r.attributes, t, n, a), r.value && Jp(o, t, n, a))
    }

    function ho(e, t, n, a) {
        var o = Bt(t), r = e[o];
        r && (r.booleans && lo(r.booleans, t, n, a), r.attributes && io(r.attributes, t, n, a), r.types && mo(r.types, t, n, a), r.value && Jp(r.value, t, n, a))
    }

    function fo(e, t, a) {
        for (var o = -1, r; r = e[++o];) Kp(r, t, a)
    }

    function go(e, t) {
        if (!go.prototype.isPrototypeOf(this)) return new go(e, t);
        const n = this.renderers = [];
        Kp(e, n, t)
    }

    function bo(e) {
        return e.valueOf()
    }

    function yo(e, t, n) {
        console.log("%cSparky%c" + (e ? " is=\"" + e + "\"" : "") + (t ? " fn=\"" + t + "\"" : "") + (n ? " include=\"" + n + "\"" : ""), "color: #858720; font-weight: 600;", "color: #6894ab; font-weight: 400;")
    }

    function vo(e) {
        return "<" + e.tagName.toLowerCase() + ["fn", "class", "id", "include"].reduce((t, n) => {
            const a = e.getAttribute(n);
            return a ? t + " " + n + "=\"" + a + "\"" : t
        }, "") + "/>"
    }

    function xo(e) {
        return se(e) || e
    }

    function ko(e, t) {
        Fd(e, t), e.remove()
    }

    function To(e, t) {
        const n = e.done;
        return e = t.map ? t.map(xo) : t.then ? t.then(xo) : t, e.done || (e.done = n), e
    }

    function Eo(e, t, n, a) {
        for (var o; n && a.fn && (o = eu({}, a.fn));) {
            const r = _p[o.name] || a.functions && a.functions[o.name];
            if (!r) throw new Error("Sparky function \"" + o.name + "\" not found mounting node " + vo(t));
            a.fn = o.remainingString, r.settings && Qp(a, r.settings);
            const i = r.call(e, t, n, o.params, a);
            if (!1 === i) return !1;
            i && i !== n && (n = To(n, i))
        }
        return n
    }

    function wo(e, t) {
        return t.mount = function (t, n) {
            if (t !== e) return n.fn = t.getAttribute(n.attributeFn) || "", n.include = t.getAttribute(n.attributeInclude) || "", n.fn || n.include ? qo(t, n) : void 0
        }, go(e, t)
    }

    function Co(e, t, n, a) {
        function o(e) {
            const t = i.map(bo);
            if (-1 !== t.indexOf(void 0)) return void (null !== d && (n(null), d = null));
            const o = t.map(rp).join("");
            return o === d ? void s.push(e) : (d = o, s.stop(), l(), o ? void (s = z.of(e), l = _o(o, s, n, a)) : (null !== d && (n(null), d = null), s = di, void (l = r)))
        }

        if (!e) throw new Error("Sparky attribute include cannot be empty");
        const i = mp([], e);
        if (!i) return _o(e, t, n, a);
        i.reduce(Va, a.pipes);
        let s = di, l = r, d = null;
        return t[t.each ? "each" : "then"](function (e) {
            for (let t = i.length; t--;) {
                const n = i[t];
                "string" != typeof n && (n.unobserve && n.unobserve(), n.unobserve = xe(n.path, t => {
                    n.value = t, o(e)
                }, e, NaN))
            }
        }), () => {
            s.stop(), l()
        }
    }

    function _o(e, t, n, a) {
        const o = document.getElementById(e.replace(/^#/, ""));
        if (o) {
            const e = o.content ? o.content.cloneNode(!0) : o instanceof SVGElement ? o.cloneNode(!0) : void 0;
            return No(e, t, n, a)
        }
        let i = r, s;
        return ca(e).then(e => {
            if (s) return;
            const o = e.getAttribute(a.attributeFn),
                r = e.content ? e.content.cloneNode(!0) : e instanceof SVGElement ? e.cloneNode(!0) : gn(e);
            i = No(r, t, n, a)
        }).catch(e => {
            console.error(e.stack)
        }), function () {
            s = !0, i(), i = r
        }
    }

    function No(e, t, n, a) {
        var o;
        return t[t.each ? "each" : "then"](r => {
            const i = !o;
            o = o || ($t(e) ? wo(e, a) : new qo(e, a)), o.push(r), i && (n(e), t.done(() => o.stop()))
        }), function () {
            o && o.stop()
        }
    }

    function So(e, t, n, a) {
        const o = e.content;
        var r;
        return t[t.each ? "each" : "then"](t => {
            const i = !r;
            r = r || wo(o || e, n), r.push(t), o && i && (ko(e, o), ++a.renderCount)
        }), function () {
            r && r.stop()
        }
    }

    function jo(e, t, n, a, o) {
        const r = {0: e};
        return Co(t, n, a => {
            const i = r[0];
            for (var s = 0; r[++s];) r[s].remove(), r[s] = void 0, ++o.renderCount;
            a && a.childNodes && a.childNodes.length ? Qp(r, a.childNodes) : a = r[0] = e.content ? Zp ? tn("comment", " include=\"" + t + "\" ") : tn("text", "") : e, ko(i, a), ++o.renderCount
        }, a)
    }

    function Ao(e, t, n, a, o) {
        return Co(t, n, t => {
            t.removeAttribute("id"), ko(e, t), e = t, ++o.renderCount
        }, a)
    }

    function qo(e, t) {
        if (!qo.prototype.isPrototypeOf(this)) return new qo(e, t);
        const n = "string" == typeof e ? document.querySelector(e) : e, a = Qp({}, hp, t),
            o = a.fn = a.fn || n.getAttribute(a.attributeFn) || "", r = z.of().map(xo), i = Eo(null, n, r, a);
        if (this.label = "Sparky", this.renderCount = 0, this.push = r.push, this.stop = r.stop, !!i) {
            const e = a.include || n.getAttribute(a.attributeInclude) || "";
            this.stop = function () {
                return r.stop(), i.stop(), s(), this
            }, Zp && yo(a.is, o, e, n), a.is = "", a.fn = "", a.include = "";
            var s = e ? "use" === n.tagName ? Ao(n, e, i, a, this) : jo(n, e, i, a, this) : So(n, i, a, this)
        }
    }

    function Lo(e) {
        return e = "string" == typeof e ? {url: e} : e, nu(au(e, window.axiosConfig)).then(Vs("data"))
    }

    function Mo(e) {
        const t = /(\d+)\/$/, n = t.exec(e), a = n && parseInt(n[1], 10), o = e.replace(t, ""), r = ru(o),
            i = r.requests[""] || (r.requests[""] = Lo(r.base));
        return n ? i.then(function (e) {
            return e.find(function (e) {
                return e.id === a
            })
        }) : i
    }

    function Do(e) {
        e.active = !1, setTimeout(function () {
            sl(su, e)
        }, 600)
    }

    function Po(e) {
        return e && "string" == typeof e.stack && "string" == typeof e.message
    }

    function Uo(e) {
        return e.font.concat(e.cart)
    }

    function Io(e) {
        return delete e.carted, e
    }

    function Oo(e) {
        return cu.find(zs({pk: e, type: "font"}))
    }

    function Fo(e) {
        return cu.find(zs({pk: e, type: "pack"}))
    }

    function $o(e) {
        return cu.find(zs({pk: e, type: "cut"}))
    }

    function Ro(e) {
        return cu.find(zs({pk: e, type: "custom"}))
    }

    function Vo(e) {
        return "font" === e.type
    }

    function Bo(e) {
        return "pack" === e.type
    }

    function Ho(e) {
        for (var t = e.content.length; t--;) delete e.content[t].price;
        return e.content = e.content.map(function (e) {
            var t = bu.content.find(t => t.object_pk === e.object_pk && t.object_type === e.object_type);
            return t ? Is(t, e) : (e.product = cu.find(t => t.pk === e.object_pk && t.type === e.object_type), e)
        }).map(se), e.licensee = e.quantity ? e.quantity_client ? "both" : "user" : e.quantity_client ? "client" : "none", e.quantity ? e.quantity = e.quantity : delete e.quantity, e.quantity_client ? e.quantity_client = e.quantity_client : delete e.quantity_client, e
    }

    function zo(e) {
        if (e) {
            var t = bu.content.findIndex(zs({object_pk: e.pk, object_type: e.type}));
            0 > t || bu.content.splice(t, 1)
        }
    }

    function Yo(e) {
        if (!(e.quantity + e.quantity_client)) throw new Error("Item must have either quantity or quantity_client or both " + JSON.stringify(e));
        return {
            object_pk: e.object_pk,
            object_type: e.object_type,
            quantity: e.quantity,
            quantity_client: e.quantity_client
        }
    }

    function Wo(e) {
        return vu(bu.licensee || "user"), {
            discount_code: e.discount_code,
            owner: e.owner,
            billing: e.billing,
            content: e.content && e.content.map(Yo)
        }
    }

    function Go(e, t) {
        return se({product: e, font_pk: e.font_pk, object_pk: e.pk, object_type: e.type, quantity: t, total: 0})
    }

    function Xo() {
        bu.content.length && (vu(bu.licensee), yu({content: bu.content}))
    }

    function Jo(e) {
        return e.content.map(Vs("total")).reduce(add, 0) + e.discount
    }

    function Ko(e, t) {
        return -1 === e.indexOf(t) && e.push(t), e
    }

    function Zo(e) {
        return bu.content.filter(m(Hs("pack"), Vs("object_type"))).find(function (t) {
            return -1 !== e.pack_pks.indexOf(t.object_pk)
        }) ? 2 : 0
    }

    function Qo(e) {
        return bu.content.find(zs({object_type: "font", object_pk: e.font_pk})) ? 2 : "pack" === e.type ? 0 : Zo(e)
    }

    function er(e) {
        return bu.content.find(zs({object_type: e.type, object_pk: e.pk})) ? 1 : "font" === e.type ? 0 : Qo(e)
    }

    function tr(e) {
        return bu.content.find(zs({object_type: e.type, object_pk: e.pk})) ? 1 : 0
    }

    function nr(e) {
        const t = e.product || cu.find(zs({type: e.object_type, pk: e.object_pk}));
        if (!t) throw new Error("SWTY: No product associated with item " + JSON.stringify(e));
        return Nu(t)
    }

    function ar(e) {
        return e.state = "custom" === e.product.type ? tr(e.product) : er(e.product), e
    }

    function rr(e) {
        return {id: e.id, node: e, box: cn(e)}
    }

    function ir(e) {
        ju(this, e), this.length = e.length, this.node = tn("canvas", {
            width: e[0].width,
            height: e[0].height
        }), this.context = this.node.getContext("2d"), this.duration = e.length / 25, this.currentTime = 0
    }

    function sr(e) {
        const t = parseInt(getComputedStyle(document.documentElement).scrollPaddingTop, 10),
            n = zd(document.scrollingElement, e), a = document.scrollingElement.scrollHeight,
            o = cn(document.scrollingElement), r = n[1] - t > a - o.height ? a - o.height : n[1] - t;
        Zd(Du, Pu, "scrollTop", document.scrollingElement, r)
    }

    function lr(e) {
        if (Iu[e]) return Iu[e];
        const t = se({});
        return Iu[e] = t, mu(e).then(function () {
            t.product = Oo(e)
        }), t
    }

    function dr(e, t) {
        if (Ou["font-" + e + "-pack-" + t]) return Ou["font-" + e + "-pack-" + t];
        const n = se({alphabet: "latin"});
        return Ou["font-" + e + "-pack-" + t] = n, mu(e).then(function () {
            n.product = Fo(t)
        }), n
    }

    function cr(e, t) {
        if (Ou["font-" + e + "-cut-" + t]) return Ou["font-" + e + "-cut-" + t];
        const n = se({size: Uu.defaultFontSize, prefix: "", text: "", alphabet: "latin"});
        return Ou["font-" + e + "-cut-" + t] = n, mu(e).then(function () {
            n.product = $o(t)
        }), n
    }

    function pr(t) {
        var e = t.target.tagName;
        return e && !!$u[e.toLowerCase()]
    }

    function ur(e, t) {
        var n, a;
        if (e.identifiedTouch) return e.identifiedTouch(t);
        for (n = -1, a = e.length; ++n < a;) if (e[n].identifier === t) return e[n]
    }

    function mr(t, e) {
        var n = ur(t.changedTouches, e.identifier);
        return n ? n.pageX === e.pageX && n.pageY === e.pageY ? void 0 : n : void 0
    }

    function hr(t, e) {
        e.push(t), xr(t, e, t, gr)
    }

    function fr() {
        gr()
    }

    function gr() {
        Hu(document, Ru.move, hr), Hu(document, Ru.cancel, fr)
    }

    function br(t, e) {
        var n = mr(t, e[0]);
        n && xr(t, e, n, vr)
    }

    function yr(t, e) {
        var n = ur(t.changedTouches, e[0].identifier);
        n && vr(e)
    }

    function vr(e) {
        Hu(document, Vu.move, e[0].touchmove), Hu(document, Vu.cancel, e[0].touchend)
    }

    function xr(t, e, n, a) {
        var o = n.pageX - e[0].pageX, r = n.pageY - e[0].pageY;
        if (!(64 > o * o + r * r)) {
            var i = e[0], s = e[0].target, l;
            a(e), zu(e[0].target, "dom-touch", {
                pageX: i.pageX, pageY: i.pageY, detail: function () {
                    return l || (l = Nr(s, e)), l
                }
            })
        }
    }

    function kr(t, e) {
        e.touch = t, e.timeStamp = t.timeStamp, e.stream.push(t)
    }

    function Tr(t, e) {
        e.target;
        Er(), e.stream.stop()
    }

    function Er() {
        Hu(document, Ru.move, kr), Hu(document, Ru.end, Tr)
    }

    function wr(t, e) {
        var n = mr(t, e);
        n && (t.preventDefault(), e.touch = n, e.timeStamp = t.timeStamp, e.stream.push(n))
    }

    function Cr(t, e) {
        var n = ur(t.changedTouches, e.identifier);
        n && (_r(e), e.stream.stop())
    }

    function _r(e) {
        Hu(document, Vu.move, e.activeTouchmove), Hu(document, Vu.end, e.activeTouchend)
    }

    function Nr(e, t) {
        var n = z.from(t).map(function (n) {
            return {x: n.pageX - t[0].pageX, y: n.pageY - t[0].pageY, time: (n.timeStamp - t[0].timeStamp) / 1e3}
        }), a = {stream: n, target: e, touch: void 0, identifier: t[0].identifier};
        return void 0 === a.identifier ? (Bu(e, "click", Tn), Bu(document, Ru.move, kr, a), Bu(document, Ru.cancel, Tr, a)) : (a.activeTouchmove = function (t, e) {
            wr(t, e)
        }, a.activeTouchend = function (t, e) {
            Cr(t, e)
        }, Bu(document, Vu.move, a.activeTouchmove, a), Bu(document, Vu.end, a.activeTouchend, a)), n.done(function () {
            setTimeout(function () {
                Hu(e, "click", Tn)
            }, 200)
        }), n
    }

    function Sr(e, t) {
        t = t.shift();
        var n = Je([t.x, t.y]);
        Wu(e, "dom-swipe", {detail: t, angle: n[1], velocity: n[0] / t.time})
    }

    function jr(e) {
        var t = Math.atan;
        return t(e) / Jr
    }

    function Ar(e) {
        var t = Ue(Jt(e).filter(Dd(".switchable, [switchable]"))), n = t.offsetLeft + t.clientWidth,
            a = e.parentNode.clientWidth;
        return a - n
    }

    function qr(e, t) {
        var n = cn(e).left, a = cn(t).left, o = Xr(n - a - Yd("margin-left", t));
        e.style.transform = "translate(" + o + "px, 0px)"
    }

    function Lr(e, t) {
        var n = cn(t);
        if (n) {
            var a = n.left, o = cn(e).left, r = a - o - Yd("margin-left", t);
            e.style.transform = "translate(" + -r + "px, 0px)"
        }
    }

    function Mr(e) {
        var t = Md(".slides-block", e);
        if (t) {
            var n = Wt(e) || Ue(Pd(".switchable", t)), a = Yt(e) || Pd(".switchable", t)[0], o = Pd(".prev-thumb", t),
                r = Pd(".next-thumb", t);
            o.forEach(function (e) {
                e.href = "#" + n.id
            }), r.forEach(function (e) {
                e.href = "#" + a.id
            })
        }
    }

    function Dr(e, t) {
        function a() {
            r = requestAnimationFrame(0 < --e ? a : t)
        }

        function o() {
            cancelAnimationFrame(r)
        }

        var r;
        return a(), o
    }

    function Pr(e, t) {
        var n = dd(e), a = cn(t);
        if (a) {
            var o = a.left, r = cn(e).left, i = o - r - Yd("margin-left", t);
            n.add("no-transition"), e.style.transform = "translate(" + -i + "px, 0px)", Dr(2, function () {
                n.remove("no-transition")
            })
        }
    }

    function Ur(e, t, n, a) {
        clearTimeout(e.timer), Wd.off(n, "transitionend", e.transitionend);
        var o = t.indexOf(a), r;
        o < (5 < t.length ? 2 : 1) ? (r = t.splice(t.length - 1), r.forEach(Fd(t[0])), Pr(n, a)) : o + (5 < t.length ? 3 : 2) > t.length && (r = t.splice(0, 1), r.forEach(Id(n)), Pr(n, a)), Mr(a)
    }

    function Ir(e) {
        return /\bmenu-block\b/.test(e.className)
    }

    function Or(e, t, n) {
        return t === e ? n : (Ir(t) && ++n, Or(e, t.parentNode, n))
    }

    function Fr(e, t, n) {
        return e || (e = document), n || (n = 0), Or(e, t, n)
    }

    function $r(e) {
        return e && -1 !== e.indexOf("application/json")
    }

    function Rr(e) {
        return new URLSearchParams(e).toString()
    }

    function Vr(e) {
        return JSON.stringify(Array.from(e.entries()).reduce(function (e, t) {
            return e[t[0]] = t[1], e
        }, {}))
    }

    const oi = Array.prototype;
    {
        const e = n, t = function () {
            var e = function () {
            };
            try {
                Object.defineProperty(e, "length", {value: 2})
            } catch (t) {
                return !1
            }
            return 2 === e.length
        }(), a = function (e, n, a, o) {
            return o.toString = function () {
                return /function\s*[\w\d]*\s*\([,\w\d\s]*\)/.exec(a.toString()) + " { [" + e + "] }"
            }, t && Object.defineProperty(o, "length", {value: n}), o
        };
        n = function (t, n, o) {
            return o = o || t.length, a("curried", o, t, e(t, n, o))
        }
    }
    var A = n;
    const ri = Promise.resolve(), ii = Array.prototype, si = {done: !0}, li = {next: () => si};
    var di = Object.freeze({shift: r, push: r, stop: r, length: 0, [Symbol.iterator]: () => li});
    const ci = Array.prototype, pi = Object.prototype, O = Object.assign;
    O(P, {
        of: function () {
            return P.from(arguments)
        }, from: function (e) {
            var t;
            if ("number" == typeof e.length) return t = -1, new P(function n() {
                return ++t >= e.length ? void 0 : void 0 === e[t] ? n() : e[t]
            });
            if ("function" == typeof e.shift && void 0 === e.length) return new P(function () {
                return e.shift()
            });
            if ("function" == typeof e.next) return new P(function t() {
                var n = e.next();
                return n.done ? n.value : void 0 === n.value ? t() : n.value
            });
            throw new Error("Fn: from(object) object is not a list of a known kind (array, functor, stream, iterator).")
        }
    }), O(P.prototype, {
        shift: r, of: function () {
            return this.constructor.of.apply(this.constructor, arguments)
        }, ap: function (e) {
            var t = this.shift;
            return j(this, function () {
                var n = t();
                return void 0 === n ? void 0 : e.map(n)
            })
        }, unshift: function () {
            var e = this, t = l(arguments);
            return j(this, function () {
                return (t.length ? t : e).shift()
            })
        }, catch: function (t) {
            var e = this;
            return j(this, function () {
                try {
                    return e.shift()
                } catch (n) {
                    return t(n)
                }
            })
        }, chain: function (e) {
            return this.map(e).join()
        }, clone: function () {
            var e = this, t = this.shift, n = [], a = [], o = !1;
            this.shift = function () {
                var r;
                return n.length ? (r = n.shift(), !n.length && o && (e.status = "done"), r) : o ? void 0 : (r = t(), "done" === e.status && (o = !0), void 0 !== r && a.push(r), r)
            };
            var r = new P(function () {
                var r;
                return a.length ? a.shift() : o ? void 0 : (r = t(), "done" === e.status && (o = !0, e.status = void 0), void 0 !== r && n.push(r), r)
            });
            return r
        }, concat: function () {
            var e = l(arguments), t = this, n = j(this, function a() {
                if (void 0 === t) return void (n.status = "done");
                if (S(t)) return t = e.shift(), a();
                var o = t.shift();
                return n.status = 0 === e.length && S(t) ? "done" : void 0, o
            });
            return n
        }, dedup: function () {
            var e;
            return this.filter(function (t) {
                var n = e;
                return e = t, n !== t
            })
        }, filter: function (e) {
            var t = this;
            return j(this, function () {
                for (var n; void 0 !== (n = t.shift()) && !e(n);) ;
                return n
            })
        }, first: function () {
            var e = this;
            return j(this, v(function () {
                return e.status = "done", e.shift()
            }))
        }, join: function () {
            var e = this, t = di;
            return j(this, function n() {
                var a = t.shift();
                return void 0 === a ? (t = e.shift(), void 0 === t ? void (t = di) : n()) : a
            })
        }, latest: function () {
            var e = this;
            return j(this, function () {
                return b(e)
            })
        }, map: function (e) {
            return j(this, m(function (t) {
                return void 0 === t ? void 0 : e(t)
            }, this.shift))
        }, chunk: function (e) {
            var t = this, n = [];
            return j(this, e ? function () {
                for (var a, o; n.length < e;) {
                    if (a = t.shift(), void 0 === a) return;
                    n.push(a)
                }
                if (n.length >= e) return o = n, n = [], P.of.apply(P, o)
            } : function () {
                return n = t.toArray(), n.length ? n : void 0
            })
        }, fold: function (e, t) {
            var n = 0;
            return this.map(function (a) {
                return t = e(t, a, n++), t
            })
        }, scan: function (e, t) {
            return this.map(n => t = e(t, n))
        }, partition: function (e) {
            function t(e) {
                var t = Stream.of().on("pull", n);
                return t.key = e, r.set(e, t), t
            }

            function n(i, s) {
                var l = a.shift();
                if (void 0 !== l) {
                    var d = e(l), c = r.get(d);
                    return c === s ? l : (void 0 === c && (c = t(d, l), o.push(c)), c.push(l), n(i, s))
                }
            }

            var a = this, o = [], r = new Map;
            return e = e || P.id, j(this, function n() {
                if (o.length) return o.shift();
                var i = a.shift();
                if (void 0 !== i) {
                    var s = e(i), l = r.get(s);
                    return void 0 === l ? (l = t(s, i), l.push(i), l) : (l.push(i), n())
                }
            })
        }, reduce: function (e, t) {
            return this.fold(e, t).latest().shift()
        }, take: function (e) {
            var t = this, n = 0;
            return j(this, function () {
                var a;
                if (n < e) return (a = t.shift(), void 0 === a) ? void 0 : (++n == e && (t.status = "done"), a)
            })
        }, sort: function (e) {
            e = e || P.byGreater;
            var t = this, n = [];
            return j(this, function () {
                for (var a; void 0 !== (a = t.shift());) M(n, e, a);
                return n.shift()
            })
        }, split: function (e) {
            var t = this, n = [];
            return j(this, function a() {
                var o = t.shift(), r;
                return void 0 === o ? n.length ? (r = n, n = [], r) : void 0 : e(o) ? (r = n, n = [o], r.length ? r : a()) : (n.push(o), a())
            })
        }, syphon: function (e) {
            var t = this.shift, n = [], a = [];
            return this.shift = function () {
                if (n.length) return n.shift();
                for (var o; void 0 !== (o = t()) && e(o);) a.push(o);
                return o
            }, j(this, function () {
                if (a.length) return a.shift();
                for (var o; void 0 !== (o = t()) && !e(o);) n.push(o);
                return o
            })
        }, rest: function (e) {
            var t = this;
            return j(this, function () {
                for (; 0 < e--;) t.shift();
                return t.shift()
            })
        }, unique: function () {
            var e = this, t = [];
            return j(this, function n() {
                var a = e.shift();
                return void 0 === a ? void 0 : -1 === t.indexOf(a) ? (t.push(a), a) : n()
            })
        }, each: function (e) {
            for (var t; void 0 !== (t = this.shift());) e.call(this, t);
            return this
        }, find: function (e) {
            return this.filter(e).first().shift()
        }, next: function () {
            return {value: this.shift(), done: this.status}
        }, pipe: function (e) {
            return this.each(e.push), e
        }, tap: function (e) {
            return this.shift = L(this.shift, e), this
        }, toJSON: function () {
            return this.reduce(q, [])
        }, toString: function () {
            return this.reduce(N, "")
        }, process: h(function (e) {
            return e(this)
        }, ".process() is deprecated"), last: h(function () {
            var e = this;
            return j(this, function () {
                return b(e)
            })
        }, ".last() is now .latest()")
    }), P.prototype.toArray = P.prototype.toJSON, window.Symbol && (P.prototype[Symbol.iterator] = function () {
        return this
    });
    var ui = Array.prototype, mi = Object.assign, hi = Symbol("events"), fi = {shift: r, push: r, start: r, stop: r};
    mi(H.prototype, fi, {
        shift: function () {
            return 1 > --this.n && this.done(), this.source.shift()
        }
    }), mi(Y.prototype, {
        shift: function () {
            var e = this._buffer, t = this._notify;
            return e.length ? e.shift() : t("pull")
        }, push: function () {
            var e = this._buffer, t = this._notify;
            e.push.apply(e, arguments), t("push")
        }, stop: function () {
            var e = this._buffer;
            this._stop(e.length)
        }
    }), z.from = function (e) {
        return new z(Y, e)
    }, z.of = function () {
        return z.from(arguments)
    }, W.prototype.shift = function () {
        const e = this.value;
        return this.value = void 0, e
    }, z.fromPromise = function (e) {
        return new z(W, e)
    }, z.fromCallback = function (e, t) {
        const n = z.of(), o = a(2, arguments);
        return o.push(n.push), e[t].apply(e, o), n
    };
    const gi = [];
    mi(G.prototype, {
        shift: function () {
            var e = this.value;
            return this.value = void 0, e
        }, start: function (e) {
            const t = this.timer.now();
            this.event.startTime = void 0 === e ? t : e, this.event.t2 = e > t ? e : t;
            const n = this.timer.currentTime > t ? this.timer.currentTime : t + .08;
            this.event.startTime > n ? this.requestId = this.timer.request(this.frame) : Promise.resolve(n).then(this.frame)
        }, stop: function (e) {
            if (void 0 === this.event.startTime) throw new Error("TimeStream: Cannot call .stop() before .start()");
            this.event.stopTime = e || this.timer.now(), this.event.stopTime <= this.event.t2 && (this.requestId && this.timer.cancel(this.requestId), this.end())
        }, update: function (e) {
            const t = this.event;
            return t.t1 = t.t2, this.requestId = void 0, this.value = t, e >= t.stopTime ? (t.t2 = t.stopTime, this.notify("push"), this.end(), void gi.push(t)) : void (t.t2 = e, this.notify("push"), this.value = void 0, this.requestId = this.timer.request(this.frame))
        }
    }), z.fromTimer = function (e) {
        return new z(G, e)
    }, z.fromDuration = function (e) {
        return z.fromTimer(new I(e))
    }, z.frames = function () {
        return z.fromTimer(bi)
    }, mi(J.prototype, {
        shift: function () {
            if (this._hot) {
                this._hot = !1;
                var e = this._sources, t = this._store.map(X);
                return e.every(R) && this._stop(0), t.every($) && this._fn.apply(null, t)
            }
        }, stop: function () {
            var e = this._notify;
            d(function (t) {
                var n = t.source, a = t.listen;
                n.off("push", a), n.off("push", e)
            }, this._store), this._stop(this._hot ? 1 : 0)
        }
    }), z.Combine = function (e) {
        var t = ui.slice.call(arguments, 1);
        if (2 > t.length) throw new Error("Stream: Combine requires more than " + t.length + " source streams");
        return new z(function (n, a) {
            return new J(n, a, e, t)
        })
    }, mi(K.prototype, {
        shift: function () {
            var e = this._sources, t = this._values, n = this._buffer, a = this._stop;
            if (t.length) return t.shift();
            var o = n.shift();
            if (o) {
                var r = o.shift();
                return "done" === o.status && ++this._i >= e.length && a(0), r
            }
        }, stop: function () {
            var e = this._notify, t = this._sources, n = this._stop, a = this._update;
            d(function (t) {
                t.off("push", a), t.off("push", e)
            }, t), n(this._values.length + this._buffer.length)
        }
    }), z.Merge = function () {
        var e = arguments;
        return new z(function (t, n) {
            return new K(t, n, Array.from(e))
        })
    }, z.Choke = function (e) {
        return new z(function (t, n) {
            var a = u(function () {
                o = arguments[arguments.length - 1], t("push")
            }, e), o;
            return {
                shift: function () {
                    var e = o;
                    return o = void 0, e
                }, push: a, stop: function () {
                    a.cancel(!1), n()
                }
            }
        })
    };
    var bi = {now: y, request: requestAnimationFrame.bind(window), cancel: cancelAnimationFrame.bind(window)};
    mi(Z.prototype, {
        request: function (e) {
            return this.fns.push(e), e
        }, cancel: function (e) {
            U(this.fns, e)
        }
    }), mi(ee.prototype, {
        shift: function () {
            var e = this.value;
            return this.value = void 0, e
        }, stop: function (e) {
            var t = this.timer;
            this.queue === r && (t.cancel && t.cancel(this.ref), this.ref = void 0), this.queue = r, this._stop(void 0 !== this.value && e ? 1 : 0)
        }, push: function () {
            this.value = arguments[arguments.length - 1], this.queue()
        }
    }), z.throttle = function (e) {
        if ("function" == typeof e) throw new Error("Dont accept request and cancel functions anymore");
        return e = "number" == typeof e ? new I(e) : e instanceof z ? new Z(e) : e ? e : bi, new z(function (t, n) {
            return new ee(t, n, e)
        })
    }, z.prototype = mi(Object.create(P.prototype), {
        constructor: z, clone: function () {
            var e = this, t = this.shift, n = [], a = [], o = new z(function (o, r) {
                var i = a;
                return e.on("push", o), {
                    shift: function () {
                        if (i.length) return i.shift();
                        var a = t();
                        return void 0 === a ? "done" === e.status && (r(0), e.off("push", o)) : n.push(a), a
                    }, stop: function () {
                        for (var a; void 0 !== (a = t());) i.push(a), n.push(a);
                        r(i.length), e.off("push", o)
                    }
                }
            });
            return this.done(o.stop), this.shift = function () {
                if (n.length) return n.shift();
                var e = t();
                return void 0 !== e && "done" !== o.status && a.push(e), e
            }, o
        }, combine: function (e, t) {
            return z.Combine(e, this, t)
        }, merge: function () {
            var e = l(arguments);
            return e.unshift(this), z.Merge.apply(null, e)
        }, choke: function (e) {
            return this.pipe(z.Choke(e))
        }, throttle: function (e) {
            return this.pipe(z.throttle(e))
        }, clock: function (e) {
            return this.pipe(z.clock(e))
        }, each: function () {
            var e = arguments, t = this;
            return P.prototype.each.apply(t, e), this.on("push", () => P.prototype.each.apply(t, e))
        }, join: function () {
            const e = this.constructor.of();
            return this.each(t => {
                t.pipe ? t.pipe(e) : e.push.apply(e, t)
            }), e
        }, on: function (e, t) {
            var n = this[hi];
            if (!n) return this;
            var a = n[e] || (n[e] = []);
            return a.push(t), this
        }, off: function e(t, a) {
            var o = this[hi];
            if (!o) return this;
            if (0 === arguments.length) return Object.keys(o).forEach(e, this), this;
            var r = o[t];
            if (r) {
                if (!a) return delete o[t], this;
                for (var i = r.length; i--;) r[i] === a && r.splice(i, 1);
                return this
            }
        }
    });
    const yi = Symbol("Observer"), vi = Array.prototype, xi = Object.freeze([]), ki = Object.isExtensible, Ti = {
            get: oe, set: function (e, t, n, a) {
                if ("symbol" == typeof t) return e[t] = n, !0;
                var o = e[t], r = e.length;
                if (o === n) return !0;
                var i = e[yi].properties, s;
                if ("length" === t) {
                    if (n >= e.length) return e.length = n, !0;
                    for (s = {index: n, removed: vi.splice.call(e, n), added: xi}; --o >= n;) ae(i[o], void 0)
                } else if (0 != +t % 1) e[t] = n; else if (t = +t, void 0 !== n) s = {
                    index: t,
                    removed: vi.splice.call(e, t, 1, n),
                    added: [n]
                }; else if (t < e.length) s = {
                    index: t,
                    removed: vi.splice.call(e, t, 1),
                    added: xi
                }, n = e[t]; else return !0;
                e.length !== r && ae(i.length, e.length), ae(i[t], se(n) || n);
                var l = e[yi].mutate;
                return ae(l, a, s), !0
            }
        }, Ei = {
            get: oe, set: function (e, t, n, a) {
                if (e[t] === n) return !0;
                e[t] = n, n = e[t];
                var o = e[yi].properties;
                ae(o[t], se(n) || n);
                var r = e[yi].mutate;
                return ae(r, a, {name: t, removed: e[t], added: n}), !0
            }
        }, wi = /^([^\]=,\s]+)\s*(?:=\s*(['"])?([^\]=,\s]+)\2\s*)?(?:(,)|(])(\s*\.$)?)\s*/, Ci = {
            3: function (e, t) {
                return e[t[1]] = t[2] ? t[3] : "true" === t[3] || "false" !== t[3] && (de(t[3]) ? parseFloat(t[3]) : t[3]), e
            }, 4: function (e, t) {
                return ce(wi, Ci, e, t)
            }, 5: function (e) {
                return function (t) {
                    for (var n in e) if (t[n] !== e[n]) return !1;
                    return !0
                }
            }, 6: function (e, t) {
                throw new Error("Observer: A path may not end with \"[key=value].\" " + t.input)
            }
        }, _i = Array.prototype, Ni = Object.freeze([]),
        Si = /^\.?([^.[\s]+)\s*|^\[(?:(\d+)|'([^']*)'|"([^"]*)")\]\s*|^\[\s*/;
    ke.prototype = {
        shift: function () {
            var e = this.value;
            return this.value = void 0, e
        }, stop: function () {
            this.unobserve(), this.end()
        }, unobserve: r
    };
    var ji = Object.is || function (e, t) {
        return e === t
    };
    var Ai = /\[?([-\w]+)(?:=(['"])([^\2]+)\2|(true|false)|((?:\d*\.)?\d+))?\]?\.?/g;
    const qi = Array.prototype, Li = Object.assign, Mi = void 0 === window.DEBUG || window.DEBUG, Di = {
            boolean: e => "boolean" == typeof e,
            function: e => "function" == typeof e,
            number: e => "number" == typeof e,
            object: e => "object" == typeof e,
            symbol: e => "symbol" == typeof e,
            Any: r,
            Array: e => Array.isArray(e),
            ArrayLike: e => "number" == typeof e.length,
            Boolean: e => "boolean" == typeof e,
            Date: e => e instanceof Date && !ai(e.getTime()),
            Error: e => e instanceof Error,
            Integer: e => Yr(e) && zr <= e && Hr >= e,
            NegativeInteger: e => Yr(e) && zr <= e && Hr >= e && 0 > e,
            NonPositiveInteger: e => Yr(e) && zr <= e && Hr >= e && 0 >= e,
            PositiveInteger: e => Yr(e) && zr <= e && Hr >= e && 0 < e,
            NonNegativeInteger: e => Yr(e) && zr <= e && Hr >= e && 0 <= e,
            Number: e => "number" == typeof e && !ai(e),
            NegativeNumber: e => "number" == typeof e && 0 > e,
            NonPositiveNumber: e => "number" == typeof e && 0 >= e,
            PositiveNumber: e => "number" == typeof e && 0 < e,
            NonNegativeNumber: e => "number" == typeof e && 0 <= e,
            Null: e => null === e,
            Object: e => !!e && "object" == typeof e,
            RegExp: e => e instanceof RegExp
        }, Pi = Mi ? function (e, t, n, a, o) {
            if (!Di[e]) throw new RangeError("Type \"" + e + "\" not recognised");
            if (!Di[e](t)) throw new Error(o || "value not of type \"" + e + "\": " + t, n, a)
        } : r, Ui = Mi ? function (e, t, a, o) {
            for (var r = e.length; r--;) Pi(e[r], t[r], a, o, "argument " + r + " not of type \"" + e[r] + "\": " + t[r])
        } : r, Ii = Fe("Number, Number, Number => Number", (e, t, n) => (n - e) / (t - e)),
        Oi = Fe("Number, Number, Number => Number", (e, t, n) => ei((n - e) / (t - e), 1 / 2)),
        Fi = Fe("Number, Number, Number => Number", (e, t, n) => ei((n - e) / (t - e), 1 / 3)),
        $i = Fe("PositiveNumber, PositiveNumber, NonNegativeNumber => Number", (e, t, n) => Qr(n / e) / Qr(t / e)),
        Ri = Fe("PositiveNumber, PositiveNumber, NonNegativeNumber => Number", (e, t, n) => n <= e ? n / e / 9 : .1111111111111111 + Qr(n / e) / Qr(t / e) / 1.125),
        Vi = Fe("Object, Object, Number => Number", (e, t, n) => Be({
            0: Ii(e.point[0], t.point[0], e.handle[0]),
            1: Ii(e.point[0], t.point[0], e.handle[0])
        }, {
            0: Ii(e.point[0], t.point[0], t.handle[0]),
            1: Ii(e.point[0], t.point[0], t.handle[0])
        }, 1, Ii(e.point[0], t.point[0], n)));
    var Bi = Object.freeze({
        linear: Ii,
        quadratic: Oi,
        cubic: Fi,
        logarithmic: $i,
        linearLogarithmic: Ri,
        cubicBezier: Vi
    });
    const Hi = Fe("Number, Number, Number => Number", (e, t, n) => n * (t - e) + e),
        zi = Fe("Number, Number, Number => Number", (e, t, n) => ei(n, 2) * (t - e) + e),
        Yi = Fe("Number, Number, Number => Number", (e, t, n) => ei(n, 3) * (t - e) + e),
        Wi = Fe("PositiveNumber, PositiveNumber, Number => Number", (e, t, n) => e * ei(t / e, n)),
        Gi = Fe("PositiveNumber, PositiveNumber, Number => Number", (e, t, n) => .1111111111111111 >= n ? 9 * n * e : e * ei(t / e, 1.125 * (n - .1111111111111111))),
        Xi = Fe("Object, Object, Number => Number", (e, t, n) => Hi(e.point[1], t.point[1], Be({
            0: Ii(e.point[0], t.point[0], e.handle[0]),
            1: Ii(e.point[1], t.point[1], e.handle[1])
        }, {0: Ii(e.point[0], t.point[0], t.handle[0]), 1: Ii(e.point[1], t.point[1], t.handle[1])}, 1, n)));
    var Ji = Object.freeze({
        linear: Hi,
        quadratic: zi,
        cubic: Yi,
        logarithmic: Wi,
        linearLogarithmic: Gi,
        cubicBezier: Xi
    });
    const Ki = 180 / Jr, Zi = 60 / 60.205999132796244;
    var Qi = {
            en: {
                days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                ordinals: Ze({n: "th", 1: "st", 2: "nd", 3: "rd", 21: "st", 22: "nd", 23: "rd", 31: "st"})
            },
            fr: {
                days: ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"],
                months: ["janvier", "f\xE9vrier", "mars", "avril", "mai", "juin", "juillet", "ao\xFBt", "septembre", "octobre", "novembre", "d\xE9cembre"],
                ordinals: Ze({n: "i\xE8me", 1: "er"})
            },
            de: {
                days: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"],
                months: ["Januar", "Februar", "M\xE4rz", "April", "Mai", "Juni", "Juli", "Oktober", "September", "Oktober", "November", "Dezember"],
                ordinals: Ze({n: "er"})
            },
            it: {
                days: ["domenica", "luned\xEC", "marted\xEC", "mercoled\xEC", "gioved\xEC", "venerd\xEC", "sabato"],
                months: ["gennaio", "febbraio", "marzo", "aprile", "maggio", "giugno", "luglio", "agosto", "settembre", "ottobre", "novembre", "dicembre"],
                ordinals: Ze({n: "o"})
            }
        },
        es = /^(-?\d{4})(?:-(0[1-9]|1[012])(?:-(0[1-9]|[12]\d|3[01])(?:T([01]\d|2[0-3])(?::([0-5]\d)(?::([0-5]\d)(?:.(\d+))?)?)?)?)?)?([+-]([01]\d|2[0-3]):?([0-5]\d)?|Z)?$/,
        ts = /^([+-])?(\d{2,})(?:-(\d{2,})(?:-(\d{2,}))?)?(?:([T-])|$)/, ns = x(_, {
            number: tt, string: et(es, function (e, t, n, a, o, r, i, s, l, d, c) {
                n = parseInt(n, 10) - 1;
                var p = new Date(s ? Date.UTC(t, n, a, o, r, i, s) : i ? Date.UTC(t, n, a, o, r, i) : r ? Date.UTC(t, n, a, o, r) : o ? Date.UTC(t, n, a, o) : a ? Date.UTC(t, n, a) : n ? Date.UTC(t, n) : Date.UTC(t));
                return l && ("00" !== d || "00" !== c && void 0 !== c) && nt(l[0], d, c, p), p
            }), object: function (e) {
                return Qe(e) ? e : void 0
            }, default: r
        }), as = x(_, {
            number: tt, string: et(es, function (e, t, n, a, o, r, i, s) {
                if (s) throw new Error("Time.parseDateLocal() will not parse a string with a time zone \"" + s + "\".");
                return t = parseInt(t, 10) - 1, i ? new Date(e, t, n, a, o, r, i) : r ? new Date(e, t, n, a, o, r) : o ? new Date(e, t, n, a, o) : a ? new Date(e, t, n, a) : n ? new Date(e, t, n) : t ? new Date(e, t) : new Date(e)
            }), object: function (e) {
                return e instanceof Date ? e : void 0
            }, default: r
        }), os = {
            YYYY: function (e) {
                return ("000" + e.getFullYear()).slice(-4)
            }, YY: function (e) {
                return ("0" + e.getFullYear() % 100).slice(-2)
            }, MM: function (e) {
                return ("0" + (e.getMonth() + 1)).slice(-2)
            }, MMM: function (e, t) {
                return this.MMMM(e, t).slice(0, 3)
            }, MMMM: function (e, t) {
                return Qi[t || Time.lang].months[e.getMonth()]
            }, D: function (e) {
                return "" + e.getDate()
            }, DD: function (e) {
                return ("0" + e.getDate()).slice(-2)
            }, ddd: function (e, t) {
                return this.dddd(e, t).slice(0, 3)
            }, dddd: function (e, t) {
                return Qi[t || Time.lang].days[e.getDay()]
            }, hh: function (e) {
                return ("0" + e.getHours()).slice(-2)
            }, mm: function (e) {
                return ("0" + e.getMinutes()).slice(-2)
            }, ss: function (e) {
                return ("0" + e.getSeconds()).slice(-2)
            }, sss: function (e) {
                return (e.getSeconds() + e.getMilliseconds() / 1e3 + "").replace(/^\d\.|^\d$/, function (e) {
                    return "0" + e
                })
            }, ms: function (e) {
                return "" + e.getMilliseconds()
            }, am: function (e) {
                return 12 > e.getHours() ? "am" : "pm"
            }, zz: function (e) {
                return (0 > e.getTimezoneOffset() ? "+" : "-") + ("0" + Xr(100 * ti(e.getTimezoneOffset()) / 60)).slice(-4)
            }, th: function (e, t) {
                return Qi[t || Time.lang].ordinals[e.getDate()]
            }, n: function (e) {
                return +e
            }, ZZ: function (e) {
                return 60 * -e.getTimezoneOffset()
            }
        }, rs = {
            YYYY: function (e) {
                return e.year
            }, YY: function (e) {
                return ("0" + e.year).slice(-2)
            }, MM: function (e) {
                return e.month
            }, MMM: function (e, t) {
                return this.MMMM(e, t).slice(0, 3)
            }, MMMM: function (e, t) {
                return Qi[t].months[e.month - 1]
            }, D: function (e) {
                return parseInt(e.day, 10) + ""
            }, DD: function (e) {
                return e.day
            }, ddd: function (e) {
                return e.weekday.slice(0, 3)
            }, dddd: function (e) {
                return e.weekday
            }, hh: function (e) {
                return e.hour
            }, mm: function (e) {
                return e.minute
            }, ss: function (e) {
                return e.second
            }
        }, ss = {
            "en-US": ["weekday", "month", "day", "year", "hour", "minute", "second"],
            default: ["weekday", "day", "month", "year", "hour", "minute", "second"]
        }, ls = {
            timeZone: "UTC",
            formatMatcher: "basic",
            hour12: !1,
            weekday: "long",
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
        }, ds = /([YZMDdhmswz]{2,4}|D|\+-)/g, cs = /\w{3,}|\d+/g, ps = /^"(-?\d{4,}-\d\d-\d\d)/,
        us = {mon: 1, tue: 2, wed: 3, thu: 4, fri: 5, sat: 6, sun: 0}, ms = [6, 0, 1, 2, 3, 4, 5];
    const hs = A(function (e, t) {
        return ut(e, ns(t))
    }), fs = A(ht), gs = A(function (e, t) {
        return bt(e, ns(t))
    }), bs = A(function (e, t, n, a) {
        return "ISO" === e ? lt(ns(a)) : "local" === t ? st(e, n, a) : it(e, t, n, ns(a))
    });
    var ys = /^([+-])?(\d{2,}):([0-5]\d)(?::((?:[0-5]\d|60)(?:.\d+)?))?$/,
        vs = /^([+-])?(\d{2,}):(\d{2,})(?::(\d{2,}(?:.\d+)?))?$/, xs = x(_, {
            number: f, string: et(ys, _t), default: function (e) {
                throw new Error("parseTime() does not accept objects of type " + typeof e)
            }
        }), ks = x(_, {
            number: f, string: et(vs, _t), default: function (e) {
                throw new Error("parseTime() does not accept objects of type " + typeof e)
            }
        }), Ts = o({
            week: function (e) {
                return e - He(604800, e)
            }, day: function (e) {
                return e - He(86400, e)
            }, hour: function (e) {
                return e - He(3600, e)
            }, minute: function (e) {
                return e - He(60, e)
            }, second: function (e) {
                return e - He(1, e)
            }
        }), Es = {
            "+-": function (e) {
                return 0 > e ? "-" : ""
            }, www: function (e) {
                e = 0 > e ? -e : e;
                var t = ni(wt(e));
                return Ct(t) + t
            }, dd: function (e) {
                e = 0 > e ? -e : e;
                var t = ni(Et(e));
                return Ct(t) + t
            }, hhh: function (e) {
                e = 0 > e ? -e : e;
                var t = ni(Tt(e));
                return Ct(t) + t
            }, hh: function (e) {
                e = 0 > e ? -e : e;
                var t = ni(Tt(e % 86400));
                return Ct(t) + t
            }, mm: function (e) {
                e = 0 > e ? -e : e;
                var t = ni(kt(e % 3600));
                return Ct(t) + t
            }, ss: function (e) {
                e = 0 > e ? -e : e;
                var t = ni(e % 60);
                return Ct(t) + t
            }, sss: function (e) {
                e = 0 > e ? -e : e;
                var t = e % 60;
                return Ct(t) + jt(9, t)
            }, ms: function e(t) {
                t = 0 > t ? -t : t;
                var e = ni(xt(t % 1));
                return 100 <= e ? e : 10 <= e ? "0" + e : "00" + e
            }
        };
    const ws = A(function (e, t) {
        return "ISO" === e ? St(xs(t)) : Nt(e, xs(t))
    }), Cs = A(function (e, t) {
        return xs(t) + ks(e)
    }), _s = A(function (e, t) {
        return xs(t) - ks(e)
    }), Ns = A(function (e, t) {
        return xs(e) - xs(t)
    }), Ss = A(function (e, t) {
        return Ts(e, xs(t))
    });
    var js = /\s*\/\*([\s\S]*)\*\/\s*/, As = x(function (e) {
        return typeof e
    }, {
        string: At, function: function (e, t, n) {
            return At(qt(e), t, n)
        }, default: function () {
        }
    }), qs = /firefox/i.test(navigator.userAgent) ? "FF" : document.documentMode ? "IE" : "standard";
    const Ls = e(function () {
        const e = document.createElement("section");
        return e.setAttribute("class", "test-section"), document.body.appendChild(e), e
    });
    window.console && window.console.log && window.console.log("%cFn%c          - https://github.com/stephband/fn", "color: #de3b16; font-weight: 600;", "color: inherit; font-weight: 400;");
    const Ms = A(function (e, t) {
            return setTimeout(t, 1e3 * e)
        }, !0, 2), Ds = parseFloat, Ps = A(function (e, t) {
            return !!(e && t)
        }), Us = A(function (e, t) {
            return e || t
        }), or = A(function (e, t) {
            return (e || t) && !!e != !!t
        }), Is = A(Object.assign, !0, 2), Os = A(Ne), Fs = A(Object.defineProperties, !0, 2), $s = A(Ee, !0), Rs = A(we),
        Vs = A(function (e, t) {
            return t[e]
        }, !0), Bs = A(function (e, t, n) {
            return n[e] === t
        }, !0), Hs = A(ji, !0), is = A(function (e, t, n) {
            return n[e].apply(n, t)
        }, !0), zs = A(function (e, t) {
            for (var n in e) if (e[n] !== t[n]) return !1;
            return !0
        }, !0), Ys = A(Ne), Ws = A(Se, !0), Gs = A(function (e, t) {
            return ai(t) ? "" : Wr.toFixed.call(t, e)
        }), Xs = A(Le, !0), Js = A(function (e, t, n) {
            return Ai.lastIndex = 0, Me(Ai, e, t, n)
        }, !0), Ks = A(function (e, t, n) {
            const a = e(t), o = e(n);
            return o === a ? 0 : a > o ? 1 : -1
        }, !0), Zs = A(function (e, t) {
            return Gr.localeCompare.call(e, t)
        }), Qs = A(function (e, t) {
            let a = -1, o;
            for (; o = t[++a];) o(e)
        }, !0), el = A(function (e, t) {
            return Array.isArray(t) ? t.concat(Array.isArray(e) ? e : l(e)) : t.concat ? t.concat(e) : l(t).concat(Array.isArray(e) ? e : l(e))
        }, !0), tl = A(function (e, t) {
            return t.includes ? t.includes(e) : t.contains ? t.contains(e) : ii.includes ? ii.includes.call(t, e) : -1 !== ii.indexOf.call(t, e)
        }, !0), nl = A(d, !0), al = A(p, !0), ol = A(function (e, t) {
            return ii.find.call(t, e)
        }, !0), rl = A(c, !0), il = A(function (e, t, n) {
            return n.reduce ? n.reduce(e, t) : ii.reduce.call(n, e, t)
        }, !0), sl = A(U, !0), ll = A(a, !0), dl = A(function (e, t, n) {
            return n.slice ? n.slice(e, t) : ii.slice.call(n, e, t)
        }, !0, 3), cl = A(function (e, t) {
            return t.sort ? t.sort(e) : ii.sort.call(t, e)
        }, !0), pl = A(De, !0), ul = A(Pe, !0), ml = A(function (e, t, n) {
            const a = e(n), o = t.find(t => e(t) === a);
            return o ? Li(o, n) : De(e, t, n)
        }, !0), hl = A(function (e, t) {
            var n = l(e);
            return p(function (e) {
                var t = n.indexOf(e);
                return -1 === t || (n.splice(t, 1), !1)
            }, t).concat(n)
        }, !0), fl = A(function (e, t) {
            var n = l(e);
            return p(function (e) {
                var t = n.indexOf(e);
                return -1 !== t && (n.splice(t, 1), !0)
            }, t)
        }, !0), gl = A(function (e, t) {
            var n = toArray(e);
            return c(function (e) {
                var t = n.indexOf(e);
                return -1 < t && n.splice(t, 1), e
            }, t).concat(n)
        }, !0), bl = A(function (e, t) {
            return "" + t + e
        }), yl = A(N), vl = A(Ie), xl = A(function (e, t, n) {
            for (var a = n + ""; a.length < t;) a += e;
            return a.slice(0, t)
        }), kl = A(function (e, t) {
            return t + e
        }), Tl = A(function (e, t) {
            return t * e
        }), El = A(function (e, t) {
            return e > t ? t : e
        }), wl = A(function (e, t) {
            return e < t ? t : e
        }), Cl = A(He), _l = A(function (e, t) {
            return ei(t, e)
        }), Nl = A(function (e, t) {
            return ei(e, t)
        }), Sl = A(function (e, t) {
            return Qr(t) / Qr(e)
        }), jl = A(ze), Al = A(function (e, t) {
            return e * t / ze(e, t)
        }), ql = A(function (e, t) {
            return ei(t, 1 / e)
        }), Ll = A(function (e, t, a) {
            return a > t ? t : a < e ? e : a
        }), Ml = A(function (e, t, a) {
            return (a < e ? t : e) + (a - e) % (t - e)
        }), Dl = A(function (e, t) {
            var n = ze(e, t);
            return [e / n, t / n]
        }), Pl = A(Be), Ul = A(o(Bi), !1, 4), Il = A(o(Ji), !1, 4), Ol = A(function (t, e) {
            return 1 - ei(1 - e, t)
        }), Fl = new Promise(function (t) {
            function n(a) {
                document.removeEventListener("DOMContentLoaded", n), window.removeEventListener("load", n), t(a)
            }

            document.addEventListener("DOMContentLoaded", n), window.addEventListener("load", n)
        });
    var $l = Fl.then.bind(Fl);
    const Rl = [], Vl = /(\d*\.?\d+)r?em/, Bl = /(\d*\.?\d+)%/, Hl = {
        number: function (e) {
            return e
        }, function: function (e) {
            return e()
        }, string: function (e) {
            var t, a;
            if (t = Vl.exec(e), t) return a = parseFloat(t[1]), Dt() * a;
            if (t = Bl.exec(e), t) return a = parseFloat(t[1]) / 100, Yl * a;
            throw new Error("[window.breakpoint] '" + e + "' cannot be parsed as rem, em or %.")
        }
    }, zl = {
        minWidth: function (e) {
            return Yl >= Hl[typeof e](e)
        }, maxWidth: function (e) {
            return Yl < Hl[typeof e](e)
        }, minHeight: function (e) {
            return Wl >= Hl[typeof e](e)
        }, maxHeight: function (e) {
            return Wl < Hl[typeof e](e)
        }, minScrollTop: function (e) {
            return Gl >= Hl[typeof e](e)
        }, maxScrollTop: function (e) {
            return Gl < Hl[typeof e](e)
        }, minScrollBottom: function (e) {
            return Xl - Wl - Gl >= Hl[typeof e](e)
        }, maxScrollBottom: function (e) {
            return Xl - Wl - Gl < Hl[typeof e](e)
        }
    };
    let Yl, Wl, Gl, Xl, Jl;
    window.addEventListener("scroll", function () {
        Gl = document.documentElement.scrollTop || document.body.scrollTop, Ut()
    }), window.addEventListener("resize", function () {
        Yl = window.innerWidth, Wl = window.innerHeight, Xl = document.documentElement.scrollHeight || document.body.scrollHeight, Ut()
    }), $l(Ut), document.addEventListener("DOMContentLoaded", Ut), Yl = window.innerWidth, Wl = window.innerHeight, Gl = document.documentElement.scrollTop || document.body.scrollTop, Xl = document.documentElement.scrollHeight || document.body.scrollHeight;
    const Kl = ["Khtml", "O", "Moz", "Webkit", "ms"];
    var Zl = document.createElement("div"), Ql = {};
    const ed = Object.defineProperties;
    var td = ed({
        events: ed({}, {
            fullscreenchange: {
                get: e(function () {
                    return "fullscreenElement" in document ? "fullscreenchange" : "webkitFullscreenElement" in document ? "webkitfullscreenchange" : "mozFullScreenElement" in document ? "mozfullscreenchange" : "msFullscreenElement" in document ? "MSFullscreenChange" : "fullscreenchange"
                }), enumerable: !0
            }, transitionend: {
                get: e(function () {
                    var e = Ft("transition");
                    return e && {
                        KhtmlTransition: !1,
                        OTransition: "oTransitionEnd",
                        MozTransition: "transitionend",
                        WebkitTransition: "webkitTransitionEnd",
                        msTransition: "MSTransitionEnd",
                        transition: "transitionend"
                    }[e]
                }), enumerable: !0
            }
        })
    }, {
        inputEventsWhileDisabled: {
            get: e(function () {
                var e = document.createElement("input"), t = Event("featuretest"), n = !1;
                return document.body.appendChild(e), e.disabled = !0, e.addEventListener("featuretest", function () {
                    n = !0
                }), e.dispatchEvent(t), e.remove(), n
            }), enumerable: !0
        }, template: {
            get: e(function () {
                return "content" in document.createElement("template")
            }), enumerable: !0
        }, textareaPlaceholderSet: {
            get: e(function () {
                var e = document.createElement("textarea");
                return e.setAttribute("placeholder", "---"), "" === e.innerHTML
            }), enumerable: !0
        }, transition: {
            get: e(function () {
                var e = Ft("transition");
                return e || !1
            }), enumerable: !0
        }, fullscreen: {
            get: e(function () {
                var e = document.createElement("div");
                return !!(e.requestFullscreen || e.webkitRequestFullscreen || e.mozRequestFullScreen || e.msRequestFullscreen)
            }), enumerable: !0
        }, scrollBehavior: {
            get: e(function () {
                return "scrollBehavior" in document.documentElement.style
            })
        }
    }), nd = document.createElement("pre"), ad = document.createTextNode("");
    nd.appendChild(ad);
    var od = {xml: "application/xml", html: "text/html", svg: "image/svg+xml"};
    Element.prototype.append || console.warn("A polyfill for Element.append() is needed (https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/append)");
    const rd = x(f, {
        html: function (e, t, n) {
            t.innerHTML = n
        }, children: function (e, t, n) {
            n.forEach(e => {
                t.appendChild(e)
            })
        }, default: function (e, t, n) {
            e in t ? t[e] = n : t.setAttribute(e, n)
        }
    });
    Element.prototype.prepend || console.warn("A polyfill for Element.prepend() is needed (https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/prepend)");
    var id = td.textareaPlaceholderSet ? function (e) {
        return e.cloneNode(!0)
    } : function (e) {
        var t = e.cloneNode(!0), a = Kt("textarea", e), o = a.length, r;
        if (o) for (r = Kt("textarea", t); o--;) r[o].value = a[o].value;
        return t
    };
    const sd = document.createElement("div"), ld = {
        text: function (e) {
            return document.createTextNode(e || "")
        }, comment: function (e) {
            return document.createComment(e || "")
        }, fragment: function (e) {
            var t = document.createDocumentFragment();
            return e && (sd.innerHTML = e, append(t, sd.childNodes), sd.innerHTML = ""), t
        }
    };
    ["circle", "ellipse", "g", "line", "rect", "use", "path", "polygon", "polyline", "svg"].forEach(function (e) {
        ld[e] = function (t) {
            var n = document.createElementNS("http://www.w3.org/2000/svg", e);
            return t && en(n, t), n
        }
    });
    const dd = Vs("classList");
    var cd = /px$/, pd = {
        "transform:translateX": function (e) {
            var t = un("transform", e);
            if (!t || "none" === t) return 0;
            var n = pn(t);
            return parseFloat(n[4])
        }, "transform:translateY": function (e) {
            var t = un("transform", e);
            if (!t || "none" === t) return 0;
            var n = pn(t);
            return parseFloat(n[5])
        }, "transform:scale": function (e) {
            var t = un("transform", e);
            if (!t || "none" === t) return 0;
            var n = pn(t), o = parseFloat(n[0]), a = parseFloat(n[1]);
            return Zr(o * o + a * a)
        }, "transform:rotate": function (e) {
            var t = un("transform", e);
            if (!t || "none" === t) return 0;
            var n = pn(t), o = parseFloat(n[0]), a = parseFloat(n[1]);
            return Kr(a, o)
        }
    };
    const ud = /(\d*\.?\d+)(r?em|vw|vh)/, md = {
        em: function (e) {
            return hn() * e
        }, rem: function (e) {
            return hn() * e
        }, vw: function (e) {
            return window.innerWidth * e / 100
        }, vh: function (e) {
            return window.innerHeight * e / 100
        }
    };
    let hd;
    const fd = x(_, {
        number: f, string: function (e) {
            var t = ud.exec(e);
            if (t) return md[t[2]](parseFloat(t[1]));
            throw new Error("dom: \"" + e + "\" cannot be parsed as rem, em, vw or vh units.")
        }
    });
    NodeList.prototype.forEach || console.warn("A polyfill for NodeList.forEach() is needed (https://developer.mozilla.org/en-US/docs/Web/API/NodeList/forEach)");
    const gd = Object.assign, bd = window.CustomEvent, yd = {bubbles: !0, cancelable: !0}, vd = Object.assign,
        xd = /\s+/;
    vd(xn.prototype, {
        shift: function () {
            const e = this.buffer;
            return e.shift()
        }, stop: function () {
            const e = this.stop, t = this.types, n = this.node, a = this.buffer, o = this.update;
            t.forEach(function (e) {
                n.removeEventListener(e, o)
            }), e(a.length)
        }
    });
    const kd = Array.prototype, Td = Symbol("events");
    let Ed = r;
    const wd = Object.entries({
            8: "backspace",
            9: "tab",
            13: "enter",
            16: "shift",
            17: "ctrl",
            18: "alt",
            27: "escape",
            32: "space",
            33: "pageup",
            34: "pagedown",
            35: "pageright",
            36: "pageleft",
            37: "left",
            38: "up",
            39: "right",
            40: "down",
            46: "delete",
            48: "0",
            49: "1",
            50: "2",
            51: "3",
            52: "4",
            53: "5",
            54: "6",
            55: "7",
            56: "8",
            57: "9",
            65: "a",
            66: "b",
            67: "c",
            68: "d",
            69: "e",
            70: "f",
            71: "g",
            72: "h",
            73: "i",
            74: "j",
            75: "k",
            76: "l",
            77: "m",
            78: "n",
            79: "o",
            80: "p",
            81: "q",
            82: "r",
            83: "s",
            84: "t",
            85: "u",
            86: "v",
            87: "w",
            88: "x",
            89: "y",
            90: "z",
            91: "cmd",
            93: "cmd",
            186: ";",
            187: "=",
            188: ",",
            189: "-",
            190: ".",
            191: "/",
            219: "[",
            220: "\\",
            221: "]",
            222: "'",
            224: "cmd"
        }).reduce(function (e, t) {
            return e[t[1]] = parseInt(t[0], 10), e
        }, {}), Cd = window.performance, _d = window.requestAnimationFrame, Nd = window.cancelAnimationFrame,
        Sd = Object.defineProperties;
    Sd({left: 0}, {
        right: {
            get: function () {
                return window.innerWidth
            }, enumerable: !0, configurable: !0
        }, top: {
            get: function () {
                return mn("padding-top", document.body)
            }, enumerable: !0, configurable: !0
        }, bottom: {
            get: function () {
                return window.innerHeight
            }, enumerable: !0, configurable: !0
        }
    });
    document.scrollingElement;
    window.console && window.console.log && window.console.log("%cdom%c         \u2013 https://github.com/stephband/dom", "color: #3a8ab0; font-weight: 600;", "color: inherit; font-weight: 400;");
    const jd = A(function (e, t) {
        if (t) {
            var n = od[e], a;
            try {
                a = new window.DOMParser().parseFromString(t, n)
            } catch (t) {
                a = void 0
            }
            if (!a || a.getElementsByTagName("parsererror").length) throw new Error("dom: Invalid XML: " + t);
            return a
        }
    }, !0), Ad = A(Ht, !0), qd = A(function (e, t) {
        return t.getAttribute && t.getAttribute(e) || void 0
    }, !0), Ld = A(function (e, t) {
        return t.querySelector(e)
    }, !0), Md = A(Xt, !0), Dd = A(Gt, !0), Pd = A(Kt, !0), Ud = A(Qt, !0), Id = A(Zt, !0), Od = A(function (e, t) {
        return e.prepend(t), t
    }, !0), Fd = A(sn, !0), $d = A(function (e, t) {
        return e.parentNode && e.parentNode.insertBefore(t, e.nextSibling), t
    }, !0), Rd = A(function (e, t) {
        return sn(e, t), rn(e), t
    }, !0), Vd = A(function (e, t) {
        dd(t).add(e)
    }, !0), Bd = A(function (e, t) {
        dd(t).remove(e)
    }, !0), Hd = A(function (e, t) {
        var n = dd(t);
        n.add(e), ln(2, () => n.remove(e))
    }, !0), zd = A(function (e, t) {
        var n = cn(e), a = cn(t);
        return [a.left - n.left, a.top - n.top]
    }, !0), Yd = A(mn, !0), Wd = A(function (e, t) {
        let n;
        return "object" == typeof e && (n = e, e = n.type), new z(function (a, o) {
            return new xn(a, o, e, n, t)
        })
    }, !0);
    Object.assign(Wd, {
        on: Cn, once: function (e, t, n, a) {
            Cn(e, t, function a() {
                on(e, t, a), n.apply(null, arguments)
            }, a)
        }, off: on, trigger: function (e, t, n) {
            var a = yn(t, n);
            e.dispatchEvent(a)
        }
    });
    const Gd = A(function (e, t, n) {
            return Cn(n, e, t), n
        }, !0), Xd = A(function (e, t, n) {
            return on(n, e, t), n
        }, !0), Jd = A(function (e, t) {
            let n;
            "object" == typeof e && (n = e, e = n.type);
            var a = yn(e, n);
            return t.dispatchEvent(a), t
        }, !0), Kd = A(function (t, n) {
            return function (a) {
                var e = Xt(t, a.target, a.currentTarget);
                e && (a.delegateTarget = e, n(a, e), a.delegateTarget = void 0)
            }
        }, !0), Zd = A(function (e, t, n, a, o) {
            return Nn(e, T(t, e => Hi(a[n], o, e), Ws(n, a)))
        }, !0), Qd = A(Nn, !0),
        ec = {simulatedEventDelay: .08, keyClass: "key-device", mouseClass: "mouse-device", touchClass: "touch-device"};
    var tc = Wd.on, nc = dd(document.documentElement), ac, oc;
    tc(document, "mousedown", qn), tc(document, "keydown", function (t) {
        -1 === [9, 13, 27].indexOf(t.keyCode) || An(ec.keyClass)
    }), tc(document, "touchend", function (t) {
        oc = t.timeStamp, An(ec.touchClass)
    });
    var rc = Wd.on, ic = Wd.off, sc = window.location, lc = sc.hash, dc = new WeakMap, cc = A(function (e, t) {
        return t(e)
    });
    const pc = {activeClass: "active", onClass: "on", cache: !0}, uc = [];
    rc(document, "dom-activate", function (t) {
        if (!t.defaultPrevented) {
            var e = Dn(t.target);
            return e.active ? void t.preventDefault() : void (t.data = e, t.default = Un)
        }
    }), rc(document, "dom-deactivate", function (t) {
        if (!t.defaultPrevented) {
            var e = Dn(t.target);
            return e.active ? void (t.data = e, t.default = In) : void t.preventDefault()
        }
    });
    var mc = Jd("dom-activate"), hc = {}, fc = {}, gc = {
        dialog: function (t) {
            var e = t.delegateTarget.getAttribute("data-href") || t.delegateTarget.hash || t.delegateTarget.href,
                n = e.substring(1), a = hc[n] || (hc[n] = document.getElementById(n)), o;
            t.preventDefault(), a.getAttribute && "text/html" === a.getAttribute("type") && (o = tn("fragment", a.innerHTML)), a.tagName && "template" === a.tagName.toLowerCase() && (!a.content && rn(a), o = fragmentFromContent(a));
            var r = fc[n] || (fc[n] = On(o));
            Wd.trigger(r, "dom-activate")
        }
    };
    rc(document, "click", Kd("a[href]", function (t) {
        if (!$n(t) && (!t.delegateTarget.hostname || Vt(t.delegateTarget))) {
            var e = Vn(t.delegateTarget);
            e && Bn(t, e)
        }
    })), rc(document, "click", Kd("a[target]", function (t) {
        var e = t.delegateTarget.target;
        return $n(t) ? void 0 : gc[e] ? gc[e](t) : void 0
    })), $l(function () {
        Pd("." + pc.activeClass, document).forEach(mc)
    }), rc(window, "load", function () {
        if (lc && /^#\S+$/.test(lc)) try {
            Pd(lc, document).forEach(mc)
        } catch (t) {
            console.warn("dom: Cannot activate " + lc, t.message)
        }
    });
    var bc = Wd.trigger, yc = Dd(".popable, [popable]"), vc = 0;
    document.addEventListener("dom-activate", function (t) {
        if (!t.default) return;
        const n = t.target;
        yc(n) && (requestAnimationFrame(function () {
            function t(t) {
                t.timeStamp !== vc && (vc = t.timeStamp, n.contains(t.target) || n === t.target || bc(n, "dom-deactivate"))
            }

            function a(o) {
                n !== o.target || o.defaultPrevented || (document.removeEventListener("click", t), document.documentElement.removeEventListener("dom-deactivate", a))
            }

            document.addEventListener("click", t), document.documentElement.addEventListener("dom-deactivate", a)
        }), t.default())
    }), document.addEventListener("dom-deactivate", function (t) {
        if (t.default) {
            var e = t.target;
            yc(e) && t.default()
        }
    }), uc.push(yc);
    var xc = Dd(".toggleable, [toggleable]"), kc = Wd.on, Tc = Wd.off, Ec = Wd.trigger, wc = [];
    kc(document.documentElement, "click", function (t) {
        if (!t.defaultPrevented && kn(t)) {
            var e = Md("a[href]", t.target);
            if (e && (!e.hostname || Vt(e))) {
                var n = Hn(e);
                n && -1 !== wc.indexOf(n) && (Ec(zt(n), "dom-deactivate", {relatedTarget: e}), t.preventDefault())
            }
        }
    }), kc(document, "dom-activate", function (t) {
        if (t.default) {
            var e = t.target;
            xc(e) && (wc.push(nn(e)), t.default())
        }
    }), kc(document, "dom-deactivate", function (t) {
        if (t.default) {
            var e = t.target;
            xc(e) && (sl(wc, e.id), t.default())
        }
    }), uc.push(xc);
    var Cc = Dd(".switchable, [switchable]"), _c = Wd.on, Nc = Jd("dom-deactivate");
    _c(document, "dom-activate", zn), _c(document, "dom-deactivate", function (t) {
        if (t.default) {
            var e = t.target;
            Cc(e) && t.default()
        }
    }), uc.push(Cc);
    var Sc = Wd.on, jc = Wd.off, Ac = Wd.trigger, qc = r, Lc = Dd(".focusable, [focusable]"), Mc = 600;
    Sc(document, "dom-activate", function (t) {
        if (!t.defaultPrevented && Lc(t.target)) {
            var n = t.target, a = function t(n) {
                clearTimeout(o), jc(n.target, "transitionend", t), qc = _n(n.target)
            }, o = setTimeout(a, Mc, t);
            Sc(t.target, "transitionend", a), Sn(document.scrollingElement), requestAnimationFrame(function () {
                function t(t) {
                    27 !== t.keyCode || (Ac(n, "dom-deactivate"), t.preventDefault())
                }

                function a(o) {
                    n !== o.target || o.defaultPrevented || (document.removeEventListener("keydown", t), document.removeEventListener("dom-deactivate", a))
                }

                document.addEventListener("keydown", t), document.addEventListener("dom-deactivate", a)
            })
        }
    }), Sc(document, "dom-deactivate", function (t) {
        if (!t.defaultPrevented && Lc(t.target)) {
            var e = function t(a) {
                clearTimeout(n), jc(a.target, "transitionend", t), qc(), qc = r
            }, n = setTimeout(e, Mc, t);
            Sc(t.target, "transitionend", e), jn(document.scrollingElement)
        }
    }), uc.push(Lc);
    const Dc = {scrollDuration: 1.2, scrollTransform: Ol(4)};
    let Pc = r;
    if (!td.scrollBehavior) {
        const e = "scrollIntoView" in Element.prototype ? Element : HTMLElement, t = e.scrollIntoView;
        e.prototype.scrollIntoView = function (e) {
            "object" == typeof e ? (e.block && "start" !== e.block && console.warn("Element.scrollIntoView polyfill only supports options.block value \"start\""), e.inline && console.warn("Element.scrollIntoView polyfill does not support options.inline... add support!"), Yn(this, e.behavior)) : t.apply(this, arguments)
        }
    }
    const Uc = ".locateable, [locateable]", Ic = Dd(".locateable, [locateable]"), Oc = Wd.on,
        Fc = {scrollIdleDuration: .1}, $c = {behavior: "auto", block: "start"};
    let Rc = -Infinity, Vc = -Infinity, Bc = !td.scrollBehavior, Hc;
    Oc(document, "dom-activate", Wn), Oc(document, "dom-deactivate", Gn), Oc(window, "load", function (t) {
        Xn(t), Oc(window, "scroll", Xn), Bc = !0, $c.behavior = "smooth"
    }), uc.push(Ic);
    var zc = Dd(".validateable, .validateable input, .validateable textarea, .validateable select, [validateable], [validateable] input, [validateable] textarea, [validateable] select"),
        Yc = {
            patternMismatch: "pattern",
            rangeOverflow: "max",
            rangeUnderflow: "min",
            stepMismatch: "step",
            tooLong: "maxlength",
            typeMismatch: "type",
            valueMissing: "required"
        };
    const Wc = {
        errorLabelClass: "error-label",
        validatedInputClass: "validated",
        messageAttributePrefix: "data-validation-",
        messages: {},
        selectNode: f
    };
    Wd("input dom-update", document).map(Vs("target")).filter(zc).tap(is("setCustomValidity", [""])).filter(function (e) {
        return !e.validity || e.validity.valid
    }).each(function (e) {
        for (var t = Wc.selectNode(e); (t = Yt(t)) && Dd("." + Wc.errorLabelClass.trim().split(/\s+/).join("."), t);) rn(t)
    }), Wd("focusout", document).map(Vs("target")).filter(zc).each(function (e) {
        return !e.checkValidity || e.checkValidity()
    }), Wd("submit", document).map(Vs("target")).filter(zc).each(Jn), document.addEventListener("invalid", z.of().map(Vs("target")).filter(zc).tap(Jn).filter(function (e) {
        return function () {
            return !e.apply(this, arguments)
        }
    }(function (e) {
        var t = Wc.selectNode(e);
        return t.nextElementSibling && Dd("." + Wc.errorLabelClass.trim().split(/\s+/).join("."), t.nextElementSibling)
    })).map(function (e) {
        var t = e.validity, n = Wc.messageAttributePrefix, a = Wc.messages, o;
        for (o in t) if ("valid" !== o && t[o]) return {
            type: o,
            attr: Yc[o],
            name: e.name,
            text: e.getAttribute(n + Yc[o]) || a && a[Yc[o]] || e.validationMessage,
            node: e
        }
    }).each(function (e) {
        for (var t = e.node, n = Wc.selectNode(t); n.nextElementSibling && Dd("." + Wc.errorLabelClass.trim().split(/\s+/).join("."), n.nextElementSibling);) n = n.nextElementSibling;
        var a = tn("label", {textContent: e.text, for: t.id, class: Wc.errorLabelClass});
        $d(n, a), "customError" === e.type && (t.setCustomValidity(e.text), Wd("input", t).take(1).each(function (t) {
            t.target.setCustomValidity("")
        }))
    }).push, !0), Wd("dom-submit-error", document).each(function (t) {
        var e = t.target, n = t.detail;
        n && "object" == typeof n ? (Zn(n, e).forEach(Qn), e.checkValidity(), t.preventDefault()) : console.warn("\"dom-submit-error\" received but no errors attached", e)
    }), window.cookies = {
        get: function (e) {
            return e ? decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(e).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null : null
        }, set: function (e, t, n, a, o, r) {
            if (!e || /^(?:expires|max\-age|path|domain|secure)$/i.test(e)) return !1;
            var i = "";
            if (n) switch (n.constructor) {
                case Number:
                    i = n === 1 / 0 ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT" : "; max-age=" + n;
                    break;
                case String:
                    i = "; expires=" + n;
                    break;
                case Date:
                    i = "; expires=" + n.toUTCString();
            }
            return document.cookie = encodeURIComponent(e) + "=" + encodeURIComponent(t) + i + (o ? "; domain=" + o : "") + (a ? "; path=" + a : "") + (r ? "; secure" : ""), !0
        }, remove: function (e, t, n) {
            return !!this.hasItem(e) && (document.cookie = encodeURIComponent(e) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + (n ? "; domain=" + n : "") + (t ? "; path=" + t : ""), !0)
        }, has: function (e) {
            return e && !/^(?:expires|max\-age|path|domain|secure)$/i.test(e) && new RegExp("(?:^|;\\s*)" + encodeURIComponent(e).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=").test(document.cookie)
        }, keys: function () {
            for (var e = document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, "").split(/\s*(?:\=[^;]*)?;\s*/), t = e.length, n = 0; n < t; n++) e[n] = decodeURIComponent(e[n]);
            return e
        }
    };
    const Gc = window.axios, Xc = window.cookies;
    window.axios = Gc.create({headers: {"X-CSRFToken": Xc.get("csrftoken")}});
    const Jc = void 0 === window.DEBUG || window.DEBUG, Kc = .015, Zc = new Set, Qc = [];
    var ep = 0, tp;
    const np = e(function (e) {
        return fetch(e).then(e => e.text()).then(jd("html"))
    });
    let ap = 0;
    const op = /function(?:\s+\w+)?\s*(\([\w,\s]*\))/;
    var rp = x(_, {
        boolean: function (e) {
            return e + ""
        }, function: function (e) {
            return (e.name || "function") + (op.exec(e.toString()) || [])[1]
        }, number: function (e) {
            return ai(e) ? "" : Br(e) ? e + "" : 0 > e ? "-\u221E" : "\u221E"
        }, string: f, symbol: function (e) {
            return e.toString()
        }, undefined: function () {
            return ""
        }, object: function (e) {
            return e ? JSON.stringify(e) : ""
        }, default: JSON.stringify
    });
    const ip = Object.assign, sp = Os(/^\]\s*/, di),
        lp = Os(/^\s*(?:(-?(?:\d*\.?\d+)(?:[eE][-+]?\d+)?)|"([^"\\]*(?:\\.[^"\\]*)*)"|'([^'\\]*(?:\\.[^'\\]*)*)'|(null)|(true)|(false)|(\[)|(\w+)\(([^)]+)\)|([\w.\-#/?:\\]+))\s*(,)?\s*/, {
            1: function (e, t) {
                return e.push(parseFloat(t[1])), e
            }, 2: function (e, t) {
                return e.push(t[2]), e
            }, 3: function (e, t) {
                return e.push(t[3]), e
            }, 4: function (e) {
                return e.push(null), e
            }, 5: function (e) {
                return e.push(!0), e
            }, 6: function (e) {
                return e.push(!1), e
            }, 7: function (e, t) {
                return "]" === t.input[1] ? e.push([]) : e.push(lp([], t)), sp(null, t), e
            }, 10: function (e, t) {
                return e.push(t[10]), e
            }, 11: function (e, t) {
                return lp(e, t)
            }, catch: function (e, t) {
                throw new SyntaxError("Invalid parameter \"" + (t.input || t) + "\"")
            }
        }), dp = Os(/^\s*([\w-]+)\s*(:)?\s*/, {
            1: function (e, t) {
                return e.push({name: t[1], args: di}), e
            }, 2: function (e, t) {
                return e[e.length - 1].args = lp([], t), e
            }, close: Os(/^\s*(\|)?\s*/, {
                1: function (e, t) {
                    return dp(e, t)
                }
            }), catch: function (e, t) {
                throw console.log(t.input, t), new SyntaxError("Invalid pipe \"" + (t.input || t) + "\"")
            }
        });
    ip(pa.prototype, {
        transform: f, toString: function () {
            return rp(this.valueOf())
        }, valueOf: function () {
            return void 0 === this.value ? void 0 : this.transform(this.value)
        }
    });
    const cp = Os(/^\s*([\w.-]*)\s*(\|)?\s*/, {
        1: (e, t) => {
            const n = new pa;
            return n.path = t[1], n
        }, 2: function (e, t) {
            return e.pipe = dp([], t), e.pipe ? e : e
        }, close: function (e, t) {
            if (!Rs(/^\s*\]\}/, f, t)) throw new SyntaxError("Unclosed tag in \"" + t.input + "\"");
            return e
        }, catch: f
    }), pp = Os(/^\s*(\{\[)/, {
        1: function (e, t) {
            const n = cp(null, t);
            return n.label = t.input.slice(t.index, t.index + t[0].length + t.consumed), n
        }, close: function (e, t) {
            if (!Rs(/^\s*$/, f, t)) throw new SyntaxError("Invalid characters after token (only spaces valid) \"" + t.input + "\"");
            return e
        }, catch: f
    }), up = Os(/^\s*(?:(\{\[)|$)/, {
        1: function (e, t) {
            const n = cp(null, t);
            return n.label = t.input.slice(t.index, t.index + t[0].length + t.consumed), e.push(n), up(e, t)
        }, catch: f
    }), mp = Os(/^([\S\s]*?)(?:(\{\[)|$)/, {
        1: (e, t) => {
            if (e.length || t[2]) return t[1] && e.push(t[1]), e
        }, 2: (e, t) => {
            const n = cp(null, t);
            return n.label = t.input.slice(t.index + t[1].length, t.index + t[0].length + t.consumed), e.push(n), mp(e, t)
        }, catch: r
    });
    var hp = {attributeFn: "fn", attributeInclude: "include", attributePrefix: ":"};
    const fp = window.DEBUG, gp = Array.prototype, bp = Array.isArray, yp = Object.assign, vp = Symbol("scope");
    yp(ma.prototype, {
        fire: function () {
            this.render(this.scope), this.value = this.scope
        }, render: function (e) {
            const t = this.node, n = this.marker, a = this.sparkies, o = this.options;
            bp(e) || (e = Object.entries(e).map(ya)), this.renderCount += ga(t, e, a, o), this.renderCount += ba(n, e, a)
        }, renderCount: 0
    }), yp(ha.prototype, {
        fire: function () {
            var e = this.input.shift();
            if (!e) return;
            const t = new ma(e, this.args);
            this.stop(), this.stop = xe(".", () => ia(t), e)
        }, stop: r, renderCount: 0
    });
    const xp = window.DEBUG, kp = window.DEBUG, Tp = window.fetch, Ep = {method: "GET"}, wp = {}, Cp = new WeakMap;
    var _p = {
        debug: function (e, t) {
            debugger;
            return t.tap(t => {
                console.group("Sparky fn=\"debug\""), console.log("node ", e), console.log("scope", t);
                debugger;
                console.groupEnd()
            })
        }, each: function (e, t, n, a) {
            if ($t(e)) throw new Error("Sparky.fn.each cannot be used on fragments. Yet.");
            const o = [], r = ua(e), i = "option" === Bt(e);
            Fd(e, r), a.fn ? e.setAttribute(a.attributeFn, a.fn) : e.removeAttribute(a.attributeFn), e.remove(), a.fn = "";
            const s = z.of().latest(), l = new ha(s, e, r, o, i, a);
            return t.latest().dedup().each(e => {
                s.push(e), ia(l)
            }).done(() => {
                rn(r), l.stop(), sa(l), o.forEach(function (e) {
                    e.stop()
                })
            }), !1
        }, entries: function (e, t) {
            return t.map(Object.entries)
        }, get: function (e, t, n) {
            const a = n[0];
            var o = di;
            return t.chain(e => (o.stop(), o = Te(a, e), o))
        }, if: function (e, t, n) {
            const a = Stream.of(), o = n[0], i = ua(e);
            let s = !1, l = r;
            return Fd(e, i), rn(e), t.each(function (t) {
                l(), l = xe(o, n => {
                    var o = !!n;
                    o == s || (s = o, s ? (Rd(i, e), a.push(t)) : (Rd(e, i), a.push(null)))
                }, t)
            }), a
        }, import: function (e, t, n) {
            var a = n[0];
            if (kp && !a) throw new Error("Sparky: " + qo.attributePrefix + "fn=\"import:url\" requires a url.");
            var o = z.of();
            return /\$\{(\w+)\}/.test(a) ? (t.each(function (e) {
                var t = a.replace(/\$\{(\w+)\}/g, function (t, n) {
                    return e[n]
                });
                wp[t] ? o.push(wp[t]) : xa(t, o)
            }), o) : wp[a] ? z.of(wp[a]) : (xa(a, o), o)
        }, on: function (e, t, n) {
            const a = n[0], o = n.length - 1;
            let r = !1, s = -1, l;
            const d = t => {
                s = (s + 1) % o;
                const e = n[s + 1];
                if (xp && (!l || !l[e])) throw console.error("Sparky scope", l), new Error("Sparky scope has no method \"" + e + "\"");
                l[e](t.target.value)
            };
            return t.tap(function (t) {
                r || (r = !0, setTimeout(() => e.addEventListener(a, d), 10)), l = t
            })
        }, prevent: function (e, t, n) {
            e.addEventListener(n[0], Tn)
        }, "start-on": function (e, t, n) {
            const a = n[0];
            Wd(a, e).filter(En).each(function () {
                this.stop()
            })
        }, scope: function (e, t) {
            return t.done(() => Cp.delete(e)), t.tap(t => Cp.set(e.correspondingUseElement || e, t))
        }, window: function () {
            return z.of(window)
        }
    };
    Object.assign(ka.prototype, {
        fire: function () {
            this.cued = !1
        }, push: function (e) {
            const t = this.tokens;
            for (let a = t.length; a--;) {
                const n = t[a];
                "string" != typeof n && (n.unobserve && n.unobserve(), n.unobserve = xe(n.path, e => {
                    n.value = e, n.noRender || this.cued || (this.cued = !0, ia(this))
                }, e, NaN))
            }
        }, stop: function () {
            sa(this);
            const e = this.tokens;
            for (let t = e.length; t--;) e[t].unobserve && e[t].unobserve();
            this.stop = r
        }
    });
    const Np = Object.assign;
    Np(Ca.prototype, ka.prototype, {
        fire: function () {
            ka.prototype.fire.apply(this, arguments);
            const e = !!this.tokens.find(Ta);
            return this.renderedValue === e ? 0 : void (this.renderCount += this.render(this.name, this.node, e), this.renderedValue = e)
        }
    });
    const Sp = Object.assign, jp = /\S/, Ap = /\s+/;
    Sp(ja.prototype, ka.prototype, {
        fire: function () {
            ka.prototype.fire.apply(this, arguments);
            const e = this.classList, t = this.tokens.join(" ");
            this.renderedValue === t || (this.renderCount += this.renderedValue && jp.test(this.renderedValue) ? Na(e, this.renderedValue) : 0, this.renderCount += t && jp.test(t) ? _a(e, t) : 0, this.renderedValue = t)
        }
    });
    const qp = Object.assign;
    qp(Aa.prototype, ka.prototype, {
        fire: function () {
            ka.prototype.fire.apply(this, arguments);
            const e = this.tokens.join("");
            this.renderedValue === e || (this.renderCount += this.render(this.name, this.node, e), this.renderedValue = e)
        }
    });
    const Lp = Object.assign;
    Lp(La.prototype, ka.prototype, {
        fire: function () {
            ka.prototype.fire.apply(this, arguments);
            const e = this.tokens[0], t = e.valueOf();
            this.renderedValue === t || (this.renderCount += this.render(this.name, this.node, t), this.renderedValue = t)
        }, stop: function () {
            ka.prototype.stop.apply(this, arguments), this.unobserveMutations && this.unobserveMutations()
        }
    });
    var Mp = Array.prototype, Dp = Gr;
    const Pp = {sum: kl}, Up = {
        add: {
            tx: A(function (e, t) {
                return t.add ? t.add(e) : t + e
            }), ix: A(function (e, t) {
                return t.add ? t.add(-e) : t - e
            })
        },
        "add-date": {
            tx: hs, ix: A(function (e, t) {
                return hs("-" + e, t)
            })
        },
        "add-time": {tx: Cs, ix: _s},
        "to-db": {tx: Ye, ix: We},
        "to-precision": {
            tx: A(function (e, t) {
                return Br(t) ? t.toPrecision(e) : t
            }), ix: parseFloat
        },
        join: {
            tx: A(function (e, t) {
                return Mp.join.call(t, e)
            }), ix: A(function (e, t) {
                return Dp.split.call(t, e)
            })
        },
        "numbers-string": {
            tx: A(function (e, t) {
                return Mp.join.call(t, e)
            }), ix: A(function (e, t) {
                return Dp.split.call(t, e).map(parseFloat)
            })
        },
        multiply: {
            tx: Tl, ix: A(function (e, t) {
                return t / e
            })
        },
        degrees: {tx: Xe, ix: Ge},
        radians: {tx: Ge, ix: Xe},
        pow: {
            tx: _l, ix: function (e) {
                return _l(1 / e)
            }
        },
        exp: {tx: Nl, ix: Sl},
        log: {tx: Sl, ix: Nl},
        int: {tx: Gs(0), ix: w},
        float: {tx: Ds, ix: C},
        boolean: {tx: Boolean, ix: C},
        normalise: {
            tx: A(function (e, t, n, a) {
                const o = Oe(e);
                return Bi[o](t, n, a)
            }), ix: A(function (e, t, n, a) {
                const o = Oe(e);
                return Ji[o](t, n, a)
            })
        },
        denormalise: {
            tx: A(function (e, t, n, a) {
                const o = Oe(e);
                return Ji[o](t, n, a)
            }), ix: A(function (e, t, n, a) {
                const o = Oe(e);
                return Bi[o](t, n, a)
            })
        },
        floatformat: {
            tx: Gs, ix: A(function (e, t) {
                return parseFloat(t)
            })
        },
        "float-string": {tx: e => e + "", ix: parseFloat},
        "int-string": {tx: e => e.toFixed(0), ix: w},
        interpolate: {
            tx: function () {
                var e = Mp.map.call(arguments, Vs("0")), t = Mp.map.call(arguments, Vs("1"));
                return function (n) {
                    return Ma(e, t, n)
                }
            }, ix: function () {
                var e = Mp.map.call(arguments, Vs("0")), t = Mp.map.call(arguments, Vs("1"));
                return function (n) {
                    return Ma(t, e, n)
                }
            }
        },
        cartesian: {tx: Ke, ix: Je},
        polar: {tx: Je, ix: Ke},
        deg: {tx: Xe, ix: Ge},
        rad: {tx: Ge, ix: Xe},
        level: {tx: We, ix: Ye},
        px: {tx: fd, ix: fn},
        rem: {tx: fn, ix: fd}
    }, Ip = {
        contains: tl,
        equals: $s,
        escape: function (e) {
            return ad.textContent = e, nd.innerHTML
        },
        exp: Nl,
        formatdate: bs,
        formattime: ws,
        formatfloat: Gs,
        get: Xs,
        invoke: is,
        is: Hs,
        has: A(function (e, t) {
            return t && e in t
        }),
        last: Ue,
        limit: Ll,
        log: Sl,
        max: wl,
        min: El,
        mod: Cl,
        not: function (e) {
            return !e
        },
        percent: Tl(100),
        append: bl,
        prepend: yl,
        prepad: vl,
        postpad: xl,
        slugify: function (e) {
            return "string" == typeof e ? e.trim().toLowerCase().replace(/^[\W_]+/, "").replace(/[\W_]+$/, "").replace(/[\W_]+/g, "-") : void 0
        },
        root: ql,
        type: _,
        divide: A(function (e, t) {
            return "number" == typeof t ? t / e : void 0
        }),
        "find-in": A(function (e, t) {
            if (g(t)) {
                var n = Xs(e, window);
                return n && n.find(m(Hs(t), Vs("id")))
            }
        }),
        floatformat: A(function (e, t) {
            return "number" == typeof t ? Wr.toFixed.call(t, e) : g(t) ? console.warn("Sparky: filter floatformat: " + e + " called on non-number " + t) : ""
        }),
        floor: ni,
        "greater-than": A(function (e, t) {
            return t > e
        }),
        invert: function (e) {
            return "number" == typeof e ? 1 / e : !e
        },
        json: JSON.stringify,
        "less-than": A(function (e, t) {
            return t < e
        }),
        localise: A(function (e, t) {
            var n = document.documentElement.lang, a = {};
            return g(e) && (a.minimumFractionDigits = e, a.maximumFractionDigits = e), t.toLocaleString ? t.toLocaleString(n, a) : t
        }),
        lowercase: function (e) {
            return "string" == typeof e ? Gr.toLowerCase.apply(e) : void 0
        },
        map: function (e, t) {
            var n, a;
            return void 0 === t ? (a = dp([], e), n = Ra(a, Ip), function (e) {
                return e.map(n)
            }) : (n = (Up[e] && Up[e].tx || Ip[e]).apply(null, t), function (e) {
                return e && e.map(n)
            })
        },
        filter: A(function (e, t, n) {
            return n && n.map(Ip[e].apply(null, t))
        }, !0),
        match: A(function (e, t) {
            return e = "string" == typeof e ? RegExp(e) : e, e.exec(t)
        }),
        matches: A(function (e, t) {
            return e = "string" == typeof e ? RegExp(e.slice(1, -1)) : e, console.log(e), !!e.test(t)
        }),
        pluralise: A(function (e, t, n, a) {
            if ("number" == typeof a) return e = e || "", t = t || "s", "fr" === n ? 2 > a && 0 <= a ? e : t : 1 === a ? e : t
        }),
        reduce: A(function (e, t, n) {
            return n && n.reduce(Pp[e], t || 0)
        }, !0),
        replace: A(function (e, t, n) {
            return "string" == typeof n ? n.replace(RegExp(e, "g"), t) : void 0
        }),
        round: A(function (e, t) {
            return Xr(t / e) * e
        }),
        slice: A(function (e, t, n) {
            return "string" == typeof n ? n.slice(e, t) : Array.prototype.slice.call(n, e, t)
        }, !0),
        striptags: function () {
            var e = /<(?:[^>'"]|"[^"]*"|'[^']*')*>/g;
            return function (t) {
                return t.replace(e, "")
            }
        }(),
        switch: function (e) {
            return "boolean" == typeof e && (e = +e), "string" == typeof e && (e = parseInt(e, 10)), "number" != typeof e || ai(e) ? void 0 : arguments[e + 1]
        },
        translate: function () {
            var e = {};
            return function (t) {
                var n = n;
                if (!n) return e.missingTranslations || (console.warn("Sparky: Missing lookup object Sparky.translations"), e.missingTranslations = !0), t;
                var a = n[t];
                return a ? a : (e[t] || (console.warn("Sparky: Sparky.translations contains no translation for \"" + t + "\""), e[t] = !0), t)
            }
        }(),
        truncatechars: A(function (e, t) {
            return t.length > e ? t.slice(0, e) + "\u2026" : t
        }),
        uppercase: function (e) {
            return "string" == typeof e ? Gr.toUpperCase.apply(e) : void 0
        },
        yesno: A(function (e, t, n) {
            return n ? e : t
        })
    }, Op = new WeakMap, Fp = new WeakMap;
    Object.assign(Ua.prototype, {
        transform: f, set: r, fire: function () {
            ka.prototype.fire.apply(this, arguments), this.pipe && (this.transform = T.apply(null, this.pipe.map(e => {
                const t = Da(e.name);
                if (!t) throw new Error("Sparky invert fn " + e.name + "() not found.");
                return e.args && e.args.length ? t.apply(null, e.args) : t
            }).reverse())), this.fn = () => {
                const e = this.coerce(this.read(this.node));
                this.set(void 0 === e ? void 0 : this.transform(e))
            }, this.fns.set(this.node, this.fn), this.fire = Pa, void 0 === Xs(this.path, this.scope) && ("value" in this.node ? this.fn() : (this.token.noRender = !0, this.set(this.transform(this.coerce(this.readAttributeValue(this.node)))), this.token.noRender = !1))
        }, push: function (e) {
            return this.scope = e, this.set = e[this.path] && e[this.path].setValueAtTime ? t => {
                void 0 === t || le(e)[this.path].setValueAtTime(t, e.context.currentTime)
            } : Js(this.path, e), ia(this), this
        }, stop: function () {
            return this.fns.delete(this.node), this
        }
    }), document.addEventListener("input", function (t) {
        const e = Op.get(t.target);
        e && e(t.target.value)
    }), document.addEventListener("change", function (t) {
        const e = Fp.get(t.target);
        e && e(t.target.value)
    }), document.addEventListener("focusout", function () {
    });
    var $p = {
        default: {attributes: ["id", "title", "style"], booleans: ["hidden"]},
        a: {attributes: ["href"]},
        button: {booleans: ["disabled"]},
        circle: {attributes: ["cx", "cy", "r", "transform"]},
        ellipse: {attributes: ["cx", "cy", "rx", "ry", "r", "transform"]},
        form: {attributes: ["method", "action"]},
        fieldset: {booleans: ["disabled"]},
        g: {attributes: ["transform"]},
        img: {attributes: ["alt"]},
        input: {
            booleans: ["disabled", "required"],
            attributes: ["name"],
            types: {
                button: {attributes: ["value"]},
                checkbox: {attributes: [], booleans: ["checked"], value: "checkbox"},
                date: {attributes: ["min", "max", "step"], value: "string"},
                hidden: {attributes: ["value"]},
                image: {attributes: ["src"]},
                number: {attributes: ["min", "max", "step"], value: "number"},
                radio: {attributes: [], booleans: ["checked"], value: "radio"},
                range: {attributes: ["min", "max", "step"], value: "number"},
                reset: {attributes: ["value"]},
                submit: {attributes: ["value"]},
                time: {attributes: ["min", "max", "step"], value: "string"},
                default: {value: "string"}
            }
        },
        label: {attributes: ["for"]},
        line: {attributes: ["x1", "x2", "y1", "y2", "transform"]},
        meta: {attributes: ["content"]},
        meter: {attributes: ["min", "max", "low", "high", "value"]},
        option: {attributes: ["value"], booleans: ["disabled"]},
        output: {attributes: ["for"]},
        path: {attributes: ["d", "transform"]},
        polygon: {attributes: ["points", "transform"]},
        polyline: {attributes: ["points", "transform"]},
        progress: {attributes: ["max", "value"]},
        rect: {attributes: ["x", "y", "width", "height", "rx", "ry", "transform"]},
        select: {attributes: ["name"], booleans: ["disabled", "required"], types: {default: {value: "string"}}},
        svg: {attributes: ["viewbox"]},
        text: {attributes: ["x", "y", "dx", "dy", "text-anchor", "transform"]},
        textarea: {attributes: ["name"], booleans: ["disabled", "required"], value: "string"},
        time: {attributes: ["datetime"]},
        use: {attributes: ["href", "transform", "x", "y"]}
    };
    const Rp = void 0 === window.DEBUG || window.DEBUG, Vp = Array.prototype, Bp = Object.assign, Hp = Symbol("cache"),
        zp = {viewbox: "viewBox"}, Yp = Vs("type"), Wp = Vs("nodeType"), Gp = {number: "number", range: "number"},
        Xp = Ip[Hp] = {}, Jp = o({
            number: function (e, t, n) {
                return po(e, t, n, to, "input", za, Ga, Ha)
            }, range: function (e, t, n) {
                return po(e, t, n, to, "input", za, Ga, Ha)
            }, checkbox: function (e, t, n) {
                return uo(e, t, n, no, Ya, Xa)
            }, radio: function (e, t, n) {
                return uo(e, t, n, no, Wa, Xa)
            }, file: function (e, t, n) {
                return po(e, t, n, eo, "change", za, Ga, Ba)
            }, default: function (e, t, n) {
                return po(e, t, n, eo, "input", za, Ga, Ba)
            }
        }), Kp = x(Wp, {
            1: function (e, t, n) {
                const a = n.mount && n.mount(e, n);
                return a ? void t.push(a) : void (fo(Array.from(e.childNodes), t, n), co(e, t, n), lo($p.default.booleans, e, t, n), io($p.default.attributes, e, t, n), ho($p, e, t, n))
            }, 3: function (e, t, n) {
                oo(e.nodeValue, Ja, t, n, e)
            }, 8: r, 9: function (e, t, n) {
                fo(Vp.slice.apply(e.childNodes), t, n)
            }, 10: r, 11: function (e, t, n) {
                fo(Vp.slice.apply(e.childNodes), t, n)
            }, default: function (e, t, n) {
                if ("number" != typeof e.length) throw new Error("Cannot mount object. It is neither a node nor a collection.", e);
                fo(e, t, n)
            }
        });
    Bp(go.prototype, {
        stop: function () {
            return this.renderers.forEach(Oa), this
        }, push: function (e) {
            return this.scope === e ? this : (this.scope = e, this.renderers.reduce(Ia, e), this)
        }
    });
    const Zp = void 0 === window.DEBUG || window.DEBUG, Qp = Object.assign, eu = Os(/^\s*([\w-]+)\s*(:)?/, {
        1: function (e, t) {
            return e.name = t[1], e
        }, 2: function (e, t) {
            return e.params = lp([], t), e
        }, close: function (e, t) {
            return e.remainingString = t.input.slice(t[0].length + (t.consumed || 0)), e
        }
    });
    window.console && window.console.log && console.log("%cSparky%c      - https://github.com/cruncher/sparky", "color: #a3b31f; font-weight: 600;", "color: inherit; font-weight: 300;");
    const tu = {is: "sparky"};
    ia({
        label: "IsRenderer", fire: function () {
            const e = this;
            window.document.querySelectorAll("[is=\"sparky\"]").forEach(t => {
                const n = tu.fn = t.getAttribute("fn"), a = new qo(t, tu);
                if (!n) {
                    const t = {};
                    a.push(t), e.renderedValue = t
                }
            })
        }, renderCount: 0
    }), hp.attributeFn = "fn", hp.attributeInclude = "include", hp.attributePrefix = ":", $p.default.attributes.push("dir"), $p.input.types.checkbox.attributes.push("state");
    var nu = window.axios;
    const au = Object.assign;
    var ou = /^\//, ru = e(function (e) {
        return {
            base: ou.test(e) ? window.location.protocol + "//" + window.location.host + e : e,
            params: {},
            requests: {},
            values: [],
            models: []
        }
    });
    (function (e, t, n) {
        _p[e] = t, _p[e].settings = n
    })("prepend", function (e, t, n) {
        const a = n[0];
        return t.tap(t => {
            requestAnimationFrame(function () {
                const n = bn(Le(a, t));
                e.prepend(n)
            })
        })
    });
    const iu = Object.assign, su = se([]), lu = {
        400: {status: 400, type: "error", text: "Bad request"},
        401: {status: 401, type: "error", text: "You don't have permission to do that."},
        402: {status: 402, type: "error", text: "Payment Required"},
        403: {status: 403, type: "error", text: "Forbidden"},
        404: {status: 404, type: "error", text: "Not Found"},
        405: {status: 405, type: "error", text: "Method Not Allowed"},
        406: {status: 406, type: "error", text: "Can't save. The server says that's not acceptable "},
        407: {status: 407, type: "error", text: "Proxy Authentication Required"},
        408: {status: 408, type: "error", text: "Request Timeout"},
        409: {status: 409, type: "error", text: "Conflict"},
        410: {status: 410, type: "error", text: "Gone"},
        411: {status: 411, type: "error", text: "Length Required"},
        412: {status: 412, type: "error", text: "Precondition Failed"},
        413: {status: 413, type: "error", text: "Request Entity Too Large"},
        414: {status: 414, type: "error", text: "Request-URI Too Long"},
        415: {status: 415, type: "error", text: "Unsupported Media Type"},
        416: {status: 416, type: "error", text: "Requested Range Not Satisfiable"},
        417: {status: 417, type: "error", text: "Expectation Failed"},
        418: {status: 418, type: "error", text: "I'm a teapot (RFC 2324)"},
        420: {status: 420, type: "error", text: "Enhance Your Calm (Twitter)"},
        422: {status: 422, type: "error", text: "Unprocessable Entity (WebDAV)"},
        423: {status: 423, type: "error", text: "Locked (WebDAV)"},
        424: {status: 424, type: "error", text: "Failed Dependency (WebDAV)"},
        425: {status: 425, type: "error", text: "Reserved for WebDAV"},
        426: {status: 426, type: "error", text: "Upgrade Required"},
        428: {status: 428, type: "error", text: "Precondition Required"},
        429: {status: 429, type: "error", text: "Too Many Requests"},
        431: {status: 431, type: "error", text: "Request Header Fields Too Large"},
        444: {status: 444, type: "error", text: "No Response (Nginx)"},
        449: {status: 449, type: "error", text: "Retry With (Microsoft)"},
        450: {status: 450, type: "error", text: "Blocked by Windows Parental Controls (Microsoft)"},
        499: {status: 499, type: "error", text: "Client Closed Request (Nginx)"},
        500: {status: 500, type: "error", text: "Internal Server Error"},
        501: {status: 501, type: "error", text: "Not Implemented"},
        502: {status: 502, type: "error", text: "Bad Gateway"},
        503: {status: 503, type: "error", text: "Service Unavailable"},
        504: {status: 504, type: "error", text: "Gateway Timeout"},
        505: {status: 505, type: "error", text: "HTTP Version Not Supported"},
        506: {status: 506, type: "error", text: "Variant Also Negotiates (Experimental)"},
        507: {status: 507, type: "error", text: "Insufficient Storage (WebDAV)"},
        508: {status: 508, type: "error", text: "Loop Detected (WebDAV)"},
        509: {status: 509, type: "error", text: "Bandwidth Limit Exceeded (Apache)"},
        510: {status: 510, type: "error", text: "Not Extended"},
        511: {status: 511, type: "error", text: "Network Authentication Required"},
        598: {status: 598, type: "error", text: "Network read timeout error"},
        599: {status: 599, type: "error", text: "Network connect timeout error"}
    };
    xe(".", function (e, t) {
        t && t.added.forEach(function (e) {
            e.active = !0, e.duration && setTimeout(function () {
                Do(e)
            }, 1e3 * e.duration)
        })
    }, su), _p["remove-on-click"] = function (e, t) {
        t.tap(function (t) {
            Wd("click", e).each(function (n) {
                n.preventDefault(), Do(t)
            })
        })
    };
    var du = z.of().map(x(_, {
        string: function (e) {
            return lu[e] || {type: "info", text: e}
        }, number: function (e) {
            return lu[e] || {type: "info", status: e}
        }, object: function (e) {
            return Po(e) ? e.response && e.response.status ? iu({}, lu[e.response.status]) : {
                type: "error",
                text: e.message,
                status: e.request && e.request.status,
                error: e
            } : e
        }, default: function (e) {
            throw new Error("messages: .push() accepts a string, number or object; you gave it " + typeof e)
        }
    })).map(se).each(function (e) {
        su.push(e)
    });
    _p.messages = function () {
        return z.of(su)
    };
    const cu = se([]), pu = {font: 0, pack: 1, cut: 2, lab: 3, custom: 4}, uu = ml(e => pu[e.type] + e.type + e.pk, cu),
        mu = e(function (e) {
            if (!e) throw new Error("Wont request font without a pk!");
            return Mo("/api/v1/fonts/" + e).catch(du.push).then(Uo).then(Io).then(e => e.map(uu))
        }), hu = e(function (e) {
            if (!e) throw new Error("Wont request custom without a pk!");
            const t = Mo("/api/v1/custom/" + e);
            return t.catch(du.push), t.then(Uo).then(Io).then(e => e.map(uu))
        }), fu = e(function () {
            return Mo("/api/v1/fonts/carted").catch(du.push).then(Uo).then(e => e.map(Io).map(uu))
        });
    window.products = cu;
    var gu = window.DEBUG;
    const bu = se({content: [], coupons: [], quantity: 1, quantity_client: 1, discount: 0, vat: 0, licensee: "user"});
    gu && (window.cart = bu);
    const yu = function (e) {
        function t() {
            return n = void 0, e.apply(a, o)
        }

        var n, a, o;
        return function () {
            return n = n || Promise.resolve().then(t), a = this, o = arguments, n
        }
    }(function (e) {
        return Lo({url: "/api/v1/cart/", method: "patch", data: Wo(e)}).then(Ho).then(Is(bu)).then(function (e) {
            return e.message && du.push({text: e.message, duration: 8, type: "warn"}), e
        }).catch(du.push)
    });
    bu.add = function (e, t) {
        var a, o;
        if (e && !("cut" === e.type && bu.content.find(zs({
            object_pk: e.font_pk,
            object_type: "font"
        }))) && !("cut" === e.type && bu.content.find(function (t) {
            return "pack" === t.type && e.pack_pks.indexOf(t.object_pk)
        }))) {
            if (bu.content.push(Go(e, t)), "font" === e.type) for (a = bu.content.length; a--;) o = bu.content[a], o.font_pk === e.pk && o.product !== e && bu.content.splice(a, 1); else "pack" === e.type && cu.filter(function (t) {
                return "cut" === t.type && t.pack_pks && -1 < t.pack_pks.indexOf(e.pk)
            }).forEach(zo);
            return yu({content: bu.content}), this
        }
    }, bu.remove = function (e) {
        e && (zo(e), yu({content: bu.content}), "font" === e.type && cu.filter(zs({font_pk: e.pk})).forEach(zo))
    };
    const vu = o({
        user: function () {
            bu.content.forEach(e => {
                e.quantity = bu.quantity, e.quantity_client = 0
            })
        }, client: function () {
            bu.content.forEach(e => {
                e.quantity = 0, e.quantity_client = bu.quantity_client
            })
        }, both: function () {
            bu.content.forEach(e => {
                e.quantity = bu.quantity, e.quantity_client = bu.quantity_client
            })
        }
    });
    (function () {
        return Promise.all([Mo("/api/v1/cart/?carted=1").catch(du.push), fu()]).then(e => Ho(e[0])).then(Is(bu))
    })().then(function () {
        xe("licensee", Xo, bu, bu.licensee), xe("quantity", Xo, bu, bu.quantity), xe("quantity_client", Xo, bu, bu.quantity_client)
    }), _p.cartItems = function () {
        return z.of(bu.content)
    }, _p.discountEditor = function (e, t) {
        return t.map(function (t) {
            var n = se({cart: t, discountCode: t.discountCode});
            return Wd("submit", e).tap(Tn).each(function () {
                t.discountCode = n.discountCode, t.discount = -10, t.total = Jo(t)
            }), n
        })
    }, _p["font-packs-in-cart"] = function (e, t) {
        var n = r, a = z.of();
        return t.each(function (e) {
            n(), n = xe("content", t => {
                a.push(t.filter(t => "pack" === t.object_type && t.font_pk === e.pk))
            }, bu)
        }), a
    }, _p["pack-cuts-in-cart"] = function (e, t) {
        var n = r, a = z.of();
        return t.each(function (e) {
            n(), n = xe("content", t => {
                a.push(t.filter(t => "cut" === t.object_type && t.product.pack_pks.includes(e.pk)))
            }, bu)
        }), a
    }, _p["font-packs-with-cuts-in-cart"] = function (e, t) {
        var n = r, a = z.of();
        return t.each(function (e) {
            n(), n = xe("content", t => {
                a.push(t.filter(t => "cut" === t.object_type && t.font_pk === e.pk).map(e => e.product.pack_pks).reduce((e, t) => e.concat(t), []).reduce(Ko, []).map(Fo))
            }, bu)
        }), a
    }, _p["products-in-font"] = function (e, t) {
        return t.map(e => cu.filter(t => "pack" === t.type && t.font_pk === e))
    }, _p["products-in-pack"] = function (e, t) {
        return t.map(e => cu.filter(t => "cut" === t.type && t.pack_pks.includes(e)))
    }, Ip["product-in-cart"] = function (e) {
        return !!bu.content.find(zs({object_type: e.type, object_pk: e.pk}))
    }, _p["font-total"] = A(function (e, t, n) {
        var a = n[0], o = z.of(), r = mu(a);
        return t.each(function (e) {
            r.then(() => {
                o.push(e.filter(zs({font_pk: a})).map(nr).map(e => e.total).reduce((e, t) => e + t, 0))
            })
        }), o
    }), _p["state-from-product"] = function (e, t) {
        return t.map(Nu)
    }, _p["state-from-item"] = function (e, t) {
        return t.map(nr)
    }, _p["discount-editor"] = function (e) {
        var t = {};
        return Wd("submit", e).tap(Tn).each(function () {
            t.discount_code && yu({discount_code: t.discount_code}).then(function () {
                t.discount_code = bu.discount_code
            }).catch(du.push)
        }), z.of(t)
    }, _p["clip-on"] = function (e, t, n) {
        const a = n[0], o = n[1];
        Wd(a, e).tap(Tn).each(t => {
            const e = t.currentTarget.getAttribute(o);
            navigator.clipboard.writeText(e).then(function () {
                du.push({type: "pass", text: "\"" + e + "\" copied to clipboard", duration: 3})
            }, function () {
                du.push({type: "warn", text: "Link not copied to clipboard. Select it and copy it manually."})
            })
        })
    }, _p["sort-by-products-order"] = function (e, t) {
        return t.map(function (e) {
            return e.sort(function (e, t) {
                const n = cu.findIndex(zs({type: e.object_type, pk: e.object_pk})),
                    a = cu.findIndex(zs({type: t.object_type, pk: t.object_pk}));
                return n > a ? 1 : n < a ? -1 : 0
            })
        })
    }, _p["sort-products-hierarchy"] = function (e, t) {
        var n = z.of();
        return t.each(function (e) {
            var t = e.filter(e => !e.product.lab),
                a = t.filter(e => "custom" !== e.object_type).map(Vs("font_pk")).reduce(Ko, []).map(mu).map(e => e.then(function (e) {
                    var t = e.find(Vo);
                    return bu.content.find(zs({object_pk: t.pk, object_type: "font"})) || t
                })),
                o = t.filter(e => "custom" === e.object_type).map(Vs("object_pk")).map(hu).map(e => e.then(function (e) {
                    return bu.content.find(zs({object_pk: e.pk, object_type: "custom"})) || e
                }));
            Promise.all(a.concat(o)).then(function (e) {
                n.push(e)
            })
        }), n
    }, _p.activate = function (e, t) {
        return t.tap(() => requestAnimationFrame(() => Jd("dom-activate", e)))
    }, _p["lab-pack"] = function (e, t) {
        var n = z.of();
        return t.each(function (e) {
            var t = e.filter(e => e.product.lab).map(Vs("font_pk")).reduce(Ko, []).map(mu);
            Promise.all(t).then(function (e) {
                var t = e.map(e => e.find(Bo)).map(e => bu.content.find(zs({
                    object_pk: e.pk,
                    object_type: "pack"
                })) || e)[0];
                n.push(t)
            })
        }), n
    }, Ip["font-carted-count"] = function (e) {
        return bu.content.reduce((t, n) => n.font_pk === e ? "cut" === n.object_type ? ++t : "pack" === n.object_type ? n.product.cut_count + t : t : t, 0)
    }, Ip["font-carted-price"] = function (e) {
        var t = bu.content.filter(t => t.font_pk === e);
        return console.log(t), t.map(e => Nu(e.product)).reduce((e, t) => e + t.total, 0)
    }, Ip["pack-carted-count"] = function (e) {
        return bu.content.reduce((t, n) => n.product.pack_pks && n.product.pack_pks.includes(e) ? ++t : t, 0)
    }, Ip["pack-carted-price"] = function (e) {
        return bu.content.filter(t => t.product.pack_pks && t.product.pack_pks.includes(e)).map(e => Nu(e.product)).reduce((e, t) => e + t.total, 0)
    }, Ip["lab-carted-count"] = function () {
        return bu.content.reduce((e, t) => "cut" === t.object_type && t.product.lab ? ++e : e, 0)
    }, Ip["lab-carted-price"] = function () {
        return bu.content.filter(e => "cut" === e.object_type && e.product.lab).map(e => Nu(e.product)).reduce((e, t) => e + t.total, 0)
    }, Ip.sumTotalAndVat = function (e) {
        return e.total + e.vat
    };
    const xu = m(w, Vs("value"));
    _p["remove-from-cart-on"] = function (e, t, n) {
        const a = n[0];
        return t.tap(function (t) {
            e.addEventListener(a, function () {
                let e = bu.content.length, a;
                for (; e--;) (a = bu.content[e], a.font_pk === t.product.pk) && bu.remove(cu.find(e => e.pk === a.object_pk && e.type === a.object_type))
            })
        })
    }, Wd("change", document).map(Vs("target")).filter(Dd("[type=\"checkbox\"]")).each(x(Vs("name"), {
        font: x(Vs("checked"), {
            true: z.of().map(xu).each(function (e) {
                var t = Oo(e);
                t || console.warn("Product not found. Nothing addded to cart.");
                var n = bu.quantity;
                bu.add(t, n)
            }).push, false: z.of().map(xu).each(function (e) {
                var t = Oo(e);
                bu.remove(t)
            }).push
        }), pack: x(Vs("checked"), {
            true: z.of().map(xu).each(function (e) {
                var t = Fo(e);
                t || console.warn("Product not found. Nothing addded to cart.");
                var n = bu.quantity;
                bu.add(t, n)
            }).push, false: z.of().map(xu).each(function (e) {
                var t = Fo(e);
                bu.remove(t)
            }).push
        }), cut: x(Vs("checked"), {
            true: z.of().map(xu).each(function (e) {
                var t = $o(e);
                t || console.warn("Product cut-" + e + " not found. Nothing addded to cart.");
                var n = bu.quantity;
                bu.add(t, n)
            }).push, false: z.of().map(xu).each(function (e) {
                var t = $o(e);
                bu.remove(t)
            }).push
        }), custom: x(Vs("checked"), {
            true: z.of().tap(function (e) {
                console.log("CHECKED", e)
            }).map(xu).each(function (e) {
                var t = Ro(e);
                t || console.warn("Product custom-" + e + " not found. Nothing addded to cart.");
                var n = bu.quantity;
                bu.add(t, n)
            }).push, false: z.of().map(xu).each(function (e) {
                var t = Ro(e);
                bu.remove(t)
            }).push
        }), default: r
    }));
    const ku = {}, Tu = function (e) {
        const t = e + "";
        return ku[t] ? ku[t] : ku[t] = mu(e).then(function (t) {
            const n = t.find(zs({type: "font", pk: e}));
            return Nu(n)
        })
    }, Eu = function (e, t) {
        const n = e + "-pack-" + t;
        return ku[n] ? ku[n] : ku[n] = mu(e).then(function (e) {
            const n = e.find(zs({type: "pack", pk: t}));
            return Nu(n)
        })
    }, wu = function (e, t) {
        const n = e + "-cut-" + t;
        return ku[n] ? ku[n] : ku[n] = mu(e).then(function (e) {
            const n = e.find(zs({type: "cut", pk: t}));
            return Nu(n)
        })
    }, Cu = function (e) {
        const t = "custom-" + e;
        return ku[t] ? ku[t] : ku[t] = hu(e).then(function (t) {
            const n = t.find(zs({type: "custom", pk: e}));
            return Nu(n)
        })
    };
    var _u = x(e => e.product.type, {
        font: function (e) {
            e.carted_total = bu.student ? 1 === e.state ? e.product.student_price : 0 : 1 === e.state ? e.total : bu.content.filter(t => t.font_pk === e.product.pk).map(nr).reduce((e, t) => e + bu.quantity * t.product.price, 0)
        }, pack: function (e) {
            e.carted_total = bu.student ? 1 === e.state ? e.product.student_price : 0 : 1 === e.state ? e.total : bu.content.map(nr).filter(t => t.product.pack_pks && t.product.pack_pks.includes(e.product.pk)).reduce((e, t) => e + t.total, 0)
        }, default: function (e) {
            e.carted_total = bu.student ? 1 === e.state ? e.product.student_price : 0 : 1 === e.state ? e.total : 0
        }
    });
    Ip["lab-carted-count"] = function () {
        return bu.content.reduce((e, t) => "cut" === t.object_type && t.product.lab ? ++e : e, 0)
    }, Ip["lab-carted-price"] = function () {
        return bu.content.filter(e => "cut" === e.object_type && e.product.lab).map(e => Nu(e.product)).reduce((e, t) => e + t.total, 0)
    };
    const Nu = function (e) {
        var t = new WeakMap;
        return function (n) {
            if (t.has(n)) return t.get(n);
            var a = e(n);
            return t.set(n, a), a
        }
    }(function (e) {
        const t = se({product: e, state: 0, total: e.price});
        return xe("content", function () {
            ar(t), _u(t)
        }, bu), xe("quantity", n => {
            t.total = n * e.price, _u(t)
        }, bu), xe("quantity_client", n => {
            t.total_client = n * e.price
        }, bu), t
    });
    _p.cart = function () {
        return z.of(bu)
    }, _p.font = function (e, t, n) {
        var a = n[0];
        const o = z.of();
        return Tu(a).then(function (e) {
            o.push(e)
        }), o
    }, _p.pack = function (e, t, n) {
        const a = n[0], o = n[1], r = z.of();
        return Eu(a, o).then(function (e) {
            r.push(e)
        }), r
    }, _p.cut = function (e, t, n) {
        const a = n[0], o = n[1], r = z.of();
        return wu(a, o).then(function (e) {
            r.push(e)
        }), r
    }, _p.custom = function (e, t, n) {
        const a = n[0], o = z.of();
        return Cu(a).then(function (e) {
            o.push(e)
        }), o
    }, _p["if-cuts"] = function (e, t) {
        return t.map(function (e) {
            return "pack" === e.object_type || "font" === e.object_type ? e : null
        })
    }, _p["filter-type"] = function (e, t, n) {
        return console.log("filter-type", n[0]), t.map(function (e) {
            return e.filter(zs({object_type: n[0]}))
        })
    }, _p["filter-type-not"] = function (e, t, n) {
        return console.log("filter-type-not", n[0]), t.map(function (e) {
            return e.filter(e => e.object_type !== n[0])
        })
    };
    const Su = window.config.animatedScrollColor || [245, 245, 245];
    Wd("scroll", window).unshift({}).each(function () {
        var e = window.innerHeight;
        Pd(".highlightable", document).map(rr).forEach(function (t) {
            if (!t.box) return;
            if (0 > t.box.bottom || t.box.top > e) return void t.node.classList.remove("hl-on");
            const n = t.box.top < e / 2 ? t.box.bottom > e / 2 ? 1 : t.box.bottom / (e / 2) : (e - t.box.top) / (e / 2);
            .9 < n ? t.node.classList.add("hl-on") : t.node.classList.remove("hl-on");
            const a = Su.map(function (e) {
                return Xr(e + (255 - e) * ei(n, 3))
            });
            t.node.style.backgroundColor = "rgb(" + a.join(",") + ")"
        })
    });
    const ju = Object.assign, Au = Object.defineProperties;
    var qu = zt("scrolling-video");
    Au(ir.prototype, {
        currentTime: {
            get: function () {
                return this._currentTime
            }, set: function (e) {
                this._currentTime = parseFloat(e);
                let t = ni(this.length * this._currentTime / this.duration);
                if (t = 0 > t ? 0 : t >= this.length ? this.length - 1 : t, this.frame !== t) {
                    this.frame = t;
                    const e = this[t];
                    return this.context.drawImage(e, 0, 0), this._currentTime
                }
            }
        }
    }), ju(ir.prototype, {duration: 0, length: 0});
    const Lu = e => {
        window.addEventListener("scroll", function () {
            const t = window.innerHeight, n = document.scrollingElement.scrollTop,
                a = Ll(0, e.duration, e.duration * (n / t));
            e.currentTime = a
        })
    }, Mu = (() => {
        if (!window.config.font || void 0 === window.config.font.frames_count) return;
        const e = window.config.font.frames_count, t = window.config.font.frames_path,
            a = window.config.font.frames_extension || ".jpg", o = [];
        for (let r = 0; r++ < e;) {
            const e = vl("0", 3, r);
            o.push(t + e + a)
        }
        return o
    })();
    Mu && Mu.length && (e => Promise.all(e.map(function (e) {
        return new Promise(function (t, n) {
            const a = tn("img", {
                onload: function () {
                    t(a)
                }, onerror: n, src: e
            })
        })
    })).then(function (e) {
        return new ir(e)
    }))(Mu).then(function (e) {
        Rd(qu, e.node), Lu(e), console.log("SWTY Banner video ready,", e.length, "frames.")
    });
    const Du = .8, Pu = Ol(6);
    Wd("click", Ld(".scrollto", document)).each(function (t) {
        sr(Ld(t.target.getAttribute("href"), document)), t.preventDefault()
    });
    const Uu = window.config;
    _p.products = function () {
        return z.of(cu)
    };
    const Iu = {};
    _p["font-demo"] = function (e, t, n) {
        var a = n[0], o = lr(a);
        return o.quantity = 1, z.of(o)
    }, _p["font-from"] = function (e, t, n) {
        var a = n[0], o = z.of();
        return t.each(function (e) {
            var t = e[a], n = lr(t);
            n.quantity = 1, o.push(n)
        }), o
    };
    const Ou = {};
    _p["pack-demo"] = function (e, t, n) {
        var a = n[0], o = n[1], r = dr(a, o);
        return z.of(r)
    }, _p["pack-demo-options"] = function (e, t) {
        return t.map(t => (t.variations = {}, t.texts = {
            latin: qd("data-text-latin", e),
            cyrillic: qd("data-text-cyrillic", e),
            arabic: qd("data-text-arabic", e),
            shortlatin: qd("data-text-short-latin", e),
            shortcyrillic: qd("data-text-short-cyrillic", e),
            shortarabic: qd("data-text-short-arabic", e)
        }, t))
    }, _p["clear-variations-on-click"] = function (e, t) {
        let n;
        t.tap(function (e) {
            n = e
        }), e.addEventListener("click", function () {
            n && Object.keys(n.variations).reduce(function (e, t) {
                return e[t] = null, e
            }, n.variations)
        })
    }, _p["activate-when"] = function (e, t, n) {
        const a = n[0];
        return t.tap(function (t) {
            let o = 0;
            xe(a, function () {
                o++ && Jd("dom-activate", e)
            }, t)
        })
    }, _p["cut-size"] = function (e, t, n) {
        var a = n[0], o = n[1], r = cr(a, o);
        return z.of(r)
    }, _p["cut-demo"] = function (e, t, n) {
        var a = n[0], o = n[1], r = cr(a, o), i = e.getAttribute("data-alphabets") || "", s = !1;
        return t.each(function (t) {
            xe("alphabet", function () {
                s = !0, r.alphabet = -1 < i.indexOf(t.alphabet) ? t.alphabet : "latin", r.text = -1 < i.indexOf(t.alphabet) ? t.texts[r.prefix + t.alphabet] || t.text : t.texts[r.prefix + "latin"] || t.text, s = !1
            }, t), xe("text", function (e) {
                s || (t.text = e)
            }, r), xe("text", function (e) {
                r.text = e || (-1 < i.indexOf(t.alphabet) ? t.texts[r.prefix + t.alphabet] || t.text : t.texts[r.prefix + "latin"] || t.text)
            }, t), Gd("blur", function (t) {
                "" === t.target.value && (t.target.value = r.text)
            }, e), It({maxWidth: "43.75em"}, function () {
                r.prefix = "short", r.text = -1 < i.indexOf(t.alphabet) ? t.texts[r.prefix + t.alphabet] || t.text : t.texts[r.prefix + "latin"] || t.text
            }, function () {
                r.prefix = "", r.text = -1 < i.indexOf(t.alphabet) ? t.texts[r.prefix + t.alphabet] || t.text : t.texts[r.prefix + "latin"] || t.text
            }), r.variations = t.variations
        }), z.of(r)
    }, _p.lab = function (e, t, n) {
        var a = n[0], o = n[1], r = cr(a, o);
        return r.texts = {
            latin: qd("data-text-latin", e),
            cyrillic: qd("data-text-cyrillic", e),
            arabic: qd("data-text-arabic", e)
        }, r.variations = {hoo: "boo"}, xe("alphabet", function () {
            r.text = r.texts[r.alphabet] || r.text
        }, r), z.of(r)
    };
    var Fu = 0;
    Wd("mouseover", document).filter(t => t.timeStamp > Fu + 1e3 * ec.simulatedEventDelay).map(Vs("target")).map(Md(".name-block.on")).each(function (t) {
        if (!t.getAttribute("data-normal-html")) {
            const e = t.innerHTML;
            t.setAttribute("data-normal-html", e)
        }
        t.innerHTML = t.getAttribute("data-hover-html"), Wd("mouseout", document).filter(function (n) {
            return !t.contains(n.relatedTarget)
        }).each(function () {
            t.innerHTML = t.getAttribute("data-normal-html"), this.stop()
        })
    }), Wd("touchend", document).each(function (t) {
        Fu = t.timeStamp
    }), Wd("dom-deactivate", document.body).filter(t => t.target.matches(".pack-toggle-block, .read-toggle-block")).each(t => {
        function e() {
            if (i === document.scrollingElement.scrollTop ? ++r : r = 0, i = document.scrollingElement.scrollTop, 2 < r) return void (document.scrollingElement.style["scroll-behavior"] = "");
            var n = cn(a).top;
            document.scrollingElement.scrollTop += n - o, requestAnimationFrame(e)
        }

        var a = t.relatedTarget, o = cn(a).top, r = 0, i;
        document.scrollingElement.style["scroll-behavior"] = "auto", requestAnimationFrame(e)
    }), Wd("click", document.body).map(t => t.target.closest(".pill-button") || void 0).each(e => e.blur()), _p["options-block"] = function (e) {
        const t = dd(e);
        let n;
        Wd("mouseover", e).each(function (a) {
            a.target.matches(".option-box-button") ? (n && t.remove(n), n = a.target.matches(".variation-option-box-button") ? "variation-hover" : a.target.matches(".alphabet-option-box-button") ? "alphabet-hover" : void 0, n && t.add(n)) : (n && t.remove(n), n = void 0)
        }), Wd("mouseleave", e).each(function () {
            n && t.remove(n), n = void 0
        })
    };
    Wd("change", document).map(Vs("target")).filter(Dd(".location-select")).map(Vs("value")).each(x(function (e) {
        return /^#\S+$/.test(e)
    }, {
        true: function (e) {
            const t = e.slice(1);
            Jd("dom-activate", zt(t)), document.activeElement.blur()
        }, false: Ws("location", window)
    }));
    var $u = {textarea: !0, input: !0, select: !0, button: !0},
        Ru = {move: "mousemove", cancel: "mouseup dragstart", end: "mouseup"},
        Vu = {move: {type: "touchmove", passive: !1}, cancel: "touchend", end: "touchend"}, Bu = Wd.on, Hu = Wd.off,
        zu = Wd.trigger;
    Bu(document, "mousedown", function (t) {
        !kn(t) || pr(t) || (Bu(document, Ru.move, hr, [t]), Bu(document, Ru.cancel, fr, [t]))
    }), Bu(document, "touchstart", function (t) {
        if (!$u[t.target.tagName.toLowerCase()]) {
            var e = t.changedTouches[0], n = {
                target: e.target,
                pageX: e.pageX,
                pageY: e.pageY,
                identifier: e.identifier,
                touchmove: function () {
                    br.apply(this, arguments)
                },
                touchend: function () {
                    yr.apply(this, arguments)
                }
            };
            Bu(document, Vu.move, n.touchmove, [n]), Bu(document, Vu.cancel, n.touchend, [n])
        }
    });
    const Yu = Wd.on, Wu = Wd.trigger;
    Yu(document, "dom-touch", function (t) {
        if (!t.defaultPrevented) {
            var e = Md(".swipeable", t.target);
            if (e) {
                var n = t.detail(), a = n.clone().latest();
                a.done(function () {
                    Sr(e, a)
                })
            }
        }
    });
    var Gu = Wd.on, Xu = Wd.trigger, Ju = 2 * Jr, Ku = 800, Zu = /\s+/;
    Gu(document, "dom-touch", function (t) {
        if (!t.defaultPrevented) {
            var e = Md(".swipeable, [swipeable]", t.target);
            if (e) {
                var n = dd(e), a = Yd("transform", e);
                a = a && "none" !== a ? a : "";
                var o = Yd("transform:translateX", e), r = !1, i = !1, s = qd("data-slide-min", e),
                    l = qd("data-slide-max", e);
                s || l ? (r = /elastic/.test(s), i = /elastic/.test(l), s = parseFloat(s) || 0, l = parseFloat(l) || 0) : (r = !0, i = !0, s = Ar(e), l = 0), n.add("no-transition");
                var d = o;
                t.detail().map(function (e) {
                    d = o + e.x;
                    var t = 0 < d ? i ? jr(d / Ku) * Ku - o : l : d < s ? r ? jr((d - s) / Ku) * Ku + s - o : s : e.x;
                    return a + " translate(" + t + "px, 0px)"
                }).each(function (t) {
                    e.style.transform = t
                }).done(function () {
                    n.remove("no-transition");
                    var t = qd("data-slide-snap", e);
                    if (t) {
                        t = t.split(Zu).map(parseFloat);
                        var o = t.reduce(function (e, t) {
                            return ti(t - d) < ti(e - d) ? t : e
                        });
                        e.style.transform = a + " translate(" + o + "px, 0px)"
                    }
                })
            }
        }
    }), Gu(document, "dom-swipe", function (t) {
        if (!t.defaultPrevented) {
            var e = Md(".swipeable, [swipeable]", t.target);
            if (e) {
                var n = Ml(0, Ju, t.angle || 0),
                    a = n > 1 * Ju / 8 && n < 3 * Ju / 8 ? "previousElementSibling" : !!(n > 5 * Ju / 8 && n < 7 * Ju / 8) && "nextElementSibling";
                if (a) {
                    var o = Jt(e), r = o.filter(Dd(".active")).shift() || o.shift();
                    r[a] ? Xu(r[a], "dom-activate") : qr(e, r)
                }
            }
        }
    }), Gu(document, "dom-activate", function (t) {
        if (t.default) {
            var e = t.target, n = e.parentNode;
            if (Dd(".swipeable, [swipeable]", n)) {
                var a = dd(n);
                a.remove("no-transition"), document.documentElement.clientWidth, t.preventDefault(), Lr(n, e)
            }
        }
    }), Gu(window, "resize", function () {
        Pd(".swipeable, [swipeable]", document).forEach(function (e) {
            var t = Jt(e).find(Dd(".active"));
            if (t) {
                var n = dd(e);
                n.add("no-transition"), Lr(e, t), document.documentElement.clientWidth, n.remove("no-transition")
            }
        })
    });
    var Qu = e(function () {
        return {}
    });
    Wd("dom-activate", document).map(Vs("target")).dedup().filter(Dd(".switchable, [switchable]")).each(function (t) {
        function n(n) {
            En(n) && Ur(o, r, a, t)
        }

        var a = t.parentNode, o = Qu(a);
        if (Dd(".swipeable, [swipeable]", a)) {
            var r = Jt(a).filter(Dd(".switchable, [switchable]"));
            return 3 > r.length ? void console.warn("Slides: Not enough slides to create 'infinite' slideshow.") : void (clearTimeout(o.timer), o.timer = setTimeout(Ur, 500, o, r, a, t), Wd.off(a, "transitionend", o.transitionend), o.transitionend = n, Wd.on(a, "transitionend", o.transitionend))
        }
    }), Wd("resize", window).choke(.333333).chain(function () {
        return Pd(".slides-block", document)
    }).each(function (e) {
        var t = Ld(".swipeable, [swipeable]", e);
        if (!t) return void console.warn("No swipeable wrapper found in slides-block");
        var n = Ld(".active", e);
        Pr(t, n)
    });
    const em = Ld("#nav", document), tm = Vs("target"), nm = Dd(".menu-block"), am = Dd(".back-menu-button"),
        om = Jd("dom-deactivate");
    let rm = 0;
    Wd("dom-activate", document).map(tm).filter(nm).each(function (e) {
        e.parentNode.scrollLeft = 0, em.classList.remove("block-" + rm + "-active"), rm = Fr(em[0], e) - 1, em.classList.add("block-" + rm + "-active")
    }), Wd("click", document).map(tm).filter(am).each(function (e) {
        const t = e.parentNode;
        om(t)
    }), Wd("dom-deactivate", document).map(tm).filter(nm).each(function () {
        em.classList.remove("block-" + rm + "-active"), --rm
    }), em.parentNode.scrollLeft = 0;
    var im = Dd(".removeable, [removeable]"), sm = Wd.on, lm = Wd.off;
    sm(document, "dom-activate", function (t) {
        if (t.default) {
            var e = t.target;
            im(e) && t.default()
        }
    }), sm(document, "dom-deactivate", function (t) {
        function e() {
            clearTimeout(a), lm(n, "transitionend", e), rn(n)
        }

        if (t.default) {
            var n = t.target;
            if (im(n)) {
                var a = setTimeout(e, 1000);
                sm(n, "transitionend", e), t.default()
            }
        }
    });
    const dm = Dd(".submittable, [submittable]"), cm = {
        processResponse: function (e) {
            e.redirected && (window.location = e.url)
        }
    }, pm = o({
        "application/json": function (e) {
            return {"X-CSRFToken": e.get("csrfmiddlewaretoken"), "Content-Type": "application/json; charset=utf-8"}
        }, "multipart/form-data": function (e) {
            return {"X-CSRFToken": e.get("csrfmiddlewaretoken"), "Content-Type": "multipart/form-data"}
        }, default: function () {
            return {"Content-Type": "application/x-www-form-urlencoded"}
        }
    }), um = o({
        "application/json": function (e) {
            const t = e.get("csrfmiddlewaretoken");
            return t && e.delete("csrfmiddlewaretoken"), Vr(e)
        }, "multipart/form-data": function (e) {
            const t = e.get("csrfmiddlewaretoken");
            return t && e.delete("csrfmiddlewaretoken"), e
        }, default: function (e) {
            return Rr(e)
        }
    });
    Wd("submit", document).filter(m(dm, Vs("target"))).tap(Tn).map(Vs("target")).each(function (e) {
        const t = e.getAttribute("method"), n = e.getAttribute("action"), a = e.getAttribute("enctype"),
            o = new FormData(e);
        fetch(n, {
            method: t ? t.toUpperCase() : "POST",
            headers: pm(a, o),
            body: um(a, o),
            credentials: "same-origin"
        }).then(function (t) {
            if (!(cm.processResponse && cm.processResponse(t, e))) {
                const n = t.headers.get("content-type");
                ($r(n) ? t.json() : t.text()).then(function (n) {
                    t.ok ? Wd.trigger(e, "dom-submitted", {detail: n}) : Wd.trigger(e, "dom-submit-error", {detail: n})
                })
            }
        }).catch(function () {
            Wd.trigger(e, "dom-submit-error")
        })
    }), Wd("dom-submitted", document).filter(m(Dd(".newsletter-block"), Vs("target"))).each(function (n) {
        var e = Ld("[type=\"submit\"]", n.target), t = Ld("input[type=\"email\"]", n.target.parentNode);
        t ? (t.value = "", t.placeholder = "Thanks!") : e && (e.value = "Thanks!")
    });
    var mm = zt("footer");
    It({minScrollTop: 400}, function () {
        mm.classList.add("scrolled")
    }, function () {
        mm.classList.remove("scrolled")
    });
    const hm = window.config, fm = se({}), gm = Object.assign;
    gm(Ip, {
        isUserAddressId: function (e) {
            return console.log("ID", e, fm.address), e === fm.address
        }
    });
    var bm = A(function (t, n) {
        var e = Md(t, n.target, n.currentTarget);
        if (e) return n.delegateTarget = e, n
    }, !0);
    if (gm(_p, {
        user: function () {
            return z.of(fm)
        }, "login-dialog": function (e) {
            const t = z.of();
            return e.addEventListener("dom-activate", function (n) {
                const e = n.relatedTarget && n.relatedTarget.getAttribute("data-login-url");
                t.push({state: "login", redirect: e || window.location.pathname});
                const a = document.getElementById("id_email");
                a && window.setTimeout(function () {
                    a.focus()
                }, 200)
            }), t
        }, "content-switch": function (e, t) {
            function n(t, n) {
                const a = Pd(t, document)[0], o = id(a.content), r = qo(o);
                an(e), Id(e, r[0]), requestAnimationFrame(function () {
                    r.push(n)
                })
            }

            const a = qd("data-content", e);
            let o;
            return t.each(function (e) {
                o = e, n("#" + a, o)
            }), Wd("click", e).map(bm("a[target=\"#" + e.id + "\"]")).tap(Tn).map(Vs("delegateTarget")).map(qd("href")).throttle().each(function (e) {
                n(e, o)
            }), !1
        }
    }), cm.processResponse = function (e, t) {
        var n, a;
        if (e.redirected) return n = new FormData(t), a = n.get("next"), a ? (window.location = a, a.split("#")[0] === window.location.pathname && window.location.reload()) : window.location = e.url, !0
    }, window.config.messages) for (var ym = 0; ym <= window.config.messages.length;) du.push(window.config.messages[ym++]);
    window.DEBUG && (window.messages = du)
}();