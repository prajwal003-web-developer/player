module.exports = [
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("react/jsx-dev-runtime", () => require("react/jsx-dev-runtime"));

module.exports = mod;
}),
"[externals]/react/jsx-runtime [external] (react/jsx-runtime, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("react/jsx-runtime", () => require("react/jsx-runtime"));

module.exports = mod;
}),
"[externals]/react [external] (react, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("react", () => require("react"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/pages-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/pages-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/pages-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/pages-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/react-dom [external] (react-dom, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("react-dom", () => require("react-dom"));

module.exports = mod;
}),
"[project]/pages/player/index.js [api] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Page,
    "servers",
    ()=>servers
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$head$2e$js__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/head.js [api] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/router.js [api] (ecmascript)");
;
;
;
const servers = [
    //  'https://rivestream.net/embed?', make it when special
    "https://player.videasy.net/",
    "https://player.vidzee.wtf/embed/",
    "https://vidsync.xyz/embed/movie/",
    'https://vidfast.pro/',
    'https://vidsrc-embed.ru/embed/',
    "https://vidrock.net/",
    "https://primesrc.me/embed/",
    'https://vidnest.fun/',
    'https://111movies.com/',
    "https://spencerdevs.xyz/movie/",
    'https://www.vidking.net/embed/'
];
function Page() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$api$5d$__$28$ecmascript$29$__["useRouter"])();
    let { server, type, id, season, episode } = router.query;
    if (!server) {
        server = 1;
    }
    let link = '';
    const l1 = servers[server - 1];
    if (type == 'tv') {
        link = servers[server - 1] + 'tv/' + id + '/' + season + '/' + episode;
        if (l1.startsWith("https://rivestream.net")) {
            servers[server - 1] + 'type=tv&id=' + id + '&season=' + season + '&episode' + episode;
        } else if (l1.startsWith("https://primesrc.me/embed")) {
            link = l1 + 'tv?tmdb=' + id + '&season=' + season + '&episode=' + episode;
        }
    } else {
        link = servers[server - 1] + 'movie/' + id;
        if (link.startsWith("https://rivestream.net")) {
            link = servers[server - 1] + 'type=movie&id=' + id;
        } else if (l1.startsWith("https://primesrc.me/embed")) {
            link = li + 'movie&tmdb=' + id;
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("style", {
                children: `
        * {
        margin:0;
        padding:0;
        background:black;
        color:white;
   }`
            }, void 0, false, {
                fileName: "[project]/pages/player/index.js",
                lineNumber: 69,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("iframe", {
                src: link,
                style: {
                    width: "100%",
                    height: "96dvh",
                    margin: 0,
                    border: "0"
                },
                allowFullScreen: true,
                allow: "encrypted-media"
            }, void 0, false, {
                fileName: "[project]/pages/player/index.js",
                lineNumber: 78,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/pages/api/number.js [api] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>handler
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$player$2f$index$2e$js__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pages/player/index.js [api] (ecmascript)");
;
function handler(req, res) {
    // Array of numbers to send
    const numbers = __TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$player$2f$index$2e$js__$5b$api$5d$__$28$ecmascript$29$__["servers"].length;
    res.status(200).json({
        numbers
    });
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__5bc742a4._.js.map