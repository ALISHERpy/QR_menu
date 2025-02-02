import {
    T as rt,
    v as $t,
    d as Bt,
    e as Mt,
    a as he,
    b as nt,
    w as He
} from "./runtime-dom.esm-bundler-8f0d0aae-v6.js";
import {
    O as de,
    P as Pe,
    z as fe,
    d as re,
    y as Q,
    V as g,
    U as y,
    S as at,
    a6 as ot,
    W as c,
    Y as B,
    a1 as R,
    L as F,
    G as we,
    a7 as b,
    Z as ue,
    $ as X,
    N as j,
    a2 as H,
    ab as Ot,
    r as Ye,
    D as ce,
    a4 as ae,
    aa as Be,
    a5 as Me,
    X as Oe,
    a3 as It
} from "./runtime-core.esm-bundler-e1b83cdf-v6.js";
import {
    u as ee
} from "./global-store-29bd89d4-v6.js";
import {
    l as We,
    u as Dt,
    p as Vt
} from "./modal-store-752400f3-v6.js";
import {
    u as Lt
} from "./vue-i18n.esm-bundler-a94c73ec-v6.js";
import {
    u as xe
} from "./usePageContext-abf33fe0-v6.js";
import {
    _ as At
} from "./_plugin-vue_export-helper-c27b6911-v6.js";
import {
    s as qt,
    d as st
} from "./pinia-0d93e188-v6.js";
import {
    _ as Ze
} from "./preload-helper-101896b7-v6.js";
var it = {
        update: null,
        begin: null,
        loopBegin: null,
        changeBegin: null,
        change: null,
        changeComplete: null,
        loopComplete: null,
        complete: null,
        loop: 1,
        direction: "normal",
        autoplay: !0,
        timelineOffset: 0
    },
    Le = {
        duration: 1e3,
        delay: 0,
        endDelay: 0,
        easing: "easeOutElastic(1, .5)",
        round: 0
    },
    Rt = ["translateX", "translateY", "translateZ", "rotate", "rotateX", "rotateY", "rotateZ", "scale", "scaleX", "scaleY", "scaleZ", "skew", "skewX", "skewY", "perspective", "matrix", "matrix3d"],
    ke = {
        CSS: {},
        springs: {}
    };

function K(e, t, r) {
    return Math.min(Math.max(e, t), r)
}

function ge(e, t) {
    return e.indexOf(t) > -1
}

function Ie(e, t) {
    return e.apply(null, t)
}
var w = {
    arr: function(e) {
        return Array.isArray(e)
    },
    obj: function(e) {
        return ge(Object.prototype.toString.call(e), "Object")
    },
    pth: function(e) {
        return w.obj(e) && e.hasOwnProperty("totalLength")
    },
    svg: function(e) {
        return e instanceof SVGElement
    },
    inp: function(e) {
        return e instanceof HTMLInputElement
    },
    dom: function(e) {
        return e.nodeType || w.svg(e)
    },
    str: function(e) {
        return typeof e == "string"
    },
    fnc: function(e) {
        return typeof e == "function"
    },
    und: function(e) {
        return typeof e > "u"
    },
    nil: function(e) {
        return w.und(e) || e === null
    },
    hex: function(e) {
        return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(e)
    },
    rgb: function(e) {
        return /^rgb/.test(e)
    },
    hsl: function(e) {
        return /^hsl/.test(e)
    },
    col: function(e) {
        return w.hex(e) || w.rgb(e) || w.hsl(e)
    },
    key: function(e) {
        return !it.hasOwnProperty(e) && !Le.hasOwnProperty(e) && e !== "targets" && e !== "keyframes"
    }
};

function lt(e) {
    var t = /\(([^)]+)\)/.exec(e);
    return t ? t[1].split(",").map(function(r) {
        return parseFloat(r)
    }) : []
}

function ut(e, t) {
    var r = lt(e),
        n = K(w.und(r[0]) ? 1 : r[0], .1, 100),
        a = K(w.und(r[1]) ? 100 : r[1], .1, 100),
        s = K(w.und(r[2]) ? 10 : r[2], .1, 100),
        i = K(w.und(r[3]) ? 0 : r[3], .1, 100),
        l = Math.sqrt(a / n),
        o = s / (2 * Math.sqrt(a * n)),
        p = o < 1 ? l * Math.sqrt(1 - o * o) : 0,
        u = 1,
        d = o < 1 ? (o * l + -i) / p : -i + l;

    function h(_) {
        var m = t ? t * _ / 1e3 : _;
        return o < 1 ? m = Math.exp(-m * o * l) * (u * Math.cos(p * m) + d * Math.sin(p * m)) : m = (u + d * m) * Math.exp(-m * l), _ === 0 || _ === 1 ? _ : 1 - m
    }

    function C() {
        var _ = ke.springs[e];
        if (_) return _;
        for (var m = 1 / 6, x = 0, O = 0;;)
            if (x += m, h(x) === 1) {
                if (O++, O >= 16) break
            } else O = 0;
        var P = x * m * 1e3;
        return ke.springs[e] = P, P
    }
    return t ? h : C
}

function Ft(e) {
    return e === void 0 && (e = 10),
        function(t) {
            return Math.ceil(K(t, 1e-6, 1) * e) * (1 / e)
        }
}
var Ut = function() {
        var e = 11,
            t = 1 / (e - 1);

        function r(u, d) {
            return 1 - 3 * d + 3 * u
        }

        function n(u, d) {
            return 3 * d - 6 * u
        }

        function a(u) {
            return 3 * u
        }

        function s(u, d, h) {
            return ((r(d, h) * u + n(d, h)) * u + a(d)) * u
        }

        function i(u, d, h) {
            return 3 * r(d, h) * u * u + 2 * n(d, h) * u + a(d)
        }

        function l(u, d, h, C, _) {
            var m, x, O = 0;
            do x = d + (h - d) / 2, m = s(x, C, _) - u, m > 0 ? h = x : d = x; while (Math.abs(m) > 1e-7 && ++O < 10);
            return x
        }

        function o(u, d, h, C) {
            for (var _ = 0; _ < 4; ++_) {
                var m = i(d, h, C);
                if (m === 0) return d;
                var x = s(d, h, C) - u;
                d -= x / m
            }
            return d
        }

        function p(u, d, h, C) {
            if (!(0 <= u && u <= 1 && 0 <= h && h <= 1)) return;
            var _ = new Float32Array(e);
            if (u !== d || h !== C)
                for (var m = 0; m < e; ++m) _[m] = s(m * t, u, h);

            function x(O) {
                for (var P = 0, f = 1, v = e - 1; f !== v && _[f] <= O; ++f) P += t;
                --f;
                var $ = (O - _[f]) / (_[f + 1] - _[f]),
                    k = P + $ * t,
                    S = i(k, u, h);
                return S >= .001 ? o(O, k, u, h) : S === 0 ? k : l(O, P, P + t, u, h)
            }
            return function(O) {
                return u === d && h === C || O === 0 || O === 1 ? O : s(x(O), d, C)
            }
        }
        return p
    }(),
    ct = function() {
        var e = {
                linear: function() {
                    return function(n) {
                        return n
                    }
                }
            },
            t = {
                Sine: function() {
                    return function(n) {
                        return 1 - Math.cos(n * Math.PI / 2)
                    }
                },
                Circ: function() {
                    return function(n) {
                        return 1 - Math.sqrt(1 - n * n)
                    }
                },
                Back: function() {
                    return function(n) {
                        return n * n * (3 * n - 2)
                    }
                },
                Bounce: function() {
                    return function(n) {
                        for (var a, s = 4; n < ((a = Math.pow(2, --s)) - 1) / 11;);
                        return 1 / Math.pow(4, 3 - s) - 7.5625 * Math.pow((a * 3 - 2) / 22 - n, 2)
                    }
                },
                Elastic: function(n, a) {
                    n === void 0 && (n = 1), a === void 0 && (a = .5);
                    var s = K(n, 1, 10),
                        i = K(a, .1, 2);
                    return function(l) {
                        return l === 0 || l === 1 ? l : -s * Math.pow(2, 10 * (l - 1)) * Math.sin((l - 1 - i / (Math.PI * 2) * Math.asin(1 / s)) * (Math.PI * 2) / i)
                    }
                }
            },
            r = ["Quad", "Cubic", "Quart", "Quint", "Expo"];
        return r.forEach(function(n, a) {
            t[n] = function() {
                return function(s) {
                    return Math.pow(s, a + 2)
                }
            }
        }), Object.keys(t).forEach(function(n) {
            var a = t[n];
            e["easeIn" + n] = a, e["easeOut" + n] = function(s, i) {
                return function(l) {
                    return 1 - a(s, i)(1 - l)
                }
            }, e["easeInOut" + n] = function(s, i) {
                return function(l) {
                    return l < .5 ? a(s, i)(l * 2) / 2 : 1 - a(s, i)(l * -2 + 2) / 2
                }
            }, e["easeOutIn" + n] = function(s, i) {
                return function(l) {
                    return l < .5 ? (1 - a(s, i)(1 - l * 2)) / 2 : (a(s, i)(l * 2 - 1) + 1) / 2
                }
            }
        }), e
    }();

function Ae(e, t) {
    if (w.fnc(e)) return e;
    var r = e.split("(")[0],
        n = ct[r],
        a = lt(e);
    switch (r) {
        case "spring":
            return ut(e, t);
        case "cubicBezier":
            return Ie(Ut, a);
        case "steps":
            return Ie(Ft, a);
        default:
            return Ie(n, a)
    }
}

function dt(e) {
    try {
        var t = document.querySelectorAll(e);
        return t
    } catch {
        return
    }
}

function Se(e, t) {
    for (var r = e.length, n = arguments.length >= 2 ? arguments[1] : void 0, a = [], s = 0; s < r; s++)
        if (s in e) {
            var i = e[s];
            t.call(n, i, s, e) && a.push(i)
        }
    return a
}

function Ce(e) {
    return e.reduce(function(t, r) {
        return t.concat(w.arr(r) ? Ce(r) : r)
    }, [])
}

function Je(e) {
    return w.arr(e) ? e : (w.str(e) && (e = dt(e) || e), e instanceof NodeList || e instanceof HTMLCollection ? [].slice.call(e) : [e])
}

function qe(e, t) {
    return e.some(function(r) {
        return r === t
    })
}

function Re(e) {
    var t = {};
    for (var r in e) t[r] = e[r];
    return t
}

