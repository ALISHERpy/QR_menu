import {
    c as l
} from "./runtime-dom.esm-bundler-8f0d0aae-v6.js";
import {
    _ as u
} from "./_plugin-vue_export-helper-c27b6911-v6.js";
import {
    r as f,
    d as m,
    h as c
} from "./runtime-core.esm-bundler-e1b83cdf-v6.js";
import {
    s as P
} from "./usePageContext-abf33fe0-v6.js";
import {
    c as d
} from "./pinia-0d93e188-v6.js";
import {
    c as g
} from "./vue-i18n.esm-bundler-a94c73ec-v6.js";
const _ = {};

function h(e, a) {
    return f(e.$slots, "default")
}
const C = u(_, [
    ["render", h]
]);
async function b(e) {
    const {
        Page: a,
        pageProps: i
    } = e, p = m({
        render() {
            return c(C, {}, {
                default () {
                    return c(a, i || {})
                }
            })
        }
    }), t = l(p), r = g({
        legacy: !1,
        locale: "ru",
        fallbackLocale: "en",
        messages: {}
    }), o = d();
    t.use(o), t.use(r);
    const s = {};
    return ["pageProps", "urlPathname", "routeParams", "initialStoreState", "isEditPage", "locale", "language", "seoProps", "urlParsed"].forEach(n => s[n] = e[n]), P(t, s), {
        app: t,
        pinia: o,
        i18n: r
    }
}
export {
    b as c
};