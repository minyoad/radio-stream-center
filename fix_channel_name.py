import re

with open('src/App.tsx', 'r') as f:
    content = f.read()

bad = r'''                              <div className="min-w-0">
                                <p className="text-xs font-bold text-slate-800 flex items-center gap-1.5 truncate">
                                  {ch.name}
                                </p>'''

good = '''                              <div className="min-w-0 flex-1">
                                <p className="text-xs font-bold text-slate-800 flex items-center gap-1.5 truncate">
                                  {ch.name}
                                </p>'''

new_content = content.replace(bad, good)
if new_content == content:
    print("Failed to replace!")
else:
    with open('src/App.tsx', 'w') as f:
        f.write(new_content)
    print("Channel name layout fixed!")
