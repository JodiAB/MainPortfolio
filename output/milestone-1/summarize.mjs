import {readFileSync, readdirSync, writeFileSync} from 'node:fs';
const folder = 'output/milestone-1';
const median = values => [...values].sort((a,b)=>a-b)[Math.floor(values.length/2)];
const runs = readdirSync(folder).filter(n=>/^local-(before|after)-(mobile|desktop)-\d\.json$/.test(n)).map(file=>{
 const r=JSON.parse(readFileSync(`${folder}/${file}`));
 const value=id=>r.audits[id]?.numericValue;
 return {file,score:r.categories.performance.score*100,lcp:value('largest-contentful-paint'),tbt:value('total-blocking-time'),js:value('bootup-time'),cls:value('cumulative-layout-shift'),bytes:value('total-byte-weight'),benchmark:r.environment.benchmarkIndex,warnings:r.runWarnings,categories:Object.fromEntries(Object.entries(r.categories).map(([k,v])=>[k,v.score*100])),network:r.audits['network-requests'].details.items.map(({url,transferSize})=>({url,transferSize})),mainThread:r.audits['mainthread-work-breakdown'].details.items};
});
const groups={};
for(const phase of ['before','after'])for(const device of ['mobile','desktop']){
 const selected=runs.filter(r=>r.file.startsWith(`local-${phase}-${device}`));
 if(selected.length)groups[`${phase}-${device}`]={count:selected.length,...Object.fromEntries(['score','lcp','tbt','js','cls','bytes','benchmark'].map(key=>[key,{median:median(selected.map(r=>r[key])),min:Math.min(...selected.map(r=>r[key])),max:Math.max(...selected.map(r=>r[key]))}]))};
}
writeFileSync(`${folder}/performance-summary.json`,JSON.stringify({groups,runs},null,2));
console.log(JSON.stringify(groups,null,2));
