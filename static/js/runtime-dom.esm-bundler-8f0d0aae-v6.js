import {
    i as L,
    h as _t,
    B as ut,
    e as H,
    a as Tt,
    t as x,
    c as At,
    b as h,
    f as Nt,
    l as q,
    g as P,
    j as D,
    k as It,
    m as Mt,
    n as wt,
    o as lt,
    p as Lt,
    q as xt,
    s as Dt,
    u as dt,
    v as Pt
} from "./runtime-core.esm-bundler-e1b83cdf-v6.js";
const Ot = "http://www.w3.org/2000/svg",
    T = typeof document < "u" ? document : null,
    J = T && T.createElement("template"),
    $t = {
        insert: (t, e, n) => {
            e.insertBefore(t, n || null)
        },
        remove: t => {
            const e = t.parentNode;
            e && e.removeChild(t)
        },
        createElement: (t, e, n, s) => {
            const i = e ? T.createElementNS(Ot, t) : T.createElement(t, n ? {
                is: n
            } : void 0);
            return t === "select" && s && s.multiple != null && i.setAttribute("multiple", s.multiple), i
        },
        createText: t => T.createTextNode(t),
        createComment: t => T.createComment(t),
        setText: (t, e) => {
            t.nodeValue = e
        },
        setElementText: (t, e) => {
            t.textContent = e
        },
        parentNode: t => t.parentNode,
        nextSibling: t => t.nextSibling,
        querySelector: t => T.querySelector(t),
        setScopeId(t, e) {
            t.setAttribute(e, "")
        },
        insertStaticContent(t, e, n, s, i, o) {
            const a = n ? n.previousSibling : e.lastChild;
            if (i && (i === o || i.nextSibling))
                for (; e.insertBefore(i.cloneNode(!0), n), !(i === o || !(i = i.nextSibling)););
            else {
                J.innerHTML = s ? `<svg>${t}</svg>` : t;
                const c = J.content;
                if (s) {
                    const f = c.firstChild;
                    for (; f.firstChild;) c.appendChild(f.firstChild);
                    c.removeChild(f)
                }
                e.insertBefore(c, n)
            }
            return [a ? a.nextSibling : e.firstChild, n ? n.previousSibling : e.lastChild]
        }
    };

function yt(t, e, n) {
    const s = t._vtc;
    s && (e = (e ? [e, ...s] : [...s]).join(" ")), e == null ? t.removeAttribute("class") : n ? t.setAttribute("class", e) : t.className = e
}

function Bt(t, e, n) {
    const s = t.style,
        i = L(n);
    if (n && !i) {
        for (const o in n) F(s, o, n[o]);
        if (e && !L(e))
            for (const o in e) n[o] == null && F(s, o, "")
    } else {
        const o = s.display;
        i ? e !== n && (s.cssText = n) : e && t.removeAttribute("style"), "_vod" in t && (s.display = o)
    }
}
const Q = /\s*!important$/;

function F(t, e, n) {
    if (h(n)) n.forEach(s => F(t, e, s));
    else if (n == null && (n = ""), e.startsWith("--")) t.setProperty(e, n);
    else {
        const s = Rt(t, e);
        Q.test(n) ? t.setProperty(lt(s), n.replace(Q, ""), "important") : t[s] = n
    }
}
const Y = ["Webkit", "Moz", "ms"],
    $ = {};

function Rt(t, e) {
    const n = $[e];
    if (n) return n;
    let s = Lt(e);
    if (s !== "filter" && s in t) return $[e] = s;
    s = xt(s);
    for (let i = 0; i < Y.length; i++) {
        const o = Y[i] + s;
        if (o in t) return $[e] = o
    }
    return e
}
const Z = "http://www.w3.org/1999/xlink";

