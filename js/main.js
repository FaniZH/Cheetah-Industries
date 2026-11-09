const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];

/* shared layout components */
const HEAD=`<header>
 <div class="wrap nav">
  <a class="logo" href="index.html" aria-label="Cheetah Industries home">
   <img src="images/logo.png" alt="" width="36" height="36">
   <span>Cheetah Industries</span>
  </a>
  <button class="burger" id="bg" aria-label="Toggle menu" aria-expanded="false" aria-controls="menu">&#9776;</button>
  <ul id="menu">
   <li><a class="l" href="index.html" data-p="home">Home</a></li>
   <li><a class="l" href="about.html" data-p="about">About</a></li>
   <li><a class="l" href="services.html" data-p="services">Services</a></li>
   <li><a class="l" href="blog.html" data-p="blog">Blog</a></li>
   <li><a class="l" href="contact.html" data-p="contact">Contact</a></li>
   <li><a class="btn" href="contact.html" data-quote="1">Get a Quote</a></li>
  </ul>
 </div>
</header>`;
const FOOT=`<footer>
 <div class="wrap">
  <div class="fg">
   <div>
    <a class="logo" href="index.html" style="color:#fff" aria-label="Cheetah Industries home"><img src="images/logo.png" alt="" width="36" height="36">
   <span>Cheetah Industries</span></a>
    <p style="margin-top:16px;max-width:34ch">Intelligent software, AI innovation and reliable IT services for businesses in South Africa.</p>
    <div class="soc" id="soc"></div>
   </div>
   <div><h4>Navigate</h4><ul><li><a href="index.html">Home</a></li><li><a href="about.html">About</a></li><li><a href="services.html">Services</a></li><li><a href="blog.html">Blog</a></li><li><a href="contact.html">Contact</a></li></ul></div>
   <div><h4>Services</h4><ul><li><a href="services.html">Software development</a></li><li><a href="services.html">AI &amp; innovation</a></li><li><a href="services.html">Networking</a></li><li><a href="services.html">IT support &amp; help desk</a></li><li><a href="services.html">Hardware support</a></li></ul></div>
   <div><h4>Contact</h4><ul><li><a href="tel:+27738356321">073 835 6321</a></li><li><a href="mailto:info@cheetahindustries.co.za">info@cheetahindustries.co.za</a></li><li><a href="mailto:support@cheetahindustries.co.za">support@cheetahindustries.co.za</a></li><li><a href="mailto:sales@cheetahindustries.co.za">sales@cheetahindustries.co.za</a></li><li>South Africa</li></ul></div>
  </div>
  <div class="legal"><span>© 2026 Cheetah Industries (Cheetah Inc.). All Rights Reserved.</span><span><a href="privacy.html">Privacy Policy</a> &nbsp;|&nbsp; <a href="terms.html">Terms and Conditions</a></span></div>
 </div>
</footer>
<a class="wa" href="https://wa.me/27738356321?text=Hello%20Cheetah%20Industries" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">
 <i class="bx bxl-whatsapp" aria-hidden="true"></i>
</a>`;
$("#site-header").outerHTML=HEAD;
$("#site-footer").outerHTML=FOOT;
const WA="https://wa.me/27738356321";
const ic={
 sw:'<svg viewBox="0 0 24 24"><path d="M8 6l-6 6 6 6M16 6l6 6-6 6M14 4l-4 16"/></svg>',
 ai:'<svg viewBox="0 0 24 24"><rect x="6" y="6" width="12" height="12"/><path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4M10 10h4v4h-4z"/></svg>',
 bm:'<svg viewBox="0 0 24 24"><path d="M3 20h18M5 20V10M10 20V4M15 20v-7M20 20V8"/></svg>',
 nw:'<svg viewBox="0 0 24 24"><circle cx="12" cy="5" r="2.5"/><circle cx="5" cy="19" r="2.5"/><circle cx="19" cy="19" r="2.5"/><path d="M11 7.200L6 16.800M13 7.200l5 9.600M7.500 19h9"/></svg>',
 hd:'<svg viewBox="0 0 24 24"><path d="M4 14v-2a8 8 0 0 1 16 0v2"/><rect x="2" y="14" width="4" height="6"/><rect x="18" y="14" width="4" height="6"/><path d="M20 20c0 1.500-2 2-5 2"/></svg>',
 hw:'<svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="12"/><path d="M8 20h8M12 16v4"/></svg>',
 dg:'<svg viewBox="0 0 24 24"><path d="M6 18a4 4 0 0 1 0-8 6 6 0 0 1 11.500-1A4.500 4.500 0 0 1 18 18z"/></svg>'
};
const S=[
 {id:"software",k:"sw",t:"Software Development & Engineering",d:"Custom software, websites and business systems built around how your organisation actually works.",
  i:["Website design and development","Corporate and business websites","E-commerce and online stores","Mobile application development","Custom business applications","Business management systems","Inventory and stock control systems","Point of Sale (POS) systems","Retail and cashier management systems","Invoicing and quotation systems","Online payment integrations","Document management systems","Digital filing and records management","Customer Relationship Management (CRM)","Enterprise Resource Planning (ERP)","Database development","API development and integration","Software maintenance and upgrades"]},
 {id:"ai",k:"ai",t:"Artificial Intelligence & Innovation",d:"Practical AI that automates routine work, answers customers and turns your data into decisions.",
  i:["AI-powered business applications","Custom AI model development","Machine learning solutions","AI chatbot development","Intelligent virtual assistants","Business process automation","AI-powered customer support","Data analysis and predictive reporting","AI integration into existing systems"]},
 {id:"network",k:"nw",t:"IT Infrastructure & Networking",d:"Networks and servers that stay fast, secure and easy to monitor.",
  i:["LAN and WAN installation","Business network configuration","Router and switch configuration","Wi-Fi setup","Network troubleshooting","Network security configuration","Server installation and maintenance","Structured network cabling","Network monitoring"]},
 {id:"support",k:"hd",t:"IT Support & Help Desk",d:"Remote and on-site support that keeps your team working.",
  i:["Remote IT support","On-site technical support","Desktop support","Laptop support","IT help desk management","Operating system installation","Software troubleshooting","Hardware troubleshooting","Printer configuration","Email configuration","Preventative maintenance"]},
 {id:"hardware",k:"hw",t:"Hardware & Device Support",d:"Diagnostics, upgrades and repairs for the devices your business runs on. Brands listed are devices we support; we do not claim manufacturer authorisation.",
  i:["Lenovo computers and laptops","HP desktops and laptops","Dell desktops and laptops","ASUS computers and laptops","Apple MacBook and macOS devices","Hardware upgrades","Component replacements","Diagnostics","Software installations","Troubleshooting"]},
 {id:"digital",k:"dg",t:"Digital Business Solutions",d:"Move paper, spreadsheets and manual steps onto connected digital systems.",
  i:["Online business platforms","Digital transformation","Business process digitisation","Electronic document management","Workflow automation","Cloud-based business applications","Integrated business systems"]}
];
const short={software:"Software Development",ai:"Artificial Intelligence & Innovation",network:"IT Infrastructure & Networking",support:"IT Support & Help Desk",hardware:"Hardware & Desktop Support",digital:"Business Management Systems"};
const cardSvc=[["sw","Software Development","Websites, apps and custom systems engineered for your business.","software"],["ai","Artificial Intelligence & Innovation","Chatbots, automation and machine learning that do real work.","ai"],["bm","Business Management Systems","Inventory, POS, invoicing, CRM and ERP in one place.","software"],["nw","IT Infrastructure & Networking","Reliable networks, servers and cabling.","network"],["hd","IT Support & Help Desk","Fast remote and on-site support for your team.","support"],["hw","Hardware & Desktop Support","Diagnostics, upgrades and repairs across major brands.","hardware"]];
const B=[
 {id:"ai-small-business",c:"Artificial Intelligence",d:"2026-10-12",t:"Where AI actually helps a small business",x:["Placeholder article. Start with one repetitive task, such as answering the same customer questions or capturing invoices, and test whether an AI assistant handles it reliably.","Measure the time saved before expanding. Small, proven steps beat large rollouts."]},
 {id:"stock-control",c:"Software Development",d:"2026-09-28",t:"Why spreadsheets stop working for stock control",x:["Placeholder article. Spreadsheets break down when several people update stock at once, or when you need history and alerts.","A simple inventory system gives one source of truth and low-stock warnings."]},
 {id:"automate-reports",c:"Business Automation",d:"2026-09-10",t:"Five reports you can automate this month",x:["Placeholder article. Sales summaries, stock levels, overdue invoices, support tickets and attendance can all be generated on a schedule.","Automation removes copy-and-paste work and reduces errors."]},
 {id:"slow-wifi",c:"IT Support",d:"2026-08-30",t:"Slow Wi-Fi? Check these basics first",x:["Placeholder article. Move the router to a central, raised position, check for channel congestion and restart equipment that has run for months.","If problems continue, a site survey will show where coverage drops."]},
 {id:"network-planning",c:"Networking",d:"2026-08-14",t:"Planning a small office network",x:["Placeholder article. Plan cabling for growth, separate guest and staff Wi-Fi, and label every port.","Document your setup so support is faster when something fails."]},
 {id:"phishing",c:"Cybersecurity",d:"2026-07-30",t:"Spotting phishing emails before they cost you",x:["Placeholder article. Check the sender address, hover over links before clicking and be wary of urgent payment requests.","Use multi-factor authentication on email and banking."]},
 {id:"digital-transformation",c:"Digital Transformation",d:"2026-07-15",t:"A practical first step into digital transformation",x:["Placeholder article. Map one process end to end, remove manual steps, then digitise the rest.","Pick a process that touches customers or cash flow first."]}
];
const cats=[...new Set(B.map(b=>b.c))];
const fmt=d=>new Date(d+"T00:00").toLocaleDateString("en-ZA",{day:"numeric",month:"long",year:"numeric"});
const art=(n,l)=>`<div class="ph ${l?"v2":""}"><svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" fill="none" stroke="${l?"#000":"#fff"}" stroke-opacity=".7" stroke-width="1.5">${[
 '<circle cx="200" cy="150" r="60"/><circle cx="200" cy="150" r="100"/><path d="M40 150h320M200 20v260"/>',
 '<path d="M60 230l70-90 60 50 70-100 80 60M60 250h300"/><circle cx="130" cy="140" r="6"/><circle cx="260" cy="90" r="6"/>',
 '<rect x="90" y="60" width="220" height="150"/><path d="M90 100h220M140 230h120M200 210v20"/><path d="M110 130h80M110 150h120M110 170h60"/>',
 '<path d="M80 80h60v60H80zM260 80h60v60h-60zM170 190h60v60h-60zM140 110h120M200 140v50"/>'][n%4]}</svg></div>`;
