from pathlib import Path
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, PageBreak, KeepTogether
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.colors import HexColor
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4
from pypdf import PdfReader
import hashlib,json
out=Path('output/pdf/Jodi_Abrahams_CV_Candidate.pdf')
styles={
'name':ParagraphStyle('name',fontName='Helvetica-Bold',fontSize=25,leading=29,textColor=HexColor('#172b42'),spaceAfter=4),
'title':ParagraphStyle('title',fontName='Helvetica',fontSize=13,leading=17,spaceAfter=8),
'contact':ParagraphStyle('contact',fontName='Helvetica',fontSize=9,leading=13,spaceAfter=3),
'section':ParagraphStyle('section',fontName='Helvetica-Bold',fontSize=10.5,leading=14,textColor=HexColor('#234c6b'),spaceBefore=9,spaceAfter=5,keepWithNext=True),
'role':ParagraphStyle('role',fontName='Helvetica-Bold',fontSize=10.5,leading=14,spaceBefore=5,spaceAfter=3,keepWithNext=True),
'meta':ParagraphStyle('meta',fontName='Helvetica',fontSize=9.5,leading=13,textColor=HexColor('#455466'),spaceAfter=4,keepWithNext=True),
'body':ParagraphStyle('body',fontName='Helvetica',fontSize=10,leading=14,spaceAfter=5),
'bullet':ParagraphStyle('bullet',fontName='Helvetica',fontSize=9.8,leading=13.5,leftIndent=11,firstLineIndent=-9,spaceAfter=3),
}
story=[]
def p(text,kind='body'):story.append(Paragraph(text,styles[kind]))
def section(text):p(text.upper(),'section')
def role(title,meta,bullets):
 p(title,'role');p(meta,'meta')
 for b in bullets:p('- '+b,'bullet')
