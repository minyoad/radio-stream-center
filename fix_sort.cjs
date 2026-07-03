const fs = require('fs');
let code = fs.readFileSync('server.ts', 'utf-8');

code = code.replace(
  'catQuery = "SELECT * FROM groups WHERE name = ?";',
  'catQuery = "SELECT * FROM groups WHERE name = ? ORDER BY sortOrder ASC";'
);
code = code.replace(
  'catQuery = "SELECT * FROM groups WHERE name = ?";',
  'catQuery = "SELECT * FROM groups WHERE name = ? ORDER BY sortOrder ASC";'
);
fs.writeFileSync('server.ts', code);
