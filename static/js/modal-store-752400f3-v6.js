import {
    T as y,
    w as g
} from "./runtime-dom.esm-bundler-8f0d0aae-v6.js";
import {
    d as $,
    y as f,
    O as T,
    z as k,
    V as d,
    Z as C,
    U as h,
    S as b,
    a6 as j,
    a1 as u,
    aa as v,
    G as S,
    a4 as _,
    W as p,
    Y as O,
    r as B
} from "./runtime-core.esm-bundler-e1b83cdf-v6.js";
import {
    g as c
} from "./locale-57919453-v6.js";
import {
    d as P
} from "./pinia-0d93e188-v6.js";
const z = ["onClick"],
    A = {
        class: "modal-window-page__modal__header"
    },
    E = p("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "currentColor",
        class: "bi bi-x-lg",
        viewBox: "0 0 16 16"
    }, [p("path", {
        d: "M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"
    })], -1),
    N = [E],
    J = {
        class: "modal-window-page__modal__content"
    },
    D = {
        key: 0,
        class: "modal-window-page__modal__title",
        style: {
            padding: "0"
        }
    },
    V = $({
        __name: "ModalWindow",
        props: {
            show: {
                type: Boolean
            },
            title: null,
            type: null
        },
        emits: ["update:show"],
        setup(t, {
            emit: e
        }) {
            const o = t,
                a = f(!1),
                n = f(!1);
            return T(() => {
                a.value = !0
            }), k(() => o.show, s => {
                S(() => {
                    n.value = s
                })
            }), (s, i) => a.value ? (d(), C(v, {
                key: 0,
                to: "#pages"
            }, [t.show ? (d(), h("div", {
                key: 0,
                class: "modal-window-page",
                onClick: i[1] || (i[1] = l => e("update:show", !1))
            }, [b(y, null, {
                default: j(() => [n.value ? (d(), h("div", {
                    key: 0,
                    class: _(["modal-window-page__modal", {
                        ["modal-window-page__modal--" + t.type]: !0
                    }]),
                    onClick: g(l => {}, ["stop"])
                }, [p("div", A, [p("button", {
                    class: "btn btn--icon btn--icon--lg",
                    style: {
                        "background-color": "white"
                    },
                    onClick: i[0] || (i[0] = l => e("update:show", !1))
                }, N)]), p("div", J, [t.title ? (d(), h("h3", D, O(t.title), 1)) : u("", !0), B(s.$slots, "default")])], 10, z)) : u("", !0)]),
                _: 3
            })])) : u("", !0)])) : u("", !0)
        }
    });

function m(t) {
    this.message = t
}
m.prototype = new Error, m.prototype.name = "InvalidCharacterError";
typeof window < "u" && window.atob && window.atob.bind(window);

function w(t) {
    this.message = t
}
w.prototype = new Error, w.prototype.name = "InvalidTokenError";

function r() {
    return localStorage.getItem("jwt-token")
}

