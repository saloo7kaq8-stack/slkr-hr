// ════════════════════════════════════════════════════════
//  SLKR-HR System SYSTEM v6.0 — KUWAIT EDITION
//  © 2025 صالح صقر الجاسم (H-002) — جميع الحقوق محفوظة
//  قانون العمل الكويتي رقم 6 لسنة 2010
// ════════════════════════════════════════════════════════

const NAV=[
  {s:'dashboard',i:'🏠',l:'لوحة التحكم',g:'رئيسي'},
  {s:'staff',i:'👥',l:'الإدارة والموظفون',g:'الإدارة'},
  {s:'appointments',i:'📋',l:'التعيينات',g:'الإدارة'},
  {s:'org',i:'🏗️',l:'الهيكل التنظيمي',g:'الإدارة'},
  {s:'salaries',i:'💰',l:'الرواتب',g:'المالية'},
  {s:'wps',i:'🏦',l:'ملف WPS للبنوك',g:'المالية'},
  {s:'payslip',i:'📄',l:'قسيمة الراتب',g:'المالية'},
  {s:'onboarding',i:'🎯',l:'استقبال موظف جديد',g:'الإدارة'},
  {s:'holidays',i:'📅',l:'العطل والمناسبات الرسمية',g:'الحضور والوقت'},
  {s:'analytics',i:'📊',l:'التحليلات',g:'التقارير'},
  {s:'kpi',i:'🏆',l:'مؤشرات الأداء KPI',g:'التقارير'},
  {s:'alerts',i:'🔔',l:'التنبيهات التلقائية',g:'التقارير'},
  {s:'overtime',i:'⏱️',l:'الأوفر تايم',g:'المالية'},
  {s:'bonuses',i:'🎁',l:'البونص والمكافآت',g:'المالية'},
  {s:'endservice',i:'📜',l:'نهاية الخدمة',g:'المالية'},
  {s:'leaves',i:'🌴',l:'الإجازات',g:'الحضور'},
  {s:'permissions',i:'🕐',l:'الاستئذانات',g:'الحضور'},
  {s:'attendance',i:'⏰',l:'الحضور والانصراف',g:'الحضور'},
  {s:'evaluations',i:'⭐',l:'تقييم الأداء',g:'التقييمات'},
  {s:'evalfiles',i:'📎',l:'ملفات التقييم',g:'التقييمات'},
  {s:'selfeval',i:'🧠',l:'التقييم الذاتي',g:'التقييمات'},
  {s:'peereval',i:'🤝',l:'تقييم الزملاء',g:'التقييمات'},
  {s:'approvals',i:'✅',l:'نماذج الاعتماد',g:'الاعتمادات'},
  {s:'training',i:'📚',l:'التدريب',g:'الاعتمادات'},
  {s:'promotions',i:'🚀',l:'الترقيات',g:'الاعتمادات'},
  {s:'warnings',i:'⚠️',l:'الإنذارات',g:'الاعتمادات'},
  {s:'notifications',i:'🔔',l:'الإشعارات',g:'الإشعارات'},
  {s:'files',i:'📁',l:'مستودع الملفات',g:'الملفات'},
  {s:'reports',i:'📊',l:'التقارير',g:'الملفات'},
  {s:'locations',i:'📍',l:'فروع الشركة',g:'الأدوات'},
  {s:'auditlog',i:'📋',l:'سجل النشاط',g:'النظام'},
  {s:'backup',i:'💾',l:'النسخة الاحتياطية',g:'النظام'},
  {s:'licenseinfo',i:'📄',l:'عقد الترخيص',g:'النظام'},
  {s:'users',i:'🔐',l:'إدارة المستخدمين',g:'النظام'},
  {s:'settings',i:'⚙️',l:'الإعدادات',g:'النظام'},
];
const TITLES={};NAV.forEach(n=>TITLES[n.s]=n.l);

/* ── DEFAULT DATA ─────────────────────────── */
const DEFMGRS=[
  {id:101,empNo:'H-001',name:'عيسى عبدالله العيسى',title:'المدير العام',dept:'الإدارة العامة',grade:'الدرجة الأولى',contract:'دوام كامل',hire:'2020-01-01',start:'2020-01-01',status:'نشط',salary:2500,housing:500,transport:200,other:0,deductions:0,phone:'',email:'',nationality:'كويتي',manager:'',bankname:'',bank:'',photo:'',docs:[]},
  {id:102,empNo:'H-002',name:'صالح صقر الجاسم',title:'نائب المدير العام / مدير الموارد البشرية',dept:'الموارد البشرية',grade:'الدرجة الأولى',contract:'دوام كامل',hire:'2020-01-01',start:'2020-01-01',status:'نشط',salary:2000,housing:400,transport:180,other:0,deductions:0,phone:'',email:'',nationality:'كويتي',manager:'عيسى عبدالله العيسى',bankname:'',bank:'',photo:'',docs:[]},
  {id:103,empNo:'H-003',name:'فهد قاسم الخالدي',title:'المدير التنفيذي',dept:'الإدارة العامة',grade:'الدرجة الأولى',contract:'دوام كامل',hire:'2021-01-01',start:'2021-01-15',status:'نشط',salary:1800,housing:380,transport:160,other:0,deductions:0,phone:'',email:'',nationality:'كويتي',manager:'عيسى عبدالله العيسى',bankname:'',bank:'',photo:'',docs:[]},
  {id:104,empNo:'H-004',name:'سلطان صقر الجاسم',title:'مشرف عام لمتابعة الأعمال',dept:'الإدارة العامة',grade:'الدرجة الثانية',contract:'دوام كامل',hire:'2021-06-01',start:'2021-06-15',status:'نشط',salary:1500,housing:300,transport:150,other:0,deductions:0,phone:'',email:'',nationality:'كويتي',manager:'فهد قاسم الخالدي',bankname:'',bank:'',photo:'',docs:[]},
];
const DEFEMPS=[
  {id:1,empNo:'H-100',name:'ابو العباس قناوي احمد',title:'سكرتير ومندوب الشركة',dept:'الإدارة العامة',grade:'الدرجة الثالثة',contract:'دوام كامل',hire:'2021-03-01',start:'2021-03-15',status:'نشط',salary:400,housing:80,transport:60,other:0,deductions:0,phone:'',email:'',nationality:'',manager:'عيسى عبدالله العيسى',bankname:'',bank:'',photo:'',docs:[]},
  {id:2,empNo:'H-101',name:'علاء عاطف شندي',title:'سكرتير',dept:'الإدارة العامة',grade:'الدرجة الثالثة',contract:'دوام كامل',hire:'2026-09-03',start:'2026-09-03',status:'نشط',salary:0,housing:0,transport:0,other:0,deductions:0,phone:'',email:'',nationality:'',manager:'عيسى عبدالله العيسى',bankname:'',bank:'',photo:'',docs:[]},
  {id:3,empNo:'K-101',name:'محمود ابو مسلم عبدالستار',title:'مندوب مبيعات',dept:'المبيعات',grade:'الدرجة الثالثة',contract:'دوام كامل',hire:'2021-06-01',start:'2021-06-01',status:'نشط',salary:250,housing:50,transport:30,other:0,deductions:0,phone:'',email:'',nationality:'',manager:'',bankname:'',bank:'',photo:'',docs:[]},
  {id:4,empNo:'K-100',name:'محمد عدنان الديات',title:'مسؤول المبيعات',dept:'المبيعات',grade:'الدرجة الثالثة',contract:'دوام كامل',hire:'2021-04-01',start:'2021-04-01',status:'نشط',salary:550,housing:110,transport:70,other:0,deductions:0,phone:'',email:'',nationality:'',manager:'محمود ابو مسلم عبدالستار',bankname:'',bank:'',photo:'',docs:[]},
  {id:5,empNo:'K-102',name:'بشار دياب عيسى',title:'مدير المصنع',dept:'مصنع مطابخ العيسى',grade:'الدرجة الثالثة',contract:'دوام كامل',hire:'2021-01-01',start:'2021-01-15',status:'نشط',salary:500,housing:100,transport:60,other:0,deductions:0,phone:'',email:'',nationality:'',manager:'صالح صقر الجاسم',bankname:'',bank:'',photo:'',docs:[],company:'شركة العيسى أوفر فلو'},
  {id:6,empNo:'K-103',name:'موجيش باندورانجان',title:'مركب زجاج ومرايا',dept:'مصنع مطابخ العيسى',grade:'الدرجة الخامسة',contract:'دوام كامل',hire:'2024-12-22',start:'2024-12-22',status:'نشط',salary:200,housing:0,transport:0,other:0,deductions:0,phone:'',email:'',nationality:'الهند',manager:'بشار دياب عيسى',bankname:'',bank:'',photo:'',docs:[],company:'شركة مطابخ العيسى كيتش'},
  {id:7,empNo:'K-104',name:'محمد فريد حسن محمد احمد ربيع',title:'مركب زجاج ومرايا',dept:'مصنع مطابخ العيسى',grade:'الدرجة الخامسة',contract:'دوام كامل',hire:'2026-05-20',start:'2026-05-20',status:'نشط',salary:150,housing:0,transport:0,other:0,deductions:0,phone:'',email:'',nationality:'مصر',manager:'بشار دياب عيسى',bankname:'',bank:'',photo:'',docs:[]},
  {id:8,empNo:'K-106',name:'وليد السيد احمد',title:'مدير التركيبات',dept:'تركيبات مطابخ العيسى',grade:'الدرجة الثالثة',contract:'دوام كامل',hire:'',start:'',status:'نشط',salary:0,housing:0,transport:0,other:0,deductions:0,phone:'',email:'',nationality:'',manager:'بشار دياب عيسى',bankname:'',bank:'',photo:'',docs:[],company:'دار العيسى'},
  {id:9,empNo:'K-107',name:'محمد جمال',title:'فني تركيبات',dept:'تركيبات مطابخ العيسى',grade:'الدرجة الخامسة',contract:'دوام كامل',hire:'',start:'',status:'نشط',salary:0,housing:0,transport:0,other:0,deductions:0,phone:'',email:'',nationality:'',manager:'وليد السيد احمد',bankname:'',bank:'',photo:'',docs:[],company:'دار العيسى'},
  {id:10,empNo:'K-108',name:'محمد احمد',title:'فني تركيبات',dept:'تركيبات مطابخ العيسى',grade:'الدرجة الخامسة',contract:'دوام كامل',hire:'',start:'',status:'نشط',salary:0,housing:0,transport:0,other:0,deductions:0,phone:'',email:'',nationality:'',manager:'وليد السيد احمد',bankname:'',bank:'',photo:'',docs:[],company:'دار العيسى'},
  {id:11,empNo:'K-109',name:'كلينسيت كوليبالي',title:'فني تركيبات',dept:'تركيبات مطابخ العيسى',grade:'الدرجة الخامسة',contract:'دوام كامل',hire:'',start:'',status:'نشط',salary:0,housing:0,transport:0,other:0,deductions:0,phone:'',email:'',nationality:'',manager:'وليد السيد احمد',bankname:'',bank:'',photo:'',docs:[],company:'دار العيسى'},
  {id:12,empNo:'K-105',name:'غلام محمد عبدالرحمن',title:'مركب زجاج ومرايا',dept:'تركيبات مطابخ العيسى',grade:'الدرجة الخامسة',contract:'دوام كامل',hire:'2026-06-18',start:'2026-06-18',status:'نشط',salary:230,housing:0,transport:0,other:0,deductions:0,phone:'',email:'',nationality:'باكستان',manager:'وليد السيد احمد',bankname:'',bank:'',photo:'',docs:[],company:'دار العيسى'},
  {id:13,empNo:'A-101',name:'سيلفاراج جاياموورثي',title:'عامل مصنع الألمنيوم',dept:'مصنع الألمنيوم العيسى',grade:'الدرجة الخامسة',contract:'دوام كامل',hire:'',start:'',status:'نشط',salary:0,housing:0,transport:0,other:0,deductions:0,phone:'',email:'',nationality:'',manager:'',bankname:'',bank:'',photo:'',docs:[],company:'شركة العيسى أوفر فلو'},
  {id:14,empNo:'A-102',name:'وائل سيد',title:'عامل مصنع الألمنيوم',dept:'مصنع الألمنيوم العيسى',grade:'الدرجة الخامسة',contract:'دوام كامل',hire:'',start:'',status:'نشط',salary:0,housing:0,transport:0,other:0,deductions:0,phone:'',email:'',nationality:'',manager:'',bankname:'',bank:'',photo:'',docs:[],company:'العيسى ستور لورش الألمنيوم'},
  {id:15,empNo:'A-103',name:'ديفان إيزومالاي',title:'عامل مصنع الألمنيوم',dept:'مصنع الألمنيوم العيسى',grade:'الدرجة الخامسة',contract:'دوام كامل',hire:'',start:'',status:'نشط',salary:0,housing:0,transport:0,other:0,deductions:0,phone:'',email:'',nationality:'',manager:'',bankname:'',bank:'',photo:'',docs:[],company:'مؤسسة دار العيسى'},
  {id:16,empNo:'A-104',name:'محبوب باشا',title:'عامل مصنع الألمنيوم',dept:'مصنع الألمنيوم العيسى',grade:'الدرجة الخامسة',contract:'دوام كامل',hire:'',start:'',status:'نشط',salary:0,housing:0,transport:0,other:0,deductions:0,phone:'',email:'',nationality:'',manager:'',bankname:'',bank:'',photo:'',docs:[],company:'مودرن هاوس لتشييد المباني'},
  {id:17,empNo:'A-105',name:'حيدر علي',title:'عامل مصنع الألمنيوم',dept:'مصنع الألمنيوم العيسى',grade:'الدرجة الخامسة',contract:'دوام كامل',hire:'',start:'',status:'نشط',salary:0,housing:0,transport:0,other:0,deductions:0,phone:'',email:'',nationality:'',manager:'',bankname:'',bank:'',photo:'',docs:[],company:'العيسى ستور لورش الألمنيوم'},
  {id:18,empNo:'A-106',name:'عماد رضوان',title:'عامل مصنع الألمنيوم',dept:'مصنع الألمنيوم العيسى',grade:'الدرجة الخامسة',contract:'دوام كامل',hire:'',start:'',status:'نشط',salary:0,housing:0,transport:0,other:0,deductions:0,phone:'',email:'',nationality:'',manager:'',bankname:'',bank:'',photo:'',docs:[],company:'دار العيسى'},
];
const DEFDEPTS=[{id:1,name:'الإدارة العامة',manager:'عيسى عبدالله العيسى'},{id:2,name:'المبيعات',manager:'محمود ابو مسلم عبدالستار'},{id:3,name:'مصنع مطابخ العيسى',manager:'بشار دياب عيسى'},{id:4,name:'تركيبات مطابخ العيسى',manager:'وليد السيد احمد'},{id:5,name:'مصنع الألمنيوم العيسى',manager:''},{id:6,name:'الموارد البشرية',manager:'صالح صقر الجاسم'},{id:7,name:'المالية',manager:''}];
const DEFUSERS=[
  {id:1,name:'عيسى عبدالله العيسى',username:'admin',password:'admin123',role:'مدير عام',status:'نشط',lastLogin:''},
  {id:2,name:'صالح صقر الجاسم',username:'vp',password:'vp123',role:'نائب مدير عام',status:'نشط',lastLogin:''},
  {id:3,name:'مدير الموارد البشرية',username:'hr',password:'hr123',role:'مدير موارد بشرية',status:'نشط',lastLogin:''},
  {id:4,name:'المشرف الإداري',username:'supervisor',password:'sup123',role:'مشرف',status:'نشط',lastLogin:''},
  {id:5,empNo:'H-101',name:'علاء عاطف شندي',username:'alaa',password:'alaa123',role:'سكرتير',status:'نشط',lastLogin:''},
];
var KWT_H=[
  {d:'2025-01-01',n:'رأس السنة الميلادية',t:'رسمي'},
  {d:'2025-02-25',n:'اليوم الوطني الكويتي',t:'وطني'},
  {d:'2025-02-26',n:'يوم التحرير',t:'وطني'},
  {d:'2025-03-30',n:'الإسراء والمعراج',t:'ديني'},
  {d:'2025-03-31',n:'رأس السنة الهجرية',t:'ديني'},
  {d:'2025-06-07',n:'عيد الفطر - اليوم الأول',t:'ديني'},
  {d:'2025-06-08',n:'عيد الفطر - اليوم الثاني',t:'ديني'},
  {d:'2025-06-09',n:'عيد الفطر - اليوم الثالث',t:'ديني'},
  {d:'2025-09-05',n:'عيد الأضحى - اليوم الأول',t:'ديني'},
  {d:'2025-09-06',n:'عيد الأضحى - اليوم الثاني',t:'ديني'},
  {d:'2025-09-07',n:'عيد الأضحى - اليوم الثالث',t:'ديني'},
  {d:'2025-09-25',n:'المولد النبوي الشريف',t:'ديني'}
];
function seedHolidays(){return cp(KWT_H).map(function(h,i){h.id=h.id||('seed-'+i);return h;});}
function defDB(){return{serial:'MH-'+rnd(4)+'-'+rnd(4),settings:{companyName:'مطابخ العيسى',tagline:'الموارد البشرية',logo:LOGO_DATA_URI},users:cp(DEFUSERS),departments:cp(DEFDEPTS),employees:cp([...DEFMGRS.map(m=>({...m,isMgr:true})),...DEFEMPS]),leaves:[],evaluations:[],selfEvals:[],peerEvals:[],bonuses:[],training:[],promotions:[],warnings:[],approvals:[],attendance:[],appointments:[],overtime:[],permissions:[],notifications:[],evalFiles:[],reportFiles:[],generalFiles:[],locations:[{id:1,name:'المقر الرئيسي',address:'الكويت – المنطقة الصناعية',type:'مقر رئيسي'}],endServices:[],onboarding:[],auditLog:[],hrActions:[],holidays:seedHolidays(),candidates:[]};}
var ONBOARD_STEPS=['استلام الهوية والأوراق الثبوتية','فتح الملف الوظيفي في النظام','التسجيل في نظام الرواتب','ربط الحساب البنكي IBAN','اصدار بطاقة الدوام','جلسة التعريف بالشركة وسياساتها','تسليم العقد الرسمي الموقع','تفعيل صلاحيات النظام','التعريف بالزملاء والمشرف المباشر','متابعة فترة التجربة 100 يوم'];
var APT_STAGES=['طلب توظيف','شاغر','مرشح','مقابلة عمل','قبول مبدئي','عرض وظيفي','تعيين'];
var DOC_CATS=['الإقامة','جواز السفر','البطاقة المدنية','عقد العمل','الشهادة الصحية','رخصة العمل','شهادات ومؤهلات','أخرى'];
var LOGO_DATA_URI='data:image/png;base64,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';
var APT_ICONS={'طلب توظيف':'📝','شاغر':'📢','مرشح':'👤','مقابلة عمل':'🗣️','قبول مبدئي':'👍','عرض وظيفي':'📄','تعيين':'✅'};
function rnd(n){return Math.random().toString(36).substr(2,n).toUpperCase();}
function cp(x){return JSON.parse(JSON.stringify(x));}

let DB,CU,curS='dashboard',evalSC={},evalREC='';
// EDIT CONTEXT — store edit info globally to avoid onclick JSON
let EC={isMgr:false,id:null,photoData:'',docs:[]};

function loadDB(){try{const r=localStorage.getItem('mh6');if(r){const p=JSON.parse(r);const d=defDB();return{...d,...p};}}catch(e){}return defDB();}
function migrateDB(){
  if(DB&&DB.managers&&DB.managers.length){
    if(!DB.employees)DB.employees=[];
    DB.managers.forEach(function(m){
      if(!DB.employees.some(function(e){return e.id===m.id;}))DB.employees.push(Object.assign({},m,{isMgr:true}));
    });
    delete DB.managers;
    saveDB();
  }
  if(DB&&!DB.holidays){DB.holidays=seedHolidays();saveDB();}
  if(DB&&!DB.candidates){DB.candidates=[];saveDB();}
  if(DB&&DB.settings&&!DB.settings.logo){DB.settings.logo=LOGO_DATA_URI;saveDB();}
  // توحيد "المدراء" و"الموظفون" في قاعدة بيانات واحدة مصنّفة (إدارة عليا / موظفون / عمال)
  if(DB&&DB.employees&&DB.employees.length){
    var changed=false;
    DB.employees.forEach(function(e){
      if(!e.category){
        var t=String(e.title||'');
        if(e.isMgr)e.category='إدارة عليا';
        else if(/عامل|فني|مركب/.test(t))e.category='عامل';
        else e.category='موظف';
        changed=true;
      }
      var shouldBeMgr=e.category==='إدارة عليا';
      if(!!e.isMgr!==shouldBeMgr){e.isMgr=shouldBeMgr;changed=true;}
    });
    if(changed)saveDB();
  }
}
function saveDB(){try{var d=JSON.stringify(DB);localStorage.setItem('mh6',d);localStorage.setItem('mh6_ts',String(Date.now()));if(typeof _bc!='undefined'&&_bc){try{_bc.postMessage({db:JSON.parse(d),by:CU?CU.name:''});}catch(e){}}}catch(e){
  var blocked=e&&(e.name==='SecurityError'||/insecure|denied|blocked/i.test(e.message||''));
  if(blocked){toast('⚠️ المتصفح يمنع حفظ البيانات في هذه الصفحة (شائع عند فتح الملف من معاينة سريعة على آيفون/آيباد) — افتح الرابط مباشرة من Safari بدل معاينة الملفات لضمان حفظ بياناتك','err');console.error('خطأ في الحفظ: التخزين المحلي محظور في هذا السياق (معاينة/وضع خاص).');}
  else{toast('⚠️ البيانات كبيرة — قلل الصور أو المستندات','err');console.error('خطأ في الحفظ: البيانات كبيرة الحجم. يُنصح بتقليل المستندات المرفوعة أو الصور.');}
}}

