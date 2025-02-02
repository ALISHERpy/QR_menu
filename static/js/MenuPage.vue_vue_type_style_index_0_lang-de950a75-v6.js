import {
    w as X,
    a as me,
    T as ne
} from "./runtime-dom.esm-bundler-8f0d0aae-v6.js";
import {
    u as K
} from "./usePageContext-abf33fe0-v6.js";
import {
    u as B
} from "./global-store-29bd89d4-v6.js";
import {
    n as pe,
    _ as j,
    u as ie,
    o as ve,
    q as fe,
    h as se,
    i as ye,
    g as be,
    m as we
} from "./modal-store-752400f3-v6.js";
import {
    s as Ce
} from "./locale-57919453-v6.js";
import {
    d as ee,
    u as ce,
    a as Q,
    h as W,
    e as J,
    f as ke,
    j as le,
    k as $e,
    i as ue,
    l as Se,
    m as xe,
    n as Me,
    _ as Pe,
    o as Ee
} from "./saveBasket-f7f430be-v6.js";
import {
    d as L,
    V as a,
    U as c,
    N as U,
    a2 as q,
    a4 as T,
    a7 as e,
    X as I,
    Y as $,
    a1 as y,
    W as o,
    y as P,
    S as k,
    a6 as M,
    r as Le,
    a5 as ae,
    L as z,
    ac as F,
    O as te,
    z as O,
    P as de,
    Z as E,
    G as R,
    $ as Ie,
    F as re,
    aa as Be
} from "./runtime-core.esm-bundler-e1b83cdf-v6.js";
import {
    d as G
} from "./pinia-0d93e188-v6.js";
import {
    _ as H
} from "./preload-helper-101896b7-v6.js";
import {
    u as Te
} from "./vue-i18n.esm-bundler-a94c73ec-v6.js";
const Ae = {
        class: "choose-language-page"
    },
    Ue = ["onClick"],
    ze = {
        key: 0,
        title: "Main language"
    },
    De = o("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "20",
        height: "20",
        fill: "currentColor",
        class: "bi bi-bookmark-star-fill",
        viewBox: "0 0 16 16"
    }, [o("path", {
        "fill-rule": "evenodd",
        d: "M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5zM8.16 4.1a.178.178 0 0 0-.32 0l-.634 1.285a.178.178 0 0 1-.134.098l-1.42.206a.178.178 0 0 0-.098.303L6.58 6.993c.042.041.061.1.051.158L6.39 8.565a.178.178 0 0 0 .258.187l1.27-.668a.178.178 0 0 1 .165 0l1.27.668a.178.178 0 0 0 .257-.187L9.368 7.15a.178.178 0 0 1 .05-.158l1.028-1.001a.178.178 0 0 0-.098-.303l-1.42-.206a.178.178 0 0 1-.134-.098L8.16 4.1z"
    })], -1),
    Oe = [De],
    Ve = L({
        __name: "ChooseLanguagePage",
        setup(i) {
            const s = B(),
                n = K(),
                {
                    generateRestaurantUrl: t,
                    generateCategoryUrl: d,
                    generateSubCategoryUrl: p,
                    generateProductUrl: r
                } = ee(),
                v = u => {
                    Ce(u.code), n.locale = u.code;
                    let h = t();
                    s.activeCategory && (h = d(s.activeCategory)), s.activeSubCategory && (h = p(s.activeSubCategory)), s.activeProduct && (h = r(s.activeProduct)), window.location.href = h
                };
            return (u, h) => (a(), c("div", Ae, [(a(!0), c(U, null, q(e(s).restaurantAvailableLanguages, l => (a(), c("div", {
                class: T(["choose-language-page__lang", {
                    "choose-language-page__lang--active": l.code === e(n).locale
                }]),
                onClick: g => v(l)
            }, [I($(l.name) + " ", 1), e(s).editMode && l.code === e(s).restaurant.menuLanguageCode ? (a(), c("div", ze, Oe)) : y("", !0)], 10, Ue))), 256))]))
        }
    });
const Ne = G("customer", {
        state: () => ({
            quotas: []
        }),
        actions: {
            async init() {
                this.quotas = await pe()
            }
        }
    }),
    Re = "customize_theme",
    Fe = "customize_menu_logo",
    He = "customize_menu_background_image";

