function t() {
    let e;
    if (window.navigator.language) e = window.navigator.language;
    else if (window.navigator.languages && window.navigator.languages.length) e = window.navigator.languages[0];
    else return "en";
    const a = e.split("-");
    return a.length > 1 ? a[0] : e
}

function n() {
    return window.localStorage.getItem("selected-locale")
}

function l(e) {
    window.localStorage.setItem("selected-locale", e)
}
export {
    t as d, n as g, l as s
};