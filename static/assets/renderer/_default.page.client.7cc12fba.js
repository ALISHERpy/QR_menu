import {
    c as a
} from "../../app-8751076b-v6.js";
import "../../runtime-dom.esm-bundler-8f0d0aae-v6.js";
import "../../runtime-core.esm-bundler-e1b83cdf-v6.js";
import "../../_plugin-vue_export-helper-c27b6911-v6.js";
import "../../usePageContext-abf33fe0-v6.js";
import "../../pinia-0d93e188-v6.js";
import "../../vue-i18n.esm-bundler-a94c73ec-v6.js";
async function s(t) {
    console.log("DEFAULT CLIENT RENDER");
    const {
        app: i,
        pinia: o
    } = await a(t);
    o.state.value = {
        global: t.initialStoreState,
        ["public-quotas"]: t.initialPublicQuotasStoreState
    }, i.mount("#app")
}
export {
    s as render
};