function Qe() {
    const i = Ne();
    return {
        hasEnoughQuota: n => {
            const t = i.quotas.find(d => d.slug === n);
            return t ? t.current < t.max : !1
        },
        CUSTOMIZE_THEME: Re,
        CUSTOMIZE_MENU_LOGO: Fe,
        CUSTOMIZE_MENU_BACKGROUND_IMAGE: He
    }
}
const qe = {
        class: "header"
    },
    Ge = {
        style: {
            "flex-grow": "1",
            position: "relative",
            height: "45px"
        }
    },
    Ze = {
        style: {
            display: "flex",
            gap: "10px",
            "align-items": "center",
            position: "absolute",
            left: "0",
            right: "0",
            top: "0",
            bottom: "0",
            "overflow-x": "auto"
        }
    },
    We = ["src", "alt"],
    je = {
        key: 1,
        class: "header__restaurant-name"
    },
    Je = L({
        __name: "MenuHeader",
        setup(i) {
            const s = B(),
                n = P(!1),
                t = K(),
                d = s.languages.find(h => h.code === t.locale),
                p = (d == null ? void 0 : d.name) || "English",
                r = "https://instalacarte.com",
                {
                    hasEnoughQuota: v,
                    CUSTOMIZE_THEME: u
                } = Qe();
            return (h, l) => (a(), c("div", qe, [o("div", Ge, [o("div", Ze, [e(s).restaurant.logo ? (a(), c("img", {
                key: 0,
                class: "header__logo",
                src: e(r) + e(s).restaurant.logo,
                alt: e(s).restaurant.name
            }, null, 8, We)) : y("", !0), !e(s).restaurant.logo || e(s).restaurant.showNameWhenLogoIsPresent ? (a(), c("div", je, [o("h1", null, $(e(s).restaurant.name), 1)])) : y("", !0)])]), e(t).isEditPage && e(v)(e(u)) ? (a(), c("button", {
                key: 0,
                class: "btn btn--icon",
                onClick: l[0] || (l[0] = g => e(s).settingsPageOpen = !e(s).settingsPageOpen)
            }, " Colors ")) : y("", !0), e(s).restaurant.translationsEnabled ? (a(), c("button", {
                key: 1,
                class: "btn btn--icon",
                style: {
                    "font-size": "0.9rem"
                },
                onClick: l[1] || (l[1] = g => n.value = !0)
            }, $(e(p)), 1)) : y("", !0), k(j, {
                show: n.value,
                "onUpdate:show": l[2] || (l[2] = g => n.value = g),
                type: "info"
            }, {
                default: M(() => [k(Ve)]),
                _: 1
            }, 8, ["show"])]))
        }
    });
const Xe = ["href"],
    Y = L({
        __name: "SSRLink",
        props: {
            href: null,
            updateState: null
        },
        setup(i) {
            const s = i;
            K();
            const n = t => {
                window && (t.preventDefault(), window.history.pushState({}, "", s.href), s.updateState())
            };
            return (t, d) => (a(), c("a", {
                href: i.href,
                onClick: n
            }, [Le(t.$slots, "default")], 8, Xe))
        }
    }),
    Ye = ["data-category-id", "onContextmenu"],
    Ke = {
        key: 0,
        class: "menu-category__highlight",
        id: "menu-category__highlight",
        style: {
            transform: "translateX(0)"
        }
    },
    et = {
        class: "menu-category__img"
    },
    tt = ["src", "alt"],
    ot = ["src", "alt"],
    st = {
        key: 3,
        class: "menu-category__img__placeholder"
    },
    at = {
        class: "menu-category__name no-wrap"
    },
    nt = o("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "12",
        height: "12",
        fill: "currentColor",
        class: "bi bi-pencil",
        viewBox: "0 0 16 16"
    }, [o("path", {
        d: "M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"
    })], -1),
    rt = [nt],
    it = L({
        __name: "MenuCategory",
        props: {
            category: null,
            active: {
                type: Boolean
            },
            index: null,
            highlightIndex: null
        },
        setup(i) {
            const s = i,
                n = B(),
                {
                    generateCategoryUrl: t
                } = ee(),
                {
                    replaceAssetDomain: d
                } = ce(),
                p = () => {
                    n.editMode && (n.activeCategory = s.category.id, n.editCategory = JSON.parse(JSON.stringify(s.category)))
                },
                r = () => {
                    n.activeCategory = s.category.id
                };
            return (v, u) => (a(), c("div", {
                class: T(["menu-category", {
                    "menu-category--active": i.active
                }]),
                "data-category-id": i.category.id,
                "data-long-press-delay": "1000",
                onLongPress: p,
                onContextmenu: X(p, ["prevent"])
            }, [i.index === i.highlightIndex ? (a(), c("div", Ke)) : y("", !0), o("div", et, [k(Y, {
                href: e(t)(i.category.id),
                "update-state": r
            }, {
                default: M(() => [i.category.image && i.category.imageId !== 0 ? (a(), c("img", {
                    key: 0,
                    src: e(d)(i.category.image) + "?v3",
                    alt: i.category.name
                }, null, 8, tt)) : i.category.color ? (a(), c("div", {
                    key: 1,
                    class: "menu-category__img__color-fill",
                    style: ae({
                        backgroundColor: i.category.color
                    })
                }, null, 4)) : i.category.image ? (a(), c("img", {
                    key: 2,
                    src: e(d)(i.category.image) + "?v3",
                    alt: i.category.name
                }, null, 8, ot)) : (a(), c("div", st, "🍴"))]),
                _: 1
            }, 8, ["href"])]), o("div", at, [o("div", null, [k(Y, {
                href: e(t)(i.category.id),
                "update-state": r
            }, {
                default: M(() => [I($(i.category.name), 1)]),
                _: 1
            }, 8, ["href"])]), e(n).editMode ? (a(), c("div", {
                key: 0,
                onClick: p,
                style: {
                    padding: "0 10px",
                    "margin-left": "10px",
                    cursor: "pointer",
                    "border-left": "1px solid rgba(100, 100, 100, 0.5)"
                }
            }, rt)) : y("", !0)])], 42, Ye))
        }
    });