function De(e, t) {
    var r = Re(e);
    for (var n in e) r[n] = t.hasOwnProperty(n) ? t[n] : e[n];
    return r
}

function Ee(e, t) {
    var r = Re(e);
    for (var n in t) r[n] = w.und(e[n]) ? t[n] : e[n];
    return r
}

function Nt(e) {
    var t = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(e);
    return t ? "rgba(" + t[1] + ",1)" : e
}

function jt(e) {
    var t = /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
        r = e.replace(t, function(l, o, p, u) {
            return o + o + p + p + u + u
        }),
        n = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(r),
        a = parseInt(n[1], 16),
        s = parseInt(n[2], 16),
        i = parseInt(n[3], 16);
    return "rgba(" + a + "," + s + "," + i + ",1)"
}

function Qt(e) {
    var t = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(e) || /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(e),
        r = parseInt(t[1], 10) / 360,
        n = parseInt(t[2], 10) / 100,
        a = parseInt(t[3], 10) / 100,
        s = t[4] || 1;

    function i(h, C, _) {
        return _ < 0 && (_ += 1), _ > 1 && (_ -= 1), _ < 1 / 6 ? h + (C - h) * 6 * _ : _ < 1 / 2 ? C : _ < 2 / 3 ? h + (C - h) * (2 / 3 - _) * 6 : h
    }
    var l, o, p;
    if (n == 0) l = o = p = a;
    else {
        var u = a < .5 ? a * (1 + n) : a + n - a * n,
            d = 2 * a - u;
        l = i(d, u, r + 1 / 3), o = i(d, u, r), p = i(d, u, r - 1 / 3)
    }
    return "rgba(" + l * 255 + "," + o * 255 + "," + p * 255 + "," + s + ")"
}

function zt(e) {
    if (w.rgb(e)) return Nt(e);
    if (w.hex(e)) return jt(e);
    if (w.hsl(e)) return Qt(e)
}

function te(e) {
    var t = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(e);
    if (t) return t[1]
}

function Ht(e) {
    if (ge(e, "translate") || e === "perspective") return "px";
    if (ge(e, "rotate") || ge(e, "skew")) return "deg"
}

function Ve(e, t) {
    return w.fnc(e) ? e(t.target, t.id, t.total) : e
}

function G(e, t) {
    return e.getAttribute(t)
}

function Fe(e, t, r) {
    var n = te(t);
    if (qe([r, "deg", "rad", "turn"], n)) return t;
    var a = ke.CSS[t + r];
    if (!w.und(a)) return a;
    var s = 100,
        i = document.createElement(e.tagName),
        l = e.parentNode && e.parentNode !== document ? e.parentNode : document.body;
    l.appendChild(i), i.style.position = "absolute", i.style.width = s + r;
    var o = s / i.offsetWidth;
    l.removeChild(i);
    var p = o * parseFloat(t);
    return ke.CSS[t + r] = p, p
}

function ft(e, t, r) {
    if (t in e.style) {
        var n = t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(),
            a = e.style[t] || getComputedStyle(e).getPropertyValue(n) || "0";
        return r ? Fe(e, a, r) : a
    }
}

function Ue(e, t) {
    if (w.dom(e) && !w.inp(e) && (!w.nil(G(e, t)) || w.svg(e) && e[t])) return "attribute";
    if (w.dom(e) && qe(Rt, t)) return "transform";
    if (w.dom(e) && t !== "transform" && ft(e, t)) return "css";
    if (e[t] != null) return "object"
}

function vt(e) {
    if (w.dom(e)) {
        for (var t = e.style.transform || "", r = /(\w+)\(([^)]*)\)/g, n = new Map, a; a = r.exec(t);) n.set(a[1], a[2]);
        return n
    }
}

function Yt(e, t, r, n) {
    var a = ge(t, "scale") ? 1 : 0 + Ht(t),
        s = vt(e).get(t) || a;
    return r && (r.transforms.list.set(t, s), r.transforms.last = t), n ? Fe(e, s, n) : s
}

function Ne(e, t, r, n) {
    switch (Ue(e, t)) {
        case "transform":
            return Yt(e, t, n, r);
        case "css":
            return ft(e, t, r);
        case "attribute":
            return G(e, t);
        default:
            return e[t] || 0
    }
}

function je(e, t) {
    var r = /^(\*=|\+=|-=)/.exec(e);
    if (!r) return e;
    var n = te(e) || 0,
        a = parseFloat(t),
        s = parseFloat(e.replace(r[0], ""));
    switch (r[0][0]) {
        case "+":
            return a + s + n;
        case "-":
            return a - s + n;
        case "*":
            return a * s + n
    }
}

function pt(e, t) {
    if (w.col(e)) return zt(e);
    if (/\s/g.test(e)) return e;
    var r = te(e),
        n = r ? e.substr(0, e.length - r.length) : e;
    return t ? n + t : n
}

function Qe(e, t) {
    return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2))
}

function Wt(e) {
    return Math.PI * 2 * G(e, "r")
}

function Zt(e) {
    return G(e, "width") * 2 + G(e, "height") * 2
}

function Jt(e) {
    return Qe({
        x: G(e, "x1"),
        y: G(e, "y1")
    }, {
        x: G(e, "x2"),
        y: G(e, "y2")
    })
}

function gt(e) {
    for (var t = e.points, r = 0, n, a = 0; a < t.numberOfItems; a++) {
        var s = t.getItem(a);
        a > 0 && (r += Qe(n, s)), n = s
    }
    return r
}

function Kt(e) {
    var t = e.points;
    return gt(e) + Qe(t.getItem(t.numberOfItems - 1), t.getItem(0))
}

function ht(e) {
    if (e.getTotalLength) return e.getTotalLength();
    switch (e.tagName.toLowerCase()) {
        case "circle":
            return Wt(e);
        case "rect":
            return Zt(e);
        case "line":
            return Jt(e);
        case "polyline":
            return gt(e);
        case "polygon":
            return Kt(e)
    }
}

function Gt(e) {
    var t = ht(e);
    return e.setAttribute("stroke-dasharray", t), t
}

function Xt(e) {
    for (var t = e.parentNode; w.svg(t) && w.svg(t.parentNode);) t = t.parentNode;
    return t
}

function mt(e, t) {
    var r = t || {},
        n = r.el || Xt(e),
        a = n.getBoundingClientRect(),
        s = G(n, "viewBox"),
        i = a.width,
        l = a.height,
        o = r.viewBox || (s ? s.split(" ") : [0, 0, i, l]);
    return {
        el: n,
        viewBox: o,
        x: o[0] / 1,
        y: o[1] / 1,
        w: i,
        h: l,
        vW: o[2],
        vH: o[3]
    }
}

function er(e, t) {
    var r = w.str(e) ? dt(e)[0] : e,
        n = t || 100;
    return function(a) {
        return {
            property: a,
            el: r,
            svg: mt(r),
            totalLength: ht(r) * (n / 100)
        }
    }
}

function tr(e, t, r) {
    function n(u) {
        u === void 0 && (u = 0);
        var d = t + u >= 1 ? t + u : 0;
        return e.el.getPointAtLength(d)
    }
    var a = mt(e.el, e.svg),
        s = n(),
        i = n(-1),
        l = n(1),
        o = r ? 1 : a.w / a.vW,
        p = r ? 1 : a.h / a.vH;
    switch (e.property) {
        case "x":
            return (s.x - a.x) * o;
        case "y":
            return (s.y - a.y) * p;
        case "angle":
            return Math.atan2(l.y - i.y, l.x - i.x) * 180 / Math.PI
    }
}

function Ke(e, t) {
    var r = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,
        n = pt(w.pth(e) ? e.totalLength : e, t) + "";
    return {
        original: n,
        numbers: n.match(r) ? n.match(r).map(Number) : [0],
        strings: w.str(e) || t ? n.split(r) : []
    }
}

function ze(e) {
    var t = e ? Ce(w.arr(e) ? e.map(Je) : Je(e)) : [];
    return Se(t, function(r, n, a) {
        return a.indexOf(r) === n
    })
}

function yt(e) {
    var t = ze(e);
    return t.map(function(r, n) {
        return {
            target: r,
            id: n,
            total: t.length,
            transforms: {
                list: vt(r)
            }
        }
    })
}

function rr(e, t) {
    var r = Re(t);
    if (/^spring/.test(r.easing) && (r.duration = ut(r.easing)), w.arr(e)) {
        var n = e.length,
            a = n === 2 && !w.obj(e[0]);
        a ? e = {
            value: e
        } : w.fnc(t.duration) || (r.duration = t.duration / n)
    }
    var s = w.arr(e) ? e : [e];
    return s.map(function(i, l) {
        var o = w.obj(i) && !w.pth(i) ? i : {
            value: i
        };
        return w.und(o.delay) && (o.delay = l ? 0 : t.delay), w.und(o.endDelay) && (o.endDelay = l === s.length - 1 ? t.endDelay : 0), o
    }).map(function(i) {
        return Ee(i, r)
    })
}

function nr(e) {
    for (var t = Se(Ce(e.map(function(s) {
            return Object.keys(s)
        })), function(s) {
            return w.key(s)
        }).reduce(function(s, i) {
            return s.indexOf(i) < 0 && s.push(i), s
        }, []), r = {}, n = function(s) {
            var i = t[s];
            r[i] = e.map(function(l) {
                var o = {};
                for (var p in l) w.key(p) ? p == i && (o.value = l[p]) : o[p] = l[p];
                return o
            })
        }, a = 0; a < t.length; a++) n(a);
    return r
}

function ar(e, t) {
    var r = [],
        n = t.keyframes;
    n && (t = Ee(nr(n), t));
    for (var a in t) w.key(a) && r.push({
        name: a,
        tweens: rr(t[a], e)
    });
    return r
}

function or(e, t) {
    var r = {};
    for (var n in e) {
        var a = Ve(e[n], t);
        w.arr(a) && (a = a.map(function(s) {
            return Ve(s, t)
        }), a.length === 1 && (a = a[0])), r[n] = a
    }
    return r.duration = parseFloat(r.duration), r.delay = parseFloat(r.delay), r
}

