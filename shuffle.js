const fs = require('fs');

// Function to shuffle array
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Read and shuffle grade5.ts
let content5 = fs.readFileSync('src/data/grade5.ts', 'utf8');
let lines5 = content5.split('\n');
let start5 = lines5.findIndex(line => line.includes('export const grade5Questions: Question[] = [')) + 1;
let end5 = lines5.findIndex(line => line.includes('];'), start5);
let questions5 = lines5.slice(start5, end5).filter(line => line.trim().startsWith('{'));
shuffle(questions5);
lines5.splice(start5, questions5.length, ...questions5);
fs.writeFileSync('src/data/grade5.ts', lines5.join('\n'));

// Read and shuffle grade8.ts
let content8 = fs.readFileSync('src/data/grade8.ts', 'utf8');
let lines8 = content8.split('\n');
let start8 = lines8.findIndex(line => line.includes('export const grade8Questions: Question[] = [')) + 1;
let end8 = lines8.findIndex(line => line.includes('];'), start8);
let questions8 = lines8.slice(start8, end8).filter(line => line.trim().startsWith('{'));
shuffle(questions8);
lines8.splice(start8, questions8.length, ...questions8);
fs.writeFileSync('src/data/grade8.ts', lines8.join('\n'));

console.log('Shuffled successfully');