function Ft(t, e, n, s, i) {
    if (s && e.startsWith("xlink:")) n == null ? t.removeAttributeNS(Z, e.slice(6, e.length)) : t.setAttributeNS(Z, e, n);
    else {
        const o = Dt(e);
        n == null || o && !dt(n) ? t.removeAttribute(e) : t.setAttribute(e, o ? "" : n)
    }
}

function Ht(t, e, n, s, i, o, a) {
    if (e === "innerHTML" || e === "textContent") {
        s && a(s, i, o), t[e] = n ? ? "";
        return
    }
    if (e === "value" && t.tagName !== "PROGRESS" && !t.tagName.includes("-")) {
        t._value = n;
        const f = n ? ? "";
        (t.value !== f || t.tagName === "OPTION") && (t.value = f), n == null && t.removeAttribute(e);
        return
    }
    let c = !1;
    if (n === "" || n == null) {
        const f = typeof t[e];
        f === "boolean" ? n = dt(n) : n == null && f === "string" ? (n = "", c = !0) : f === "number" && (n = 0, c = !0)
    }
    try {
        t[e] = n
    } catch {}
    c && t.removeAttribute(e)
}

function g(t, e, n, s) {
    t.addEventListener(e, n, s)
}

function qt(t, e, n, s) {
    t.removeEventListener(e, n, s)
}

function Ut(t, e, n, s, i = null) {
    const o = t._vei || (t._vei = {}),
        a = o[e];
    if (s && a) a.value = s;
    else {
        const [c, f] = zt(e);
        if (s) {
            const u = o[e] = jt(s, i);
            g(t, c, u, f)
        } else a && (qt(t, c, a, f), o[e] = void 0)
    }
}
const k = /(?:Once|Passive|Capture)$/;

function zt(t) {
    let e;
    if (k.test(t)) {
        e = {};
        let s;
        for (; s = t.match(k);) t = t.slice(0, t.length - s[0].length), e[s[0].toLowerCase()] = !0
    }
    return [t[2] === ":" ? t.slice(3) : lt(t.slice(2)), e]
}
let y = 0;
const Vt = Promise.resolve(),
    Kt = () => y || (Vt.then(() => y = 0), y = Date.now());

function jt(t, e) {
    const n = s => {
        if (!s._vts) s._vts = Date.now();
        else if (s._vts <= n.attached) return;
        Pt(Wt(s, n.value), e, 5, [s])
    };
    return n.value = t, n.attached = Kt(), n
}

function Wt(t, e) {
    if (h(e)) {
        const n = t.stopImmediatePropagation;
        return t.stopImmediatePropagation = () => {
            n.call(t), t._stopped = !0
        }, e.map(s => i => !i._stopped && s && s(i))
    } else return e
}
const tt = /^on[a-z]/,
    Xt = (t, e, n, s, i = !1, o, a, c, f) => {
        e === "class" ? yt(t, s, i) : e === "style" ? Bt(t, n, s) : It(e) ? Mt(e) || Ut(t, e, n, s, a) : (e[0] === "." ? (e = e.slice(1), !0) : e[0] === "^" ? (e = e.slice(1), !1) : Gt(t, e, s, i)) ? Ht(t, e, s, o, a, c, f) : (e === "true-value" ? t._trueValue = s : e === "false-value" && (t._falseValue = s), Ft(t, e, s, i))
    };

function Gt(t, e, n, s) {
    return s ? !!(e === "innerHTML" || e === "textContent" || e in t && tt.test(e) && wt(n)) : e === "spellcheck" || e === "draggable" || e === "translate" || e === "form" || e === "list" && t.tagName === "INPUT" || e === "type" && t.tagName === "TEXTAREA" || tt.test(e) && L(n) ? !1 : e in t
}
const v = "transition",
    M = "animation",
    pt = (t, {
        slots: e
    }) => _t(ut, Jt(t), e);
