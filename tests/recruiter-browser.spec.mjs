import { test, expect } from '@playwright/test';
const demo='/projects/opsflow/demo.html';
const navigate=(p,name)=>p.getByRole('navigation',{name:'Workspace sections'}).getByRole('button',{name,exact:true}).click();
test('guest workspace: all sections and complete project/task lifecycle',async({page})=>{
 const errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.goto(demo);
 await expect(page.getByRole('heading',{name:'Welcome back, guest'})).toBeVisible();
 await navigate(page,'Project workspace');await page.getByRole('button',{name:'New project'}).click();
 await page.getByLabel('Project name').fill('QA project');await page.getByLabel('Description').fill('Fictional sample');
 await page.getByRole('button',{name:'Save',exact:true}).click();
 await expect(page.getByRole('heading',{name:'QA project'})).toBeVisible();
 await navigate(page,'Task management');await page.getByRole('button',{name:'New task'}).click();
 await page.getByLabel('Task title').fill('QA task');await page.locator('#editor select[name=project]').selectOption({label:'QA project'});
 await page.getByRole('button',{name:'Save',exact:true}).click();
 await expect(page.getByText('QA task',{exact:true})).toBeVisible();
 await page.getByLabel('Status for QA task').selectOption('Done');
 await expect(page.getByLabel('Status for QA task')).toHaveValue('Done');
 await navigate(page,'Operations dashboard');await expect(page.locator('.metric').filter({hasText:'Completed'})).toContainText('3');
 await navigate(page,'Task management');await page.locator('#filter').selectOption('Done');await expect(page.getByText('QA task',{exact:true})).toBeVisible();
 page.once('dialog',d=>d.accept());await page.getByRole('row').filter({hasText:'QA task'}).getByRole('button',{name:'Delete'}).click();
 await expect(page.getByText('QA task',{exact:true})).toHaveCount(0);
 await navigate(page,'Project workspace');page.once('dialog',d=>d.accept());await page.locator('section.card').filter({hasText:'QA project'}).getByRole('button',{name:'Delete'}).click();
 await expect(page.getByRole('heading',{name:'QA project'})).toHaveCount(0);expect(errors).toEqual([]);
});
test('guest reports, role boundaries, team, appearance and reset',async({page})=>{
 await page.goto(demo);await navigate(page,'Reports workspace');
 await page.getByRole('button',{name:'New report'}).click();await page.getByLabel('Report title').fill('QA report');
 await page.locator('#editor select[name=status]').selectOption('Published');await page.getByLabel('Block 1 format').selectOption('bold');await page.getByLabel('Content',{exact:true}).fill('Fictional test report');
 await page.getByRole('button',{name:'Save',exact:true}).click();
 const report=page.locator('section.card').filter({has:page.getByRole('heading',{name:'QA report'})});
 await expect(report.locator('.report-preview strong')).toHaveText('Fictional test report');
 await page.evaluate(()=>{window.print=()=>{window.__qaPrinted=true}});
 await report.getByRole('button',{name:'Print / Save as PDF'}).click();
 expect(await page.evaluate(()=>window.__qaPrinted)).toBe(true);
 await page.emulateMedia({media:'print'});await expect(page.locator('#print-area')).toBeVisible();await expect(page.locator('#print-area')).toContainText('QA report');await page.emulateMedia({media:'screen'});
 await navigate(page,'Team management');await page.getByRole('button',{name:'New member'}).click();await page.getByLabel('Member name').fill('QA member');await page.getByRole('button',{name:'Save',exact:true}).click();await expect(page.getByText('QA member',{exact:true})).toBeVisible();
 await page.locator('#role').selectOption('MEMBER');await expect(page.getByRole('button',{name:'New member'})).toHaveCount(0);
 await navigate(page,'Project workspace');await expect(page.getByRole('button',{name:'New project'})).toHaveCount(0);
 await navigate(page,'Reports workspace');await expect(page.getByRole('button',{name:'New report'})).toHaveCount(0);
 await navigate(page,'Task management');await expect(page.getByRole('button',{name:'New task'})).toBeVisible();
 await navigate(page,'Settings');await expect(page.getByRole('button',{name:'Save settings'})).toHaveCount(0);
 await page.locator('#role').selectOption('ADMIN');await expect(page.getByRole('button',{name:'Save settings'})).toHaveCount(0);
 await page.locator('#role').selectOption('OWNER');await page.getByLabel('Workspace name').fill('QA workspace');await page.getByRole('button',{name:'Save settings'}).click();await expect(page.locator('#workspace-name')).toHaveText('QA workspace');
 await page.getByLabel('Theme').selectOption('dark');await expect(page.locator('body')).toHaveAttribute('data-theme','dark');
 page.once('dialog',d=>d.accept());await page.locator('#reset').click();await expect(page.locator('#workspace-name')).toHaveText('Northstar Operations');await expect(page.locator('body')).toHaveAttribute('data-theme','light');
});
test('mobile guest navigation and no external network requests',async({page})=>{
 await page.setViewportSize({width:390,height:844});const external=[];page.on('request',r=>{if(!r.url().startsWith('http://127.0.0.1:4173/'))external.push(r.url())});
 await page.goto(demo);await expect(page.getByRole('heading',{name:'Welcome back, guest'})).toBeVisible();
 for(const section of ['Project workspace','Task management','Reports workspace','Team management','Settings','Operations dashboard']){
  await page.locator('#menu').click();await navigate(page,section);await expect(page.locator('#current')).toHaveText(section);
  expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1)).toBe(true);
 }
 expect(external).toEqual([]);
});
test('mock Graph exercise validates responses',async({page})=>{
 await page.goto('/projects/calendar-integration/index.html');
 await page.getByRole('button',{name:'Load sample calendar'}).click();await expect(page.locator('#events li')).toHaveCount(3);
 for(const [scenario,message] of [['empty','0 events'],['401','Sign-in required'],['403','permission denied'],['429','Rate limited'],['500','request failed'],['malformed','Unexpected calendar response'],['badlink','Invalid or repeated pagination link'],['loop','Invalid or repeated pagination link']]){
  await page.locator('#scenario').selectOption(scenario);await page.getByRole('button',{name:'Load sample calendar'}).click();await expect(page.locator('#status')).toContainText(message);await expect(page.locator('#events li')).toHaveCount(0);
 }
});
test('portfolio production anonymous entry point',async({page})=>{
 const response=await page.goto('https://jodiabrahamsportfolio.vercel.app/projects/opsflow/demo.html',{waitUntil:'domcontentloaded'});
 expect(response?.status()).toBe(200);await expect(page.getByRole('heading',{name:'Welcome back, guest'})).toBeVisible();
});
test('FuelWise production manual price estimates',async({page})=>{
 await page.goto('https://fuelwisesa.co.za/full-tank',{waitUntil:'domcontentloaded'});
 await page.getByLabel('Use manual price override').check();
 await page.getByLabel('Manual price per litre in rand').fill('20');
 await page.locator('#tank-size-litres').fill('45');
 await expect(page.locator('.result-card')).toContainText(/R\s*900[,.]00/);
 await page.goto('https://fuelwisesa.co.za/trip-cost',{waitUntil:'domcontentloaded'});
 await page.getByLabel('Use manual price override').check();
 await page.getByLabel('Manual price per litre in rand').fill('20');
 await page.getByLabel('Trip distance in km').fill('100');await page.getByLabel('Fuel consumption L/100km').fill('10');await page.getByLabel('People splitting cost').fill('2');
 await expect(page.locator('.result-card').first()).toContainText(/R\s*200[,.]00/);
});
test('portfolio mobile layout and navigation',async({page})=>{
 await page.setViewportSize({width:390,height:844});await page.goto('/');
 await expect(page.getByRole('heading',{name:'OpsFlow',exact:true})).toBeVisible({timeout:20000});
 expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1)).toBe(true);
 const ops=page.getByRole('link',{name:'Interactive demo',exact:false}).first();
 await expect(ops).toHaveAttribute('href',demo);
 const timings=await page.evaluate(()=>{const n=performance.getEntriesByType('navigation')[0];return {domContentLoaded:n.domContentLoadedEventEnd,transferSize:n.transferSize}});
 console.log('Local mobile navigation timings (not field Core Web Vitals)',JSON.stringify(timings));
});