function sr(e, t) {
    var r;
    return e.tweens.map(function(n) {
        var a = or(n, t),
            s = a.value,
            i = w.arr(s) ? s[1] : s,
            l = te(i),
            o = Ne(t.target, e.name, l, t),
            p = r ? r.to.original : o,
            u = w.arr(s) ? s[0] : p,
            d = te(u) || te(o),
            h = l || d;
        return w.und(i) && (i = p), a.from = Ke(u, h), a.to = Ke(je(i, u), h), a.start = r ? r.end : 0, a.end = a.start + a.delay + a.duration + a.endDelay, a.easing = Ae(a.easing, a.duration), a.isPath = w.pth(s), a.isPathTargetInsideSVG = a.isPath && w.svg(t.target), a.isColor = w.col(a.from.original), a.isColor && (a.round = 1), r = a, a
    })
}
var _t = {
    css: function(e, t, r) {
        return e.style[t] = r
    },
    attribute: function(e, t, r) {
        return e.setAttribute(t, r)
    },
    object: function(e, t, r) {
        return e[t] = r
    },
    transform: function(e, t, r, n, a) {
        if (n.list.set(t, r), t === n.last || a) {
            var s = "";
            n.list.forEach(function(i, l) {
                s += l + "(" + i + ") "
            }), e.style.transform = s
        }
    }
};

function bt(e, t) {
    var r = yt(e);
    r.forEach(function(n) {
        for (var a in t) {
            var s = Ve(t[a], n),
                i = n.target,
                l = te(s),
                o = Ne(i, a, l, n),
                p = l || te(o),
                u = je(pt(s, p), o),
                d = Ue(i, a);
            _t[d](i, a, u, n.transforms, !0)
        }
    })
}

function ir(e, t) {
    var r = Ue(e.target, t.name);
    if (r) {
        var n = sr(t, e),
            a = n[n.length - 1];
        return {
            type: r,
            property: t.name,
            animatable: e,
            tweens: n,
            duration: a.end,
            delay: n[0].delay,
            endDelay: a.endDelay
        }
    }
}

function lr(e, t) {
    return Se(Ce(e.map(function(r) {
        return t.map(function(n) {
            return ir(r, n)
        })
    })), function(r) {
        return !w.und(r)
    })
}

function wt(e, t) {
    var r = e.length,
        n = function(s) {
            return s.timelineOffset ? s.timelineOffset : 0
        },
        a = {};
    return a.duration = r ? Math.max.apply(Math, e.map(function(s) {
        return n(s) + s.duration
    })) : t.duration, a.delay = r ? Math.min.apply(Math, e.map(function(s) {
        return n(s) + s.delay
    })) : t.delay, a.endDelay = r ? a.duration - Math.max.apply(Math, e.map(function(s) {
        return n(s) + s.duration - s.endDelay
    })) : t.endDelay, a
}
var Ge = 0;

function ur(e) {
    var t = De(it, e),
        r = De(Le, e),
        n = ar(r, e),
        a = yt(e.targets),
        s = lr(a, n),
        i = wt(s, r),
        l = Ge;
    return Ge++, Ee(t, {
        id: l,
        children: [],
        animatables: a,
        animations: s,
        duration: i.duration,
        delay: i.delay,
        endDelay: i.endDelay
    })
}
var Y = [],
    kt = function() {
        var e;

        function t() {
            !e && (!Xe() || !I.suspendWhenDocumentHidden) && Y.length > 0 && (e = requestAnimationFrame(r))
        }

        function r(a) {
            for (var s = Y.length, i = 0; i < s;) {
                var l = Y[i];
                l.paused ? (Y.splice(i, 1), s--) : (l.tick(a), i++)
            }
            e = i > 0 ? requestAnimationFrame(r) : void 0
        }

        function n() {
            I.suspendWhenDocumentHidden && (Xe() ? e = cancelAnimationFrame(e) : (Y.forEach(function(a) {
                return a._onDocumentVisibility()
            }), kt()))
        }
        return typeof document < "u" && document.addEventListener("visibilitychange", n), t
    }();

function Xe() {
    return !!document && document.hidden
}

function I(e) {
    e === void 0 && (e = {});
    var t = 0,
        r = 0,
        n = 0,
        a, s = 0,
        i = null;

    function l(P) {
        var f = window.Promise && new Promise(function(v) {
            return i = v
        });
        return P.finished = f, f
    }
    var o = ur(e);
    l(o);

    function p() {
        var P = o.direction;
        P !== "alternate" && (o.direction = P !== "normal" ? "normal" : "reverse"), o.reversed = !o.reversed, a.forEach(function(f) {
            return f.reversed = o.reversed
        })
    }

    function u(P) {
        return o.reversed ? o.duration - P : P
    }

    function d() {
        t = 0, r = u(o.currentTime) * (1 / I.speed)
    }

    function h(P, f) {
        f && f.seek(P - f.timelineOffset)
    }

    function C(P) {
        if (o.reversePlayback)
            for (var v = s; v--;) h(P, a[v]);
        else
            for (var f = 0; f < s; f++) h(P, a[f])
    }

    function _(P) {
        for (var f = 0, v = o.animations, $ = v.length; f < $;) {
            var k = v[f],
                S = k.animatable,
                q = k.tweens,
                z = q.length - 1,
                A = q[z];
            z && (A = Se(q, function($e) {
                return P < $e.end
            })[0] || A);
            for (var W = K(P - A.start - A.delay, 0, A.duration) / A.duration, oe = isNaN(W) ? 1 : A.easing(W), U = A.to.strings, se = A.round, D = [], ve = A.to.numbers.length, ne = void 0, Z = 0; Z < ve; Z++) {
                var J = void 0,
                    le = A.to.numbers[Z],
                    me = A.from.numbers[Z] || 0;
                A.isPath ? J = tr(A.value, oe * le, A.isPathTargetInsideSVG) : J = me + oe * (le - me), se && (A.isColor && Z > 2 || (J = Math.round(J * se) / se)), D.push(J)
            }
            var ie = U.length;
            if (!ie) ne = D[0];
            else {
                ne = U[0];
                for (var N = 0; N < ie; N++) {
                    U[N];
                    var ye = U[N + 1],
                        pe = D[N];
                    isNaN(pe) || (ye ? ne += pe + ye : ne += pe + " ")
                }
            }
            _t[k.type](S.target, k.property, ne, S.transforms), k.currentValue = ne, f++
        }
    }

    function m(P) {
        o[P] && !o.passThrough && o[P](o)
    }

    function x() {
        o.remaining && o.remaining !== !0 && o.remaining--
    }

    function O(P) {
        var f = o.duration,
            v = o.delay,
            $ = f - o.endDelay,
            k = u(P);
        o.progress = K(k / f * 100, 0, 100), o.reversePlayback = k < o.currentTime, a && C(k), !o.began && o.currentTime > 0 && (o.began = !0, m("begin")), !o.loopBegan && o.currentTime > 0 && (o.loopBegan = !0, m("loopBegin")), k <= v && o.currentTime !== 0 && _(0), (k >= $ && o.currentTime !== f || !f) && _(f), k > v && k < $ ? (o.changeBegan || (o.changeBegan = !0, o.changeCompleted = !1, m("changeBegin")), m("change"), _(k)) : o.changeBegan && (o.changeCompleted = !0, o.changeBegan = !1, m("changeComplete")), o.currentTime = K(k, 0, f), o.began && m("update"), P >= f && (r = 0, x(), o.remaining ? (t = n, m("loopComplete"), o.loopBegan = !1, o.direction === "alternate" && p()) : (o.paused = !0, o.completed || (o.completed = !0, m("loopComplete"), m("complete"), !o.passThrough && "Promise" in window && (i(), l(o)))))
    }
    return o.reset = function() {
        var P = o.direction;
        o.passThrough = !1, o.currentTime = 0, o.progress = 0, o.paused = !0, o.began = !1, o.loopBegan = !1, o.changeBegan = !1, o.completed = !1, o.changeCompleted = !1, o.reversePlayback = !1, o.reversed = P === "reverse", o.remaining = o.loop, a = o.children, s = a.length;
        for (var f = s; f--;) o.children[f].reset();
        (o.reversed && o.loop !== !0 || P === "alternate" && o.loop === 1) && o.remaining++, _(o.reversed ? o.duration : 0)
    }, o._onDocumentVisibility = d, o.set = function(P, f) {
        return bt(P, f), o
    }, o.tick = function(P) {
        n = P, t || (t = n), O((n + (r - t)) * I.speed)
    }, o.seek = function(P) {
        O(u(P))
    }, o.pause = function() {
        o.paused = !0, d()
    }, o.play = function() {
        o.paused && (o.completed && o.reset(), o.paused = !1, Y.push(o), d(), kt())
    }, o.reverse = function() {
        p(), o.completed = !o.reversed, d()
    }, o.restart = function() {
        o.reset(), o.play()
    }, o.remove = function(P) {
        var f = ze(P);
        Pt(f, o)
    }, o.reset(), o.autoplay && o.play(), o
}

function et(e, t) {
    for (var r = t.length; r--;) qe(e, t[r].animatable.target) && t.splice(r, 1)
}

function Pt(e, t) {
    var r = t.animations,
        n = t.children;
    et(e, r);
    for (var a = n.length; a--;) {
        var s = n[a],
            i = s.animations;
        et(e, i), !i.length && !s.children.length && n.splice(a, 1)
    }!r.length && !n.length && t.pause()
}

function cr(e) {
    for (var t = ze(e), r = Y.length; r--;) {
        var n = Y[r];
        Pt(t, n)
    }
}

function dr(e, t) {
    t === void 0 && (t = {});
    var r = t.direction || "normal",
        n = t.easing ? Ae(t.easing) : null,
        a = t.grid,
        s = t.axis,
        i = t.from || 0,
        l = i === "first",
        o = i === "center",
        p = i === "last",
        u = w.arr(e),
        d = parseFloat(u ? e[0] : e),
        h = u ? parseFloat(e[1]) : 0,
        C = te(u ? e[1] : e) || 0,
        _ = t.start || 0 + (u ? d : 0),
        m = [],
        x = 0;
    return function(O, P, f) {
        if (l && (i = 0), o && (i = (f - 1) / 2), p && (i = f - 1), !m.length) {
            for (var v = 0; v < f; v++) {
                if (!a) m.push(Math.abs(i - v));
                else {
                    var $ = o ? (a[0] - 1) / 2 : i % a[0],
                        k = o ? (a[1] - 1) / 2 : Math.floor(i / a[0]),
                        S = v % a[0],
                        q = Math.floor(v / a[0]),
                        z = $ - S,
                        A = k - q,
                        W = Math.sqrt(z * z + A * A);
                    s === "x" && (W = -z), s === "y" && (W = -A), m.push(W)
                }
                x = Math.max.apply(Math, m)
            }
            n && (m = m.map(function(U) {
                return n(U / x) * x
            })), r === "reverse" && (m = m.map(function(U) {
                return s ? U < 0 ? U * -1 : -U : Math.abs(x - U)
            }))
        }
        var oe = u ? (h - d) / x : d;
        return _ + oe * (Math.round(m[P] * 100) / 100) + C
    }
}

