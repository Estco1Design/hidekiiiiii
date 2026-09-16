module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/dynamic-access-async-storage.external.js [external] (next/dist/server/app-render/dynamic-access-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/dynamic-access-async-storage.external.js", () => require("next/dist/server/app-render/dynamic-access-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/runtime-reacts.external.js [external] (next/dist/server/runtime-reacts.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/runtime-reacts.external.js", () => require("next/dist/server/runtime-reacts.external.js"));

module.exports = mod;
}),
"[project]/src/components/CommandPalette.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CommandPalette",
    ()=>CommandPalette
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$projects$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/projects.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
const navItems = [
    {
        label: 'WORK',
        href: '/work',
        shortcut: 'W'
    },
    {
        label: 'STUDIO',
        href: '/studio',
        shortcut: 'S'
    },
    {
        label: 'SHOP',
        href: '/shop',
        shortcut: 'O'
    },
    {
        label: 'ARCHIVE',
        href: '/archive',
        shortcut: 'A'
    },
    {
        label: 'ABOUT',
        href: '/about',
        shortcut: 'B'
    },
    {
        label: 'CONTACT',
        href: '/contact',
        shortcut: 'C'
    }
];
function CommandPalette({ isOpen, onClose }) {
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [
        isOpen
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleKeyDown = (e)=>{
            if (e.key === '/') {
                e.preventDefault();
                if (!isOpen) return;
            }
            if (e.key === 'Escape') {
                onClose();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return ()=>window.removeEventListener('keydown', handleKeyDown);
    }, [
        isOpen,
        onClose
    ]);
    const filteredProjects = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$projects$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["projects"].filter((p)=>p.title.toLowerCase().includes(searchTerm.toLowerCase()) || p.category.toLowerCase().includes(searchTerm.toLowerCase()));
    const handleRandomWork = ()=>{
        const randomProject = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$projects$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["projects"][Math.floor(Math.random() * __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$projects$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["projects"].length)];
        window.location.href = `/work/${randomProject.slug}`;
    };
    if (!isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-[100] bg-bg-primary/90 backdrop-blur-sm",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl px-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-bg-secondary border border-white/10 rounded-lg overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 border-b border-white/10",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            ref: inputRef,
                            type: "text",
                            placeholder: "Search projects or navigate...",
                            value: searchTerm,
                            onChange: (e)=>setSearchTerm(e.target.value),
                            className: "w-full bg-transparent text-text-secondary text-lg outline-none placeholder:text-text-primary/40"
                        }, void 0, false, {
                            fileName: "[project]/src/components/CommandPalette.tsx",
                            lineNumber: 66,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/CommandPalette.tsx",
                        lineNumber: 65,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs-custom text-text-primary/50 uppercase tracking-wider px-3 py-2",
                                children: "Navigate"
                            }, void 0, false, {
                                fileName: "[project]/src/components/CommandPalette.tsx",
                                lineNumber: 78,
                                columnNumber: 13
                            }, this),
                            navItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: item.href,
                                    onClick: onClose,
                                    className: "flex justify-between items-center px-3 py-3 hover:bg-white/5 transition-colors group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-text-secondary",
                                            children: item.label
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CommandPalette.tsx",
                                            lineNumber: 88,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs-custom text-text-primary/40 group-hover:text-text-primary/70",
                                            children: item.shortcut
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CommandPalette.tsx",
                                            lineNumber: 89,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, item.href, true, {
                                    fileName: "[project]/src/components/CommandPalette.tsx",
                                    lineNumber: 82,
                                    columnNumber: 15
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/CommandPalette.tsx",
                        lineNumber: 77,
                        columnNumber: 11
                    }, this),
                    searchTerm && filteredProjects.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-2 border-t border-white/10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs-custom text-text-primary/50 uppercase tracking-wider px-3 py-2",
                                children: "Projects"
                            }, void 0, false, {
                                fileName: "[project]/src/components/CommandPalette.tsx",
                                lineNumber: 99,
                                columnNumber: 15
                            }, this),
                            filteredProjects.slice(0, 5).map((project)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: `/work/${project.slug}`,
                                    onClick: onClose,
                                    className: "flex justify-between items-center px-3 py-3 hover:bg-white/5 transition-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-text-secondary",
                                            children: project.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CommandPalette.tsx",
                                            lineNumber: 109,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs-custom text-text-primary/40",
                                            children: project.category
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CommandPalette.tsx",
                                            lineNumber: 110,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, project.id, true, {
                                    fileName: "[project]/src/components/CommandPalette.tsx",
                                    lineNumber: 103,
                                    columnNumber: 17
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/CommandPalette.tsx",
                        lineNumber: 98,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-2 border-t border-white/10",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleRandomWork,
                            className: "w-full text-left px-3 py-3 hover:bg-white/5 transition-colors text-text-secondary",
                            children: "RANDOM WORK →"
                        }, void 0, false, {
                            fileName: "[project]/src/components/CommandPalette.tsx",
                            lineNumber: 118,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/CommandPalette.tsx",
                        lineNumber: 117,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-4 py-3 bg-bg-tertiary text-xs-custom text-text-primary/40 text-center",
                        children: "Press ESC to close"
                    }, void 0, false, {
                        fileName: "[project]/src/components/CommandPalette.tsx",
                        lineNumber: 127,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/CommandPalette.tsx",
                lineNumber: 63,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/CommandPalette.tsx",
            lineNumber: 62,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/CommandPalette.tsx",
        lineNumber: 61,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/CommandPaletteProvider.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CommandPaletteProvider",
    ()=>CommandPaletteProvider,
    "useCommandPalette",
    ()=>useCommandPalette
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CommandPalette$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/CommandPalette.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
const CommandPaletteContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function useCommandPalette() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(CommandPaletteContext);
    if (!context) {
        throw new Error('useCommandPalette must be used within CommandPaletteProvider');
    }
    return context;
}
function CommandPaletteProvider({ children }) {
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleKeyDown = (e)=>{
            if (e.key === '/' && ![
                'INPUT',
                'TEXTAREA'
            ].includes(e.target.tagName)) {
                e.preventDefault();
                setIsOpen(true);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return ()=>window.removeEventListener('keydown', handleKeyDown);
    }, []);
    const open = ()=>setIsOpen(true);
    const close = ()=>setIsOpen(false);
    const toggle = ()=>setIsOpen((prev)=>!prev);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CommandPaletteContext.Provider, {
        value: {
            isOpen,
            open,
            close,
            toggle
        },
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CommandPalette$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CommandPalette"], {
                isOpen: isOpen,
                onClose: close
            }, void 0, false, {
                fileName: "[project]/src/components/CommandPaletteProvider.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/CommandPaletteProvider.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/CustomCursor.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CustomCursor",
    ()=>CustomCursor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function CustomCursor({ enabled = true }) {
    const cursorRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const labelRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isHoveringRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const isVisibleRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const hoverLabelRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isTouchRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const isInitializedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time truthy", 1) return;
        //TURBOPACK unreachable
        ;
        const isTouchDevice = undefined;
        const onMouseMove = undefined;
        const checkHover = undefined;
        const handleMouseOut = undefined;
    }, [
        enabled
    ]);
    if (!enabled || isTouchRef.current) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: cursorRef,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])('fixed top-0 left-0 w-2 h-2 bg-text-secondary rounded-full pointer-events-none z-[9999]', 'mix-blend-difference'),
                style: {
                    opacity: 0
                }
            }, void 0, false, {
                fileName: "[project]/src/components/CustomCursor.tsx",
                lineNumber: 128,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: labelRef,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])('fixed px-3 py-1.5 bg-text-secondary text-bg-primary', 'text-xs-custom tracking-wider uppercase rounded-full pointer-events-none z-[9999]', 'opacity-0 scale-0'),
                children: hoverLabelRef.current
            }, void 0, false, {
                fileName: "[project]/src/components/CustomCursor.tsx",
                lineNumber: 136,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/CustomCursor.tsx",
        lineNumber: 127,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/Loader.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Loader",
    ()=>Loader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-ssr] (ecmascript) <locals>");
