const fs = require('fs');
let content = fs.readFileSync('server.ts', 'utf-8');

const isInvalidLogoFunc = `
function isInvalidLogo(l?: string): boolean {
  if (!l || l.trim() === "") return true;
  if (l.includes("unsplash.com")) return true;
  if (l.includes("gtimg.cn")) return true;
  return false;
}
`;

content = content.replace(/function generateDefaultEpgId/g, isInvalidLogoFunc + '\nfunction generateDefaultEpgId');

content = content.replace(/if \(typeof currentInfo !== "undefined" && currentInfo && currentInfo\.logo\) \{\n\s*if \(!channel\.logo \|\| channel\.logo === "https:\/\/images\.unsplash\.com\/photo-1598257006458-087169a1f08d\?auto=format\&fit=crop\&w=48\&h=48\&q=80"\) \{\n\s*channel\.logo = currentInfo\.logo;\n\s*\}\n\s*\}/g, 'if (typeof currentInfo !== "undefined" && currentInfo && currentInfo.logo && !isInvalidLogo(currentInfo.logo)) {\n              if (isInvalidLogo(channel.logo)) {\n                channel.logo = currentInfo.logo;\n              }\n            }');

fs.writeFileSync('server.ts', content);
