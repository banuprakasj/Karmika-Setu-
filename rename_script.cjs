const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

function replaceInFile(filePath) {
  if (filePath.endsWith('.ts') || filePath.endsWith('.tsx') || filePath.endsWith('.html') || filePath.endsWith('.json')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;
    
    // Case-sensitive replacements
    content = content.replace(/Karmik Setu/g, 'Karmika Setu');
    content = content.replace(/KARMIK SETU/g, 'KARMIKA SETU');
    content = content.replace(/karmik setu/g, 'karmika setu');
    content = content.replace(/Karmik setu/g, 'Karmika setu');

    if (original !== content) {
      fs.writeFileSync(filePath, content);
      console.log(`Updated: ${filePath}`);
    }
  }
}

const srcDir = path.join(__dirname, 'src');
walkDir(srcDir, replaceInFile);
replaceInFile(path.join(__dirname, 'index.html'));

console.log('Mass rename complete.');
