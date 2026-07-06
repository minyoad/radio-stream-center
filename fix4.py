import re

with open('src/App.tsx', 'r') as f:
    content = f.read()

bad = r'''                            <div className="flex items-center gap-2.5 min-w-0">
                              <input
                                type="checkbox"
                                className="w-3.5 h-3.5 text-blue-600 border-slate-300 rounded focus:ring-blue-500 cursor-pointer flex-shrink-0"'''

good = '''                            <div className="flex items-center gap-2.5 min-w-0 flex-1">
                              <input
                                type="checkbox"
                                className="w-3.5 h-3.5 text-blue-600 border-slate-300 rounded focus:ring-blue-500 cursor-pointer flex-shrink-0"'''

content = content.replace(bad, good)

bad2 = r'''                            <div className="flex items-center gap-2 flex-shrink-0 ml-2">
                              {/* Count pill badge */}
                              <span className="text-[10px] font-bold bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full">
                                {activeCount} / {ch.sources.length} 条有效
                              </span>
                              <span className="text-[10px] font-semibold bg-blue-50 text-blue-700 px-1.5 py-0.5 rounded max-w-28 truncate" title={(ch.tagIds || ch.groupIds || []).map(gId => tags.find(g => g.id === gId)?.name).filter(Boolean).join(", ")}>'''

good2 = '''                            <div className="flex items-center gap-2 flex-shrink-0 ml-2">
                              {/* Count pill badge */}
                              <span className="text-[10px] font-bold bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full">
                                {activeCount} / {ch.sources.length} <span className="hidden sm:inline">条有效</span>
                              </span>
                              <span className="hidden sm:inline-block text-[10px] font-semibold bg-blue-50 text-blue-700 px-1.5 py-0.5 rounded max-w-28 truncate" title={(ch.tagIds || ch.groupIds || []).map(gId => tags.find(g => g.id === gId)?.name).filter(Boolean).join(", ")}>'''

new_content = content.replace(bad2, good2)

with open('src/App.tsx', 'w') as f:
    f.write(new_content)
print("Channel list styles updated!")