summary='Full-stack software developer building responsive interfaces, SaaS workflows and API-driven applications with React, Next.js, TypeScript, JavaScript, Node.js and PostgreSQL. My experience spans authentication, payment integrations, real-time features, debugging, automated testing and deployment. I take work from requirements through implementation and review, with attention to maintainability and the people using the product. I also develop AI-powered application prototypes and use Claude and Codex as development tools, checking generated changes through code review and testing.'
p('JODI ABRAHAMS','name');p('Full-Stack Software Developer','title')
p('Cape Town, South Africa | <link href="tel:+27782096121" color="#234c6b">078 209 6121</link> | <link href="mailto:jodiabrahams9@gmail.com" color="#234c6b">jodiabrahams9@gmail.com</link>','contact')
p('<link href="https://jodiabrahamsportfolio.vercel.app/" color="#234c6b">Portfolio: jodiabrahamsportfolio.vercel.app</link> | <link href="https://github.com/JodiAB" color="#234c6b">GitHub: JodiAB</link> | <link href="https://www.linkedin.com/in/jodi-abrahams/" color="#234c6b">LinkedIn: jodi-abrahams</link>','contact')
section('Professional summary');p(summary)
section('Technical skills')
for t in [
'<b>Frontend:</b> React, Next.js, JavaScript, TypeScript, Vue.js, HTML5, CSS3, Tailwind CSS; React Native; responsive interfaces and reusable components.',
'<b>Backend &amp; data:</b> Node.js, REST APIs, PostgreSQL, Prisma, MySQL, Supabase, Appwrite; authentication and API integration. Python exposure.',
'<b>Quality &amp; delivery:</b> Vitest, Jest, Testing Library, Postman, debugging, Git/GitHub, pull requests, npm, Vite, Vercel; Docker and CI/CD basics.',
'<b>Product &amp; AI workflow:</b> Figma-to-code, TipTap/ProseMirror, PDF exports; GSAP, Framer Motion, React Three Fiber/Three.js. Claude and Codex for AI-assisted development; structured model-output validation in application prototypes.'
]:p(t)
section('Work experience')
role('Freelance Full-Stack Software Developer','Independent / Remote | Apr 2026 - Present | Full-time',[
'Build and maintain independent web applications, translating product requirements into responsive interfaces, API integrations and relational data workflows.',
'Manage implementation, testing, debugging, Git/GitHub review workflows and deployment. Earlier part-time freelance and independent development from Jan 2020 ran alongside employed roles.'
])
role('Contract Full Stack Developer','TransHumanity / Remote | Nov 2025 - Apr 2026',[
'Delivered production SaaS reporting features across rich-text editing, report management, content libraries, map snapshots and PDF/export workflows.',
'Resolved editor selection, toolbar state, undo/redo and export-layout issues. Added automated tests and took changes through pull-request review, rebasing and merge.'
])
role('Full Stack Developer','Crunchtime Deliveries / Remote | Jun 2024 - Jun 2025',[
'Delivered responsive React, Next.js and React Native interfaces for a commercial SaaS delivery management platform.',
'Built real-time tracking, payment integration and customer, driver and administrator workflows; connected interfaces to backend APIs and supported production rollouts.'
])
story.append(PageBreak())
p('JODI ABRAHAMS','role');p('Full-Stack Software Developer | Experience, projects & education','meta')
section('Earlier experience')
role('Web Developer Intern','Life Choices Studio / Cape Town | Apr 2024 - Jun 2024',[
'Developed a responsive WordPress e-commerce template, optimised imagery and translated designs into web layouts. Facilitated stand-ups and sprint reviews as Scrum Master.'
])
role('Support Engineer','Securicom / Cape Town | Feb 2022 - Mar 2023',[
'Diagnosed software, network and email-security issues for enterprise clients. Managed support tickets, documented resolutions and collaborated on recurring technical problems.'
])
role('Junior Network Technician (Volunteer)','Cape Peninsula University of Technology / Cape Town | Dec 2017 - Jan 2019',[
'Assisted with routers, switches, wireless access points and LAN troubleshooting, supporting network engineers during campus infrastructure upgrades.'
])
section('Selected project experience')
role('SaaS Delivery Management Platform','Commercial development at Crunchtime Deliveries',[
'Built web and mobile delivery workflows with React, Next.js, TypeScript/JavaScript and React Native, including payment integration, real-time tracking and role-based interfaces. This work forms part of the employment listed on page 1.'
])
role('Possibility Engine','Independent engineering prototype | TypeScript, Next.js; structured AI workflows',[
'Developed an AI-assisted problem-solving application with modular interpretation, retrieval, generation and validation stages. Worked on structured outputs, citation/grounding checks, security controls and regression testing.',
'Prototype limitations remain: passing structural checks does not establish practical usefulness. PostgreSQL persistence is not claimed as verified pending controlled-test confirmation.'
])
role('FuelWise SA','Independent product | React, TypeScript, Vite, Supabase, REST APIs, Vitest',[
'Built and deployed a South African fuel-planning application with interactive calculators, account views, API-backed data, authentication and saved vehicle/calculation workflows.',
'Implemented backend integrations and automated tests, with release tooling and deployment on Vercel.'
])
role('OpsFlow','Independent portfolio project | Next.js, TypeScript, Prisma, PostgreSQL, Vitest',[
'Built a SaaS-style operations workspace with authentication, role-based workflows, dashboards, rich-text reports, PDF exports and automated tests.'
])
section('Education & qualifications')
for t in ['<b>Full Stack Web Development</b> | Life Choices Coding Academy | 2023 - Mar 2024','<b>A+ Certification</b> | Pearson VUE Testing Centre | May 2023','<b>Information and Communication Technology (Incomplete)</b> | Cape Peninsula University of Technology | Jan 2017','<b>Matric Certificate</b> | De Kuilen High School | Jan 2016']:p(t,'contact')
section('Languages');p('English: Native | Afrikaans: Basic to intermediate','contact')
def footer(c,doc):
 c.setStrokeColor(HexColor('#ccd4dd'));c.line(44,38,A4[0]-44,38)
 c.setFont('Helvetica',8);c.setFillColor(HexColor('#546170'));c.drawString(44,25,'CANDIDATE FOR REVIEW - NOT APPROVED | 26 October 2026');c.drawRightString(A4[0]-44,25,str(doc.page))
doc=SimpleDocTemplate(str(out),pagesize=A4,rightMargin=44,leftMargin=44,topMargin=36,bottomMargin=48,title='Jodi Abrahams - Full-Stack Software Developer - Candidate CV',author='Jodi Abrahams')
doc.build(story,onFirstPage=footer,onLaterPages=footer)
r=PdfReader(out);text='\n\n'.join(f'PAGE {i+1}\n'+page.extract_text() for i,page in enumerate(r.pages));Path('output/pdf/Jodi_Abrahams_CV_Candidate.txt').write_text(text,encoding='utf-8')
print('Pages:',len(r.pages));print('Words:',len(text.split()));print('PDF:',out)
print('Public CV SHA256:',hashlib.sha256(Path('public/assets/Jodi_Abrahams_CV.pdf').read_bytes()).hexdigest())
