(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,89151,e=>{"use strict";var t=e.i(43476),a=e.i(71645),n=e.i(18566),i=e.i(37956);e.i(16787);var o=e.i(59544),s=e.i(74031),r=e.i(23363);e.i(68972);var d=e.i(76533),l=e.i(14125);function c({estate:e,meta:n}){let h=(0,l.D)(e.id),u=(0,d.e)(e.id),f=n.needs?u.filter(e=>e.kind===n.needs):[],[m,y]=(0,a.useState)(""),[p,b]=(0,a.useState)(""),[k,g]=(0,a.useState)(""),[w,x]=(0,a.useState)(null),[v,$]=(0,a.useState)(!1),[j,N]=(0,a.useState)(""),C=(0,a.useMemo)(()=>(0,r.c)(n.key,{estate:e,people:h,assets:u,options:{assetId:m||null,recipientName:p||null,executorAddress:k||null}}),[n.key,e,m,p,k,u.length,h.length]),P=w??C.body;function S(e){return t=>{e(t),null!==w&&$(!0)}}async function T(){try{await navigator.clipboard.writeText(P),N("Copied. You can paste it into an email or document.")}catch{N("Copying did not work here. Select the text and copy it by hand.")}}return(0,t.jsxs)("div",{className:"space-y-6",children:[(0,t.jsxs)("div",{className:"space-y-4 print:hidden",children:[n.needs&&(0,t.jsx)(s.N,{id:"asset",label:"asset"===n.needs?"Which account is this about?":"Which debt is this about?",hint:"Only the last 4 digits are used.",children:(0,t.jsxs)(s.d,{value:m,onChange:e=>S(y)(e.target.value),children:[(0,t.jsx)("option",{value:"",children:"Choose one (or leave blank to fill in by hand)"}),f.map(e=>(0,t.jsxs)("option",{value:e.id,children:[e.name,e.institution?`, ${e.institution}`:"",e.last4?` ••••${e.last4}`:""]},e.id))]})}),n.askRecipient&&(0,t.jsx)(s.N,{id:"recipient",label:"Who is this addressed to?",hint:"For example, the company name.",children:(0,t.jsx)(s.e,{value:p,onChange:e=>S(b)(e.target.value)})}),(0,t.jsx)(s.N,{id:"address",label:"Your mailing address (optional)",children:(0,t.jsx)(s.e,{value:k,onChange:e=>S(g)(e.target.value)})}),(0,t.jsx)(s.N,{id:"letter-text",label:"Your letter",hint:"You can edit this text before you copy or print it.",children:(0,t.jsx)(s.o,{rows:20,value:P,onChange:e=>x(e.target.value)})}),null!==w&&v&&(0,t.jsxs)("div",{role:"status",className:"space-y-2 rounded-md bg-honey-soft/40 p-3",children:[(0,t.jsx)("p",{className:"text-sm text-ink-muted",children:"You've changed these details since editing the letter. Your own edits are safe for now. Updating the letter with the new details will replace them."}),(0,t.jsx)(o.f,{type:"button",variant:"secondary",onClick:()=>{x(null),$(!1)},children:"Update the letter with these details"})]}),(0,t.jsx)("p",{className:"text-ink-muted",children:"Review before sending. Tiramisu never sends anything for you."}),(0,t.jsxs)("div",{className:"flex flex-wrap items-center gap-3",children:[(0,t.jsx)(o.f,{onClick:T,children:"Copy letter"}),(0,t.jsx)(i.f,{variant:"secondary"}),(0,t.jsx)("span",{role:"status","aria-live":"polite",className:"text-sage-strong",children:j})]})]}),(0,t.jsx)("pre",{className:"hidden whitespace-pre-wrap font-serif text-base print:block",children:P})]})}var h=e.i(37757),u=e.i(74430);function f(){let e=(0,n.useSearchParams)(),a=(0,u.L)(),i=(0,u.E)(),s=r.b.find(t=>t.key===e.get("key"));return null!==i&&a?s?(0,t.jsxs)("div",{className:"space-y-6",children:[(0,t.jsx)(h.f,{title:s.title,description:s.description,actions:(0,t.jsx)(o.f,{variant:"quiet",href:"/paperwork/",children:"Back to Paperwork"})}),(0,t.jsx)(c,{estate:a,meta:s},s.key)]}):(0,t.jsxs)("div",{className:"space-y-4",children:[(0,t.jsx)(h.f,{title:"Letter not found",description:"Please choose a letter from the Paperwork page."}),(0,t.jsx)(o.f,{href:"/paperwork/",children:"Back to Paperwork"})]}):(0,t.jsx)("p",{className:"text-ink-muted",children:"Preparing your letter..."})}e.s(["default",0,function(){return(0,t.jsx)(a.Suspense,{fallback:(0,t.jsx)("p",{className:"text-ink-muted",children:"Preparing your letter..."}),children:(0,t.jsx)(f,{})})}],89151)},37956,e=>{"use strict";var t=e.i(43476);e.i(16787);var a=e.i(59544);e.s(["f",0,function({variant:e="primary"}){return(0,t.jsx)(a.f,{variant:e,onClick:()=>window.print(),children:"Print or save as PDF"})}])},23363,e=>{"use strict";var t=e.i(9207),a=e.i(75379);function n(e){return e.replace(/\d(?:[ -]?\d){4,}/g,"[number removed]")}function i(e,a,o="data"){let s=e?e.trim():"";return("free"===o?(0,t._)(s)??"":s?n(s):"")||`[${a}]`}function o(e){let t=e.estate,n=(0,a.C)(t.dateOfDeath);return`${i(t.decedentName,"name of your loved one")}${n?`, who passed away on ${n}`:", who passed away on [date of death]"}`}function s(e){let t=e.estate,n=(0,a.C)(t.dateOfDeath);return`${i(t.decedentName,"name of your loved one")} passed away on ${n||"[date of death]"}`}e.s(["b",0,[{key:"bank_notice",title:"Notify a bank",description:"Tell a bank or financial institution about the death and ask what they need.",needs:"asset",askRecipient:!1},{key:"dod_balance",title:"Date-of-death balance",description:"Ask for the balance of an account on the date of death.",needs:"asset",askRecipient:!1},{key:"creditor_notice",title:"Notify a creditor",description:"Let a lender or biller know, and say the debt will be handled through the estate.",needs:"liability",askRecipient:!1},{key:"credit_bureau",title:"Credit bureau request",description:"Ask a bureau to flag the file as deceased and send a copy of the report.",needs:null,askRecipient:!0},{key:"ssa_notice",title:"Notify Social Security",description:"A short letter reporting the death.",needs:null,askRecipient:!1},{key:"utility_cancel",title:"Cancel or transfer a service",description:"For a utility or subscription.",needs:null,askRecipient:!0},{key:"employer_pension",title:"Employer or pension",description:"Ask about final pay and survivor benefits.",needs:null,askRecipient:!0}],"c",0,function(e,t){var r;let d,l,c,h,u=t.estate,f=i(u.decedentName,"name of your loved one"),m=i(t.options?.recipientName,"name of the company","free"),y=(h=t.options?.assetId)?t.assets.find(e=>e.id===h):void 0,p=i(y?.institution,"name of the institution"),b=function(e){let{estate:t}=e,a=t.executorRelationship?`, ${n(t.executorRelationship)}`:"";return["Sincerely,\n\n[your signature]",i(t.executorName,"your name")+a,`Executor of the estate of ${i(t.decedentName,"name of your loved one")}`,i(e.options?.executorAddress,"your mailing address","free"),"[your phone number]  [your email]"].join("\n")}(t),k=e=>{let t;return`${(t=e?.last4?e.last4.replace(/[^A-Za-z0-9]/g,"").slice(-4):"")?`account ending in ${t}`:"account ending in [last 4 digits]"}${e?.name?` (${n(e.name)})`:""}`};switch(e){case"bank_notice":d=`Notice of death - ${p}`,l=`${p}
[institution mailing address]`,c=`To whom it may concern,

I am writing to let you know that ${s(t)}. I am the executor of the estate.

Our records show an ${k(y)} at your institution in the name of the deceased. Please place a note on the account and let me know what documents you need from me, such as a death certificate and proof of my authority as executor.

Please also tell me how to learn the balance on the date of death, and whether any beneficiary or payable-on-death designation is on file.

Thank you for your help and your patience.`;break;case"dod_balance":d=`Date-of-death balance - ${p}`,l=`${p}
[institution mailing address]`,c=`To whom it may concern,

I am the executor of the estate of ${o(t)}.

Please send me a written statement of the balance, including interest, of the ${k(y)} as of ${u.dateOfDeath&&(0,a.C)(u.dateOfDeath)?`the date of death, ${(0,a.C)(u.dateOfDeath)}`:"[date of death]"}. If you need any documents from me first, please let me know.

Thank you.`;break;case"creditor_notice":{let e=i(y?.institution,"name of the creditor");d=`Notice of death - ${e}`,l=`${e}
[creditor mailing address]`,c=`To whom it may concern,

I am writing to let you know that ${s(t)}. I am the executor of the estate.

This letter concerns the ${k(y)}. Please note the death on the account and send any future statements or questions to me at the address below.

As general information, a debt like this is usually handled through the estate, and family members are generally not personally responsible for it unless they co-signed or jointly held the account. Please check with your attorney if you have questions about how this applies.

Please send me a statement of the balance and let me know what you need from me.

Thank you for your understanding.`;break}case"credit_bureau":d=`Deceased flag request - ${"[name of the company]"===m?"credit bureau":m}`,l=`${i(t.options?.recipientName,"credit bureau name","free")}
[credit bureau mailing address]`,c=`To whom it may concern,

I am the executor of the estate of ${o(t)}.

Please flag the credit file as deceased, and send me a copy of the credit report. Identifying details: date of birth ${u.dateOfBirth?(0,a.C)(u.dateOfBirth):"[date of birth]"}, Social Security number ending in ${u.ssnLast4?u.ssnLast4.slice(-4):"[last 4 digits]"}, last address ${i(u.residence,"last address","free")}.

I have enclosed a copy of the death certificate and proof of my role as executor. Please tell me if you need anything else.

Thank you.`;break;case"ssa_notice":d="Notice of death - Social Security",l="Social Security Administration\n[your local office address]",c=`To whom it may concern,

I am writing to report that ${s(t)}.

Date of birth: ${u.dateOfBirth?(0,a.C)(u.dateOfBirth):"[date of birth]"}. Social Security number ending in ${u.ssnLast4?u.ssnLast4.slice(-4):"[last 4 digits]"}.

Please tell me what you need from me, and whether any survivor benefits may apply. A copy of the death certificate is enclosed.

Thank you.`;break;case"utility_cancel":d=`Cancel or transfer service - ${"[name of the company]"===m?"provider":m}`,l=`${m}
[provider mailing address]`,c=`To whom it may concern,

I am the executor of the estate of ${o(t)}.

Please cancel, or change the name on, the account at [service address], account number ending in [last 4 digits]. Please set the end date as [date you would like service to end], and send any final bill to me at the address below.

Please let me know if you need a death certificate or other documents.

Thank you.`;break;case"employer_pension":d=`Final pay and benefits - ${"[name of the company]"===m?"employer or plan":m}`,l=`${m}
[human resources or plan administrator address]`,c=`To whom it may concern,

I am writing to let you know that ${f}, who worked for you, passed away${u.dateOfDeath?` on ${(0,a.C)(u.dateOfDeath)}`:" on [date of death]"}. I am the executor of the estate.

Please tell me about any final pay, unused time off, group life insurance, retirement or pension benefits, and survivor benefits, and what documents you need from me.

Thank you for your help.`}let g=`${(r=l,`${(0,a.C)(new Date().toISOString())||"[date]"}

${r}
`)}
${c}

${b}
`;return{title:d,to:l,body:g}},"d",0,n])}]);