const T=(s,m)=>{document.title=s+" | Cheetah Industries";$('meta[name=description]').content=m};
const cta=(h)=>`<section class="dark"><div class="wrap" style="text-align:left"><h2>${h||"Let’s Build Something Intelligent."}</h2><p>Talk to us about software development, IT support or technology consulting for your business.</p><div class="btns"><a class="btn" href="contact.html">Get a Quote</a><a class="btn o" href="${WA}" target="_blank" rel="noopener">WhatsApp 073 835 6321</a></div></div></section>`;
const svcCard=([k,t,d,id])=>`<div class="card">${ic[k]}<h3>${t}</h3><p>${d}</p><a class="more" href="services.html#s-${id}">Learn more</a></div>`;

const P={
home(){T("Engineering the Future of Technology","Cheetah Industries builds intelligent software, digital solutions and reliable IT infrastructure for South African businesses.");
return `<section class="dark hero"><canvas id="tv" aria-hidden="true"></canvas><div class="wrap"><h1><span>Engineering the future of technology.</span></h1><p>We build intelligent software, develop innovative digital solutions and deliver reliable IT infrastructure to help businesses operate smarter, faster and more efficiently.</p><div class="btns"><a class="btn" href="services.html">Explore Our Services</a><a class="btn o" href="contact.html">Let’s Work Together</a></div></div><div class="live"><i></i>Signal locked</div></section>
<section><div class="wrap split"><div><h2>Technology That Moves Businesses Forward.</h2><p>Cheetah Industries delivers comprehensive technology solutions. We help organisations transform their operations through software engineering, AI innovation, IT infrastructure and technical support.</p><a class="btn" href="about.html">About us</a></div>${art(0,1)}</div></section>
<section class="light"><div class="wrap"><h2>What we do</h2><div class="grid g3">${cardSvc.map(svcCard).join("")}</div></div></section>
<section class="dark"><div class="wrap split"><div><h2>Why choose Cheetah Industries?</h2><p>One team for the software you run on and the infrastructure underneath it.</p></div><ul class="check"><li>Innovative technology solutions</li><li>Business-focused software development</li><li>Reliable IT support</li><li>Scalable digital systems</li><li>Integrated AI technologies</li><li>Customer-focused technical services</li></ul></div></section>
<section><div class="wrap"><h2>Featured projects</h2><p class="muted">Placeholder projects until live case studies are supplied.</p><div class="grid g3">${[["Business Management","Stock &amp; Sales Platform","Inventory, POS and invoicing for a retail operation."],["Artificial Intelligence","Customer Support Assistant","An AI chatbot that answers common customer questions."],["Infrastructure","Office Network Rollout","Structured cabling, Wi-Fi and monitoring for a multi-room office."]].map((p,i)=>`<div class="card" style="padding:0">${art(i+1,i==1)}<div style="padding:24px 28px 30px"><span class="tag">${p[0]}</span><h3>${p[1]}</h3><p>${p[2]}</p></div></div>`).join("")}</div></div></section>
${cta()}`},
about(){T("About","Cheetah Industries is a technology-driven company focused on software products, intelligent digital solutions and dependable IT services.");
return `<section class="dark page-h"><div class="wrap"><h1 style="font-size:clamp(2.4rem,6vw,4.5rem)">About Cheetah Industries</h1></div></section>
<section><div class="wrap split"><div><h2>Who We Are</h2><p>Cheetah Industries is a technology-driven company focused on developing software products, implementing intelligent digital solutions and providing dependable IT services.</p><p>We bring together software engineering, artificial intelligence, business systems and IT infrastructure to help organisations solve real-world challenges.</p></div>${art(2,1)}</div></section>
<section class="dark"><div class="wrap split"><div class="ph founder" role="img" aria-label="Portrait placeholder for the founder"><span>ZH</span></div><div><span class="tag">Founder</span><h2>Zethembe Hlanganani Nsukazifani Madlala</h2><p>Cheetah Industries was founded by Zethembe Hlanganani Nsukazifani Madlala, who studied Information and Communications Technology (ICT).</p><p>That grounding in software development and networking shapes how we work. We build software around a real business problem, then back it with the infrastructure and support that keep it running.</p><ul class="check"><li>Software and networking understood together</li><li>Practical, business-focused solutions</li><li>Room to grow into AI, automation and digital systems</li></ul></div></div></section>
<section class="light"><div class="wrap"><div class="grid g2"><div class="card"><h3>Our Mission</h3><p>To empower businesses through innovative, accessible and intelligent technology solutions that improve productivity, simplify operations and create opportunities for growth.</p></div><div class="card"><h3>Our Vision</h3><p>To become a trusted technology solutions provider recognised for innovation, technical excellence and the development of intelligent digital products.</p></div></div></div></section>
<section class="dark"><div class="wrap"><h2>Our Values</h2><div class="grid g3">${["Innovation","Integrity","Excellence","Reliability","Customer satisfaction","Continuous improvement"].map(v=>`<div class="card"><h3 style="margin:0">${v}</h3></div>`).join("")}</div></div></section>
${cta("Work with Cheetah Industries.")}`},
services(){T("Services","Software development, AI, networking, IT support, hardware support and digital business solutions from Cheetah Industries.");
return `<section class="dark page-h"><div class="wrap"><h1 style="font-size:clamp(2.4rem,6vw,4.5rem)">Services</h1><p>Six service areas, one accountable team.</p><div class="btns">${S.map(s=>`<a class="btn o" style="padding:9px 14px;font-size:.85rem" href="services.html#s-${s.id}">${short[s.id]||s.t}</a>`).join("")}</div></div></section>
${S.map((s,n)=>`<section class="svc ${n%2?"dark":""}" id="s-${s.id}" style="${n%2?"border:0":""}"><div class="wrap split"><div>${ic[s.k].replace("<svg",'<svg style="width:40px;height:40px;stroke:currentColor;fill:none;stroke-width:1.5;margin-bottom:12px"')}<h2>${s.t}</h2><p>${s.d}</p><ul class="cols">${s.i.map(i=>`<li>${i}</li>`).join("")}</ul><a class="btn" href="contact.html?service=${s.id}">Enquire about this service</a></div>${art(n,!(n%2))}</div></section>`).join("")}`},
blog(){T("Blog","Articles on AI, software development, IT support, networking and cybersecurity from Cheetah Industries.");
const f=B[0];
return `<section class="dark page-h"><div class="wrap"><h1 style="font-size:clamp(2.4rem,6vw,4.5rem)">Blog</h1><p>Technology insight for businesses. Articles are placeholder content.</p></div></section>
<section><div class="wrap"><a class="feat post" href="article.html?id=${f.id}">${art(1,1)}<div><span class="tag">Featured &bull; ${f.c}</span><h2>${f.t}</h2><p>${f.x[0]}</p><span class="muted">${fmt(f.d)}</span></div></a>
<div class="tools"><label style="font-size:0"><input id="q" type="search" placeholder="Search articles" aria-label="Search articles"></label><span id="cats"></span></div>
<div class="grid g3" id="posts"></div><p id="none" class="muted" style="display:none;margin-top:20px">No articles match. Try a different search or category.</p></div></section>`},
article(id){const a=B.find(b=>b.id===id);if(!a)return legal("Article not found","This article does not exist. <a href=\"blog.html\">Back to the blog</a>.");T(a.t,a.x[0].slice(0,150));
const rel=B.filter(b=>b.id!==id).sort((x,y)=>(y.c===a.c)-(x.c===a.c)).slice(0,3);
return `<section class="page-h"><div class="wrap"><a href="blog.html">&larr; All articles</a><article class="body"><span class="tag" style="margin-top:28px">${a.c}</span><h1 style="font-size:clamp(2rem,5vw,3.6rem);text-transform:none;font-stretch:90%">${a.t}</h1><p class="muted">${fmt(a.d)} &bull; Placeholder article</p>${a.x.map(p=>`<p>${p}</p>`).join("")}</article></div></section>
<section class="light"><div class="wrap"><h2>Related articles</h2><div class="grid g3">${rel.map(postCard).join("")}</div></div></section>${cta()}`},
contact(){T("Contact","Contact Cheetah Industries by phone, WhatsApp, email or enquiry form. Based in South Africa.");
return `<section class="dark page-h"><div class="wrap"><h1 style="font-size:clamp(2.4rem,6vw,4.5rem)">Contact</h1><p>Tell us what you need. We’ll reply with next steps.</p></div></section>
<section><div class="wrap split" style="align-items:start"><form id="f" novalidate><div class="row"><label>Full name<input name="name" autocomplete="name" required><span class="err"></span></label><label>Company name (optional)<input name="company" autocomplete="organization"></label></div>
<div class="row"><label>Email address<input name="email" type="email" autocomplete="email" required><span class="err"></span></label><label>Contact number<input name="phone" type="tel" autocomplete="tel" required><span class="err"></span></label></div>
<div class="row"><label>Service required<select name="service" required><option value="">Choose a service</option>${S.map(s=>`<option value="${s.id}">${short[s.id]||s.t}</option>`).join("")}<option value="other">Something else</option></select><span class="err"></span></label><label>Subject<input name="subject" required><span class="err"></span></label></div>
<label>Message<textarea name="message" rows="6" required></textarea><span class="err"></span></label>
<button class="btn" type="submit">Submit Enquiry</button><div class="msg" id="ok" role="status"></div><div class="msg" id="bad" role="alert"></div></form>
<div class="cd"><div><b>Company</b>Cheetah Industries (Cheetah Inc.)</div><div><b>Phone / WhatsApp</b><a href="tel:+27738356321">073 835 6321</a></div><div><b>Email</b><a href="mailto:info@cheetahindustries.co.za">info@cheetahindustries.co.za</a></div><div><b>Support</b><a href="mailto:support@cheetahindustries.co.za">support@cheetahindustries.co.za</a></div><div><b>Sales</b><a href="mailto:sales@cheetahindustries.co.za">sales@cheetahindustries.co.za</a></div><div><b>Location</b>South Africa</div><div class="soc" id="soc2" style="margin:0"></div></div></div></section>`},
privacy(){T("Privacy Policy","Privacy policy placeholder for Cheetah Industries.");return legal("Privacy Policy","Placeholder. A full privacy policy, including how enquiry details are used and stored under POPIA, will be supplied by Cheetah Industries.")},
terms(){T("Terms and Conditions","Terms and conditions placeholder for Cheetah Industries.");return legal("Terms and Conditions","Placeholder. Final terms and conditions will be supplied by Cheetah Industries.")}
};
const legal=(t,b)=>`<section class="page-h"><div class="wrap"><h1 style="font-size:clamp(2.2rem,5vw,3.6rem);text-transform:none">${t}</h1><p>${b}</p></div></section>`;
const postCard=b=>`<a class="card post" href="article.html?id=${b.id}" style="text-decoration:none;color:inherit"><span class="tag">${b.c}</span><h3>${b.t}</h3><p class="muted" style="margin:0">${fmt(b.d)}</p></a>`;