const ct = {
        class: "categories-section__container"
    },
    lt = L({
        __name: "MenuCategories",
        setup(i) {
            const s = B(),
                n = Q();
            let t = [];
            const d = z(() => {
                    let r = s.categories;
                    return (s.editMode || !n.favorites.length) && (r = r.filter(v => v.slug !== "favorites")), s.popularProducts.length || (r = r.filter(v => v.slug !== "popular")), r
                }),
                p = F(() => H(() =>
                    import ("./AddCategory-73acb266-v6.js"), ["AddCategory-73acb266-v6.js", "global-store-29bd89d4-v6.js", "pinia-0d93e188-v6.js", "runtime-core.esm-bundler-e1b83cdf-v6.js", "assets/AddCategory-18ad917b-v6.css"]));
            return te(() => {
                let r = O(() => [s.activeCategory, n.favorites.length], (v, u) => {
                    R(() => {
                        const [h, l] = v;
                        if (!h) return;
                        let g = null,
                            m = null;
                        if (u && (m = u[0], g = u[1]), !!document.getElementById("menu-category__highlight") && (h !== m && (m === null ? setTimeout(() => {
                                W(h)
                            }, 500) : W(h)), l && (!g || g && l > g))) {
                            const A = document.querySelector(".categories-section .menu-category[data-category-id='-1'] .menu-category__img");
                            A && J({
                                targets: A,
                                scale: [{
                                    value: 1.15
                                }, {
                                    value: 1
                                }, {
                                    value: 1.2
                                }, {
                                    value: 1
                                }],
                                duration: 1e3,
                                easing: "easeOutCubic"
                            })
                        }
                    })
                }, {
                    immediate: !0
                });
                t.push(r), r = O(() => s.editMode, () => {
                    R(() => {
                        s.activeCategory && W(s.activeCategory)
                    })
                }), t.push(r), r = O(() => s.restaurant.categoriesDisplayMode, () => {
                    R(() => {
                        s.activeCategory && W(s.activeCategory)
                    })
                }), t.push(r)
            }), de(() => {
                t.forEach(r => r()), t = []
            }), (r, v) => (a(), c("section", {
                class: T(["categories-section", {
                    [`categories-section--${e(s).restaurant.categoriesDisplayMode}`]: !0
                }])
            }, [o("div", ct, [e(s).editMode ? (a(), E(e(p), {
                key: 0
            })) : y("", !0), (a(!0), c(U, null, q(e(d), (u, h) => (a(), E(it, {
                key: u.id,
                category: u,
                index: h,
                active: e(s).activeCategory === u.id,
                "highlight-index": 0
            }, null, 8, ["category", "index", "active"]))), 128))])], 2))
        }
    });
const ut = {
        id: "sticky-header"
    },
    dt = L({
        __name: "StickyHeader",
        setup(i) {
            return (s, n) => (a(), c("header", ut, [k(Je), k(lt)]))
        }
    });
const _t = {
        class: "menu-product__item__toolbar"
    },
    gt = o("div", {
        style: {
            "flex-grow": "1"
        }
    }, null, -1),
    ht = o("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        stroke: "#222222",
        "stroke-width": "1.2px",
        x: "0px",
        y: "0px",
        viewBox: "-1 -2 14 13",
        "xml:space": "preserve"
    }, [o("path", {
        d: `M11,1c-0.6-0.6-1.5-1-2.3-1C7.8,0,7,0.4,6.3,1L6,1.3L5.7,1C5,0.3,4.2,0,3.3,0S1.6,0.3,1,1C0.3,1.6,0,2.4,0,3.3S0.3,5,1,5.7
                l4.8,4.8C5.9,10.6,6,10.6,6,10.6c0.1,0,0.2,0,0.2-0.1L11,5.7c0.6-0.6,1-1.5,1-2.4S11.7,1.6,11,1z`
    })], -1),
    mt = [ht],
    pt = L({
        __name: "MenuProductToolbar",
        props: {
            product: null
        },
        setup(i) {
            const s = Q(),
                n = t => {
                    s.toggleFavorite(t)
                };
            return (t, d) => (a(), c("div", _t, [gt, o("button", {
                onClick: d[0] || (d[0] = X(p => n(i.product.id), ["stop", "prevent"])),
                class: T(["btn btn--icon btn--icon--xsm", {
                    "btn--icon--active": e(s).favorites.includes(i.product.id)
                }]),
                style: {
                    "background-color": "#eeeeee",
                    "-webkit-font-smoothing": "antialiased",
                    padding: "5px"
                }
            }, mt, 2)]))
        }
    });