function fr(e) {
    e === void 0 && (e = {});
    var t = I(e);
    return t.duration = 0, t.add = function(r, n) {
        var a = Y.indexOf(t),
            s = t.children;
        a > -1 && Y.splice(a, 1);

        function i(h) {
            h.passThrough = !0
        }
        for (var l = 0; l < s.length; l++) i(s[l]);
        var o = Ee(r, De(Le, e));
        o.targets = o.targets || e.targets;
        var p = t.duration;
        o.autoplay = !1, o.direction = t.direction, o.timelineOffset = w.und(n) ? p : je(n, p), i(t), t.seek(o.timelineOffset);
        var u = I(o);
        i(u), s.push(u);
        var d = wt(s, e);
        return t.delay = d.delay, t.endDelay = d.endDelay, t.duration = d.duration, t.seek(0), t.reset(), t.autoplay && t.play(), t
    }, t
}
I.version = "3.2.1";
I.speed = 1;
I.suspendWhenDocumentHidden = !0;
I.running = Y;
I.remove = cr;
I.get = Ne;
I.set = bt;
I.convertPx = Fe;
I.path = er;
I.setDashoffset = Gt;
I.stagger = dr;
I.timeline = fr;
I.easing = Ae;
I.penner = ct;
I.random = function(e, t) {
    return Math.floor(Math.random() * (t - e + 1)) + e
};

function vr(e, t) {
    return t.find(r => r.slug === e)
}

function pr(e, t) {
    const r = t.find(n => n.slug === e);
    return r ? r.id : null
}

function Ua(e, t) {
    const r = t.find(n => n.id === e);
    return r ? r.slug : null
}

function gr(e, t) {
    const r = t.find(n => n.slug === e);
    return r ? r.id : null
}

function be(e) {
    const r = /matrix\(\d+, \d+, \d+, \d+, \d+, (-?\d+(.\d+)?)\)/.exec(e);
    if (!r) throw Error("Can not parse matrix");
    return parseInt(r[1])
}

function hr(e) {
    let t = e.initialStoreState.restaurant.name + " QR code menu, easily browse & order, no waiting",
        r = `${e.initialStoreState.restaurant.name} QR code menu is incredibly user-friendly - guests can easily browse and order without the need to wait for a server or download any apps`,
        n = null;
    if (e.routeParams.category && (n = e.initialStoreState.categories.find(a => a.slug === e.routeParams.category), t += " " + n.name, r += " " + n.name), n && e.routeParams.subcategory) {
        let a = "All";
        e.routeParams.subcategory !== "all" && (a = n.child.find(i => i.slug === e.routeParams.subcategory).name), t += ", " + a, r += ", " + a
    }
    if (e.routeParams.product) {
        const a = e.initialStoreState.products.find(s => s.slug === e.routeParams.product);
        t += ", " + a.name, r += ", " + a.name
    }
    return {
        title: t,
        description: r
    }
}

function Na(e) {
    const t = document.getElementById("menu-category__highlight");
    if (!t) return;
    const r = t.parentElement.getBoundingClientRect().x,
        n = document.querySelector(`.categories-section .menu-category[data-category-id='${e}'] .menu-category__img`);
    if (!n) return;
    const a = n.getBoundingClientRect().x - r - 10,
        s = 1500;
    if (getComputedStyle(t).display === "none") {
        t.style.transform = `translateX(${a}px)`, t.style.display = "block";
        return
    }
    I({
        targets: t,
        translateX: [{
            value: a,
            duration: s
        }],
        easing: "easeOutElastic(1, 2)"
    })
}
async function ja(e, t) {
    let n = await (await fetch(e)).blob();
    return new File([n], t, {
        type: "image/png"
    })
}

function xt() {
    return typeof window > "u"
}

function Qa() {
    return xt() ? !1 : window.self !== window.top
}

function za(e) {
    const t = ee(),
        r = xe(),
        n = St(),
        a = ({
            categorySlug: p,
            subcategorySlug: u,
            productSlug: d
        }) => {
            let h = null,
                C = null,
                _ = null;
            if (p) h = pr(p, t.categories) ? ? t.categories[0].id;
            else if (t.categories.length > 1) {
                const m = t.products.some(x => x.is_popular);
                for (const x of t.categories) {
                    if (x.slug === "popular" && m) {
                        h = x.id;
                        break
                    }
                    if (x.id > 0) {
                        h = x.id;
                        break
                    }
                }
            } else h = null;
            if (p && u && h) {
                const m = vr(p, t.categories);
                m ? C = gr(u, m.child) : C = null
            } else C = null;
            if (d) {
                const m = t.products.find(x => x.slug === d);
                m && (_ = m.id)
            }
            return {
                activeCategoryID: h,
                activeSubCategoryID: C,
                activeProductID: _
            }
        },
        s = p => {
            if (p.state.onlyHash) return;
            const d = window.location.pathname.split("/").slice(5),
                h = {
                    categorySlug: d[0] || null,
                    subcategorySlug: d[1] || null,
                    productSlug: d[2] || null
                },
                {
                    activeCategoryID: C,
                    activeSubCategoryID: _,
                    activeProductID: m
                } = a(h);
            t.$patch({
                activeCategory: C,
                activeSubCategory: _,
                activeProduct: m
            })
        };
    de(() => {
        window.addEventListener("popstate", s)
    }), Pe(() => {
        window.removeEventListener("popstate", s)
    });
    const {
        activeCategory: i,
        activeSubCategory: l,
        activeProduct: o
    } = qt(t);
    return fe(() => [i.value, l.value, o.value], ([p, u, d]) => {
        var f;
        const h = t.categories.find(v => v.id === p);
        if (!h) {
            let v = n.generateRestaurantUrl();
            window.history.pushState(null, "", v);
            return
        }
        const C = h.slug,
            _ = u ? h.child.find(v => v.id === u).slug : "all",
            m = d ? (f = t.products.find(v => v.id === d)) == null ? void 0 : f.slug : null;
        let x = "";
        p && (x = n.generateCategoryUrl(p)), u && (x = n.generateSubCategoryUrl(u)), d && (x = n.generateProductUrl(d)), x != window.location.pathname && window.history.pushState(null, "", x), r.routeParams.category = C, r.routeParams.subcategory = _, r.routeParams.product = m;
        const O = hr(r);
        window.document.title = O.title;
        const P = window.document.querySelector('meta[name="description"]');
        P && P.setAttribute("value", O.description)
    }), {
        activeCategory: i,
        activeSubCategory: l,
        activeProduct: o,
        convertSlugsToIds: a
    }
}

function St() {
    const e = xe(),
        t = ee(),
        r = () => {
            const l = e.locale;
            return (e.isEditPage ? "/menu/edit/" : "/menu/s/") + l + "/" + t.restaurant.slug
        };
    return {
        generateRestaurantUrl: () => r() + "/",
        generateProductUrl: l => {
            const o = t.products.find(p => p.id === l);
            return o ? o.parent_category_slug ? r() + "/" + o.parent_category_slug + "/" + o.category_slug + "/" + o.slug + "/" : r() + "/" + o.category_slug + "/all/" + o.slug + "/" : "/404.html"
        },
        generateCategoryUrl: l => {
            const o = t.categories.find(p => p.id === l);
            return o ? r() + "/" + o.slug + "/all/" : "/404.html"
        },
        generateSubCategoryUrl: l => {
            let o = null,
                p = null;
            for (const u of t.categories)
                for (const d of u.child)
                    if (d.id === l) {
                        p = d, o = u;
                        break
                    }
            return !o || !p ? "/404.html" : r() + "/" + o.slug + "/" + p.slug + "/"
        }
    }
}

function mr() {
    return {
        replaceAssetDomain: t => t.startsWith("http") ? t.replace("https://instalacarte.com", "https://instalacarte.com") : "https://instalacarte.com" + t
    }
}
const Te = st("basket", {
    state: () => ({
        products: {},
        favorites: [],
        totalProductsQty: 0
    }),
    getters: {
        totalPrice() {
            let e = 0;
            for (const t in this.products) {
                const r = this.products[t];
                e += r.priceWithAddons * r.qty
            }
            return e
        },
        favoriteProducts() {
            return ee().products.filter(t => this.favorites.includes(t.id))
        }
    },
    actions: {
        addToBasket(e, t, r, n, a) {
            const s = [];
            t.addons.forEach(l => {
                l.options.forEach(o => {
                    o.id && n.includes(o.id) && s.push({
                        id: o.id,
                        name: o.name,
                        price: o.price,
                        addonName: l.name,
                        hash: o.hash
                    })
                })
            });
            const i = [];
            t.choices.forEach(l => {
                l.options.forEach(o => {
                    o.id && a.includes(o.id) && i.push({
                        id: o.id,
                        name: o.name,
                        price: o.price,
                        choiceName: l.name,
                        hash: o.hash
                    })
                })
            }), this.products.hasOwnProperty(e) ? this.products[e].qty++ : this.products[e] = {
                product: t,
                addons: s,
                choices: i,
                qty: 1,
                price: t.price,
                priceWithAddons: r
            }, this.totalProductsQty++
        },
        removeFromBasket(e) {
            this.products.hasOwnProperty(e) && (this.products[e].qty > 0 && (this.products[e].qty--, this.totalProductsQty--), this.products[e].qty === 0 && delete this.products[e])
        },
        increaseProductQty(e) {
            this.products[e] && (this.products[e].qty++, this.totalProductsQty++)
        },
        decreaseProductQty(e) {
            this.products[e] && (this.products[e].qty--, this.totalProductsQty--, this.products[e].qty === 0 && delete this.products[e])
        },
        clearBasket() {
            this.products = {}, this.totalProductsQty = 0
        },
        toggleFavorite(e) {
            const t = this.favorites.indexOf(e);
            t >= 0 ? this.favorites.splice(t, 1) : this.favorites.push(e)
        }
    }
});

function Ct() {
    const e = xe(),
        t = ee(),
        r = ee(),
        n = t.restaurant.menuLanguageCode || e.language;
    return {
        formatPrice: s => new Intl.NumberFormat(n, {
            style: "decimal",
            minimumFractionDigits: 2
        }).format(s) + " " + r.restaurant.currencySymbol
    }
}
const yr = st("public-quotas", {
        state: () => ({
            quotas: []
        })
    }),
    _r = "disable_powered_by_banner",
    br = "disable_menu_top_banner";