/* socials */
const soc=[["Facebook","bxl-facebook","https://www.facebook.com/"],["Instagram","bxl-instagram","https://www.instagram.com/"],["WhatsApp","bxl-whatsapp",WA],["TikTok","bxl-tiktok","https://www.tiktok.com/"],["LinkedIn","bxl-linkedin","https://www.linkedin.com/"]];
const socHTML=soc.map(s=>`<a href="${s[2]}" target="_blank" rel="noopener" aria-label="${s[0]} (placeholder link)"><i class="bx ${s[1]}" aria-hidden="true"></i></a>`).join("");
$("#soc").innerHTML=socHTML;

/* hero static */
let raf;
function tv(){const c=$("#tv");if(!c)return;const x=c.getContext("2d"),w=c.width=240,h=c.height=135;
 if(matchMedia("(prefers-reduced-motion:reduce)").matches){draw();return}
 function draw(){const d=x.createImageData(w,h);for(let i=0;i<d.data.length;i+=4){const v=Math.random()*255;d.data[i]=d.data[i+1]=d.data[i+2]=v;d.data[i+3]=255}x.putImageData(d,0,0)}
 let t=0;(function loop(){if(!c.isConnected)return;if(++t%3==0)draw();raf=requestAnimationFrame(loop)})()}

