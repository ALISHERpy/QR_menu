import {
    c as f
} from "./saveBasket-f7f430be-v6.js";
import {
    c as B,
    _ as h
} from "./MenuPage.vue_vue_type_style_index_0_lang-de950a75-v6.js";
import {
    u as b
} from "./global-store-29bd89d4-v6.js";
import {
    d as i,
    y as c,
    O as w,
    L as v,
    a7 as s,
    V as r,
    U as o,
    W as t,
    Y as C,
    a1 as E,
    S as p,
    N as y
} from "./runtime-core.esm-bundler-e1b83cdf-v6.js";
const S = {
        class: "ad-top-banner__container"
    },
    z = ["href"],
    L = ["src"],
    k = {
        key: 0
    },
    D = {
        key: 1,
        xmlns: "http://www.w3.org/2000/svg",
        fill: "currentColor",
        class: "bi bi-plus-lg",
        viewBox: "0 0 16 16"
    },
    F = t("path", {
        d: "M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"
    }, null, -1),
    U = [F],
    x = i({
        __name: "TopBanner",
        setup(u) {
            const {
                showAdBanner: m
            } = B(), n = c(null), e = c(5), g = b();
            w(() => {
                const a = setInterval(() => {
                    e.value--, e.value <= 0 && clearInterval(a)
                }, 1e3)
            });
            const _ = v(() => {
                    const a = g.restaurant.menuCountryCode;
                    if (!a) return null;
                    switch (a.toLowerCase()) {
                        case "us":
                            return {
                                imgPath: "/img/top-banner/amazon-en.jpg?v1",
                                targetUrl: "https://www.amazon.com/dp/B0BCLS64SM?maas=maas_adg_E98754AB28B36495756E171C516C26D7_afap_abs&ref_=aa_maas&tag=maas"
                            };
                        case "gb":
                            return {
                                imgPath: "/img/top-banner/amazon-en.jpg?v1",
                                targetUrl: "https://www.amazon.co.uk/dp/B0BQ7LG4V6?maas=maas_adg_EC510C4BE26BF6B20B2D3BCD7D30A878_afap_abs&ref_=aa_maas&tag=maas"
                            };
                        case "de":
                            return {
                                imgPath: "/img/top-banner/amazon-de.png?v1",
                                targetUrl: "https://www.amazon.de/dp/B0BCLS64SM?maas=maas_adg_FA483536B21D77E373AE5012207DF826_afap_abs&ref_=aa_maas&tag=maas"
                            };
                        case "es":
                            return {
                                imgPath: "/img/top-banner/amazon-es.png?v1",
                                targetUrl: "https://www.amazon.es/dp/B0BCLS64SM?maas=maas_adg_A03398DC9997DE1EB156760B77B6F4E0_afap_abs&ref_=aa_maas&tag=maas"
                            };
                        case "fr":
                            return {
                                imgPath: "/img/top-banner/amazon-fr.png?v1",
                                targetUrl: "https://www.amazon.fr/dp/B0BCLS64SM?maas=maas_adg_134D9581666A5210524FEF5C157773E2_afap_abs&ref_=aa_maas&tag=maas"
                            };
                        case "it":
                            return {
                                imgPath: "/img/top-banner/amazon-it.png?v1",
                                targetUrl: "https://www.amazon.it/dp/B0BCLS64SM?maas=maas_adg_8BCB7B125037160118407E8F281DBE93_afap_abs&ref_=aa_maas&tag=maas"
                            };
                        default:
                            return null
                    }
                }),
                d = () => {
                    if (!n.value || e.value > 0) return;
                    n.value.style.display = "none";
                    const a = document.getElementById("menu-page");
                    if (!a) return;
                    const l = parseFloat(a.style.top.replace("px", ""));
                    a.style.top = `${l-110}px`
                };
            return (a, l) => s(m) && s(_) ? (r(), o("div", {
                key: 0,
                class: "ad-top-banner",
                ref_key: "bannerRef",
                ref: n
            }, [t("div", S, [t("a", {
                href: s(_).targetUrl,
                target: "_blank"
            }, [t("img", {
                src: s(_).imgPath
            }, null, 8, L)], 8, z)]), t("button", {
                class: "btn btn--icon btn--icon--sm ad-top-banner__btn",
                onClick: d
            }, [e.value > 0 ? (r(), o("div", k, C(e.value), 1)) : (r(), o("svg", D, U))])], 512)) : E("", !0)
        }
    });
const I = i({
    __name: "UserMenu",
    setup(u) {
        return f(), (m, n) => (r(), o(y, null, [p(x), p(h)], 64))
    }
});
export {
    I as _
};