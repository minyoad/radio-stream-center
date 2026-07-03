const fs = require('fs');
const content = fs.readFileSync('src/App.tsx', 'utf-8');
let openBraces = 0;
let openParens = 0;
let openTags = [];
// It's hard to parse JSX with regex, let's just see if `export default function App() { ... return ( ... ); }` is matched.
