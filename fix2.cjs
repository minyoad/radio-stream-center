const fs = require('fs');
let content = fs.readFileSync('src/components/DashboardView.tsx', 'utf-8');

// I will fix the end of the line status card down to the quick action cards
content = content.replace(/<\/button>\n\s*<\/div>\n\s*<\/div>[\s\S]*?\{\/\* Quick Action Cards Grid \*\//, '</button>\n          </div>\n        </div>\n      </div>\n\n      {/* Quick Action Cards Grid */}');

fs.writeFileSync('src/components/DashboardView.tsx', content);
