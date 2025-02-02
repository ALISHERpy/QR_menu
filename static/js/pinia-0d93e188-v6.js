import {
    x as k,
    y as D,
    z as Y,
    A as Z,
    C as J,
    D as R,
    E as O,
    F as z,
    G as $,
    H as A,
    I as T,
    J as tt,
    K as et,
    L as st,
    w as nt,
    M as ot
} from "./runtime-core.esm-bundler-e1b83cdf-v6.js";
var ct = !1;
/*!
 * pinia v2.0.28
 * (c) 2022 Eduardo San Martin Morote
 * @license MIT
 */
let B;
const L = t => B = t,
    K = Symbol();

function C(t) {
    return t && typeof t == "object" && Object.prototype.toString.call(t) === "[object Object]" && typeof t.toJSON != "function"
}
var I;
(function(t) {
    t.direct = "direct", t.patchObject = "patch object", t.patchFunction = "patch function"
})(I || (I = {}));

function lt() {
    const t = J(!0),
        n = t.run(() => D({}));
    let s = [],
        e = [];
    const c = k({
        install(u) {
            L(c), c._a = u, u.provide(K, c), u.config.globalProperties.$pinia = c, e.forEach(a => s.push(a)), e = []
        },
        use(u) {
            return !this._a && !ct ? e.push(u) : s.push(u), this
        },
        _p: s,
        _a: null,
        _e: t,
        _s: new Map,
        state: n
    });
    return c
}
const M = () => {};

function V(t, n, s, e = M) {
    t.push(n);
    const c = () => {
        const u = t.indexOf(n);
        u > -1 && (t.splice(u, 1), e())
    };
    return !s && T() && tt(c), c
}

function j(t, ...n) {
    t.slice().forEach(s => {
        s(...n)
    })
}

function x(t, n) {
    t instanceof Map && n instanceof Map && n.forEach((s, e) => t.set(e, s)), t instanceof Set && n instanceof Set && n.forEach(t.add, t);
    for (const s in n) {
        if (!n.hasOwnProperty(s)) continue;
        const e = n[s],
            c = t[s];
        C(c) && C(e) && t.hasOwnProperty(s) && !R(e) && !O(e) ? t[s] = x(c, e) : t[s] = e
    }
    return t
}
const rt = Symbol();

function ut(t) {
    return !C(t) || !t.hasOwnProperty(rt)
}
const {
    assign: d
} = Object;

function ft(t) {
    return !!(R(t) && t.effect)
}

function at(t, n, s, e) {
    const {
        state: c,
        actions: u,
        getters: a
    } = n, f = s.state.value[t];
    let m;

    function h() {
        f || (s.state.value[t] = c ? c() : {});
        const b = et(s.state.value[t]);
        return d(b, u, Object.keys(a || {}).reduce((y, v) => (y[v] = k(st(() => {
            L(s);
            const p = s._s.get(t);
            return a[v].call(p, p)
        })), y), {}))
    }
    return m = N(t, h, n, s, e, !0), m.$reset = function() {
        const y = c ? c() : {};
        this.$patch(v => {
            d(v, y)
        })
    }, m
}

function N(t, n, s = {}, e, c, u) {
    let a;
    const f = d({
            actions: {}
        }, s),
        m = {
            deep: !0
        };
    let h, b, y = k([]),
        v = k([]),
        p;
    const _ = e.state.value[t];
    !u && !_ && (e.state.value[t] = {}), D({});
    let F;

    function H(r) {
        let o;
        h = b = !1, typeof r == "function" ? (r(e.state.value[t]), o = {
            type: I.patchFunction,
            storeId: t,
            events: p
        }) : (x(e.state.value[t], r), o = {
            type: I.patchObject,
            payload: r,
            storeId: t,
            events: p
        });
        const S = F = Symbol();
        $().then(() => {
            F === S && (h = !0)
        }), b = !0, j(y, o, e.state.value[t])
    }
    const W = M;

    function q() {
        a.stop(), y = [], v = [], e._s.delete(t)
    }

    function G(r, o) {
        return function() {
            L(e);
            const S = Array.from(arguments),
                g = [],
                w = [];

            function U(i) {
                g.push(i)
            }

            function X(i) {
                w.push(i)
            }
            j(v, {
                args: S,
                name: r,
                store: l,
                after: U,
                onError: X
            });
            let E;
            try {
                E = o.apply(this && this.$id === t ? this : l, S)
            } catch (i) {
                throw j(w, i), i
            }
            return E instanceof Promise ? E.then(i => (j(g, i), i)).catch(i => (j(w, i), Promise.reject(i))) : (j(g, E), E)
        }
    }
    const Q = {
            _p: e,
            $id: t,
            $onAction: V.bind(null, v),
            $patch: H,
            $reset: W,
            $subscribe(r, o = {}) {
                const S = V(y, r, o.detached, () => g()),
                    g = a.run(() => Y(() => e.state.value[t], w => {
                        (o.flush === "sync" ? b : h) && r({
                            storeId: t,
                            type: I.direct,
                            events: p
                        }, w)
                    }, d({}, m, o)));
                return S
            },
            $dispose: q
        },
        l = Z(Q);
    e._s.set(t, l);
    const P = e._e.run(() => (a = J(), a.run(() => n())));
    for (const r in P) {
        const o = P[r];
        if (R(o) && !ft(o) || O(o)) u || (_ && ut(o) && (R(o) ? o.value = _[r] : x(o, _[r])), e.state.value[t][r] = o);
        else if (typeof o == "function") {
            const S = G(r, o);
            P[r] = S, f.actions[r] = o
        }
    }
    return d(l, P), d(z(l), P), Object.defineProperty(l, "$state", {
        get: () => e.state.value[t],
        set: r => {
            H(o => {
                d(o, r)
            })
        }
    }), e._p.forEach(r => {
        d(l, a.run(() => r({
            store: l,
            app: e._a,
            pinia: e,
            options: f
        })))
    }), _ && u && s.hydrate && s.hydrate(l.$state, _), h = !0, b = !0, l
}

function ht(t, n, s) {
    let e, c;
    const u = typeof n == "function";
    typeof t == "string" ? (e = t, c = u ? s : n) : (c = t, e = t.id);

    function a(f, m) {
        const h = A();
        return f = f || h && nt(K, null), f && L(f), f = B, f._s.has(e) || (u ? N(e, n, c, f) : at(e, c, f)), f._s.get(e)
    }
    return a.$id = e, a
}

function bt(t) {
    {
        t = z(t);
        const n = {};
        for (const s in t) {
            const e = t[s];
            (R(e) || O(e)) && (n[s] = ot(t, s))
        }
        return n
    }
}
export {
    lt as c, ht as d, bt as s
};