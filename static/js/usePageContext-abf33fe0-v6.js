import {
    w as o
} from "./runtime-core.esm-bundler-e1b83cdf-v6.js";
const e = Symbol();

function a() {
    const t = o(e);
    if (!t) throw new Error("setPageContext() not called in parent");
    return t
}

function s(t, n) {
    t.provide(e, n)
}
export {
    s,
    a as u
};