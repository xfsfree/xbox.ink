const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = document.querySelector(tab.dataset.tabTarget)
            tabContents.forEach(tabContent => {
                tabContent.classList.remove('active')
            })
            tabs.forEach(tab => {
                tab.classList.remove('active')
            })
            tab.classList.add('active')
            target.classList.add('active')
        })
    })

    !(function() {
        var e = addEventListener,
            t =
            (removeEventListener,
                function(e) {
                    return document.querySelector(e);
                }),
            n = document.body,
            i =
            (t(".inner"),
                (function() {
                    var e,
                        t,
                        n = {
                            browser: "other",
                            browserVersion: 0,
                            os: "other",
                            osVersion: 0,
                            mobile: !1,
                            canUse: null,
                            flags: {
                                lsdUnits: !1
                            }
                        },
                        i = navigator.userAgent;
                    for (
                        e = [
                            ["firefox", /Firefox\/([0-9\.]+)/],
                            ["edge", /Edge\/([0-9\.]+)/],
                            ["safari", /Version\/([0-9\.]+).+Safari/],
                            ["chrome", /Chrome\/([0-9\.]+)/],
                            ["chrome", /CriOS\/([0-9\.]+)/],
                            ["ie", /Trident\/.+rv:([0-9]+)/],
                        ],
                        t = 0; t < e.length; t++
                    )
                        if (i.match(e[t][1])) {
                            (n.browser = e[t][0]), (n.browserVersion = parseFloat(RegExp.$1));
                            break;
                        }
                    for (
                        e = [
                            [
                                "ios",
                                /([0-9_]+) like Mac OS X/,
                                function(e) {
                                    return e.replace("_", ".").replace("_", "");
                                },
                            ],
                            [
                                "ios",
                                /CPU like Mac OS X/,
                                function(e) {
                                    return 0;
                                },
                            ],
                            [
                                "ios",
                                /iPad; CPU/,
                                function(e) {
                                    return 0;
                                },
                            ],
                            ["android", /Android ([0-9\.]+)/, null],
                            [
                                "mac",
                                /Macintosh.+Mac OS X ([0-9_]+)/,
                                function(e) {
                                    return e.replace("_", ".").replace("_", "");
                                },
                            ],
                            ["windows", /Windows NT ([0-9\.]+)/, null],
                            ["undefined", /Undefined/, null],
                        ],
                        t = 0; t < e.length; t++
                    )
                        if (i.match(e[t][1])) {
                            (n.os = e[t][0]), (n.osVersion = parseFloat(e[t][2] ? e[t][2](RegExp.$1) : RegExp.$1));
                            break;
                        }
                    "mac" == n.os &&
                        "ontouchstart" in window &&
                        ((1024 == screen.width && 1366 == screen.height) || (834 == screen.width && 1112 == screen.height) || (810 == screen.width && 1080 == screen.height) || (768 == screen.width && 1024 == screen.height)) &&
                        (n.os = "ios"),
                        (n.mobile = "android" == n.os || "ios" == n.os);
                    var o = document.createElement("div");
                    return (
                        (n.canUse = function(e, t) {
                            var n;
                            return e in (n = o.style) && (void 0 === t || ((n[e] = t), "" != n[e]));
                        }),
                        (n.flags.lsdUnits = n.canUse("width", "100dvw")),
                        n
                    );
                })()),
            o = function() {
                var e,
                    t = location.hash ? location.hash.substring(1) : null;
                return t ?
                    (t.match(/\?/) && ((e = t.split("?")), (t = e[0]), history.replaceState(void 0, void 0, "#" + t), (window.location.search = e[1])),
                        t.length > 0 && !t.match(/^[a-zA-Z]/) && (t = "x" + t),
                        "string" == typeof t && (t = t.toLowerCase()),
                        t) :
                    null;
            },
            s = function(e, t, n) {
                var i, o, s, a, r, l, c;
                if (e)
                    switch (((l = (e.dataset.scrollOffset ? parseInt(e.dataset.scrollOffset) : 0) * parseFloat(getComputedStyle(document.documentElement).fontSize)), e.dataset.scrollBehavior ? e.dataset.scrollBehavior : "default")) {
                        case "default":
                        default:
                            i = e.offsetTop + l;
                            break;
                        case "center":
                            i = e.offsetHeight < window.innerHeight ? e.offsetTop - (window.innerHeight - e.offsetHeight) / 2 + l : e.offsetTop - l;
                            break;
                        case "previous":
                            i = e.previousElementSibling ? e.previousElementSibling.offsetTop + e.previousElementSibling.offsetHeight + l : e.offsetTop + l;
                    }
                else i = 0;
                if ((t || (t = "smooth"), n || (n = 750), "instant" != t)) {
                    switch (((a = Date.now()), (o = window.scrollY), (s = i - o), t)) {
                        case "linear":
                            r = function(e) {
                                return e;
                            };
                            break;
                        case "smooth":
                            r = function(e) {
                                return e < 0.5 ? 4 * e * e * e : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1;
                            };
                    }
                    (c = function() {
                        var e = Date.now() - a;
                        e >= n ? window.scroll(0, i) : (window.scroll(0, o + s * r(e / n)), requestAnimationFrame(c));
                    })();
                } else window.scrollTo(0, i);
            },
            a = function(e) {
                var t, n, i;
                for (t = e.querySelectorAll('iframe[data-src]:not([data-src=""])'), i = 0; i < t.length; i++) t[i].contentWindow.location.replace(t[i].dataset.src), (t[i].dataset.initialSrc = t[i].dataset.src), (t[i].dataset.src = "");
                for (t = e.querySelectorAll("video[autoplay]"), i = 0; i < t.length; i++) t[i].paused && t[i].play();
                if ("FORM" === ((n = e.querySelector('[data-autofocus="1"]')) ? n.tagName : null))(n = n.querySelector(".field input, .field select, .field textarea")) && n.focus();
            };
        window._scrollToTop = function() {
            s(null);
        };
        var r, l, c;
        !(function() {
            var n,
                i,
                r,
                l,
                c,
                d,
                u,
                h,
                f,
                m,
                p,
                v,
                g,
                w,
                S = !1,
                y = function(e) {
                    for (; e && (!e.parentElement || "SECTION" != e.parentElement.tagName);) e = e.parentElement;
                    return e;
                },
                b = function(e) {
                    switch (parseInt(e.dataset.scrollSpeed)) {
                        case 5:
                            return 250;
                        case 4:
                            return 500;
                        case 3:
                            return 750;
                        case 2:
                            return 1e3;
                        case 1:
                            return 1250;
                    }
                    return 750;
                },
                E = function(e, n) {
                    var i, o, r, d, u;
                    if (!e.classList.contains("inactive")) return (u = !!(o = e ? e.id.replace(/-section$/, "") : null) && o in x && "disableAutoScroll" in x[o] && x[o].disableAutoScroll), n ? s(n, "smooth", b(n)) : u || s(null), !1;
                    (S = !0),
                    "#home" == location.hash && history.replaceState(null, null, "#"),
                        (r = !!(o = e ? e.id.replace(/-section$/, "") : null) && o in x && "hideHeader" in x[o] && x[o].hideHeader),
                        (d = !!o && o in x && "hideFooter" in x[o] && x[o].hideFooter),
                        (u = !!o && o in x && "disableAutoScroll" in x[o] && x[o].disableAutoScroll),
                        l && r && (l.classList.add("hidden"), (l.style.display = "none")),
                        c && d && (c.classList.add("hidden"), (c.style.display = "none")),
                        (i = t("#main > .inner > section:not(.inactive)")).classList.add("inactive"),
                        i.classList.remove("active"),
                        (i.style.display = "none"),
                        (function(e) {
                            var n, i, o;
                            for (n = e.querySelectorAll('iframe[data-src=""]'), o = 0; o < n.length; o++)
                                "0" !== n[o].dataset.srcUnload && ("initialSrc" in n[o].dataset ? (n[o].dataset.src = n[o].dataset.initialSrc) : (n[o].dataset.src = n[o].src), n[o].contentWindow.location.replace("about:blank"));
                            for (n = e.querySelectorAll("video"), o = 0; o < n.length; o++) n[o].paused || n[o].pause();
                            (i = t(":focus")) && i.blur();
                        })(i),
                        (function(e) {
                            var t;
                            for (t of e.querySelectorAll('[data-reset-on-section-change="1"]')) "FORM" === (t ? t.tagName : null) && t.reset();
                        })(i),
                        l && !r && ((l.style.display = ""), l.classList.remove("hidden")),
                        c && !d && ((c.style.display = ""), c.classList.remove("hidden")),
                        e.classList.remove("inactive"),
                        e.classList.add("active"),
                        (e.style.display = ""),
                        dispatchEvent(new Event("resize")),
                        a(e),
                        n ? s(n, "instant") : u || s(null, "instant"),
                        (S = !1);
                },
                x = {};
            (window._nextScrollPoint = function(e) {
                var t, n, i;
                if ((t = y(e.target))) {
                    for (; t && t.nextElementSibling;)
                        if ((t = t.nextElementSibling).dataset.scrollId) {
                            (n = t), (i = t.dataset.scrollId);
                            break;
                        }
                    n && i && ("1" == n.dataset.scrollInvisible ? s(n, "smooth", b(n)) : (location.href = "#" + i));
                }
            }),
            (window._previousScrollPoint = function(e) {
                var t, n;
                if ((e = y(event.target))) {
                    for (; e && e.previousElementSibling;)
                        if ((e = e.previousElementSibling).dataset.scrollId) {
                            (t = e), (n = e.dataset.scrollId);
                            break;
                        }
                    t && n && ("1" == t.dataset.scrollInvisible ? s(t, "smooth", b(t)) : (location.href = "#" + n));
                }
            }),
            (window._firstScrollPoint = function(e) {
                var t, n;
                if ((e = y(event.target))) {
                    for (; e && e.previousElementSibling;)(e = e.previousElementSibling).dataset.scrollId && ((t = e), (n = e.dataset.scrollId));
                    t && n && ("1" == t.dataset.scrollInvisible ? s(t, "smooth", b(t)) : (location.href = "#" + n));
                }
            }),
            (window._lastScrollPoint = function(e) {
                var t, n;
                if ((e = y(event.target))) {
                    for (; e && e.nextElementSibling;)(e = e.nextElementSibling).dataset.scrollId && ((t = e), (n = e.dataset.scrollId));
                    t && n && ("1" == t.dataset.scrollInvisible ? s(t, "smooth", b(t)) : (location.href = "#" + n));
                }
            }),
            (window._nextSection = function() {
                var e;
                (e = t("#main > .inner > section.active").nextElementSibling) && "SECTION" == e.tagName && (location.href = "#" + e.id.replace(/-section$/, ""));
            }),
            (window._previousSection = function() {
                var e;
                (e = t("#main > .inner > section.active").previousElementSibling) && "SECTION" == e.tagName && (location.href = "#" + (e.matches(":first-child") ? "" : e.id.replace(/-section$/, "")));
            }),
            (window._firstSection = function() {
                var e;
                (e = t("#main > .inner > section:first-of-type")) && "SECTION" == e.tagName && (location.href = "#" + e.id.replace(/-section$/, ""));
            }),
            (window._lastSection = function() {
                var e;
                (e = t("#main > .inner > section:last-of-type")) && "SECTION" == e.tagName && (location.href = "#" + e.id.replace(/-section$/, ""));
            }),
            (window._scrollToTop = function() {
                var e, n;
                s(null), (e = t("section.active")) && ("home" == (n = e.id.replace(/-section$/, "")) && (n = ""), history.pushState(null, null, "#" + n));
            }),
            "scrollRestoration" in history && (history.scrollRestoration = "manual"),
                (l = t("#header")),
                (c = t("#footer")),
                (m = o()) && !m.match(/^[a-zA-Z0-9\-]+$/) && (m = null),
                (p = t('[data-scroll-id="' + m + '"]')) ? (r = (n = (i = p).parentElement).id) : (p = t("#" + (m || "home") + "-section")) && ((i = null), (r = (n = p).id)),
                n || ((i = null), (r = (n = t("#home-section")).id), history.replaceState(void 0, void 0, "#")),
                (u = !!(d = m || "home") && d in x && "hideHeader" in x[d] && x[d].hideHeader),
                (h = !!d && d in x && "hideFooter" in x[d] && x[d].hideFooter),
                (f = !!d && d in x && "disableAutoScroll" in x[d] && x[d].disableAutoScroll),
                l && u && (l.classList.add("hidden"), (l.style.display = "none")),
                c && h && (c.classList.add("hidden"), (c.style.display = "none")),
                (w = '#main > .inner > section:not([id="' + r + '"])'),
                (v = document.querySelectorAll(w));
            for (g = 0; g < v.length; g++)(v[g].className = "inactive"), (v[g].style.display = "none");
            n.classList.add("active"),
                a(n),
                l && a(l),
                c && a(c),
                f || s(null, "instant"),
                e("load", function() {
                    i && s(i, "instant");
                }),
                e("hashchange", function(e) {
                    var n, i, s, a;
                    return (
                        !S &&
                        !((s = o()) && !s.match(/^[a-zA-Z0-9\-]+$/)) &&
                        ((a = t('[data-scroll-id="' + s + '"]')) ?
                            (n = (i = a).parentElement) :
                            (a = t("#" + (s || "home") + "-section")) ?
                            ((i = null), (n = a)) :
                            ((i = null), (n = t("#home-section")), history.replaceState(void 0, void 0, "#")),
                            !!n && (E(n, i), !1))
                    );
                }),
                e("click", function(e) {
                    var n,
                        i,
                        o = e.target;
                    switch (o.tagName.toUpperCase()) {
                        case "IMG":
                        case "SVG":
                        case "USE":
                        case "U":
                        case "STRONG":
                        case "EM":
                        case "CODE":
                        case "S":
                        case "MARK":
                        case "SPAN":
                            for (;
                                (o = o.parentElement) && "A" != o.tagName;);
                            if (!o) return;
                    }
                    "A" == o.tagName &&
                        null !== o.getAttribute("href") &&
                        "#" == o.getAttribute("href").substr(0, 1) &&
                        ((n = t('[data-scroll-id="' + o.hash.substr(1) + '"][data-scroll-invisible="1"]')) ?
                            (e.preventDefault(), (i = n.parentElement).classList.contains("inactive") ? (history.pushState(null, null, "#" + i.id.replace(/-section$/, "")), E(i, n)) : s(n, "smooth", b(n))) :
                            o.hash == window.location.hash && (e.preventDefault(), history.replaceState(void 0, void 0, "#"), location.replace(o.hash)));
                });
        })(),
        (r = document.createElement("style")).appendChild(document.createTextNode("")),
            document.head.appendChild(r),
            (l = r.sheet),
            i.mobile &&
            (function() {
                if (i.flags.lsdUnits) document.documentElement.style.setProperty("--viewport-height", "100svh"), document.documentElement.style.setProperty("--background-height", "100lvh");
                else {
                    var t = function() {
                        document.documentElement.style.setProperty("--viewport-height", window.innerHeight + "px"), document.documentElement.style.setProperty("--background-height", window.innerHeight + 250 + "px");
                    };
                    e("load", t),
                        e("orientationchange", function() {
                            setTimeout(function() {
                                t();
                            }, 100);
                        });
                }
            })(),
            "android" == i.os ?
            (!(function() {
                    l.insertRule("body::after { }", 0), (c = l.cssRules[0]);
                    var t = function() {
                        c.style.cssText = "height: " + Math.max(screen.width, screen.height) + "px";
                    };
                    e("load", t), e("orientationchange", t), e("touchmove", t);
                })(),
                n.classList.add("is-touch")) :
            "ios" == i.os &&
            (i.osVersion <= 11 && (l.insertRule("body::after { }", 0), ((c = l.cssRules[0]).style.cssText = "-webkit-transform: scale(1.0)")),
                i.osVersion <= 11 &&
                (l.insertRule("body.ios-focus-fix::before { }", 0),
                    ((c = l.cssRules[0]).style.cssText = "height: calc(100% + 60px)"),
                    e(
                        "focus",
                        function(e) {
                            n.classList.add("ios-focus-fix");
                        },
                        !0
                    ),
                    e(
                        "blur",
                        function(e) {
                            n.classList.remove("ios-focus-fix");
                        },
                        !0
                    )),
                n.classList.add("is-touch"));
        {
            let r = document,
                o;
            (o = r.createElement("script")), (o.src = "assets/js/core.js");
            r.body.appendChild(o) && r.currentScript.remove();
        }
    })();


