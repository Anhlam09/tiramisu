# Case study: Tiramisu

*A working prototype of an estate-settlement guide, built to understand how families get through probate, where the process breaks down, and how software can make it lighter.*

**Live demo:** [https://anhlam09.github.io/tiramisu/](https://anhlam09.github.io/tiramisu/) · **Run time:** about 2 minutes to explore with the sample estate

---

## 1. The problem

When someone dies, a family member (usually an adult child) becomes the **executor**. Overnight they are responsible for a legal and financial process that often takes **6 to 18 months**. Most have never done it before, and they are grieving while they do it.

The work isn't intellectually hard. It's **long, fragmented, and unforgiving**:

- **About 50 distinct tasks** across courts, banks, insurers, government agencies and the IRS, with dependencies between them. For example, you can't open an estate bank account without a tax ID, and you can't get the tax ID without court papers.
- **Rules that change by state and county.** These include small-estate thresholds, creditor notice periods, inventory filings and whether a bond is required.
- **A paper trail scattered across mailboxes, drawers and old emails.** Each document holds a few key facts (an account's last digits, a beneficiary, a date) that the executor needs to retype many times.
- **Money that's easy to mix up.** Family members pay funeral costs out of pocket, and those payments need to be tracked and reimbursed from the estate.
- **Data that's dangerous to mishandle.** That includes Social Security numbers, account numbers and identity documents. Identity theft that targets people who have died is common.

## 2. Who it's for

| Person | What they need | What breaks for them today |
|---|---|---|
| **Executor** (primary) | To know what to do next and that nothing is falling through the cracks | Overwhelm, with too many lists at once. They don't know which steps depend on the court. Facts are retyped everywhere. |
| **Family members** | Transparency and fairness | No shared view. Questions arrive by text at 11pm. |
| **Estate attorney / CPA** | A clean, organized record | They receive a shoebox of documents and an incomplete asset list. |

## 3. The workflow, mapped

The prototype models the process as **8 phases and 52 steps**. Each step has a timing window, the documents it needs, a plain-English "why this matters" line, and a flag when it varies by state.

```
1 First days ─► 2 Records & notifications ─► 3 Legal authority ─► 4 Set up the estate
      ─► 5 Inventory & value ─► 6 Debts & taxes ─► 7 Distribution ─► 8 Closing
```

## 4. Where it breaks, and what the prototype does about it

| Where it breaks | Design response in Tiramisu |
|---|---|
| **Overwhelm.** A 52-item checklist is paralyzing. | A **"This week"** view shows at most 5 steps, ranked by timing. Everything else is collapsed under "More when you're ready". Steps can be snoozed or skipped. There are no "overdue" labels, red alerts or streaks. |
| **"Is this rule true where I live?"** | Every step that varies by state carries a **"Varies by state, check your court"** flag. The app organizes and informs. It never gives legal advice. |
| **Facts trapped in documents** | You upload a document (death certificate, will, court letters, statement, policy, deed, title, bill). The app proposes the key fields, each with a **confidence score**. Low-confidence fields need an explicit tick. **Nothing is saved until a person confirms it.** |
| **Not knowing what goes through probate** | The asset and debt inventory splits totals into **probate / outside probate / not sure yet**. Life insurance, retirement accounts and payable-on-death or transfer-on-death accounts usually pass outside probate, and that changes the size and route of the court case. |
| **Family members paying out of pocket** | A **ledger** tracks money in and out and shows what is "owed back to family". |
| **Sensitive numbers everywhere** | **Last 4 digits only.** Full SSNs and account numbers are masked automatically, whether they come from a document or are typed into a notes field. |
| **"Which process even applies to us?"** | **"What kind of estate is this?"** asks four questions and sorts the estate into likely formal probate, a small-estate process, mostly outside probate, or no will. The plan adjusts to match. |
| **The first days are a blur** | A **First days** plan for today, the next few days and this week, with **ready-to-send messages** for family, employers, landlords and banks. |
| **The same letter, written ten times** | A **Paperwork** center with letters and worksheets (EIN, probate information) already filled in, and a **who-to-let-know tracker** with official links. Tiramisu prepares; the family reviews and sends. |
| **Accounts nobody knew about** | **Find accounts** shows how a search could feel (with demo results), then points to the real, free searches for unclaimed property, lost life policies, savings bonds and old retirement plans. |
| **"Who gets what, and how?"** | Each asset shows **who inherits it and how it transfers** (beneficiary claim, joint owner, trust, the court process or retitling), and there's a **"by person"** view. |
| **Chasing relatives for documents** | **People and requests:** track who you've asked for what. Share the estate as a file a relative can open. |
| **Families are unprepared before a loss** | **Plan ahead:** a readiness checklist, a "where things are" vault (locations only, never passwords), and gentle "worth a look" flags. |
| **The handoff to a professional** | A printable **summary to share**, plus a CSV of the inventory and a probate information sheet. |

## 5. Key decisions and trade-offs

1. **Human-in-the-loop extraction over full automation.** A wrong date of death or a misread beneficiary is costly, so the system proposes and a person confirms. Confidence scores decide where to slow the person down.
2. **Organize, don't advise.** Copy uses "many families…" and "your court can confirm…" rather than "you must…". Legal decisions stay with the family and their attorney.
3. **Tone is a feature.** A grieving executor needs fewer decisions per screen. The app follows written tone rules: one primary action per screen, a condolence shown once (not on every page), and no alarm colors. All text meets WCAG AA contrast.
4. **Privacy by default.** The app minimizes what it keeps (last 4 digits only) rather than relying only on protecting what it stores.
5. **The demo is honest about being a demo.** Document reading is simulated with sample values, and uploaded files are never kept. The demo is a static site, so everything a visitor enters stays in their own browser and is never sent to a server.

## 6. How quality is checked

| Layer | What it covers |
|---|---|
| **Unit tests** | Privacy redaction against tricky inputs: SSNs with dots, spaces, Unicode hyphens and full-width digits; card numbers; and things that must *not* be masked, such as dates, ZIP+4 codes and court case numbers. Also covered: roadmap scheduling rules, money math, inventory totals, and CSV formula-injection protection. |
| **End-to-end smoke test** | A real browser explores the sample estate, adds an asset with a card number in the notes (and checks it's masked everywhere), confirms a sample document, and checks that a second visitor **can't see** the first visitor's sandbox. |
| **Continuous integration** | Every push runs lint, a type check, the unit tests, a production build and the browser smoke test. |
| **Review checklists** | Three focused review passes (correctness, security and privacy, and tone and accessibility) each produced a ranked list of findings, and every finding was fixed or explicitly accepted. |
| **Newcomer usability (next)** | Not run yet. A kit is ready for 2–3 sessions with people who have never settled an estate. It includes a 10-second first-impression test, five tasks, an "explain it back" question, and pass criteria decided in advance. Results will be added here. |

**Examples of what the reviews caught:**

- **Masking that was too greedy.** An early version masked any long digit run, which corrupted ZIP+4 postal codes in addresses. The rule now masks SSN shapes and long account-style numbers, but leaves dates, ZIP+4 codes and case numbers alone. Each case has a test.
- **Forms losing your work.** If a field failed validation, the onboarding form wiped everything the person had typed, which is exactly the wrong experience for a tired, grieving user. Forms now keep their values.
- **Standing tasks crowding the week.** Open-ended tasks such as "keep a ledger" took up "This week" slots for months. They now rank after time-bound steps.
- **Tone slips.** The word "urgent" and phrasing that read like legal instructions were rewritten.

## 7. What's simulated, and the limitations

- **Document reading is simulated** in the demo. It returns realistic sample values, so the review-and-confirm flow and the privacy masking are real, but nothing is actually read from your file.
- **The roadmap is general US guidance.** Deadlines and dollar thresholds need review by an attorney and checking against current law before real-world use.
- **Account search and employer data are simulated** and labeled as demos. The links to the real free searches are real.
- **Collaboration is simulated with files.** People, roles and requests are tracked, and sharing works by exporting and importing a file. A real version needs accounts, invitations and permissions.
- **Nothing is filed or sent for you.** Letters and worksheets are prepared for the family to review and send.
- **No integrations** with courts, banks, the IRS or asset-search providers.

## 8. Who pays: two channels, two buyers

The people who use an estate-settlement product (executors and families) are not always the people who pay for it. There are two common channels:

| | **Direct to families** | **Through employers (a benefit)** |
|---|---|---|
| **Buyer** | The executor. The cost can often be paid back from the estate as an estate expense. | HR, benefits or Total Rewards leaders |
| **When they buy** | After a death, in a crisis, looking for help right now | Before any loss, during the yearly benefits review |
| **What convinces them** | Calm, trust, "someone has this handled" | Measurable value: usage, hours given back to employees, return to work, staying with the company |
| **What the product must add** | Trust signals, a fast first step, a way to bring in an attorney | Anonymous aggregate reporting, single sign-on and eligibility checks, onboarding *before* a loss (estate readiness) |

**Implications for this prototype:**

- Tiramisu is built for the **post-loss executor**, which is the core of both channels.
- The employer channel would also need a **pre-loss "readiness" mode**: organizing documents and wishes ahead of time. That's what makes a benefit worth enrolling in before anyone needs it.
- It would also need an **HR view that never exposes anyone's estate**. Tiramisu already records steps done and skipped, so it could report *estimated* hours saved per person, with that estimate stated openly, and add them up anonymously.

## 9. Open questions

1. **Which channel is working?** Employer benefits make for a predictable sale but slow adoption. Direct-to-family pricing paid from the estate matches the moment of need. How does the mix shift over time, and what drives it?
2. **Where do families drop off?** Is it the court appointment (phase 3), the inventory, or the tax step?
3. **How should "hours given back" be measured?** Is it self-reported, estimated per task, or measured from completed steps? Which version would employers trust?
4. **How accurate is extraction on real documents** (handwritten wills, faxed death certificates)? Where would people correct it most?
5. **How can state-specific guidance stay current** across 50 states and thousands of counties?
6. **What should the attorney handoff look like?** What format do attorneys actually want?

## 10. If there were more time

- Real shared workspaces: invitations, roles and permissions instead of file sharing.
- State-specific step variants and small-estate limits, starting with the 5 most populous states.
- A real asset search (unclaimed property databases first) and real document reading.
- Connecting **Plan ahead** to settlement, so that a family's vault becomes the executor's head start.
- Measuring the product: time to first completed step, weekly return rate, and how often extracted fields get corrected.
