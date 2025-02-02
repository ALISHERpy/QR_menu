import {
    d as r
} from "./pinia-0d93e188-v6.js";
const u = r("global", {
    state: () => ({
        restaurant: null,
        categories: [],
        products: [],
        languages: [],
        activeCategory: null,
        activeSubCategory: null,
        activeProduct: null,
        settingsPageOpen: !1,
        editMode: !0,
        newProduct: null,
        editProduct: null,
        newCategory: null,
        editCategory: null
    }),
    getters: {
        canOrder() {
            return this.restaurant.orderTypes.length > 0
        },
        popularProducts() {
            return this.products.filter(e => e.is_popular === !0 && e.is_active)
        },
        systemLanguages() {
            return this.languages ? this.languages.filter(e => e.system) : []
        },
        restaurantAvailableLanguages() {
            if (!this.languages) return [];
            if (!this.restaurant.translationsEnabled) return this.systemLanguages;
            let e = [];
            const a = this.languages.find(t => t.code === this.restaurant.menuLanguageCode);
            return a && e.push(a), this.systemLanguages.forEach(t => {
                t.code !== this.restaurant.menuLanguageCode && e.push(t)
            }), e
        }
    }
});
export {
    u
};