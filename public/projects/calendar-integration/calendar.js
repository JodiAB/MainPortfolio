async function loadEvents(request){
 const endpoint="https://graph.microsoft.com/v1.0/me/calendar/events";
 let url=endpoint+"?$select=id,subject,start,end&$top=2";const seen=new Set(),events=new Map();
 while(url!==null){
  if(typeof url!=="string"||!url.startsWith(endpoint+"?")||seen.has(url)||seen.size>=20)throw Error("Invalid or repeated pagination link");
  seen.add(url);const response=await request(url);
  if(!response.ok)throw Error(({401:"Sign-in required",403:"Calendar permission denied",429:"Rate limited; retry later"})[response.status]||"Calendar request failed");
  const body=await response.json();if(!Array.isArray(body.value))throw Error("Unexpected calendar response");
  for(const e of body.value){
   if(typeof e.id!=="string"||typeof e.subject!=="string"||typeof e.start?.dateTime!=="string"||typeof e.end?.dateTime!=="string"||e.start.timeZone!=="UTC"||e.end.timeZone!=="UTC")throw Error("Invalid event record");
   const start=Date.parse(e.start.dateTime.replace(/Z$/,"")+"Z"),end=Date.parse(e.end.dateTime.replace(/Z$/,"")+"Z");
   if(!Number.isFinite(start)||!Number.isFinite(end)||end<start)throw Error("Invalid event times");events.set(e.id,{subject:e.subject,start,end});
  }url=body["@odata.nextLink"]??null;
 }return [...events.values()].sort((a,b)=>a.start-b.start);
}
function mockRequest(mode){
 const next="https://graph.microsoft.com/v1.0/me/calendar/events?$skiptoken=fictional-page-2";
 const ev=(id,subject,start,end)=>({id,subject,start:{dateTime:"2026-12-01T"+start+":00",timeZone:"UTC"},end:{dateTime:"2026-12-01T"+end+":00",timeZone:"UTC"}});
 const first=[ev("1","Client handover","08:00","08:30"),ev("2","Operations review","09:00","09:45")],second=[ev("3","Report quality check","11:00","11:30")];
 return async url=>{
  if(["401","403","429","500"].includes(mode))return {ok:false,status:Number(mode)};
  return {ok:true,json:async()=>mode==="malformed"?{value:null}:mode==="empty"?{value:[]}:mode==="badlink"?{value:first,"@odata.nextLink":"https://example.invalid/events"}:mode==="loop"?{value:first,"@odata.nextLink":url}:url===next?{value:second}:{value:first,"@odata.nextLink":next}};
 };
}
const $=id=>document.getElementById(id);$("run").addEventListener("click",async()=>{const b=$("run");b.disabled=true;$("events").replaceChildren();$("status").textContent="Loading fictional response…";try{const events=await loadEvents(mockRequest($("scenario").value));$("status").textContent=events.length+" events loaded (SAST).";const fmt=new Intl.DateTimeFormat("en-ZA",{timeZone:"Africa/Johannesburg",hour:"2-digit",minute:"2-digit",hourCycle:"h23"});for(const e of events){const li=document.createElement("li");li.textContent=fmt.format(e.start)+"–"+fmt.format(e.end)+" · "+e.subject;$("events").append(li)}}catch(e){$("status").textContent=e.message+". No records displayed."}finally{b.disabled=false}});