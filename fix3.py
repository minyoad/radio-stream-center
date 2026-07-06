import re

with open('src/App.tsx', 'r') as f:
    content = f.read()

bad = r'''      <aside className={`fixed inset-y-0 left-0 z-40 transform ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"} md:relative md:translate-x-0 transition-transform duration-300 ease-in-out w-64 bg-white border-r         <header className="h-16 bg-white border-b border-slate-200 px-4 md:px-8 flex items-center justify-between flex-shrink-0 gap-2 overflow-hidden" id="top_header">
          <div className="flex items-center gap-3 overflow-hidden min-w-0">
            <button
              className="md:hidden p-2 text-slate-500 hover:bg-slate-100 rounded-lg transition-colors flex-shrink-0"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="w-5 h-5" />
            </button>
            <h1 className="text-sm md:text-base font-bold text-slate-800 truncate">
              {activeTab === "dashboard" && "数据概览 (Overview)"}
              {activeTab === "channels" && "频道列表与线路维护中心"}
              {activeTab === "sync" && "M3U / TXT 网络同步订阅与自定义文件导入"}
              {activeTab === "export" && "播放接口配置生成工具"}
              {activeTab === "epg" && "EPG XML 国际电台频道节目单同步与多源整合合并中心"}
              {activeTab === "backup" && "数据备份与系统完整恢复"}
              {activeTab === "cron" && "自动化定时任务管理 (EPG & 订阅源)"}
            </h1>
          </div>
          
          <div className="flex items-center gap-2 md:gap-4 flex-shrink-0">
            {/* Realtime test action banner */}
            {testingStatus.status === "running" ? (
              <div className="flex items-center gap-2 md:gap-3 text-[10px] md:text-xs text-amber-600 bg-amber-50/85 px-2 md:px-3.5 py-1.5 border border-amber-100 rounded-full font-bold truncate max-w-[150px] md:max-w-none">
                <span className="w-2 h-2 bg-amber-500 rounded-full animate-ping flex-shrink-0"></span>
                <span className="truncate">测速: {testingStatus.checked}/{testingStatus.total}</span>
                <button 
                  onClick={cancelTest}
                  className="bg-rose-100 hover:bg-rose-200 text-rose-700 text-[10px] font-bold px-2 py-0.5 rounded-full transition flex-shrink-0"
                >
                  放弃
                </button>
              </div>
            ) : (
              <div className="hidden lg:flex items-center gap-2 text-xs text-slate-500 bg-slate-100/75 px-3 py-1.5 rounded-full font-semibold">
                <span className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></span>
                <span className="whitespace-nowrap">自动心跳同步: 已启用 (每分)</span>
              </div>
            )}
            <button 
              id="top_pulse_speed_btn"
              disabled={testingStatus.status === "running"}
              onClick={triggerConcurrentBulkTest}
              className={`text-slate-50 px-2.5 md:px-4 py-2 rounded-xl text-xs font-bold border border-transparent shadow shadow-blue-500/10 transition leading-none flex items-center flex-shrink-0 ${
                testingStatus.status === "running"
                ? "bg-slate-200 text-slate-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700 cursor-pointer"
              }`}
            >
              <Activity className="w-4 h-4 md:w-3.5 md:h-3.5 md:mr-1.5 flex-shrink-0" />
              <span className="hidden sm:inline whitespace-nowrap">一键并发测速</span>
            </button>
          </div>
        </header>ate-500">'''

good = '''      <aside className={`fixed inset-y-0 left-0 z-40 transform ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"} md:relative md:translate-x-0 transition-transform duration-300 ease-in-out w-64 bg-white border-r border-slate-200 flex flex-col flex-shrink-0`} id="premium_sidebar">
        {/* Brand Header */}
        <div className="p-6 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-sm shadow-blue-500/20">
              <Radio className="w-5 h-5" />
            </div>
            <div>
              <span className="font-bold text-base text-slate-900 tracking-tight block">Radio Stream</span>
              <span className="text-[10px] text-slate-400 font-medium">直播与源管理终端</span>
            </div>
          </div>
        </div>

        {/* Unified Nav Menu */}
        <div className="flex-1 p-4 space-y-1.5 overflow-y-auto">
          <button 
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

new_content = content.replace(bad, good)
if new_content == content:
    print("Failed to restore sidebar!")
else:
    with open('src/App.tsx', 'w') as f:
        f.write(new_content)
    print("Sidebar restored!")
