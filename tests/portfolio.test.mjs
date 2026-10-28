import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync,existsSync} from 'node:fs';
import {myProjects} from '../src/constants/index.js';

test('Possibility Engine is first and all eight existing project IDs remain',()=>{
 assert.equal(myProjects[0].title,'Possibility Engine');
 for(const id of [1,2,3,4,5,6,7,8])assert(myProjects.some(p=>p.id===id));
 assert.equal(new Set(myProjects.map(p=>p.id)).size,myProjects.length);
});
test('featured project has a real local detail route and no invented public deployment/repository',()=>{
 const p=myProjects.find(p=>p.title==='Possibility Engine');
 assert(p);assert.equal(p.caseStudyPath,'/projects/possibility-engine/');
 assert(!p.github);assert(!p.href);assert(existsSync('public'+p.image));
});
test('production detail route contains server-readable metadata, canonical URL and content',()=>{
 const html=readFileSync('dist/projects/possibility-engine/index.html','utf8');
 assert.match(html,/<title>Possibility Engine .*Jodi Abrahams<\/title>/);
 assert.match(html,/rel="canonical" href="https:\/\/jodiabrahamsportfolio.vercel.app\/projects\/possibility-engine\/"/);
 assert.match(html,/Phase 2M.*FAIL/);
 assert.match(html,/not a production-ready system/);
 assert(!/[A-Z]:[\\/]Users|API_KEY|runId|projectId/.test(html));
});
test('direct route redirects canonically, preserves query strings and serves its own metadata',async()=>{
 const {preview}=await import('vite');
 const server=await preview({preview:{host:'127.0.0.1',port:0,open:false}});
 try{
  const base=`http://127.0.0.1:${server.httpServer.address().port}`;
  const redirect=await fetch(base+'/projects/possibility-engine?from=test?next=details',{redirect:'manual'});
  assert.equal(redirect.status,308);
  assert.equal(redirect.headers.get('location'),'/projects/possibility-engine/?from=test?next=details');
  const detail=await fetch(base+redirect.headers.get('location'));
  assert.equal(detail.status,200);assert.match(await detail.text(),/<title>Possibility Engine/);
  const home=await fetch(base+'/');assert.equal(home.status,200);assert.match(await home.text(),/<title>Jodi Abrahams/);
 }finally{await new Promise((resolve,reject)=>server.httpServer.close(error=>error?reject(error):resolve()));}
});
test('home metadata keeps the portfolio URL and points to AI engineering work',()=>{
 const html=readFileSync('dist/index.html','utf8');
 assert.match(html,/AI Engineering/);assert.match(html,/href="https:\/\/jodiabrahamsportfolio.vercel.app\/"/);
 assert(!html.includes('noindex'));
});

test('availability flags retain the three original URLs and project descriptions',()=>{
 const ops=myProjects.find(p=>p.title==='OpsFlow');
 assert.equal(ops.sourcePrivate,true);assert.equal(ops.github,'https://github.com/JodiAB/OpsFlow');
 for(const [title,url] of [['LMS SaaS App','https://joding-saas-app.vercel.app/'],['AI Stock Market App','https://stock-app-uhvi.vercel.app/']]){
  const project=myProjects.find(p=>p.title===title);assert.equal(project.demoUnavailable,true);assert.equal(project.href,url);assert(project.description);
 }
});

test('shared project actions label unavailable destinations without navigable links',async()=>{
 const {createServer}=await import('vite');const {createElement}=await import('react');const {renderToStaticMarkup}=await import('react-dom/server');
 const server=await createServer({server:{middlewareMode:true},appType:'custom',optimizeDeps:{noDiscovery:true,include:[]}});
 try{
  const {default:ProjectLinks}=await server.ssrLoadModule('/src/components/ProjectLinks.jsx');
  const render=title=>renderToStaticMarkup(createElement(ProjectLinks,{project:myProjects.find(p=>p.title===title)}));
  const ops=render('OpsFlow');assert.match(ops,/GitHub.*Private/);assert(!ops.includes('href="https://github.com/JodiAB/OpsFlow"'));assert(ops.includes('href="https://ops-flow-kappa.vercel.app/"'));
  for(const title of ['LMS SaaS App','AI Stock Market App']){const markup=render(title);assert.match(markup,/Demo.*Temporarily unavailable/);assert(!markup.includes('href='));}
  assert(render('Nike-style eCommerce').includes('href="https://joding-ecomm.vercel.app/"'));
 }finally{await server.close();}
});
import {createHash} from 'node:crypto';
import {CV_PATH,CV_FILENAME} from '../src/constants/site.js';

test('CV version matches the canonical PDF and all download controls use its filename',()=>{
 const bytes=readFileSync('public/assets/'+CV_FILENAME);
 assert.equal(bytes.subarray(0,5).toString(),'%PDF-');
 assert.equal(CV_PATH,`/assets/${CV_FILENAME}?v=${createHash('sha256').update(bytes).digest('hex').slice(0,12)}`);
 for(const file of ['src/components/HeroText.jsx','src/sections/Navbar.jsx','src/sections/Contact.jsx']){
  const source=readFileSync(file,'utf8');assert(source.includes('href={CV_PATH} download={CV_FILENAME}'));
 }
 assert(readFileSync('src/components/HeroText.jsx','utf8').includes('View CV'));
 assert(readFileSync('src/components/CopyEmailButton.jsx','utf8').includes('link.download = CV_FILENAME'));
});

test('built server returns the exact versioned CV PDF',async()=>{
 const {preview}=await import('vite');
 const server=await preview({preview:{host:'127.0.0.1',port:0,open:false}});
 try{
  const response=await fetch(`http://127.0.0.1:${server.httpServer.address().port}${CV_PATH}`);
  assert.equal(response.status,200);assert.match(response.headers.get('content-type'),/application\/pdf/);
  assert.deepEqual(Buffer.from(await response.arrayBuffer()),readFileSync('public/assets/'+CV_FILENAME));
 }finally{await new Promise((resolve,reject)=>server.httpServer.close(error=>error?reject(error):resolve()));}
});