function wr() {
    const e = yr();
    return {
        hasEnoughQuota: r => {
            const n = e.quotas.find(a => a.slug === r);
            return n ? n.current < n.max : !1
        },
        DISABLE_POWERED_BY_BANNER: _r,
        DISABLE_MENU_TOP_BANNER: br
    }
}
const kr = {
        class: "add-product-btn",
        ref: "plusBtnRef"
    },
    Pr = {
        key: 0,
        class: "add-product-btn__expander"
    },
    xr = c("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "16",
        height: "16",
        fill: "currentColor",
        class: "bi bi-dash-lg",
        viewBox: "0 0 16 16"
    }, [c("path", {
        "fill-rule": "evenodd",
        d: "M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
    })], -1),
    Sr = [xr],
    Cr = {
        style: {
            "margin-left": "20px"
        }
    },
    Er = c("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "32",
        height: "32",
        fill: "currentColor",
        class: "bi bi-plus-lg",
        viewBox: "0 0 16 16"
    }, [c("path", {
        "fill-rule": "evenodd",
        d: "M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
    })], -1),
    Tr = [Er],
    $r = re({
        __name: "AddProductButton",
        props: {
            numOfProducts: null
        },
        emits: ["plus", "minus"],
        setup(e, {
            emit: t
        }) {
            const r = Q();
            let n = !1;
            const a = () => {
                r.value && (n || (n = !0, I({
                    targets: r.value,
                    scale: 1.4,
                    direction: "alternate",
                    easing: "linear",
                    duration: 100,
                    complete: () => {
                        n = !1
                    }
                })), t("plus"))
            };
            return (s, i) => (g(), y("div", kr, [at(rt, null, {
                default: ot(() => [e.numOfProducts > 0 ? (g(), y("div", Pr, [c("button", {
                    class: "btn btn--icon btn--icon--lg no-tap-highlight",
                    onClick: i[0] || (i[0] = l => t("minus"))
                }, Sr), c("div", Cr, B(e.numOfProducts), 1)])) : R("", !0)]),
                _: 1
            }), c("button", {
                class: "btn btn--icon add-product-btn__plus no-tap-highlight",
                ref_key: "plusButtonRef",
                ref: r,
                onClick: a
            }, Tr, 512)], 512))
        }
    });
const Br = {
        class: "product-page"
    },
    Mr = {
        id: "fly-path",
        style: {
            position: "absolute",
            transform: "translateY(-2000px) scale(0.5)",
            "z-index": "0"
        },
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 192 854.8"
    },
    Or = c("path", {
        d: "M 0 0 C 14 -60 79 -58 116 -4 C 160 51 211 259 215 518",
        stroke: "#FF0000",
        "stroke-width": "5",
        fill: "none"
    }, null, -1),
    Ir = [Or],
    Dr = {
        class: "product-page__img"
    },
    Vr = ["src"],
    Lr = {
        class: "product-page__header"
    },
    Ar = {
        class: "product-page__cat-image"
    },
    qr = ["src"],
    Rr = {
        class: "product-page__product-name text-overflow"
    },
    Fr = c("div", {
        style: {
            "flex-grow": "1"
        }
    }, null, -1),
    Ur = {
        key: 1,
        class: "product-page__product-price no-wrap"
    },
    Nr = {
        key: 0,
        class: "product-page__product-description"
    },
    jr = ["innerHTML"],
    Qr = {
        key: 2,
        class: "separator"
    },
    zr = {
        class: "product-page__product-addons"
    },
    Hr = {
        class: "product-page__product-addons__addon"
    },
    Yr = {
        key: 0,
        class: "checkbox-container"
    },
    Wr = ["onUpdate:modelValue", "value"],
    Zr = {
        class: "product-page__product-addons__addon__name"
    },
    Jr = c("div", {
        class: "separator"
    }, null, -1),
    Kr = {
        class: "product-page__product-addons"
    },
    Gr = {
        class: "product-page__product-addons__addon"
    },
    Xr = {
        class: "checkbox-container"
    },
    en = ["value"],
    tn = {
        class: "product-page__product-addons__addon__name"
    },
    rn = c("div", {
        style: {
            "flex-grow": "1"
        }
    }, null, -1),
    nn = {
        class: "product-page__product-addons__addon__price no-wrap"
    },
    an = c("div", {
        class: "separator"
    }, null, -1),
    Ha = re({
        __name: "ProductPage",
        props: {
            product: null
        },
        setup(e) {
            const t = e,
                r = ee(),
                n = Te(),
                a = Q([]),
                s = Q({}),
                i = Q(),
                {
                    formatPrice: l
                } = Ct(),
                {
                    replaceAssetDomain: o
                } = mr();
            let p = !1,
                u = 0,
                d = [];
            t.product.choices.forEach(v => {
                if (v.id && v.options.length) {
                    const $ = v.options[0].id;
                    $ && (s.value[v.id] = $)
                }
            });
            const h = F(() => r.restaurant.categoriesDisplayMode !== "no-photo" && t.product.category_image ? o(t.product.category_image) : "/plus_one_icon.png"),
                C = F(() => {
                    const v = [...a.value];
                    v.sort();
                    const $ = [Object.values(s.value)];
                    return $.sort(), t.product.id + "|" + v.join(",") + "|" + $.join(",")
                }),
                _ = F(() => {
                    let v = t.product.price;
                    t.product.addons.forEach(k => {
                        k.id && k.options.forEach(S => {
                            S.id && S.price && a.value.includes(S.id) && (v += S.price)
                        })
                    });
                    const $ = Object.values(s.value);
                    return t.product.choices.forEach(k => {
                        k.id && k.options.forEach(S => {
                            S.id && S.price && $.includes(S.id) && (v += S.price)
                        })
                    }), v
                }),
                m = F(() => n.products[C.value] ? n.products[C.value].qty : 0);
            de(() => {
                let v = fe(() => r.editMode, $ => {
                    $ || we(() => {
                        const k = document.querySelector("#pages .page.basket-page");
                        k && (u = be(getComputedStyle(k).transform))
                    })
                }, {
                    immediate: !0
                });
                d.push(v)
            }), Pe(() => {
                d.forEach(v => v()), d = []
            });
            const x = () => {
                    var k, S, q;
                    if (!i.value) return;
                    const v = (k = i.value) == null ? void 0 : k.cloneNode();
                    v.classList.add("product-page__cat-image__fly"), v.style.display = "block", (q = (S = i.value) == null ? void 0 : S.parentNode) == null || q.append(v);
                    const $ = I.path("#fly-path path");
                    I.set(v, {
                        translateX: 0,
                        translateY: 0,
                        scale: 1,
                        opacity: 1
                    }), I({
                        targets: v,
                        translateX: $("x"),
                        translateY: $("y"),
                        scale: 2.5,
                        opacity: 0,
                        rotate: $("angle"),
                        easing: "linear",
                        duration: 1e3
                    })
                },
                O = () => {
                    if (!u || p) return;
                    const v = document.querySelector("#pages .page.basket-page");
                    v && (I.set(v, {
                        translateY: u
                    }), p = !0, I({
                        targets: v,
                        keyframes: [{
                            translateY: u - 100,
                            easing: "easeOutCubic"
                        }, {
                            translateY: u,
                            easing: "easeOutBack"
                        }],
                        duration: 1e3,
                        complete: () => {
                            p = !1
                        }
                    }))
                },
                P = () => {
                    n.addToBasket(C.value, t.product, _.value, [...a.value], [...Object.values(s.value)]), x(), O()
                },
                f = () => {
                    n.removeFromBasket(C.value)
                };
            return (v, $) => (g(), y("div", Br, [(g(), y("svg", Mr, Ir)), c("div", Dr, [c("img", {
                src: b(o)(e.product.image),
                alt: "Image"
            }, null, 8, Vr)]), c("div", Lr, [!b(r).editMode && b(r).canOrder ? (g(), ue($r, {
                key: 0,
                onPlus: P,
                onMinus: f,
                "num-of-products": b(m)
            }, null, 8, ["num-of-products"])) : R("", !0), c("div", Ar, [X(c("img", {
                ref_key: "flyingImgPrototypeRef",
                ref: i,
                src: b(h),
                alt: "Category image",
                style: {
                    height: "40px"
                }
            }, null, 8, qr), [
                [$t, b(r).restaurant.categoriesDisplayMode !== "no-photo"]
            ])]), c("div", Rr, B(e.product.name), 1), Fr, e.product.price ? (g(), y("div", Ur, B(b(l)(b(_))), 1)) : R("", !0)]), e.product.escapeDescription ? (g(), y("div", Nr, B(e.product.description), 1)) : (g(), y("div", {
                key: 1,
                class: "product-page__product-description",
                innerHTML: e.product.description
            }, null, 8, jr)), e.product.choices.length && e.product.addons.length ? (g(), y("div", Qr)) : R("", !0), c("div", zr, [(g(!0), y(j, null, H(e.product.choices.filter(k => k.id), k => (g(), y(j, null, [c("div", Hr, [c("h3", null, B(k.name), 1), (g(!0), y(j, null, H(k.options.filter(S => S.id), S => (g(), y("div", null, [S.id ? (g(), y("label", Yr, [X(c("input", {
                type: "radio",
                "onUpdate:modelValue": q => s.value[k.id] = q,
                value: S.id
            }, null, 8, Wr), [
                [Bt, s.value[k.id]]
            ]), c("span", Zr, B(S.name), 1)])) : R("", !0)]))), 256))]), Jr], 64))), 256))]), c("div", Kr, [(g(!0), y(j, null, H(e.product.addons.filter(k => k.id), k => (g(), y(j, null, [c("div", Gr, [c("h3", null, B(k.name), 1), (g(!0), y(j, null, H(k.options.filter(S => S.id), S => (g(), y("div", null, [c("label", Xr, [X(c("input", {
                type: "checkbox",
                "onUpdate:modelValue": $[0] || ($[0] = q => a.value = q),
                value: S.id
            }, null, 8, en), [
                [Mt, a.value]
            ]), c("span", tn, B(S.name), 1), S.price ? (g(), y(j, {
                key: 0
            }, [rn, c("span", nn, "+ " + B(S.price_formatted), 1)], 64)) : R("", !0)])]))), 256))]), an], 64))), 256))])]))
        }
    });
