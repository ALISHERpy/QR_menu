import {
    c as a
} from "../../../../app-8751076b-v6.js";
import {
    s as o
} from "../../../../locale-57919453-v6.js";
import "../../../../runtime-dom.esm-bundler-8f0d0aae-v6.js";
import "../../../../runtime-core.esm-bundler-e1b83cdf-v6.js";
import "../../../../_plugin-vue_export-helper-c27b6911-v6.js";
import "../../../../usePageContext-abf33fe0-v6.js";
import "../../../../pinia-0d93e188-v6.js";
import "../../../../vue-i18n.esm-bundler-a94c73ec-v6.js";
async function h(e) {
    console.log("STATIC CLIENT RENDER"), e.urlParsed && e.urlParsed.search && t(e.urlParsed.search), o(e.locale);
    const {
        app: l,
        pinia: i,
        i18n: s
    } = await a(e);
    s.global.locale.value = e.locale, s.global.setLocaleMessage(e.locale, e.messages), i.state.value = {
        global: e.initialStoreState,
        search: {
            showSearchBar: !1
        },
        ["public-quotas"]: e.initialPublicQuotasStoreState
    }, l.mount("#app")
}

function t(e) {
    const l = {};
    for (const i in e)
        if (i.startsWith("field_")) {
            let [s, r] = i.split("_");
            l[r] = e[i]
        }
    Object.keys(l).length && (window.localStorage.setItem("ik-prefilled-fields", JSON.stringify(l)), window.localStorage.setItem("ik-prefilled-fields-expire", JSON.stringify(Date.now() + 36e6)))
}
export {
    h as render
};