const vt = G("preferences", {
        state: () => ({
            editMode: !0
        })
    }),
    ft = {
        class: "menu-product"
    },
    yt = {
        class: "menu-product__item"
    },
    bt = {
        key: 0,
        class: "menu-product__item__ordered_qty"
    },
    wt = {
        class: "menu-product__item__img"
    },
    Ct = ["src"],
    kt = {
        class: "menu-product__item__top-block"
    },
    $t = {
        class: "menu-product__item__name text-overflow"
    },
    St = {
        key: 0,
        class: "menu-product__item__price no-wrap"
    },
    xt = {
        key: 3,
        class: "menu-product__item__description"
    },
    Mt = ["innerHTML"],
    Pt = {
        class: "menu-product__item__price-bottom no-wrap"
    },
    Et = L({
        __name: "MenuProduct",
        props: {
            product: null
        },
        setup(i) {
            const s = i,
                n = B(),
                t = Q(),
                {
                    replaceAssetDomain: d
                } = ce(),
                p = vt(),
                {
                    formatPrice: r
                } = ke(),
                v = P(),
                u = F(() => H(() =>
                    import ("./ProductEditToolbar-8d1b9297-v6.js"), ["ProductEditToolbar-8d1b9297-v6.js", "runtime-dom.esm-bundler-8f0d0aae-v6.js", "runtime-core.esm-bundler-e1b83cdf-v6.js", "modal-store-752400f3-v6.js", "locale-57919453-v6.js", "pinia-0d93e188-v6.js", "assets/modal-store-fe31f993-v6.css", "global-store-29bd89d4-v6.js", "_plugin-vue_export-helper-c27b6911-v6.js", "vue-i18n.esm-bundler-a94c73ec-v6.js", "assets/ProductEditToolbar-60af4e4f-v6.css"])),
                h = z(() => {
                    let g = 0;
                    for (const [m, S] of Object.entries(t.products)) m.startsWith(s.product.id + "|") && (g += S.qty);
                    return g
                }),
                l = (g, m) => g.length > m ? g.slice(0, m) + "..." : g;
            return (g, m) => (a(), c("div", ft, [o("div", yt, [!e(n).editMode && e(h) ? (a(), c("div", bt, $(e(h)), 1)) : y("", !0), e(n).editMode ? (a(), E(e(u), {
                key: 1,
                product: i.product
            }, null, 8, ["product"])) : (a(), E(pt, {
                key: 2,
                product: i.product
            }, null, 8, ["product"])), o("div", wt, [o("img", {
                ref_key: "fullImageEl",
                ref: v,
                class: "menu-product__item__img__full",
                src: e(d)(e(p).menuDisplayMode === "grid" ? i.product.image_medium : i.product.image),
                alt: "Item image",
                decoding: "async"
            }, null, 8, Ct)]), o("div", kt, [o("div", $t, $(i.product.name), 1), i.product.price ? (a(), c("div", St, $(e(r)(i.product.price)), 1)) : y("", !0)]), i.product.description ? (a(), c("div", xt, [i.product.escapeDescription ? (a(), c(U, {
                key: 0
            }, [I($(l(i.product.description, 90)), 1)], 64)) : (a(), c("div", {
                key: 1,
                innerHTML: i.product.description
            }, null, 8, Mt))])) : y("", !0), o("div", Pt, $(e(r)(i.product.price)), 1)])]))
        }
    });
const _e = "/assets/ticks2-h-76ed9bfe-v6.svg",
    Lt = {
        class: "menu-grid"
    },
    It = {
        key: 0,
        class: "menu-products-section__powered-by"
    },
    Bt = ["href"],
    Tt = o("span", {
        style: {
            "font-size": "1.5rem"
        }
    }, "®", -1),
    At = {
        key: 1,
        class: "menu-products-section__no-items-container"
    },
    Ut = {
        style: {
            width: "100px",
            height: "100px"
        }
    },
    zt = ["href"],
    Dt = {
        style: {
            "margin-top": "20px"
        }
    },
    Ot = L({
        __name: "MenuProducts",
        setup(i) {
            const s = F(() => H(() =>
                    import ("./AddProduct-7a4cbe28-v6.js"), ["AddProduct-7a4cbe28-v6.js", "global-store-29bd89d4-v6.js", "pinia-0d93e188-v6.js", "runtime-core.esm-bundler-e1b83cdf-v6.js", "assets/AddProduct-e76be228-v6.css"])),
                n = B(),
                t = Q(),
                {
                    generateProductUrl: d
                } = ee(),
                p = "https://instalacarte.com",
                {
                    hasEnoughQuota: r,
                    DISABLE_POWERED_BY_BANNER: v
                } = le(),
                u = z(() => {
                    if (!n.activeCategory) return [];
                    const l = $e(n.activeCategory, n.categories);
                    if (l && l === "favorites") return t.favoriteProducts;
                    if (l && l === "popular") return n.popularProducts;
                    let g;
                    if (n.activeSubCategory) g = n.products.filter(m => m.category === n.activeSubCategory);
                    else {
                        const m = [n.activeCategory];
                        n.categories.forEach(S => {
                            S.id === n.activeCategory && S.child.forEach(A => {
                                m.push(A.id)
                            })
                        }), g = n.products.filter(S => m.includes(S.category))
                    }
                    return n.editMode || (g = g.filter(m => m.is_active)), g
                }),
                h = z(() => u.value.length ? u.value.sort((l, g) => {
                    const m = l.global_sort_order,
                        S = g.global_sort_order;
                    return m === S ? 0 : m > S ? 1 : -1
                }) : []);
            return (l, g) => e(u).length || e(n).editMode ? (a(), c("section", {
                key: 0,
                class: T(["menu-products-section", "menu-products-section--" + e(n).restaurant.menuDisplayMode]),
                style: ae({
                    paddingBottom: !e(n).editMode && e(n).canOrder ? "160px" : "110px"
                })
            }, [o("div", Lt, [e(n).editMode && e(n).activeCategory ? (a(), E(e(s), {
                key: 0
            })) : y("", !0), (a(!0), c(U, null, q(e(h), m => (a(), E(Y, {
                style: {
                    display: "contents",
                    "-webkit-tap-highlight-color": "transparent"
                },
                key: m.id,
                href: e(d)(m.id),
                "update-state": () => e(n).activeProduct = m.id
            }, {
                default: M(() => [k(Et, {
                    product: m
                }, null, 8, ["product"])]),
                _: 2
            }, 1032, ["href", "update-state"]))), 128))]), e(r)(e(v)) ? y("", !0) : (a(), c("div", It, [o("span", null, [I("powered by "), o("a", {
                href: e(p),
                target: "_blank"
            }, "instalacarte.com", 8, Bt)]), I(), Tt]))], 6)) : (a(), c("div", At, [(a(), c("svg", Ut, [o("use", {
                href: e(_e) + "#icon"
            }, null, 8, zt)])), o("div", Dt, $(l.$t("translation_mobile.no.dishes.text")), 1)]))
        }
    });
