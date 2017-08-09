const fs = require('fs'); 
fs.watchFile("sample.txt", (curr,prev) => {
console.log(`Current Modified time: ${curr.mtime}`);
console.log(`Previous Modified time: ${prev.mtime}`);
const dat= fs.readFileSync("sample.txt");
console.log(dat.toString());
});
console.log('Program ended');