const on = {
        class: "page"
    },
    sn = {
        key: 0,
        class: "page__header"
    },
    Ya = re({
        __name: "Page",
        setup(e) {
            const t = Ot();
            return (r, n) => (g(), y("div", on, [b(t).hasOwnProperty("page-header") ? (g(), y("div", sn, [Ye(r.$slots, "page-header")])) : R("", !0), Ye(r.$slots, "default")]))
        }
    });
const ln = "/img/empty_bag.png";

function un({
    onExpanded: e,
    onCollapsed: t
}) {
    const r = Q(),
        n = Q(),
        a = Q(),
        s = Q(!1),
        i = Q(!0),
        l = Te();
    let o = null,
        p = null,
        u = null,
        d = 0,
        h = [];
    const C = () => {
            if (!r.value) return;
            s.value = !0, r.value.classList.remove("basket-page--collapsed"), r.value.classList.add("basket-page--expanded"), r.value.classList.add("basket-page--enable-transition");
            const f = document.getElementById("basket-overlay");
            f && (f.style.display = "block", setTimeout(() => {
                f.classList.add("basket-overlay--visible"), e()
            }, 100)), we(() => {
                r.value.style.transform = ""
            })
        },
        _ = () => {
            if (s.value = !1, t(), r.value) {
                r.value.classList.remove("basket-page--expanded"), r.value.classList.add("basket-page--collapsed"), r.value.classList.add("basket-page--enable-transition"), r.value.style.transform = "";
                const f = document.getElementById("basket-overlay");
                f && (f.classList.remove("basket-overlay--visible"), setTimeout(() => {
                    f.style.display = "none"
                }, 300))
            }
        },
        m = f => {
            var $;
            !(($ = n.value) != null && $.contains(f.target)) && i.value && s.value || requestAnimationFrame(() => {
                var q, z;
                if (!r.value || !n.value || !a.value || p === null || u === null) return;
                const k = f.clientY - u,
                    S = p + k;
                if (s.value) {
                    const A = window.innerHeight,
                        W = (q = n.value) == null ? void 0 : q.getBoundingClientRect().height,
                        oe = (z = a.value) == null ? void 0 : z.getBoundingClientRect().height,
                        U = W + oe;
                    if (S < A - U) return
                }
                if (r.value) {
                    if (r.value.classList.contains("basket-page--enable-transition")) return;
                    r.value.style.transform = `translateY(${S}px)`
                }
            })
        },
        x = f => {
            var S, q;
            if (!r.value || !n.value || !a.value || !((S = n.value) == null ? void 0 : S.contains(f.target)) && i.value && s.value) return;
            (q = r.value) == null || q.classList.remove("basket-page--enable-transition");
            const $ = getComputedStyle(r.value).transform;
            p = be($);
            const k = n.value.getBoundingClientRect().height;
            !s.value && p < window.innerHeight - k || (u = f.clientY, a.value && a.value.scrollTo(0, 200), document.addEventListener("pointermove", m, {
                passive: !1
            }))
        },
        O = f => {
            if (document.removeEventListener("pointermove", m), !r.value || !u || !o || !n.value) return;
            const v = f.clientY > u ? "down" : "up",
                $ = Math.abs(f.clientY - u);
            if (s.value && v === "up") {
                u = null;
                return
            }
            if (be(getComputedStyle(r.value).transform) < 100) {
                I({
                    targets: r.value,
                    translateY: 0,
                    easing: "easeOutElastic(1, .6)",
                    duration: 500
                }), s.value = !0, u = null;
                return
            }
            if ($ > 5 && $ < (s.value ? 100 : 50)) {
                v === "down" ? C() : _();
                return
            }
            v === "down" ? _() : C()
        },
        P = f => {
            if (s.value === !1) return;
            const v = f.target.scrollTop;
            if (!i.value || v === 0) return;
            const $ = d < 150 ? d : 150;
            v < $ ? requestAnimationFrame(() => {
                s.value && (r.value && r.value.classList.contains("basket-page--enable-transition") && r.value.classList.remove("basket-page--enable-transition"), r.value && (r.value.style.transform = `translateY(${$-v+100}px)`), v < 50 && _())
            }) : r.value.style.transform = "translateY(100px)"
        };
    return de(() => {
        we(() => {
            r.value && a.value && (o = be(getComputedStyle(r.value).transform), a.value.scrollTo(0, 200), d = a.value.scrollTop);
            let f = fe(() => l.totalProductsQty, () => {
                s.value || a.value.scrollTo(0, 200), i.value = a.value.scrollTop >= 120, a.value && (d = a.value.scrollTop)
            }, {
                immediate: !0
            });
            const v = document.getElementById("basket-overlay");
            v && v.addEventListener("click", _), h.push(f)
        })
    }), Pe(() => {
        h.forEach(v => v()), h = [];
        const f = document.getElementById("basket-overlay");
        f && f.removeEventListener("click", _)
    }), {
        rootElRef: r,
        contentElRef: a,
        headerElRef: n,
        handlePageMouseDown: x,
        handlePageMouseUp: O,
        handleContentScroll: P,
        allowContentScroll: i,
        expandPage: C,
        collapsePage: _,
        pageExpanded: s
    }
}
const cn = "/assets/ordering1-f2857735-v6.svg",
    dn = "/assets/ordering2-a69da089-v6.svg",
    fn = "/assets/ordering3-ddf046ba-v6.svg";
const vn = {},
    pn = {
        class: "lds-ripple"
    },
    gn = c("div", null, null, -1),
    hn = c("div", null, null, -1),
    mn = [gn, hn];

function yn(e, t) {
    return g(), y("div", pn, mn)
}
const _n = At(vn, [
        ["render", yn]
    ]),
    bn = ["required", "placeholder"],
    tt = re({
        __name: "TextFieldType",
        props: {
            params: null,
            modelValue: null,
            placeholder: null,
            required: {
                type: Boolean
            },
            outlineError: {
                type: Boolean
            },
            invalid: {
                type: Boolean
            },
            orderData: null
        },
        emits: ["update:modelValue"],
        setup(e, {
            emit: t
        }) {
            const r = e,
                n = F({
                    get: () => r.modelValue,
                    set: a => t("update:modelValue", a)
                });
            return (a, s) => X((g(), y("input", {
                type: "text",
                required: e.required,
                placeholder: e.placeholder,
                "onUpdate:modelValue": s[0] || (s[0] = i => ce(n) ? n.value = i : null),
                class: ae({
                    ["outline-error"]: e.outlineError,
                    invalid: e.invalid
                })
            }, null, 10, bn)), [
                [he, b(n)]
            ])
        }
    });