const ge = G("search", {
        state: () => ({
            showSearchBar: !1
        })
    }),
    Vt = {
        class: "search-page form"
    },
    Nt = {
        class: "form__form-field__field"
    },
    Rt = {
        class: "search-page__search_result"
    },
    Ft = ["onClick"],
    Ht = {
        class: "search-page__search_result__item__img"
    },
    Qt = ["src"],
    qt = {
        style: {
            "text-align": "left",
            "margin-left": "10px"
        }
    },
    Gt = {
        class: "search-page__search_result__item__name no-wrap"
    },
    Zt = {
        class: "search-page__search_result__item__description no-wrap text-overflow",
        style: {
            "max-width": "150px"
        }
    },
    Wt = {
        key: 0,
        class: "search-page__no-search"
    },
    jt = ["href"],
    Jt = L({
        __name: "SearchPage",
        setup(i) {
            const s = B(),
                n = ge(),
                t = P(""),
                d = P(),
                p = z(() => t.value.length < 2 ? [] : s.products.filter(u => u.name.toLowerCase().indexOf(t.value.toLowerCase()) > -1));
            te(() => {
                R(() => {
                    d.value && d.value.focus()
                })
            });
            const r = u => u.replace("https://instalacarte.com", "https://menu.instalacarte.com"),
                v = u => {
                    const h = u.category,
                        l = s.categories.find(g => g.id === h);
                    l && (s.activeCategory = l.id, s.activeProduct = u.id, n.showSearchBar = !1)
                };
            return (u, h) => (a(), c("div", Vt, [o("div", Nt, [o("input", {
                ref_key: "searchInputRef",
                ref: d,
                style: {
                    width: "initial"
                },
                type: "text",
                onInput: h[0] || (h[0] = l => t.value = l.target.value),
                placeholder: "Enter product name..."
            }, null, 544)]), o("div", Rt, [(a(!0), c(U, null, q(e(p), l => (a(), c("div", {
                class: "search-page__search_result__item",
                onClick: g => v(l)
            }, [o("div", Ht, [o("img", {
                src: r(l.image),
                alt: "Product"
            }, null, 8, Qt)]), o("div", qt, [o("div", Gt, $(l.name), 1), o("div", Zt, $(l.description), 1)])], 8, Ft))), 256)), e(p).length ? y("", !0) : (a(), c("div", Wt, [(a(), c("svg", null, [o("use", {
                href: e(_e) + "#icon"
            }, null, 8, jt)]))]))])]))
        }
    });
