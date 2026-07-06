import re

with open('src/App.tsx', 'r') as f:
    content = f.read()

menu_items = """          <button 
            onClick={() => { setActiveTab("dashboard"); setIsMobileMenuOpen(false); }}
            className={`w-full flex items-center gap-3.5 px-4 py-3 rounded-xl transition text-xs font-semibold ${
              activeTab === "dashboard" 
              ? "bg-blue-50/75 text-blue-700 font-bold" 
              : "text-slate-500 hover:bg-slate-50 hover:text-slate-800"
            }`}
            id="nav_dashboard"
          >
            <Activity className="w-4 h-4" />
            系统数据总览概览
          </button>

          <button 
            onClick={() => { setActiveTab("channels"); setIsMobileMenuOpen(false); }}
            className={`w-full flex items-center gap-3.5 px-4 py-3 rounded-xl transition text-xs font-semibold ${
              activeTab === "channels" 
              ? "bg-blue-50/75 text-blue-700 font-bold" 
              : "text-slate-500 hover:bg-slate-50 hover:text-slate-800"
            }`}
            id="nav_channels"
          >
            <Radio className="w-4 h-4" />
            频道与全局源管理
          </button>

          <button 
            onClick={() => { setActiveTab("sync"); setIsMobileMenuOpen(false); }}
            className={`w-full flex items-center gap-3.5 px-4 py-3 rounded-xl transition text-xs font-semibold ${
              activeTab === "sync" 
              ? "bg-blue-50/75 text-blue-700 font-bold" 
              : "text-slate-500 hover:bg-slate-50 hover:text-slate-800"
            }`}
            id="nav_sync"
          >
            <RefreshCw className="w-4 h-4" />
            网络订阅同步配置
          </button>

          <button 
            onClick={() => { setActiveTab("export"); setIsMobileMenuOpen(false); }}
            className={`w-full flex items-center gap-3.5 px-4 py-3 rounded-xl transition text-xs font-semibold ${
              activeTab === "export" 
              ? "bg-blue-50/75 text-blue-700 font-bold" 
              : "text-slate-500 hover:bg-slate-50 hover:text-slate-800"
            }`}
            id="nav_export"
          >
            <Download className="w-4 h-4" />
            播放器接口导出
          </button>

          <button 
            onClick={() => { setActiveTab("epg"); setIsMobileMenuOpen(false); }}
            className={`w-full flex items-center gap-3.5 px-4 py-3 rounded-xl transition text-xs font-semibold ${
              activeTab === "epg" 
              ? "bg-blue-50/75 text-blue-700 font-bold" 
              : "text-slate-500 hover:bg-slate-50 hover:text-slate-800"
            }`}
            id="nav_epg"
          >
            <Calendar className="w-4 h-4" />
            节目单 EPG 管理
          </button>
          
          <button 
            onClick={() => { setActiveTab("cron"); setIsMobileMenuOpen(false); }}
            className={`w-full flex items-center gap-3.5 px-4 py-3 rounded-xl transition text-xs font-semibold ${
              activeTab === "cron" 
              ? "bg-blue-50/75 text-blue-700 font-bold" 
              : "text-slate-500 hover:bg-slate-50 hover:text-slate-800"
            }`}
            id="nav_cron"
          >
            <Clock className="w-4 h-4" />
            定时任务与自动化
          </button>

"""

target = """        {/* Unified Nav Menu */}
        <div className="flex-1 p-4 space-y-1.5 overflow-y-auto">"""

new_content = content.replace(target, target + "\n" + menu_items)

with open('src/App.tsx', 'w') as f:
    f.write(new_content)
    
print("Menu items added!")