/* blog */
function blog(){let cat="All",q="";const cw=$("#cats");
 cw.innerHTML=["All",...cats].map(c=>`<button class="chip" aria-pressed="${c==="All"}" data-c="${c}" style="margin:0 6px 6px 0">${c}</button>`).join("");
 const run=()=>{const l=B.filter(b=>(cat==="All"||b.c===cat)&&(b.t+b.c+b.x.join(" ")).toLowerCase().includes(q));
  $("#posts").innerHTML=l.map(postCard).join("");$("#none").style.display=l.length?"none":"block"};
 cw.onclick=e=>{const b=e.target.closest("button");if(!b)return;cat=b.dataset.c;$$(".chip",cw).forEach(x=>x.setAttribute("aria-pressed",x===b));run()};
 $("#q").oninput=e=>{q=e.target.value.trim().toLowerCase();run()};run()}

/* contact */
function contact(pre){const f=$("#f");$("#soc2").innerHTML=socHTML;if(pre)f.service.value=pre;
 f.onsubmit=e=>{e.preventDefault();let ok=true;
  $$("[required]",f).forEach(i=>{const m=i.nextElementSibling;let msg="";const v=i.value.trim();
   if(!v)msg="This field is required.";
   else if(i.name==="email"&&!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v))msg="Enter a valid email address, like name@company.co.za.";
   else if(i.name==="phone"&&!/^(\+?27|0)[\d\s-]{8,12}$/.test(v))msg="Enter a South African number, like 073 835 6321.";
   else if(i.name==="message"&&v.length<10)msg="Please write at least 10 characters.";
   i.setAttribute("aria-invalid",!!msg);if(m&&m.classList.contains("err"))m.textContent=msg;if(msg)ok=false});
  const bad=$("#bad"),good=$("#ok");bad.classList.remove("on");good.classList.remove("on");
  if(!ok){bad.textContent="Some details need fixing. Check the highlighted fields and submit again.";bad.classList.add("on");return}
  const d=Object.fromEntries(new FormData(f));
  const to=d.service==="software"||d.service==="digital"?"sales":"info";
  const body=`Name: ${d.name}\nCompany: ${d.company||"-"}\nEmail: ${d.email}\nPhone: ${d.phone}\nService: ${f.service.selectedOptions[0].text}\n\n${d.message}`;
  location.href=`mailto:${to}@cheetahindustries.co.za?subject=${encodeURIComponent(d.subject)}&body=${encodeURIComponent(body)}`;
  good.textContent="Your email app is opening with this enquiry. Press send to deliver it. You can also WhatsApp us on 073 835 6321.";good.classList.add("on");f.reset()}}


/* page setup */
const page=document.body.dataset.page;
const qs=new URLSearchParams(location.search);
const app=$("#app");
app.innerHTML=page==="article"?P.article(qs.get("id")):P[page]();
app.className="fade";
$$(".nav a.l").forEach(a=>{if(a.dataset.p===(page==="article"?"blog":page))a.setAttribute("aria-current","page")});
if(page==="home")tv();
if(page==="blog")blog();
if(page==="contact")contact(qs.get("service"));
if(page==="services"&&location.hash){const el=$(location.hash);if(el)el.scrollIntoView()}
$("#bg").onclick=()=>{const m=$("#menu"),o=m.classList.toggle("open");$("#bg").setAttribute("aria-expanded",o)};