const Xt = ["disabled"],
    Yt = ["onContextmenu"],
    Kt = ["onClick"],
    eo = o("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "12",
        height: "12",
        fill: "currentColor",
        class: "bi bi-pencil",
        viewBox: "0 0 16 16"
    }, [o("path", {
        d: "M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"
    })], -1),
    to = [eo],
    oo = {
        class: "form"
    },
    so = {
        class: "form__form-field"
    },
    ao = {
        class: "form__form-field__label"
    },
    no = {
        class: "form__form-field__field"
    },
    ro = {
        key: 0,
        style: {
            display: "flex",
            "align-items": "center",
            "justify-content": "space-around"
        }
    },
    io = o("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "currentColor",
        class: "bi bi-arrow-up",
        viewBox: "0 0 16 16"
    }, [o("path", {
        "fill-rule": "evenodd",
        d: "M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"
    })], -1),
    co = o("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "currentColor",
        class: "bi bi-arrow-down",
        viewBox: "0 0 16 16"
    }, [o("path", {
        "fill-rule": "evenodd",
        d: "M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
    })], -1),
    lo = L({
        __name: "MenuSubCategories",
        setup(i) {
            const s = P(),
                n = P(),
                t = B(),
                d = ie(),
                p = P(!1),
                r = P(!1),
                v = P(""),
                u = P(null),
                {
                    generateSubCategoryUrl: h
                } = ee(),
                {
                    t: l
                } = Te(),
                g = F(() => H(() =>
                    import ("./dialog.esm-2f20b2a6-v6.js"), ["dialog.esm-2f20b2a6-v6.js", "ripple.esm-b96dafad-v6.js", "runtime-core.esm-bundler-e1b83cdf-v6.js", "runtime-dom.esm-bundler-8f0d0aae-v6.js"])),
                m = F(() => H(() =>
                    import ("./button.esm-1fd68dd4-v6.js"), ["button.esm-1fd68dd4-v6.js", "ripple.esm-b96dafad-v6.js", "runtime-core.esm-bundler-e1b83cdf-v6.js"])),
                S = z(() => {
                    const b = t.categories.find(w => w.id === t.activeCategory);
                    return b ? b.child : []
                }),
                A = () => {
                    n.value && (J.set(re(n.value), {
                        opacity: 0,
                        translateX: 20
                    }), J({
                        targets: re(n.value),
                        translateX: 0,
                        opacity: 1,
                        easing: "easeOutCubic",
                        duration: 600,
                        delay: J.stagger(100, {
                            start: 0
                        })
                    }))
                };
            O(() => t.activeCategory, () => {
                R(() => {
                    A()
                })
            });
            const oe = async () => {
                    if (!t.activeCategory || !v.value) return;
                    p.value = !0;
                    let b = null;
                    if (u.value ? (b = await ve(t.restaurant.id, u.value.id, v.value), u.value = null) : b = await fe(t.restaurant.id, t.activeCategory, v.value), !b) return;
                    const w = await se(t.restaurant.slug);
                    t.$patch({
                        categories: w
                    }), p.value = !1, r.value = !1, t.activeSubCategory = b.id, d.showModal(l("translation_account.successfully"), l("translation_account.message.saved"), "success")
                },
                V = async () => {
                    if (!t.activeSubCategory || !confirm(l("translation_account.menu.are_you_sure"))) return;
                    await ye(t.restaurant.id, t.activeSubCategory), d.showModal(l("translation_account.successfully"), l("translation_account.category.was.deleted"), "success"), t.activeSubCategory = null, r.value = !1;
                    const b = await se(t.restaurant.slug),
                        w = await be(t.restaurant.slug);
                    t.$patch({
                        categories: b,
                        products: w
                    })
                },
                N = b => {
                    t.editMode && (t.activeSubCategory = b.id, v.value = b.name, r.value = !0, u.value = b)
                },
                Z = async (b, w) => {
                    r.value = !1, d.showModal(l("translation_account.please_wait"), "Moving...", "info"), await we(t.restaurant.id, b, w);
                    const C = await se(t.restaurant.slug);
                    d.showModal(l("translation_account.successfully"), l("translation_account.category_was_moved"), "success"), t.$patch({
                        categories: C
                    })
                };
            return (b, w) => e(S).length || e(t).editMode ? (a(), c("section", {
                key: 0,
                class: "subcategories-section",
                ref_key: "rootEl",
                ref: s
            }, [e(t).editMode && e(t).activeCategory ? (a(), c("button", {
                key: 0,
                class: "subcategories-section__item no-wrap",
                onClick: w[0] || (w[0] = C => {
                    u.value = null, r.value = !0, v.value = ""
                }),
                disabled: p.value
            }, "+ " + $(b.$t("translation_account.subcategory.add")), 9, Xt)) : y("", !0), o("div", {
                class: T(["subcategories-section__item no-wrap no-user-select", {
                    "subcategories-section__item--active": !e(t).activeSubCategory
                }]),
                onClick: w[1] || (w[1] = C => e(t).activeSubCategory = null),
                onContextmenu: X(C => {}, ["prevent"])
            }, $(b.$t("translation_mobile.all")), 43, Yt), (a(!0), c(U, null, q(e(S), C => (a(), c("div", {
                ref_for: !0,
                ref_key: "animatedEls",
                ref: n,
                key: C.id,
                class: T(["subcategories-section__item text-overflow", {
                    "subcategories-section__item--active": C.id === e(t).activeSubCategory
                }])
            }, [k(Y, {
                href: e(h)(C.id),
                "update-state": () => e(t).activeSubCategory = C.id,
                class: "no-user-select"
            }, {
                default: M(() => [I($(C.name), 1)]),
                _: 2
            }, 1032, ["href", "update-state"]), e(t).editMode ? (a(), c("div", {
                key: 0,
                style: {
                    padding: "0 5px",
                    "margin-left": "10px",
                    cursor: "pointer",
                    "border-left": "1px solid rgba(100, 100, 100, 0.5)"
                },
                onClick: X(_ => N(C), ["prevent"])
            }, to, 8, Kt)) : y("", !0)], 2))), 128)), e(t).editMode ? (a(), E(e(g), {
                key: 1,
                header: b.$t("translation_account.sub.category"),
                visible: r.value,
                "onUpdate:visible": w[5] || (w[5] = C => r.value = C)
            }, {
                footer: M(() => [k(e(m), {
                    label: b.$t("translation_account.establishment.form.save_button"),
                    onClick: oe,
                    loading: p.value
                }, null, 8, ["label", "loading"]), u.value ? (a(), E(e(m), {
                    key: 0,
                    label: b.$t("translation_account.establishment.form.delete_button"),
                    icon: "pi pi-trash",
                    class: "p-button-danger",
                    onClick: V
                }, null, 8, ["label"])) : y("", !0)]),
                default: M(() => [o("div", oo, [o("div", so, [o("div", ao, $(b.$t("translation_account.name")), 1), o("div", no, [Ie(o("input", {
                    "onUpdate:modelValue": w[2] || (w[2] = C => v.value = C),
                    type: "text"
                }, null, 512), [
                    [me, v.value]
                ])])])]), u.value ? (a(), c("div", ro, [o("button", {
                    class: "btn btn--icon",
                    onClick: w[3] || (w[3] = C => Z(u.value.id, "up"))
                }, [I(" Move Left "), io]), o("button", {
                    class: "btn btn--icon",
                    onClick: w[4] || (w[4] = C => Z(u.value.id, "down"))
                }, [I(" Move Right "), co])])) : y("", !0)]),
                _: 1
            }, 8, ["header", "visible"])) : y("", !0)], 512)) : y("", !0)
        }
    });
