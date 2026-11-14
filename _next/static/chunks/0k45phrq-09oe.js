(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,81867,e=>{"use strict";var t=e.i(43476),a=e.i(71645),n=e.i(18566),o=e.i(37956);e.i(16787);var i=e.i(39964);function r({sheet:e}){return(0,t.jsxs)("div",{className:"space-y-6",children:[(0,t.jsx)("p",{className:"text-lg text-ink-muted",children:e.intro}),(0,t.jsx)(i.N,{children:(0,t.jsx)(i.Q,{className:"pt-5",children:(0,t.jsx)("dl",{className:"divide-y divide-border",children:e.lines.map(e=>(0,t.jsxs)("div",{className:"grid gap-1 py-3 sm:grid-cols-2 sm:gap-6",children:[(0,t.jsxs)("dt",{children:[(0,t.jsx)("span",{className:"font-medium",children:e.label}),e.hint&&(0,t.jsx)("span",{className:"block text-sm text-ink-muted",children:e.hint})]}),(0,t.jsx)("dd",{className:e.missing?"text-ink-muted italic":"",children:e.value})]},e.label))})})}),(0,t.jsx)("ul",{className:"list-disc space-y-1.5 pl-5 text-ink-muted",children:e.notes.map(e=>(0,t.jsx)("li",{children:e},e))}),(0,t.jsxs)("div",{className:"flex flex-wrap items-center gap-4 print:hidden",children:[(0,t.jsx)(o.f,{}),e.link&&(0,t.jsxs)("a",{className:"text-honey-strong underline underline-offset-4 hover:text-cocoa",href:e.link.url,target:"_blank",rel:"noopener noreferrer",children:[e.link.label," (opens in a new tab)"]})]})]})}var s=e.i(59544),l=e.i(37757),d=e.i(75379),c=e.i(23363);function u(e,t,a,n){let o=t?(0,c.d)(t.trim()):"";return{label:e,value:o||`[${a}]`,hint:n,missing:!o}}e.i(68972);var h=e.i(14125),f=e.i(76533),m=e.i(74430);function y(){var e,a,o;let i,c,y,p,b=(0,n.useSearchParams)().get("key"),k=(0,m.L)();if(null===(0,m.E)()||!k)return(0,t.jsx)("p",{className:"text-ink-muted",children:"Preparing your worksheet..."});if("ein"!==b&&"probate"!==b)return(0,t.jsxs)("div",{className:"space-y-4",children:[(0,t.jsx)(l.f,{title:"Worksheet not found",description:"Please choose a worksheet from the Paperwork page."}),(0,t.jsx)(s.f,{href:"/paperwork/",children:"Back to Paperwork"})]});let w="ein"===b?(i=k.ssnLast4?`ending in ${k.ssnLast4.slice(-4)}`:"",{title:"Estate tax ID (EIN) worksheet",intro:"Information the IRS online application typically asks for when the applicant is an estate. Use it to gather your answers before you start.",lines:[u("Name of the person who passed away",k.decedentName,"full legal name","As it appears on the death certificate."),u("Date of death",(0,d.C)(k.dateOfDeath),"date of death","Month, day and year."),{...u("Social Security number of the person who passed away",i,"full number","You will need the full number. Tiramisu only keeps the last 4."),value:i?`${i} (full number needed)`:"[full number]"},u("Executor or personal representative",k.executorName,"executor name","The person responsible for the estate."),u("Executor mailing address",null,"your mailing address","Where the IRS can send mail about the estate."),u("Reason for applying","Estate of a person who passed away","reason","The application usually offers an estate option.")],notes:["It is free to apply directly with the IRS. You do not need to pay anyone to get an EIN.","Tiramisu does not apply for anything on your behalf. You review and submit your own application."],link:{label:"IRS: apply for an EIN online",url:"https://www.irs.gov/businesses/small-businesses-self-employed/apply-for-an-employer-identification-number-ein-online"}}):(e=(0,h.D)(k.id),a=(0,f.D)(k.id),o=(0,h.F)(k.id),c=e.filter(e=>"beneficiary"===e.role||"family"===e.role),y="yes"===k.hasWill?"Yes":"no"===k.hasWill?"No":"Not sure yet",p=[k.county?`${k.county} County`:"",k.state??""].filter(Boolean).join(", "),{title:"Probate information sheet",intro:"General information to bring to your court or attorney. Not an official form.",lines:[u("Name of the person who passed away",k.decedentName,"full legal name","As on the death certificate."),u("Date of birth",(0,d.C)(k.dateOfBirth),"date of birth",""),u("Date of death",(0,d.C)(k.dateOfDeath),"date of death",""),u("Last residence",k.residence,"last address","Where they lived at the time."),u("County and state",p,"county and state","Probate is usually filed where they lived."),{label:"Will",value:y,hint:"If there is a will, bring the original.",missing:"unknown"===k.hasWill},u("Executor",k.executorName?`${k.executorName}${k.executorRelationship?` (${k.executorRelationship})`:""}`:"","executor name",""),u("Heirs and beneficiaries",c.map(e=>e.relationship?`${e.name} (${e.relationship})`:e.name).join("; "),"names of family and beneficiaries","Taken from the People page."),u("Estimated value going through probate",a&&a.probateCents>0?(0,d.T)(a.probateCents):"","estimated value",o?"An estimate from your inventory. It can change.":"An estimate from your inventory."),u("Court",k.courtName,"name of the court","Your attorney or the court clerk can tell you."),u("Case number",k.caseNumber,"case number","Once a case has been opened.")],notes:["This sheet is a general guide only. An attorney can tell you what your court needs."]});return(0,t.jsxs)("div",{className:"space-y-6",children:[(0,t.jsx)(l.f,{title:w.title,actions:(0,t.jsx)(s.f,{variant:"quiet",href:"/paperwork/",children:"Back to Paperwork"})}),(0,t.jsx)(r,{sheet:w})]})}e.s(["default",0,function(){return(0,t.jsx)(a.Suspense,{fallback:(0,t.jsx)("p",{className:"text-ink-muted",children:"Preparing your worksheet..."}),children:(0,t.jsx)(y,{})})}],81867)},37956,e=>{"use strict";var t=e.i(43476);e.i(16787);var a=e.i(59544);e.s(["f",0,function({variant:e="primary"}){return(0,t.jsx)(a.f,{variant:e,onClick:()=>window.print(),children:"Print or save as PDF"})}])},23363,e=>{"use strict";var t=e.i(9207),a=e.i(75379);function n(e){return e.replace(/\d(?:[ -]?\d){4,}/g,"[number removed]")}function o(e,a,i="data"){let r=e?e.trim():"";return("free"===i?(0,t._)(r)??"":r?n(r):"")||`[${a}]`}function i(e){let t=e.estate,n=(0,a.C)(t.dateOfDeath);return`${o(t.decedentName,"name of your loved one")}${n?`, who passed away on ${n}`:", who passed away on [date of death]"}`}function r(e){let t=e.estate,n=(0,a.C)(t.dateOfDeath);return`${o(t.decedentName,"name of your loved one")} passed away on ${n||"[date of death]"}`}e.s(["b",0,[{key:"bank_notice",title:"Notify a bank",description:"Tell a bank or financial institution about the death and ask what they need.",needs:"asset",askRecipient:!1},{key:"dod_balance",title:"Date-of-death balance",description:"Ask for the balance of an account on the date of death.",needs:"asset",askRecipient:!1},{key:"creditor_notice",title:"Notify a creditor",description:"Let a lender or biller know, and say the debt will be handled through the estate.",needs:"liability",askRecipient:!1},{key:"credit_bureau",title:"Credit bureau request",description:"Ask a bureau to flag the file as deceased and send a copy of the report.",needs:null,askRecipient:!0},{key:"ssa_notice",title:"Notify Social Security",description:"A short letter reporting the death.",needs:null,askRecipient:!1},{key:"utility_cancel",title:"Cancel or transfer a service",description:"For a utility or subscription.",needs:null,askRecipient:!0},{key:"employer_pension",title:"Employer or pension",description:"Ask about final pay and survivor benefits.",needs:null,askRecipient:!0}],"c",0,function(e,t){var s;let l,d,c,u,h=t.estate,f=o(h.decedentName,"name of your loved one"),m=o(t.options?.recipientName,"name of the company","free"),y=(u=t.options?.assetId)?t.assets.find(e=>e.id===u):void 0,p=o(y?.institution,"name of the institution"),b=function(e){let{estate:t}=e,a=t.executorRelationship?`, ${n(t.executorRelationship)}`:"";return["Sincerely,\n\n[your signature]",o(t.executorName,"your name")+a,`Executor of the estate of ${o(t.decedentName,"name of your loved one")}`,o(e.options?.executorAddress,"your mailing address","free"),"[your phone number]  [your email]"].join("\n")}(t),k=e=>{let t;return`${(t=e?.last4?e.last4.replace(/[^A-Za-z0-9]/g,"").slice(-4):"")?`account ending in ${t}`:"account ending in [last 4 digits]"}${e?.name?` (${n(e.name)})`:""}`};switch(e){case"bank_notice":l=`Notice of death - ${p}`,d=`${p}
[institution mailing address]`,c=`To whom it may concern,

I am writing to let you know that ${r(t)}. I am the executor of the estate.

Our records show an ${k(y)} at your institution in the name of the deceased. Please place a note on the account and let me know what documents you need from me, such as a death certificate and proof of my authority as executor.

Please also tell me how to learn the balance on the date of death, and whether any beneficiary or payable-on-death designation is on file.

Thank you for your help and your patience.`;break;case"dod_balance":l=`Date-of-death balance - ${p}`,d=`${p}
[institution mailing address]`,c=`To whom it may concern,

I am the executor of the estate of ${i(t)}.

Please send me a written statement of the balance, including interest, of the ${k(y)} as of ${h.dateOfDeath&&(0,a.C)(h.dateOfDeath)?`the date of death, ${(0,a.C)(h.dateOfDeath)}`:"[date of death]"}. If you need any documents from me first, please let me know.

Thank you.`;break;case"creditor_notice":{let e=o(y?.institution,"name of the creditor");l=`Notice of death - ${e}`,d=`${e}
[creditor mailing address]`,c=`To whom it may concern,

I am writing to let you know that ${r(t)}. I am the executor of the estate.

This letter concerns the ${k(y)}. Please note the death on the account and send any future statements or questions to me at the address below.

As general information, a debt like this is usually handled through the estate, and family members are generally not personally responsible for it unless they co-signed or jointly held the account. Please check with your attorney if you have questions about how this applies.

Please send me a statement of the balance and let me know what you need from me.

Thank you for your understanding.`;break}case"credit_bureau":l=`Deceased flag request - ${"[name of the company]"===m?"credit bureau":m}`,d=`${o(t.options?.recipientName,"credit bureau name","free")}
[credit bureau mailing address]`,c=`To whom it may concern,

I am the executor of the estate of ${i(t)}.

Please flag the credit file as deceased, and send me a copy of the credit report. Identifying details: date of birth ${h.dateOfBirth?(0,a.C)(h.dateOfBirth):"[date of birth]"}, Social Security number ending in ${h.ssnLast4?h.ssnLast4.slice(-4):"[last 4 digits]"}, last address ${o(h.residence,"last address","free")}.

I have enclosed a copy of the death certificate and proof of my role as executor. Please tell me if you need anything else.

Thank you.`;break;case"ssa_notice":l="Notice of death - Social Security",d="Social Security Administration\n[your local office address]",c=`To whom it may concern,

I am writing to report that ${r(t)}.

Date of birth: ${h.dateOfBirth?(0,a.C)(h.dateOfBirth):"[date of birth]"}. Social Security number ending in ${h.ssnLast4?h.ssnLast4.slice(-4):"[last 4 digits]"}.

Please tell me what you need from me, and whether any survivor benefits may apply. A copy of the death certificate is enclosed.

Thank you.`;break;case"utility_cancel":l=`Cancel or transfer service - ${"[name of the company]"===m?"provider":m}`,d=`${m}
[provider mailing address]`,c=`To whom it may concern,

I am the executor of the estate of ${i(t)}.

Please cancel, or change the name on, the account at [service address], account number ending in [last 4 digits]. Please set the end date as [date you would like service to end], and send any final bill to me at the address below.

Please let me know if you need a death certificate or other documents.

Thank you.`;break;case"employer_pension":l=`Final pay and benefits - ${"[name of the company]"===m?"employer or plan":m}`,d=`${m}
[human resources or plan administrator address]`,c=`To whom it may concern,

I am writing to let you know that ${f}, who worked for you, passed away${h.dateOfDeath?` on ${(0,a.C)(h.dateOfDeath)}`:" on [date of death]"}. I am the executor of the estate.

Please tell me about any final pay, unused time off, group life insurance, retirement or pension benefits, and survivor benefits, and what documents you need from me.

Thank you for your help.`}let w=`${(s=d,`${(0,a.C)(new Date().toISOString())||"[date]"}

${s}
`)}
${c}

${b}
`;return{title:l,to:d,body:w}},"d",0,n])}]);