/* ── HELPERS ──────────────────────────────── */
const $=id=>document.getElementById(id);
const gv=id=>{const e=$(id);return e?e.value.trim():'';}
const td=()=>new Date().toISOString().split('T')[0];
const dayDiff=(dateStr)=>{if(!dateStr)return null;try{return Math.round((new Date(dateStr+'T00:00:00')-new Date(td()+'T00:00:00'))/86400000);}catch(e){return null;}};
const esc=s=>String(s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
const fd=d=>{if(!d)return'—';try{return new Date(d).toLocaleDateString('en-GB');}catch(e){return d;}};
const KD=n=>(parseFloat(n)||0).toFixed(3)+' د.ك';
const fi=n=>{const e=(n||'').split('.').pop().toLowerCase();return e==='pdf'?'📄':e==='xlsx'||e==='xls'?'📊':e==='docx'||e==='doc'?'📝':e==='jpg'||e==='png'||e==='jpeg'?'🖼️':'📎';};
const ns=e=>(parseFloat(e.salary)||0)+(parseFloat(e.housing)||0)+(parseFloat(e.transport)||0)+(parseFloat(e.other)||0)-(parseFloat(e.deductions)||0);
const pc=a=>{a=parseFloat(a)||0;if(a>=4.5)return'ممتاز';if(a>=3.5)return'جيد جدا';if(a>=2.5)return'جيد';if(a>=1.5)return'يحتاج تطوير';return'ضعيف';};
const pb=c=>{const m={'ممتاز':'bok2','جيد جدا':'bif','جيد':'bwn2','يحتاج تطوير':'bdn2','ضعيف':'bdn2'};return`<span class="badge ${m[c]||'bwn2'}">${esc(c)}</span>`;};
const emRow=(c,m='لا توجد بيانات')=>`<tr><td colspan="${c}" style="text-align:center;padding:22px;color:#999;">${m}</td></tr>`;
const allP=()=>DB.employees||[];
function findP(id){return allP().find(e=>e.id===id);}
function photoEl(photo,name,lg=false){
  if(photo)return`<img src="${esc(photo)}" class="${lg?'ph-lg':'ph'}" alt="${esc(name)}"/>`;
  return lg?`<div class="av-lg">${name?esc(name[0]):'?'}</div>`:`<div class="av">${name?esc(name[0]):'?'}</div>`;
}
function empOpts(ph='-- اختر --'){
  const mo=(DB.employees||[]).filter(e=>e.isMgr).map(e=>`<option value="m:${e.id}">[مدير] ${esc(e.empNo||'—')} ${esc(e.name)}</option>`).join('');
  const eo=(DB.employees||[]).filter(e=>!e.isMgr).map(e=>`<option value="e:${e.id}">[موظف] ${esc(e.empNo||'—')} ${esc(e.name)}</option>`).join('');
  return`<option value="">${ph}</option>`+mo+eo;
}
function deptOpts(sel){return`<option value="">-- اختر القسم --</option>`+(DB.departments||[]).map(d=>`<option value="${esc(d.name)}" ${d.name===sel?'selected':''}>${esc(d.name)}</option>`).join('');}
function natOpts(sel){
  var list=['كويتي','مصر','الهند','باكستان','بنغلاديش','الفلبين','سريلانكا','نيبال','سوريا','لبنان','الأردن','السودان'];
  if(sel&&list.indexOf(sel)===-1)list.push(sel);
  return `<option value="">-- اختر الجنسية --</option>`+list.map(o=>`<option value="${esc(o)}" ${o===sel?'selected':''}>${esc(o)}</option>`).join('');
}
function resolveP(val){const[,id]=val.split(':');return (DB.employees||[]).find(e=>e.id==id);}
function resolveArr(val){return DB.employees;}

/* ── TOAST ────────────────────────────────── */
function toast(msg,t='ok'){const el=$('TOAST');if(!el)return;el.textContent=msg;el.className='toast show'+(t==='err'?' err':'');clearTimeout(el._t);el._t=setTimeout(()=>el.classList.remove('show'),3200);}

/* ── SOUND ────────────────────────────────── */
function beep(){try{const c=new(window.AudioContext||window.webkitAudioContext)();const o=c.createOscillator();const g=c.createGain();o.connect(g);g.connect(c.destination);o.frequency.setValueAtTime(880,c.currentTime);o.frequency.setValueAtTime(660,c.currentTime+0.15);o.frequency.setValueAtTime(880,c.currentTime+0.3);g.gain.setValueAtTime(0.3,c.currentTime);g.gain.exponentialRampToValueAtTime(0.001,c.currentTime+0.5);o.start(c.currentTime);o.stop(c.currentTime+0.5);}catch(e){}}

/* ── NOTIFICATIONS ────────────────────────── */
function addNotif(empName,title,msg){
  if(!DB.notifications)DB.notifications=[];
  DB.notifications.push({id:Date.now(),empName,title,msg,date:td(),read:false});
  saveDB();updBell();beep();
  const el=$('TOAST');if(el){el.innerHTML=`🔔 <strong>${esc(title)}</strong><br/><small>${esc(empName)}</small>`;el.className='toast show';clearTimeout(el._t);el._t=setTimeout(()=>el.classList.remove('show'),4000);}
}
function updBell(){const un=(DB.notifications||[]).filter(n=>!n.read).length;const c=$('bellCnt');if(c){c.textContent=un;c.classList.toggle('show',un>0);}}

/* ── OVERLAY SYSTEM ───────────────────────── */
function mkOv(id,title,body,maxW='680px'){
  const old=$(id);if(old)old.remove();
  const d=document.createElement('div');d.className='ov';d.id=id;
  d.innerHTML=`<div class="ov-box" style="max-width:${maxW};"><div class="ov-hd"><div class="ov-ttl">${esc(title)}</div><button class="ov-cl" onclick="clOv('${id}')">✕</button></div><div id="${id}B">${body}</div></div>`;
  $('OVS').appendChild(d);
  return d;
}
function opOv(id){const e=$(id);if(e)e.classList.add('open');}
function clOv(id){const e=$(id);if(e)e.remove();}
function mkOpOv(id,title,body,maxW='680px'){mkOv(id,title,body,maxW);opOv(id);}

/* ── LOGIN ────────────────────────────────── */
function doLogin(){
  const u=gv('LU'),p=gv('LP');
  const f=(DB.users||[]).find(x=>x.username===u&&x.password===p&&x.status==='نشط');
  if(f){CU=f;f.lastLogin=new Date().toLocaleDateString('en-GB');saveDB();$('LW').style.display='none';$('APP').style.cssText='display:block!important';document.body.classList.add('logged-in');$('sbUN').textContent=f.name;$('TBD').textContent=new Date().toLocaleDateString('en-GB',{weekday:'long',year:'numeric',month:'long',day:'numeric'});logAction('تسجيل دخول','');try{buildNav();applyBrand();}catch(e){console.log('Build error:',e);}updBell();showS('dashboard');initPhotoSize();initDarkMode();initMasterAccess();setTimeout(checkAutoAlerts,1000);
    // مزامنة سحابية حقيقية: نحاول تسجيل دخول Supabase Auth بنفس البيانات — إذا نجحت تنفتح المزامنة، وإذا فشلت (بدون نت مثلاً) يستمر النظام محليًا بدون مشاكل
    supaSignIn(u,p).then(function(ok){ if(ok) initSupabase(); });
  }
  else{$('LE').textContent='بيانات الدخول غير صحيحة';}
}
$('LP').addEventListener('keydown',e=>{if(e.key==='Enter')doLogin();});
$('LU').addEventListener('keydown',e=>{if(e.key==='Enter')$('LP').focus();});
function doLogout(){CU=null;SUPA_SESSION=null;_supaEnabled=false;if(_supaSyncTimer){clearInterval(_supaSyncTimer);_supaSyncTimer=null;}$('LW').style.display='flex';$('APP').style.display='none';$('LU').value='';$('LP').value='';$('LE').textContent='';}

function applyBrand(){
  var s=DB.settings;
  $('sbNM').textContent=s.companyName||'SLKR-HR';
  $('sbTG').textContent=s.tagline||'نظام الموارد البشرية';
  $('lbNm').textContent=s.companyName||'SLKR-HR';
  if($('lbTg'))$('lbTg').textContent=s.tagline||'الموارد البشرية';
  document.title=(s.companyName||'مطابخ العيسى')+' - '+(s.tagline||'الموارد البشرية');
  var sbHd=$('sbHd');
  if(s.logo){
    // شعار الشريط الجانبي — كبير ومتوسط فوق الاسم
    var li=$('sbLI');
    if(li){
      li.src=s.logo;
      li.style.cssText='width:120px;height:120px;border-radius:50%;object-fit:cover;border:3px solid #c8a84b;display:block;margin:0 auto 10px;box-shadow:0 6px 24px rgba(200,168,75,.5);';
    }
    $('sbIC').style.display='none';
    // شعار نافذة الدخول
    var ll=document.getElementById('loginLogoImg');
    if(ll){
      ll.src=s.logo;
      ll.style.cssText='width:120px;height:120px;border-radius:50%;object-fit:cover;border:3px solid #c8a84b;display:block;margin:0 auto 12px;box-shadow:0 6px 24px rgba(200,168,75,.5);';
    }
    var li2=document.getElementById('loginLogoIcon');
    if(li2)li2.style.display='none';
  }else{
    var li=$('sbLI');
    if(li)li.style.display='none';
    $('sbIC').style.display='block';
    var ll=document.getElementById('loginLogoImg');
    if(ll)ll.style.display='none';
    var li2=document.getElementById('loginLogoIcon');
    if(li2)li2.style.display='block';
  }
}

/* ── NAV ──────────────────────────────────── */
function buildNav(){const gs=[...new Set(NAV.map(n=>n.g))];let h='';gs.forEach(g=>{h+=`<div class="sb-gr">${g}</div>`;NAV.filter(n=>n.g===g).forEach(n=>{h+=`<div class="ni ${n.s===curS?'act':''}" data-s="${n.s}" onclick="showS('${n.s}')">${n.i} ${n.l}</div>`;});});$('NAVM').innerHTML=h;}
function showS(s){
  curS=s;
  try{var _r=localStorage.getItem('mh6');if(_r)DB=Object.assign(defDB(),JSON.parse(_r));}catch(_e){}
  migrateDB();
  updBell();
  document.querySelectorAll('.pg').forEach(p=>p.classList.remove('act'));const pg=$('pg-'+s);if(pg)pg.classList.add('act');document.querySelectorAll('.ni').forEach(n=>n.classList.toggle('act',n.dataset.s===s));$('TBT').textContent=TITLES[s]||s;const fn={dashboard:pgDash,search:pgSearch,staff:pgStaff,appointments:pgApts,org:pgOrg,salaries:pgSal,overtime:pgOT,bonuses:pgBonus,endservice:pgEnd,leaves:pgLeaves,permissions:pgPerms,attendance:pgAtt,evaluations:pgEvals,evalfiles:pgEvalFiles,selfeval:pgSelf,peereval:pgPeer,approvals:pgAppr,training:pgTrain,promotions:pgPromo,warnings:pgWarn,notifications:pgNotif,wps:pgWPS,payslip:pgPayslip,onboarding:pgOnboarding,holidays:pgHolidays,analytics:pgAnalytics,kpi:pgKPI,alerts:pgAlerts,files:pgFiles,reports:pgReports,locations:pgLoc,backup:pgBackup,licenseinfo:pgLicenseInfo,users:pgUsers,settings:pgSettings};if(fn[s])fn[s]();}

/* ══════════════════════════════════════════
   PERSON FORM — used for managers & employees
   Uses EC (edit context) to avoid onclick JSON
═══════════════════════════════════════════ */
function openPersonForm(category, personId){
  const arr=DB.employees||[];
  const d=personId?arr.find(e=>e.id===personId):null;
  category=d?(d.category||(d.isMgr?'إدارة عليا':'موظف')):(category||'موظف');
  EC.isMgr=category==='إدارة عليا'; EC.id=personId;
  EC.photoData=d?.photo||'';
  EC.docs=cp(d?.docs||[]);
  const title=d?'✏️ تعديل بيانات '+esc(d.name):'➕ إضافة '+({['إدارة عليا']:'ضمن الإدارة العليا','موظف':'موظف','عامل':'عامل'}[category]||'موظف جديد');

  mkOpOv('PF',title,`
  <div class="tabs">
    <button class="tbb act" onclick="pfTab('basic',this)">الأساسية</button>
    <button class="tbb" onclick="pfTab('job',this)">الوظيفية</button>
    <button class="tbb" onclick="pfTab('fin',this)">المالية</button>
    <button class="tbb" onclick="pfTab('docs',this)">المستندات</button>
  </div>
  <div id="pft-basic">
    <div style="display:flex;gap:14px;align-items:flex-start;margin-bottom:14px;">
      <div style="display:flex;flex-direction:column;align-items:center;gap:4px;flex-shrink:0;">
        <div class="photo-area" id="pfPhotoArea" onclick="$('pfPhotoInp').click()" style="width:80px;height:80px;">
          ${EC.photoData?`<img id="pfPhotoImg" src="${esc(EC.photoData)}" style="width:100%;height:100%;object-fit:cover;border-radius:50%;"/>`:`<div id="pfPhotoImg" style="font-size:11px;color:#888;text-align:center;">📷<br/>صورة</div>`}
        </div>
        <div style="font-size:9px;color:#888;">انقر لرفع صورة</div>
        <div class="photo-size-ctrl"><button class="psb" onclick="resizePF(-10)">&#8722;</button><span class="psl" id="pfSzLbl">80px</span><button class="psb" onclick="resizePF(10)">+</button></div>
        <input type="file" id="pfPhotoInp" accept="image/*" style="display:none;"/>
      </div>
      <div class="fgr" style="flex:1;">
        <div class="fg"><label>الاسم بالعربي *</label><input id="pf-name" value="${esc(d?.name||'')}"/></div>
        <div class="fg"><label>الاسم بالإنجليزي</label><input id="pf-nameEn" value="${esc(d?.nameEn||'')}"/></div>
        <div class="fg"><label>الرقم الوظيفي</label><input id="pf-eno" value="${esc(d?.empNo||'')}"/></div>
        <div class="fg"><label>الفئة *</label><select id="pf-cat">${['إدارة عليا','موظف','عامل'].map(o=>`<option ${category===o?'selected':''}>${o}</option>`).join('')}</select></div>
      </div>
    </div>
    <div class="fgr">
      <div class="fg"><label>الرقم المدني</label><input id="pf-idn" value="${esc(d?.idNum||'')}"/></div>
      <div class="fg"><label>الجنسية</label><select id="pf-nat">${natOpts(d?.nationality)}</select></div>
      <div class="fg"><label>الجنس</label><select id="pf-gnd">${['ذكر','أنثى'].map(o=>`<option ${d?.gender===o?'selected':''}>${o}</option>`).join('')}</select></div>
      <div class="fg"><label>تاريخ الميلاد</label><input type="date" id="pf-bth" value="${esc(d?.birth||'')}"/></div>
      <div class="fg"><label>رقم الجوال</label><input id="pf-phn" value="${esc(d?.phone||'')}"/></div>
      <div class="fg"><label>البريد الإلكتروني</label><input id="pf-eml" value="${esc(d?.email||'')}"/></div>
      <div class="fg"><label>الحالة الاجتماعية</label><select id="pf-mar">${['أعزب','متزوج','مطلق','أرمل'].map(o=>`<option ${d?.marital===o?'selected':''}>${o}</option>`).join('')}</select></div>
    </div>
  </div>
  <div id="pft-job" style="display:none;">
    <div class="fgr">
      <div class="fg"><label>القسم</label><select id="pf-dpt">${deptOpts(d?.dept)}</select></div>
      <div class="fg"><label>المسمى الوظيفي *</label><input id="pf-ttl" value="${esc(d?.title||'')}"/></div>
      <div class="fg"><label>الدرجة الوظيفية</label><select id="pf-grd">${['الدرجة الأولى','الدرجة الثانية','الدرجة الثالثة','الدرجة الرابعة','الدرجة الخامسة','الدرجة السادسة'].map(o=>`<option ${d?.grade===o?'selected':''}>${o}</option>`).join('')}</select></div>
      <div class="fg"><label>نوع العقد</label><select id="pf-con">${['دوام كامل','دوام جزئي','عقد مؤقت','موسمي'].map(o=>`<option ${d?.contract===o?'selected':''}>${o}</option>`).join('')}</select></div>
      <div class="fg"><label>تاريخ التعيين</label><input type="date" id="pf-hir" value="${esc(d?.hire||'')}"/></div>
      <div class="fg"><label>تاريخ المباشرة</label><input type="date" id="pf-str" value="${esc(d?.start||'')}"/></div>
      <div class="fg"><label>المشرف المباشر</label><input id="pf-mgr" value="${esc(d?.manager||'')}"/></div>
      <div class="fg"><label>الحالة الوظيفية</label><select id="pf-sts">${['نشط','إجازة','معلق','منتهي الخدمة'].map(o=>`<option ${d?.status===o?'selected':''}>${o}</option>`).join('')}</select></div>
      <div class="fg"><label>نوع الوظيفة</label><select id="pf-jtype">${['إداري','فني','عمالة'].map(o=>`<option ${d?.jobType===o?'selected':''}>${o}</option>`).join('')}</select></div>
    </div>
  </div>
  <div id="pft-fin" style="display:none;">
    <div class="info-box">💰 العملة: الدينار الكويتي (د.ك) — يُطبَّق قانون العمل الكويتي رقم 6/2010</div>
    <div class="fgr">
      <div class="fg"><label>الراتب الأساسي (د.ك)</label><input type="number" step="0.001" id="pf-sal" value="${d?.salary||''}"/></div>
      <div class="fg"><label>بدل درجة (د.ك)</label><input type="number" step="0.001" id="pf-hse" value="${d?.housing||''}"/></div>
      <div class="fg"><label>بدل النقل (د.ك)</label><input type="number" step="0.001" id="pf-trn" value="${d?.transport||''}"/></div>
      <div class="fg"><label>بدلات أخرى (د.ك)</label><input type="number" step="0.001" id="pf-oth" value="${d?.other||''}"/></div>
      <div class="fg"><label>بدل هاتف (د.ك)</label><input type="number" step="0.001" id="pf-phn-al" value="${d?.phoneAllowance||''}"/></div>
      <div class="fg"><label>الخصومات (د.ك)</label><input type="number" step="0.001" id="pf-ded" value="${d?.deductions||''}"/></div>
      <div class="fg"><label>اسم البنك</label><input id="pf-bnk" value="${esc(d?.bankname||'')}"/></div>
      <div class="fg"><label>رقم IBAN</label><input id="pf-ibn" value="${esc(d?.bank||'')}"/></div>
    </div>
  </div>
  <div id="pft-docs" style="display:none;">
    <div class="upz" id="pfDocsZn" style="margin-bottom:10px;"><div style="font-size:24px;">📎</div><div style="font-size:12px;font-weight:700;margin-top:4px;">انقر لرفع مستندات</div></div>
    <input type="file" id="pfDocsInp" style="display:none;" multiple/>
    <div id="pfDocsList"></div>
  </div>
  <div style="display:flex;gap:8px;justify-content:flex-end;margin-top:16px;padding-top:12px;border-top:1px solid #f0ece3;">
    <button class="btn bou" onclick="clOv('PF')">إلغاء</button>
    <button class="btn bp" onclick="savePF()">💾 حفظ البيانات</button>
  </div>`,'860px');

  // Photo handler
  $('pfPhotoInp').addEventListener('change',function(ev){
  var f=ev.target.files[0];if(!f)return;
  var r=new FileReader();
  r.onerror=function(){toast('⚠️ تعذر قراءة الملف — جرّب صورة JPG أو PNG','err');};
  r.onload=function(e){
    toast('⏳ جارٍ تحميل الصورة...');
    smartCompressImage(f, e.target.result, function(compressed){
      EC.photoData=compressed;
      var prev=document.getElementById('pfPhotoImg');
      if(prev&&prev.tagName==='IMG'){
        prev.src=compressed;
      } else if(prev){
        prev.outerHTML='<img id="pfPhotoImg" src="'+compressed+'" style="width:100%;height:100%;object-fit:cover;border-radius:50%;"/>';
      }
      toast('✅ تم تحميل الصورة — اضغط "حفظ البيانات" لتثبيتها');
    },function(wasHeic){
      toast(wasHeic?'⚠️ صورة آيفون (HEIC) تحتاج اتصال إنترنت للتحويل التلقائي — تأكد من الاتصال وحاول مرة أخرى، أو من إعدادات الكاميرا غيّر التنسيق إلى "الأكثر توافقاً"':'⚠️ تعذر تحميل هذه الصورة — جرّب صورة JPG أو PNG','err');
    });
  };
  r.readAsDataURL(f);
  ev.target.value='';
});
  // Docs handler
  $('pfDocsZn').addEventListener('click',()=>$('pfDocsInp').click());
  $('pfDocsInp').addEventListener('change',function(ev){
  Array.from(ev.target.files).forEach(function(f){
    if(f.size > 500000){ // أكثر من 500KB
      toast('تحذير: الملف '+f.name+' كبير الحجم قد يسبب مشاكل في الحفظ','err');
    }
    var r=new FileReader();
    r.onload=function(e){
      EC.docs.push({name:f.name,size:f.size,data:e.target.result,date:td(),category:'',expiry:''});
      renderPFDocs();
    };
    r.readAsDataURL(f);
  });
  ev.target.value='';
});
  renderPFDocs();
}

function pfTab(t,btn){
  ['basic','job','fin','docs'].forEach(x=>{const el=$('pft-'+x);if(el)el.style.display=x===t?'block':'none';});
  document.querySelectorAll('#PFB .tbb').forEach(b=>b.classList.remove('act'));
  if(btn)btn.classList.add('act');
}

function docExpBadge(exp){
  if(!exp)return'';
  const days=Math.round((new Date(exp)-new Date(td()))/86400000);
  if(days<0)return`<span class="badge bdn2">منتهي منذ ${Math.abs(days)} يوم</span>`;
  if(days<=7)return`<span class="badge bdn2">ينتهي خلال ${days} يوم</span>`;
  if(days<=30)return`<span class="badge bwn2">ينتهي خلال ${days} يوم</span>`;
  return`<span class="badge bok2">ساري حتى ${fd(exp)}</span>`;
}
function renderPFDocs(){const el=$('pfDocsList');if(!el)return;el.innerHTML=EC.docs.map((f,i)=>`<div class="fi" style="flex-wrap:wrap;">
  <span>${fi(f.name)}</span>
  <div style="flex:1;min-width:140px;font-size:11px;"><strong>${esc(f.name)}</strong><br/><span style="color:#888;">${(f.size/1024).toFixed(1)} KB</span></div>
  <select style="font-size:11px;padding:4px 6px;border-radius:6px;border:1px solid #e0d9cc;" onchange="EC.docs[${i}].category=this.value;">
    <option value="" ${!f.category?'selected':''}>-- التصنيف --</option>
    ${DOC_CATS.map(c=>`<option ${f.category===c?'selected':''}>${c}</option>`).join('')}
  </select>
  <input type="date" value="${esc(f.expiry||'')}" style="font-size:11px;padding:4px 6px;border-radius:6px;border:1px solid #e0d9cc;" title="تاريخ الانتهاء (اختياري)" onchange="EC.docs[${i}].expiry=this.value;renderPFDocs();"/>
  ${docExpBadge(f.expiry)}
  <button class="btn bdn bsm" onclick="EC.docs.splice(${i},1);renderPFDocs()">✕</button>
</div>`).join('');}

function savePF(){
  const name=gv('pf-name');if(!name){toast('أدخل الاسم الكامل','err');return;}
  const category=$('pf-cat')?.value||'موظف';
  const obj={id:EC.id||Date.now(),category,isMgr:category==='إدارة عليا',name,nameEn:gv('pf-nameEn'),empNo:gv('pf-eno'),idNum:gv('pf-idn'),nationality:gv('pf-nat'),gender:$('pf-gnd')?.value||'ذكر',birth:$('pf-bth')?.value||'',phone:gv('pf-phn'),email:gv('pf-eml'),marital:$('pf-mar')?.value||'أعزب',dept:$('pf-dpt')?.value||'',title:gv('pf-ttl'),grade:$('pf-grd')?.value||'الدرجة الأولى',contract:$('pf-con')?.value||'دوام كامل',hire:$('pf-hir')?.value||'',start:$('pf-str')?.value||'',manager:gv('pf-mgr'),status:$('pf-sts')?.value||'نشط',jobType:$('pf-jtype')?.value||'إداري',salary:parseFloat($('pf-sal')?.value)||0,housing:parseFloat($('pf-hse')?.value)||0,transport:parseFloat($('pf-trn')?.value)||0,other:parseFloat($('pf-oth')?.value)||0,phoneAllowance:parseFloat($('pf-phn-al')?.value)||0,deductions:parseFloat($('pf-ded')?.value)||0,bankname:gv('pf-bnk'),bank:gv('pf-ibn'),photo:EC.photoData,docs:[...EC.docs]};
  if(!DB.employees)DB.employees=[];
  const i=DB.employees.findIndex(e=>e.id===EC.id);
  if(EC.id&&i>-1)DB.employees[i]=obj;else DB.employees.push(obj);
  logAction(EC.id?'تعديل بيانات':'إضافة جديد', obj.name+' ('+obj.empNo+')');saveDB();clOv('PF');pgStaff();toast(EC.id?'✅ تم تحديث البيانات':'✅ تم الإضافة بنجاح');
}

function delP(id){if(!confirm('حذف هذا الشخص؟'))return;DB.employees=(DB.employees||[]).filter(e=>e.id!==id);saveDB();pgStaff();toast('تم الحذف');}

/* ── VIEW PERSON ──────────────────────────── */
function viewP(id){
  const e=(DB.employees||[]).find(x=>x.id===id);if(!e)return;
  const isMgr=!!e.isMgr;
  const net=ns(e);
  const rows=[['رقم وظيفي',e.empNo],['الجوال',e.phone],['البريد',e.email],['الهوية',e.idNum],['الجنسية',e.nationality],['تاريخ الميلاد',fd(e.birth)],['القسم',e.dept],['الدرجة',e.grade],['العقد',e.contract],['تاريخ التعيين',fd(e.hire)],['تاريخ المباشرة',fd(e.start)],['المشرف',e.manager],['الراتب الأساسي',KD(e.salary)],['بدل السكن',KD(e.housing)],['بدل النقل',KD(e.transport)],['الراتب الصافي',KD(net)],['البنك',e.bankname]];
  const docs=(e.docs||[]).map(f=>`<div class="fi"><span style="font-size:18px;">${fi(f.name)}</span><div style="flex:1;font-size:11px;"><strong>${esc(f.name)}</strong>${f.category?`<br/><span style="color:#888;">${esc(f.category)}</span>`:''}</div>${docExpBadge(f.expiry)}<button class="btn bi bsm" onclick="dlF('${esc(f.data)}','${esc(f.name)}')">⬇️</button></div>`).join('');
  mkOpOv('VP',`👤 ${esc(e.name)}`,`
  <div style="display:flex;gap:14px;align-items:flex-start;margin-bottom:14px;">
    <div style="display:flex;flex-direction:column;align-items:center;gap:5px;flex-shrink:0;">
      <div id="vpPhotoWrap">${photoEl(e.photo,e.name,true)}</div>
      <div class="photo-size-ctrl"><button class="psb" onclick="resizeVP(-10)">&#8722;</button><span class="psl" id="vpSzLbl">72px</span><button class="psb" onclick="resizeVP(10)">+</button></div>
    </div>
    <div>
      <div style="font-size:18px;font-weight:900;">${esc(e.name)}</div>
      <div style="font-size:12px;color:#888;margin-top:2px;">${esc(e.title||'—')} — ${esc(e.dept||'—')}</div>
      <div style="margin-top:6px;display:flex;gap:6px;flex-wrap:wrap;">
        <span class="badge ${e.status==='نشط'?'bok2':'bdn2'}">${esc(e.status)}</span>
        <span class="badge ${isMgr?'bgold':'bpr'}">${esc(e.empNo||'—')}</span>
        <span class="badge bwn2">${esc(e.category||(isMgr?'إدارة عليا':'موظف'))}</span>
      </div>
    </div>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:14px;">
    ${rows.map(([l,v])=>`<div style="background:#f8f6f0;border-radius:7px;padding:8px 10px;"><div style="font-size:10px;color:#888;">${esc(l)}</div><div style="font-weight:700;font-size:12px;">${esc(v||'—')}</div></div>`).join('')}
  </div>
  ${docs?`<div style="font-weight:700;font-size:12px;margin-bottom:6px;">📎 المستندات</div>${docs}`:''}
  <div style="display:flex;gap:8px;justify-content:flex-end;margin-top:14px;" class="no-print">
    <button class="btn bp bsm" onclick="clOv('VP');openCertFor(${e.id},${isMgr})">📄 شهادة الراتب</button>
    <button class="btn bgr bsm" onclick="window.print()">🖨️ طباعة</button>
        <button class="btn bok bsm" onclick="doRefresh()" style="animation:pulse 2s infinite">🔄 تحديث</button>
    <button class="btn bwn bsm" onclick="clOv('VP');openPersonForm('${esc(e.category||(isMgr?'إدارة عليا':'موظف'))}',${e.id})">✏️ تعديل</button>
    <button class="btn bou" onclick="clOv('VP')">إغلاق</button>
  </div>`,'860px');
}

function dlF(data,name){try{const a=document.createElement('a');a.href=data;a.download=name;a.click();}catch(e){toast('تعذر التنزيل','err');}}

/* ══════════════════════════════════════════
   PROFESSIONAL SALARY CERTIFICATE
   Compliant with Kuwait Labor Law
═══════════════════════════════════════════ */
function openCertFor(id,isMgr){
  const e=(DB.employees||[]).find(x=>x.id===id);if(!e)return;
  const net=ns(e);
  const dtAr=new Date().toLocaleDateString('ar-KW',{year:'numeric',month:'long',day:'numeric'});
  const dtEn=new Date().toLocaleDateString('en-GB',{year:'numeric',month:'long',day:'numeric'});
  const sn='CERT-'+Date.now().toString().slice(-6);
  const logo=DB.settings.logo?`<img src="${esc(DB.settings.logo)}" class="cert-logo" alt="logo"/>`:'<div style="font-size:40px;margin-bottom:4px;">🏢</div>';
  mkOpOv('CERT','📄 شهادة الراتب الرسمية',`
  <div class="cert-wrap" id="certContent">
    <div class="cert-header">
      ${logo}
      <div class="cert-co">${esc(DB.settings.companyName)}</div>
      <div class="cert-sub">${esc(DB.settings.tagline)}</div>
      <div class="cert-stamp">شهادة راتب رسمية • SALARY CERTIFICATE</div>
    </div>
    <div style="display:flex;justify-content:space-between;font-size:11px;color:#888;margin-bottom:16px;">
      <div>رقم المرجع: <strong style="color:#1a1a2e;">${sn}</strong></div>
      <div>التاريخ: <strong style="color:#1a1a2e;">${dtAr}</strong></div>
    </div>
    <p class="cert-body">
      يُشهد بموجب هذه الشهادة أن المذكور أدناه يعمل لدى شركة <strong>${esc(DB.settings.companyName)}</strong> ويحتفظ بالمعلومات الوظيفية التالية:
    </p>
    <table class="cert-table">
      <tr><td class="cert-lbl">الاسم الكامل</td><td><strong>${esc(e.name)}</strong></td></tr>
      <tr><td class="cert-lbl">الرقم الوظيفي</td><td>${esc(e.empNo||'—')}</td></tr>
      <tr><td class="cert-lbl">المسمى الوظيفي</td><td>${esc(e.title||'—')}</td></tr>
      <tr><td class="cert-lbl">القسم</td><td>${esc(e.dept||'—')}</td></tr>
      <tr><td class="cert-lbl">تاريخ التعيين</td><td>${fd(e.hire)}</td></tr>
      <tr><td class="cert-lbl">الدرجة الوظيفية</td><td>${esc(e.grade||'—')}</td></tr>
      <tr><td class="cert-lbl">نوع العقد</td><td>${esc(e.contract||'—')}</td></tr>
      <tr><td class="cert-lbl">الراتب الأساسي</td><td><strong>${KD(e.salary)}</strong></td></tr>
      <tr><td class="cert-lbl">بدل السكن</td><td>${KD(e.housing)}</td></tr>
      <tr><td class="cert-lbl">بدل النقل</td><td>${KD(e.transport)}</td></tr>
      <tr><td class="cert-lbl">بدلات أخرى</td><td>${KD(e.other)}</td></tr>
      <tr><td class="cert-lbl">الخصومات</td><td>${KD(e.deductions)}</td></tr>
      <tr style="background:rgba(200,168,75,.08);">
        <td class="cert-lbl" style="color:#1a1a2e;font-weight:900;">إجمالي الراتب الصافي</td>
        <td><strong style="font-size:15px;color:#27ae60;">${KD(net)}</strong></td>
      </tr>
    </table>
    <p class="cert-body" style="margin-top:12px;">
      صدرت هذه الشهادة بناءً على طلب الموظف المذكور أعلاه لتُقدَّم إلى الجهة التي تطلبها، ولا تُعدّ التزاماً مالياً من الشركة بخلاف ما هو مُدرَج.
    </p>
    <p class="cert-body" style="font-size:11px;color:#888;">
      هذه الشهادة صادرة وفق أحكام قانون العمل في القطاع الأهلي بدولة الكويت رقم 6 لسنة 2010.
    </p>
    <div class="cert-sigs">
      <div class="cert-sig"><div class="cert-sig-line">توقيع الموظف<br/>${esc(e.name)}</div></div>
      <div class="cert-sig"><div class="cert-sig-line">مدير الموارد البشرية<br/>صالح صقر الجاسم</div></div>
      <div class="cert-sig"><div class="cert-sig-line">المدير العام<br/>عيسى عبدالله العيسى</div></div>
    </div>
    <div class="cert-footer">
      ${esc(DB.settings.companyName)} | State of Kuwait | Date: ${dtEn} | Ref: ${sn}<br/>
      هذه الشهادة صادرة بصيغتها الرسمية ومختومة بختم الشركة
    </div>
  </div>
  <div style="display:flex;gap:8px;justify-content:flex-end;margin-top:14px;" class="no-print">
    <button class="btn bgr bsm" onclick="window.print()">🖨️ طباعة الشهادة</button>
    <button class="btn bou" onclick="clOv('CERT')">إغلاق</button>
  </div>`,'760px');
}

/* ══════════════════════════════════════════
   DASHBOARD
═══════════════════════════════════════════ */
function hrActionsOpen(){
  const manual=(DB.hrActions||[]).filter(a=>a.status!=='منجز').map(a=>({...a,_kind:'manual'}));
  const fromLeaves=(DB.leaves||[]).filter(l=>l.status==='قيد المراجعة').map(l=>({id:'lv-'+l.id,category:'إجازة',priority:'🟠',empName:l.empName,subject:'طلب '+(l.type||'إجازة'),lastAction:'تم تقديم الطلب',required:'اعتماد أو رفض',dueDate:l.from||td(),_kind:'leave',_refId:l.id}));
  const fromApprovals=(DB.approvals||[]).filter(a=>a.status==='قيد الاعتماد').map(a=>({id:'ap-'+a.id,category:'أخرى',priority:'🟠',empName:a.empName,subject:a.type||'طلب اعتماد',lastAction:'تم رفع الطلب',required:'اعتماد أو رفض',dueDate:a.date||td(),_kind:'approval',_refId:a.id}));
  const fromDocs=[];
  allP().forEach(e=>(e.docs||[]).forEach((doc,di)=>{
    if(!doc.expiry)return;
    const days=Math.round((new Date(doc.expiry)-new Date(td()))/86400000);
    if(days>30)return;
    fromDocs.push({id:'doc-'+e.id+'-'+di,category:'قرب الانتهاء',priority:days<0||days<=7?'🔴':'🟠',empName:e.name,subject:'انتهاء '+(doc.category||'مستند')+' ('+esc(doc.name)+')',lastAction:'تم رفع المستند بتاريخ '+fd(doc.date||''),required:days<0?'المستند منتهي — يجب التجديد فوراً':'تجديد المستند قبل الانتهاء',dueDate:doc.expiry,_kind:'doc',_refId:e.id});
  }));
  const rank={'🔴':0,'🟠':1,'🟡':2,'⚠️':3};
  return[...manual,...fromLeaves,...fromApprovals,...fromDocs].sort((a,b)=>(rank[a.priority]??4)-(rank[b.priority]??4)||String(a.dueDate||'').localeCompare(String(b.dueDate||'')));
}
function renderHrActionsTable(){
  const rows=hrActionsOpen();
  if(!rows.length)return`<div style="text-align:center;padding:26px;color:#999;">✅ لا توجد إجراءات مطلوبة — كل شيء محدّث</div>`;
  return`<div class="tw"><table>
    <thead><tr><th>الأولوية</th><th>الموظف</th><th>الموضوع</th><th>آخر إجراء</th><th>المطلوب الآن</th><th>موعد الاستحقاق</th><th class="no-print">إجراءات</th></tr></thead>
    <tbody>${rows.map(a=>{
      const late=a.dueDate&&a.dueDate<td();
      const dueTxt=a.dueDate?(a.dueDate===td()?'اليوم':fd(a.dueDate)):'—';
      let act;
      if(a._kind==='leave')act=`<button class="btn bi bsm" onclick="showS('leaves')">عرض</button>`;
      else if(a._kind==='approval')act=`<button class="btn bi bsm" onclick="showS('approvals')">عرض</button>`;
      else if(a._kind==='doc')act=`<button class="btn bi bsm" onclick="viewP(${a._refId})">📎 عرض الملف</button>`;
      else act=`<div style="display:flex;gap:3px;"><button class="btn bok bsm" onclick="doneHrAction(${a.id})">✅ إنجاز</button><button class="btn bdn bsm" onclick="delHrAction(${a.id})">🗑️</button></div>`;
      return`<tr><td style="font-size:16px;text-align:center;">${a.priority}</td><td><strong>${esc(a.empName||'—')}</strong></td><td>${esc(a.subject||'—')}<div style="font-size:10px;color:#999;">${esc(a.category||'')}</div></td><td>${esc(a.lastAction||'—')}</td><td><strong>${esc(a.required||'—')}</strong></td><td>${late?`<span class="badge bdn2">${esc(dueTxt)} — متأخر</span>`:esc(dueTxt)}</td><td class="no-print">${act}</td></tr>`;
    }).join('')}</tbody>
  </table></div>`;
}
function openHrActionForm(){
  mkOpOv('HRAF','➕ إضافة إجراء HR',`
  <div class="fgr">
    <div class="fg"><label>الموظف *</label><select id="hra-e">${empOpts()}</select></div>
    <div class="fg"><label>التصنيف</label><select id="hra-c"><option>معاملة إقامة</option><option>مستند ناقص</option><option>قرب الانتهاء</option><option>إجازة</option><option>أخرى</option></select></div>
    <div class="fg"><label>الأولوية</label><select id="hra-p"><option value="🔴">🔴 عاجل اليوم</option><option value="🟠">🟠 متأخر</option><option value="🟡">🟡 تنبيه</option><option value="⚠️">⚠️ تحذير</option></select></div>
    <div class="fg"><label>موعد الاستحقاق</label><input type="date" id="hra-d" value="${td()}"/></div>
  </div>
  <div class="fg"><label>الموضوع</label><input id="hra-s" placeholder="مثال: تجديد الإقامة"/></div>
  <div class="fgr">
    <div class="fg"><label>آخر إجراء تم</label><input id="hra-l" placeholder="مثال: تم طلب المستند"/></div>
    <div class="fg"><label>المطلوب الآن</label><input id="hra-r" placeholder="مثال: استلام المستند"/></div>
  </div>
  <div style="display:flex;gap:8px;justify-content:flex-end;margin-top:12px;">
    <button class="btn bou" onclick="clOv('HRAF')">إلغاء</button>
    <button class="btn bp" id="hraSaveBtn">💾 حفظ</button>
  </div>`);
  $('hraSaveBtn').addEventListener('click',()=>{
    const e=resolveP(gv('hra-e'));if(!e){toast('اختر موظفاً','err');return;}
    if(!DB.hrActions)DB.hrActions=[];
    DB.hrActions.push({id:Date.now(),empId:e.id,empName:e.name,category:$('hra-c')?.value||'أخرى',priority:$('hra-p')?.value||'🟡',subject:gv('hra-s'),lastAction:gv('hra-l'),required:gv('hra-r'),dueDate:$('hra-d')?.value||td(),status:'مفتوح',created:td()});
    saveDB();clOv('HRAF');pgDash();toast('تم إضافة الإجراء');
  });
}
function doneHrAction(id){DB.hrActions=(DB.hrActions||[]).map(a=>a.id===id?{...a,status:'منجز'}:a);saveDB();pgDash();toast('تم إنجاز الإجراء ✅');}
function delHrAction(id){DB.hrActions=(DB.hrActions||[]).filter(a=>a.id!==id);saveDB();pgDash();toast('تم الحذف');}

function pgDash(){
  const ts=allP().reduce((a,e)=>a+ns(e),0);
  const pendL=(DB.leaves||[]).filter(l=>l.status==='قيد المراجعة').length;
  const pendA=(DB.approvals||[]).filter(a=>a.status==='قيد الاعتماد').length;
  const unread=(DB.notifications||[]).filter(n=>!n.read).length;

  const totalEmp=allP().length;
  const activeEmp=allP().filter(e=>e.status==='نشط').length;
  const kw=allP().filter(e=>e.nationality==='كويتي').length;
  const nonKw=totalEmp-kw;
  const leavesToday=(DB.leaves||[]).filter(l=>l.status==='موافق'&&l.from&&l.to&&l.from<=td()&&l.to>=td()).length;
  const absentToday=(DB.attendance||[]).filter(a=>a.date===td()&&a.status==='غائب').length;

  const openActions=hrActionsOpen();
  const dueToday=openActions.filter(a=>a.priority==='🔴').length;
  const overdue=openActions.filter(a=>a.priority==='🟠').length;
  const missingDocs=openActions.filter(a=>a.category==='مستند ناقص').length;
  const expiringDocs=openActions.filter(a=>a.category==='قرب الانتهاء').length;
  const alertsToday=(DB.notifications||[]).filter(n=>n.date===td()).length;

  const calItems=hrActionsOpen();
  const calOverdue=calItems.filter(a=>{const d=dayDiff(a.dueDate);return d!==null&&d<0;}).length;
  const calToday=calItems.filter(a=>dayDiff(a.dueDate)===0).length;
  const calTomorrow=calItems.filter(a=>dayDiff(a.dueDate)===1).length;
  const calWeek=calItems.filter(a=>{const d=dayDiff(a.dueDate);return d!==null&&d>=2&&d<=7;}).length;

  const suspended=allP().filter(e=>e.status==='معلق').length;
  const onDuty=Math.max(0,totalEmp-leavesToday-absentToday-suspended);

  const dashAlerts=checkAutoAlerts()||[];
  const alColors={danger:'#fde8e8,#e74c3c',warn:'#fef9e7,#f39c12',info:'rgba(200,168,75,.08),#c8a84b'};

  $('pg-dashboard').innerHTML=`
  <div class="ch" style="margin-bottom:8px;"><div class="ct">📊 حالة الموارد البشرية اليوم</div></div>
  <div class="sg">
    ${[['👥',totalEmp,'إجمالي الموظفين','staff'],['🟢',activeEmp,'على رأس العمل','staff'],['🇰🇼',kw,'الكويتيون','staff'],['🌍',nonKw,'غير الكويتيين','staff'],['🌴',leavesToday,'إجازات اليوم','leaves'],['🚫',absentToday,'غياب اليوم','attendance']].map(([i,v,l,s])=>`<div class="sc" onclick="showS('${s}')"><div class="sc-i">${i}</div><div class="sc-v">${v}</div><div class="sc-l">${l}</div></div>`).join('')}
  </div>
  <div class="sg" style="margin-top:10px;">
    ${[['🔴',dueToday,'معاملات تحتاج إجراء اليوم'],['🟠',overdue,'معاملات متأخرة'],['🟡',missingDocs,'مستندات ناقصة'],['⚠️',expiringDocs,'مستندات قريبة الانتهاء'],['📋',pendL+pendA,'طلبات معلقة'],['🔔',alertsToday,'تنبيهات اليوم']].map(([i,v,l])=>`<div class="sc"><div class="sc-i">${i}</div><div class="sc-v">${v}</div><div class="sc-l">${l}</div></div>`).join('')}
  </div>
  <div class="card" style="margin-top:14px;">
    <div class="ch"><div class="ct">🔴 إجراءات HR المطلوبة اليوم</div><button class="btn bp bsm no-print" onclick="openHrActionForm()">➕ إضافة إجراء</button></div>
    ${renderHrActionsTable()}
  </div>

  <div class="ch" style="margin-top:18px;margin-bottom:8px;"><div class="ct">📅 التقويم والمتابعات</div></div>
  <div class="sg">
    ${[['🔴',calOverdue,'المتأخر'],['🟠',calToday,'اليوم'],['🟢',calTomorrow,'غداً'],['🟡',calWeek,'خلال 7 أيام']].map(([i,v,l])=>`<div class="sc" onclick="showS('dashboard')"><div class="sc-i">${i}</div><div class="sc-v">${v}</div><div class="sc-l">${l}</div></div>`).join('')}
  </div>

  <div class="ch" style="margin-top:18px;margin-bottom:8px;"><div class="ct">👥 حالة الموظفين</div></div>
  <div class="card">
    <div style="display:flex;align-items:center;gap:18px;flex-wrap:wrap;">
      <div style="text-align:center;min-width:110px;">
        <div style="font-size:34px;font-weight:900;color:var(--pr,#c8a84b);">${totalEmp}</div>
        <div style="font-size:12px;color:#888;">إجمالي الموظفين</div>
      </div>
      <div style="display:flex;gap:10px;flex-wrap:wrap;flex:1;">
        ${[['🟢',onDuty,'على رأس العمل'],['🌴',leavesToday,'إجازة'],['🚫',absentToday,'غياب'],['⛔',suspended,'موقوف']].map(([i,v,l])=>`<div style="flex:1;min-width:110px;background:#f7f5ef;border-radius:10px;padding:10px 12px;text-align:center;"><div style="font-size:18px;">${i}</div><div style="font-size:20px;font-weight:800;">${v}</div><div style="font-size:11px;color:#888;">${l}</div></div>`).join('')}
      </div>
    </div>
  </div>

  <div class="ch" style="margin-top:18px;margin-bottom:8px;"><div class="ct">⭐ التنبيهات والتقييمات</div><button class="btn bi bsm no-print" onclick="showS('alerts')">عرض الكل</button></div>
  <div class="card">
    ${!dashAlerts.length?`<div style="text-align:center;padding:26px;color:#999;">✅ لا توجد تنبيهات حالياً</div>`:dashAlerts.slice(0,5).map(a=>{
      const c=(alColors[a.type]||alColors.info).split(',');
      return`<div style="display:flex;gap:10px;align-items:flex-start;padding:10px 12px;margin-bottom:8px;border-radius:10px;background:${c[0]};border-right:4px solid ${c[1]};">
        <div style="font-size:18px;">${a.icon||'🔔'}</div>
        <div style="flex:1;">
          <div style="font-weight:700;font-size:13px;">${esc(a.msg||'')}</div>
          ${a.reason?`<div style="font-size:11px;color:#777;margin-top:3px;">📌 ${esc(a.reason)}</div>`:''}
          ${a.required?`<div style="font-size:11px;color:#555;margin-top:2px;">◀ المطلوب: ${esc(a.required)}</div>`:''}
        </div>
        ${a.action?`<button class="btn bi bsm no-print" onclick="showS('${a.action}')">عرض</button>`:''}
      </div>`;
    }).join('')}
  </div>

  <div class="ch" style="margin-top:18px;margin-bottom:8px;"><div class="ct">📁 نظرة عامة</div></div>
  <div class="sg">
    ${[['👔',(DB.employees||[]).filter(e=>e.isMgr).length,'المدراء','staff'],['👥',(DB.employees||[]).filter(e=>!e.isMgr).length,'الموظفون','staff'],['🌴',pendL,'إجازات معلقة','leaves'],['✅',pendA,'اعتمادات معلقة','approvals'],['💰',KD(ts),'إجمالي الرواتب','salaries'],['🔔',unread,'إشعارات جديدة','notifications']].map(([i,v,l,s])=>`<div class="sc" onclick="showS('${s}')"><div class="sc-i">${i}</div><div class="sc-v">${v}</div><div class="sc-l">${l}</div></div>`).join('')}
  </div>
  ${(pendL>0||pendA>0||unread>0)?`<div class="alert-box">
    <div style="font-weight:700;font-size:13px;color:#c0392b;margin-bottom:8px;">🔔 تنبيهات تحتاج متابعة</div>
    ${pendL>0?`<div style="display:flex;align-items:center;gap:8px;padding:6px 0;"><span>🌴</span><span style="font-size:12px;">${pendL} طلب إجازة بانتظار الموافقة</span><button class="btn bwn bsm no-print" style="margin-right:auto;" onclick="showS('leaves')">عرض</button></div>`:''}
    ${pendA>0?`<div style="display:flex;align-items:center;gap:8px;padding:6px 0;"><span>✅</span><span style="font-size:12px;">${pendA} طلب اعتماد بانتظار قرار</span><button class="btn bwn bsm no-print" style="margin-right:auto;" onclick="showS('approvals')">عرض</button></div>`:''}
    ${unread>0?`<div style="display:flex;align-items:center;gap:8px;padding:6px 0;"><span>🔔</span><span style="font-size:12px;">${unread} إشعار غير مقروء</span><button class="btn bwn bsm no-print" style="margin-right:auto;" onclick="showS('notifications')">عرض</button></div>`:''}
  </div>`:''}
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-bottom:14px;">
    <div class="card">
      <div class="ch"><div class="ct">👔 الإدارة العليا</div><button class="btn bp bsm no-print" onclick="showS('staff')">عرض الكل</button></div>
      ${(DB.employees||[]).filter(e=>e.isMgr).map(e=>`<div style="display:flex;align-items:center;gap:8px;padding:7px 0;border-bottom:1px solid #f5f0e8;">${photoEl(e.photo,e.name)}<div style="flex:1;min-width:0;"><div style="font-weight:700;font-size:12px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${esc(e.name)}</div><div style="font-size:10px;color:#888;">${esc(e.title||'—')}</div></div><span class="badge bgold" style="font-size:9px;">${esc(e.empNo||'—')}</span></div>`).join('')}
    </div>
    <div class="card">
      <div class="ch"><div class="ct">📋 آخر الطلبات</div></div>
      ${[...(DB.leaves||[]).slice(-3).map(l=>({i:'🌴',n:l.empName,m:'طلب '+l.type,s:l.status})),...(DB.approvals||[]).slice(-3).map(a=>({i:'✅',n:a.empName,m:'طلب '+a.type,s:a.status}))].map(r=>`<div style="display:flex;align-items:center;gap:8px;padding:7px 0;border-bottom:1px solid #f5f0e8;"><span>${r.i}</span><div style="flex:1;"><div style="font-weight:700;font-size:12px;">${esc(r.n)}</div><div style="font-size:10px;color:#888;">${esc(r.m)}</div></div><span class="badge ${r.s==='قيد المراجعة'||r.s==='قيد الاعتماد'?'bwn2':r.s==='موافق'||r.s==='معتمد'?'bok2':'bdn2'}">${esc(r.s)}</span></div>`).join('')||'<p style="color:#999;font-size:12px;padding:8px 0;">لا توجد طلبات</p>'}
    </div>
  </div>`;
}

/* ══════════════════════════════════════════
   STAFF — الإدارة والموظفون (قاعدة بيانات واحدة، ثلاث فئات)
═══════════════════════════════════════════ */
function catMeta(cat){
  const m={
    'إدارة عليا':{icon:'👔',label:'الإدارة العليا',color:'#8a7122',bg:'rgba(184,151,46,.12)',badge:'bgold'},
    'موظف':{icon:'🧑‍💼',label:'الموظفون',color:'#1e40af',bg:'rgba(37,99,235,.08)',badge:'bif'},
    'عامل':{icon:'👷',label:'العمال',color:'#5b21b6',bg:'rgba(124,58,237,.08)',badge:'bpr'}
  };
  return m[cat]||m['موظف'];
}
function stBadge(s){
  const m={'نشط':'bok2','إجازة':'bwn2','معلق':'bdn2','منتهي الخدمة':'bgr2'};
  return `<span class="badge ${m[s]||'bgr2'}">${esc(s||'—')}</span>`;
}
function setCatFilter(cat){
  const sel=$('ECAT');if(!sel)return;
  sel.value=(sel.value===cat)?'':cat;
  filterE();
}
function pgStaff(){
  const all=allP();
  const total=all.length;
  const mgrN=all.filter(e=>empCat(e)==='إدارة عليا').length;
  const empN=all.filter(e=>empCat(e)==='موظف').length;
  const wrkN=all.filter(e=>empCat(e)==='عامل').length;
  const activeN=all.filter(e=>e.status==='نشط').length;
  $('pg-staff').innerHTML=`
  <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;flex-wrap:wrap;gap:12px;" class="no-print">
    <div style="display:flex;align-items:center;gap:12px;">
      <div style="width:44px;height:44px;border-radius:12px;background:linear-gradient(135deg,#1a1a2e,#16213e);display:flex;align-items:center;justify-content:center;font-size:20px;box-shadow:0 4px 12px rgba(26,26,46,.25);flex-shrink:0;">👥</div>
      <div>
        <div style="font-size:17px;font-weight:900;color:var(--tx);">الإدارة والموظفون</div>
        <div style="font-size:11px;color:var(--tx3);font-weight:600;">قاعدة بيانات موحدة لجميع منتسبي الشركة — الإدارة العليا، الموظفون، والعمال</div>
      </div>
    </div>
    <div style="display:flex;gap:6px;flex-wrap:wrap;">
      <button class="btn bp bsm" onclick="openPersonForm('إدارة عليا',null)">➕ إدارة عليا</button>
      <button class="btn bi bsm" onclick="openPersonForm('موظف',null)">➕ موظف</button>
      <button class="btn bou bsm" onclick="openPersonForm('عامل',null)">➕ عامل</button>
    </div>
  </div>
  <div class="sg" style="margin-bottom:16px;">
    <div class="sc" style="cursor:default;"><div class="sc-i">👥</div><div class="sc-v">${total}</div><div class="sc-l">إجمالي المنتسبين</div></div>
    <div class="sc" onclick="setCatFilter('إدارة عليا')" title="عرض الإدارة العليا فقط"><div class="sc-i">👔</div><div class="sc-v">${mgrN}</div><div class="sc-l">الإدارة العليا</div></div>
    <div class="sc" onclick="setCatFilter('موظف')" title="عرض الموظفين فقط"><div class="sc-i">🧑‍💼</div><div class="sc-v">${empN}</div><div class="sc-l">الموظفون</div></div>
    <div class="sc" onclick="setCatFilter('عامل')" title="عرض العمال فقط"><div class="sc-i">👷</div><div class="sc-v">${wrkN}</div><div class="sc-l">العمال</div></div>
    <div class="sc" style="cursor:default;"><div class="sc-i">🟢</div><div class="sc-v">${activeN}</div><div class="sc-l">على رأس العمل</div></div>
  </div>
  <div class="card no-print" style="padding:16px 18px;">
    <div style="display:flex;gap:12px;flex-wrap:wrap;align-items:flex-end;">
      <div style="flex:2;min-width:220px;">
        <label style="display:block;font-size:10.5px;font-weight:700;color:var(--tx3);margin-bottom:5px;">🔍 البحث</label>
        <input id="ES" placeholder="ابحث بالاسم أو الرقم الوظيفي..." style="width:100%;padding:9px 12px;border:1.5px solid #e0d9cc;border-radius:8px;font-family:inherit;font-size:12.5px;outline:none;background:#fff;box-sizing:border-box;" oninput="filterE()"/>
      </div>
      <div style="flex:1;min-width:150px;">
        <label style="display:block;font-size:10.5px;font-weight:700;color:var(--tx3);margin-bottom:5px;">الفئة</label>
        <select id="ECAT" style="width:100%;padding:9px 12px;border:1.5px solid #e0d9cc;border-radius:8px;font-family:inherit;font-size:12.5px;outline:none;background:#fff;box-sizing:border-box;" onchange="filterE()">
          <option value="">كل الفئات</option>
          <option>إدارة عليا</option><option>موظف</option><option>عامل</option>
        </select>
      </div>
      <div style="flex:1;min-width:150px;">
        <label style="display:block;font-size:10.5px;font-weight:700;color:var(--tx3);margin-bottom:5px;">القسم</label>
        <select id="ED" style="width:100%;padding:9px 12px;border:1.5px solid #e0d9cc;border-radius:8px;font-family:inherit;font-size:12.5px;outline:none;background:#fff;box-sizing:border-box;" onchange="filterE()">
          <option value="">كل الأقسام</option>
          ${(DB.departments||[]).map(d=>`<option value="${esc(d.name)}">${esc(d.name)}</option>`).join('')}
        </select>
      </div>
      <button class="btn bgr bsm" onclick="$('ES').value='';$('ECAT').value='';$('ED').value='';filterE();">↺ إعادة تعيين</button>
    </div>
  </div>
  <div id="ETBL" style="margin-top:18px;">
    ${renderStaffCat('إدارة عليا')}
    ${renderStaffCat('موظف')}
    ${renderStaffCat('عامل')}
  </div>`;
  filterE();
}
function empCat(e){return e.category||(e.isMgr?'إدارة عليا':'موظف');}
function rowE(e){
  const cat=empCat(e);
  return `<tr data-dept="${esc(e.dept||'')}">
    <td>
      <div style="display:flex;align-items:center;gap:10px;">
        ${photoEl(e.photo,e.name)}
        <div style="min-width:0;">
          <div style="font-weight:800;font-size:12.5px;color:var(--tx);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:220px;">${esc(e.name)}</div>
          <div style="font-size:10.5px;color:var(--tx3);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:220px;">${esc(e.title||'—')}</div>
        </div>
      </div>
    </td>
    <td><span class="badge bgold">${esc(e.empNo||'—')}</span></td>
    <td style="font-weight:800;color:#27ae60;">${KD(ns(e))}</td>
    <td>${fd(e.hire)}</td>
    <td>${stBadge(e.status)}</td>
    <td class="no-print" style="display:flex;gap:4px;flex-wrap:wrap;"><button class="btn bi bsm" onclick="viewP(${e.id})" title="عرض الملف">👁️</button><button class="btn bwn bsm" onclick="openPersonForm('${esc(cat)}',${e.id})" title="تعديل">✏️</button><button class="btn bdn bsm" onclick="delP(${e.id})" title="حذف">🗑️</button></td>
  </tr>`;
}
function renderStaffCat(cat){
  const meta=catMeta(cat);
  const list=(DB.employees||[]).filter(e=>empCat(e)===cat);
  const order=(DB.departments||[]).map(d=>d.name);
  const groups=[];
  const seen={};
  order.forEach(dn=>{
    const l=list.filter(e=>(e.dept||'')===dn);
    if(l.length){groups.push({name:dn,list:l});}
    seen[dn]=1;
  });
  const extraNames=[];
  list.forEach(e=>{const dn=e.dept||'بدون قسم';if(!seen[dn]&&extraNames.indexOf(dn)===-1)extraNames.push(dn);});
  extraNames.forEach(dn=>{groups.push({name:dn,list:list.filter(e=>(e.dept||'بدون قسم')===dn)});});
  return `<div class="staff-cat" data-cat="${esc(cat)}" style="margin-bottom:26px;">
    <div style="display:flex;align-items:center;gap:12px;padding:12px 16px;border-radius:12px;background:${meta.bg};margin-bottom:12px;border-right:4px solid ${meta.color};">
      <div style="width:38px;height:38px;border-radius:10px;background:#fff;display:flex;align-items:center;justify-content:center;font-size:18px;box-shadow:0 2px 6px rgba(0,0,0,.08);flex-shrink:0;">${meta.icon}</div>
      <div style="font-size:14px;font-weight:900;color:${meta.color};flex:1;">${esc(meta.label)}</div>
      <span class="badge ${meta.badge}">${list.length} ${list.length===1?'شخص':'أشخاص'}</span>
    </div>
    ${!groups.length?`<div class="card"><p style="color:#999;text-align:center;padding:16px;">لا توجد بيانات في هذه الفئة</p></div>`:groups.map(g=>`
    <div class="card emp-sec" data-sec="${esc(g.name)}" style="margin-bottom:14px;">
      <div style="display:flex;align-items:center;gap:8px;padding:2px 0 10px;margin-bottom:8px;border-bottom:1px solid var(--lt2);">
        <span style="font-size:13px;">🏢</span>
        <span style="font-size:12.5px;font-weight:800;color:var(--tx);">${esc(g.name)}</span>
        <span class="badge bgr2">${g.list.length}</span>
      </div>
      <div class="tw"><table>
        <thead><tr><th>الموظف</th><th>الرقم الوظيفي</th><th>الراتب الصافي</th><th>تاريخ التعيين</th><th>الحالة</th><th class="no-print">إجراءات</th></tr></thead>
        <tbody>${g.list.map(rowE).join('')}</tbody>
      </table></div>
    </div>`).join('')}
  </div>`;
}


/* ══════════════════════════════════════════
   ORG CHART
═══════════════════════════════════════════ */
function pgOrg(){
  const dc={};allP().forEach(e=>{if(!dc[e.dept])dc[e.dept]=[];dc[e.dept].push(e);});
  $('pg-org').innerHTML=`
  <div style="font-size:16px;font-weight:700;margin-bottom:16px;">🏗️ الهيكل التنظيمي</div>
  <div style="overflow-x:auto;text-align:center;padding-bottom:16px;">
    <div style="display:inline-block;padding:10px 28px;background:linear-gradient(135deg,#1a1a2e,#16213e);color:#c8a84b;border-radius:9px;font-weight:900;font-size:14px;margin-bottom:20px;">${esc(DB.settings.companyName)}</div>
    <div style="width:2px;height:20px;background:#c8a84b;margin:0 auto;"></div>
    <div style="display:flex;flex-wrap:wrap;justify-content:center;gap:18px;">
      ${Object.entries(dc).map(([dept,emps])=>`<div style="min-width:170px;text-align:center;">
        <div style="padding:8px 14px;background:rgba(200,168,75,.1);border:1.5px solid #c8a84b;border-radius:8px;font-weight:700;font-size:12px;margin-bottom:8px;">${esc(dept)}</div>
        ${emps.map(e=>`<div style="padding:8px 12px;background:#fff;border:1px solid #e0d9cc;border-radius:7px;font-size:11px;margin-bottom:4px;display:flex;align-items:center;gap:6px;">${photoEl(e.photo,e.name)}<div style="text-align:right;min-width:0;"><strong style="display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${esc(e.name)}</strong><span style="color:#888;font-size:10px;">${esc(e.title||'—')}</span></div></div>`).join('')}
      </div>`).join('')}
    </div>
  </div>`;
}

/* ══════════════════════════════════════════
   APPOINTMENTS — FULLY WORKING
═══════════════════════════════════════════ */
/* ══════════════════════════════════════════
   التعيينات — مسار التوظيف (قبل أن يصبح المرشح موظفاً)
   طلب توظيف → شاغر → مرشح → مقابلة → قبول → عرض وظيفي → تعيين
═══════════════════════════════════════════ */
function pgApts(){
  if(!DB.candidates)DB.candidates=[];
  const list=DB.candidates;
  const counts={};
  APT_STAGES.forEach(s=>counts[s]=list.filter(c=>c.stage===s&&!c.rejected).length);
  $('pg-appointments').innerHTML=`
  <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;flex-wrap:wrap;gap:8px;" class="no-print">
    <div style="font-size:16px;font-weight:700;">📋 التعيينات — مسار التوظيف</div>
    <button class="btn bp" id="candAddBtn">➕ طلب توظيف جديد</button>
  </div>
  <div class="info-box">📋 هذا القسم لمرشحين لم يصبحوا موظفين بعد. عند الوصول لمرحلة "تعيين" يبدأ "استقبال موظف جديد" تلقائياً لإنشاء ملفه الرسمي.</div>
  <div class="sg" style="margin-bottom:14px;">
    ${APT_STAGES.map(s=>`<div class="sc"><div class="sc-i">${APT_ICONS[s]}</div><div class="sc-v">${counts[s]}</div><div class="sc-l">${s}</div></div>`).join('')}
  </div>
  <div class="card"><div class="tw"><table>
    <thead><tr><th>المرشح</th><th>الوظيفة المطلوبة</th><th>القسم</th><th>المرحلة الحالية</th><th>تاريخ الطلب</th><th class="no-print">إجراءات</th></tr></thead>
    <tbody id="CANDTBL">${renderCandRows()}</tbody>
  </table></div></div>`;
  $('candAddBtn').addEventListener('click',openCandForm);
}
function renderCandRows(){
  const list=(DB.candidates||[]).slice().sort((a,b)=>(b.id||0)-(a.id||0));
  if(!list.length)return emRow(6,'لا توجد طلبات توظيف حالياً');
  return list.map(c=>{
    const idx=APT_STAGES.indexOf(c.stage);
    const isLast=idx===APT_STAGES.length-1;
    let actions;
    if(c.hired){
      actions=`<span class="badge bok2">✅ تم — ملف الموظف جاهز</span>`;
    } else if(c.rejected){
      actions=`<span class="badge bdn2">مرفوض/منسحب</span>`;
    } else if(isLast){
      actions=`<button class="btn bok bsm" onclick="hireCandidate(${c.id})">🎯 بدء استقبال الموظف</button> <button class="btn bdn bsm" onclick="rejectCandidate(${c.id})">✕</button>`;
    } else {
      actions=`<button class="btn bp bsm" onclick="advanceCandidate(${c.id})">➡️ ${esc(APT_STAGES[idx+1])}</button> <button class="btn bdn bsm" onclick="rejectCandidate(${c.id})">✕ رفض/انسحاب</button>`;
    }
    return `<tr><td><strong>${esc(c.name)}</strong>${c.phone?`<div style="font-size:10px;color:#888;">${esc(c.phone)}</div>`:''}</td><td>${esc(c.position||'—')}</td><td>${esc(c.dept||'—')}</td><td><span class="badge ${c.rejected?'bdn2':(c.hired?'bok2':'bwn2')}">${APT_ICONS[c.stage]||''} ${esc(c.stage)}</span></td><td>${fd(c.reqDate)}</td><td class="no-print" style="display:flex;gap:4px;flex-wrap:wrap;">${actions}</td></tr>`;
  }).join('');
}
function openCandForm(){
  mkOpOv('CANDF','📝 طلب توظيف جديد',`
  <div class="fgr">
    <div class="fg"><label>اسم المرشح *</label><input id="cd-name"/></div>
    <div class="fg"><label>الوظيفة المطلوبة *</label><input id="cd-pos"/></div>
    <div class="fg"><label>القسم</label><select id="cd-dept">${deptOpts()}</select></div>
    <div class="fg"><label>رقم الجوال</label><input id="cd-phn"/></div>
    <div class="fg"><label>البريد الإلكتروني</label><input id="cd-eml"/></div>
    <div class="fg"><label>طلب التوظيف من (المدير الطالب)</label><input id="cd-by"/></div>
    <div class="fg"><label>تاريخ الطلب</label><input type="date" id="cd-d" value="${td()}"/></div>
  </div>
  <div class="fg"><label>ملاحظات</label><textarea id="cd-notes" rows="2" style="width:100%;padding:8px 10px;border:1.5px solid #e0d9cc;border-radius:7px;font-family:inherit;font-size:12px;"></textarea></div>
  <div style="display:flex;gap:8px;justify-content:flex-end;margin-top:14px;">
    <button class="btn bou" onclick="clOv('CANDF')">إلغاء</button>
    <button class="btn bp" id="candSaveBtn">💾 حفظ الطلب</button>
  </div>`,'620px');
  $('candSaveBtn').addEventListener('click',()=>{
    const name=gv('cd-name');const pos=gv('cd-pos');
    if(!name||!pos){toast('أدخل اسم المرشح والوظيفة المطلوبة','err');return;}
    if(!DB.candidates)DB.candidates=[];
    DB.candidates.push({id:Date.now(),name,position:pos,dept:$('cd-dept')?.value||'',phone:gv('cd-phn'),email:gv('cd-eml'),requestedBy:gv('cd-by'),reqDate:$('cd-d')?.value||td(),notes:gv('cd-notes'),stage:APT_STAGES[0],history:[{stage:APT_STAGES[0],date:td()}]});
    logAction('طلب توظيف جديد',name+' — '+pos);
    saveDB();clOv('CANDF');pgApts();toast('تم تسجيل طلب التوظيف ✅');
  });
}
function advanceCandidate(id){
  const c=(DB.candidates||[]).find(x=>x.id===id);if(!c)return;
  const idx=APT_STAGES.indexOf(c.stage);
  if(idx<0||idx>=APT_STAGES.length-1)return;
  c.stage=APT_STAGES[idx+1];
  if(!c.history)c.history=[];
  c.history.push({stage:c.stage,date:td()});
  saveDB();pgApts();toast('تم الانتقال إلى مرحلة: '+c.stage);
}
function rejectCandidate(id){
  if(!confirm('تأكيد رفض/انسحاب هذا المرشح؟'))return;
  const c=(DB.candidates||[]).find(x=>x.id===id);if(!c)return;
  c.rejected=true;
  saveDB();pgApts();toast('تم تحديث حالة المرشح');
}
function hireCandidate(id){
  const c=(DB.candidates||[]).find(x=>x.id===id);if(!c)return;
  if(!confirm('سيتم إنشاء ملف موظف جديد لـ "'+c.name+'" وبدء إجراءات الاستقبال. متابعة؟'))return;
  const emp={id:Date.now(),category:'موظف',isMgr:false,name:c.name,empNo:'',idNum:'',nationality:'',birth:'',phone:c.phone||'',email:c.email||'',marital:'أعزب',dept:c.dept||'',title:c.position||'',grade:'الدرجة الأولى',contract:'دوام كامل',hire:td(),start:'',manager:c.requestedBy||'',status:'نشط',salary:0,housing:0,transport:0,other:0,deductions:0,bankname:'',bank:'',photo:'',docs:[]};
  if(!DB.employees)DB.employees=[];
  DB.employees.push(emp);
  c.hired=true;c.empId=emp.id;
  if(!DB.onboarding)DB.onboarding=[];
  DB.onboarding.push({id:Date.now()+1,empId:emp.id,empName:emp.name,startDate:td(),fromCandidate:c.id,steps:ONBOARD_STEPS.map(t=>({task:t,done:false}))});
  logAction('تعيين من مسار التوظيف',emp.name);
  saveDB();toast('✅ تم إنشاء ملف الموظف — أكمل الاستقبال الآن');
  showS('onboarding');
}
/* ══════════════════════════════════════════
   SALARIES
═══════════════════════════════════════════ */
function pgSal(){
  const all=allP();
  $('pg-salaries').innerHTML=`
  <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;" class="no-print">
    <div style="font-size:16px;font-weight:700;">💰 كشف الرواتب — الدينار الكويتي</div>
    <div style="display:flex;gap:6px;"><button class="btn bp" id="salEditBtn">✏️ تعديل راتب</button><button class="btn bi bsm" id="salCertBtn">📄 شهادة راتب</button><button class="btn bgr bsm" onclick="window.print()">🖨️ كشف الرواتب</button></div>
  </div>
  <div class="card"><div class="tw"><table>
    <thead><tr><th>#</th><th>الصنف</th><th>الموظف</th><th>الراتب الأساسي</th><th>البدلات</th><th>أوفر تايم</th><th>الخصومات</th><th>الصافي</th></tr></thead>
    <tbody>${all.map((e,i)=>{const ot=(DB.overtime||[]).filter(o=>o.empId==e.id).reduce((a,o)=>a+(parseFloat(o.amount)||0),0);const tot=ns(e)+ot;const isMgr=!!e.isMgr;return`<tr><td>${i+1}</td><td>${isMgr?'<span class="badge bgold">مدير</span>':'<span class="badge bpr">موظف</span>'}</td><td>${photoEl(e.photo,e.name)}<strong style="margin-right:6px;">${esc(e.name)}</strong></td><td>${KD(e.salary)}</td><td style="color:#2980b9;">${KD((e.housing||0)+(e.transport||0)+(e.other||0))}</td><td style="color:#27ae60;">${KD(ot)}</td><td style="color:#e74c3c;">${KD(e.deductions)}</td><td style="font-weight:700;color:#27ae60;">${KD(tot)}</td></tr>`;}).join('')||emRow(8)}</tbody>
  </table></div></div>`;
  $('salEditBtn').addEventListener('click',()=>{
    mkOpOv('SALM','💰 تعديل الراتب',`
    <div class="fgr">
      <div class="fg"><label>الموظف / المدير</label><select id="sm-e">${empOpts()}</select></div>
      <div class="fg"><label>الراتب الأساسي (د.ك)</label><input type="number" step="0.001" id="sm-b"/></div>
      <div class="fg"><label>بدل السكن (د.ك)</label><input type="number" step="0.001" id="sm-h"/></div>
      <div class="fg"><label>بدل النقل (د.ك)</label><input type="number" step="0.001" id="sm-t"/></div>
      <div class="fg"><label>بدلات أخرى (د.ك)</label><input type="number" step="0.001" id="sm-o"/></div>
      <div class="fg"><label>الخصومات (د.ك)</label><input type="number" step="0.001" id="sm-d"/></div>
    </div>
    <div style="display:flex;gap:8px;justify-content:flex-end;margin-top:12px;">
      <button class="btn bou" onclick="clOv('SALM')">إلغاء</button>
      <button class="btn bp" id="salSaveBtn">💾 حفظ</button>
    </div>`);
    $('sm-e').addEventListener('change',()=>{const e=resolveP(gv('sm-e'));if(e){$('sm-b').value=e.salary||0;$('sm-h').value=e.housing||0;$('sm-t').value=e.transport||0;$('sm-o').value=e.other||0;$('sm-d').value=e.deductions||0;}});
    $('salSaveBtn').addEventListener('click',()=>{const sel=gv('sm-e');if(!sel){toast('اختر موظفاً','err');return;}const arr=resolveArr(sel);const e=resolveP(sel);if(!e)return;const i=arr.findIndex(x=>x.id===e.id);if(i>-1){arr[i]={...arr[i],salary:parseFloat($('sm-b')?.value)||0,housing:parseFloat($('sm-h')?.value)||0,transport:parseFloat($('sm-t')?.value)||0,other:parseFloat($('sm-o')?.value)||0,deductions:parseFloat($('sm-d')?.value)||0};}saveDB();clOv('SALM');pgSal();toast('تم تحديث الراتب ✅');});
  });
  $('salCertBtn').addEventListener('click',()=>{
    mkOpOv('SALCERT','📄 اختر موظف لشهادة الراتب',`
    <div class="fg"><label>الموظف / المدير</label><select id="cert-sel">${empOpts()}</select></div>
    <div style="display:flex;gap:8px;justify-content:flex-end;margin-top:12px;">
      <button class="btn bou" onclick="clOv('SALCERT')">إلغاء</button>
      <button class="btn bp" onclick="const e=resolveP(gv('cert-sel'));if(!e){toast('اختر موظفاً','err');return;}const isMgr=!!e.isMgr;clOv('SALCERT');openCertFor(e.id,isMgr)">📄 إصدار الشهادة</button>
    </div>`);
  });
}

/* ══════════════════════════════════════════
   OVERTIME — Kuwait Art.66
═══════════════════════════════════════════ */
function pgOT(){
  $('pg-overtime').innerHTML=`
  <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;" class="no-print">
    <div style="font-size:16px;font-weight:700;">⏱️ الأوفر تايم</div>
    <button class="btn bp" id="otAddBtn">➕ إضافة</button>
  </div>
  <div class="info-box">⚖️ المادة 66: عادي = الراتب ÷ 240 × 1.25 | عطلة رسمية = الراتب ÷ 240 × 1.5</div>
  <div class="card"><div class="tw"><table>
    <thead><tr><th>#</th><th>الموظف</th><th>التاريخ</th><th>الساعات</th><th>نوع اليوم</th><th>المبلغ (د.ك)</th><th>الحالة</th></tr></thead>
    <tbody id="OTTBL">${renderOTRows()}</tbody>
  </table></div></div>`;
  $('otAddBtn').addEventListener('click',()=>{
    mkOpOv('OTF','⏱️ إضافة أوفر تايم',`
    <div class="fgr">
      <div class="fg"><label>الموظف</label><select id="ot-e">${empOpts()}</select></div>
      <div class="fg"><label>التاريخ</label><input type="date" id="ot-d" value="${td()}"/></div>
      <div class="fg"><label>عدد الساعات</label><input type="number" step="0.5" id="ot-h" placeholder="0"/></div>
      <div class="fg"><label>نوع اليوم</label><select id="ot-dt"><option value="normal">عادي (×1.25)</option><option value="holiday">جمعة/عطلة (×1.5)</option></select></div>
      <div class="fg"><label>المبلغ المحتسب (د.ك)</label><input id="ot-a" readonly style="background:#f8f6f0;font-weight:700;"/></div>
    </div>
    <div style="display:flex;gap:8px;justify-content:flex-end;margin-top:12px;">
      <button class="btn bou" onclick="clOv('OTF')">إلغاء</button>
      <button class="btn bp" id="otSaveBtn">💾 حفظ</button>
    </div>`);
    const calc=()=>{const e=resolveP(gv('ot-e'));const h=parseFloat($('ot-h')?.value)||0;if(!e||!h){if($('ot-a'))$('ot-a').value='';return;}const m=$('ot-dt').value==='holiday'?1.5:1.25;if($('ot-a'))$('ot-a').value=((e.salary||0)/240*m*h).toFixed(3);};
    $('ot-e').addEventListener('change',calc);$('ot-h').addEventListener('input',calc);$('ot-dt').addEventListener('change',calc);
    $('otSaveBtn').addEventListener('click',()=>{const e=resolveP(gv('ot-e'));if(!e){toast('اختر موظفاً','err');return;}if(!DB.overtime)DB.overtime=[];DB.overtime.push({id:Date.now(),empId:e.id,empName:e.name,date:$('ot-d')?.value||'',hours:parseFloat($('ot-h')?.value)||0,dayType:$('ot-dt').value==='holiday'?'جمعة/عطلة':'عادي',amount:parseFloat($('ot-a')?.value)||0,status:'معتمد'});saveDB();clOv('OTF');$('OTTBL').innerHTML=renderOTRows();toast('تم ✅');});
  });
}
function renderOTRows(){return(DB.overtime||[]).map((o,i)=>`<tr><td>${i+1}</td><td><strong>${esc(o.empName)}</strong></td><td>${fd(o.date)}</td><td>${o.hours}</td><td>${esc(o.dayType||'عادي')}</td><td style="font-weight:700;color:#27ae60;">${KD(o.amount)}</td><td><span class="badge bok2">معتمد</span></td></tr>`).join('')||emRow(7);}

/* BONUSES */
function pgBonus(){
  $('pg-bonuses').innerHTML=`
  <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;" class="no-print">
    <div style="font-size:16px;font-weight:700;">🎁 البونص والمكافآت</div>
    <button class="btn bp" id="bonAddBtn">➕ إضافة</button>
  </div>
  <div class="card"><div class="tw"><table>
    <thead><tr><th>#</th><th>الموظف</th><th>النوع</th><th>المبلغ (د.ك)</th><th>السبب</th><th>التاريخ</th></tr></thead>
    <tbody id="BONTBL">${renderBonRows()}</tbody>
  </table></div></div>`;
  $('bonAddBtn').addEventListener('click',()=>{
    mkOpOv('BONF','🎁 إضافة بونص',`
    <div class="fgr">
      <div class="fg"><label>الموظف</label><select id="bn-e">${empOpts()}</select></div>
      <div class="fg"><label>النوع</label><select id="bn-t"><option>بونص</option><option>زيادة راتب</option><option>مكافأة</option><option>عمولة</option></select></div>
      <div class="fg"><label>المبلغ (د.ك)</label><input type="number" step="0.001" id="bn-a"/></div>
      <div class="fg"><label>التاريخ</label><input type="date" id="bn-d" value="${td()}"/></div>
    </div>
    <div class="fg"><label>السبب</label><textarea id="bn-r"></textarea></div>
    <div style="display:flex;gap:8px;justify-content:flex-end;margin-top:12px;">
      <button class="btn bou" onclick="clOv('BONF')">إلغاء</button>
      <button class="btn bp" id="bonSaveBtn">💾 حفظ</button>
    </div>`);
    $('bonSaveBtn').addEventListener('click',()=>{const e=resolveP(gv('bn-e'));if(!e){toast('اختر موظفاً','err');return;}if(!DB.bonuses)DB.bonuses=[];DB.bonuses.push({id:Date.now(),empId:e.id,empName:e.name,type:$('bn-t').value,amount:parseFloat($('bn-a')?.value)||0,reason:gv('bn-r'),date:$('bn-d')?.value||''});saveDB();clOv('BONF');$('BONTBL').innerHTML=renderBonRows();toast('تم ✅');});
  });
}
function renderBonRows(){return(DB.bonuses||[]).map((b,i)=>`<tr><td>${i+1}</td><td><strong>${esc(b.empName)}</strong></td><td><span class="badge bpr">${esc(b.type)}</span></td><td style="font-weight:700;color:#27ae60;">${KD(b.amount)}</td><td>${esc(b.reason||'—')}</td><td>${fd(b.date)}</td></tr>`).join('')||emRow(6);}

/* END OF SERVICE */
function pgEnd(){
  $('pg-endservice').innerHTML=`
  <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;" class="no-print">
    <div style="font-size:16px;font-weight:700;">📜 نهاية الخدمة</div>
    <button class="btn bp" id="endAddBtn">➕ احتساب</button>
  </div>
  <div class="info-box">⚖️ م.51 الكويت: أقل 5 سنوات: 15 يوم/سنة | 5-10 سنوات: شهر/سنة | أكثر 10: شهر ونصف/سنة</div>
  <div class="card"><div class="tw"><table>
    <thead><tr><th>#</th><th>الموظف</th><th>سنوات الخدمة</th><th>الراتب الأساسي</th><th>المكافأة (د.ك)</th><th>تاريخ الانتهاء</th><th>السبب</th></tr></thead>
    <tbody id="ENDTBL">${renderEndRows()}</tbody>
  </table></div></div>`;
  $('endAddBtn').addEventListener('click',()=>{
    mkOpOv('ENDF','📜 احتساب نهاية الخدمة',`
    <div class="fgr">
      <div class="fg"><label>الموظف</label><select id="es-e">${empOpts()}</select></div>
      <div class="fg"><label>تاريخ انتهاء الخدمة</label><input type="date" id="es-d" value="${td()}"/></div>
      <div class="fg"><label>سبب الإنهاء</label><select id="es-r"><option>إنهاء من صاحب العمل</option><option>استقالة (أكثر 5 سنوات)</option><option>استقالة (3-5 سنوات)</option><option>استقالة (أقل 3 سنوات)</option><option>تقاعد</option><option>انتهاء العقد</option></select></div>
    </div>
    <div style="background:#f8f6f0;border-radius:8px;padding:12px;margin:10px 0;" id="ECB">اختر الموظف وتاريخ الانتهاء</div>
    <div style="display:flex;gap:8px;justify-content:flex-end;margin-top:12px;">
      <button class="btn bou" onclick="clOv('ENDF')">إلغاء</button>
      <button class="btn bp" id="endSaveBtn">💾 تسجيل وحفظ</button>
    </div>`);
    const calc=()=>{const e=resolveP(gv('es-e'));const dt=$('es-d')?.value;const rsn=$('es-r')?.value||'';if(!e||!dt||!e.hire){$('ECB').innerHTML='اختر الموظف وتاريخ الانتهاء';return;}const yrs=(new Date(dt)-new Date(e.hire))/(1000*60*60*24*365.25);let rate=yrs<5?15/30:yrs<=10?1:1.5;let disc=rsn.includes('أقل 3')?0:rsn.includes('3-5')?0.5:1;const amt=(e.salary||0)*rate*yrs*disc;$('ECB').dataset.y=yrs.toFixed(1);$('ECB').dataset.a=amt.toFixed(3);$('ECB').innerHTML=`<div style="font-size:12px;line-height:2.3;"><div>سنوات الخدمة: <strong>${yrs.toFixed(1)}</strong></div><div>الراتب الأساسي: <strong>${KD(e.salary)}</strong></div><div>معدل الاستحقاق: <strong>${(rate*100).toFixed(0)}% × ${disc*100}%</strong></div><div style="font-size:15px;font-weight:900;color:#c8a84b;margin-top:6px;">✅ المكافأة: ${KD(amt)}</div></div>`;};
    $('es-e').addEventListener('change',calc);$('es-d').addEventListener('change',calc);$('es-r').addEventListener('change',calc);
    $('endSaveBtn').addEventListener('click',()=>{const e=resolveP(gv('es-e'));if(!e){toast('اختر موظفاً','err');return;}const b=$('ECB');if(!DB.endServices)DB.endServices=[];DB.endServices.push({id:Date.now(),empId:e.id,empName:e.name,salary:e.salary,years:parseFloat(b?.dataset.y)||0,amount:parseFloat(b?.dataset.a)||0,endDate:$('es-d')?.value||'',reason:$('es-r')?.value||''});e.status='منتهي الخدمة';saveDB();clOv('ENDF');$('ENDTBL').innerHTML=renderEndRows();toast('تم تسجيل نهاية الخدمة ✅');});
  });
}
function renderEndRows(){return(DB.endServices||[]).map((s,i)=>`<tr><td>${i+1}</td><td><strong>${esc(s.empName)}</strong></td><td>${s.years} سنة</td><td>${KD(s.salary)}</td><td style="font-weight:700;color:#c8a84b;">${KD(s.amount)}</td><td>${fd(s.endDate)}</td><td>${esc(s.reason)}</td></tr>`).join('')||emRow(7);}

/* ══════════════════════════════════════════
   LEAVES
═══════════════════════════════════════════ */
function pgLeaves(){
  const types=[['إجازة سنوية','🌞'],['إجازة مرضية','🏥'],['إجازة طارئة','⚡'],['إجازة بدون راتب','⛔'],['إجازة أمومة','🤱']];
  $('pg-leaves').innerHTML=`
  <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;" class="no-print">
    <div style="font-size:16px;font-weight:700;">🌴 الإجازات</div>
    <button class="btn bp" id="lvAddBtn">➕ طلب إجازة</button>
  </div>
  <div class="info-box">⚖️ القانون الكويتي: سنوية 30 يوم عمل | مرضية 15 يوم مدفوعة | أمومة 70 يوم بالراتب</div>
  <div style="display:grid;grid-template-columns:repeat(5,1fr);gap:10px;margin-bottom:14px;">
    ${types.map(([t,ic])=>`<div class="card" style="text-align:center;padding:12px;margin-bottom:0;border-top:3px solid #c8a84b;"><div style="font-size:20px;">${ic}</div><div style="font-size:20px;font-weight:900;">${(DB.leaves||[]).filter(l=>l.type===t).length}</div><div style="font-size:10px;color:#888;">${t}</div></div>`).join('')}
  </div>
  <div class="card"><div class="tw"><table>
    <thead><tr><th>#</th><th>الموظف</th><th>النوع</th><th>من</th><th>إلى</th><th>أيام</th><th>السبب</th><th>الحالة</th><th class="no-print">إجراءات</th></tr></thead>
    <tbody id="LVTBL">${renderLvRows()}</tbody>
  </table></div></div>`;
  $('lvAddBtn').addEventListener('click',()=>{
    mkOpOv('LVF','🌴 طلب إجازة',`
    <div class="fgr">
      <div class="fg"><label>الموظف *</label><select id="lv-e">${empOpts()}</select></div>
      <div class="fg"><label>نوع الإجازة</label><select id="lv-t">${types.map(([t])=>`<option>${t}</option>`).join('')}</select></div>
      <div class="fg"><label>من تاريخ</label><input type="date" id="lv-f"/></div>
      <div class="fg"><label>إلى تاريخ</label><input type="date" id="lv-o"/></div>
    </div>
    <div class="fg"><label>السبب</label><textarea id="lv-r"></textarea></div>
    <div style="display:flex;gap:8px;justify-content:flex-end;margin-top:12px;">
      <button class="btn bou" onclick="clOv('LVF')">إلغاء</button>
      <button class="btn bp" id="lvSaveBtn">💾 تقديم الطلب</button>
    </div>`);
    $('lvSaveBtn').addEventListener('click',()=>{const e=resolveP(gv('lv-e'));if(!e){toast('اختر موظفاً','err');return;}const fr=$('lv-f')?.value,to=$('lv-o')?.value;const days=fr&&to?Math.round((new Date(to)-new Date(fr))/86400000)+1:0;const ltype=$('lv-t')?.value||'';if(!DB.leaves)DB.leaves=[];DB.leaves.push({id:Date.now(),empId:e.id,empName:e.name,type:ltype,from:fr,to,days,reason:gv('lv-r'),status:'قيد المراجعة'});saveDB();clOv('LVF');$('LVTBL').innerHTML=renderLvRows();addNotif(e.name,`📋 طلب ${ltype} جديد`,`${e.name} يطلب ${ltype} من ${fd(fr)} إلى ${fd(to)} (${days} يوم)`);toast('تم تقديم الطلب — وتم إشعار الإدارة 🔔');});
  });
}
function renderLvRows(){return(DB.leaves||[]).map((l,i)=>`<tr><td>${i+1}</td><td><strong>${esc(l.empName)}</strong></td><td><span class="badge bif">${esc(l.type)}</span></td><td>${fd(l.from)}</td><td>${fd(l.to)}</td><td>${l.days||0}</td><td>${esc(l.reason||'—')}</td><td><span class="badge ${l.status==='موافق'?'bok2':l.status==='مرفوض'?'bdn2':'bwn2'}">${esc(l.status)}</span></td><td class="no-print"><div style="display:flex;gap:3px;"><button class="btn bok bsm" onclick="updLv(${l.id},'موافق')">✅</button><button class="btn bdn bsm" onclick="updLv(${l.id},'مرفوض')">❌</button></div></td></tr>`).join('')||emRow(9);}
function updLv(id,st){DB.leaves=(DB.leaves||[]).map(l=>l.id===id?{...l,status:st}:l);saveDB();const tbl=$('LVTBL');if(tbl)tbl.innerHTML=renderLvRows();if(st==='موافق'){const l=(DB.leaves||[]).find(x=>x.id===id);if(l)addNotif(l.empName,'✅ موافقة على الإجازة',`تمت الموافقة على طلب ${l.type} الخاص بك`);}toast(st==='موافق'?'تمت الموافقة ✅':'تم الرفض');}

/* PERMISSIONS */
function pgPerms(){
  $('pg-permissions').innerHTML=`
  <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;" class="no-print">
    <div style="font-size:16px;font-weight:700;">🕐 الاستئذانات</div>
    <button class="btn bp" id="prmAddBtn">➕ استئذان</button>
  </div>
  <div class="info-box">ساعة مجانية شهرياً — ما زاد يُخصم: (الراتب ÷ 240) × ساعات الزيادة</div>
  <div class="card"><div class="tw"><table>
    <thead><tr><th>#</th><th>الموظف</th><th>التاريخ</th><th>الساعات</th><th>السبب</th><th>خصم</th><th>مبلغ الخصم</th></tr></thead>
    <tbody id="PRMTBL">${renderPrmRows()}</tbody>
  </table></div></div>`;
  $('prmAddBtn').addEventListener('click',()=>{
    mkOpOv('PRMF','🕐 استئذان',`
    <div class="fgr">
      <div class="fg"><label>الموظف</label><select id="pm-e">${empOpts()}</select></div>
      <div class="fg"><label>التاريخ</label><input type="date" id="pm-d" value="${td()}"/></div>
      <div class="fg"><label>عدد الساعات</label><input type="number" step="0.5" id="pm-h" value="1" placeholder="1"/></div>
    </div>
    <div class="fg"><label>السبب</label><textarea id="pm-r"></textarea></div>
    <div style="display:flex;gap:8px;justify-content:flex-end;margin-top:12px;">
      <button class="btn bou" onclick="clOv('PRMF')">إلغاء</button>
      <button class="btn bp" id="prmSaveBtn">💾 حفظ</button>
    </div>`);
    $('prmSaveBtn').addEventListener('click',()=>{const e=resolveP(gv('pm-e'));if(!e){toast('اختر موظفاً','err');return;}const hrs=parseFloat($('pm-h')?.value)||1;if(!DB.permissions)DB.permissions=[];DB.permissions.push({id:Date.now(),empId:e.id,empName:e.name,date:$('pm-d')?.value||'',hours:hrs,reason:gv('pm-r')});if(hrs>1)addNotif(e.name,'🕐 استئذان يزيد عن ساعة',`${e.name} طلب استئذان ${hrs} ساعة`);saveDB();clOv('PRMF');$('PRMTBL').innerHTML=renderPrmRows();toast('تم ✅');});
  });
}
function renderPrmRows(){return(DB.permissions||[]).map((p,i)=>{const e=allP().find(x=>x.id==p.empId);const hr=((e?.salary||0)/240);const dh=Math.max(0,(p.hours||0)-1);const da=hr*dh;return`<tr><td>${i+1}</td><td><strong>${esc(p.empName)}</strong></td><td>${fd(p.date)}</td><td>${p.hours}</td><td>${esc(p.reason||'—')}</td><td><span class="badge ${dh>0?'bdn2':'bok2'}">${dh>0?'نعم':'لا'}</span></td><td>${dh>0?KD(da):'—'}</td></tr>`;}).join('')||emRow(7);}

/* ══════════════════════════════════════════
   ATTENDANCE + GPS LOCATION
═══════════════════════════════════════════ */
function pgAtt(){
  $('pg-attendance').innerHTML=`
  <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;" class="no-print">
    <div style="font-size:16px;font-weight:700;">⏰ الحضور والانصراف</div>
    <button class="btn bp" id="attAddBtn">➕ تسجيل حضور / انصراف</button>
  </div>
  <div class="info-box">📍 تفعيل GPS: عند تسجيل الحضور أو الانصراف يُرسل الموظف موقعه الجغرافي تلقائياً ويظهر كرابط خريطة بجانب اسمه.</div>
  <div class="card"><div class="tw"><table>
    <thead><tr><th>#</th><th>الموظف</th><th>التاريخ</th><th>وقت الحضور</th><th>وقت الانصراف</th><th>الحالة</th><th>تأخير؟</th><th>📍 الموقع</th><th>ملاحظات</th></tr></thead>
    <tbody id="ATTTBL">${renderAttRows()}</tbody>
  </table></div></div>`;
  $('attAddBtn').addEventListener('click',()=>{
    mkOpOv('ATTF','⏰ تسجيل حضور / انصراف',`
    <div class="fgr">
      <div class="fg"><label>الموظف</label><select id="av-e">${empOpts()}</select></div>
      <div class="fg"><label>التاريخ</label><input type="date" id="av-d" value="${td()}"/></div>
      <div class="fg"><label>وقت الحضور</label><input type="time" id="av-i" value="08:00"/></div>
      <div class="fg"><label>وقت الانصراف</label><input type="time" id="av-o" value="17:00"/></div>
      <div class="fg"><label>الحالة</label><select id="av-s"><option>حاضر</option><option>غائب</option><option>متأخر</option><option>إجازة</option></select></div>
    </div>
    <div class="fg"><label>ملاحظات</label><input id="av-n"/></div>
    <div style="background:rgba(200,168,75,.08);border:1.5px solid #c8a84b;border-radius:8px;padding:10px;margin-bottom:12px;">
      <div style="font-size:12px;font-weight:700;margin-bottom:6px;">📍 تحديد الموقع الجغرافي (GPS)</div>
      <div style="font-size:11px;color:#888;margin-bottom:8px;">انقر على الزر لتحديد موقع الموظف تلقائياً عند تسجيل الحضور</div>
      <button class="btn bi bsm" onclick="getGPS()">📍 تحديد الموقع الآن</button>
      <span id="gpsStatus" style="font-size:11px;color:#888;margin-right:8px;"></span>
      <input type="hidden" id="gpsLat"/><input type="hidden" id="gpsLng"/>
    </div>
    <div style="display:flex;gap:8px;justify-content:flex-end;margin-top:12px;">
      <button class="btn bou" onclick="clOv('ATTF')">إلغاء</button>
      <button class="btn bp" id="attSaveBtn">💾 حفظ</button>
    </div>`);
    $('attSaveBtn').addEventListener('click',()=>{
      const e=resolveP(gv('av-e'));if(!e){toast('اختر موظفاً','err');return;}
      const inT=$('av-i')?.value||'';const late=inT&&inT>'08:15';
      const lat=$('gpsLat')?.value;const lng=$('gpsLng')?.value;
      const gpsLink=lat&&lng?`https://www.google.com/maps?q=${lat},${lng}`:'';
      if(!DB.attendance)DB.attendance=[];
      DB.attendance.push({id:Date.now(),empId:e.id,empName:e.name,date:$('av-d')?.value||'',inTime:inT,outTime:$('av-o')?.value||'',status:$('av-s')?.value||'حاضر',notes:gv('av-n'),lat:lat||'',lng:lng||'',gpsLink});
      if(late)addNotif(e.name,'⚠️ تأخير عن الدوام',`${e.name} وصل الساعة ${inT} — يرجى تقديم مبرر`);
      saveDB();clOv('ATTF');$('ATTTBL').innerHTML=renderAttRows();toast('تم التسجيل ✅');
    });
  });
}
function getGPS(){
  const st=$('gpsStatus');if(!st)return;st.textContent='جاري تحديد الموقع...';
  if(!navigator.geolocation){st.textContent='المتصفح لا يدعم GPS';return;}
  navigator.geolocation.getCurrentPosition(pos=>{const lat=pos.coords.latitude.toFixed(6);const lng=pos.coords.longitude.toFixed(6);if($('gpsLat'))$('gpsLat').value=lat;if($('gpsLng'))$('gpsLng').value=lng;if(st)st.innerHTML=`✅ تم تحديد الموقع — <a href="https://www.google.com/maps?q=${lat},${lng}" target="_blank" class="gps-link">عرض على الخريطة</a>`;},err=>{if(st)st.textContent='تعذّر تحديد الموقع. تأكد من تفعيل GPS.';},{enableHighAccuracy:true,timeout:10000});
}
function renderAttRows(){return(DB.attendance||[]).slice(-80).reverse().map((a,i)=>{const late=a.inTime&&a.inTime>'08:15';return`<tr><td>${i+1}</td><td><strong>${esc(a.empName)}</strong></td><td>${fd(a.date)}</td><td>${esc(a.inTime||'—')}</td><td>${esc(a.outTime||'—')}</td><td><span class="badge ${a.status==='حاضر'?'bok2':a.status==='غائب'?'bdn2':'bwn2'}">${esc(a.status)}</span></td><td>${late?'<span class="badge bwn2">متأخر</span>':'—'}</td><td>${a.gpsLink?`<a href="${esc(a.gpsLink)}" target="_blank" class="gps-link" title="عرض الموقع">📍 خريطة</a>`:'—'}</td><td>${esc(a.notes||'—')}</td></tr>`;}).join('')||emRow(9);}

/* ══════════════════════════════════════════
   EVALUATIONS
═══════════════════════════════════════════ */
const FCR=[['prd','جودة الإنتاج'],['saf','الالتزام بالسلامة'],['att','الانضباط والحضور'],['twk','العمل الجماعي'],['ini','روح المبادرة'],['eff','الكفاءة والإنتاجية']];
const SCR=[['tgt','تحقيق أهداف المبيعات'],['cli','إدارة علاقات العملاء'],['rpt','دقة التقارير'],['com','مهارات التواصل'],['pro','معرفة المنتج'],['twk','العمل الجماعي']];
function pgEvals(){
  $('pg-evaluations').innerHTML=`
  <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;" class="no-print">
    <div style="font-size:16px;font-weight:700;">⭐ تقييم الأداء</div>
    <div style="display:flex;gap:6px;"><button class="btn bp" onclick="openEvForm('factory')">🏭 تقييم مصنع</button><button class="btn bd" onclick="openEvForm('sales')">🛒 تقييم مبيعات</button><button class="btn bi bsm" onclick="showS('evalfiles')">📎 ملفات التقييم</button></div>
  </div>
  <div class="card"><div class="tw"><table>
    <thead><tr><th>#</th><th>الموظف</th><th>الفئة</th><th>الفترة</th><th>المتوسط</th><th>التصنيف</th><th>التوصية</th><th>التاريخ</th><th class="no-print">طباعة</th></tr></thead>
    <tbody id="EVTBL">${renderEvRows()}</tbody>
  </table></div></div>`;
}
function renderEvRows(){return(DB.evaluations||[]).map((e,i)=>`<tr><td>${i+1}</td><td><strong>${esc(e.empName)}</strong></td><td><span class="badge bif">${e.type==='factory'?'مصنع':'مبيعات'}</span></td><td>${esc(e.period||'—')}</td><td style="font-weight:700;color:#c8a84b;">${e.avg}/5</td><td>${pb(e.cls)}</td><td>${esc(e.rec||'—')}</td><td>${fd(e.date)}</td><td class="no-print"><button class="btn bgr bsm" onclick="printEv(${e.id})">🖨️</button></td></tr>`).join('')||emRow(9);}
function openEvForm(type){
  evalSC={};evalREC='';const cr=type==='factory'?FCR:SCR;
  mkOpOv('EVF',type==='factory'?'🏭 تقييم الأداء – المصنع':'🛒 تقييم الأداء – المبيعات',`
  <div class="fgr" style="margin-bottom:12px;">
    <div class="fg"><label>الموظف</label><select id="ev-e">${empOpts()}</select></div>
    <div class="fg"><label>فترة التقييم</label><input id="ev-p" placeholder="مثال: Q1 2025"/></div>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:12px;" id="EVCR">
    ${cr.map(([k,l])=>`<div style="background:#f8f6f0;border-radius:8px;padding:10px;"><div style="font-size:11px;font-weight:700;margin-bottom:6px;">${esc(l)}</div><div style="display:flex;gap:4px;">${[1,2,3,4,5].map(n=>`<button style="width:30px;height:30px;border-radius:5px;border:1.5px solid #e0d9cc;cursor:pointer;font-weight:700;font-size:11px;background:#fff;transition:.15s;" id="sb-${k}-${n}" onclick="setSC('${k}',${n})">${n}</button>`).join('')}</div></div>`).join('')}
  </div>
  <div class="fg" style="margin-bottom:10px;"><label>توصية الإدارة</label>
    <div id="EVREC" style="display:flex;gap:6px;flex-wrap:wrap;">
      ${['مكافأة','ترقية','تدريب','متابعة','تحذير'].map(r=>`<button onclick="pickR(this,'${r}')" style="padding:5px 12px;border:1.5px solid #e0d9cc;border-radius:20px;cursor:pointer;font-family:inherit;font-size:11px;background:#fff;">${r}</button>`).join('')}
    </div>
  </div>
  <div class="fg"><label>ملاحظات</label><textarea id="ev-n"></textarea></div>
  <div style="background:#f8f6f0;border-radius:8px;padding:12px;margin-bottom:12px;display:flex;gap:20px;align-items:center;">
    <div><div style="font-size:10px;color:#888;">المتوسط</div><div id="EAV" style="font-size:22px;font-weight:900;color:#c8a84b;">—</div></div>
    <div><div style="font-size:10px;color:#888;">التصنيف</div><div id="ECL">—</div></div>
  </div>
  <div style="display:flex;gap:8px;justify-content:flex-end;">
    <button class="btn bou" onclick="clOv('EVF')">إلغاء</button>
    <button class="btn bp" id="evSaveBtn">💾 حفظ التقييم</button>
  </div>`,'860px');
  $('evSaveBtn').addEventListener('click',()=>{
    const e=resolveP(gv('ev-e'));if(!e){toast('اختر موظفاً','err');return;}
    const vals=Object.values(evalSC);if(!vals.length){toast('أكمل معايير التقييم','err');return;}
    const avg=(vals.reduce((a,b)=>a+b,0)/vals.length).toFixed(1);const cls=pc(parseFloat(avg));
    if(!DB.evaluations)DB.evaluations=[];DB.evaluations.push({id:Date.now(),empId:e.id,empName:e.name,type,period:gv('ev-p'),scores:{...evalSC},avg:parseFloat(avg),cls,rec:evalREC,notes:gv('ev-n'),date:td()});
    evalSC={};saveDB();clOv('EVF');const tbl=$('EVTBL');if(tbl)tbl.innerHTML=renderEvRows();addNotif(e.name,'⭐ تم تقييم الأداء',`${e.name} — المتوسط: ${avg}/5 — التصنيف: ${cls}`);toast('تم حفظ التقييم ✅');
  });
}
function setSC(k,n){evalSC[k]=n;for(let i=1;i<=5;i++){const b=$(`sb-${k}-${i}`);if(b){b.style.background=i<=n?'#c8a84b':'#fff';b.style.color=i<=n?'#1a1a2e':'#333';b.style.borderColor=i<=n?'#c8a84b':'#e0d9cc';}}calcEvAv();}
function calcEvAv(){const vals=Object.values(evalSC);if(!vals.length)return;const avg=(vals.reduce((a,b)=>a+b,0)/vals.length).toFixed(1);const cls=pc(parseFloat(avg));const av=$('EAV');const cl=$('ECL');if(av)av.textContent=avg+'/5';if(cl)cl.innerHTML=pb(cls);}
function pickR(el,r){evalREC=r;const c=$('EVREC');if(!c)return;c.querySelectorAll('button').forEach(b=>{b.style.borderColor='#e0d9cc';b.style.fontWeight='400';b.style.background='#fff';});el.style.borderColor='#c8a84b';el.style.fontWeight='700';el.style.background='rgba(200,168,75,.1)';}
function printEv(id){const e=(DB.evaluations||[]).find(x=>x.id===id);if(!e)return;const w=window.open('','_blank');const sr=Object.entries(e.scores||{}).map(([k,v])=>`<tr><td>${k}</td><td>${v}/5</td></tr>`).join('');w.document.write(`<html lang="ar" dir="rtl"><head><meta charset="UTF-8"><title>تقييم أداء</title><style>body{font-family:Arial;padding:30px;direction:rtl;}h2{color:#1a1a2e;}table{width:100%;border-collapse:collapse;margin:12px 0;}th{background:#1a1a2e;color:#fff;padding:8px;}td{border:1px solid #ddd;padding:8px;}
/* تحكم في حجم صور الموظفين */
.ph{width:var(--photo-size,36px);height:var(--photo-size,36px);border-radius:50%;object-fit:cover;border:2px solid #c8a84b;flex-shrink:0;}
.av{width:var(--photo-size,36px);height:var(--photo-size,36px);border-radius:50%;background:linear-gradient(135deg,#c8a84b,#e8c97a);display:inline-flex;align-items:center;justify-content:center;font-weight:700;color:#1a1a2e;font-size:calc(var(--photo-size,36px) * 0.35);flex-shrink:0;}
/* شعار كبير واضح في الشريط الجانبي */
.sb-li{width:120px;height:120px;border-radius:50%;object-fit:cover;border:3px solid #c8a84b;margin:0 auto 10px;display:none;box-shadow:0 6px 24px rgba(200,168,75,.5);}
/* شعار في نافذة الإعدادات */
.logo-preview{width:120px;height:120px;border-radius:50%;object-fit:cover;border:3px solid #c8a84b;display:block;margin:0 auto 10px;box-shadow:0 4px 20px rgba(200,168,75,.3);}
.logo-preview-wrap{text-align:center;padding:16px;background:rgba(200,168,75,.05);border-radius:10px;border:2px dashed #c8a84b;margin-bottom:12px;cursor:pointer;}
.logo-preview-wrap:hover{background:rgba(200,168,75,.12);}
/* شريط تحكم حجم الصور */
.size-ctrl{display:flex;align-items:center;gap:10px;background:#fff;border-radius:9px;padding:10px 14px;border:1px solid #e0d9cc;margin-bottom:0;}
.size-slider{flex:1;accent-color:#c8a84b;}


.photo-size-ctrl{display:flex;align-items:center;gap:6px;margin-top:4px;}
.photo-size-ctrl button{width:24px;height:24px;border-radius:50%;border:1px solid #c8a84b;background:#fff;color:#c8a84b;font-size:14px;cursor:pointer;display:flex;align-items:center;justify-content:center;font-weight:700;line-height:1;flex-shrink:0;}
.photo-size-ctrl button:hover{background:#c8a84b;color:#1a1a2e;}
.photo-size-ctrl span{font-size:10px;color:#888;min-width:28px;text-align:center;}
.pa{width:var(--pa-size,80px);height:var(--pa-size,80px);border-radius:50%;border:2px dashed #c8a84b;display:flex;align-items:center;justify-content:center;cursor:pointer;overflow:hidden;background:rgba(200,168,75,.05);transition:width .2s,height .2s;}


/* شاشة الترخيص */
.lic-wrap{position:fixed;inset:0;background:linear-gradient(135deg,#1a1a2e,#16213e,#0f3460);display:flex;align-items:center;justify-content:center;z-index:99999;}
.lic-box{background:rgba(255,255,255,.06);border:1px solid rgba(200,168,75,.3);border-radius:20px;padding:40px 34px;width:440px;max-width:92vw;text-align:center;backdrop-filter:blur(10px);}
.lic-title{font-size:22px;font-weight:900;color:#c8a84b;margin-bottom:6px;}
.lic-sub{color:rgba(255,255,255,.35);font-size:12px;margin-bottom:24px;}
.lic-input{width:100%;padding:12px 14px;border-radius:9px;border:1.5px solid rgba(200,168,75,.4);background:rgba(255,255,255,.07);color:#fff;font-family:inherit;font-size:14px;text-align:center;letter-spacing:3px;font-weight:700;outline:none;margin-bottom:10px;display:block;}
.lic-input:focus{border-color:#c8a84b;background:rgba(200,168,75,.1);}
.lic-btn{width:100%;padding:12px;border:none;border-radius:9px;background:linear-gradient(135deg,#c8a84b,#e8c97a);color:#1a1a2e;font-size:14px;font-weight:700;cursor:pointer;font-family:inherit;transition:.2s;}
.lic-btn:hover{transform:translateY(-1px);box-shadow:0 6px 20px rgba(200,168,75,.4);}
.lic-err{color:#fca5a5;font-size:11px;margin-top:6px;min-height:16px;}
.lic-hint{color:rgba(255,255,255,.15);font-size:10px;margin-top:12px;}
/* شاشة البداية - Welcome */
.welcome-wrap{position:fixed;inset:0;background:linear-gradient(135deg,#1a1a2e,#16213e);display:flex;align-items:center;justify-content:center;z-index:99998;animation:fadeOut 0.5s ease 2.5s forwards;}
@keyframes fadeOut{to{opacity:0;pointer-events:none;}}
.welcome-box{text-align:center;color:#fff;}
.welcome-logo{width:100px;height:100px;border-radius:50%;object-fit:cover;border:3px solid #c8a84b;margin:0 auto 16px;box-shadow:0 8px 32px rgba(200,168,75,.5);display:block;}
.welcome-icon{font-size:80px;margin-bottom:16px;}
.welcome-name{font-size:28px;font-weight:900;color:#c8a84b;letter-spacing:2px;}
.welcome-sub{font-size:14px;color:rgba(255,255,255,.5);margin-top:8px;}
.welcome-powered{font-size:10px;color:rgba(255,255,255,.2);margin-top:24px;}
/* نسخة احتياطية */



/* تقارير PDF */
.pdf-report{direction:rtl;font-family:'Segoe UI',Arial,sans-serif;background:#fff;padding:32px;}
.pdf-hd{text-align:center;border-bottom:3px solid #c8a84b;padding-bottom:16px;margin-bottom:20px;}
.pdf-co{font-size:22px;font-weight:900;color:#1a1a2e;}
.pdf-title{font-size:16px;font-weight:700;color:#c8a84b;margin-top:6px;}
.pdf-date{font-size:11px;color:#888;margin-top:4px;}
.pdf-table{width:100%;border-collapse:collapse;margin-bottom:16px;font-size:12px;}
.pdf-table th{background:#1a1a2e;color:#fff;padding:8px 10px;text-align:right;}
.pdf-table td{padding:7px 10px;border-bottom:1px solid #e2e8f0;}
.pdf-table tr:nth-child(even) td{background:#f8fafc;}
.pdf-total{background:rgba(200,168,75,.1);border:2px solid #c8a84b;border-radius:8px;padding:12px 16px;display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;}
.pdf-total-label{font-size:13px;font-weight:700;}
.pdf-total-val{font-size:18px;font-weight:900;color:#27ae60;}
.pdf-sigs{display:flex;justify-content:space-around;margin-top:40px;}
.pdf-sig{text-align:center;}
.pdf-sig-line{border-top:1px solid #1a1a2e;width:130px;padding-top:6px;font-size:11px;color:#555;margin:0 auto;}
.pdf-footer{text-align:center;color:#aaa;font-size:10px;margin-top:20px;padding-top:10px;border-top:1px solid #e2e8f0;}

</style></head><body>
<h2>${DB.settings.companyName} — نموذج تقييم الأداء</h2><table><tr><th>الموظف</th><td>${e.empName}</td><th>الفترة</th><td>${e.period||'—'}</td></tr><tr><th>التصنيف</th><td style="color:#27ae60;font-weight:700;">${e.cls}</td><th>المتوسط</th><td>${e.avg}/5</td></tr><tr><th>التوصية</th><td colspan="3">${e.rec||'—'}</td></tr></table><h3>معايير التقييم:</h3><table>${sr}</table><scr'+'ipt>window.print();<\/scr'+'ipt></body></html>`);}

/* EVAL FILES */
function pgEvalFiles(){
  $('pg-evalfiles').innerHTML=`
  <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;" class="no-print">
    <div style="font-size:16px;font-weight:700;">📎 ملفات التقييم</div>
    <button class="btn bp" id="evFBtn">📤 رفع ملف تقييم</button>
  </div>
  <input type="file" id="evFInp" style="display:none;" multiple accept=".pdf,.doc,.docx,.xls,.xlsx,.jpg,.png"/>
  <div class="upz" id="evUpz" style="margin-bottom:16px;"><div style="font-size:28px;">📎</div><div style="font-size:13px;font-weight:700;margin-top:6px;">ارفع نماذج التقييم المعدّة خارج النظام</div></div>
  <div id="EVFL">${renderEvalFL()}</div>`;
  const up=ev=>{Array.from(ev.target.files).forEach(f=>{const r=new FileReader();r.onload=e=>{if(!DB.evalFiles)DB.evalFiles=[];DB.evalFiles.push({name:f.name,size:f.size,data:e.target.result,date:td()});saveDB();const el=$('EVFL');if(el)el.innerHTML=renderEvalFL();toast('تم رفع الملف ✅');};r.readAsDataURL(f);});ev.target.value='';};
  $('evFBtn').addEventListener('click',()=>$('evFInp').click());
  $('evUpz').addEventListener('click',()=>$('evFInp').click());
  $('evFInp').addEventListener('change',up);
}
function renderEvalFL(){return(DB.evalFiles||[]).map((f,i)=>`<div class="fi"><span style="font-size:18px;">${fi(f.name)}</span><div style="flex:1;"><div style="font-weight:700;font-size:12px;">${esc(f.name)}</div><div style="font-size:10px;color:#888;">${fd(f.date)} · ${(f.size/1024).toFixed(1)} KB</div></div><button class="btn bi bsm" onclick="dlF('${esc(f.data)}','${esc(f.name)}')">⬇️</button><button class="btn bdn bsm" onclick="if(!DB.evalFiles)DB.evalFiles=[];DB.evalFiles.splice(${i},1);saveDB();const el=$('EVFL');if(el)el.innerHTML=renderEvalFL()">🗑️</button></div>`).join('')||'<div style="text-align:center;padding:22px;color:#999;">لا توجد ملفات</div>';}

/* SELF EVAL */
function pgSelf(){
  $('pg-selfeval').innerHTML=`
  <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;" class="no-print">
    <div style="font-size:16px;font-weight:700;">🧠 التقييم الذاتي</div>
    <button class="btn bp" id="selfAddBtn">➕ تقييم ذاتي</button>
  </div>
  <div class="card"><div class="tw"><table>
    <thead><tr><th>#</th><th>الموظف</th><th>أهم الإنجازات</th><th>التحديات</th><th>المهارات</th><th>التاريخ</th><th class="no-print">طباعة</th></tr></thead>
    <tbody id="STBL">${renderSelfRows()}</tbody>
  </table></div></div>`;
  $('selfAddBtn').addEventListener('click',()=>{
    mkOpOv('SELFF','🧠 التقييم الذاتي للموظف',`
    <div class="fg"><label>الموظف</label><select id="se-e">${empOpts()}</select></div>
    <div class="fg"><label>ما أهم إنجازاتك هذا العام؟</label><textarea id="se-a"></textarea></div>
    <div class="fg"><label>ما التحديات التي واجهتك؟</label><textarea id="se-c"></textarea></div>
    <div class="fg"><label>ما المهارات التي ترغب في تطويرها؟</label><textarea id="se-s"></textarea></div>
    <div style="display:flex;gap:8px;justify-content:flex-end;margin-top:12px;">
      <button class="btn bou" onclick="clOv('SELFF')">إلغاء</button>
      <button class="btn bp" id="selfSaveBtn">💾 حفظ</button>
    </div>`);
    $('selfSaveBtn').addEventListener('click',()=>{const e=resolveP(gv('se-e'));if(!e){toast('اختر موظفاً','err');return;}if(!DB.selfEvals)DB.selfEvals=[];DB.selfEvals.push({id:Date.now(),empId:e.id,empName:e.name,ach:gv('se-a'),chal:gv('se-c'),skills:gv('se-s'),date:td()});addNotif(e.name,'🧠 تقييم ذاتي جديد',`${e.name} أتم التقييم الذاتي`);saveDB();clOv('SELFF');const tbl=$('STBL');if(tbl)tbl.innerHTML=renderSelfRows();toast('تم ✅');});
  });
}
function renderSelfRows(){return(DB.selfEvals||[]).map((s,i)=>`<tr><td>${i+1}</td><td><strong>${esc(s.empName)}</strong></td><td style="font-size:11px;">${esc((s.ach||'').slice(0,55))}</td><td style="font-size:11px;">${esc((s.chal||'').slice(0,50))}</td><td style="font-size:11px;">${esc((s.skills||'').slice(0,50))}</td><td>${fd(s.date)}</td><td class="no-print"><button class="btn bgr bsm" onclick="printSelf(${s.id})">🖨️</button></td></tr>`).join('')||emRow(7);}
function printSelf(id){const s=(DB.selfEvals||[]).find(x=>x.id===id);if(!s)return;const w=window.open('','_blank');w.document.write(`<html lang="ar" dir="rtl"><head><meta charset="UTF-8"><title>تقييم ذاتي</title><style>body{font-family:Arial;padding:30px;direction:rtl;}h2{color:#1a1a2e;}table{width:100%;border-collapse:collapse;margin:12px 0;}th{background:#1a1a2e;color:#fff;padding:8px;}td{border:1px solid #ddd;padding:9px;line-height:1.8;}
/* تحكم في حجم صور الموظفين */
.ph{width:var(--photo-size,36px);height:var(--photo-size,36px);border-radius:50%;object-fit:cover;border:2px solid #c8a84b;flex-shrink:0;}
.av{width:var(--photo-size,36px);height:var(--photo-size,36px);border-radius:50%;background:linear-gradient(135deg,#c8a84b,#e8c97a);display:inline-flex;align-items:center;justify-content:center;font-weight:700;color:#1a1a2e;font-size:calc(var(--photo-size,36px) * 0.35);flex-shrink:0;}
/* شعار كبير واضح في الشريط الجانبي */
.sb-li{width:120px;height:120px;border-radius:50%;object-fit:cover;border:3px solid #c8a84b;margin:0 auto 10px;display:none;box-shadow:0 6px 24px rgba(200,168,75,.5);}
/* شعار في نافذة الإعدادات */
.logo-preview{width:120px;height:120px;border-radius:50%;object-fit:cover;border:3px solid #c8a84b;display:block;margin:0 auto 10px;box-shadow:0 4px 20px rgba(200,168,75,.3);}
.logo-preview-wrap{text-align:center;padding:16px;background:rgba(200,168,75,.05);border-radius:10px;border:2px dashed #c8a84b;margin-bottom:12px;cursor:pointer;}
.logo-preview-wrap:hover{background:rgba(200,168,75,.12);}
/* شريط تحكم حجم الصور */
.size-ctrl{display:flex;align-items:center;gap:10px;background:#fff;border-radius:9px;padding:10px 14px;border:1px solid #e0d9cc;margin-bottom:0;}
.size-slider{flex:1;accent-color:#c8a84b;}


.photo-size-ctrl{display:flex;align-items:center;gap:6px;margin-top:4px;}
.photo-size-ctrl button{width:24px;height:24px;border-radius:50%;border:1px solid #c8a84b;background:#fff;color:#c8a84b;font-size:14px;cursor:pointer;display:flex;align-items:center;justify-content:center;font-weight:700;line-height:1;flex-shrink:0;}
.photo-size-ctrl button:hover{background:#c8a84b;color:#1a1a2e;}
.photo-size-ctrl span{font-size:10px;color:#888;min-width:28px;text-align:center;}
.pa{width:var(--pa-size,80px);height:var(--pa-size,80px);border-radius:50%;border:2px dashed #c8a84b;display:flex;align-items:center;justify-content:center;cursor:pointer;overflow:hidden;background:rgba(200,168,75,.05);transition:width .2s,height .2s;}


/* شاشة الترخيص */
.lic-wrap{position:fixed;inset:0;background:linear-gradient(135deg,#1a1a2e,#16213e,#0f3460);display:flex;align-items:center;justify-content:center;z-index:99999;}
.lic-box{background:rgba(255,255,255,.06);border:1px solid rgba(200,168,75,.3);border-radius:20px;padding:40px 34px;width:440px;max-width:92vw;text-align:center;backdrop-filter:blur(10px);}
.lic-title{font-size:22px;font-weight:900;color:#c8a84b;margin-bottom:6px;}
.lic-sub{color:rgba(255,255,255,.35);font-size:12px;margin-bottom:24px;}
.lic-input{width:100%;padding:12px 14px;border-radius:9px;border:1.5px solid rgba(200,168,75,.4);background:rgba(255,255,255,.07);color:#fff;font-family:inherit;font-size:14px;text-align:center;letter-spacing:3px;font-weight:700;outline:none;margin-bottom:10px;display:block;}
.lic-input:focus{border-color:#c8a84b;background:rgba(200,168,75,.1);}
.lic-btn{width:100%;padding:12px;border:none;border-radius:9px;background:linear-gradient(135deg,#c8a84b,#e8c97a);color:#1a1a2e;font-size:14px;font-weight:700;cursor:pointer;font-family:inherit;transition:.2s;}
.lic-btn:hover{transform:translateY(-1px);box-shadow:0 6px 20px rgba(200,168,75,.4);}
.lic-err{color:#fca5a5;font-size:11px;margin-top:6px;min-height:16px;}
.lic-hint{color:rgba(255,255,255,.15);font-size:10px;margin-top:12px;}
/* شاشة البداية - Welcome */
.welcome-wrap{position:fixed;inset:0;background:linear-gradient(135deg,#1a1a2e,#16213e);display:flex;align-items:center;justify-content:center;z-index:99998;animation:fadeOut 0.5s ease 2.5s forwards;}
@keyframes fadeOut{to{opacity:0;pointer-events:none;}}
.welcome-box{text-align:center;color:#fff;}
.welcome-logo{width:100px;height:100px;border-radius:50%;object-fit:cover;border:3px solid #c8a84b;margin:0 auto 16px;box-shadow:0 8px 32px rgba(200,168,75,.5);display:block;}
.welcome-icon{font-size:80px;margin-bottom:16px;}
.welcome-name{font-size:28px;font-weight:900;color:#c8a84b;letter-spacing:2px;}
.welcome-sub{font-size:14px;color:rgba(255,255,255,.5);margin-top:8px;}
.welcome-powered{font-size:10px;color:rgba(255,255,255,.2);margin-top:24px;}
/* نسخة احتياطية */



/* تقارير PDF */
.pdf-report{direction:rtl;font-family:'Segoe UI',Arial,sans-serif;background:#fff;padding:32px;}
.pdf-hd{text-align:center;border-bottom:3px solid #c8a84b;padding-bottom:16px;margin-bottom:20px;}
.pdf-co{font-size:22px;font-weight:900;color:#1a1a2e;}
.pdf-title{font-size:16px;font-weight:700;color:#c8a84b;margin-top:6px;}
.pdf-date{font-size:11px;color:#888;margin-top:4px;}
.pdf-table{width:100%;border-collapse:collapse;margin-bottom:16px;font-size:12px;}
.pdf-table th{background:#1a1a2e;color:#fff;padding:8px 10px;text-align:right;}
.pdf-table td{padding:7px 10px;border-bottom:1px solid #e2e8f0;}
.pdf-table tr:nth-child(even) td{background:#f8fafc;}
.pdf-total{background:rgba(200,168,75,.1);border:2px solid #c8a84b;border-radius:8px;padding:12px 16px;display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;}
.pdf-total-label{font-size:13px;font-weight:700;}
.pdf-total-val{font-size:18px;font-weight:900;color:#27ae60;}
.pdf-sigs{display:flex;justify-content:space-around;margin-top:40px;}
.pdf-sig{text-align:center;}
.pdf-sig-line{border-top:1px solid #1a1a2e;width:130px;padding-top:6px;font-size:11px;color:#555;margin:0 auto;}
.pdf-footer{text-align:center;color:#aaa;font-size:10px;margin-top:20px;padding-top:10px;border-top:1px solid #e2e8f0;}

</style></head><body>
<h2>${DB.settings.companyName} — التقييم الذاتي</h2><table><tr><th>الموظف</th><td>${s.empName}</td><th>التاريخ</th><td>${fd(s.date)}</td></tr><tr><th>أهم الإنجازات</th><td colspan="3">${s.ach||'—'}</td></tr><tr><th>التحديات</th><td colspan="3">${s.chal||'—'}</td></tr><tr><th>مهارات للتطوير</th><td colspan="3">${s.skills||'—'}</td></tr></table><div style="margin-top:40px;display:flex;justify-content:space-between;"><div style="text-align:center;"><div style="border-top:1px solid #ccc;width:130px;padding-top:6px;">توقيع الموظف</div></div><div style="text-align:center;"><div style="border-top:1px solid #ccc;width:130px;padding-top:6px;">مدير الموارد البشرية</div></div></div><scr'+'ipt>window.print();<\/scr'+'ipt></body></html>`);}

/* PEER EVAL */
function pgPeer(){
  $('pg-peereval').innerHTML=`
  <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;" class="no-print">
    <div style="font-size:16px;font-weight:700;">🤝 تقييم الزملاء</div>
    <button class="btn bp" id="peerAddBtn">➕ تقييم زميل</button>
  </div>
  <div class="card"><div class="tw"><table>
    <thead><tr><th>#</th><th>المُقيِّم</th><th>الزميل</th><th>تعاون</th><th>احترام</th><th>دعم</th><th>تواصل</th><th>المتوسط</th><th>التاريخ</th></tr></thead>
    <tbody id="PEERTBL">${renderPeerRows()}</tbody>
  </table></div></div>`;
  $('peerAddBtn').addEventListener('click',()=>{
    mkOpOv('PERF','🤝 تقييم زميل',`
    <div class="fgr">
      <div class="fg"><label>المُقيِّم</label><select id="pe-f">${empOpts()}</select></div>
      <div class="fg"><label>الزميل المُقيَّم</label><select id="pe-t">${empOpts()}</select></div>
      <div class="fg"><label>التعاون (1-5)</label><input type="number" min="1" max="5" id="pe-c" value="3"/></div>
      <div class="fg"><label>الاحترام (1-5)</label><input type="number" min="1" max="5" id="pe-r" value="3"/></div>
      <div class="fg"><label>الدعم (1-5)</label><input type="number" min="1" max="5" id="pe-s" value="3"/></div>
      <div class="fg"><label>التواصل (1-5)</label><input type="number" min="1" max="5" id="pe-m" value="3"/></div>
    </div>
    <div style="display:flex;gap:8px;justify-content:flex-end;margin-top:12px;">
      <button class="btn bou" onclick="clOv('PERF')">إلغاء</button>
      <button class="btn bp" id="peerSaveBtn">💾 حفظ</button>
    </div>`);
    $('peerSaveBtn').addEventListener('click',()=>{const fr=resolveP(gv('pe-f'));const to=resolveP(gv('pe-t'));if(!fr||!to){toast('اختر الموظفين','err');return;}const c=parseFloat($('pe-c')?.value)||0,r=parseFloat($('pe-r')?.value)||0,s=parseFloat($('pe-s')?.value)||0,m=parseFloat($('pe-m')?.value)||0;if(!DB.peerEvals)DB.peerEvals=[];DB.peerEvals.push({id:Date.now(),fromName:fr.name,toName:to.name,coop:c,resp:r,supp:s,comm:m,avg:((c+r+s+m)/4).toFixed(1),date:td()});saveDB();clOv('PERF');$('PEERTBL').innerHTML=renderPeerRows();toast('تم ✅');});
  });
}
function renderPeerRows(){return(DB.peerEvals||[]).map((p,i)=>`<tr><td>${i+1}</td><td>${esc(p.fromName)}</td><td><strong>${esc(p.toName)}</strong></td><td>${p.coop}/5</td><td>${p.resp}/5</td><td>${p.supp}/5</td><td>${p.comm}/5</td><td style="font-weight:700;color:#c8a84b;">${p.avg}/5</td><td>${fd(p.date)}</td></tr>`).join('')||emRow(9);}

/* APPROVALS */
function pgAppr(){
  const ca=CU?.role==='مدير عام'||CU?.role==='نائب مدير عام';
  const ti={'توصية إدارية':'📋','مكافأة':'🎁','ترقية':'🚀','تدريب':'📚','متابعة':'👁️','إجازة استثنائية':'🌴','اعتراض على قرار':'⚖️'};
  $('pg-approvals').innerHTML=`
  <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;" class="no-print">
    <div style="font-size:16px;font-weight:700;">✅ نماذج الاعتماد</div>
    <button class="btn bp" id="aprAddBtn">➕ طلب اعتماد</button>
  </div>
  <div id="APRLIST">${renderAprList(ca,ti)}</div>`;
  $('aprAddBtn').addEventListener('click',()=>{
    mkOpOv('APRF','✅ طلب اعتماد جديد',`
    <div class="fgr">
      <div class="fg"><label>الموظف المعني</label><select id="ap-e">${empOpts()}</select></div>
      <div class="fg"><label>نوع الطلب</label><select id="ap-t">${Object.keys(ti).map(k=>`<option>${k}</option>`).join('')}</select></div>
    </div>
    <div class="fg"><label>تفاصيل الطلب</label><textarea id="ap-d"></textarea></div>
    <div style="display:flex;gap:8px;justify-content:flex-end;margin-top:12px;">
      <button class="btn bou" onclick="clOv('APRF')">إلغاء</button>
      <button class="btn bp" id="aprSaveBtn">💾 رفع الطلب</button>
    </div>`);
    $('aprSaveBtn').addEventListener('click',()=>{const e=resolveP(gv('ap-e'));if(!e){toast('اختر موظفاً','err');return;}const atype=$('ap-t')?.value||'';const det=gv('ap-d');if(!DB.approvals)DB.approvals=[];DB.approvals.push({id:Date.now(),empId:e.id,empName:e.name,type:atype,details:det,status:'قيد الاعتماد',date:td()});saveDB();clOv('APRF');const al=$('APRLIST');if(al)al.innerHTML=renderAprList(ca,ti);addNotif(e.name,`📋 طلب ${atype} جديد`,`${e.name}: ${det||atype}`);toast('تم رفع الطلب — وتم إشعار الإدارة 🔔');});
  });
}
function renderAprList(ca,ti){return(DB.approvals||[]).length?(DB.approvals||[]).slice().reverse().map(a=>`<div class="card" style="display:flex;align-items:center;gap:10px;margin-bottom:8px;padding:12px 16px;border-right:3px solid ${a.status==='معتمد'?'#27ae60':a.status==='مرفوض'?'#e74c3c':'#f39c12'};"><span style="font-size:22px;">${ti[a.type]||'✅'}</span><div style="flex:1;"><div style="font-weight:700;font-size:12px;">${esc(a.type)} — ${esc(a.empName)}</div><div style="font-size:10px;color:#888;">${esc(a.details||'—')} · ${fd(a.date)}</div></div><span class="badge ${a.status==='معتمد'?'bok2':a.status==='مرفوض'?'bdn2':'bwn2'}">${esc(a.status)}</span>${ca&&a.status==='قيد الاعتماد'?`<button class="btn bok bsm" onclick="setApr(${a.id},'معتمد')">✅ اعتماد</button><button class="btn bdn bsm" onclick="setApr(${a.id},'مرفوض')">❌ رفض</button>`:''}</div>`).join(''):'<div class="card" style="text-align:center;padding:22px;color:#999;">لا توجد طلبات</div>';}
function setApr(id,st){DB.approvals=(DB.approvals||[]).map(a=>a.id===id?{...a,status:st}:a);saveDB();const ca=CU?.role==='مدير عام'||CU?.role==='نائب مدير عام';const ti={'توصية إدارية':'📋','مكافأة':'🎁','ترقية':'🚀','تدريب':'📚','متابعة':'👁️','إجازة استثنائية':'🌴','اعتراض على قرار':'⚖️'};const el=$('APRLIST');if(el)el.innerHTML=renderAprList(ca,ti);const a=(DB.approvals||[]).find(x=>x.id===id);if(a&&st==='معتمد')addNotif(a.empName,`✅ تم اعتماد ${a.type}`,`تمت الموافقة على طلب ${a.type} الخاص بـ ${a.empName}`);toast(st==='معتمد'?'تم الاعتماد ✅':'تم الرفض');}

/* TRAINING */
function pgTrain(){
  $('pg-training').innerHTML=`
  <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;" class="no-print">
    <div style="font-size:16px;font-weight:700;">📚 التدريب والتطوير</div>
    <button class="btn bp" id="trAddBtn">➕ برنامج تدريبي</button>
  </div>
  <div class="card"><div class="tw"><table>
    <thead><tr><th>#</th><th>الموظف</th><th>البرنامج</th><th>الجهة</th><th>النوع</th><th>من</th><th>إلى</th><th>الحالة</th></tr></thead>
    <tbody id="TRTBL">${renderTrRows()}</tbody>
  </table></div></div>`;
  $('trAddBtn').addEventListener('click',()=>{
    mkOpOv('TRF','📚 برنامج تدريبي',`
    <div class="fgr">
      <div class="fg"><label>الموظف</label><select id="tr-e">${empOpts()}</select></div>
      <div class="fg"><label>اسم البرنامج</label><input id="tr-n"/></div>
      <div class="fg"><label>الجهة المنظمة</label><input id="tr-o"/></div>
      <div class="fg"><label>النوع</label><select id="tr-t"><option>داخلي</option><option>خارجي</option><option>إلكتروني</option></select></div>
      <div class="fg"><label>من</label><input type="date" id="tr-f"/></div>
      <div class="fg"><label>إلى</label><input type="date" id="tr-o2"/></div>
    </div>
    <div style="display:flex;gap:8px;justify-content:flex-end;margin-top:12px;">
      <button class="btn bou" onclick="clOv('TRF')">إلغاء</button>
      <button class="btn bp" id="trSaveBtn">💾 حفظ</button>
    </div>`);
    $('trSaveBtn').addEventListener('click',()=>{const e=resolveP(gv('tr-e'));if(!e){toast('اختر موظفاً','err');return;}if(!DB.training)DB.training=[];DB.training.push({id:Date.now(),empId:e.id,empName:e.name,name:gv('tr-n'),org:gv('tr-o'),type:$('tr-t')?.value||'داخلي',from:$('tr-f')?.value||'',to:$('tr-o2')?.value||'',status:'مجدول'});saveDB();clOv('TRF');$('TRTBL').innerHTML=renderTrRows();toast('تم ✅');});
  });
}
function renderTrRows(){return(DB.training||[]).map((t,i)=>`<tr><td>${i+1}</td><td><strong>${esc(t.empName)}</strong></td><td>${esc(t.name||'—')}</td><td>${esc(t.org||'—')}</td><td>${esc(t.type||'—')}</td><td>${fd(t.from)}</td><td>${fd(t.to)}</td><td><span class="badge bif">${esc(t.status)}</span></td></tr>`).join('')||emRow(8);}

/* PROMOTIONS */
function pgPromo(){
  $('pg-promotions').innerHTML=`
  <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;" class="no-print">
    <div style="font-size:16px;font-weight:700;">🚀 الترقيات</div>
    <button class="btn bp" id="proAddBtn">➕ قرار ترقية</button>
  </div>
  <div class="card"><div class="tw"><table>
    <thead><tr><th>#</th><th>الموظف</th><th>المسمى القديم</th><th>المسمى الجديد</th><th>الراتب القديم (د.ك)</th><th>الراتب الجديد (د.ك)</th><th>التاريخ</th></tr></thead>
    <tbody id="PROTBL">${renderProRows()}</tbody>
  </table></div></div>`;
  $('proAddBtn').addEventListener('click',()=>{
    mkOpOv('PROF','🚀 قرار ترقية',`
    <div class="fgr">
      <div class="fg"><label>الموظف</label><select id="pr-e">${empOpts()}</select></div>
      <div class="fg"><label>المسمى الجديد</label><input id="pr-t"/></div>
      <div class="fg"><label>الراتب الجديد (د.ك)</label><input type="number" step="0.001" id="pr-s"/></div>
      <div class="fg"><label>تاريخ الترقية</label><input type="date" id="pr-d" value="${td()}"/></div>
    </div>
    <div class="fg"><label>مبررات الترقية</label><textarea id="pr-r"></textarea></div>
    <div style="display:flex;gap:8px;justify-content:flex-end;margin-top:12px;">
      <button class="btn bou" onclick="clOv('PROF')">إلغاء</button>
      <button class="btn bp" id="proSaveBtn">💾 اعتماد القرار</button>
    </div>`);
    $('proSaveBtn').addEventListener('click',()=>{const e=resolveP(gv('pr-e'));if(!e){toast('اختر موظفاً','err');return;}const nt=gv('pr-t'),ns2=parseFloat($('pr-s')?.value)||0;if(!DB.promotions)DB.promotions=[];DB.promotions.push({id:Date.now(),empId:e.id,empName:e.name,oldTitle:e.title,newTitle:nt,oldSal:e.salary,newSal:ns2,date:$('pr-d')?.value||'',reason:gv('pr-r')});const arr=resolveArr(gv('pr-e'));const idx=arr.findIndex(x=>x.id===e.id);if(idx>-1){if(nt)arr[idx].title=nt;if(ns2)arr[idx].salary=ns2;}addNotif(e.name,'🚀 تهانينا — تمت الترقية',`تم ترقية ${e.name} إلى ${nt} براتب ${KD(ns2)}`);saveDB();clOv('PROF');$('PROTBL').innerHTML=renderProRows();toast('تم اعتماد الترقية 🚀');});
  });
}
function renderProRows(){return(DB.promotions||[]).map((p,i)=>`<tr><td>${i+1}</td><td><strong>${esc(p.empName)}</strong></td><td>${esc(p.oldTitle||'—')}</td><td><strong>${esc(p.newTitle||'—')}</strong></td><td>${KD(p.oldSal)}</td><td style="font-weight:700;color:#27ae60;">${KD(p.newSal)}</td><td>${fd(p.date)}</td></tr>`).join('')||emRow(7);}

/* WARNINGS */
function pgWarn(){
  $('pg-warnings').innerHTML=`
  <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;" class="no-print">
    <div style="font-size:16px;font-weight:700;">⚠️ الإنذارات</div>
    <button class="btn bdn" id="wrnAddBtn">➕ إنذار جديد</button>
  </div>
  <div class="info-box">⚖️ القانون الكويتي: 3 إنذارات خطية خلال 12 شهراً تُجيز الفصل التأديبي</div>
  <div class="card"><div class="tw"><table>
    <thead><tr><th>#</th><th>الموظف</th><th>نوع الإنذار</th><th>السبب</th><th>التاريخ</th></tr></thead>
    <tbody id="WRNTBL">${renderWrnRows()}</tbody>
  </table></div></div>`;
  $('wrnAddBtn').addEventListener('click',()=>{
    mkOpOv('WRNF','⚠️ إصدار إنذار',`
    <div class="fgr">
      <div class="fg"><label>الموظف</label><select id="wn-e">${empOpts()}</select></div>
      <div class="fg"><label>نوع الإنذار</label><select id="wn-t"><option>إنذار شفهي</option><option>إنذار خطي (الأول)</option><option>إنذار خطي (الثاني)</option><option>إنذار خطي (الثالث — قبل الفصل)</option><option>فصل تأديبي</option></select></div>
      <div class="fg"><label>التاريخ</label><input type="date" id="wn-d" value="${td()}"/></div>
    </div>
    <div class="fg"><label>سبب الإنذار</label><textarea id="wn-r"></textarea></div>
    <div style="display:flex;gap:8px;justify-content:flex-end;margin-top:12px;">
      <button class="btn bou" onclick="clOv('WRNF')">إلغاء</button>
      <button class="btn bdn" id="wrnSaveBtn">⚠️ إصدار الإنذار</button>
    </div>`);
    $('wrnSaveBtn').addEventListener('click',()=>{const e=resolveP(gv('wn-e'));if(!e){toast('اختر موظفاً','err');return;}const wtype=$('wn-t')?.value||'';if(!DB.warnings)DB.warnings=[];DB.warnings.push({id:Date.now(),empId:e.id,empName:e.name,type:wtype,reason:gv('wn-r'),date:$('wn-d')?.value||''});addNotif(e.name,`⚠️ تم إصدار ${wtype}`,`${wtype} للموظف ${e.name} بسبب: ${gv('wn-r')||'—'}`);saveDB();clOv('WRNF');$('WRNTBL').innerHTML=renderWrnRows();toast('تم إصدار الإنذار');});
  });
}
function renderWrnRows(){return(DB.warnings||[]).map((w,i)=>`<tr><td>${i+1}</td><td><strong>${esc(w.empName)}</strong></td><td><span class="badge bdn2">${esc(w.type)}</span></td><td>${esc(w.reason||'—')}</td><td>${fd(w.date)}</td></tr>`).join('')||emRow(5);}

/* NOTIFICATIONS */
function pgNotif(){
  const unread=(DB.notifications||[]).filter(n=>!n.read).length;
  $('pg-notifications').innerHTML=`
  <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;" class="no-print">
    <div style="font-size:16px;font-weight:700;">🔔 الإشعارات <span class="badge bdn2">${unread} جديد</span></div>
    <div style="display:flex;gap:6px;"><button class="btn bp" id="ntfAddBtn">➕ إشعار يدوي</button><button class="btn bgr bsm" onclick="markAllRead()">✔ قراءة الكل</button></div>
  </div>
  <div id="NTFLIST">${renderNtfList()}</div>`;
  $('ntfAddBtn').addEventListener('click',()=>{
    mkOpOv('NTFF','🔔 إرسال إشعار',`
    <div class="fgr">
      <div class="fg"><label>الموظف</label><select id="nt-e">${empOpts()}</select></div>
      <div class="fg"><label>العنوان</label><input id="nt-t" placeholder="عنوان الإشعار"/></div>
    </div>
    <div class="fg"><label>نص الإشعار</label><textarea id="nt-m"></textarea></div>
    <div style="display:flex;gap:8px;justify-content:flex-end;margin-top:12px;">
      <button class="btn bou" onclick="clOv('NTFF')">إلغاء</button>
      <button class="btn bp" id="ntfSaveBtn">💾 إرسال</button>
    </div>`);
    $('ntfSaveBtn').addEventListener('click',()=>{const e=resolveP(gv('nt-e'));if(!e){toast('اختر موظفاً','err');return;}addNotif(e.name,gv('nt-t'),gv('nt-m'));clOv('NTFF');const el=$('NTFLIST');if(el)el.innerHTML=renderNtfList();toast('تم الإرسال ✅');});
  });
}
function renderNtfList(){return(DB.notifications||[]).length?(DB.notifications||[]).slice().reverse().map(n=>`<div class="card" style="display:flex;gap:10px;align-items:flex-start;border-right:3px solid ${n.read?'#ccc':'#e74c3c'};margin-bottom:8px;padding:12px 16px;"><div style="width:10px;height:10px;border-radius:50%;background:${n.read?'#ccc':'#e74c3c'};margin-top:4px;flex-shrink:0;${!n.read?'animation:pulse 1.5s infinite;':''}"></div><div style="flex:1;"><div style="font-weight:700;font-size:12px;">${esc(n.title)}</div><div style="font-size:11px;color:#555;margin-top:1px;">${esc(n.empName)} — ${esc(n.msg||'—')}</div><div style="font-size:10px;color:#aaa;margin-top:3px;">${fd(n.date)}</div></div>${!n.read?`<button class="btn bi bsm" onclick="markNtf(${n.id})">✔ قراءة</button>`:'<span style="font-size:10px;color:#aaa;">✔</span>'}</div>`).join(''):'<div class="card" style="text-align:center;padding:22px;color:#999;">لا توجد إشعارات</div>';}
function markNtf(id){DB.notifications=(DB.notifications||[]).map(n=>n.id===id?{...n,read:true}:n);saveDB();updBell();const el=$('NTFLIST');if(el)el.innerHTML=renderNtfList();}
function markAllRead(){DB.notifications=(DB.notifications||[]).map(n=>({...n,read:true}));saveDB();updBell();pgNotif();}

/* FILES */
function pgFiles(){
  $('pg-files').innerHTML=`
  <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;" class="no-print">
    <div style="font-size:16px;font-weight:700;">📁 مستودع الملفات</div>
    <button class="btn bp" id="genUpBtn">📤 رفع ملف</button>
  </div>
  <input type="file" id="genFileInp" style="display:none;" multiple/>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-bottom:16px;">
    <div class="card" style="margin-bottom:0;">
      <div style="font-weight:700;font-size:13px;margin-bottom:10px;">📊 جداول Excel ومتابعة الأعمال</div>
      <div class="upz" id="xlsUpz"><div style="font-size:22px;">📊</div><div style="font-size:12px;font-weight:700;margin-top:4px;">رفع ملف Excel</div></div>
      <input type="file" id="xlsInp" style="display:none;" accept=".xlsx,.xls,.csv"/>
      <div id="XLSFILES" style="margin-top:8px;">${(DB.generalFiles||[]).filter(f=>f.cat==='excel').map((f,i)=>`<div class="fi"><span>📊</span><div style="flex:1;font-size:11px;"><strong>${esc(f.name)}</strong><br/><span style="color:#888;">${fd(f.date)}</span></div><button class="btn bi bsm" onclick="dlF('${esc(f.data)}','${esc(f.name)}')">⬇️</button></div>`).join('')||'<div style="font-size:11px;color:#999;padding:6px 0;">لا توجد ملفات</div>'}</div>
    </div>
    <div class="card" style="margin-bottom:0;">
      <div style="font-weight:700;font-size:13px;margin-bottom:10px;">📄 التقارير والوثائق</div>
      <div class="upz" id="docUpz"><div style="font-size:22px;">📄</div><div style="font-size:12px;font-weight:700;margin-top:4px;">رفع تقرير / وثيقة</div></div>
      <input type="file" id="docInp" style="display:none;" accept=".pdf,.doc,.docx"/>
      <div id="DOCFILES" style="margin-top:8px;">${(DB.generalFiles||[]).filter(f=>f.cat==='doc').map((f,i)=>`<div class="fi"><span>📄</span><div style="flex:1;font-size:11px;"><strong>${esc(f.name)}</strong><br/><span style="color:#888;">${fd(f.date)}</span></div><button class="btn bi bsm" onclick="dlF('${esc(f.data)}','${esc(f.name)}')">⬇️</button></div>`).join('')||'<div style="font-size:11px;color:#999;padding:6px 0;">لا توجد ملفات</div>'}</div>
    </div>
  </div>
  <div style="font-weight:700;font-size:13px;margin-bottom:10px;">📎 جميع الملفات المرفوعة</div>
  <div id="ALLFILES">${renderAllFiles()}</div>`;
  const upFile=(ev,cat)=>{Array.from(ev.target.files).forEach(f=>{const r=new FileReader();r.onload=e=>{if(!DB.generalFiles)DB.generalFiles=[];DB.generalFiles.push({name:f.name,size:f.size,data:e.target.result,date:td(),cat});saveDB();pgFiles();toast('تم الرفع ✅');};r.readAsDataURL(f);});ev.target.value='';};
  $('genUpBtn').addEventListener('click',()=>$('genFileInp').click());
  $('genFileInp').addEventListener('change',ev=>upFile(ev,'general'));
  $('xlsUpz').addEventListener('click',()=>$('xlsInp').click());$('xlsInp').addEventListener('change',ev=>upFile(ev,'excel'));
  $('docUpz').addEventListener('click',()=>$('docInp').click());$('docInp').addEventListener('change',ev=>upFile(ev,'doc'));
}
function renderAllFiles(){return(DB.generalFiles||[]).map((f,i)=>`<div class="fi"><span style="font-size:18px;">${fi(f.name)}</span><div style="flex:1;"><div style="font-weight:700;font-size:12px;">${esc(f.name)}</div><div style="font-size:10px;color:#888;">${fd(f.date)} · ${(f.size/1024).toFixed(1)} KB</div></div><button class="btn bi bsm" onclick="dlF('${esc(f.data)}','${esc(f.name)}')">⬇️</button><button class="btn bdn bsm" onclick="if(!DB.generalFiles)DB.generalFiles=[];DB.generalFiles.splice(${i},1);saveDB();const el=$('ALLFILES');if(el)el.innerHTML=renderAllFiles()">🗑️</button></div>`).join('')||'<div style="text-align:center;padding:22px;color:#999;">لا توجد ملفات</div>';}

/* REPORTS */


/* LOCATIONS */
function pgLoc(){
  $('pg-locations').innerHTML=`
  <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;" class="no-print">
    <div style="font-size:16px;font-weight:700;">📍 فروع الشركة</div>
    <button class="btn bp" id="locAddBtn">➕ إضافة فرع</button>
  </div>
  <div id="LOCLIST">${(DB.locations||[]).map(l=>`<div class="card" style="display:flex;align-items:center;gap:12px;padding:14px 16px;margin-bottom:8px;"><span style="font-size:28px;">📍</span><div style="flex:1;"><div style="font-weight:700;font-size:13px;">${esc(l.name)}</div><div style="font-size:11px;color:#888;margin-top:2px;">${esc(l.address)}</div></div><span class="badge bok2">${esc(l.type)}</span><button class="btn bdn bsm" onclick="if(!DB.locations)DB.locations=[];DB.locations=DB.locations.filter(x=>x.id!==${l.id});saveDB();pgLoc()">🗑️</button></div>`).join('')}</div>`;
  $('locAddBtn').addEventListener('click',()=>{
    mkOpOv('LOCF','📍 إضافة فرع',`
    <div class="fg"><label>اسم الفرع</label><input id="lc-n"/></div>
    <div class="fg"><label>العنوان التفصيلي</label><input id="lc-a" placeholder="المحافظة، المنطقة، الشارع"/></div>
    <div class="fg"><label>النوع</label><select id="lc-t"><option>مقر رئيسي</option><option>فرع</option><option>مصنع</option><option>مستودع</option><option>معرض</option></select></div>
    <div style="display:flex;gap:8px;justify-content:flex-end;margin-top:12px;">
      <button class="btn bou" onclick="clOv('LOCF')">إلغاء</button>
      <button class="btn bp" id="locSaveBtn">💾 حفظ</button>
    </div>`);
    $('locSaveBtn').addEventListener('click',()=>{const n=gv('lc-n');if(!n){toast('أدخل اسم الفرع','err');return;}if(!DB.locations)DB.locations=[];DB.locations.push({id:Date.now(),name:n,address:gv('lc-a'),type:$('lc-t')?.value||'فرع'});saveDB();clOv('LOCF');pgLoc();toast('تم ✅');});
  });
}

/* USERS */
function pgUsers(){
  const ca=CU?.role==='مدير عام'||CU?.role==='نائب مدير عام';
  $('pg-users').innerHTML=`
  <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;" class="no-print">
    <div style="font-size:16px;font-weight:700;">🔐 إدارة المستخدمين</div>
    ${ca?'<button class="btn bp" id="usrAddBtn">➕ إضافة مستخدم</button>':''}
  </div>
  ${!ca?'<div class="warn-box">⚠️ إضافة المستخدمين متاحة للمدير العام ونائبه فقط</div>':''}
  <div class="card"><div class="tw"><table>
    <thead><tr><th>#</th><th>الاسم</th><th>اسم المستخدم</th><th>الصلاحية</th><th>الحالة</th><th>آخر دخول</th><th class="no-print">إجراءات</th></tr></thead>
    <tbody id="USRTBL">${renderUsrRows(ca)}</tbody>
  </table></div></div>`;
  if(ca){
    $('usrAddBtn').addEventListener('click',()=>{
      mkOpOv('USRF','➕ إضافة مستخدم جديد',`
      <div class="warn-box">يتطلب موافقة المدير العام أو نائبه</div>
      <div class="fgr">
        <div class="fg"><label>الاسم الكامل</label><input id="nu-n"/></div>
        <div class="fg"><label>اسم المستخدم</label><input id="nu-u"/></div>
        <div class="fg"><label>كلمة المرور</label><input type="password" id="nu-p"/></div>
        <div class="fg"><label>الصلاحية</label><select id="nu-r"><option>مشرف موارد بشرية</option><option>مدير قسم</option><option>موظف (اطلاع فقط)</option></select></div>
      </div>
      <div style="display:flex;gap:8px;justify-content:flex-end;margin-top:12px;">
        <button class="btn bou" onclick="clOv('USRF')">إلغاء</button>
        <button class="btn bp" id="usrSaveBtn">💾 إضافة</button>
      </div>`);
      $('usrSaveBtn').addEventListener('click',()=>{const n=gv('nu-n'),u=gv('nu-u'),p=gv('nu-p');if(!n||!u||!p){toast('أكمل جميع الحقول','err');return;}if((DB.users||[]).find(x=>x.username===u)){toast('اسم المستخدم موجود بالفعل','err');return;}if(!DB.users)DB.users=[];DB.users.push({id:Date.now(),name:n,username:u,password:p,role:$('nu-r')?.value||'مشرف موارد بشرية',status:'نشط',lastLogin:''});saveDB();clOv('USRF');$('USRTBL').innerHTML=renderUsrRows(ca);toast('تم إضافة المستخدم ✅');
        // إنشاء حساب مزامنة سحابية للمستخدم الجديد (best-effort) — قد يحتاج تأكيد إيميل يدوي من مزود الخدمة قبل أول استخدام
        supaSignUp(u,p);
      });
    });
  }
}
function renderUsrRows(ca){return(DB.users||[]).map((u,i)=>`<tr><td>${i+1}</td><td><strong>${esc(u.name)}</strong></td><td dir="ltr" style="font-family:monospace;">${esc(u.username)}</td><td><span class="badge bpr">${esc(u.role)}</span></td><td><span class="badge ${u.status==='نشط'?'bok2':'bdn2'}">${esc(u.status)}</span></td><td>${esc(u.lastLogin||'—')}</td><td class="no-print">${u.id!==CU?.id&&ca?`<button class="btn bdn bsm" onclick="delUsr(${u.id})">🗑️</button>`:'—'}</td></tr>`).join('');}
function delUsr(id){if(!confirm('حذف هذا المستخدم؟'))return;DB.users=(DB.users||[]).filter(u=>u.id!==id);saveDB();pgUsers();}

/* SETTINGS */
function pgSettings(){
  $('pg-settings').innerHTML=`
  <div style="font-size:16px;font-weight:700;margin-bottom:14px;">⚙️ الإعدادات</div>
  <div class="card">
    <div style="font-weight:700;font-size:13px;margin-bottom:12px;">🏢 بيانات الشركة</div>
    <div class="fgr">
      <div class="fg"><label>اسم الشركة</label><input id="stn" value="${esc(DB.settings.companyName)}"/></div>
      <div class="fg"><label>الوصف النصي</label><input id="stt" value="${esc(DB.settings.tagline)}"/></div>
    </div>
    <div class="fg"><label>شعار الشركة (صورة)</label><input type="file" accept="image/*" id="logoInp" style="font-size:12px;"/></div>
    <button class="btn bp" id="stgSaveBtn" style="margin-top:10px;">💾 حفظ الإعدادات</button>
  </div>
  <div class="card">
    <div style="font-weight:700;font-size:13px;margin-bottom:10px;">🔑 معلومات النظام</div>
    <div style="font-size:12px;line-height:2.5;color:#555;">
      <div>الإصدار: <strong>SLKR-HR System v6.0 — Kuwait Edition</strong></div>
      <div>الرقم التسلسلي: <strong style="color:#c8a84b;">${esc(DB.serial)}</strong></div>
      <div>مؤسس النظام: <strong>صالح صقر الجاسم (H-002)</strong></div>
      <div>© 2025 SLKR-HR Solutions — جميع الحقوق محفوظة</div>
      <div>القانون المطبق: <strong>قانون العمل الكويتي رقم 6 لسنة 2010</strong></div>
      <div>العملة: <strong>الدينار الكويتي (KWD) — 3 خانات عشرية</strong></div>
    </div>
    <button onclick="if(confirm('تحذير: سيتم مسح جميع البيانات! هل أنت متأكد؟')){try{localStorage.removeItem('mh6');}catch(e){}location.reload();}" style="margin-top:14px;padding:7px 14px;border:1.5px solid #e74c3c;border-radius:7px;background:transparent;color:#e74c3c;cursor:pointer;font-family:inherit;font-size:11px;">⚠️ مسح الكل وإعادة التعيين</button>
  </div>`;
  $('stgSaveBtn').addEventListener('click',()=>{DB.settings.companyName=$('stn').value;DB.settings.tagline=$('stt').value;saveDB();applyBrand();toast('تم حفظ الإعدادات ✅');});
  $('logoInp').addEventListener('change',function(ev){
  var f=ev.target.files[0];if(!f)return;
  var r=new FileReader();
  r.onerror=function(){toast('⚠️ تعذر قراءة الملف — جرّب صورة JPG أو PNG','err');};
  r.onload=function(e){
    smartCompressImage(f, e.target.result, function(compressed){
      DB.settings.logo=compressed;
      saveDB();applyBrand();
    // تحديث المعاينة في صفحة الإعدادات
    var pw=document.getElementById('logoPrevWrap');
    if(pw)pw.innerHTML='<img src="'+compressed+'" class="logo-preview" id="logoPreview" alt="شعار الشركة"/><div style="font-size:11px;color:#888;margin-top:6px;">انقر لتغيير الشعار</div><input type="file" accept="image/*" id="logoInp" style="display:none;"/>';
    if(pw)pw.addEventListener('click',function(){document.getElementById('logoInp')&&document.getElementById('logoInp').click();});
    toast('تم رفع الشعار بنجاح ✅');
    },function(wasHeic){
      toast(wasHeic?'⚠️ صورة آيفون (HEIC) تحتاج اتصال إنترنت للتحويل التلقائي — تأكد من الاتصال وحاول مرة أخرى، أو غيّر تنسيق الكاميرا إلى "الأكثر توافقاً"':'⚠️ تعذر تحميل هذه الصورة — جرّب صورة JPG أو PNG','err');
    });
  };
  r.readAsDataURL(f);
});
}

/* QUICK LOGO */
function openQL(){
  mkOpOv('QLF','🎨 تخصيص الشعار',`
  <div class="fg"><label>اسم الشركة</label><input id="ql-n" value="${esc(DB.settings.companyName)}"/></div>
  <div class="fg"><label>الوصف</label><input id="ql-t" value="${esc(DB.settings.tagline)}"/></div>
  <div class="fg"><label>صورة الشعار</label><input type="file" accept="image/*" id="ql-logo" style="font-size:12px;"/></div>
  <div style="display:flex;gap:8px;justify-content:flex-end;margin-top:12px;">
    <button class="btn bou" onclick="clOv('QLF')">إلغاء</button>
    <button class="btn bp" id="qlSaveBtn">💾 حفظ</button>
  </div>`);
  $('qlSaveBtn').addEventListener('click',()=>{DB.settings.companyName=$('ql-n')?.value||DB.settings.companyName;DB.settings.tagline=$('ql-t')?.value||DB.settings.tagline;const f=$('ql-logo')?.files[0];if(f){const r=new FileReader();r.onload=e=>{DB.settings.logo=e.target.result;saveDB();applyBrand();clOv('QLF');toast('تم ✅');};r.readAsDataURL(f);}else{saveDB();applyBrand();clOv('QLF');toast('تم ✅');}});
}

/* ══════════════════════════════════════════
   INIT
═══════════════════════════════════════════ */

/* تحكم في حجم صور الموظفين */
function initPhotoSize(){
  var slider = document.getElementById('photoSizeSlider');
  var val = document.getElementById('photoSizeVal');
  if(!slider) return;
  // استرجاع الحجم المحفوظ
  var saved=null;
  try{saved = localStorage.getItem('mh_photo_size');}catch(e){}
  if(saved){ slider.value=saved; applyPhotoSize(saved); val.textContent=saved+'px'; }
  slider.addEventListener('input', function(){
    var s = this.value;
    val.textContent = s+'px';
    applyPhotoSize(s);
    try{localStorage.setItem('mh_photo_size', s);}catch(e){}
  });
}
function applyPhotoSize(size){
  document.documentElement.style.setProperty('--photo-size', size+'px');
  // تحديث الصفحة الحالية لإعادة رسم الصور
  var pages={dashboard:pgDash,search:pgSearch,staff:pgStaff,
    appointments:pgApts,org:pgOrg,salaries:pgSal,overtime:pgOT,
    bonuses:pgBonus,endservice:pgEnd,leaves:pgLeaves,permissions:pgPerms,
    attendance:pgAtt,evaluations:pgEvals,evalfiles:pgEvalFiles,
    selfeval:pgSelf,peereval:pgPeer,approvals:pgAppr,training:pgTrain,
    promotions:pgPromo,warnings:pgWarn,notifications:pgNotif,
    files:pgFiles,reports:pgReports,locations:pgLoc,backup:pgBackup,licenseinfo:pgLicenseInfo,users:pgUsers,settings:pgSettings};
  if(pages[curS]) pages[curS]();
}


/* تعديل حجم صورة الملف */
var _pfPhotoSz = 80;
function resizePFPhoto(delta){
  _pfPhotoSz = Math.min(140, Math.max(50, _pfPhotoSz + delta));
  var area = document.getElementById('pfPhotoArea');
  var lbl  = document.getElementById('pfPhotoSize');
  if(area){ area.style.width  = _pfPhotoSz+'px'; area.style.height = _pfPhotoSz+'px'; }
  if(lbl)  lbl.textContent = _pfPhotoSz+'px';
}

var _vpPhotoSz = 72;
function resizeVPPhoto(delta){
  _vpPhotoSz = Math.min(160, Math.max(40, _vpPhotoSz + delta));
  document.documentElement.style.setProperty('--view-photo-size', _vpPhotoSz+'px');
  var lbl = document.getElementById('vpPhotoSize');
  if(lbl) lbl.textContent = _vpPhotoSz+'px';
}


var _pfSz=80,_vpSz=72;
function resizePF(d){_pfSz=Math.min(150,Math.max(50,_pfSz+d));var a=document.getElementById('pfPhotoArea');var l=document.getElementById('pfSzLbl');if(a){a.style.width=_pfSz+'px';a.style.height=_pfSz+'px';}if(l)l.textContent=_pfSz+'px';}
function resizeVP(d){_vpSz=Math.min(160,Math.max(40,_vpSz+d));document.documentElement.style.setProperty('--view-photo-size',_vpSz+'px');var l=document.getElementById('vpSzLbl');if(l)l.textContent=_vpSz+'px';}

/* ضغط الصورة قبل الحفظ لتجنب خطأ localStorage */
var _heic2anyLoading=null;
function loadHeic2Any(cb,fail){
  if(typeof heic2any!=='undefined'){cb();return;}
  if(_heic2anyLoading){_heic2anyLoading.then(cb,fail);return;}
  _heic2anyLoading=new Promise(function(resolve,reject){
    var s=document.createElement('script');
    s.src='https://cdnjs.cloudflare.com/ajax/libs/heic2any/0.0.4/heic2any.min.js';
    s.onload=function(){resolve();};
    s.onerror=function(){reject();};
    document.head.appendChild(s);
  });
  _heic2anyLoading.then(cb,fail);
}
/* يحاول ضغط الصورة مباشرة، وإذا فشلت (مثل صور آيفون بصيغة HEIC التي لا يفهمها المتصفح)
   يحوّلها تلقائياً إلى JPEG عبر مكتبة heic2any ثم يعيد المحاولة — بدون أي تدخل من المستخدم */
function smartCompressImage(file, dataURL, callback, onError){
  compressImage(dataURL, callback, function(){
    var isHeic=/heic|heif/i.test((file&&file.type)||'')||/\.(heic|heif)$/i.test((file&&file.name)||'');
    if(!isHeic||!file){ if(onError) onError(false); return; }
    loadHeic2Any(function(){
      heic2any({blob:file,toType:'image/jpeg',quality:0.9}).then(function(blob){
        var r2=new FileReader();
        r2.onload=function(e2){ compressImage(e2.target.result, callback, function(){ if(onError) onError(true); }); };
        r2.onerror=function(){ if(onError) onError(true); };
        r2.readAsDataURL(blob);
      }).catch(function(){ if(onError) onError(true); });
    }, function(){ if(onError) onError(true); });
  });
}
function compressImage(dataURL, callback, onError){
  var img = new Image();
  img.onload = function(){
    try{
      var canvas = document.createElement('canvas');
      var MAX = 640; // أقصى عرض أو ارتفاع بالبكسل — جودة عالية تكفي لأكبر حجم عرض في النظام (160px) حتى على شاشات عالية الدقة
      var w = img.width, h2 = img.height;
      if(!w||!h2){if(onError)onError();return;}
      if(w > h2){ if(w > MAX){h2=Math.round(h2*MAX/w);w=MAX;} }
      else       { if(h2> MAX){w=Math.round(w*MAX/h2);h2=MAX;} }
      canvas.width = w; canvas.height = h2;
      var ctx = canvas.getContext('2d');
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';
      ctx.drawImage(img, 0, 0, w, h2);
      callback(canvas.toDataURL('image/jpeg', 0.9)); // جودة 90% — صور واضحة عالية الجودة لكل الموظفين
    }catch(e){if(onError)onError();}
  };
  img.onerror = function(){ if(onError) onError(); };
  img.src = dataURL;
}


function pgAuditLog(){
  var logs=DB.auditLog||[];
  var rows='';
  if(!logs.length){
    rows=emRow(5,'لا توجد سجلات نشاط بعد');
  } else {
    logs.forEach(function(l){
      var rc=l.role==='مدير عام'?'bgold':l.role==='نائب مدير عام'?'bpr':'bok2';
      rows+='<tr>'
        +'<td style="font-size:11px;color:#888;">'+esc(l.date||'')+'<br/>'+esc(l.time||'')+'</td>'
        +'<td><div style="font-weight:700;">'+esc(l.user||'')+'</div>'
        +'<span class="badge '+rc+'" style="font-size:9px;">'+esc(l.role||'')+'</span></td>'
        +'<td style="font-family:monospace;font-size:11px;">'+esc(l.username||'')+'</td>'
        +'<td><span class="badge bif">'+esc(l.action||'')+'</span></td>'
        +'<td style="font-size:11px;">'+esc(l.details||'—')+'</td>'
        +'</tr>';
    });
  }
  $('pg-auditlog').innerHTML=''
    +'<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;" class="no-print">'
    +'<div style="font-size:16px;font-weight:700;">📋 سجل النشاط</div>'
    +'<button class="btn bgr bsm" onclick="clearAuditLog()">🗑️ مسح السجل</button>'
    +'</div>'
    +'<div class="info-box">📋 يُظهر كل إجراء مع اسم المستخدم والوقت</div>'
    +'<div class="card"><div class="tw"><table>'
    +'<thead><tr><th>التاريخ والوقت</th><th>المستخدم</th><th>اسم الدخول</th><th>الإجراء</th><th>التفاصيل</th></tr></thead>'
    +'<tbody>'+rows+'</tbody>'
    +'</table></div></div>';
}


function logAction(action, details){
  if(!DB.auditLog) DB.auditLog=[];
  DB.auditLog.unshift({
    id:Date.now(),
    user:CU?CU.name:'—',
    username:CU?CU.username:'—',
    role:CU?CU.role:'—',
    action:action,
    details:details||'',
    date:td(),
    time:new Date().toLocaleTimeString('en-GB')
  });
  if(DB.auditLog.length>500) DB.auditLog=DB.auditLog.slice(0,500);
}


function clearAuditLog(){if(confirm('مسح كامل سجل النشاط؟')){DB.auditLog=[];saveDB();if(curS==='auditlog')pgAuditLog();}}

/* ══════════════════════════════════════════════════════════
   نظام الترخيص والتفعيل
   المطور: SLKR-HR Solutions
══════════════════════════════════════════════════════════ */




/* ══ نسخة احتياطية واستعادة ════════════════════════════ */

function triggerBackupInput(){var el=document.getElementById('backupInp');if(el)el.click();}
function exportBackup(){
  var data = JSON.stringify(DB, null, 2);
  var date = new Date().toLocaleDateString('en-GB').replace(/\//g,'-');
  var filename = 'SLKR_HR_Backup_' + date + '.json';
  var blob = new Blob([data], {type:'application/json'});
  var url = URL.createObjectURL(blob);
  var a = document.createElement('a');
  a.href=url; a.download=filename; a.click();
  URL.revokeObjectURL(url);
  logAction('تصدير نسخة احتياطية', filename);
  toast('✅ تم تصدير النسخة الاحتياطية: '+filename);
}

function importBackup(file){
  if(!file) return;
  var r = new FileReader();
  r.onload = function(e){
    try{
      var data = JSON.parse(e.target.result);
      if(!data.serial) throw new Error('ملف غير صالح');
      if(!confirm('استعادة النسخة الاحتياطية؟ سيتم استبدال البيانات الحالية.')) return;
      DB = Object.assign(defDB(), data);
      saveDB();
      logAction('استعادة نسخة احتياطية','');
      toast('✅ تم استعادة البيانات بنجاح');
      buildNav(); applyBrand(); updBell(); showS('dashboard');
    }catch(err){
      toast('❌ ملف غير صالح أو تالف','err');
    }
  };
  r.readAsText(file);
}

function pgBackup(){
  $('pg-backup').innerHTML = ''
    +'<div style="font-size:16px;font-weight:700;margin-bottom:14px;">💾 النسخة الاحتياطية والاستعادة</div>'
    +'<div class="info-box">💾 احفظ نسخة من بيانات النظام بشكل دوري لتجنب فقدانها. يُنصح بالنسخ الاحتياطي أسبوعياً.</div>'
    +'<div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;">'
    // تصدير
    +'<div class="card" style="text-align:center;padding:28px;">'
    +'<div style="font-size:48px;margin-bottom:12px;">📤</div>'
    +'<div style="font-size:15px;font-weight:700;margin-bottom:8px;">تصدير النسخة الاحتياطية</div>'
    +'<div style="font-size:12px;color:#888;margin-bottom:16px;">تنزيل ملف JSON يحتوي على جميع بيانات النظام</div>'
    +'<button class="btn bp" style="width:100%;" onclick="exportBackup()">⬇️ تصدير النسخة الاحتياطية</button>'
    +'</div>'
    // استعادة
    +'<div class="card" style="text-align:center;padding:28px;">'
    +'<div style="font-size:48px;margin-bottom:12px;">📥</div>'
    +'<div style="font-size:15px;font-weight:700;margin-bottom:8px;">استعادة من نسخة احتياطية</div>'
    +'<div style="font-size:12px;color:#888;margin-bottom:16px;">رفع ملف JSON لاستعادة البيانات المحفوظة</div>'
    +'<div class="backup-zone" onclick="triggerBackupInput()">'
    +'<div style="font-size:22px;">📁</div>'
    +'<div style="font-size:12px;font-weight:700;margin-top:6px;">انقر لاختيار ملف النسخة الاحتياطية</div>'
    +'<div style="font-size:10px;color:#888;margin-top:4px;">ملف بامتداد .json فقط</div>'
    +'</div>'
    +'<input type="file" id="backupInp" accept=".json" style="display:none;" onchange="importBackup(this.files[0]);this.value=\'\';"/>'
    +'</div>'
    +'</div>'
    // معلومات النسخة الحالية
    +'<div class="card" style="margin-top:14px;">'
    +'<div class="ct" style="margin-bottom:12px;">📊 معلومات قاعدة البيانات الحالية</div>'
    +'<div style="display:grid;grid-template-columns:repeat(4,1fr);gap:10px;text-align:center;">'
    +[
      ['👔',(DB.employees||[]).filter(e=>e.isMgr).length,'مدير'],
      ['👥',(DB.employees||[]).filter(e=>!e.isMgr).length,'موظف'],
      ['🌴',(DB.leaves||[]).length,'إجازة'],
      ['📋',(DB.auditLog||[]).length,'سجل نشاط']
    ].map(function(c){return '<div class="sc" style="margin-bottom:0;"><div class="sc-i">'+c[0]+'</div><div class="sc-v">'+c[1]+'</div><div class="sc-l">'+c[2]+'</div></div>';}).join('')
    +'</div>'
    +'</div>';
}

/* ══ عقد الترخيص ════════════════════════════════════════ */
function pgLicenseInfo(){
  var licInfo = getLicenseInfo();
  var lic = licInfo ? licInfo.code : 'غير مفعّل';
  var devFP = licInfo ? licInfo.device : getDeviceFingerprint();
  var isMatch = licInfo ? licInfo.isMatch : false;
  $('pg-licenseinfo').innerHTML = ''
    +'<div style="font-size:16px;font-weight:700;margin-bottom:14px;">📄 عقد الترخيص ومعلومات النظام</div>'
    +'<div class="card">'
    +'<div style="text-align:center;padding:16px;border-bottom:2px solid #c8a84b;margin-bottom:16px;">'
    +'<div style="font-size:32px;margin-bottom:8px;">📄</div>'
    +'<div style="font-size:18px;font-weight:900;color:#1a1a2e;">اتفاقية ترخيص المستخدم النهائي</div>'
    +'<div style="font-size:12px;color:#888;margin-top:4px;">End User License Agreement (EULA)</div>'
    +'</div>'
    +'<div style="font-size:12px;line-height:2.5;color:#1a1a2e;padding:0 8px;">'
    +'<div style="font-weight:700;font-size:13px;margin-bottom:8px;">1. حقوق الملكية</div>'
    +'<div style="color:#555;margin-bottom:12px;">هذا النظام محمي بموجب قوانين حقوق الملكية الفكرية. جميع الحقوق محفوظة لـ SLKR-HR Solutions. يُمنح المرخص له حق الاستخدام الشخصي أو المؤسسي فقط.</div>'
    +'<div style="font-weight:700;font-size:13px;margin-bottom:8px;">2. الاستخدام المسموح به</div>'
    +'<div style="color:#555;margin-bottom:12px;">يحق للمرخص له استخدام النظام على الأجهزة المملوكة له، وتخصيص البيانات وفق احتياجاته، والحصول على التحديثات والدعم الفني خلال فترة الترخيص.</div>'
    +'<div style="font-weight:700;font-size:13px;margin-bottom:8px;">3. الاستخدام المحظور</div>'
    +'<div style="color:#555;margin-bottom:12px;">يُحظر إعادة بيع النظام أو توزيعه أو نسخه بدون إذن خطي مسبق. يُحظر إزالة علامات حقوق الملكية أو تعديل كود النظام الجوهري.</div>'
    +'<div style="font-weight:700;font-size:13px;margin-bottom:8px;">4. إخلاء المسؤولية</div>'
    +'<div style="color:#555;margin-bottom:12px;">يُقدَّم النظام "كما هو". لا يتحمل المطور مسؤولية أي خسائر ناتجة عن استخدام النظام. يتحمل المستخدم مسؤولية النسخ الاحتياطية وصحة البيانات.</div>'
    +'<div style="font-weight:700;font-size:13px;margin-bottom:8px;">5. القانون المطبّق</div>'
    +'<div style="color:#555;">تخضع هذه الاتفاقية لقوانين دولة الكويت. أي نزاع يُحسم أمام المحاكم الكويتية المختصة.</div>'
    +'</div>'
    +'<div style="background:rgba(200,168,75,.08);border:1.5px solid #c8a84b;border-radius:9px;padding:14px;margin-top:16px;display:grid;grid-template-columns:1fr 1fr;gap:10px;font-size:12px;">'
    +'<div><div style="color:#888;font-size:10px;">رقم الترخيص</div><div style="font-weight:700;color:#c8a84b;font-family:monospace;">'+esc(lic)+'</div></div>'
    +'<div><div style="color:#888;font-size:10px;">إصدار النظام</div><div style="font-weight:700;">SLKR-HR System v8.0</div></div>'+'<div><div style="color:#888;font-size:10px;">تاريخ انتهاء الترخيص</div><div style="font-weight:700;color:'+(licInfo&&new Date(licInfo.expiry)>new Date()?'#27ae60':'#e74c3c')+';">'+( licInfo?licInfo.expiry:'غير محدد')+'</div></div>'
    +'<div><div style="color:#888;font-size:10px;">الرقم التسلسلي</div><div style="font-weight:700;font-family:monospace;">'+esc(DB.serial||'—')+'</div></div>'
    +'<div><div style="color:#888;font-size:10px;">بصمة الجهاز</div><div style="font-weight:700;font-family:monospace;font-size:10px;color:'+(isMatch?'#27ae60':'#e74c3c')+';">'+esc(devFP)+(isMatch?' ✅':' ❌')+'</div></div>'+'<div><div style="color:#888;font-size:10px;">المطور</div><div style="font-weight:700;">SLKR-HR Solutions</div></div>'
    +'</div>'
    +'<div style="display:flex;gap:8px;margin-top:14px;" class="no-print">'
    +'<button class="btn bgr bsm" onclick="window.print()">🖨️ طباعة العقد</button>'
    +'<button class="btn bdn bsm" onclick="resetLicense()">🔓 إلغاء التفعيل</button>'
    +'</div>'
    +'</div>';
}


/* ══ تقارير PDF احترافية ════════════════════════════════ */

function openPDFReport(type) {
  var w = window.open('','_blank');
  if (!w) return;
  var co = DB.settings.companyName || 'SLKR-HR';
  var dt = new Date().toLocaleDateString('en-GB',{weekday:'long',year:'numeric',month:'long',day:'numeric'});
  var logo = DB.settings.logo
    ? '<img src="'+DB.settings.logo+'" style="width:60px;height:60px;border-radius:50%;object-fit:cover;margin-bottom:8px;"/>'
    : '<div style="font-size:40px;margin-bottom:8px;">🏢</div>';

  var content = '';
  var title = '';

  if (type === 'salaries') {
    title = 'كشف الرواتب الشامل';
    var all = allP();
    var total = all.reduce(function(a,e){return a+ns(e);},0);
    var rows = all.map(function(e,i){
      var isMgr = !!e.isMgr;
      return '<tr><td>'+(i+1)+'</td><td>'+esc(e.empNo||'')+'</td><td>'+esc(e.name)+'</td>'
        +'<td>'+esc(isMgr?'مدير':'موظف')+'</td><td>'+esc(e.dept||'')+'</td>'
        +'<td>'+KD(e.salary)+'</td><td>'+KD((e.housing||0)+(e.transport||0)+(e.other||0))+'</td>'
        +'<td>'+KD(e.deductions)+'</td><td style="font-weight:700;color:#27ae60;">'+KD(ns(e))+'</td></tr>';
    }).join('');
    content = '<div class="pdf-total">'
      +'<span class="pdf-total-label">إجمالي الرواتب الصافية</span>'
      +'<span class="pdf-total-val">'+KD(total)+'</span></div>'
      +'<table class="pdf-table"><thead><tr><th>#</th><th>الرقم</th><th>الاسم</th><th>الفئة</th><th>القسم</th><th>الأساسي</th><th>البدلات</th><th>الخصومات</th><th>الصافي</th></tr></thead>'
      +'<tbody>'+rows+'</tbody></table>';

  } else if (type === 'employees') {
    title = 'قائمة الموظفين الكاملة';
    var all2 = allP();
    var rows2 = all2.map(function(e,i){
      return '<tr><td>'+(i+1)+'</td><td>'+esc(e.empNo||'')+'</td><td>'+esc(e.name)+'</td>'
        +'<td>'+esc(e.title||'')+'</td><td>'+esc(e.dept||'')+'</td>'
        +'<td>'+esc(e.hire||'')+'</td>'
        +'<td><span style="background:'+(e.status==='نشط'?'#d5f5e3':'#fde8e8')+';padding:2px 8px;border-radius:12px;font-size:10px;">'+esc(e.status||'')+'</span></td>'
        +'<td>'+esc(e.nationality||'')+'</td></tr>';
    }).join('');
    content = '<table class="pdf-table"><thead><tr><th>#</th><th>الرقم</th><th>الاسم</th><th>المسمى</th><th>القسم</th><th>تاريخ التعيين</th><th>الحالة</th><th>الجنسية</th></tr></thead>'
      +'<tbody>'+rows2+'</tbody></table>';

  } else if (type === 'leaves') {
    title = 'تقرير الإجازات';
    var lvs = DB.leaves || [];
    var rows3 = lvs.map(function(l,i){
      return '<tr><td>'+(i+1)+'</td><td>'+esc(l.empName||'')+'</td>'
        +'<td>'+esc(l.type||'')+'</td><td>'+fd(l.from)+'</td><td>'+fd(l.to)+'</td>'
        +'<td>'+( l.days||0)+'</td>'
        +'<td><span style="background:'+(l.status==='موافق'?'#d5f5e3':l.status==='مرفوض'?'#fde8e8':'#fef9e7')+';padding:2px 8px;border-radius:12px;font-size:10px;">'+esc(l.status||'')+'</span></td></tr>';
    }).join('');
    content = '<table class="pdf-table"><thead><tr><th>#</th><th>الموظف</th><th>النوع</th><th>من</th><th>إلى</th><th>أيام</th><th>الحالة</th></tr></thead>'
      +'<tbody>'+(rows3||'<tr><td colspan="7" style="text-align:center;padding:20px;color:#999;">لا توجد إجازات</td></tr>')+'</tbody></table>';

  } else if (type === 'attendance') {
    title = 'تقرير الحضور والانصراف';
    var atts = (DB.attendance||[]).slice(0,50);
    var rows4 = atts.map(function(a,i){
      var late = a.inTime && a.inTime > '08:15';
      return '<tr><td>'+(i+1)+'</td><td>'+esc(a.empName||'')+'</td><td>'+fd(a.date)+'</td>'
        +'<td>'+esc(a.inTime||'')+'</td><td>'+esc(a.outTime||'')+'</td>'
        +'<td>'+esc(a.status||'')+'</td>'
        +'<td>'+(late?'<span style="background:#fde8e8;padding:2px 8px;border-radius:12px;font-size:10px;">متأخر</span>':'—')+'</td>'
        +'<td>'+(a.gpsLink?'<span style="color:#2980b9;">&#128205; موجود</span>':'—')+'</td></tr>';
    }).join('');
    content = '<table class="pdf-table"><thead><tr><th>#</th><th>الموظف</th><th>التاريخ</th><th>حضور</th><th>انصراف</th><th>الحالة</th><th>تأخير</th><th>GPS</th></tr></thead>'
      +'<tbody>'+(rows4||'<tr><td colspan="8" style="text-align:center;padding:20px;color:#999;">لا توجد سجلات</td></tr>')+'</tbody></table>';

  } else if (type === 'evaluations') {
    title = 'تقرير التقييمات';
    var evs = DB.evaluations || [];
    var rows5 = evs.map(function(e,i){
      return '<tr><td>'+(i+1)+'</td><td>'+esc(e.empName||'')+'</td>'
        +'<td>'+esc(e.period||'')+'</td><td>'+e.avg+'/5</td>'
        +'<td>'+esc(e.cls||'')+'</td><td>'+esc(e.rec||'')+'</td><td>'+fd(e.date)+'</td></tr>';
    }).join('');
    content = '<table class="pdf-table"><thead><tr><th>#</th><th>الموظف</th><th>الفترة</th><th>المتوسط</th><th>التصنيف</th><th>التوصية</th><th>التاريخ</th></tr></thead>'
      +'<tbody>'+(rows5||'<tr><td colspan="7" style="text-align:center;padding:20px;color:#999;">لا توجد تقييمات</td></tr>')+'</tbody></table>';

  } else if (type === 'overtime') {
    title = 'تقرير الأوفر تايم';
    var ots = DB.overtime || [];
    var otTotal = ots.reduce(function(a,o){return a+(parseFloat(o.amount)||0);},0);
    var rows6 = ots.map(function(o,i){
      return '<tr><td>'+(i+1)+'</td><td>'+esc(o.empName||'')+'</td>'
        +'<td>'+fd(o.date)+'</td><td>'+o.hours+'</td><td>'+esc(o.dayType||'')+'</td>'
        +'<td style="font-weight:700;color:#27ae60;">'+KD(o.amount)+'</td></tr>';
    }).join('');
    content = '<div class="pdf-total"><span class="pdf-total-label">إجمالي الأوفر تايم</span><span class="pdf-total-val">'+KD(otTotal)+'</span></div>'
      +'<table class="pdf-table"><thead><tr><th>#</th><th>الموظف</th><th>التاريخ</th><th>ساعات</th><th>نوع اليوم</th><th>المبلغ (د.ك)</th></tr></thead>'
      +'<tbody>'+(rows6||'<tr><td colspan="6" style="text-align:center;padding:20px;color:#999;">لا توجد سجلات</td></tr>')+'</tbody></table>';

  } else if (type === 'warnings') {
    title = 'تقرير الإنذارات';
    var wrns = DB.warnings || [];
    var rows7 = wrns.map(function(w,i){
      return '<tr><td>'+(i+1)+'</td><td>'+esc(w.empName||'')+'</td>'
        +'<td>'+esc(w.type||'')+'</td><td>'+esc(w.reason||'')+'</td><td>'+fd(w.date)+'</td></tr>';
    }).join('');
    content = '<table class="pdf-table"><thead><tr><th>#</th><th>الموظف</th><th>نوع الإنذار</th><th>السبب</th><th>التاريخ</th></tr></thead>'
      +'<tbody>'+(rows7||'<tr><td colspan="5" style="text-align:center;padding:20px;color:#999;">لا توجد إنذارات</td></tr>')+'</tbody></table>';
  }

  var sigs = '<div class="pdf-sigs">'
    +'<div class="pdf-sig"><div class="pdf-sig-line">مدير الموارد البشرية<br/>صالح صقر الجاسم</div></div>'
    +'<div class="pdf-sig"><div class="pdf-sig-line">المدير العام<br/>عيسى عبدالله العيسى</div></div>'
    +'</div>';

  var html = '<!DOCTYPE html><html lang="ar" dir="rtl"><head><meta charset="UTF-8"/>'
    +'<title>'+title+'</title>'
    +'<style>'
    +'*{margin:0;padding:0;box-sizing:border-box;}'
    +'body{font-family:"Segoe UI",Arial,sans-serif;direction:rtl;color:#1e293b;font-size:12px;background:#fff;padding:28px;}'
    +'.pdf-hd{text-align:center;border-bottom:3px solid #c8a84b;padding-bottom:14px;margin-bottom:20px;}'
    +'.pdf-co{font-size:20px;font-weight:900;color:#1a1a2e;}'
    +'.pdf-title{font-size:15px;font-weight:700;color:#c8a84b;margin-top:4px;}'
    +'.pdf-date{font-size:10px;color:#888;margin-top:3px;}'
    +'.pdf-table{width:100%;border-collapse:collapse;margin-bottom:14px;font-size:11px;}'
    +'.pdf-table th{background:#1a1a2e;color:#fff;padding:7px 9px;text-align:right;}'
    +'.pdf-table td{padding:7px 9px;border-bottom:1px solid #e2e8f0;vertical-align:middle;}'
    +'.pdf-table tr:nth-child(even) td{background:#f8fafc;}'
    +'.pdf-total{background:rgba(200,168,75,.08);border:2px solid #c8a84b;border-radius:8px;padding:10px 14px;display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;}'
    +'.pdf-sigs{display:flex;justify-content:space-around;margin-top:36px;}'
    +'.pdf-sig-line{border-top:1px solid #1a1a2e;width:130px;padding-top:5px;font-size:10px;color:#555;text-align:center;margin:0 auto;}'
    +'.pdf-footer{text-align:center;color:#aaa;font-size:9px;margin-top:16px;padding-top:10px;border-top:1px solid #e2e8f0;}'
    +'@media print{body{padding:10px;}}'
    +'</style></head><body>'
    +'<div class="pdf-hd">'
    +logo
    +'<div class="pdf-co">'+co+'</div>'
    +'<div class="pdf-title">'+title+'</div>'
    +'<div class="pdf-date">'+dt+'</div>'
    +'</div>'
    +content
    +sigs
    +'<div class="pdf-footer">'+co+' | قانون العمل الكويتي رقم 6/2010 | '+dt+'</div>'
    +'</body></html>';

  w.document.write(html);
  w.document.close();
  setTimeout(function(){ w.focus(); w.print(); }, 600);
  logAction('تصدير تقرير PDF', title);
}

/* ══ صفحة التقارير المحدثة ══════════════════════════════ */
function pgReports(){
  var rptTypes = [
    {type:'salaries',   icon:'💰', title:'كشف الرواتب',           desc:'جميع الرواتب والبدلات والصافي'},
    {type:'employees',  icon:'👥', title:'قائمة الموظفين',        desc:'جميع الموظفين والمدراء'},
    {type:'leaves',     icon:'🌴', title:'تقرير الإجازات',         desc:'جميع طلبات الإجازة'},
    {type:'attendance', icon:'⏰', title:'تقرير الحضور',           desc:'سجلات الحضور والانصراف'},
    {type:'evaluations',icon:'⭐', title:'تقرير التقييمات',        desc:'نتائج تقييم الأداء'},
    {type:'overtime',   icon:'⏱️', title:'تقرير الأوفر تايم',      desc:'ساعات العمل الإضافي'},
    {type:'warnings',   icon:'⚠️', title:'تقرير الإنذارات',        desc:'سجل الإنذارات التأديبية'},
  ];

  var cards = rptTypes.map(function(r){
    return '<div class="card" style="padding:18px;margin-bottom:0;text-align:center;cursor:pointer;transition:.2s;" '
      +'onmouseover="this.style.transform=\'translateY(-2px)\'" onmouseout="this.style.transform=\'\'">'
      +'<div style="font-size:34px;margin-bottom:8px;">'+r.icon+'</div>'
      +'<div style="font-weight:700;font-size:13px;margin-bottom:4px;">'+r.title+'</div>'
      +'<div style="font-size:11px;color:#888;margin-bottom:12px;">'+r.desc+'</div>'
      +'<button class="btn bp bsm" style="width:100%;" onclick="openPDFReport(\''+r.type+'\')">📄 تصدير PDF</button>'
      +'</div>';
  }).join('');

  // رفع تقارير خارجية
  var extList = '';
  (DB.reportFiles||[]).forEach(function(f,i){
    extList += '<div class="fi"><span style="font-size:18px;">'+fi(f.name)+'</span>'
      +'<div style="flex:1;"><div style="font-weight:700;font-size:12px;">'+esc(f.name)+'</div>'
      +'<div style="font-size:10px;color:#888;">'+fd(f.date)+' · '+(f.size/1024).toFixed(1)+' KB</div></div>'
      +'<button class="btn bi bsm" onclick="_dl(_sd(\''+esc(f.data)+'\',\''+esc(f.name)+'\'))">⬇️</button>'
      +'<button class="btn bdn bsm" onclick="DB.reportFiles.splice('+i+',1);saveDB();pgReports()">🗑️</button>'
      +'</div>';
  });

  $('pg-reports').innerHTML = ''
    +'<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;" class="no-print">'
    +'<div style="font-size:16px;font-weight:700;">📈 التقارير الاحترافية</div>'
    +'<button class="btn bgr bsm" id="rptUpBtn">📤 رفع تقرير خارجي</button></div>'
    +'<div class="info-box">📄 جميع التقارير تُفتح في نافذة جديدة جاهزة للطباعة أو الحفظ كـ PDF</div>'
    +'<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:12px;margin-bottom:16px;">'+cards+'</div>'
    +(extList ? '<div style="font-weight:700;font-size:13px;margin-bottom:10px;">📁 التقارير المرفوعة</div>'+extList : '');

  var rptInp = document.createElement('input');
  rptInp.type='file'; rptInp.id='rptFileInp'; rptInp.style.display='none';
  rptInp.multiple=true; rptInp.accept='.pdf,.xlsx,.xls,.doc,.docx';
  document.body.appendChild(rptInp);

  document.getElementById('rptUpBtn').addEventListener('click',function(){ rptInp.click(); });
  rptInp.addEventListener('change',function(ev){
    Array.from(ev.target.files).forEach(function(f){
      var r2=new FileReader();
      r2.onload=function(e2){
        if(!DB.reportFiles)DB.reportFiles=[];
        DB.reportFiles.push({name:f.name,size:f.size,data:e2.target.result,date:td()});
        saveDB(); pgReports(); toast('تم رفع التقرير');
      };
      r2.readAsDataURL(f);
    });
    ev.target.value='';
  });
}


/* ══ نظام KPI لتقييم الأداء ════════════════════════════ */
function pgKPI(){
  var all = allP();
  if(!DB.evaluations) DB.evaluations=[];

  // احسب KPI لكل موظف
  var kpiData = all.map(function(e){
    var evs = DB.evaluations.filter(function(ev){return ev.empId===e.id;});
    var avgScore = evs.length ? (evs.reduce(function(a,ev){return a+(ev.avg||0);},0)/evs.length).toFixed(1) : null;
    var lvCount = (DB.leaves||[]).filter(function(l){return l.empId===e.id && l.status==='موافق';}).length;
    var wrnCount = (DB.warnings||[]).filter(function(w){return w.empId===e.id;}).length;
    var attCount = (DB.attendance||[]).filter(function(a){return a.empId===e.id && a.status==='حاضر';}).length;
    var lateCount = (DB.attendance||[]).filter(function(a){return a.empId===e.id && a.inTime && a.inTime>'08:15';}).length;
    // حساب KPI الإجمالي
    var kpiScore = 0; var kpiMax = 0;
    if(avgScore!==null){kpiScore+=parseFloat(avgScore)*20; kpiMax+=100;}
    if(attCount>0){var attRate=Math.min(100,Math.round(attCount/(attCount+lateCount)*100));kpiScore+=attRate*0.3;kpiMax+=30;}
    kpiScore-=wrnCount*5;
    var kpi = kpiMax>0 ? Math.min(100,Math.max(0,Math.round(kpiScore/kpiMax*100))) : null;
    var grade = kpi===null?'—':kpi>=90?'ممتاز':kpi>=75?'جيد جداً':kpi>=60?'جيد':kpi>=40?'مقبول':'ضعيف';
    var gColor = kpi===null?'#888':kpi>=90?'#27ae60':kpi>=75?'#2980b9':kpi>=60?'#f39c12':kpi>=40?'#e67e22':'#e74c3c';
    return {emp:e, avgScore:avgScore, lvCount:lvCount, wrnCount:wrnCount, attCount:attCount, lateCount:lateCount, kpi:kpi, grade:grade, gColor:gColor};
  });

  var rows = kpiData.map(function(d,i){
    return '<tr>'
      +'<td>'+photoEl(d.emp.photo,d.emp.name)+' <strong>'+esc(d.emp.name)+'</strong></td>'
      +'<td>'+esc(d.emp.dept||'—')+'</td>'
      +'<td style="text-align:center;">'+(d.avgScore!==null?d.avgScore+'/5':'—')+'</td>'
      +'<td style="text-align:center;">'+d.attCount+'</td>'
      +'<td style="text-align:center;color:#e74c3c;">'+d.lateCount+'</td>'
      +'<td style="text-align:center;">'+d.lvCount+'</td>'
      +'<td style="text-align:center;color:#e74c3c;">'+d.wrnCount+'</td>'
      +'<td style="text-align:center;">'
        +(d.kpi!==null
          ?'<div style="display:inline-flex;align-items:center;gap:6px;">'
            +'<div style="width:40px;height:40px;border-radius:50%;background:'+d.gColor+'1a;border:2px solid '+d.gColor+';display:flex;align-items:center;justify-content:center;font-weight:900;font-size:12px;color:'+d.gColor+';">'+d.kpi+'</div>'
            +'<span class="badge" style="background:'+d.gColor+'22;color:'+d.gColor+';">'+d.grade+'</span></div>'
          :'<span style="color:#aaa;">—</span>')
      +'</td>'
      +'</tr>';
  }).join('');

  // إحصائيات
  var withKPI = kpiData.filter(function(d){return d.kpi!==null;});
  var avgKPI = withKPI.length ? Math.round(withKPI.reduce(function(a,d){return a+d.kpi;},0)/withKPI.length) : 0;
  var topPerf = kpiData.slice().sort(function(a,b){return (b.kpi||0)-(a.kpi||0)}).slice(0,3);

  $('pg-kpi').innerHTML = ''
    +'<div style="font-size:16px;font-weight:700;margin-bottom:14px;">📊 مؤشرات الأداء الرئيسية (KPI)</div>'
    +'<div class="info-box">📊 KPI يُحسب تلقائياً بناءً على: التقييمات + الحضور + الإنذارات + الإجازات</div>'
    // إحصائيات KPI
    +'<div class="sg" style="margin-bottom:14px;">'
    +'<div class="sc"><div class="sc-i">📊</div><div class="sc-v">'+avgKPI+'%</div><div class="sc-l">متوسط KPI</div></div>'
    +'<div class="sc"><div class="sc-i">🏆</div><div class="sc-v">'+kpiData.filter(function(d){return d.kpi>=90;}).length+'</div><div class="sc-l">ممتاز</div></div>'
    +'<div class="sc"><div class="sc-i">👍</div><div class="sc-v">'+kpiData.filter(function(d){return d.kpi>=75&&d.kpi<90;}).length+'</div><div class="sc-l">جيد جداً</div></div>'
    +'<div class="sc"><div class="sc-i">⚠️</div><div class="sc-v">'+kpiData.filter(function(d){return d.kpi!==null&&d.kpi<60;}).length+'</div><div class="sc-l">يحتاج تطوير</div></div>'
    +'</div>'
    // أفضل 3
    +(topPerf.length && topPerf[0].kpi
      ?'<div class="card" style="margin-bottom:14px;">'
        +'<div class="ct" style="margin-bottom:12px;">🏆 أفضل أداء</div>'
        +'<div style="display:flex;gap:12px;flex-wrap:wrap;">'
        +topPerf.filter(function(d){return d.kpi!==null;}).map(function(d,i){
          var medals=['🥇','🥈','🥉'];
          return '<div style="display:flex;align-items:center;gap:8px;background:#f8f6f0;border-radius:8px;padding:10px 14px;flex:1;min-width:160px;">'
            +'<span style="font-size:24px;">'+medals[i]+'</span>'
            +photoEl(d.emp.photo,d.emp.name)
            +'<div><div style="font-weight:700;font-size:12px;">'+esc(d.emp.name)+'</div>'
            +'<div style="font-size:13px;font-weight:900;color:'+d.gColor+';">'+d.kpi+'%</div></div></div>';
        }).join('')
        +'</div></div>'
      :'')
    // الجدول الكامل
    +'<div class="card"><div class="tw"><table>'
    +'<thead><tr><th>الموظف</th><th>القسم</th><th>متوسط التقييم</th><th>أيام الحضور</th><th>التأخير</th><th>الإجازات</th><th>الإنذارات</th><th>KPI</th></tr></thead>'
    +'<tbody>'+(rows||emRow(8,'أضف تقييمات لعرض KPI'))+'</tbody>'
    +'</table></div></div>'
    +'<div style="margin-top:12px;" class="no-print">'
    +'<button class="btn bp" onclick="openPDFReport(\'evaluations\')">📄 تصدير تقرير KPI PDF</button>'
    +'</div>';
}


/* ══ التنبيهات التلقائية ════════════════════════════════ */
function checkAutoAlerts(){
  if(!CU) return;
  var today = new Date();
  var alerts = [];

  allP().forEach(function(e){
    // 1. عقود تنتهي خلال 30 يوم (إذا كان العقد مؤقت)
    if(e.contract && e.contract.includes('مؤقت') && e.start){
      // افتراض: مدة العقد سنة واحدة
      var startDate = new Date(e.start);
      var endDate = new Date(startDate);
      endDate.setFullYear(endDate.getFullYear()+1);
      var daysLeft = Math.round((endDate-today)/(1000*60*60*24));
      if(daysLeft>0 && daysLeft<=30){
        alerts.push({type:'warn', icon:'📋', msg:'عقد '+esc(e.name)+' ينتهي خلال '+daysLeft+' يوم',
          reason:'العقد مؤقت ومدته الافتراضية سنة من تاريخ المباشرة ('+fd(e.start)+')، وتبقى '+daysLeft+' يوم على انتهائه.',
          required:'قرر الآن: تجديد العقد أو البدء بإجراءات إنهاء الخدمة', action:'staff'});
      }
    }

    // 2. موظف لم يُقيَّم منذ 6 أشهر
    var lastEval = (DB.evaluations||[]).filter(function(ev){return ev.empId===e.id;}).slice(-1)[0];
    if(!lastEval){
      alerts.push({type:'info', icon:'⭐', msg:esc(e.name)+' لم يُقيَّم بعد',
        reason:'لا يوجد أي سجل تقييم أداء لهذا الموظف منذ تاريخ التعيين.',
        required:'جدولة تقييم أداء أولي', action:'evaluations'});
    } else {
      var evalAge = Math.round((today-new Date(lastEval.date))/(1000*60*60*24));
      if(evalAge>180){
        alerts.push({type:'info', icon:'⭐', msg:'آخر تقييم لـ '+esc(e.name)+' منذ '+Math.round(evalAge/30)+' شهر',
          reason:'مرت أكثر من 6 أشهر منذ آخر تقييم أداء بتاريخ '+fd(lastEval.date)+'.',
          required:'جدولة تقييم أداء دوري جديد', action:'evaluations'});
      }
    }

    // 3. موظف لديه 3 إنذارات
    var wrnCount = (DB.warnings||[]).filter(function(w){return w.empId===e.id;}).length;
    if(wrnCount>=3){
      alerts.push({type:'danger', icon:'🚨', msg:esc(e.name)+' لديه '+wrnCount+' إنذارات — يجوز الفصل',
        reason:'وصل عدد الإنذارات الخطية المسجلة إلى '+wrnCount+'، وهو الحد الذي يجيز الفصل التأديبي وفق قانون العمل.',
        required:'مراجعة الملف واتخاذ قرار (استمرار الموظف أو فصل تأديبي)', action:'warnings'});
    }
  });

  // 4. إجازات معلقة أكثر من 3 أيام
  var pendingLeaves = (DB.leaves||[]).filter(function(l){
    if(l.status!=='قيد المراجعة') return false;
    var daysPending = Math.round((today-new Date(l.from||today))/(1000*60*60*24));
    return daysPending>3;
  });
  if(pendingLeaves.length>0){
    alerts.push({type:'warn', icon:'🌴', msg:pendingLeaves.length+' طلب إجازة معلق أكثر من 3 أيام',
      reason:'هذه الطلبات مقدّمة منذ أكثر من 3 أيام ولم يُتخذ فيها قرار بعد.',
      required:'اعتماد أو رفض الطلبات المعلقة الآن', action:'leaves'});
  }

  // 5. موظفون في يوم عطلة رسمية
  var todayStr = today.toISOString().split('T')[0];
  var holiday = (DB.holidays||KWT_H||[]).find(function(h2){return h2.d===todayStr;});
  if(holiday){
    alerts.push({type:'info', icon:'📅', msg:'اليوم عطلة رسمية: '+esc(holiday.n),
      reason:'اليوم عطلة رسمية معتمدة في تقويم دولة الكويت.',
      required:'لا إجراء مطلوب — للعلم فقط (العمل بالعطلة يستحق أوفر تايم ×1.5)', action:'holidays'});
  }

  // عرض التنبيهات في الـ dashboard
  var alertsEl = document.getElementById('autoAlertsWrap');
  if(alertsEl && alerts.length>0){
    var colors = {danger:'#fde8e8,#e74c3c', warn:'#fef9e7,#f39c12', info:'rgba(200,168,75,.08),#c8a84b'};
    alertsEl.innerHTML = alerts.slice(0,5).map(function(a){
      var clr = colors[a.type]||colors.info;
      var bg = clr.split(',')[0]; var border = clr.split(',')[1];
      return '<div style="background:'+bg+';border:1px solid '+border+';border-radius:8px;padding:9px 14px;margin-bottom:6px;display:flex;align-items:center;gap:10px;cursor:pointer;" onclick="showS(\''+a.action+'\') ">'
        +'<span style="font-size:18px;flex-shrink:0;">'+a.icon+'</span>'
        +'<span style="font-size:12px;flex:1;">'+a.msg+'</span>'
        +'<span style="font-size:10px;color:'+border+';">←</span>'
        +'</div>';
    }).join('');
    alertsEl.style.display='block';
  } else if(alertsEl) {
    alertsEl.style.display='none';
  }

  return alerts;
}

function pgAlerts(){
  var alerts = checkAutoAlerts() || [];
  var colors = {danger:'#fde8e8,#e74c3c,🚨', warn:'#fef9e7,#f39c12,⚠️', info:'rgba(200,168,75,.08),#c8a84b,💡'};

  var rows = alerts.map(function(a,i){
    var clr = colors[a.type]||colors.info;
    var bg=clr.split(',')[0]; var border=clr.split(',')[1]; var icon=clr.split(',')[2];
    return '<div style="background:'+bg+';border:1.5px solid '+border+';border-radius:9px;padding:12px 16px;margin-bottom:8px;cursor:pointer;" onclick="showS(\''+a.action+'\')">'
      +'<div style="display:flex;align-items:center;gap:12px;">'
      +'<span style="font-size:22px;">'+a.icon+'</span>'
      +'<div style="flex:1;"><div style="font-size:12px;font-weight:700;">'+a.msg+'</div></div>'
      +'<span style="font-size:11px;color:'+border+';">عرض →</span>'
      +'</div>'
      +(a.reason?'<div style="font-size:11px;color:#666;margin-top:6px;padding-right:34px;">📌 '+a.reason+'</div>':'')
      +(a.required?'<div style="font-size:11.5px;font-weight:700;color:'+border+';margin-top:3px;padding-right:34px;">◀ المطلوب: '+a.required+'</div>':'')
      +'</div>';
  }).join('');

  $('pg-alerts').innerHTML = ''
    +'<div style="font-size:16px;font-weight:700;margin-bottom:14px;">🔔 التنبيهات التلقائية</div>'
    +'<div class="info-box">🤖 النظام يفحص البيانات تلقائياً ويُنبّهك بالأمور التي تحتاج متابعة فورية</div>'
    +(alerts.length
      ?'<div>'+rows+'</div>'
        +'<div style="margin-top:10px;font-size:11px;color:#888;">إجمالي '+alerts.length+' تنبيه</div>'
      :'<div class="card" style="text-align:center;padding:28px;">'
        +'<div style="font-size:40px;margin-bottom:10px;">✅</div>'
        +'<div style="font-weight:700;font-size:14px;margin-bottom:6px;">لا توجد تنبيهات حالياً</div>'
        +'<div style="color:#888;font-size:12px;">كل شيء على ما يرام!</div></div>');
}









var _sst={col:'',dir:1};







/* البحث الشامل */
function pgSearch(){
  $('pg-search').innerHTML=''
    +'<div style="font-size:16px;font-weight:700;margin-bottom:14px;">🔍 البحث الشامل في النظام</div>'
    +'<div style="position:relative;margin-bottom:16px;">'
    +'<input type="text" id="gsi" placeholder="ابحث في الموظفين، الإجازات، التقييمات، الإنذارات..." '
    +'oninput="doGS(this.value)" style="width:100%;padding:10px 40px 10px 14px;border:1.5px solid #c8a84b;border-radius:9px;font-family:inherit;font-size:13px;outline:none;"/>'
    +'<span style="position:absolute;left:14px;top:50%;transform:translateY(-50%);font-size:16px;">🔍</span>'
    +'</div>'
    +'<div id="gsr"><div style="text-align:center;padding:40px;color:#aaa;">'
    +'<div style="font-size:36px;margin-bottom:10px;">🔍</div>'
    +'<div>ابدأ الكتابة للبحث في كامل النظام</div></div></div>';
  setTimeout(function(){var e=$('gsi');if(e)e.focus();},100);
}

function doGS(q){
  var out=$('gsr');if(!out)return;
  q=(q||'').trim().toLowerCase();
  if(q.length<2){out.innerHTML='<div style="text-align:center;padding:30px;color:#aaa;">اكتب حرفين على الأقل</div>';return;}
  var res=[];
  allP().forEach(function(e){
    var isMgr=!!e.isMgr;
    if([e.name,e.empNo,e.title,e.dept,e.phone,e.email,e.nationality].some(function(f){return f&&String(f).toLowerCase().includes(q);})){
      res.push({sec:'موظفون',icon:'👤',title:esc(e.name)+' — '+esc(e.empNo||''),sub:esc(e.title||'')+' | '+esc(e.dept||''),go:"showS('staff')"});
    }
  });
  (DB.leaves||[]).forEach(function(l){
    if([l.empName,l.type,l.status].some(function(f){return f&&String(f).toLowerCase().includes(q);})){
      res.push({sec:'إجازات',icon:'🌴',title:esc(l.empName||''),sub:esc(l.type||'')+' | '+fd(l.from)+' ← '+fd(l.to)+' | '+esc(l.status||''),go:"showS('leaves')"});
    }
  });
  (DB.evaluations||[]).forEach(function(ev){
    if([ev.empName,ev.cls,ev.period].some(function(f){return f&&String(f).toLowerCase().includes(q);})){
      res.push({sec:'تقييمات',icon:'⭐',title:esc(ev.empName||''),sub:esc(ev.cls||'')+' | '+ev.avg+'/5 | '+fd(ev.date),go:"showS('evaluations')"});
    }
  });
  (DB.warnings||[]).forEach(function(w){
    if([w.empName,w.type,w.reason].some(function(f){return f&&String(f).toLowerCase().includes(q);})){
      res.push({sec:'إنذارات',icon:'⚠️',title:esc(w.empName||''),sub:esc(w.type||'')+' | '+esc(w.reason||''),go:"showS('warnings')"});
    }
  });
  (DB.overtime||[]).forEach(function(o){
    if(o.empName&&o.empName.toLowerCase().includes(q)){
      res.push({sec:'أوفر تايم',icon:'⏱️',title:esc(o.empName||''),sub:o.hours+' ساعات | '+KD(o.amount)+' | '+fd(o.date),go:"showS('overtime')"});
    }
  });
  (DB.training||[]).forEach(function(t){
    if([t.empName,t.course,t.provider].some(function(f){return f&&String(f).toLowerCase().includes(q);})){
      res.push({sec:'تدريب',icon:'📚',title:esc(t.empName||''),sub:esc(t.course||'')+' | '+esc(t.provider||''),go:"showS('training')"});
    }
  });
  if(!res.length){out.innerHTML='<div style="text-align:center;padding:40px;color:#aaa;"><div style="font-size:36px;">😔</div><div>لا نتائج لـ "'+esc(q)+'"</div></div>';return;}
  var grp={};res.forEach(function(r){if(!grp[r.sec])grp[r.sec]=[];grp[r.sec].push(r);});
  var html='<div style="font-size:12px;color:#888;margin-bottom:10px;">'+res.length+' نتيجة</div>';
  Object.entries(grp).forEach(function(kv){
    var sec=kv[0];var items=kv[1];
    html+='<div style="font-weight:700;font-size:12px;margin:12px 0 6px;">'+items[0].icon+' '+sec+' ('+items.length+')</div>';
    items.forEach(function(item){
      html+='<div class="card" style="padding:10px 14px;margin-bottom:6px;cursor:pointer;" onclick="'+item.go+'">'
        +'<div style="font-weight:700;font-size:12px;">'+item.title+'</div>'
        +'<div style="font-size:11px;color:#888;margin-top:2px;">'+item.sub+'</div></div>';
    });
  });
  out.innerHTML=html;
}

function quickSearch(q){if(!q||q.length<2)return;showS('search');setTimeout(function(){var e=$('gsi');if(e){e.value=q;doGS(q);}},200);}
function filterE(){
  var q=(gv('ES')||'').toLowerCase();
  var d=gv('ED')||'';
  var c=gv('ECAT')||'';
  document.querySelectorAll('#ETBL .staff-cat').forEach(function(catEl){
    var catName=catEl.getAttribute('data-cat')||'';
    var catOk=!c||catName===c;
    var anyCatVisible=false;
    catEl.querySelectorAll('.emp-sec').forEach(function(sec){
      var secName=sec.getAttribute('data-sec')||'';
      var deptOk=!d||secName===d;
      var anyVisible=false;
      sec.querySelectorAll('tbody tr[data-dept]').forEach(function(r){
        var mq=!q||r.textContent.toLowerCase().includes(q);
        var show=catOk&&deptOk&&mq;
        r.style.display=show?'':'none';
        if(show)anyVisible=true;
      });
      sec.style.display=(catOk&&deptOk&&anyVisible)?'':'none';
      if(catOk&&deptOk&&anyVisible)anyCatVisible=true;
    });
    catEl.style.display=(catOk&&anyCatVisible)?'':'none';
  });
}
function filterM(q){q=(q||'').toLowerCase();document.querySelectorAll('#mgrTbody tr').forEach(function(r){r.style.display=(!q||r.textContent.toLowerCase().includes(q))?'':'none';});}
var _sst={col:'',dir:1};
function sortTable(tid,ci){var tb=document.getElementById(tid);if(!tb)return;var rows=Array.from(tb.querySelectorAll('tr'));var dir=(_sst.col===tid+'_'+ci&&_sst.dir===1)?-1:1;_sst={col:tid+'_'+ci,dir:dir};rows.sort(function(a,b){var ta=(a.cells[ci]||{}).textContent||'';var tb2=(b.cells[ci]||{}).textContent||'';return ta.localeCompare(tb2,'ar')*dir;});rows.forEach(function(r){tb.appendChild(r);});}

/* رسوم بيانية */
function makeBarChart(data,color,maxVal){
  color=color||'#c8a84b';
  maxVal=maxVal||Math.max.apply(null,data.map(function(d){return d.val;}).concat([1]));
  return data.map(function(d){
    var pct=Math.round(d.val/maxVal*100);
    return '<div style="display:flex;align-items:center;gap:8px;margin-bottom:7px;">'
      +'<div style="font-size:11px;color:#555;min-width:80px;text-align:right;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">'+esc(d.label)+'</div>'
      +'<div style="flex:1;background:#f0ece3;border-radius:4px;height:20px;overflow:hidden;">'
      +'<div style="height:100%;width:'+pct+'%;background:'+color+';border-radius:4px;transition:width .5s;"></div></div>'
      +'<div style="font-size:11px;font-weight:700;min-width:36px;">'+d.val+'</div>'
      +'</div>';
  }).join('');
}

function makeDonut(segments,size){
  size=size||110;
  var total=segments.reduce(function(a,s){return a+s.val;},0);
  if(!total)return '<div style="color:#aaa;font-size:11px;">لا توجد بيانات</div>';
  var offset=0;var r=40;var circ=2*Math.PI*r;
  var paths=segments.map(function(s){
    var pct=s.val/total;var dash=pct*circ;var gap=circ-dash;
    var path='<circle cx="55" cy="55" r="'+r+'" fill="none" stroke="'+s.color+'" stroke-width="16" stroke-dasharray="'+dash.toFixed(1)+' '+gap.toFixed(1)+'" stroke-dashoffset="'+(-offset*circ).toFixed(1)+'" transform="rotate(-90 55 55)"/>';
    offset+=pct;return path;
  });
  var legend=segments.map(function(s){
    return '<div style="display:flex;align-items:center;gap:5px;margin-bottom:4px;">'
      +'<div style="width:9px;height:9px;border-radius:50%;background:'+s.color+';flex-shrink:0;"></div>'
      +'<div style="font-size:10px;">'+esc(s.label)+': <strong>'+s.val+'</strong></div></div>';
  }).join('');
  return '<div style="display:flex;align-items:center;gap:12px;">'
    +'<svg viewBox="0 0 110 110" width="'+size+'" height="'+size+'">'
    +'<circle cx="55" cy="55" r="'+r+'" fill="none" stroke="#f0ece3" stroke-width="16"/>'
    +paths.join('')
    +'<text x="55" y="60" text-anchor="middle" font-size="15" font-weight="900" fill="#1a1a2e">'+total+'</text>'
    +'</svg><div>'+legend+'</div></div>';
}

/* الوضع المظلم */
var _dm=false;
try{_dm=localStorage.getItem('mh_dark')==='1';}catch(e){}
function initDarkMode(){
  if(_dm)document.body.classList.add('dark-mode');
  var b=document.getElementById('darkBtn');if(b)b.textContent=_dm?'☀️':'🌙';
}
function toggleDarkMode(){
  _dm=!_dm;document.body.classList.toggle('dark-mode',_dm);
  try{localStorage.setItem('mh_dark',_dm?'1':'0');}catch(e){}
  var b=document.getElementById('darkBtn');if(b)b.textContent=_dm?'☀️':'🌙';
}

/* تحليلات محدثة */
function pgAnalytics(){
  var all=allP();
  var byDept={};all.forEach(function(e){byDept[e.dept||'غير محدد']=(byDept[e.dept||'غير محدد']||0)+1;});
  var ts=all.reduce(function(a,e){return a+ns(e);},0);
  var avg=all.length?ts/all.length:0;
  var statusData=['نشط','إجازة','معلق','منتهي الخدمة'].map(function(st,i){
    var clrs=['#27ae60','#f39c12','#e74c3c','#95a5a6'];
    return {label:st,val:all.filter(function(e){return e.status===st;}).length,color:clrs[i]};
  }).filter(function(d){return d.val>0;});
  var deptBars=Object.entries(byDept).sort(function(a,b){return b[1]-a[1];}).slice(0,6).map(function(kv){return {label:kv[0],val:kv[1]};});
  var lvT={};(DB.leaves||[]).forEach(function(l){lvT[l.type||'أخرى']=(lvT[l.type||'أخرى']||0)+1;});
  var lvColors=['#2980b9','#27ae60','#f39c12','#e74c3c','#9b59b6'];
  var lvSegs=Object.entries(lvT).slice(0,5).map(function(kv,i){return {label:kv[0],val:kv[1],color:lvColors[i]||'#888'};});
  var topSal=all.slice().sort(function(a,b){return ns(b)-ns(a);}).slice(0,5).map(function(e){return {label:e.name.split(' ')[0],val:parseFloat(ns(e).toFixed(3))};});
  $('pg-analytics').innerHTML=''
    +'<div style="font-size:16px;font-weight:700;margin-bottom:16px;">📊 التحليلات والإحصائيات</div>'
    +'<div class="sg" style="margin-bottom:16px;">'
    +[['👥',all.length,'إجمالي الموظفين'],['💰',KD(ts),'إجمالي الرواتب'],['📊',KD(avg),'متوسط الراتب'],['⭐',(DB.evaluations||[]).length,'التقييمات'],['🚀',(DB.promotions||[]).length,'الترقيات'],['⚠️',(DB.warnings||[]).length,'الإنذارات']].map(function(c){return '<div class="sc"><div class="sc-i">'+c[0]+'</div><div class="sc-v">'+c[1]+'</div><div class="sc-l">'+c[2]+'</div></div>';}).join('')+'</div>'
    +'<div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-bottom:14px;">'
    +'<div class="card"><div class="ct" style="margin-bottom:12px;">👥 توزيع الأقسام</div>'+(deptBars.length?makeBarChart(deptBars,'#c8a84b'):'<p style="color:#999;">لا توجد بيانات</p>')+'</div>'
    +'<div class="card"><div class="ct" style="margin-bottom:12px;">📊 حالات الموظفين</div>'+(statusData.length?makeDonut(statusData):'<p style="color:#999;">لا توجد بيانات</p>')+'</div>'
    +'<div class="card"><div class="ct" style="margin-bottom:12px;">💰 أعلى 5 رواتب</div>'+(topSal.length?makeBarChart(topSal,'#27ae60'):'<p style="color:#999;">لا توجد بيانات</p>')+'</div>'
    +'<div class="card"><div class="ct" style="margin-bottom:12px;">🌴 توزيع الإجازات</div>'+(lvSegs.length?makeDonut(lvSegs):'<p style="color:#999;">لا توجد إجازات</p>')+'</div>'
    +'</div>'
    +'<div class="no-print" style="display:flex;gap:8px;">'
    +'<button class="btn bp" onclick="openPDFReport(\'employees\')">📄 تقرير الموظفين</button>'
    +'<button class="btn bp" onclick="openPDFReport(\'salaries\')">📄 تقرير الرواتب</button>'
    +'</div>';
}


/* ══════════════════════════════════════════════════════════
   نظام الترخيص المرتبط بالجهاز — Device-Locked License
   الإصدار 2.0 | SLKR-HR Solutions
══════════════════════════════════════════════════════════ */

// الأكواد مشفرة (hash) — لا تظهر بالنص الواضح
// صلاحية زمنية + حماية من القوة العمياء
var _VALID_HASHES = [
  {h:"7DB92B28",e:"2026-12-31"},
  {h:"5F4B0907",e:"2026-12-31"},
  {h:"40DCE6E6",e:"2026-12-31"},
  {h:"226EC4C5",e:"2026-12-31"},
  {h:"0400A2A4",e:"2026-12-31"},
  {h:"1A6D7F7D",e:"2026-12-31"},
  {h:"38DBA19E",e:"2026-12-31"},
  {h:"5749C3BF",e:"2026-12-31"},
  {h:"75B7E5E0",e:"2026-12-31"},
  {h:"132ED4B6",e:"2026-12-31"},
  {h:"310039D0",e:"2025-12-31"},
  {h:"454C68B0",e:"2099-12-31"}
];
var _SALT = 'KW_HR_2025_SALT';
var _MAX_ATTEMPTS = 5;
var _ATT_KEY = 'mh_att';

var _LIC_KEY    = 'mh_lic_v2';

/* تشفير الكود للمقارنة */
function hashCode(s){
  var h=0; var salt='KW_HR_2025_SALT'; var s2=s+salt;
  for(var i=0;i<s2.length;i++){
    var c=s2.charCodeAt(i);
    h=((h<<5)-h)+c; h=h|0;
  }
  return Math.abs(h).toString(16).toUpperCase().padStart(8,'0');
}

/* التحقق من صلاحية الكود */
function isCodeValid(code){
  var hashed = hashCode(code);
  var today = new Date().toISOString().split('T')[0];
  for(var i=0;i<_VALID_HASHES.length;i++){
    var entry = _VALID_HASHES[i];
    if(entry.h === hashed){
      // تحقق من تاريخ الانتهاء
      if(today > entry.e){
        return {valid:false, reason:'expired', expiry:entry.e};
      }
      return {valid:true, expiry:entry.e};
    }
  }
  return {valid:false, reason:'invalid'};
}

/* إدارة محاولات الدخول */
function getAttempts(){
  try{return parseInt(localStorage.getItem(_ATT_KEY)||'0');}catch(e){return 0;}
}
function addAttempt(){
  var att=getAttempts()+1;
  try{localStorage.setItem(_ATT_KEY,att);}catch(e){}
  return att;
}
function resetAttempts(){
  try{localStorage.removeItem(_ATT_KEY);}catch(e){}
}

var _DEV_KEY    = 'mh_dev_fp';
var _LIC_ACT    = false;

/* حساب بصمة الجهاز */
function getDeviceFingerprint(){
  var fp = [
    navigator.userAgent || '',
    screen.width + 'x' + screen.height,
    screen.colorDepth || '',
    Intl.DateTimeFormat().resolvedOptions().timeZone || '',
    navigator.language || '',
    navigator.hardwareConcurrency || '',
    navigator.deviceMemory || '',
    navigator.platform || ''
  ].join('|');

  // hash بسيط
  var hash = 0;
  for(var i = 0; i < fp.length; i++){
    var c = fp.charCodeAt(i);
    hash = ((hash << 5) - hash) + c;
    hash = hash & hash;
  }
  return Math.abs(hash).toString(16).toUpperCase().padStart(8,'0');
}

/* تشفير بسيط للبيانات المحفوظة */
function encodeData(code, fingerprint){
  return btoa(code + '::' + fingerprint + '::MH2025');
}
function decodeData(encoded){
  try{
    var dec = atob(encoded);
    var parts = dec.split('::');
    return {code: parts[0], fp: parts[1]};
  }catch(e){ return null; }
}

/* تهيئة نظام الترخيص */
function initLicense(){try{
  // الدخول مباشرة لشاشة تسجيل الدخول
  var licw=document.getElementById('LICW');if(licw)licw.style.display='none';
  var welw=document.getElementById('WELW');if(welw)welw.style.display='none';
  _LIC_ACT=true;
  var lw=document.getElementById('LW');if(lw)lw.style.display='flex';
  var app=document.getElementById('APP');if(app)app.style.display='none';
  return;
  var stored = localStorage.getItem(_LIC_KEY);
  var currentFP = getDeviceFingerprint();

  if(stored){
    var data = decodeData(stored);
    if(data && isCodeValid(data.code).valid){
      // تحقق من بصمة الجهاز
      if(data.fp === currentFP){
        // ✅ نفس الجهاز — مفعّل
        _LIC_ACT = true;
        var _l=document.getElementById('LICW');if(_l)_l.style.display='none';
        showWelcome();
        return;
      } else {
        // ❌ جهاز مختلف
        var _l=document.getElementById('LICW');if(_l)_l.style.display='flex';
        document.getElementById('licErr').textContent =
          '⚠️ هذا الكود مفعّل على جهاز مختلف — تواصل مع مزود النظام';
        document.getElementById('licInput').disabled = true;
        document.getElementById('licBtn').disabled = true;
        return;
      }
    }
  }

  // لم يُفعَّل بعد
  var att = getAttempts();
  if(att >= _MAX_ATTEMPTS){
    var _l=document.getElementById('LICW');if(_l)_l.style.display='flex';
    document.getElementById('licErr').textContent = '🔒 تم تجاوز الحد المسموح ('+_MAX_ATTEMPTS+' محاولات) — تواصل مع مزود النظام';
    var li=document.getElementById('licInput'); if(li) li.disabled=true;
    var lb=document.getElementById('licBtn'); if(lb) lb.disabled=true;
    return;
  }
  var _l=document.getElementById('LICW');if(_l)_l.style.display='flex';
  if(att > 0){
    var errEl=document.getElementById('licErr');
    if(errEl) errEl.textContent='⚠️ محاولات سابقة: '+att+' — متبقي '+ (_MAX_ATTEMPTS-att);
  }

  var inp = document.getElementById('licInput');
  if(inp){
    inp.addEventListener('input', function(){
      var v = this.value.replace(/[^A-Za-z0-9]/g,'').toUpperCase();
      var parts = [];
      for(var i=0;i<v.length;i+=4) parts.push(v.substr(i,4));
      this.value = parts.join('-').substr(0,14);
    });
    inp.addEventListener('keydown', function(e){
      if(e.key === 'Enter') activateLicense();
    });
  }
  var btn = document.getElementById('licBtn');
  if(btn) btn.addEventListener('click', activateLicense);
}catch(e){console.log('License init error:',e);var lw=document.getElementById('LW');if(lw)lw.style.display='flex';}}

/* تفعيل الترخيص مع الحماية الكاملة */
function activateLicense(){
  var code = (document.getElementById('licInput').value||'').trim().toUpperCase();
  var err = document.getElementById('licErr');
  var inp = document.getElementById('licInput');
  var btn = document.getElementById('licBtn');

  // تحقق من عدد المحاولات
  var attempts = getAttempts();
  if(attempts >= _MAX_ATTEMPTS){
    if(err) err.textContent = '🔒 تم تجاوز الحد المسموح (' + _MAX_ATTEMPTS + ' محاولات) — تواصل مع مزود النظام';
    if(inp) inp.disabled = true;
    if(btn) btn.disabled = true;
    return;
  }

  if(!code){
    if(err) err.textContent = 'أدخل كود التفعيل';
    return;
  }

  // تحقق من الكود
  var result = isCodeValid(code);

  if(!result.valid){
    var remaining = _MAX_ATTEMPTS - addAttempt();
    if(result.reason === 'expired'){
      if(err) err.textContent = '⏰ هذا الكود انتهت صلاحيته بتاريخ ' + result.expiry + ' — تواصل مع مزود النظام للتجديد';
    } else {
      if(err) err.textContent = '❌ كود غير صحيح — متبقي ' + Math.max(0,remaining) + ' محاولة';
    }
    if(inp) inp.style.borderColor = '#ef4444';
    // تعطيل إذا انتهت المحاولات
    if(remaining <= 0){
      if(inp){inp.disabled=true;}
      if(btn){btn.disabled=true;}
      if(err) err.textContent = '🔒 تم تجاوز الحد المسموح — تواصل مع مزود النظام';
    }
    setTimeout(function(){var i=document.getElementById('licInput');if(i)i.style.borderColor='';},2000);
    return;
  }

  // ✅ كود صحيح — ربطه بالجهاز
  var fp = getDeviceFingerprint();
  var encoded = encodeData(code, fp);
  localStorage.setItem(_LIC_KEY, encoded);
  localStorage.setItem(_DEV_KEY, fp);
  resetAttempts();

  _LIC_ACT = true;
  if(err) err.textContent = '';
  var _l=document.getElementById('LICW');if(_l)_l.style.display='none';
  showWelcome();
  logAction('تفعيل ترخيص', 'كود: ' + code + ' | جهاز: ' + fp + ' | ينتهي: ' + result.expiry);
}

/* إلغاء التفعيل */
function resetLicense(){
  if(confirm('إلغاء تفعيل النظام على هذا الجهاز؟\nستحتاج كود جديد للدخول.')){
    localStorage.removeItem(_LIC_KEY);
    localStorage.removeItem(_DEV_KEY);
    location.reload();
  }
}

/* معلومات الترخيص الحالي */
function getLicenseInfo(){
  // نسخة محدثة تشمل تاريخ الانتهاء
  var stored = localStorage.getItem(_LIC_KEY);
  if(!stored) return null;
  var data = decodeData(stored);
  if(!data) return null;
  var result = isCodeValid(data.code);
  return {
    code: data.code,
    device: data.fp,
    currentDevice: getDeviceFingerprint(),
    isMatch: data.fp === getDeviceFingerprint(),
    expiry: result.expiry || '—',
    expired: !result.valid && result.reason === 'expired'
  };
}
function _getLicenseInfo_old(){
  var stored = localStorage.getItem(_LIC_KEY);
  if(!stored) return null;
  var data = decodeData(stored);
  if(!data) return null;
  return {
    code: data.code,
    device: data.fp,
    currentDevice: getDeviceFingerprint(),
    isMatch: data.fp === getDeviceFingerprint()
  };
}


/* ══ نظام الطوارئ السري للمطور ═════════════════════════ */

var _clickCount = 0;
var _clickTimer = null;














/* ══ نظام الطوارئ السري للمطور ═════════════════════════ */

var _CC = 0, _CT = null;




function closeMasterDlg(){ var e=document.getElementById('masterDlg'); if(e)e.remove(); }
function closeMasterPanel(){ var e=document.getElementById('masterPanel'); if(e)e.remove(); }












function masterHash(s){var h2=0;for(var i=0;i<s.length;i++){var c=s.charCodeAt(i);h2=((h2<<5)-h2)+c;h2=h2|0;}return Math.abs(h2).toString(16).toUpperCase().padStart(8,'0');}





function masterAct(a){
  var msg=document.getElementById('masterMsg');
  if(a==='att'){resetAttempts();if(msg){msg.textContent='✅ تم إعادة تعيين عداد المحاولات';msg.style.color='#27ae60';}}
  else if(a==='dev'){localStorage.removeItem(_LIC_KEY);localStorage.removeItem(_DEV_KEY);if(msg){msg.textContent='✅ تم إلغاء ربط الجهاز';msg.style.color='#c8a84b';}}
  else if(a==='full'){if(confirm('مسح الترخيص كاملاً؟')){localStorage.removeItem(_LIC_KEY);localStorage.removeItem(_DEV_KEY);resetAttempts();closeMP();setTimeout(function(){location.reload();},500);}}
  else if(a==='bak'){exportBackup();if(msg){msg.textContent='✅ تم تصدير النسخة الاحتياطية';msg.style.color='#2980b9';}}
}


/* ══ لوحة المطور السرية v2 ═══════════════════════════ */
var _MH='1B4BD87E';
var _MCC=0,_MCT=null;

function initMasterAccess(){
  var el=document.getElementById('sbHd');
  if(!el)return;
  el.addEventListener('click',function(){
    _MCC++;
    clearTimeout(_MCT);
    if(_MCC>=5){_MCC=0;_openMasterDlg();}
    else{_MCT=setTimeout(function(){_MCC=0;},2000);}
  });
}

function _mHash(s){
  var h2=0;
  for(var i=0;i<s.length;i++){var c=s.charCodeAt(i);h2=((h2<<5)-h2)+c;h2=h2|0;}
  return Math.abs(h2).toString(16).toUpperCase().padStart(8,'0');
}

function _openMasterDlg(){
  var old=document.getElementById('_mdlg');if(old)old.remove();
  var d=document.createElement('div');
  d.id='_mdlg';
  d.style.cssText='position:fixed;inset:0;background:rgba(0,0,0,.85);z-index:99999;display:flex;align-items:center;justify-content:center;';
  var wrap=document.createElement('div');
  wrap.style.cssText='background:#1a1a2e;border:2px solid #c8a84b;border-radius:14px;padding:28px;width:320px;text-align:center;';
  wrap.innerHTML='<div style="font-size:28px;margin-bottom:8px;">🔧</div>'
    +'<div style="color:#c8a84b;font-weight:700;font-size:14px;margin-bottom:4px;">وضع المطور</div>'
    +'<div style="color:rgba(255,255,255,.4);font-size:11px;margin-bottom:16px;">Developer Access</div>'
    +'<div id="_merr" style="color:#fca5a5;font-size:11px;min-height:14px;margin-bottom:6px;"></div>';
  var inp=document.createElement('input');
  inp.type='password';inp.id='_minp';inp.placeholder='كلمة مرور المطور';
  inp.style.cssText='width:100%;padding:10px;border-radius:8px;border:1.5px solid rgba(200,168,75,.4);background:rgba(255,255,255,.07);color:#fff;font-family:inherit;font-size:13px;outline:none;text-align:center;margin-bottom:8px;display:block;box-sizing:border-box;';
  var btn1=document.createElement('button');
  btn1.textContent='دخول';
  btn1.style.cssText='width:100%;padding:10px;border:none;border-radius:8px;background:linear-gradient(135deg,#c8a84b,#e8c97a);color:#1a1a2e;font-weight:700;cursor:pointer;font-family:inherit;font-size:13px;margin-bottom:6px;';
  var btn2=document.createElement('button');
  btn2.textContent='إلغاء';
  btn2.style.cssText='width:100%;padding:8px;border:1px solid rgba(200,168,75,.3);border-radius:8px;background:transparent;color:rgba(255,255,255,.4);cursor:pointer;font-family:inherit;font-size:11px;';
  btn1.addEventListener('click',_checkMaster);
  btn2.addEventListener('click',function(){d.remove();});
  inp.addEventListener('keydown',function(e){if(e.key==='Enter')_checkMaster();});
  wrap.appendChild(inp);wrap.appendChild(btn1);wrap.appendChild(btn2);
  d.appendChild(wrap);
  document.body.appendChild(d);
  setTimeout(function(){inp.focus();},100);
}

function _checkMaster(){
  var inp=document.getElementById('_minp');
  var err=document.getElementById('_merr');
  var pass=(inp?inp.value:'').trim();
  if(!pass){if(err)err.textContent='أدخل كلمة المرور';return;}
  if(_mHash(pass)===_MH){
    var d=document.getElementById('_mdlg');if(d)d.remove();
    _openMasterPanel();
  } else {
    if(err)err.textContent='❌ كلمة مرور خاطئة';
    if(inp){inp.style.borderColor='#ef4444';setTimeout(function(){if(inp)inp.style.borderColor='';},2000);}
  }
}

function _openMasterPanel(){
  var old=document.getElementById('_mpnl');if(old)old.remove();
  var fp=getDeviceFingerprint();
  var att=getAttempts();
  var lic=localStorage.getItem(_LIC_KEY)||'غير مفعّل';
  var dbSz=0;try{dbSz=Math.round((localStorage.getItem('mh6')||'').length/1024);}catch(e){}

  var d=document.createElement('div');
  d.id='_mpnl';
  d.style.cssText='position:fixed;inset:0;background:rgba(0,0,0,.92);z-index:99999;display:flex;align-items:center;justify-content:center;';

  var wrap=document.createElement('div');
  wrap.style.cssText='background:#1a1a2e;border:2px solid #c8a84b;border-radius:14px;padding:28px;width:420px;max-width:92vw;';

  // Header
  var hdr=document.createElement('div');
  hdr.style.cssText='display:flex;align-items:center;justify-content:space-between;margin-bottom:18px;';
  var htxt=document.createElement('div');
  htxt.innerHTML='<div style="color:#c8a84b;font-weight:700;font-size:15px;">🔧 لوحة تحكم المطور</div>'
    +'<div style="color:rgba(255,255,255,.3);font-size:10px;">SLKR-HR Solutions</div>';
  var cls=document.createElement('button');
  cls.textContent='✕';cls.style.cssText='background:none;border:none;color:rgba(255,255,255,.4);font-size:22px;cursor:pointer;';
  cls.addEventListener('click',function(){d.remove();});
  hdr.appendChild(htxt);hdr.appendChild(cls);wrap.appendChild(hdr);

  // Info box
  var info=document.createElement('div');
  info.style.cssText='background:rgba(255,255,255,.05);border-radius:9px;padding:14px;margin-bottom:14px;font-size:12px;';
  info.innerHTML='<div style="color:rgba(255,255,255,.4);margin-bottom:8px;font-size:10px;">معلومات النظام</div>'
    +'<div style="color:#fff;margin-bottom:4px;">📱 بصمة الجهاز: <span style="color:#c8a84b;font-family:monospace;">'+fp+'</span></div>'
    +'<div style="color:#fff;margin-bottom:4px;">🔑 الترخيص: <span style="color:#c8a84b;font-family:monospace;">'+esc(lic)+'</span></div>'
    +'<div style="color:#fff;margin-bottom:4px;">⚠️ المحاولات: <span style="color:'+(att>=5?'#e74c3c':'#27ae60')+';">'+att+'/5</span></div>'
    +'<div style="color:#fff;">🗄️ البيانات: <span style="color:#c8a84b;">'+dbSz+' KB</span></div>';
  wrap.appendChild(info);

  // Buttons
  var btnsData=[
    ['🔓 إعادة تعيين عداد المحاولات','rgba(39,174,96,.5)','rgba(39,174,96,.1)','#27ae60','att'],
    ['📱 إلغاء ربط الجهاز','rgba(200,168,75,.5)','rgba(200,168,75,.1)','#c8a84b','dev'],
    ['⚠️ إعادة ضبط كامل','rgba(231,76,60,.5)','rgba(231,76,60,.1)','#e74c3c','full'],
    ['💾 نسخة احتياطية طوارئ','rgba(41,128,185,.5)','rgba(41,128,185,.1)','#2980b9','bak']
  ];
  var grid=document.createElement('div');grid.style.cssText='display:grid;gap:8px;margin-bottom:10px;';
  btnsData.forEach(function(bd){
    var b=document.createElement('button');
    b.textContent=bd[0];
    b.style.cssText='padding:10px;border:1px solid '+bd[1]+';border-radius:8px;background:'+bd[2]+';color:'+bd[3]+';cursor:pointer;font-family:inherit;font-size:12px;font-weight:700;';
    b.addEventListener('click',function(){ _masterAct(bd[4]); });
    grid.appendChild(b);
  });
  wrap.appendChild(grid);

  var msg=document.createElement('div');msg.id='_mmsg';msg.style.cssText='font-size:11px;min-height:16px;text-align:center;';
  wrap.appendChild(msg);
  d.appendChild(wrap);
  document.body.appendChild(d);
}

function _masterAct(a){
  var msg=document.getElementById('_mmsg');
  function setMsg(t,c){if(msg){msg.textContent=t;msg.style.color=c;}}
  if(a==='att'){resetAttempts();setMsg('✅ تم إعادة تعيين عداد المحاولات','#27ae60');}
  else if(a==='dev'){localStorage.removeItem(_LIC_KEY);localStorage.removeItem(_DEV_KEY);setMsg('✅ تم إلغاء ربط الجهاز','#c8a84b');}
  else if(a==='full'){
    if(confirm('مسح الترخيص كاملاً؟')){
      localStorage.removeItem(_LIC_KEY);localStorage.removeItem(_DEV_KEY);resetAttempts();
      var p=document.getElementById('_mpnl');if(p)p.remove();
      setTimeout(function(){location.reload();},500);
    }
  }
  else if(a==='bak'){exportBackup();setMsg('✅ تم تصدير النسخة الاحتياطية','#2980b9');}
}


/* ══════════════════════════════════════════════════════════
   Supabase Integration — SLKR-HR System
   Project: amgsgtdmnvqqxnmihvox
══════════════════════════════════════════════════════════ */

var SUPA_URL = 'https://amgsgtdmnvqqxnmihvox.supabase.co';
var SUPA_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFtZ3NndGRtbnZxcXhubWlodm94Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY3OTQ3NDgsImV4cCI6MjA5MjM3MDc0OH0.5DQ6E795teYjk4P6ljUr2t3niXFld1m5KnLVCNL4s6A';
var SUPA_TABLE = 'hr_data';
var _supaEnabled = false;
var _supaLastSync = 0;
var SUPA_SESSION = null; // {access_token, refresh_token, expires_at}
var _supaSyncTimer = null;
var SUPA_EMAIL_DOMAIN = 'aleissa.local'; // نطاق داخلي وهمي لحسابات Supabase Auth (لا يستقبل بريد فعلي)
function supaEmailFor(username){ return String(username||'').trim().toLowerCase()+'@'+SUPA_EMAIL_DOMAIN; }

/* تسجيل الدخول الحقيقي عبر Supabase Auth (يفتح المزامنة السحابية بعد نجاحه) */
async function supaSignIn(username, password){
  try{
    var res = await fetch(SUPA_URL+'/auth/v1/token?grant_type=password', {
      method:'POST',
      headers:{ 'apikey':SUPA_KEY, 'Content-Type':'application/json' },
      body: JSON.stringify({ email: supaEmailFor(username), password: password })
    });
    if(!res.ok) return false;
    var j = await res.json();
    if(!j.access_token) return false;
    SUPA_SESSION = {
      access_token: j.access_token,
      refresh_token: j.refresh_token,
      expires_at: Date.now() + ((j.expires_in||3600)*1000)
    };
    return true;
  }catch(e){ return false; }
}
async function supaRefreshIfNeeded(){
  if(!SUPA_SESSION) return;
  if(Date.now() < SUPA_SESSION.expires_at - 60000) return; // لسا صالح لأكثر من دقيقة
  try{
    var res = await fetch(SUPA_URL+'/auth/v1/token?grant_type=refresh_token', {
      method:'POST',
      headers:{ 'apikey':SUPA_KEY, 'Content-Type':'application/json' },
      body: JSON.stringify({ refresh_token: SUPA_SESSION.refresh_token })
    });
    if(!res.ok){ SUPA_SESSION=null; return; }
    var j = await res.json();
    if(j.access_token){
      SUPA_SESSION = { access_token:j.access_token, refresh_token:j.refresh_token, expires_at: Date.now()+((j.expires_in||3600)*1000) };
    }
  }catch(e){ SUPA_SESSION=null; }
}
/* إنشاء حساب Supabase Auth لمستخدم جديد (best-effort، بدون تعطيل الإضافة المحلية إذا فشل) */
async function supaSignUp(username, password){
  try{
    var res = await fetch(SUPA_URL+'/auth/v1/signup', {
      method:'POST',
      headers:{ 'apikey':SUPA_KEY, 'Content-Type':'application/json' },
      body: JSON.stringify({ email: supaEmailFor(username), password: password })
    });
    return res.ok;
  }catch(e){ return false; }
}

/* اتصال Supabase — لازم جلسة دخول حقيقية (SUPA_SESSION) لأن RLS الآن يسمح فقط للمستخدمين الموثّقين */
async function supaGet() {
  if (!SUPA_SESSION) return null;
  try {
    await supaRefreshIfNeeded();
    if (!SUPA_SESSION) return null;
    var res = await fetch(SUPA_URL+'/rest/v1/'+SUPA_TABLE+'?id=eq.1&select=data', {
      headers: {
        'apikey': SUPA_KEY,
        'Authorization': 'Bearer '+SUPA_SESSION.access_token,
        'Content-Type': 'application/json'
      }
    });
    if (!res.ok) return null;
    var rows = await res.json();
    return rows && rows.length > 0 ? rows[0].data : null;
  } catch(e) { return null; }
}

async function supaSet(data) {
  if (!SUPA_SESSION) return false;
  try {
    await supaRefreshIfNeeded();
    if (!SUPA_SESSION) return false;
    var res = await fetch(SUPA_URL+'/rest/v1/'+SUPA_TABLE, {
      method: 'POST',
      headers: {
        'apikey': SUPA_KEY,
        'Authorization': 'Bearer '+SUPA_SESSION.access_token,
        'Content-Type': 'application/json',
        'Prefer': 'resolution=merge-duplicates'
      },
      body: JSON.stringify({ id: 1, data: data, updated_at: new Date().toISOString() })
    });
    return res.ok;
  } catch(e) { return false; }
}

/* مزامنة تلقائية كل 30 ثانية */
async function supaSync() {
  if (!_supaEnabled) return;
  try {
    var remote = await supaGet();
    if (!remote) return;
    var remoteDB = JSON.parse(remote);
    var remoteTS = remoteDB._ts || 0;
    var localTS  = parseInt(localStorage.getItem('mh6_ts')||'0');
    if (remoteTS > localTS) {
      DB = Object.assign(defDB(), remoteDB);
      localStorage.setItem('mh6', remote);
      localStorage.setItem('mh6_ts', String(remoteTS));
      updBell();
      var pages = {dashboard:pgDash,staff:pgStaff,
        appointments:pgApts,org:pgOrg,salaries:pgSal,overtime:pgOT,
        bonuses:pgBonus,endservice:pgEnd,leaves:pgLeaves,permissions:pgPerms,
        attendance:pgAtt,evaluations:pgEvals,evalfiles:pgEvalFiles,
        selfeval:pgSelf,peereval:pgPeer,approvals:pgAppr,training:pgTrain,
        promotions:pgPromo,warnings:pgWarn,notifications:pgNotif,
        wps:pgWPS,payslip:pgPayslip,onboarding:pgOnboarding,
        holidays:pgHolidays,analytics:pgAnalytics,kpi:pgKPI,alerts:pgAlerts,
        files:pgFiles,reports:pgReports,locations:pgLoc,
        backup:pgBackup,licenseinfo:pgLicenseInfo,users:pgUsers,settings:pgSettings};
      if(pages[curS]) pages[curS]();
      toast('🔄 تم المزامنة من Supabase');
    }
  } catch(e) {}
}

/* حفظ مع Supabase */
var _origSaveDB = saveDB;
saveDB = function() {
  DB._ts = Date.now();
  _origSaveDB();
  if (_supaEnabled) {
    supaSet(JSON.stringify(DB)).then(function(ok){
      if(ok) {
        var ind = document.getElementById('supaInd');
        if(ind){ ind.textContent='☁️'; ind.title='محفوظ على Supabase'; }
      }
    });
  }
};

/* تهيئة Supabase */
async function initSupabase() {
  try {
    var test = await supaGet();
    if (test !== null) {
      _supaEnabled = true;
      var ind = document.getElementById('supaInd');
      if(ind){ ind.textContent='☁️'; ind.style.color='#27ae60'; ind.title='Supabase متصل'; }
      // أول مزامنة
      await supaSync();
      // مزامنة كل 30 ثانية
      if(_supaSyncTimer)clearInterval(_supaSyncTimer);
      _supaSyncTimer=setInterval(supaSync, 30000);
      toast('☁️ Supabase متصل — المزامنة تلقائية');
    } else {
      // جدول غير موجود — أنشئه
      await supaCreate();
    }
  } catch(e) {
    var ind = document.getElementById('supaInd');
    if(ind){ ind.textContent='⚠️'; ind.style.color='#e74c3c'; ind.title='Supabase غير متصل'; }
  }
}

/* إنشاء الجدول أول مرة */
async function supaCreate() {
  if (!SUPA_SESSION) return;
  try {
    var res = await fetch(SUPA_URL+'/rest/v1/'+SUPA_TABLE, {
      method: 'POST',
      headers: {
        'apikey': SUPA_KEY,
        'Authorization': 'Bearer '+SUPA_SESSION.access_token,
        'Content-Type': 'application/json',
        'Prefer': 'return=minimal'
      },
      body: JSON.stringify({ id: 1, data: JSON.stringify(DB), updated_at: new Date().toISOString() })
    });
    if (res.ok || res.status === 409) {
      _supaEnabled = true;
      if(_supaSyncTimer)clearInterval(_supaSyncTimer);
      _supaSyncTimer=setInterval(supaSync, 30000);
      var ind = document.getElementById('supaInd');
      if(ind){ ind.textContent='☁️'; ind.style.color='#27ae60'; }
      toast('☁️ Supabase تم الإعداد بنجاح');
    }
  } catch(e) {}
}

/* مزامنة يدوية */
async function syncNow() {
  if (!_supaEnabled) { toast('⚠️ Supabase غير متصل','err'); return; }
  toast('⏳ جاري المزامنة...');
  await supaSync();
  toast('✅ تمت المزامنة');
}


function showWelcome(){
  var welw = document.getElementById('WELW');
  if(!welw){ showLoginScreen(); return; }
  var co   = (DB&&DB.settings&&DB.settings.companyName)?DB.settings.companyName:'SLKR-HR';
  var tg   = (DB&&DB.settings&&DB.settings.tagline)?DB.settings.tagline:'نظام إدارة الموارد البشرية';
  var logo = (DB&&DB.settings&&DB.settings.logo)?DB.settings.logo:'';
  var wn=document.getElementById('welName');   if(wn) wn.textContent=co;
  var ws=document.getElementById('welSub');    if(ws) ws.textContent=tg;
  var wl=document.getElementById('welLogoWrap');
  if(wl) wl.innerHTML=logo?'<img src="'+logo+'" class="welcome-logo" alt="logo"/>':'<div class="welcome-icon-big">🏢</div>';
  welw.style.cssText='display:flex;opacity:1;transition:none;';
  // بعد 2.5 ثانية أخفِ الترحيب وأظهر اللوجين
  setTimeout(function(){
    welw.style.transition='opacity 0.5s ease';
    welw.style.opacity='0';
    setTimeout(function(){
      welw.style.display='none';
      showLoginScreen();
    },500);
  },2500);
}

function showLoginScreen(){
  var lw=document.getElementById('LW');
  if(lw) lw.style.display='flex';
}


/* ═══ موظفين من كشوفات العمالة ═══ */




/* ═══ 79 موظف مستورد من كشوفات العمالة ═══ */

DB=loadDB();
migrateDB();
try{applyBrand();}catch(e){}
$('lbSN').textContent='S/N: '+DB.serial;
initLicense();

function pgWPS(){
  var all=allP(),rows='';
  all.forEach(function(e){
    var ot=(DB.overtime||[]).filter(function(o){return o.empId==e.id;}).reduce(function(a,o){return a+(parseFloat(o.amount)||0);},0);
    rows+='<tr><td>'+photoEl(e.photo,e.name)+' <strong>'+esc(e.name)+'</strong></td>'
      +'<td><span class="badge bpr">'+esc(e.empNo||'—')+'</span></td>'
      +'<td>'+esc(e.bankname||'—')+'</td>'
      +'<td style="font-family:monospace;font-size:11px;">'+esc(e.bank||'—')+'</td>'
      +'<td style="font-weight:700;color:#27ae60;">'+KD(ns(e)+ot)+'</td></tr>';
  });
  $('pg-wps').innerHTML=''
    +'<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;" class="no-print">'
    +'<div style="font-size:16px;font-weight:700;">🏦 ملف WPS — تحويل الرواتب للبنوك الكويتية</div>'
    +'<button class="btn bp" id="wpsBtn">⬇️ توليد ملف WPS</button></div>'
    +'<div class="info-box">🏦 ملف CSV جاهز للرفع على بنوك الكويت — NBK, KFH, بوبيان, وربة, CBK, بنك الخليج</div>'
    +'<div class="card"><div class="tw"><table>'
    +'<thead><tr><th>الموظف</th><th>الرقم الوظيفي</th><th>البنك</th><th>IBAN</th><th>صافي الراتب (د.ك)</th></tr></thead>'
    +'<tbody>'+(rows||emRow(5))+'</tbody></table></div></div>';
  $('wpsBtn').addEventListener('click',function(){
    var now=new Date();
    var months=['يناير','فبراير','مارس','أبريل','مايو','يونيو','يوليو','أغسطس','سبتمبر','أكتوبر','نوفمبر','ديسمبر'];
    var hdr='Employee ID,Name,Bank,IBAN,Basic KD,Allow KD,OT KD,Deduct KD,Net KD,Month,Year\n';
    var rws=all.map(function(e){
      var ot=(DB.overtime||[]).filter(function(o){return o.empId==e.id;}).reduce(function(a,o){return a+(parseFloat(o.amount)||0);},0);
      var net=ns(e)+ot;
      return [e.empNo||'','"'+e.name+'"',e.bankname||'',e.bank||'',
        (e.salary||0).toFixed(3),((e.housing||0)+(e.transport||0)+(e.other||0)).toFixed(3),
        ot.toFixed(3),(e.deductions||0).toFixed(3),net.toFixed(3),
        months[now.getMonth()],now.getFullYear()].join(',');
    });
    var csv='\uFEFF'+hdr+rws.join('\n');
    var blob=new Blob([csv],{type:'text/csv;charset=utf-8'});
    var url=URL.createObjectURL(blob);
    var a=document.createElement('a');a.href=url;
    a.download='WPS_'+DB.settings.companyName+'_'+now.getFullYear()+'_'+String(now.getMonth()+1).padStart(2,'0')+'.csv';
    a.click();URL.revokeObjectURL(url);
    toast('تم تنزيل ملف WPS');
  });
}

function pgPayslip(){
  var html='<div style="font-size:16px;font-weight:700;margin-bottom:14px;">📄 قسيمة الراتب</div>'
    +'<div class="info-box">📄 قسيمة رسمية — الراتب والبدلات والأوفر تايم والصافي — وفق قانون العمل الكويتي</div>'
    +'<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:10px;">';
  allP().forEach(function(e){
    var isMgr=!!e.isMgr;
    html+='<div class="card" style="padding:14px;margin-bottom:0;cursor:pointer;text-align:center;" onclick="openPS('+e.id+','+isMgr+')">'
      +photoEl(e.photo,e.name,false)
      +'<div style="font-weight:700;font-size:12px;margin-top:6px;">'+esc(e.name)+'</div>'
      +'<div style="font-size:11px;color:#888;">'+esc(e.title||'—')+'</div>'
      +'<div style="font-size:13px;font-weight:700;color:#27ae60;margin-top:4px;">'+KD(ns(e))+'</div>'
      +'<button class="btn bp bsm" style="margin-top:8px;width:100%;">📄 إصدار قسيمة</button>'
      +'</div>';
  });
  html+='</div>';
  $('pg-payslip').innerHTML=html;
}

function openPS(id,isMgr){
  var e=(DB.employees||[]).find(function(x){return x.id===id;});
  if(!e)return;
  var ot=(DB.overtime||[]).filter(function(o){return o.empId==e.id;}).reduce(function(a,o){return a+(parseFloat(o.amount)||0);},0);
  var net=ns(e)+ot;
  var now=new Date();
  var months=['يناير','فبراير','مارس','أبريل','مايو','يونيو','يوليو','أغسطس','سبتمبر','أكتوبر','نوفمبر','ديسمبر'];
  var mon=months[now.getMonth()]+' '+now.getFullYear();
  var ref='PS-'+now.getFullYear()+'-'+String(now.getMonth()+1).padStart(2,'0')+'-'+(e.empNo||'');
  var dt=now.toLocaleDateString('en-GB',{year:'numeric',month:'long',day:'numeric'});
  var logo=DB.settings.logo
    ?('<img src="'+DB.settings.logo+'" style="width:55px;height:55px;border-radius:50%;object-fit:cover;margin-bottom:6px;"/>')
    :'<div style="font-size:34px;margin-bottom:4px;">🏢</div>';
  var b=''
    +'<div style="border:2px solid #1a1a2e;border-radius:10px;padding:22px;">'
    +'<div style="text-align:center;border-bottom:2px solid #c8a84b;padding-bottom:10px;margin-bottom:14px;">'
    +logo
    +'<div style="font-size:18px;font-weight:900;color:#1a1a2e;">'+esc(DB.settings.companyName)+'</div>'
    +'<div style="display:inline-block;background:linear-gradient(135deg,#c8a84b,#e8c97a);color:#1a1a2e;border-radius:20px;padding:3px 14px;font-size:10px;font-weight:700;margin-top:6px;">PAYSLIP - قسيمة الراتب</div>'
    +'</div>'
    +'<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:12px;">'
    +'<div style="background:#f8f6f0;border-radius:7px;padding:8px;"><div style="font-size:10px;color:#888;">المرجع</div><div style="font-weight:700;color:#c8a84b;">'+esc(ref)+'</div></div>'
    +'<div style="background:#f8f6f0;border-radius:7px;padding:8px;"><div style="font-size:10px;color:#888;">الفترة</div><div style="font-weight:700;">'+esc(mon)+'</div></div>'
    +'</div>'
    +'<table style="width:100%;border-collapse:collapse;font-size:12px;margin-bottom:12px;">';
  var trs=[
    ['الاسم الكامل','<strong>'+esc(e.name)+'</strong>'],
    ['الرقم الوظيفي',esc(e.empNo||'—')],
    ['المسمى الوظيفي',esc(e.title||'—')],
    ['القسم',esc(e.dept||'—')],
    ['الراتب الأساسي',KD(e.salary)],
    ['بدل السكن',KD(e.housing)],
    ['بدل النقل',KD(e.transport)],
    ['بدلات أخرى',KD(e.other)],
    ['الأوفر تايم','<span style="color:#27ae60;font-weight:700;">'+KD(ot)+'</span>'],
    ['الخصومات','<span style="color:#e74c3c;">'+KD(e.deductions)+'</span>']
  ];
  trs.forEach(function(r){
    b+='<tr><td style="background:#f8f6f0;color:#888;font-weight:700;padding:6px 9px;border:1px solid #e0d9cc;width:40%;">'+r[0]+'</td>'
      +'<td style="padding:6px 9px;border:1px solid #e0d9cc;">'+r[1]+'</td></tr>';
  });
  b+='<tr style="background:rgba(200,168,75,.1);">'
    +'<td style="font-weight:900;padding:8px 9px;border:2px solid #c8a84b;">صافي الراتب</td>'
    +'<td style="font-size:16px;font-weight:900;color:#27ae60;padding:8px 9px;border:2px solid #c8a84b;">'+KD(net)+'</td></tr>'
    +'</table>'
    +'<div style="background:#f8f6f0;border-radius:7px;padding:8px 10px;font-size:11px;margin-bottom:14px;">🏦 البنك: '+esc(e.bankname||'—')+' | IBAN: '+esc(e.bank||'—')+'</div>'
    +'<div style="display:flex;justify-content:space-between;margin-top:22px;">'
    +'<div style="text-align:center;"><div style="border-top:1px solid #1a1a2e;width:120px;padding-top:5px;font-size:10px;color:#555;">توقيع الموظف</div></div>'
    +'<div style="text-align:center;"><div style="border-top:1px solid #1a1a2e;width:120px;padding-top:5px;font-size:10px;color:#555;">مدير الموارد البشرية</div></div>'
    +'<div style="text-align:center;"><div style="border-top:1px solid #1a1a2e;width:120px;padding-top:5px;font-size:10px;color:#555;">المدير العام</div></div>'
    +'</div>'
    +'<div style="text-align:center;color:#aaa;font-size:10px;margin-top:10px;border-top:1px solid #f0ece3;padding-top:8px;">'
    +esc(DB.settings.companyName)+' | قانون العمل الكويتي رقم 6/2010 | '+esc(ref)+' | '+esc(dt)
    +'</div></div>'
    +'<div style="display:flex;gap:8px;justify-content:flex-end;margin-top:12px;" class="no-print">'
    +'<button class="btn bgr bsm" onclick="window.print()">🖨️ طباعة</button>'
    +'<button class="btn bou" onclick="clOv(\'PSVIEW\')">اغلاق</button>'
    +'</div>';
  mkOpOv('PSVIEW','قسيمة الراتب الرسمية',b,'800px');
}

function pgOnboarding(){
  var OB=ONBOARD_STEPS;
  if(!DB.onboarding)DB.onboarding=[];
  var list='';
  if(DB.onboarding.length===0){
    list='<div class="card" style="text-align:center;padding:28px;">'
      +'<div style="font-size:36px;margin-bottom:8px;">🎯</div>'
      +'<div style="font-weight:700;">لا توجد عمليات استقبال حالياً</div>'
      +'</div>';
  } else {
    DB.onboarding.slice().reverse().forEach(function(ob){
      var done=ob.steps.filter(function(s){return s.done;}).length;
      var pct=Math.round(done/ob.steps.length*100);
      var steps='';
      ob.steps.forEach(function(s,i){
        steps+='<div style="display:flex;align-items:center;gap:10px;padding:7px 0;border-bottom:1px solid #f0ece3;">'
          +'<div style="width:24px;height:24px;border-radius:50%;background:'+(s.done?'#27ae60':'#c8a84b')+';color:'+(s.done?'#fff':'#1a1a2e')+';display:flex;align-items:center;justify-content:center;font-weight:700;font-size:11px;flex-shrink:0;">'+(s.done?'V':(i+1))+'</div>'
          +'<div style="flex:1;font-size:12px;'+(s.done?'text-decoration:line-through;color:#aaa;':'')+'">'+esc(s.task)+'</div>'
          +(!s.done?'<button class="btn bok bsm no-print" onclick="doneOb('+ob.id+','+i+')">انجاز</button>':'')
          +'</div>';
      });
      list+='<div class="card" style="margin-bottom:10px;">'
        +'<div style="display:flex;align-items:center;gap:12px;margin-bottom:12px;">'
        +'<div class="av">'+esc((ob.empName||'?')[0])+'</div>'
        +'<div style="flex:1;"><div style="font-weight:700;">'+esc(ob.empName)+(ob.fromCandidate?' <span class="badge bwn2" style="font-size:9px;">🎯 من مسار التوظيف</span>':'')+'</div><div style="font-size:11px;color:#888;">بدأ: '+fd(ob.startDate)+'</div></div>'
        +'<div style="text-align:center;"><div style="font-size:18px;font-weight:900;color:#c8a84b;">'+pct+'%</div><div style="font-size:10px;color:#888;">مكتمل</div></div>'
        +(ob.empId?'<button class="btn bi bsm no-print" onclick="viewP('+ob.empId+')">👁️ ملف الموظف</button>':'')
        +'</div>'
        +'<div style="height:6px;background:#e0d9cc;border-radius:4px;margin-bottom:12px;">'
        +'<div style="height:100%;width:'+pct+'%;background:linear-gradient(90deg,#c8a84b,#e8c97a);border-radius:4px;"></div></div>'
        +steps+'</div>';
    });
  }
  $('pg-onboarding').innerHTML=''
    +'<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;" class="no-print">'
    +'<div style="font-size:16px;font-weight:700;">🎯 استقبال الموظف الجديد</div>'
    +'<button class="btn bp" id="obBtn">اضافة استقبال</button></div>'
    +'<div class="info-box">🎯 قائمة مهام منظمة لاستقبال الموظف خطوة بخطوة — المادة 26 من قانون العمل الكويتي</div>'
    +list;
  $('obBtn').addEventListener('click',function(){
    var bdy=''
      +'<div class="fg"><label>الموظف</label><select id="ob-e">'+empOpts()+'</select></div>'
      +'<div class="fg"><label>تاريخ الانضمام</label><input type="date" id="ob-d" value="'+td()+'"/></div>'
      +'<div style="background:#f0fdf4;border:1px solid #86efac;border-radius:8px;padding:10px;font-size:12px;margin-bottom:12px;">سيتم انشاء 10 خطوات استقبال تلقائياً</div>'
      +'<div style="display:flex;gap:8px;justify-content:flex-end;">'
      +'<button class="btn bou" id="obCancel">الغاء</button>'
      +'<button class="btn bp" id="obSave">بدء الاستقبال</button></div>';
    mkOpOv('OBF','بدء استقبال موظف جديد',bdy);
    $('obCancel').addEventListener('click',function(){clOv('OBF');});
    $('obSave').addEventListener('click',function(){
      var e=resolveP(gv('ob-e'));
      if(!e){toast('اختر موظفاً','err');return;}
      if(!DB.onboarding)DB.onboarding=[];
      DB.onboarding.push({id:Date.now(),empId:e.id,empName:e.name,startDate:$('ob-d').value||td(),steps:OB.map(function(t){return{task:t,done:false};})});
      addNotif(e.name,'بدأ استقبال','تم بدء عملية استقبال '+e.name);
      saveDB();clOv('OBF');pgOnboarding();toast('تم بدء الاستقبال');
    });
  });
}
function doneOb(id,i){
  var ob=(DB.onboarding||[]).find(function(x){return x.id===id;});
  if(ob){ob.steps[i].done=true;saveDB();pgOnboarding();toast('تم انجاز الخطوة');}
}

var curHolYear=null;
function pgHolidays(){
  if(!DB.holidays)DB.holidays=seedHolidays();
  var nowYear=new Date().getFullYear();
  var years=Array.from(new Set(DB.holidays.map(function(h2){return (h2.d||'').slice(0,4);}).filter(Boolean)));
  [nowYear-1,nowYear,nowYear+1,nowYear+2].forEach(function(y){if(years.indexOf(String(y))===-1)years.push(String(y));});
  years.sort();
  if(!curHolYear||years.indexOf(curHolYear)===-1)curHolYear=String(nowYear);
  var list=DB.holidays.filter(function(h2){return (h2.d||'').slice(0,4)===curHolYear;}).sort(function(a,b){return (a.d||'').localeCompare(b.d||'');});
  var rows='';
  list.forEach(function(h2){
    var past=new Date(h2.d)<new Date();
    var tc=h2.t==='ديني'?'bif':h2.t==='وطني'?'bok2':'bgr2';
    rows+=''
      +'<div style="display:flex;align-items:center;gap:10px;padding:9px 0;border-bottom:1px solid #f0ece3;opacity:'+(past?0.6:1)+'">'
      +'<div style="background:linear-gradient(135deg,#c8a84b,#e8c97a);color:#1a1a2e;border-radius:7px;padding:3px 9px;font-size:11px;font-weight:700;min-width:100px;text-align:center;">'+fd(h2.d)+'</div>'
      +'<div style="flex:1;font-weight:700;font-size:12px;">'+esc(h2.n)+'</div>'
      +'<span class="badge '+tc+'">'+esc(h2.t)+'</span>'
      +(past?'<span class="badge bgr2">انتهى</span>':'<span class="badge bok2">قادم</span>')
      +'<button class="btn bdn bsm no-print" onclick="delHoliday(\''+h2.id+'\')">🗑️</button>'
      +'</div>';
  });
  if(!rows)rows='<div style="text-align:center;padding:22px;color:#999;">لا توجد عطل مسجّلة لسنة '+esc(curHolYear)+'</div>';
  $('pg-holidays').innerHTML=''
    +'<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;flex-wrap:wrap;gap:8px;" class="no-print">'
    +'<div style="font-size:16px;font-weight:700;">📅 العطل والمناسبات الرسمية</div>'
    +'<div style="display:flex;gap:8px;align-items:center;">'
    +'<select id="holYear" style="padding:7px 10px;border:1.5px solid #e0d9cc;border-radius:7px;font-family:inherit;font-size:12px;outline:none;background:#fff;" onchange="curHolYear=this.value;pgHolidays()">'
    +years.map(function(y){return '<option value="'+y+'" '+(y===curHolYear?'selected':'')+'>'+y+'</option>';}).join('')
    +'</select>'
    +'<button class="btn bp bsm" onclick="openHolidayForm()">➕ إضافة عطلة</button>'
    +'</div></div>'
    +'<div class="info-box">وفق قانون العمل الكويتي — العمل في العطل يستحق اوفر تايم x 1.5. المناسبات الهجرية تُحدَّث سنوياً حسب الإعلان الرسمي.</div>'
    +'<div class="card">'+rows+'</div>'
    +'<div style="background:#f0fdf4;border:1px solid #86efac;border-radius:8px;padding:10px 14px;font-size:12px;">إجمالي عطل '+esc(curHolYear)+': <strong>'+list.length+' يوم</strong></div>';
}
function openHolidayForm(){
  mkOpOv('HOLF','➕ إضافة عطلة رسمية',`
  <div class="fgr">
    <div class="fg"><label>التاريخ *</label><input type="date" id="hol-d" value="${curHolYear}-01-01"/></div>
    <div class="fg"><label>اسم المناسبة *</label><input id="hol-n"/></div>
    <div class="fg"><label>النوع</label><select id="hol-t"><option>وطني</option><option>ديني</option><option>رسمي</option></select></div>
  </div>
  <div style="display:flex;gap:8px;justify-content:flex-end;margin-top:14px;">
    <button class="btn bou" onclick="clOv('HOLF')">إلغاء</button>
    <button class="btn bp" id="holSaveBtn">💾 حفظ</button>
  </div>`);
  $('holSaveBtn').addEventListener('click',()=>{
    const d=$('hol-d')?.value||'';const n=gv('hol-n');
    if(!d||!n){toast('أدخل التاريخ والاسم','err');return;}
    if(!DB.holidays)DB.holidays=seedHolidays();
    DB.holidays.push({id:Date.now(),d,n,t:$('hol-t')?.value||'رسمي'});
    curHolYear=d.slice(0,4);
    saveDB();clOv('HOLF');pgHolidays();toast('تم إضافة العطلة ✅');
  });
}
function delHoliday(id){
  if(!confirm('حذف هذه العطلة؟'))return;
  DB.holidays=(DB.holidays||[]).filter(h2=>String(h2.id)!==String(id));
  saveDB();pgHolidays();toast('تم الحذف');
}





function doRefresh(){
  try{var s=localStorage.getItem('mh6');if(s){DB=Object.assign(defDB(),JSON.parse(s));updBell();}}catch(e){}
  var m={dashboard:pgDash,search:pgSearch,staff:pgStaff,appointments:pgApts,
    org:pgOrg,salaries:pgSal,overtime:pgOT,bonuses:pgBonus,endservice:pgEnd,
    leaves:pgLeaves,permissions:pgPerms,attendance:pgAtt,evaluations:pgEvals,
    evalfiles:pgEvalFiles,selfeval:pgSelf,peereval:pgPeer,approvals:pgAppr,
    training:pgTrain,promotions:pgPromo,warnings:pgWarn,notifications:pgNotif,
    wps:pgWPS,payslip:pgPayslip,onboarding:pgOnboarding,holidays:pgHolidays,analytics:pgAnalytics,kpi:pgKPI,alerts:pgAlerts,files:pgFiles,reports:pgReports,locations:pgLoc,backup:pgBackup,licenseinfo:pgLicenseInfo,users:pgUsers,settings:pgSettings};
  if(m[curS])m[curS]();
  toast('✅ تم التحديث');
}


/* مزامنة بين التبويبات */
var _bc=null;
try{_bc=new BroadcastChannel('mh_sync');}catch(e){}
var _origSave=saveDB;
saveDB=function(){
  _origSave();
  if(_bc){try{_bc.postMessage({db:JSON.parse(JSON.stringify(DB)),by:CU?CU.name:''});}catch(e){}}
};
if(_bc){
  _bc.onmessage=function(ev){
    if(!CU||!ev.data||!ev.data.db)return;
    DB=ev.data.db;
    updBell();
    var m={dashboard:pgDash,search:pgSearch,staff:pgStaff,appointments:pgApts,
      org:pgOrg,salaries:pgSal,overtime:pgOT,bonuses:pgBonus,endservice:pgEnd,
      leaves:pgLeaves,permissions:pgPerms,attendance:pgAtt,evaluations:pgEvals,
      evalfiles:pgEvalFiles,selfeval:pgSelf,peereval:pgPeer,approvals:pgAppr,
      training:pgTrain,promotions:pgPromo,warnings:pgWarn,notifications:pgNotif,
      wps:pgWPS,payslip:pgPayslip,onboarding:pgOnboarding,holidays:pgHolidays,analytics:pgAnalytics,kpi:pgKPI,alerts:pgAlerts,files:pgFiles,reports:pgReports,locations:pgLoc,backup:pgBackup,licenseinfo:pgLicenseInfo,users:pgUsers,settings:pgSettings};
    if(m[curS])m[curS]();
    toast('🔄 تحديث من: '+(ev.data.by||'مستخدم آخر'));
  };
}
