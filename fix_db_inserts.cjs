const fs = require('fs');
let content = fs.readFileSync('server.ts', 'utf-8');

content = content.replace(/INSERT INTO sources \(id, channelId, url, status, latency, lastChecked\)[\s\S]*?VALUES \(\?, \?, \?, \?, \?, \?, \?, \?, \?, \?\)/g, 'INSERT INTO sources (id, channelId, url, status, latency, lastChecked)\n        VALUES (?, ?, ?, ?, ?, ?)');

content = content.replace(/insertSource\.run\([\s\S]*?\);/g, 'insertSource.run(s.id, ch.id, s.url, s.status || "unknown", s.latency !== undefined ? s.latency : null, s.lastChecked || "");');


content = content.replace(/INSERT INTO sync_configs \(id, name, url, type, autoSync, syncInterval, lastSynced, status, message, disabled, consecutiveFailures, contentHash\)[\s\S]*?VALUES \(\?, \?, \?, \?, \?, \?, \?, \?, \?, \?, \?, \?, \?\)/g, 'INSERT INTO sync_configs (id, name, url, type, autoSync, syncInterval, lastSynced, status, message, disabled, consecutiveFailures, contentHash)\n        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)');

fs.writeFileSync('server.ts', content);
