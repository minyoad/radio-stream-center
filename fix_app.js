const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf-8');

// Replace all occurrences of ISP-related variables with default true or remove them
content = content.replace(/const allUniqueIspOptions = useMemo\(\(\) => \{[\s\S]*?\}, \[channels\]\);/g, '');
content = content.replace(/\(item\.isp && item\.isp\.toLowerCase\(\)\.includes\(query\)\) \|\| /g, '');
content = content.replace(/const matchesIsp = [\s\S]*?;/g, 'const matchesIsp = true;');
content = content.replace(/&& matchesIsp/g, '');
content = content.replace(/, globalSourceIsp/g, '');

content = content.replace(/if \(info\.isp\) \{[\s\S]*?\}/g, '');
content = content.replace(/\$\{info\.isp \|\| ""\}/g, '');

content = content.replace(/请至少指定运营商\(ISP\)或省份\(Province\)中的一个修改项/g, '请至少指定省份(Province)的修改项');
content = content.replace(/请至少指定运营商\(ISP\)、省份\(Province\)或线路状态中的一个修改项/g, '请至少指定省份(Province)或线路状态中的一个修改项');

content = content.replace(/批量修改 ISP\/省份/g, '批量修改省份');
content = content.replace(/双驱多维度 ISP 测速工作区/g, '双驱多维度测速工作区');
content = content.replace(/隔离某一特定 ISP 线路进行分类发起/g, '隔离某一特定线路进行分类发起');

content = content.replace(/<label className="text-\[10px\] uppercase font-bold text-slate-400 block">按归属运营商 \(ISP\)<\/label>[\s\S]*?<\/select>\n\s*<\/div>/, '');

content = content.replace(/<th className="py-4 px-3 w-32">运营商 \(ISP\)<\/th>/, '');

content = content.replace(/\{cfg\.isp && \([\s\S]*?\}\)/g, '');
content = content.replace(/<label>网络运营商 \(ISP Filter\)<\/label>[\s\S]*?<\/select>/, '');

content = content.replace(/<div className="space-y-1\.5 font-sans" id="sync_form_isp_block">[\s\S]*?<\/p>\n\s*<\/div>/, '');
content = content.replace(/<div className="space-y-1\.5">[\s\S]*?<label>提供线路线路的运营商 \(ISP\)<\/label>[\s\S]*?<\/select>\n\s*<\/div>/, '');

content = content.replace(/<div className="space-y-1\.5">[\s\S]*?<label className="text-slate-700 block">目标运营商 \(ISP\)<\/label>[\s\S]*?<\/select>\n\s*<\/div>/g, '');

content = content.replace(/src\.isp === "电信" \? "bg-blue-50 text-blue-700" :[\s\S]*?"bg-slate-100 text-slate-600"/, '"bg-slate-100 text-slate-600"');

fs.writeFileSync('src/App.tsx', content);
