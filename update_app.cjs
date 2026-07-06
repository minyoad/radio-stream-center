const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

// 1. Sidebar overlay and classes
code = code.replace(
  '{/* Primary Sidebar - Styled around Clean Minimalism pattern */}\n      <aside className="w-64 bg-white border-r border-slate-200 flex flex-col flex-shrink-0" id="premium_sidebar">',
  `{/* Mobile Overlay */}\n      {isMobileMenuOpen && (\n        <div \n          className="fixed inset-0 z-30 bg-slate-900/50 backdrop-blur-sm md:hidden"\n          onClick={() => setIsMobileMenuOpen(false)}\n        />\n      )}\n      {/* Primary Sidebar - Styled around Clean Minimalism pattern */}\n      <aside className={\`fixed inset-y-0 left-0 z-40 transform \${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"} md:relative md:translate-x-0 transition-transform duration-300 ease-in-out w-64 bg-white border-r border-slate-200 flex flex-col flex-shrink-0\`} id="premium_sidebar">`
);

// 2. Top header hamburger and min-w-0 on main
code = code.replace(
  '<main className="flex-1 flex flex-col h-screen overflow-hidden">',
  '<main className="flex-1 flex flex-col h-screen overflow-hidden min-w-0">'
);
code = code.replace(
  '<header className="h-16 bg-white border-b border-slate-200 px-8 flex items-center justify-between flex-shrink-0" id="top_header">\n          <div className="flex items-center gap-3">\n            <h1 className="text-base font-bold text-slate-800">',
  '<header className="h-16 bg-white border-b border-slate-200 px-4 md:px-8 flex items-center justify-between flex-shrink-0" id="top_header">\n          <div className="flex items-center gap-3">\n            <button\n              className="md:hidden p-2 text-slate-500 hover:bg-slate-100 rounded-lg transition-colors"\n              onClick={() => setIsMobileMenuOpen(true)}\n            >\n              <Menu className="w-5 h-5" />\n            </button>\n            <h1 className="text-sm md:text-base font-bold text-slate-800 truncate">'
);

// 3. Update setActiveTab calls in the sidebar to close the mobile menu
code = code.replace(/onClick=\{\(\) => setActiveTab\("([a-z]+)"\)\}/g, 'onClick={() => { setActiveTab("$1"); setIsMobileMenuOpen(false); }}');
code = code.replace(/setActiveTab\("channels"\);/g, 'setActiveTab("channels");\n              setIsMobileMenuOpen(false);');
code = code.replace(/setActiveTab\("epg"\);/g, 'setActiveTab("epg");\n              setIsMobileMenuOpen(false);');

fs.writeFileSync('src/App.tsx', code);
