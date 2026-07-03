const fs = require('fs');
let content = fs.readFileSync('src/components/DashboardView.tsx', 'utf-8');

content = content.replace(/\{.*?Region stats breakdown[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/, '</div>\n      </div>');
content = content.replace(/className="grid grid-cols-1 lg:grid-cols-3 gap-6"/, 'className="grid grid-cols-1 lg:grid-cols-2 gap-6"');

fs.writeFileSync('src/components/DashboardView.tsx', content);