const uo = G("premium-modal", {
        state: () => ({
            show: !1,
            message: ""
        }),
        actions: {
            showModal(i) {
                this.$patch({
                    show: !0,
                    message: i
                })
            }
        }
    }),
    _o = G("stripe-payment", {
        state: () => ({
            showStripePaymentPage: !1
        })
    }),
    go = "/favicon/android-chrome-192x192.png",
    ho = {
        class: "page stripe-payment-page"
    },
    mo = o("div", {
        class: "stripe-payment-page__header"
    }, [o("div", {
        style: {
            display: "flex",
            "flex-direction": "column",
            "align-items": "center"
        }
    }, [o("img", {
        src: go,
        alt: "Instalacarte",
        style: {
            width: "64px"
        }
    }), o("span", {
        style: {
            "font-size": "1.3rem"
        }
    }, "instalacarte")])], -1),
    po = L({
        __name: "StripePaymentPage",
        setup(i) {
            const s = P();
            return te(() => {
                if (!window.Stripe || !s.value) return;
                const n = window.Stripe("pk_test_51MPTPtKxlF745PMFwSyPJmDfa3RxPwSUYGf8QbIZj74sawxILCppD0sV6BkvqBKpQclJmitk92YunlDc6m5w7oPr00Ix5A8EVA"),
                    t = {
                        mode: "payment",
                        amount: 1215,
                        currency: "eur",
                        appearance: {
                            theme: "flat"
                        }
                    };
                n.elements(t).create("payment").mount(s.value)
            }), (n, t) => (a(), c("div", ho, [mo, o("div", {
                class: "stripe-payment-page__stripe-container",
                ref_key: "stripeMountContainer",
                ref: s
            }, null, 512)]))
        }
    });
const vo = ["us", "gb", "de", "es", "fr", "it"];