pt.displayName = "Transition";
const mt = {
    name: String,
    type: String,
    css: {
        type: Boolean,
        default: !0
    },
    duration: [String, Number, Object],
    enterFromClass: String,
    enterActiveClass: String,
    enterToClass: String,
    appearFromClass: String,
    appearActiveClass: String,
    appearToClass: String,
    leaveFromClass: String,
    leaveActiveClass: String,
    leaveToClass: String
};
pt.props = H({}, ut.props, mt);
const E = (t, e = []) => {
        h(t) ? t.forEach(n => n(...e)) : t && t(...e)
    },
    et = t => t ? h(t) ? t.some(e => e.length > 1) : t.length > 1 : !1;

function Jt(t) {
    const e = {};
    for (const r in t) r in mt || (e[r] = t[r]);
    if (t.css === !1) return e;
    const {
        name: n = "v",
        type: s,
        duration: i,
        enterFromClass: o = `${n}-enter-from`,
        enterActiveClass: a = `${n}-enter-active`,
        enterToClass: c = `${n}-enter-to`,
        appearFromClass: f = o,
        appearActiveClass: u = a,
        appearToClass: l = c,
        leaveFromClass: p = `${n}-leave-from`,
        leaveActiveClass: m = `${n}-leave-active`,
        leaveToClass: A = `${n}-leave-to`
    } = t, N = Qt(i), ht = N && N[0], vt = N && N[1], {
        onBeforeEnter: U,
        onEnter: z,
        onEnterCancelled: V,
        onLeave: K,
        onLeaveCancelled: bt,
        onBeforeAppear: Ct = U,
        onAppear: St = z,
        onAppearCancelled: Et = V
    } = e, O = (r, d, S) => {
        _(r, d ? l : c), _(r, d ? u : a), S && S()
    }, j = (r, d) => {
        r._isLeaving = !1, _(r, p), _(r, A), _(r, m), d && d()
    }, W = r => (d, S) => {
        const X = r ? St : z,
            G = () => O(d, r, S);
        E(X, [d, G]), nt(() => {
            _(d, r ? f : o), b(d, r ? l : c), et(X) || st(d, s, ht, G)
        })
    };
    return H(e, {
        onBeforeEnter(r) {
            E(U, [r]), b(r, o), b(r, a)
        },
        onBeforeAppear(r) {
            E(Ct, [r]), b(r, f), b(r, u)
        },
        onEnter: W(!1),
        onAppear: W(!0),
        onLeave(r, d) {
            r._isLeaving = !0;
            const S = () => j(r, d);
            b(r, p), kt(), b(r, m), nt(() => {
                r._isLeaving && (_(r, p), b(r, A), et(K) || st(r, s, vt, S))
            }), E(K, [r, S])
        },
        onEnterCancelled(r) {
            O(r, !1), E(V, [r])
        },
        onAppearCancelled(r) {
            O(r, !0), E(Et, [r])
        },
        onLeaveCancelled(r) {
            j(r), E(bt, [r])
        }
    })
}

function Qt(t) {
    if (t == null) return null;
    if (Tt(t)) return [B(t.enter), B(t.leave)]; {
        const e = B(t);
        return [e, e]
    }
}

function B(t) {
    return x(t)
}

function b(t, e) {
    e.split(/\s+/).forEach(n => n && t.classList.add(n)), (t._vtc || (t._vtc = new Set)).add(e)
}

function _(t, e) {
    e.split(/\s+/).forEach(s => s && t.classList.remove(s));
    const {
        _vtc: n
    } = t;
    n && (n.delete(e), n.size || (t._vtc = void 0))
}

function nt(t) {
    requestAnimationFrame(() => {
        requestAnimationFrame(t)
    })
}
let Yt = 0;

function st(t, e, n, s) {
    const i = t._endId = ++Yt,
        o = () => {
            i === t._endId && s()
        };
    if (n) return setTimeout(o, n);
    const {
        type: a,
        timeout: c,
        propCount: f
    } = Zt(t, e);
    if (!a) return s();
    const u = a + "end";
    let l = 0;
    const p = () => {
            t.removeEventListener(u, m), o()
        },
        m = A => {
            A.target === t && ++l >= f && p()
        };
    setTimeout(() => {
        l < f && p()
    }, c + 1), t.addEventListener(u, m)
}