function wn(e) {
    const t = document.createElement("style");
    t.innerHTML = e, document.head.appendChild(t)
}
const kn = ["required"],
    Pn = re({
        __name: "PhoneFieldType",
        props: {
            params: null,
            modelValue: null,
            placeholder: null,
            required: {
                type: Boolean
            },
            outlineError: {
                type: Boolean
            },
            invalid: {
                type: Boolean
            },
            orderData: null
        },
        emits: ["update:modelValue"],
        setup(e, {
            emit: t
        }) {
            const r = e,
                n = Q(),
                a = ee(),
                s = F({
                    get: () => r.modelValue,
                    set: i => t("update:modelValue", i)
                });
            return fe(n, async i => {
                if (i) {
                    if (!window.intlTelInputLibLoaded) {
                        window.intlTelInputLibLoaded = !0;
                        const l = await Ze(() => Promise.resolve({}), ["assets/intlTelInput-49b2a324-v6.css"]);
                        wn(l.default), window.intlTelInput = (await Ze(() =>
                            import ("./index-b15ff527-v6.js").then(o => o.i), [])).default
                    }
                    window.intlTelInput(i, {
                        separateDialCode: !0,
                        initialCountry: a.restaurant.menuCountryCode,
                        utilsScript: "/utils.js"
                    })
                }
            }), (i, l) => X((g(), y("input", {
                ref_key: "telInputRef",
                ref: n,
                type: "text",
                "onUpdate:modelValue": l[0] || (l[0] = o => ce(s) ? s.value = o : null),
                required: e.required,
                class: ae({
                    ["outline-error"]: e.outlineError,
                    invalid: e.invalid
                })
            }, null, 10, kn)), [
                [he, b(s)]
            ])
        }
    }),
    xn = ["required", "placeholder"],
    Sn = re({
        __name: "EmailFieldType",
        props: {
            params: null,
            modelValue: null,
            placeholder: null,
            required: {
                type: Boolean
            },
            outlineError: {
                type: Boolean
            },
            invalid: {
                type: Boolean
            },
            orderData: null
        },
        emits: ["update:modelValue"],
        setup(e, {
            emit: t
        }) {
            const r = e,
                n = F({
                    get: () => r.modelValue,
                    set: a => t("update:modelValue", a)
                });
            return (a, s) => X((g(), y("input", {
                type: "email",
                required: e.required,
                placeholder: e.placeholder,
                "onUpdate:modelValue": s[0] || (s[0] = i => ce(n) ? n.value = i : null),
                class: ae({
                    ["outline-error"]: e.outlineError,
                    invalid: e.invalid
                })
            }, null, 10, xn)), [
                [he, b(n)]
            ])
        }
    }),
    Cn = ["required", "placeholder"],
    En = ["required"],
    Tn = {
        value: void 0
    },
    $n = ["value"],
    Bn = re({
        __name: "ChoiceFieldType",
        props: {
            params: null,
            modelValue: null,
            placeholder: null,
            required: {
                type: Boolean
            },
            outlineError: {
                type: Boolean
            },
            invalid: {
                type: Boolean
            },
            orderData: null
        },
        emits: ["update:modelValue"],
        setup(e, {
            emit: t
        }) {
            const r = e,
                n = F({
                    get: () => r.modelValue,
                    set: a => t("update:modelValue", a)
                });
            return (a, s) => e.params.hideChoices ? X((g(), y("input", {
                key: 0,
                type: "text",
                required: e.required,
                placeholder: e.placeholder,
                "onUpdate:modelValue": s[0] || (s[0] = i => ce(n) ? n.value = i : null),
                class: ae({
                    ["outline-error"]: e.outlineError,
                    invalid: e.invalid
                })
            }, null, 10, Cn)), [
                [he, b(n)]
            ]) : X((g(), y("select", {
                key: 1,
                required: e.required,
                "onUpdate:modelValue": s[1] || (s[1] = i => ce(n) ? n.value = i : null),
                class: ae({
                    ["outline-error"]: e.outlineError,
                    invalid: e.invalid
                })
            }, [c("option", Tn, B(e.placeholder), 1), (g(!0), y(j, null, H(e.params.choices, i => (g(), y("option", {
                value: i
            }, B(i), 9, $n))), 256))], 10, En)), [
                [nt, b(n)]
            ])
        }
    }),
    Mn = {
        style: {
            display: "flex",
            gap: "10px",
            "align-items": "center"
        }
    },
    On = c("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "16",
        height: "16",
        fill: "currentColor",
        class: "bi bi-clock",
        viewBox: "0 0 16 16"
    }, [c("path", {
        d: "M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"
    }), c("path", {
        d: "M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"
    })], -1),
    In = ["required"],
    Dn = {
        value: void 0
    },
    Vn = ["value"],
    Ln = re({
        __name: "OrderWhenFieldType",
        props: {
            params: null,
            modelValue: null,
            placeholder: null,
            required: {
                type: Boolean
            },
            outlineError: {
                type: Boolean
            },
            invalid: {
                type: Boolean
            },
            orderData: null
        },
        emits: ["update:modelValue"],
        setup(e, {
            emit: t
        }) {
            const r = e,
                n = Q([]),
                a = ee(),
                s = F({
                    get: () => r.modelValue,
                    set: i => t("update:modelValue", i)
                });
            return de(async () => {
                n.value = await We(a.restaurant.slug, r.orderData.type)
            }), fe(() => r.orderData.type, async i => {
                n.value = await We(a.restaurant.slug, i)
            }), (i, l) => (g(), y("div", Mn, [On, X(c("select", {
                "onUpdate:modelValue": l[0] || (l[0] = o => ce(s) ? s.value = o : null),
                required: e.required,
                class: ae({
                    ["outline-error"]: e.outlineError,
                    invalid: e.invalid
                })
            }, [c("option", Dn, B(i.$t("translation_site.orders.when_ready")), 1), (g(!0), y(j, null, H(n.value, o => (g(), y("option", {
                value: o.value
            }, B(o.tomorrow ? i.$t("translation_mobile.orders.tomorrow") + " " : "") + B(o.label), 9, Vn))), 256))], 10, In), [
                [nt, b(s)]
            ])]))
        }
    }),
    An = c("div", {
        id: "basket-overlay",
        class: "page modal-window-page basket-overlay",
        style: {
            display: "none",
            "z-index": "var(--ik-basket-overlay-z-index)"
        }
    }, null, -1),
    qn = {
        key: 0
    },
    Rn = {
        key: 1
    },
    Fn = c("div", {
        style: {
            "flex-grow": "1"
        }
    }, null, -1),
    Un = {
        key: 2,
        class: "basket-page__header__ordering-icon basket-page__header__ordering-icon--dinein"
    },
    Nn = ["href"],
    jn = {
        key: 3,
        class: "basket-page__header__ordering-icon basket-page__header__ordering-icon--takeout"
    },
    Qn = ["href"],
    zn = {
        key: 4,
        class: "basket-page__header__ordering-icon basket-page__header__ordering-icon--delivery"
    },
    Hn = ["href"],
    Yn = {
        class: "basket-page__content__delivery-type-tabs"
    },
    Wn = ["onClick"],
    Zn = {
        key: 0,
        class: "basket-page__content__products"
    },
    Jn = {
        style: {
            width: "100%",
            "max-width": "100%"
        }
    },
    Kn = {
        class: "basket-page__content__products__item"
    },
    Gn = {
        class: "no-wrap"
    },
    Xn = {
        class: "basket-page__content__products__item__name"
    },
    ea = {
        class: "basket-page__content__products__item__addons"
    },
    ta = {
        class: "basket-page__content__products__item__addons__addon"
    },
    ra = {
        class: "basket-page__content__products__item__addons__addon"
    },
    na = {
        style: {
            display: "flex",
            position: "relative",
            top: "-7px",
            padding: "0 5px"
        }
    },
    aa = ["onClick"],
    oa = c("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "currentColor",
        class: "bi bi-plus-lg",
        viewBox: "0 0 16 16"
    }, [c("path", {
        "fill-rule": "evenodd",
        d: "M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
    })], -1),
    sa = [oa],
    ia = ["onClick"],
    la = c("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "currentColor",
        class: "bi bi-dash-lg",
        viewBox: "0 0 16 16"
    }, [c("path", {
        "fill-rule": "evenodd",
        d: "M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
    })], -1),
    ua = [la],
    ca = {
        class: "no-wrap",
        style: {
            "text-align": "right"
        }
    },
    da = {
        class: "basket-page__content__total"
    },
    fa = c("div", {
        style: {
            "flex-grow": "1"
        }
    }, null, -1),
    va = {
        key: 1,
        class: "basket-page__content__extra_price"
    },
    pa = {
        key: 2,
        style: {
            color: "var(--ik-error-color)",
            margin: "10px 0",
            "font-size": "0.9rem"
        }
    },
    ga = {
        class: "basket-page__content__notes"
    },
    ha = ["placeholder"],
    ma = {
        class: "basket-page__content__delivery-content__table"
    },
    ya = {
        colspan: "2"
    },
    _a = {
        key: 3,
        style: {
            color: "#a79619",
            "font-size": "0.8rem",
            margin: "0"
        }
    },
    ba = {
        key: 4,
        style: {
            "text-align": "center",
            "margin-top": "10px"
        }
    },
    wa = {
        key: 0,
        style: {
            color: "var(--ik-error-color)",
            margin: "10px 0",
            "font-size": "0.9rem"
        }
    },
    ka = {
        class: "basket-page__content__terms"
    },
    Pa = {
        href: "https://instalacarte.com/page/privacy-policy",
        target: "_blank"
    },
    xa = {
        key: 5,
        class: "basket-page__powered-by"
    },
    Sa = ["href"],
    Ca = c("span", {
        style: {
            "font-size": "1.5rem"
        }
    }, "®", -1),
    Ea = {
        key: 1,
        style: {
            margin: "40px auto",
            display: "flex",
            "flex-direction": "column",
            "align-items": "center"
        }
    },
    Ta = c("div", null, [c("img", {
        src: ln,
        alt: "Empty bag"
    })], -1),
    $a = {
        style: {
            "font-size": "1.5rem",
            "margin-top": "20px"
        }
    },
    Ba = {
        key: 0,
        class: "basket-order-button-container"
    },
    Ma = ["disabled"],
    Wa = re({
        __name: "Basket",
        props: {
            isStandaloneProductPage: {
                type: Boolean,
                default: !1
            }
        },
        setup(e) {
            const t = e,
                r = Q(!1),
                {
                    t: n
                } = Lt(),
                {
                    formatPrice: a
                } = Ct(),
                s = Q(!1),
                i = Te(),
                l = ee(),
                o = Dt(),
                p = "https://instalacarte.com",
                {
                    generateCategoryUrl: u,
                    generateSubCategoryUrl: d
                } = St(),
                h = Q({}),
                C = Q(!1);
            xe();
            const {
                hasEnoughQuota: _,
                DISABLE_POWERED_BY_BANNER: m
            } = wr(), x = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, O = () => {
                C.value = !0
            }, P = () => {
                C.value = !1
            }, {
                rootElRef: f,
                contentElRef: v,
                headerElRef: $,
                handlePageMouseDown: k,
                handlePageMouseUp: S,
                handleContentScroll: q,
                allowContentScroll: z,
                collapsePage: A
            } = un({
                onExpanded: O,
                onCollapsed: P
            }), W = () => l.restaurant.orderTypes.length === 0 ? "" : l.restaurant.orderTypes[0].orderTypeSlug, U = (() => {
                if (xt()) return {};
                const E = window.localStorage.getItem("ik-prefilled-fields"),
                    M = window.localStorage.getItem("ik-prefilled-fields-expire");
                return M && Date.now() > JSON.parse(M) ? {} : E ? JSON.parse(E) : {}
            })(), se = () => ({
                entries: [],
                name: "",
                address: "",
                email: "",
                phone: "",
                phoneCode: "",
                note: "",
                table: "",
                type: W(),
                when: "",
                price: 0,
                extraPrice: 0,
                fields: U
            }), D = Q(se()), ve = F(() => {
                const E = l.restaurant.orderTypes.find(M => M.orderTypeSlug === D.value.type);
                return E ? E.fields.map(M => ({ ...M,
                    outlineError: !1
                })) : []
            }), ne = F(() => ve.value.filter(E => !U.hasOwnProperty(E.id))), Z = F(() => D.value.type && l.restaurant.orderTypes.find(E => E.orderTypeSlug === D.value.type) || null), J = F(() => Z.value && Z.value.extraPrice || 0), le = F(() => !(D.value.type === "" || Object.keys(_e.value).length !== 0 || N.value && N.value > 0 && i.totalPrice < N.value)), me = F(() => i.totalPrice + J.value), ie = F(() => N.value && N.value > 0 && i.totalPrice < N.value ? n("translation_site.orders.min_order_price") + ": " + N.value.toLocaleString() : Object.keys(_e.value).length !== 0 ? n("translation_site.orders.fill_all_required_fields") : null);
            de(async () => {
                r.value = !0, window.location.hash === "#success-payment" && (D.value = se(), o.showModal(n("translation_site.thank.you"), n("Order payed successfully"), "success"), we(() => {
                    i.clearBasket()
                }), window.location.hash = "#"), window.location.hash === "#failed-payment" && (o.showModal(n("Error"), n("Payment failed"), "error"), window.location.hash = "#")
            });
            const N = F(() => {
                    const E = l.restaurant.orderTypes.find(M => M.orderTypeSlug === D.value.type);
                    return E ? E.minOrderPrice : null
                }),
                ye = E => {
                    i.increaseProductQty(E)
                },
                pe = E => {
                    i.decreaseProductQty(E)
                },
                $e = async () => {
                    if (D.value.type === "") {
                        o.showModal(n("Can not place order"), "Order type not selected", "error"), s.value = !1;
                        return
                    }
                    if (s.value = !0, Object.keys(_e.value).forEach(L => {
                            const V = ve.value.find(Tt => Tt.id === parseInt(L));
                            V && (h.value[V.id] = !0, setTimeout(() => {
                                h.value[V.id] = !1
                            }, 1e3))
                        }), !le.value) {
                        s.value = !1;
                        return
                    }
                    if (N.value && N.value > 0 && i.totalPrice < N.value) {
                        o.showModal(n("Can not place order"), n("translation_site.orders.min_order_price"), "error", !0), s.value = !1;
                        return
                    }
                    if (D.value.type === "takeout") {
                        const L = window.document.querySelector(".iti__selected-dial-code");
                        if (!L || !L.textContent) {
                            alert("Error"), console.error("Can not detect phone code");
                            return
                        }
                        D.value.phoneCode = L.textContent
                    }
                    const E = [];
                    Object.values(i.products).forEach(L => {
                        E.push({
                            name: L.product.name,
                            count: L.qty,
                            price: L.price,
                            product: L.product.id,
                            addons: L.addons.map(V => ({
                                id: V.id,
                                name: V.name,
                                price: V.price,
                                count: 1,
                                hash: V.hash
                            })),
                            choices: L.choices.map(V => ({
                                id: V.id,
                                name: V.name,
                                price: V.price,
                                count: 1,
                                hash: V.hash
                            })),
                            hash: L.product.hash
                        })
                    });
                    const M = { ...D.value,
                            entries: E,
                            price: i.totalPrice,
                            extraPrice: J.value
                        },
                        T = await Vt(M, l.restaurant.slug);
                    if (s.value = !1, l.restaurant.stripePaymentsActive) {
                        window.location.href = `${p}/stripe/pay/${T.orderId}`;
                        return
                    }
                    if (A(), D.value = se(), i.clearBasket(), o.showModal(n("translation_site.thank.you"), n("translation_site.order.was.placed", {
                            orderPlacedId: T.orderNumber
                        }), "success", !0), l.activeProduct)
                        if (t.isStandaloneProductPage) {
                            const L = l.products[0];
                            if (!L) return;
                            let V = "";
                            if (L.parent_category ? V = d(L.category) : L.category && (V = u(L.category)), V) {
                                if (V.includes("404.html")) return;
                                setTimeout(() => {
                                    window.location.href = V
                                }, 2e3)
                            }
                        } else l.activeProduct = null
                },
                _e = F(() => {
                    const E = {};
                    return ve.value.forEach(M => {
                        const T = D.value.fields[M.id];
                        if (M.isRequired && !T) {
                            E[M.id] = "Required field";
                            return
                        }
                        if (!(!M.isRequired && !T)) switch (M.type) {
                            case "choice":
                                M.params.choices && (M.params.choices.map(V => V.toLowerCase()).includes(T.toLowerCase()) || (E[M.id] = "Invalid choice provided"));
                                break;
                            case "email":
                                x.test(T) || (E[M.id] = "Invalid email");
                                break;
                            case "phone":
                                /^\d+$/.test(T) || (E[M.id] = "Invalid phone");
                                break
                        }
                    }), E
                }),
                Et = E => {
                    switch (E) {
                        case "text":
                            return tt;
                        case "phone":
                            return Pn;
                        case "email":
                            return Sn;
                        case "choice":
                            return Bn;
                        case "order-when":
                            return Ln;
                        default:
                            return tt
                    }
                };
            return (E, M) => (g(), y(j, null, [r.value ? (g(), ue(Be, {
                key: 0,
                to: "#pages"
            }, [An])) : R("", !0), r.value ? (g(), ue(Be, {
                key: 1,
                to: "#pages"
            }, [c("section", {
                class: "page page--no-shadow basket-page basket-page--collapsed",
                ref_key: "rootElRef",
                ref: f,
                onPointerdown: M[2] || (M[2] = He((...T) => b(k) && b(k)(...T), ["stop"])),
                onPointerup: M[3] || (M[3] = (...T) => b(S) && b(S)(...T))
            }, [c("div", {
                ref_key: "headerElRef",
                ref: $,
                class: "basket-page__header"
            }, [b(i).totalProductsQty ? (g(), y("div", qn, B(E.$t("translation_site.basket_header_text", {
                qty: b(i).totalProductsQty,
                sum: b(a)(b(i).totalPrice)
            })), 1)) : (g(), y("div", Rn, B(E.$t("translation_site.menu.order_button")), 1)), Fn, D.value.type === "dine in" ? (g(), y("svg", Un, [c("use", {
                href: b(cn) + "#icon"
            }, null, 8, Nn)])) : R("", !0), D.value.type === "takeout" ? (g(), y("svg", jn, [c("use", {
                href: b(dn) + "#icon"
            }, null, 8, Qn)])) : R("", !0), D.value.type === "delivery" ? (g(), y("svg", zn, [c("use", {
                href: b(fn) + "#icon"
            }, null, 8, Hn)])) : R("", !0)], 512), c("div", {
                ref_key: "contentElRef",
                ref: v,
                class: "basket-page__content",
                onScrollPassive: M[1] || (M[1] = (...T) => b(q) && b(q)(...T)),
                style: Me({
                    touchAction: b(z) ? "initial" : "none"
                })
            }, [b(i).totalProductsQty > 0 ? (g(), y(j, {
                key: 0
            }, [c("div", Yn, [(g(!0), y(j, null, H(b(l).restaurant.orderTypes, T => (g(), y("div", {
                key: T.id,
                class: ae({
                    active: D.value.type === T.orderTypeSlug
                }),
                onClick: He(L => D.value.type = T.orderTypeSlug, ["stop"])
            }, B(T.orderTypeName), 11, Wn))), 128))]), b(i).totalProductsQty > 0 ? (g(), y("div", Zn, [c("table", Jn, [c("tbody", null, [(g(!0), y(j, null, H(b(i).products, (T, L) => (g(), y("tr", Kn, [c("td", Gn, B(T.qty) + " x", 1), c("td", null, [c("div", Xn, B(T.product.name), 1), c("div", ea, [(g(!0), y(j, null, H(T.choices, V => (g(), y("div", ta, "+ " + B(V.name), 1))), 256)), (g(!0), y(j, null, H(T.addons, V => (g(), y("div", ra, "+ " + B(V.name), 1))), 256))])]), c("td", null, [c("div", na, [c("button", {
                onClick: V => ye(L),
                class: "btn btn--icon btn--icon"
            }, sa, 8, aa), c("button", {
                onClick: V => pe(L),
                class: "btn btn--icon btn--icon"
            }, ua, 8, ia)])]), c("td", ca, B(b(a)(T.priceWithAddons * T.qty)), 1)]))), 256))])])])) : R("", !0), c("div", da, [c("div", null, B(E.$t("translation_account.total")) + ":", 1), fa, c("div", null, [c("div", null, B(b(a)(b(me))), 1)])]), b(J) && b(Z) ? (g(), y("div", va, "+ " + B(b(Z).orderTypeName) + " " + B(E.$t("translation_site.basket.fee")) + " " + B(b(a)(b(J))), 1)) : R("", !0), b(ie) ? (g(), y("div", pa, B(b(ie)), 1)) : R("", !0), c("div", ga, [X(c("textarea", {
                placeholder: E.$t("translation_site.orders.add_note") + "...",
                "onUpdate:modelValue": M[0] || (M[0] = T => D.value.note = T),
                style: Me({
                    touchAction: b(z) ? "initial" : "none"
                })
            }, null, 12, ha), [
                [he, D.value.note]
            ])]), c("div", {
                class: "basket-page__content__delivery-content",
                style: Me({
                    borderTopLeftRadius: D.value.type === "dine in" ? 0 : "4px"
                })
            }, [c("div", null, [c("table", ma, [c("tbody", null, [(g(!0), y(j, null, H(b(ne), T => (g(), y("tr", {
                key: T.id
            }, [c("td", ya, [(g(), ue(It(Et(T.type)), {
                params: T.params,
                modelValue: D.value.fields[T.id],
                "onUpdate:modelValue": L => D.value.fields[T.id] = L,
                placeholder: T.name + "...",
                "data-field-id": T.id,
                required: T.isRequired,
                "outline-error": h.value[T.id] || !1,
                invalid: !!b(_e)[T.id],
                "order-data": D.value
            }, null, 8, ["params", "modelValue", "onUpdate:modelValue", "placeholder", "data-field-id", "required", "outline-error", "invalid", "order-data"]))])]))), 128))])])])], 4), b(le) ? R("", !0) : (g(), y("p", _a, "* " + B(E.$t("translation_site.fill.all.required.fields")), 1)), b(i).totalProductsQty > 0 ? (g(), y("div", ba, [b(ie) ? (g(), y("div", wa, B(b(ie)), 1)) : R("", !0)])) : R("", !0), c("div", ka, [Oe(B(E.$t("translation_site.orders.i_agree_with")) + " ", 1), c("a", Pa, B(E.$t("translation_site.orders.terms")), 1)]), b(_)(b(m)) ? R("", !0) : (g(), y("div", xa, [c("span", null, [Oe("powered by "), c("a", {
                href: b(p),
                target: "_blank"
            }, "instalacarte.com", 8, Sa)]), Oe(), Ca]))], 64)) : (g(), y("div", Ea, [Ta, c("div", $a, B(E.$t("translation_site.basket.nothing_to_order")), 1)]))], 36)], 544)])) : R("", !0), r.value ? (g(), ue(Be, {
                key: 2,
                to: "#pages"
            }, [at(rt, {
                name: "order_button"
            }, {
                default: ot(() => [C.value ? (g(), y("div", Ba, [s.value ? (g(), ue(_n, {
                    key: 1
                })) : (g(), y("button", {
                    key: 0,
                    class: ae(["btn btn--brand basket-page__content__order-btn", {
                        "basket-page__content__order-btn--disabled": !b(le)
                    }]),
                    onClick: $e,
                    disabled: s.value
                }, B(b(l).restaurant.stripePaymentsActive ? E.$t("Pay") : E.$t("translation_site.menu.order_button")), 11, Ma))])) : R("", !0)]),
                _: 1
            })])) : R("", !0)], 64))
        }
    });

function Za() {
    const e = ee(),
        t = Te();
    let r = [];
    const n = () => {
        const a = localStorage.getItem(`basket-${e.restaurant.id}`);
        if (a) {
            const s = JSON.parse(a);
            t.$patch(s)
        }
    };
    return de(() => {
        n();
        let a = t.$subscribe((s, i) => {
            localStorage.setItem(`basket-${e.restaurant.id}`, JSON.stringify(i))
        });
        r.push(a), a = fe(() => t.favorites.length, s => {
            if (s === 0 && e.activeCategory === -1) {
                for (const i of e.categories)
                    if (i.id > 0) {
                        e.activeCategory = i.id;
                        break
                    }
            }
        }), r.push(a)
    }), Pe(() => {
        r.forEach(a => a()), r = []
    }), {
        restoreBasket: n
    }
}
export {
    Ya as _, Te as a, ja as b, Za as c, St as d, I as e, Ct as f, hr as g, Na as h, Qa as i, wr as j, Ua as k, za as l, Wa as m, xt as n, Ha as o, mr as u
};