function W(t) {
    localStorage.setItem("jwt-token", t)
}
async function U(t, e, o) {
    const a = c(),
        n = r();
    if (!n) return;
    const s = new FormData;
    return s.append("product", JSON.stringify(e)), o && s.append("image", o), await (await fetch(`https://instalacarte.com/customer-api/product/${a}/establishment/${t}/product`, {
        method: "POST",
        body: s,
        headers: {
            Authorization: `Bearer ${n}`
        }
    })).json()
}
async function q(t, e, o, a) {
    const n = c(),
        s = r();
    if (!s) return;
    const i = {
        newName: o,
        position: a
    };
    return await (await fetch(`https://instalacarte.com/customer-api/product/${n}/establishment/${t}/product/${e}/copy`, {
        method: "POST",
        body: JSON.stringify(i),
        headers: {
            Authorization: `Bearer ${s}`
        }
    })).json()
}
async function F(t, e, o, a) {
    const n = c(),
        s = r();
    if (!s) return;
    const i = new FormData;
    return i.append("product", JSON.stringify(o)), a && i.append("image", a), await (await fetch(`https://instalacarte.com/customer-api/product/${n}/establishment/${t}/product/${e}`, {
        method: "POST",
        body: i,
        headers: {
            Authorization: `Bearer ${s}`
        }
    })).json()
}
async function G(t, e, o, a) {
    const n = c(),
        s = r();
    return s ? await (await fetch(`https://instalacarte.com/customer-api/product/${n}/establishment/${t}/product/${e}/move/${o}?inCategory=${a}`, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${s}`
        }
    })).json() : void 0
}
async function Z(t) {
    const e = c(),
        o = r();
    return o ? await (await fetch(`https://instalacarte.com/customer-api/${e}/establishment/settings/${t.id}`, {
        method: "PUT",
        body: JSON.stringify(t),
        headers: {
            Authorization: `Bearer ${o}`,
            "Content-Type": "application/json"
        }
    })).json() : void 0
}
async function H(t, e) {
    const o = r();
    return o ? await (await fetch(`https://instalacarte.com/customer-api/product/${t}/product/${e}`, {
        method: "DELETE",
        headers: {
            Authorization: `Bearer ${o}`,
            "Content-Type": "application/json"
        }
    })).json() : void 0
}
async function Q(t) {
    const e = c();
    return await (await fetch(`https://instalacarte.com/m/all-products/${e}/${t}`)).json()
}
async function R(t) {
    const e = c();
    return await (await fetch(`https://instalacarte.com/m/categories/${e}/${t}`)).json()
}
async function Y(t, e) {
    const o = "ru",
        a = {
            "Content-Type": "application/json"
        };
    return await (await fetch(`https://instalacarte.com/m/${o}/${e}/order`, {
        method: "POST",
        body: JSON.stringify(t),
        headers: a
    })).json()
}
async function K(t) {
    const e = r();
    return e ? await (await fetch(`https://instalacarte.com/customer-api/${t}/images`, {
        headers: {
            Authorization: `Bearer ${e}`,
            "Content-Type": "application/json"
        }
    })).json() : void 0
}
async function X(t, e) {
    const o = r();
    if (!o) return;
    const a = new FormData;
    return a.append("image", e), await (await fetch(`https://instalacarte.com/customer-api/${t}/images`, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${o}`
        },
        body: a
    })).json()
}
async function tt(t, e) {
    const o = c(),
        a = r();
    return a ? await (await fetch(`https://instalacarte.com/customer-api/category/${t}/category/${o}`, {
        method: "POST",
        body: JSON.stringify(e),
        headers: {
            Authorization: `Bearer ${a}`,
            "Content-Type": "application/json"
        }
    })).json() : void 0
}
async function et(t, e) {
    const o = c(),
        a = r();
    return !a || !e.id ? void 0 : await (await fetch(`https://instalacarte.com/customer-api/category/${t}/category/${e.id}/${o}`, {
        method: "PUT",
        body: JSON.stringify(e),
        headers: {
            Authorization: `Bearer ${a}`,
            "Content-Type": "application/json"
        }
    })).json()
}
async function ot(t, e, o) {
    const a = c(),
        n = r();
    return n ? await (await fetch(`https://instalacarte.com/customer-api/category/${t}/child-category/${e}/${a}`, {
        method: "POST",
        body: JSON.stringify({
            name: o
        }),
        headers: {
            Authorization: `Bearer ${n}`,
            "Content-Type": "application/json"
        }
    })).json() : void 0
}
async function at(t, e, o) {
    const a = c(),
        n = r();
    return n ? await (await fetch(`https://instalacarte.com/customer-api/category/${t}/child-category/${e}/${a}`, {
        method: "PUT",
        body: JSON.stringify({
            id: e,
            name: o
        }),
        headers: {
            Authorization: `Bearer ${n}`,
            "Content-Type": "application/json"
        }
    })).json() : void 0
}
async function nt(t, e) {
    const o = r();
    return o ? await (await fetch(`https://instalacarte.com/customer-api/category/${t}/category/${e}`, {
        method: "DELETE",
        headers: {
            Authorization: `Bearer ${o}`,
            "Content-Type": "application/json"
        }
    })).json() : void 0
}
async function st(t, e, o) {
    const a = r();
    return a ? await (await fetch(`https://instalacarte.com/customer-api/category/${t}/category/${e}/move/${o}`, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${a}`,
            "Content-Type": "application/json"
        }
    })).json() : void 0
}
async function rt(t, e) {
    const o = r();
    o && await fetch(`https://instalacarte.com/customer-api/en/establishment/${t}/save-theme-variables`, {
        method: "POST",
        body: JSON.stringify(e),
        headers: {
            Authorization: `Bearer ${o}`,
            "Content-Type": "application/json"
        }
    })
}
async function it(t, e) {
    const o = c();
    return await (await fetch(`https://instalacarte.com/m/working-times/${o}/${t}/${e}`, {
        method: "GET"
    })).json()
}
async function ct() {
    const t = r();
    if (!t) throw new Error("Can not get customer quotas: token is empty");
    return await (await fetch("https://instalacarte.com/customer-api/quotas", {
        method: "GET",
        headers: {
            Authorization: `Bearer ${t}`,
            "Content-Type": "application/json"
        }
    })).json()
}
const pt = P("modal", {
    state: () => ({
        title: "",
        message: "",
        show: !1,
        type: null,
        rawHtml: !1
    }),
    actions: {
        showModal(t, e, o = "info", a = !1) {
            this.$patch({
                title: t,
                message: e,
                type: o,
                show: !0,
                rawHtml: a
            })
        }
    }
});
export {
    V as _, F as a, U as b, K as c, X as d, et as e, tt as f, Q as g, R as h, nt as i, Z as j, W as k, it as l, st as m, ct as n, at as o, Y as p, ot as q, H as r, rt as s, G as t, pt as u, q as v
};