function Zt(t, e) {
    const n = window.getComputedStyle(t),
        s = N => (n[N] || "").split(", "),
        i = s(`${v}Delay`),
        o = s(`${v}Duration`),
        a = it(i, o),
        c = s(`${M}Delay`),
        f = s(`${M}Duration`),
        u = it(c, f);
    let l = null,
        p = 0,
        m = 0;
    e === v ? a > 0 && (l = v, p = a, m = o.length) : e === M ? u > 0 && (l = M, p = u, m = f.length) : (p = Math.max(a, u), l = p > 0 ? a > u ? v : M : null, m = l ? l === v ? o.length : f.length : 0);
    const A = l === v && /\b(transform|all)(,|$)/.test(s(`${v}Property`).toString());
    return {
        type: l,
        timeout: p,
        propCount: m,
        hasTransform: A
    }
}

function it(t, e) {
    for (; t.length < e.length;) t = t.concat(t);
    return Math.max(...e.map((n, s) => ot(n) + ot(t[s])))
}

function ot(t) {
    return Number(t.slice(0, -1).replace(",", ".")) * 1e3
}

function kt() {
    return document.body.offsetHeight
}
const C = t => {
    const e = t.props["onUpdate:modelValue"] || !1;
    return h(e) ? n => Nt(e, n) : e
};

function te(t) {
    t.target.composing = !0
}

function rt(t) {
    const e = t.target;
    e.composing && (e.composing = !1, e.dispatchEvent(new Event("input")))
}
const ae = {
        created(t, {
            modifiers: {
                lazy: e,
                trim: n,
                number: s
            }
        }, i) {
            t._assign = C(i);
            const o = s || i.props && i.props.type === "number";
            g(t, e ? "change" : "input", a => {
                if (a.target.composing) return;
                let c = t.value;
                n && (c = c.trim()), o && (c = x(c)), t._assign(c)
            }), n && g(t, "change", () => {
                t.value = t.value.trim()
            }), e || (g(t, "compositionstart", te), g(t, "compositionend", rt), g(t, "change", rt))
        },
        mounted(t, {
            value: e
        }) {
            t.value = e ? ? ""
        },
        beforeUpdate(t, {
            value: e,
            modifiers: {
                lazy: n,
                trim: s,
                number: i
            }
        }, o) {
            if (t._assign = C(o), t.composing || document.activeElement === t && t.type !== "range" && (n || s && t.value.trim() === e || (i || t.type === "number") && x(t.value) === e)) return;
            const a = e ? ? "";
            t.value !== a && (t.value = a)
        }
    },
    ce = {
        deep: !0,
        created(t, e, n) {
            t._assign = C(n), g(t, "change", () => {
                const s = t._modelValue,
                    i = I(t),
                    o = t.checked,
                    a = t._assign;
                if (h(s)) {
                    const c = q(s, i),
                        f = c !== -1;
                    if (o && !f) a(s.concat(i));
                    else if (!o && f) {
                        const u = [...s];
                        u.splice(c, 1), a(u)
                    }
                } else if (P(s)) {
                    const c = new Set(s);
                    o ? c.add(i) : c.delete(i), a(c)
                } else a(gt(t, o))
            })
        },
        mounted: at,
        beforeUpdate(t, e, n) {
            t._assign = C(n), at(t, e, n)
        }
    };