function fo() {
    const i = B(),
        {
            DISABLE_MENU_TOP_BANNER: s,
            hasEnoughQuota: n
        } = le();
    return {
        showAdBanner: z(() => {
            if (i.editMode || ue() || n(s)) return !1;
            const d = i.restaurant.menuCountryCode;
            return d ? vo.includes(d.toLowerCase()) : !0
        })
    }
}
const yo = o("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "currentColor",
        class: "bi bi-chevron-left",
        viewBox: "0 0 16 16"
    }, [o("path", {
        "fill-rule": "evenodd",
        d: "M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
    })], -1),
    bo = [yo],
    wo = o("div", {
        style: {
            "flex-grow": "1"
        }
    }, null, -1),
    Co = o("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "currentColor",
        class: "bi bi-suit-heart-fill",
        viewBox: "0 0 16 16"
    }, [o("path", {
        d: "M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z"
    })], -1),
    ko = [Co],
    $o = o("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "currentColor",
        class: "bi bi-pencil",
        viewBox: "0 0 16 16"
    }, [o("path", {
        d: "M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"
    })], -1),
    So = [$o],
    xo = ["innerHTML"],
    Mo = ["href"],
    Oo = L({
        __name: "MenuPage",
        emits: ["toggleSidebar"],
        setup(i, {
            emit: s
        }) {
            K().routeParams;
            const t = P(!1),
                d = P();
            let p = [];
            const r = B(),
                v = Q(),
                u = ie(),
                h = uo(),
                l = ge(),
                g = _o(),
                {
                    showAdBanner: m
                } = fo(),
                S = "https://app.instalacarte.com",
                {
                    activeCategory: A,
                    activeSubCategory: oe,
                    activeProduct: V
                } = Se(),
                N = z({
                    get: () => V.value && r.products.find(_ => _.id === V.value) || null,
                    set: _ => {
                        V.value = _ ? _.id : null
                    }
                }),
                Z = _ => {
                    const f = _.target;
                    if (!f) return;
                    const x = f.scrollTop,
                        D = document.body;
                    x > 66 && !D.classList.contains("scrolled") && D.classList.add("scrolled"), x <= 66 && D.classList.contains("scrolled") && D.classList.remove("scrolled")
                },
                b = () => {
                    const _ = r.products.find(f => f.id === r.activeProduct);
                    _ && (r.editProduct = {
                        id: _.id,
                        name: _.name,
                        description: _.description,
                        price: _.price,
                        category: _.category,
                        choices: _.choices,
                        addons: _.addons,
                        is_active: _.is_active,
                        is_popular: _.is_popular,
                        image: _.image
                    })
                };
            te(() => {
                t.value = !0;
                let _ = O(A, (f, x) => {
                    if (x !== void 0 && x !== f && (oe.value = null, f)) {
                        const D = r.categories.find(he => he.id === f);
                        D && (D.child.length ? window.document.body.classList.remove("no-sub-categories") : window.document.body.classList.add("no-sub-categories"))
                    }
                }, {
                    immediate: !0
                });
                p.push(_), _ = O(() => r.activeCategory, () => {
                    var f;
                    d.value && ((f = d.value) == null || f.scrollTo(0, 0))
                }), p.push(_)
            }), de(() => {
                p.forEach(_ => _()), p = []
            });
            const w = _ => {
                    v.toggleFavorite(_)
                },
                C = () => {
                    const _ = {};
                    let f = 0;
                    if (r.restaurant.backgroundImage) {
                        const x = "https://instalacarte.com" + r.restaurant.backgroundImage;
                        _.backgroundImage = `url(${x})`, _.backgroundSize = "cover", _.backgroundPosition = "center"
                    }
                    return !Me() && r.editMode && !ue() && (f += 28), m.value && (f += 110), _.top = `${f}px`, _
                };
            return (_, f) => (a(), c(U, null, [o("div", {
                id: "menu-page",
                class: "page",
                style: ae([{
                    display: "flex",
                    "flex-direction": "column"
                }, C()])
            }, [k(dt), o("div", {
                ref_key: "scrollableContainer",
                ref: d,
                class: T(["menu-content", {
                    [`menu-content--categories-${e(r).restaurant.categoriesDisplayMode}`]: !0
                }]),
                onScrollPassiveCapture: Z
            }, [k(lo), k(Ot)], 34)], 4), t.value ? (a(), E(Be, {
                key: 0,
                to: "#pages"
            }, [k(ne, {
                name: "page"
            }, {
                default: M(() => [e(N) ? (a(), E(Pe, {
                    key: 0
                }, {
                    "page-header": M(() => [o("button", {
                        class: "btn btn--icon btn--icon--lg",
                        style: {
                            "background-color": "#f0f0f0"
                        },
                        onClick: f[0] || (f[0] = x => e(r).activeProduct = null)
                    }, bo), wo, e(r).editMode ? y("", !0) : (a(), c("button", {
                        key: 0,
                        class: T(["btn btn--icon btn--icon--lg", {
                            "btn--heart--active": e(v).favorites.includes(e(r).activeProduct)
                        }]),
                        style: {
                            "background-color": "#f0f0f0",
                            color: "#ccc"
                        },
                        onClick: f[1] || (f[1] = x => w(e(r).activeProduct))
                    }, ko, 2)), e(r).editMode ? (a(), c("button", {
                        key: 1,
                        class: "btn btn--icon btn--icon--lg",
                        onClick: b,
                        style: {
                            "background-color": "white"
                        }
                    }, So)) : y("", !0)]),
                    default: M(() => [(a(), E(Ee, {
                        product: e(N),
                        key: e(N).id
                    }, null, 8, ["product"]))]),
                    _: 1
                })) : y("", !0)]),
                _: 1
            }), k(ne, {
                name: "page"
            }, {
                default: M(() => [e(g).showStripePaymentPage ? (a(), E(po, {
                    key: 0
                })) : y("", !0)]),
                _: 1
            })])) : y("", !0), !e(r).editMode && e(r).canOrder ? (a(), E(xe, {
                key: 1
            })) : y("", !0), k(j, {
                show: e(u).show,
                "onUpdate:show": f[2] || (f[2] = x => e(u).show = x),
                title: e(u).title,
                type: e(u).type
            }, {
                default: M(() => [e(u).rawHtml ? (a(), c("div", {
                    key: 0,
                    innerHTML: e(u).message
                }, null, 8, xo)) : (a(), c(U, {
                    key: 1
                }, [I($(e(u).message), 1)], 64))]),
                _: 1
            }, 8, ["show", "title", "type"]), k(j, {
                show: e(h).show,
                "onUpdate:show": f[3] || (f[3] = x => e(h).show = x),
                title: _.$t("translation_site.please_subscribe"),
                type: "info"
            }, {
                default: M(() => [o("p", null, $(e(h).message), 1), o("p", null, [I("Click "), o("a", {
                    href: e(S) + "/#/premium/subscribe"
                }, "here", 8, Mo), I(" to subscribe.")])]),
                _: 1
            }, 8, ["show", "title"]), k(j, {
                show: e(l).showSearchBar,
                "onUpdate:show": f[4] || (f[4] = x => e(l).showSearchBar = x),
                type: "info"
            }, {
                default: M(() => [k(Jt)]),
                _: 1
            }, 8, ["show"])], 64))
        }
    });
export {
    Oo as _, vt as a, Ne as b, fo as c, Qe as u
};