'use client';
;
;
;
function Loader() {
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const intervalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const timeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const hasCompletedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (hasCompletedRef.current) return;
        // Simulate loading progress - faster on mobile
        const isTouchDevice = ("TURBOPACK compile-time value", "undefined") !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0);
        const speedMultiplier = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 1;
        intervalRef.current = window.setInterval(()=>{
            setProgress((prev)=>{
                const newProgress = prev + Math.random() * 15 * speedMultiplier;
                if (newProgress >= 100) {
                    if (intervalRef.current) {
                        clearInterval(intervalRef.current);
                        intervalRef.current = null;
                    }
                    // Only set timeout once when reaching 100%
                    if (!timeoutRef.current && !hasCompletedRef.current) {
                        hasCompletedRef.current = true;
                        timeoutRef.current = window.setTimeout(()=>{
                            setIsLoading(false);
                        }, ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 500);
                    }
                    return 100;
                }
                return newProgress;
            });
        }, 100);
        return ()=>{
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
            }
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
                timeoutRef.current = null;
            }
        };
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isLoading) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to('.loader-container', {
                opacity: 0,
                duration: 0.8,
                ease: 'power2.inOut',
                onComplete: ()=>{
                    document.querySelector('.loader-container')?.remove();
                }
            });
        }
    }, [
        isLoading
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "loader-container fixed inset-0 z-[10000] bg-bg-primary flex items-center justify-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-text-secondary text-editorial font-light tracking-tighter",
                    children: "HIDEKI"
                }, void 0, false, {
                    fileName: "[project]/src/components/Loader.tsx",
                    lineNumber: 70,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-4 flex items-center gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-24 h-[1px] bg-white/20 overflow-hidden",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-full bg-white transition-all duration-200",
                                style: {
                                    width: `${Math.min(progress, 100)}%`
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/Loader.tsx",
                                lineNumber: 75,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Loader.tsx",
                            lineNumber: 74,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-mono text-text-primary/60",
                            children: Math.min(Math.round(progress), 100).toString().padStart(3, '0')
                        }, void 0, false, {
                            fileName: "[project]/src/components/Loader.tsx",
                            lineNumber: 80,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Loader.tsx",
                    lineNumber: 73,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Loader.tsx",
            lineNumber: 69,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Loader.tsx",
        lineNumber: 68,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/Navigation.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Navigation",
    ()=>Navigation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Reveal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Reveal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$I18nProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/i18n/I18nProvider.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
const navItems = [
    {
        labelKey: 'nav.work',
        href: '/work'
    },
    {
        labelKey: 'nav.studio',
        href: '/studio'
    },
    {
        labelKey: 'nav.about',
        href: '/about'
    },
    {
        labelKey: 'nav.shop',
        href: '/shop'
    },
    {
        labelKey: 'nav.contact',
        href: '/contact'
    }
];
function Navigation({ theme = 'dark', hidden = false }) {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const { language, setLanguage, t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$I18nProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useI18n"])();
    const navRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mobileMenuOpen, setMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isTouch, setIsTouch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const isDark = theme === 'dark';
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        setIsTouch(isTouchDevice);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleScroll = ()=>{
            setScrolled(window.scrollY > 100);
        };
        window.addEventListener('scroll', handleScroll);
        return ()=>window.removeEventListener('scroll', handleScroll);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (navRef.current && !mobileMenuOpen) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(navRef.current.children, {
                opacity: 0,
                y: -20
            }, {
                opacity: 1,
                y: 0,
                duration: 0.6,
                stagger: 0.08,
                ease: 'power2.out'
            });
        }
    }, [
        mobileMenuOpen
    ]);
    // Close mobile menu on route change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setMobileMenuOpen(false);
    }, [
        pathname
    ]);
    const textColor = isDark ? 'text-text-secondary' : 'text-text-primary';
    const toggleMobileMenu = ()=>{
        setMobileMenuOpen(!mobileMenuOpen);
    };
    const toggleLanguage = ()=>{
        setLanguage(language === 'en' ? 'ru' : 'en');
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                ref: navRef,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])('fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-6 md:py-8 transition-all duration-500', scrolled && 'bg-bg-primary/80 backdrop-blur-sm', hidden && 'opacity-0 pointer-events-none'),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between items-start",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])('text-sm tracking-[0.2em] uppercase transition-opacity z-50', textColor),
                            "data-hover": "true",
                            children: "HIDEKI"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Navigation.tsx",
                            lineNumber: 87,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hidden md:flex items-center gap-8",
                            children: [
                                navItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: item.href,
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])('text-xs-custom transition-colors relative group', pathname === item.href ? textColor : `${textColor}/80`),
                                        "data-hover": "true",
                                        children: [
                                            t(item.labelKey),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])('absolute -bottom-1 left-0 h-[1px] transition-all duration-300', isDark ? 'bg-white' : 'bg-text-primary', pathname === item.href ? 'w-full' : 'w-0 group-hover:w-full')
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Navigation.tsx",
                                                lineNumber: 111,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, item.href, true, {
                                        fileName: "[project]/src/components/Navigation.tsx",
                                        lineNumber: 101,
                                        columnNumber: 15
                                    }, this)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: toggleLanguage,
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])('text-xs-custom transition-colors', textColor),
                                    "data-hover": "true",
                                    children: language.toUpperCase()
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navigation.tsx",
                                    lineNumber: 121,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Navigation.tsx",
                            lineNumber: 99,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "md:hidden flex items-center gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: toggleLanguage,
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])('text-xs-custom', textColor),
                                    "data-hover": "true",
                                    children: language.toUpperCase()
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navigation.tsx",
                                    lineNumber: 136,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])('z-50', textColor),
                                    onClick: toggleMobileMenu,
                                    "aria-label": "Menu",
                                    "data-hover": "true",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "24",
                                        height: "24",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "1",
                                        children: mobileMenuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                    x1: "18",
                                                    y1: "6",
                                                    x2: "6",
                                                    y2: "18"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Navigation.tsx",
                                                    lineNumber: 159,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                    x1: "6",
                                                    y1: "6",
                                                    x2: "18",
                                                    y2: "18"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Navigation.tsx",
                                                    lineNumber: 160,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Navigation.tsx",
                                            lineNumber: 158,
                                            columnNumber: 19
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                    x1: "3",
                                                    y1: "6",
                                                    x2: "21",
                                                    y2: "6"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Navigation.tsx",
                                                    lineNumber: 164,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                    x1: "3",
                                                    y1: "18",
                                                    x2: "21",
                                                    y2: "18"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Navigation.tsx",
                                                    lineNumber: 165,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Navigation.tsx",
                                            lineNumber: 163,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Navigation.tsx",
                                        lineNumber: 149,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navigation.tsx",
                                    lineNumber: 143,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Navigation.tsx",
                            lineNumber: 134,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Navigation.tsx",
                    lineNumber: 86,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Navigation.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, this),
            mobileMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-40 bg-bg-primary md:hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center justify-center h-full gap-8 px-6",
                    children: navItems.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Reveal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Reveal"], {
                            direction: "up",
                            delay: index * 0.1,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: item.href,
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])('text-2xl tracking-[0.2em] uppercase transition-colors', pathname === item.href ? textColor : `${textColor}/60`),
                                onClick: toggleMobileMenu,
                                "data-hover": "true",
                                children: t(item.labelKey)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navigation.tsx",
                                lineNumber: 182,
                                columnNumber: 17
                            }, this)
                        }, item.href, false, {
                            fileName: "[project]/src/components/Navigation.tsx",
                            lineNumber: 181,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/Navigation.tsx",
                    lineNumber: 179,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Navigation.tsx",
                lineNumber: 176,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Navigation.tsx",
        lineNumber: 77,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/Reveal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Reveal",
    ()=>Reveal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
function Reveal({ children, className, delay = 0, direction = 'up' }) {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const element = ref.current;
        if (!element) return;
        // Kill any existing ScrollTrigger on this element to prevent duplicates
        const scrollTriggers = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollTrigger"].getAll();
        for(let i = scrollTriggers.length - 1; i >= 0; i--){
            const trigger = scrollTriggers[i];
            if (trigger.trigger === element) {
                trigger.kill();
            }
        }
        const getTransformValue = ()=>{
            switch(direction){
                case 'up':
                    return 'translateY(100px)';
                case 'down':
                    return 'translateY(-100px)';
                case 'left':
                    return 'translateX(100px)';
                case 'right':
                    return 'translateX(-100px)';
                case 'scale':
                    return 'scale(0.9)';
                default:
                    return 'translateY(100px)';
            }
        };
        // Reset the element state before animating
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(element, {
            opacity: 0,
            transform: getTransformValue(),
            clearProps: "transform"
        });
        const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].context(()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(element, {
                opacity: 1,
                transform: 'none',
                duration: 1.2,
                delay,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: element,
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                }
            });
        }, element);
        return ()=>{
            ctx.revert();
        };
    }, [
        delay,
        direction
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])('reveal-element', className),
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/Reveal.tsx",
        lineNumber: 83,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/SmoothScroll.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SmoothScroll",
    ()=>SmoothScroll
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lenis$2f$dist$2f$lenis$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lenis/dist/lenis.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function SmoothScroll({ children }) {
    const lenisRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const rafIdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const isInitializedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    // Initialize Lenis once
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time truthy", 1) return;
        //TURBOPACK unreachable
        ;
        const isTouchDevice = undefined;
        const lenis = undefined;
        function raf(time) {
            lenis.raf(time);
            rafIdRef.current = requestAnimationFrame(raf);
        }
    }, []);
    // Reset scroll position on route change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (lenisRef.current) {
            lenisRef.current.scrollTo(0, {
                immediate: true
            });
        }
    }, [
        pathname
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/SmoothScroll.tsx",
        lineNumber: 60,
        columnNumber: 10
    }, this);
}
}),
"[project]/src/components/SoundControl.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SoundControl",
    ()=>SoundControl
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
function SoundControl({ enabled = false }) {
    const [isOn, setIsOn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const saved = localStorage.getItem('hideki-sound');
        if (saved === 'on') {
            setIsOn(true);
        }
    }, []);
    const toggleSound = ()=>{
        const newState = !isOn;
        setIsOn(newState);
        localStorage.setItem('hideki-sound', newState ? 'on' : 'off');
        // Dispatch custom event for other components to listen
        window.dispatchEvent(new CustomEvent('hideki-sound-change', {
            detail: {
                enabled: newState
            }
        }));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: toggleSound,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])('fixed bottom-6 right-6 z-40 px-3 py-2', 'text-xs-custom tracking-wider uppercase', 'bg-bg-secondary/80 backdrop-blur-sm border border-white/10', 'hover:bg-white/10 transition-colors', 'text-text-primary/70 hover:text-text-secondary'),
        "data-hover-label": isOn ? 'SOUND ON' : 'SOUND OFF',
        children: isOn ? 'SOUND ON' : 'SOUND OFF'
    }, void 0, false, {
        fileName: "[project]/src/components/SoundControl.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/data/projects.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getAllCategories",
    ()=>getAllCategories,
    "getProjectBySlug",
    ()=>getProjectBySlug,
    "getProjectsByCategory",
    ()=>getProjectsByCategory,
    "projects",
    ()=>projects
]);
const projects = [
    {
        id: '1',
        slug: 'echoes-of-silence',
        title: 'ECHOES OF SILENCE',
        year: 2026,
        category: 'FASHION',
        coverType: 'video',
        coverVideo: '/media/projects/echoes/cover.mp4',
        coverImage: '/media/projects/echoes/cover.jpg',
        previewVideo: '/media/projects/echoes/preview.mp4',
        theme: 'dark',
        accentColor: '#FFFFFF',
        client: 'Private Collection',
        location: 'Moscow',
        gallery: [
            {
                type: 'video',
                src: '/media/projects/echoes/video-01.mp4',
                size: 'fullscreen'
            },
            {
                type: 'image',
                src: '/media/projects/echoes/img-01.jpg',
                caption: 'Look 01',
                size: 'large',
                align: 'center'
            },
            {
                type: 'image',
                src: '/media/projects/echoes/img-02.jpg',
                size: 'medium',
                align: 'right'
            },
            {
                type: 'image',
                src: '/media/projects/echoes/img-03.jpg',
                size: 'small',
                align: 'left'
            },
            {
                type: 'video',
                src: '/media/projects/echoes/video-02.mp4',
                size: 'huge'
            },
            {
                type: 'image',
                src: '/media/projects/echoes/img-04.jpg',
                size: 'medium',
                align: 'center'
            }
        ],
        credits: [
            {
                role: 'Photography',
                name: 'HIDEKI Studio'
            },
            {
                role: 'Direction',
                name: 'HIDEKI Studio'
            },
            {
                role: 'Styling',
                name: 'HIDEKI Studio'
            },
            {
                role: 'Model',
                name: 'Anonymous'
            }
        ],
        description: 'An exploration of silence through fashion and movement. Shot on location in abandoned industrial spaces.'
    },
    {
        id: '2',
        slug: 'shadow-ritual',
        title: 'SHADOW RITUAL',
        year: 2026,
        category: 'CAMPAIGN',
        coverType: 'image',
        coverImage: '/media/projects/shadow/cover.jpg',
        previewVideo: '/media/projects/shadow/preview.mp4',
        theme: 'dark',
        accentColor: '#EAEAEA',
        client: 'Private Collection',
        gallery: [
            {
                type: 'image',
                src: '/media/projects/shadow/img-01.jpg',
                size: 'fullscreen'
            },
            {
                type: 'image',
                src: '/media/projects/shadow/img-02.jpg',
                size: 'large',
                align: 'center'
            },
            {
                type: 'image',
                src: '/media/projects/shadow/img-03.jpg',
                size: 'medium',
                align: 'right'
            },
            {
                type: 'video',
                src: '/media/projects/shadow/video-01.mp4',
                size: 'huge'
            }
        ],
        credits: [
            {
                role: 'Photography',
                name: 'HIDEKI Studio'
            },
            {
                role: 'Art Direction',
                name: 'HIDEKI Studio'
            },
            {
                role: 'Client',
                name: 'Private Collection'
            }
        ]
    },
    {
        id: '3',
        slug: 'void-portraits',
        title: 'VOID PORTRAITS',
        year: 2025,
        category: 'PORTRAIT',
        coverType: 'image',
        coverImage: '/media/projects/void/cover.jpg',
        previewVideo: '/media/projects/void/preview.mp4',
        theme: 'light',
        accentColor: '#050505',
        gallery: [
            {
                type: 'image',
                src: '/media/projects/void/img-01.jpg',
                size: 'large',
                align: 'center'
            },
            {
                type: 'image',
                src: '/media/projects/void/img-02.jpg',
                size: 'medium',
                align: 'left'
            },
            {
                type: 'image',
                src: '/media/projects/void/img-03.jpg',
                size: 'small',
                align: 'right'
            },
            {
                type: 'image',
                src: '/media/projects/void/img-04.jpg',
                size: 'large',
                align: 'center'
            }
        ],
        credits: [
            {
                role: 'Photography',
                name: 'HIDEKI Studio'
            },
            {
                role: 'Light',
                name: 'HIDEKI Studio'
            }
        ]
    },
    {
        id: '4',
        slug: 'neural-dreams',
        title: 'NEURAL DREAMS',
        year: 2026,
        category: 'AI',
        coverType: 'video',
        coverVideo: '/media/projects/neural/cover.mp4',
        coverImage: '/media/projects/neural/cover.jpg',
        previewVideo: '/media/projects/neural/preview.mp4',
        theme: 'dark',
        accentColor: '#A855F7',
        gallery: [
            {
                type: 'video',
                src: '/media/projects/neural/video-01.mp4',
                size: 'fullscreen'
            },
            {
                type: 'image',
                src: '/media/projects/neural/img-01.jpg',
                size: 'large',
                align: 'center'
            },
            {
                type: 'image',
                src: '/media/projects/neural/img-02.jpg',
                size: 'medium',
                align: 'right'
            }
        ],
        credits: [
            {
                role: 'AI Direction',
                name: 'HIDEKI Studio'
            },
            {
                role: 'Post-Production',
                name: 'HIDEKI Studio'
            }
        ]
    },
    {
        id: '5',
        slug: 'concrete-garden',
        title: 'CONCRETE GARDEN',
        year: 2025,
        category: 'COMMERCIAL',
        coverType: 'image',
        coverImage: '/media/projects/concrete/cover.jpg',
        previewVideo: '/media/projects/concrete/preview.mp4',
        theme: 'light',
        accentColor: '#111111',
        client: 'Commercial Brand',
        location: 'Tokyo',
        gallery: [
            {
                type: 'image',
                src: '/media/projects/concrete/img-01.jpg',
                size: 'huge'
            },
            {
                type: 'image',
                src: '/media/projects/concrete/img-02.jpg',
                size: 'medium',
                align: 'left'
            },
            {
                type: 'video',
                src: '/media/projects/concrete/video-01.mp4',
                size: 'fullscreen'
            },
            {
                type: 'image',
                src: '/media/projects/concrete/img-03.jpg',
                size: 'large',
                align: 'center'
            }
        ],
        credits: [
            {
                role: 'Photography',
                name: 'HIDEKI Studio'
            },
            {
                role: 'Direction',
                name: 'HIDEKI Studio'
            },
            {
                role: 'Client',
                name: 'Commercial Brand'
            }
        ]
    },
    {
        id: '6',
        slug: 'motion-study-001',
        title: 'MOTION STUDY 001',
        year: 2026,
        category: 'FILM',
        coverType: 'video',
        coverVideo: '/media/projects/motion/cover.mp4',
        coverImage: '/media/projects/motion/cover.jpg',
        previewVideo: '/media/projects/motion/preview.mp4',
        theme: 'dark',
        accentColor: '#FFFFFF',
        gallery: [
            {
                type: 'video',
                src: '/media/projects/motion/video-01.mp4',
                size: 'fullscreen'
            },
            {
                type: 'video',
                src: '/media/projects/motion/video-02.mp4',
                size: 'huge'
            }
        ],
        credits: [
            {
                role: 'Direction',
                name: 'HIDEKI Studio'
            },
            {
                role: 'Camera',
                name: 'HIDEKI Studio'
            },
            {
                role: 'Sound',
                name: 'HIDEKI Studio'
            }
        ]
    }
];
const getProjectBySlug = (slug)=>{
    return projects.find((p)=>p.slug === slug);
};
const getProjectsByCategory = (category)=>{
    if (category === 'ALL') return projects;
    return projects.filter((p)=>p.category === category);
};
const getAllCategories = ()=>{
    const categories = projects.map((p)=>p.category);
    return [
        'ALL',
        ...Array.from(new Set(categories))
    ];
};
}),
"[project]/src/i18n/I18nProvider.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "I18nProvider",
    ()=>I18nProvider,
    "useI18n",
    ()=>useI18n
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$translations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/i18n/translations.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
const I18nContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function getNestedValue(obj, keyPath) {
    const keys = keyPath.split('.');
    let current = obj;
    for (const key of keys){
        if (typeof current === 'object' && current !== null && key in current) {
            current = current[key];
        } else {
            return keyPath // Return the key if path not found
            ;
        }
    }
    return typeof current === 'string' ? current : keyPath;
}
function I18nProvider({ children }) {
    const [language, setLanguageState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('en');
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Check localStorage or browser language on mount
        setMounted(true);
        const savedLang = localStorage.getItem('hideki-language');
        if (savedLang && (savedLang === 'en' || savedLang === 'ru')) {
            setLanguageState(savedLang);
        } else {
            // Try to detect browser language
            const browserLang = navigator.language.toLowerCase();
            if (browserLang.startsWith('ru')) {
                setLanguageState('ru');
            }
        }
    }, []);
    const setLanguage = (lang)=>{
        setLanguageState(lang);
        localStorage.setItem('hideki-language', lang);
        document.documentElement.lang = lang;
    };
    const t = (key)=>{
        const langTranslations = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$translations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["translations"][language];
        return getNestedValue(langTranslations, key);
    };
    const value = {
        language,
        setLanguage,
        t
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(I18nContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/i18n/I18nProvider.tsx",
        lineNumber: 68,
        columnNumber: 5
    }, this);
}
function useI18n() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(I18nContext);
    if (context === undefined) {
        throw new Error('useI18n must be used within an I18nProvider');
    }
    return context;
}
}),
"[project]/src/i18n/translations.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "translations",
    ()=>translations
]);
const translations = {
    en: {
        // Navigation
        nav: {
            work: 'WORK',
            studio: 'STUDIO',
            about: 'ABOUT',
            shop: 'SHOP',
            contact: 'CONTACT'
        },
        // Home Page
        home: {
            heroTitle: 'HIDEKI',
            heroSubtitle: 'CREATIVE STUDIO / MOSCOW / WORLDWIDE',
            editorialCaption: 'An exploration of silence through fashion and movement',
            selectedWorks: 'Selected Works',
            campaignTitle: 'DIRECTION / PHOTO / FILM',
            typographyText: 'WORDS\nMOVE\nBUT\nIMAGES\nSTAY'
        },
        // Services
        services: {
            title: 'HIDEKI STUDIO',
            fashionPhotography: 'FASHION PHOTOGRAPHY',
            fashionPhotographyDesc: 'Editorial and commercial fashion shoots with full production support.',
            campaigns: 'CAMPAIGNS',
            campaignsDesc: 'Complete campaign development from concept to final delivery.',
            videoProduction: 'VIDEO PRODUCTION',
            videoProductionDesc: 'Fashion films, music videos, and commercial content.',
            artDirection: 'ART DIRECTION',
            artDirectionDesc: 'Visual consulting and creative direction for brands and publications.',
            aiPhotography: 'AI + PHOTOGRAPHY',
            aiPhotographyDesc: 'Experimental work combining traditional photography with AI technologies.'
        },
        // CTA
        cta: {
            title: 'START A PROJECT',
            subtitle: 'Let us create something together',
            ctaText: 'BEGIN'
        },
        // Footer
        footer: {
            shopPreviewTitle: 'HIDEKI OBJECT 001',
            enterShop: 'ENTER SHOP',
            location: 'MOSCOW / WORLDWIDE',
            copyright: '© HIDEKI',
            allRightsReserved: 'ALL RIGHTS RESERVED',
            instagram: 'INSTAGRAM',
            telegram: 'TELEGRAM',
            email: 'EMAIL'
        },
        // About Page
        about: {
            title: 'ABOUT',
            description: 'HIDEKI is an independent creative platform formed at the intersection of fashion, photography, film and contemporary art.',
            founders: 'Created by two artists working across different mediums.',
            fashionDirection: 'FASHION DIRECTION',
            fashionDirector: 'Fashion Director',
            fashionDesigner: 'Fashion designer',
            graphicDesigner: 'Graphic designer',
            clothingDevelopment: 'Clothing development',
            patternMaking: 'Pattern making',
            textiles: 'Textiles',
            inHouseProduction: 'In-house production',
            avantGarde: 'Avant-garde & dark aesthetics',
            visualDirection: 'VISUAL DIRECTION',
            visualDirector: 'Visual Director',
            fashionPhotographer: 'Fashion photographer',
            directorOfPhotography: 'Director of photography',
            lightingGaffer: 'Lighting & gaffer',
            videoProduction: 'Video production',
            artDirection: 'Art direction',
            soundDesign: 'Sound design',
            visualArtist: 'Visual artist',
            philosophy: 'HIDEKI was born from the union of two creative worlds.\nWe believe in work that exists between categories —\nnot quite fashion, not quite art, not quite commerce.\nSomething in between.',
            basedIn: 'BASED IN',
            moscow: 'MOSCOW',
            availableFor: 'AVAILABLE FOR',
            worldwide: 'WORLDWIDE'
        },
        // Studio Page
        studio: {
            title: 'HIDEKI STUDIO',
            manifesto: 'Production manifesto — we create visual work at the intersection of fashion, photography, film and contemporary art. Every project is a collaboration, every image is a statement.',
            philosophy: 'HIDEKI is not clothing made for the sake of clothing.\nIt is a visual world created through photography, cinema, clothing, sound and art.',
            fashionPart: 'FASHION IS PART OF HIDEKI',
            fashionDesc: 'Small batches, experimental construction, oversized silhouettes,\nhandmade elements, texture, distortion, asymmetry, unusual materials.\nNot merchandise. Not mainstream streetwear. Not classic luxury.\nSeparate art objects that unite into looks.',
            productionPart: 'PRODUCTION IS PART OF HIDEKI',
            productionDesc: 'Full-service creative production from concept to delivery.\nFashion photography, campaigns, video, art direction, AI experimentation.\nWe work with brands, publications and private clients worldwide.',
            startingFrom: 'STARTING FROM',
            pricingNote: 'Contact us for detailed pricing based on your project requirements.'
        },
        // Work Page
        work: {
            title: 'WORK',
            indexView: 'INDEX',
            visualView: 'VISUAL',
            all: 'ALL',
            fashion: 'FASHION',
            portrait: 'PORTRAIT',
            campaign: 'CAMPAIGN',
            commercial: 'COMMERCIAL',
            film: 'FILM',
            art: 'ART',
            ai: 'AI',
            product: 'PRODUCT'
        },
        // Shop Page
        shop: {
            title: 'SHOP',
            drop: 'DROP 001',
            archive: 'ARCHIVE',
            objectPrefix: 'OBJECT',
            preOrder: 'PRE-ORDER',
            archiveLabel: 'ARCHIVE'
        },
        // Contact Page
        contact: {
            title: 'CONTACT',
            subtitle: 'Start a project with HIDEKI Studio. Tell us about your vision and we will respond within 48 hours.',
            nameLabel: 'NAME *',
            contactLabel: 'CONTACT (EMAIL / TELEGRAM) *',
            projectTypeLabel: 'PROJECT TYPE',
            selectPlaceholder: 'Select...',
            fashionPhotography: 'FASHION PHOTOGRAPHY',
            portrait: 'PORTRAIT',
            campaign: 'CAMPAIGN',
            commercial: 'COMMERCIAL',
            video: 'VIDEO / REELS',
            musicVideo: 'MUSIC VIDEO',
            artDirection: 'ART DIRECTION',
            aiPhotography: 'AI + PHOTOGRAPHY',
            product: 'PRODUCT',
            fullProduction: 'FULL PRODUCTION',
            budgetLabel: 'BUDGET',
            dateLabel: 'PREFERRED DATE',
            datePlaceholder: 'e.g., March 2026 / Flexible',
            messageLabel: 'MESSAGE',
            messagePlaceholder: 'Tell us about your project...',
            sendRequest: 'SEND REQUEST',
            thankYou: 'Thank you. We will contact you soon.'
        },
        // Archive Page
        archive: {
            title: 'ARCHIVE',
            subtitle: 'Past objects that are no longer available for purchase.\nEach piece remains part of the HIDEKI universe.',
            limitedTo: 'LIMITED TO',
            objects: 'OBJECTS',
            noObjects: 'No archived objects yet'
        },
        // Common
        common: {
            year: 'YEAR',
            category: 'CATEGORY',
            client: 'CLIENT',
            location: 'LOCATION',
            credits: 'CREDITS',
            description: 'DESCRIPTION'
        }
    },
    ru: {
        // Navigation
        nav: {
            work: 'РАБОТЫ',
            studio: 'СТУДИЯ',
            about: 'О НАС',
            shop: 'МАГАЗИН',
            contact: 'КОНТАКТЫ'
        },
        // Home Page
        home: {
            heroTitle: 'HIDEKI',
            heroSubtitle: 'КРЕАТИВНАЯ СТУДИЯ / МОСКВА / ПО ВСЕМУ МИРУ',
            editorialCaption: 'Исследование тишины через моду и движение',
            selectedWorks: 'Избранные работы',
            campaignTitle: 'РЕЖИССУРА / ФОТО / ФИЛЬМ',
            typographyText: 'СЛОВА\nДВИЖУТСЯ\nНО\nОБРАЗЫ\nОСТАЮТСЯ'
        },
        // Services
        services: {
            title: 'HIDEKI STUDIO',
            fashionPhotography: 'ФЕШН-ФОТОГРАФИЯ',
            fashionPhotographyDesc: 'Редакционные и коммерческие фотосессии с полной поддержкой производства.',
            campaigns: 'КАМПАНИИ',
            campaignsDesc: 'Полная разработка кампании от концепции до финальной доставки.',
            videoProduction: 'ВИДЕОПРОДАКШН',
            videoProductionDesc: 'Фэшн-фильмы, музыкальные клипы и коммерческий контент.',
            artDirection: 'АРТ-ДИРЕКШН',
            artDirectionDesc: 'Визуальный консалтинг и креативное направление для брендов и изданий.',
            aiPhotography: 'ИИ + ФОТОГРАФИЯ',
            aiPhotographyDesc: 'Экспериментальная работа, сочетающая традиционную фотографию с технологиями ИИ.'
        },
        // CTA
        cta: {
            title: 'НАЧАТЬ ПРОЕКТ',
            subtitle: 'Давайте создадим что-то вместе',
            ctaText: 'НАЧАТЬ'
        },
        // Footer
        footer: {
            shopPreviewTitle: 'HIDEKI ОБЪЕКТ 001',
            enterShop: 'ПЕРЕЙТИ В МАГАЗИН',
            location: 'МОСКВА / ПО ВСЕМУ МИРУ',
            copyright: '© HIDEKI',
            allRightsReserved: 'ВСЕ ПРАВА ЗАЩИЩЕНЫ',
            instagram: 'INSTAGRAM',
            telegram: 'TELEGRAM',
            email: 'EMAIL'
        },
        // About Page
        about: {
            title: 'О НАС',
            description: 'HIDEKI — независимая креативная платформа, созданная на пересечении моды, фотографии, кино и современного искусства.',
            founders: 'Создано двумя художниками, работающими в разных медиа.',
            fashionDirection: 'ФЕШН-НАПРАВЛЕНИЕ',
            fashionDirector: 'Фешн-директор',
            fashionDesigner: 'Дизайнер одежды',
            graphicDesigner: 'Графический дизайнер',
            clothingDevelopment: 'Разработка одежды',
            patternMaking: 'Конструирование',
            textiles: 'Текстиль',
            inHouseProduction: 'Собственное производство',
            avantGarde: 'Авангард и тёмная эстетика',
            visualDirection: 'ВИЗУАЛЬНОЕ НАПРАВЛЕНИЕ',
            visualDirector: 'Визуальный директор',
            fashionPhotographer: 'Фэшн-фотограф',
            directorOfPhotography: 'Оператор-постановщик',
            lightingGaffer: 'Свет и гафер',
            videoProduction: 'Видеопродакшн',
            artDirection: 'Арт-дирекшн',
            soundDesign: 'Саунд-дизайн',
            visualArtist: 'Визуальный художник',
            philosophy: 'HIDEKI родился из союза двух творческих миров.\nМы верим в работу, которая существует между категориями —\nне совсем мода, не совсем искусство, не совсем коммерция.\nЧто-то между.',
            basedIn: 'БАЗА',
            moscow: 'МОСКВА',
            availableFor: 'ДОСТУПНЫ ДЛЯ',
            worldwide: 'ПО ВСЕМУ МИРУ'
        },
        // Studio Page
        studio: {
            title: 'HIDEKI STUDIO',
            manifesto: 'Производственное манифесто — мы создаём визуальные работы на пересечении моды, фотографии, кино и современного искусства. Каждый проект — это сотрудничество, каждый образ — высказывание.',
            philosophy: 'HIDEKI — это не одежда ради одежды.\nЭто визуальный мир, созданный через фотографию, кино, одежду, звук и искусство.',
            fashionPart: 'МОДА — ЧАСТЬ HIDEKI',
            fashionDesc: 'Малые партии, экспериментальное конструирование, оверсайз силуэты,\nручная работа, текстура, дисторсия, асимметрия, необычные материалы.\nНе мерч. Не мейнстрим стритвир. Не классический люкс.\nОтдельные арт-объекты, объединяющиеся в луки.',
            productionPart: 'ПРОДАКШН — ЧАСТЬ HIDEKI',
            productionDesc: 'Полный цикл креативного продакшна от концепции до доставки.\nФэшн-фотография, кампании, видео, арт-дирекшн, ИИ-эксперименты.\nМы работаем с брендами, изданиями и частными клиентами по всему миру.',
            startingFrom: 'ОТ',
            pricingNote: 'Свяжитесь с нами для детального расчёта стоимости вашего проекта.'
        },
        // Work Page
        work: {
            title: 'РАБОТЫ',
            indexView: 'СПИСОК',
            visualView: 'ВИЗУАЛ',
            all: 'ВСЕ',
            fashion: 'МОДА',
            portrait: 'ПОРТРЕТ',
            campaign: 'КАМПАНИЯ',
            commercial: 'КОММЕРЦИЯ',
            film: 'ФИЛЬМ',
            art: 'ИСКУССТВО',
            ai: 'ИИ',
            product: 'ПРОДУКТ'
        },
        // Shop Page
        shop: {
            title: 'МАГАЗИН',
            drop: 'ВЫПУСК 001',
            archive: 'АРХИВ',
            objectPrefix: 'ОБЪЕКТ',
            preOrder: 'ПРЕДЗАКАЗ',
            archiveLabel: 'АРХИВ'
        },
        // Contact Page
        contact: {
            title: 'КОНТАКТЫ',
            subtitle: 'Начните проект со студией HIDEKI. Расскажите нам о своей идее, и мы ответим в течение 48 часов.',
            nameLabel: 'ИМЯ *',
            contactLabel: 'КОНТАКТЫ (EMAIL / TELEGRAM) *',
            projectTypeLabel: 'ТИП ПРОЕКТА',
            selectPlaceholder: 'Выбрать...',
            fashionPhotography: 'ФЕШН-ФОТОГРАФИЯ',
            portrait: 'ПОРТРЕТ',
            campaign: 'КАМПАНИЯ',
            commercial: 'КОММЕРЦИЯ',
            video: 'ВИДЕО / REELS',
            musicVideo: 'МУЗЫКАЛЬНОЕ ВИДЕО',
            artDirection: 'АРТ-ДИРЕКШН',
            aiPhotography: 'ИИ + ФОТОГРАФИЯ',
            product: 'ПРОДУКТ',
            fullProduction: 'ПОЛНЫЙ ПРОДАКШН',
            budgetLabel: 'БЮДЖЕТ',
            dateLabel: 'ПРЕДПОЧТИТЕЛЬНАЯ ДАТА',
            datePlaceholder: 'например, Март 2026 / Гибко',
            messageLabel: 'СООБЩЕНИЕ',
            messagePlaceholder: 'Расскажите нам о вашем проекте...',
            sendRequest: 'ОТПРАВИТЬ ЗАПРОС',
            thankYou: 'Спасибо. Мы свяжемся с вами в ближайшее время.'
        },
        // Archive Page
        archive: {
            title: 'АРХИВ',
            subtitle: 'Прошедшие объекты, которые больше недоступны для покупки.\nКаждая вещь остаётся частью вселенной HIDEKI.',
            limitedTo: 'ОГРАНИЧЕНО',
            objects: 'ОБЪЕКТАМИ',
            noObjects: 'Архивных объектов пока нет'
        },
        // Common
        common: {
            year: 'ГОД',
            category: 'КАТЕГОРИЯ',
            client: 'КЛИЕНТ',
            location: 'ЛОКАЦИЯ',
            credits: 'АВТОРЫ',
            description: 'ОПИСАНИЕ'
        }
    }
};
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1-b0tj9._.js.map