function at(t, {
    value: e,
    oldValue: n
}, s) {
    t._modelValue = e, h(e) ? t.checked = q(e, s.props.value) > -1 : P(e) ? t.checked = e.has(s.props.value) : e !== n && (t.checked = D(e, gt(t, !0)))
}
const fe = {
        created(t, {
            value: e
        }, n) {
            t.checked = D(e, n.props.value), t._assign = C(n), g(t, "change", () => {
                t._assign(I(t))
            })
        },
        beforeUpdate(t, {
            value: e,
            oldValue: n
        }, s) {
            t._assign = C(s), e !== n && (t.checked = D(e, s.props.value))
        }
    },
    ue = {
        deep: !0,
        created(t, {
            value: e,
            modifiers: {
                number: n
            }
        }, s) {
            const i = P(e);
            g(t, "change", () => {
                const o = Array.prototype.filter.call(t.options, a => a.selected).map(a => n ? x(I(a)) : I(a));
                t._assign(t.multiple ? i ? new Set(o) : o : o[0])
            }), t._assign = C(s)
        },
        mounted(t, {
            value: e
        }) {
            ct(t, e)
        },
        beforeUpdate(t, e, n) {
            t._assign = C(n)
        },
        updated(t, {
            value: e
        }) {
            ct(t, e)
        }
    };

function ct(t, e) {
    const n = t.multiple;
    if (!(n && !h(e) && !P(e))) {
        for (let s = 0, i = t.options.length; s < i; s++) {
            const o = t.options[s],
                a = I(o);
            if (n) h(e) ? o.selected = q(e, a) > -1 : o.selected = e.has(a);
            else if (D(I(o), e)) {
                t.selectedIndex !== s && (t.selectedIndex = s);
                return
            }
        }!n && t.selectedIndex !== -1 && (t.selectedIndex = -1)
    }
}

function I(t) {
    return "_value" in t ? t._value : t.value
}

function gt(t, e) {
    const n = e ? "_trueValue" : "_falseValue";
    return n in t ? t[n] : e
}
const ee = ["ctrl", "shift", "alt", "meta"],
    ne = {
        stop: t => t.stopPropagation(),
        prevent: t => t.preventDefault(),
        self: t => t.target !== t.currentTarget,
        ctrl: t => !t.ctrlKey,
        shift: t => !t.shiftKey,
        alt: t => !t.altKey,
        meta: t => !t.metaKey,
        left: t => "button" in t && t.button !== 0,
        middle: t => "button" in t && t.button !== 1,
        right: t => "button" in t && t.button !== 2,
        exact: (t, e) => ee.some(n => t[`${n}Key`] && !e.includes(n))
    },
    le = (t, e) => (n, ...s) => {
        for (let i = 0; i < e.length; i++) {
            const o = ne[e[i]];
            if (o && o(n, e)) return
        }
        return t(n, ...s)
    },
    de = {
        beforeMount(t, {
            value: e
        }, {
            transition: n
        }) {
            t._vod = t.style.display === "none" ? "" : t.style.display, n && e ? n.beforeEnter(t) : w(t, e)
        },
        mounted(t, {
            value: e
        }, {
            transition: n
        }) {
            n && e && n.enter(t)
        },
        updated(t, {
            value: e,
            oldValue: n
        }, {
            transition: s
        }) {
            !e != !n && (s ? e ? (s.beforeEnter(t), w(t, !0), s.enter(t)) : s.leave(t, () => {
                w(t, !1)
            }) : w(t, e))
        },
        beforeUnmount(t, {
            value: e
        }) {
            w(t, e)
        }
    };

function w(t, e) {
    t.style.display = e ? t._vod : "none"
}
const se = H({
    patchProp: Xt
}, $t);
let R, ft = !1;

function ie() {
    return R = ft ? R : At(se), ft = !0, R
}
const pe = (...t) => {
    const e = ie().createApp(...t),
        {
            mount: n
        } = e;
    return e.mount = s => {
        const i = oe(s);
        if (i) return n(i, !0, i instanceof SVGElement)
    }, e
};

function oe(t) {
    return L(t) ? document.querySelector(t) : t
}
export {
    pt as T, ae as a, ue as b, pe as c, fe as d, ce as e, de as v, le as w
};