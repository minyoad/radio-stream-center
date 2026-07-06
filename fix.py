import re

with open('src/App.tsx', 'r') as f:
    content = f.read()

bad = r'''          <button 
            onClick=\{.*?\}
            className={`w-full flex items-center gap          <div className="flex items-center gap-2 md:gap-4 flex-shrink-0">
            \{\/\* Realtime test action banner \*\/\}
            \{testingStatus\.status === "running" \? \(
              <div className="flex items-center gap-2 md:gap-3 text-\[10px\] md:text-xs text-amber-600 bg-amber-50\/85 px-2 md:px-3\.5 py-1\.5 border border-amber-100 rounded-full font-bold truncate max-w-\[150px\] md:max-w-none">
                <span className="w-2 h-2 bg-amber-500 rounded-full animate-ping flex-shrink-0"><\/span>
                <span className="truncate">测速: \{testingStatus\.checked\}\/\{testingStatus\.total\}<\/span>
                <button 
                  onClick=\{cancelTest\}
                  className="bg-rose-100 hover:bg-rose-200 text-rose-700 text-\[10px\] font-bold px-2 py-0\.5 rounded-full transition flex-shrink-0"
                >
                  放弃
                <\/button>
              <\/div>
            \) : \(
              <div className="hidden lg:flex items-center gap-2 text-xs text-slate-500 bg-slate-100\/75 px-3 py-1\.5 rounded-full font-semibold">
                <span className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"><\/span>
                <span className="whitespace-nowrap">自动心跳同步: 已启用 \(每分\)<\/span>
              <\/div>
            \)\}
            <button 
              id="top_pulse_speed_btn"
              disabled=\{testingStatus\.status === "running"\}
              onClick=\{triggerConcurrentBulkTest\}
              className=\{`text-slate-50 px-2\.5 md:px-4 py-2 rounded-xl text-xs font-bold border border-transparent shadow shadow-blue-500\/10 transition leading-none flex items-center flex-shrink-0 \$\{
                testingStatus\.status === "running"
                \? "bg-slate-200 text-slate-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700 cursor-pointer"
              \}`\}
            >
              <Activity className="w-4 h-4 md:w-3\.5 md:h-3\.5 md:mr-1\.5 flex-shrink-0" \/>
              <span className="hidden sm:inline whitespace-nowrap">一键并发测速<\/span>
            <\/button>
          <\/div>            <div className="flex justify-between items-center text-\[11px\] mb-1 font-semibold text-slate-500">'''

good = '''          <button 
            onClick={() => { setActiveTab("backup"); setIsMobileMenuOpen(false); }}
            className={`w-full flex items-center gap-3.5 px-4 py-3 rounded-xl transition text-xs font-semibold ${
              activeTab === "backup" 
              ? "bg-blue-50/75 text-blue-700 font-bold" 
              : "text-slate-500 hover:bg-slate-50 hover:text-slate-800"
            }`}
            id="nav_backup"
          >
            <Database className="w-4 h-4" />
            系统备份与恢复管理
          </button>

          <button 
            onClick={() => {
              setPasswordForm({ oldPassword: "", newPassword: "", confirmPassword: "" });
              setIsSettingPasswordModalOpen(true);
            }}
            className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition text-xs text-left font-semibold ${
              isAuthRequired 
              ? "bg-indigo-50/40 text-indigo-700 hover:bg-indigo-50 border border-indigo-100" 
              : "text-slate-500 hover:bg-slate-50 hover:text-slate-800"
            }`}
            id="nav_security"
            type="button"
          >
            <span className="flex items-center gap-3.5">
              <Shield className="w-4 h-4" />
              安全密码保护
            </span>
            <span className={`text-[10px] scale-90 px-1.5 py-0.5 rounded font-black ${isAuthRequired ? "bg-indigo-100 text-indigo-800" : "bg-slate-100 text-slate-500"}`}>
              {isAuthRequired ? "启用" : "未设"}
            </span>
          </button>

          {/* Quick Stats sidebar banner */}
          <div className="pt-6 border-t border-slate-100 mt-6 px-1">
            <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">系统健康率</span>
            <div className="mt-2.5 bg-slate-50 rounded-xl p-3 border border-slate-100/50">
              <div className="flex justify-between items-center text-[11px] mb-1 font-semibold text-slate-500">'''

import re
new_content = re.sub(bad, good, content, flags=re.DOTALL)
if new_content == content:
    print("Failed to replace!")
else:
    with open('src/App.tsx', 'w') as f:
        f.write(new_content)
    print("Successfully fixed!")
