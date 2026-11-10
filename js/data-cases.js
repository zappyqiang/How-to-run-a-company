/* Founder's Quest UK — Case Files (fictional companies, realistic problems) and Law Stories (real cases). */
window.GD = window.GD || {};

/* Each case: story -> diagnose (q1) -> fix (q2) -> solution, law and lesson. */
GD.cases = [
{ id: 'deadlock', icon: '🥊', title: `The 50/50 Fallout`, area: `Shares and founders`, level: 1,
  company: `PixelPals Ltd, a two-founder games studio in Manchester`,
  story: [
    `Maya and Jordan started PixelPals at sixth-form college. They took 50 shares each, used the model articles, and shook hands. No shareholders' agreement. "We're best mates, we don't need one."`,
    `Two years on, the studio has a hit game and an offer of £300,000 from a publisher. Maya wants to accept. Jordan wants to stay independent. Jordan has also stopped coming to work most days, but still owns half.`,
    `Every vote is 1 against 1. The bank will not act without both signatures. Staff do not know who is in charge. The publisher's offer expires in 3 weeks.`
  ],
  q1: { q: `What is the root problem?`, o: [`The publisher's offer is too low`, `A 50/50 split with no agreed way to break a deadlock or deal with a founder stepping back`, `They used model articles`, `Jordan is lazy`], a: 1, why: `Neither founder can pass even an ordinary resolution alone (it needs MORE than 50%). Nothing says what happens on a deadlock or when a founder stops working.` },
  q2: { q: `What is the best way forward now?`, o: [`Maya secretly signs the deal anyway`, `Maya sets up a rival studio and moves the staff across`, `Negotiate with a mediator: a buy-out of one founder at a fair valuation, or agreed terms to accept the deal`, `Do nothing and hope`], a: 2, why: `Signing alone exceeds her authority, and diverting the business would breach her duties as a director. Mediation leading to a buy-out or agreed sale is the realistic route. Court is the expensive last resort.` },
  solution: [
    `Get an independent valuation of the company.`,
    `Use a mediator to negotiate: one founder buys the other out, or both agree terms for the publisher deal.`,
    `If talks fail, the legal last resorts are an "unfair prejudice" petition (Companies Act 2006 s994) or a just and equitable winding up. Both are slow and costly.`,
    `Whatever happens, sign a shareholders' agreement afterwards.`
  ],
  prevent: [`Agree a shareholders' agreement on day one`, `Include a deadlock clause (mediation, then a buy-sell mechanism)`, `Use founder vesting so shares are earned over time`, `Consider a 51/49 split or a trusted third director with a casting vote`],
  law: [[`Companies Act 2006, s994 (unfair prejudice)`, `https://www.legislation.gov.uk/ukpga/2006/46/section/994`], [`Companies Act 2006, s282 (ordinary resolutions)`, `https://www.legislation.gov.uk/ukpga/2006/46/section/282`]],
  lesson: `Agree the break-up rules while you are still friends.` },

{ id: 'cashcrunch', icon: '🪣', title: `Profitable but Broke`, area: `Cash flow`, level: 1,
  company: `GreenBox Ltd, an eco packaging supplier in Bristol`,
  story: [
    `GreenBox landed a dream customer: a national supermarket ordering £40,000 of packaging a month. Founder Sam celebrated. The accounts show a healthy 25% margin.`,
    `But the supermarket pays 90 days after invoice. GreenBox's own supplier wants paying in 14 days, and wages go out monthly.`,
    `Three months in, GreenBox is owed £120,000, has £900 in the bank, and Friday is payday. Sam is thinking of using the money set aside for VAT.`
  ],
  q1: { q: `What is really going wrong?`, o: [`GreenBox is losing money on every sale`, `The gap between paying suppliers and being paid by the customer is draining the cash`, `The supermarket is a bad customer`, `Sam pays staff too much`], a: 1, why: `The business is profitable. It is the timing (the "working capital gap") that is the problem.` },
  q2: { q: `What should Sam do?`, o: [`Spend the VAT money on wages and hope`, `Stop paying HMRC and suppliers and say nothing`, `Use invoice finance, renegotiate terms on both sides, and build a 13-week cash forecast`, `Take the customer to court today`], a: 2, why: `Invoice finance releases most of an unpaid invoice's value within days. Terms can often be negotiated. And a forecast would have shown this coming.` },
  solution: [
    `Build a 13-week cash flow forecast and update it weekly.`,
    `Ask an invoice finance provider to advance cash against the supermarket invoices.`,
    `Negotiate: shorter terms or early-payment discount with the customer, longer terms with the supplier.`,
    `If tax will be late, call HMRC before the deadline about a Time to Pay arrangement.`,
    `Keep the VAT money in a separate account in future.`
  ],
  prevent: [`Forecast cash before accepting big orders`, `Agree payment terms in the contract`, `Do not rely on a single customer`, `Use the statutory right to interest on late payments`],
  law: [[`GOV.UK: Late commercial payments`, `https://www.gov.uk/late-commercial-payments-charging-interest-debt-recovery`], [`GOV.UK: If you cannot pay your tax bill on time`, `https://www.gov.uk/difficulties-paying-hmrc`], [`British Business Bank: invoice finance`, `https://www.british-business-bank.co.uk/finance-hub/invoice-finance`]],
  lesson: `Profit is an opinion. Cash is a fact. Forecast it.` },

{ id: 'vat', icon: '🧨', title: `The VAT Surprise`, area: `Tax`, level: 2,
  company: `Thread & Needle Ltd, an online clothing alterations business in Cardiff`,
  story: [
    `Priya's business took off after a viral video. She was busy and checked her sales once a year, when the accountant asked.`,
    `In March her accountant found that her rolling 12-month turnover had passed £90,000 back in August. She should have registered for VAT by the end of September.`,
    `For 6 months she charged customers no VAT on about £60,000 of sales. HMRC still wants its share of those sales.`
  ],
  q1: { q: `What was Priya's mistake?`, o: [`Earning too much`, `Checking turnover yearly, when the VAT test is a rolling 12 months that must be watched every month`, `Using an accountant`, `Selling online`], a: 1, why: `At the end of every month you must look back over the previous 12 months. Cross £90,000 and you have 30 days to register.` },
  q2: { q: `What now?`, o: [`Hide it and register from today`, `Register immediately, tell HMRC the correct date, pay the VAT due, and review prices`, `Close the company`, `Invoice every old customer for extra VAT and threaten them`], a: 1, why: `Coming forward without being asked reduces penalties. Old consumer sales are treated as VAT-inclusive, so the VAT comes out of Priya's takings.` },
  solution: [
    `Register for VAT now with the correct effective date.`,
    `Work out the VAT due on sales since that date (for consumers, treat the price charged as including VAT: one sixth of the price at 20%).`,
    `Reclaim input VAT on business purchases in that period to reduce the bill.`,
    `Tell HMRC in full. An unprompted disclosure gets the lowest penalty.`,
    `Ask for Time to Pay if needed, and reprice going forward.`
  ],
  prevent: [`Track rolling 12-month turnover every month`, `Set an alert at £75,000`, `Use accounting software with a VAT threshold warning`, `Price with VAT in mind as you approach the threshold`],
  law: [[`GOV.UK: When to register for VAT`, `https://www.gov.uk/register-for-vat`], [`GOV.UK: VAT registration late penalties`, `https://www.gov.uk/guidance/penalties-for-failure-to-notify`]],
  lesson: `The VAT threshold is a rolling 12 months. Check it every single month.` },

{ id: 'freelancer', icon: '🎭', title: `The Friendly Freelancer`, area: `Employment status and IP`, level: 2,
  company: `Looply Ltd, an app start-up in Edinburgh`,
  story: [
    `Looply's whole app was built by Dev, a "freelancer" paid £3,000 a month for two years. Dev worked 9 to 5 at Looply's office, on Looply's laptop, reported to the CEO, and never worked for anyone else. There was no written contract.`,
    `After a row, Dev left. Now Dev wants two years of holiday pay, and says the app's code belongs to Dev.`,
    `Meanwhile an investor's lawyer asks Looply: "Please show us the company owns its code."`
  ],
  q1: { q: `What are the two real problems?`, o: [`Dev was overpaid, and the office was too small`, `Dev was probably a worker or employee in reality, and with no written assignment the code's copyright may sit with Dev`, `Dev did not pay tax, and the app is bad`, `Scotland has no employment law`], a: 1, why: `Status depends on reality: control, personal service, integration. And copyright in a genuine freelancer's work stays with them unless assigned in writing.` },
  q2: { q: `What is the sensible fix?`, o: [`Ignore Dev and tell the investor everything is fine`, `Rewrite all the code overnight`, `Negotiate a settlement: pay what is owed in exchange for a written IP assignment, then fix all contracts`, `Sue Dev for leaving`], a: 2, why: `One agreement can settle the holiday pay and transfer the IP. Misleading the investor would be a far bigger problem.` },
  solution: [
    `Take employment law advice and work out the holiday pay (and possibly tax and NI) exposure.`,
    `Negotiate a settlement with Dev that includes a written assignment of all IP in the code.`,
    `Tell the investor the truth and show the fix.`,
    `Audit everyone else: correct status, written contracts, IP clauses.`
  ],
  prevent: [`Written contract before work starts`, `IP assignment clause for every contractor`, `Check status with HMRC's CEST tool`, `Review long-running "freelance" arrangements`],
  law: [[`GOV.UK: Employment status`, `https://www.gov.uk/employment-status`], [`Copyright, Designs and Patents Act 1988, s11 (first ownership)`, `https://www.legislation.gov.uk/ukpga/1988/48/section/11`], [`GOV.UK: Ownership of copyright works`, `https://www.gov.uk/guidance/ownership-of-copyright-works`]],
  lesson: `Labels do not decide status, and paying for work does not mean you own it.` },

{ id: 'filing', icon: '📪', title: `The Forgotten Filing`, area: `Companies House`, level: 1,
  company: `Sunrise Surf School Ltd, in Newquay`,
  story: [
    `Tom runs a seasonal surf school. He registered the company using his old flat as the registered office, then moved house. He never updated the address.`,
    `Reminder letters, a penalty notice and finally a "we intend to strike off your company" letter all went to the old flat. Tom filed nothing for 18 months.`,
    `One morning in June, peak season, the company's bank account is frozen. The company has been dissolved, and the £14,000 in the account now legally belongs to the Crown.`
  ],
  q1: { q: `What caused this?`, o: [`The bank made an error`, `Missed confirmation statement and accounts, with an out-of-date registered office so no warnings arrived`, `Surf schools cannot be companies`, `Tom earned too little`], a: 1, why: `Companies House strikes off companies that look defunct. An appropriate registered office and email are legal requirements precisely so that notices arrive.` },
  q2: { q: `How can Tom fix it?`, o: [`Open a new company with the same name and carry on`, `Apply for administrative restoration, file all overdue documents and pay the penalties`, `Withdraw the cash at an ATM quickly`, `Nothing can be done`], a: 1, why: `A former director can apply to restore a company struck off within the last 6 years if it was trading at the time. Everything overdue must be filed and penalties paid.` },
  solution: [
    `Apply to Companies House for administrative restoration.`,
    `File every overdue confirmation statement and set of accounts, and pay the late filing penalties.`,
    `If any assets passed to the Crown, deal with the Bona Vacantia Division as part of restoration.`,
    `Once restored, the company is treated as if it had never been dissolved, and the bank can unfreeze the account.`,
    `Update the registered office and registered email, and set calendar reminders.`
  ],
  prevent: [`Keep the registered office and email up to date`, `Sign up for Companies House email reminders`, `Diary: confirmation statement, accounts, tax return`, `Use an accountant or company secretary service`],
  law: [[`GOV.UK: Restore a dissolved company`, `https://www.gov.uk/guidance/company-restoration-guide`], [`GOV.UK: Late filing penalties`, `https://www.gov.uk/annual-accounts/penalties-for-late-filing`], [`GOV.UK: Bona vacantia`, `https://www.gov.uk/government/organisations/bona-vacantia`]],
  lesson: `A company that ignores its paperwork can be deleted, and its money with it.` },

{ id: 'piggybank', icon: '🐷', title: `The Company Piggy Bank`, area: `Director's money`, level: 2,
  company: `Ace Detailing Ltd, a car valeting company in Birmingham`,
  story: [
    `Riz owns and runs Ace Detailing. Business is good, so Riz uses the company card for everything: a holiday, a new TV, the weekly shop. "It's my company."`,
    `Riz also pays himself £3,000 "dividends" each month without looking at the accounts.`,
    `At year end the accountant has news. Riz owes the company £38,000 on his director's loan account, the company actually made a loss, and so the dividends were unlawful.`
  ],
  q1: { q: `What has Riz got wrong?`, o: [`Nothing, he owns 100%`, `He treated company money as his own: an overdrawn director's loan and dividends without distributable profits`, `He should have paid cash`, `Valeting companies cannot pay dividends`], a: 1, why: `The company is a separate person. Personal spending creates a loan from the company to Riz, and dividends are only lawful out of distributable profits.` },
  q2: { q: `What is the best way to sort it out?`, o: [`Delete the transactions from the books`, `Repay the loan within 9 months of year end where possible, treat the rest correctly for tax, and pay himself properly in future`, `Dissolve the company to wipe the debt`, `Label it all "marketing"`], a: 1, why: `If a director's loan is still unpaid 9 months after year end, the company pays an extra tax charge (s455) on it. Dissolving does not help: a liquidator could pursue Riz for the loan.` },
  solution: [
    `Draw up an accurate director's loan account.`,
    `Repay as much as possible within 9 months and 1 day of the year end to avoid the s455 tax charge (it is refunded later if the loan is repaid).`,
    `Loans over £10,000 can also be a taxable benefit: report on form P11D if interest is not paid.`,
    `Reclassify unlawful dividends correctly with the accountant, and stop paying them until there are real profits.`,
    `Set up a proper salary, check management accounts before each dividend, and use a personal card for personal spending.`
  ],
  prevent: [`Separate personal and company spending completely`, `Check distributable profits before every dividend`, `Minute and voucher every dividend`, `Review the director's loan account quarterly`],
  law: [[`GOV.UK: Director's loans`, `https://www.gov.uk/directors-loans`], [`Companies Act 2006, s830 (distributions out of profits)`, `https://www.legislation.gov.uk/ukpga/2006/46/section/830`]],
  lesson: `Owning the company does not mean owning its money.` },

{ id: 'dataleak', icon: '📤', title: `The Reply-All Disaster`, area: `Data protection`, level: 2,
  company: `BrightSmile Dental Supplies Ltd, in Leeds`,
  story: [
    `On a Friday afternoon, an assistant at BrightSmile sent a newsletter to 2,300 customers. Instead of using BCC, every email address was visible. Worse, the wrong file was attached: a spreadsheet with customers' names, home addresses and order histories.`,
    `The manager's first reaction: "Don't tell anyone. Maybe nobody will notice." By Monday, three customers had complained and one had posted about it online.`
  ],
  q1: { q: `What is the key legal issue?`, o: [`Newsletters are illegal`, `A personal data breach that may need reporting to the ICO within 72 hours, and maybe to the customers`, `The assistant should be arrested`, `Customers should not complain`], a: 1, why: `Disclosure of personal data to the wrong people is a breach. If it is likely to risk people's rights and freedoms, the 72-hour clock runs from when you became aware.` },
  q2: { q: `What should BrightSmile do?`, o: [`Stay silent`, `Blame and dismiss the assistant on the spot`, `Contain it, assess the risk, report to the ICO in time, tell affected customers, and fix the process`, `Email everyone again asking them to delete it, with the file attached again`], a: 2, why: `Regulators look at how you respond. Prompt, honest handling and real fixes reduce the harm and any penalty.` },
  solution: [
    `Contain: try to recall the email and ask recipients to delete the attachment.`,
    `Assess: what data, how many people, how likely is harm?`,
    `Report to the ICO within 72 hours if there is a risk to individuals, and record the breach either way.`,
    `Tell the affected customers plainly if the risk to them is high, with advice on what to watch for.`,
    `Fix the cause: a proper mailing tool, staff training, password-protected files, a second check before sending.`
  ],
  prevent: [`Use a mailing platform rather than BCC`, `Limit who can access customer files`, `Train staff every year`, `Have a written breach plan`, `Pay the ICO data protection fee`],
  law: [[`ICO: Personal data breaches guide`, `https://ico.org.uk/for-organisations/report-a-breach/personal-data-breach/personal-data-breaches-a-guide/`], [`ICO: 72 hours, how to respond`, `https://ico.org.uk/for-organisations/advice-for-small-organisations/personal-data-breaches/72-hours-how-to-respond-to-a-personal-data-breach/`]],
  lesson: `You cannot always stop a breach. You can always choose to handle it honestly and fast.` },

{ id: 'sacking', icon: '📱', title: `Sacked By Text`, area: `Dismissal`, level: 2,
  company: `Bean There Ltd, a coffee shop in Belfast`,
  story: [
    `Aoife had worked at Bean There for 3 years. The till was £60 short on two of her shifts. Owner Connor was sure it was her.`,
    `That night he texted: "Don't come in tomorrow. You're sacked. You know why." No investigation, no meeting, no letter, no notice pay, no appeal.`,
    `Two weeks later, the till was £80 short again. Then a letter arrived: Aoife has started a claim for unfair dismissal.`
  ],
  q1: { q: `Why is Connor in trouble?`, o: [`You can never dismiss anyone`, `There was no investigation and no fair procedure, so the dismissal is very likely unfair`, `Texting is illegal`, `She worked there too long`], a: 1, why: `Even where misconduct is suspected, the employer must investigate reasonably and follow a fair process. Connor did neither, and it looks like he had the wrong person.` },
  q2: { q: `What should Connor do now?`, o: [`Ignore the claim`, `Post about Aoife on social media`, `Take advice, engage with early conciliation, and consider reinstatement or a settlement`, `Text her again to say sorry and consider it finished`], a: 2, why: `Early conciliation exists to settle disputes before a tribunal. Ignoring a claim leads to a default judgment. Public accusations risk a defamation claim too.` },
  solution: [
    `Get employment advice straight away and do not ignore deadlines.`,
    `Take part in early conciliation (Acas in Great Britain, the Labour Relations Agency in Northern Ireland).`,
    `Consider offering reinstatement, or negotiate a settlement covering notice pay, lost earnings and compensation.`,
    `Investigate the till shortages properly this time.`,
    `Write a disciplinary procedure and follow it in future.`
  ],
  prevent: [`Have a written disciplinary procedure`, `Investigate before deciding`, `Invite the employee to a meeting in writing, with the right to be accompanied`, `Give the decision in writing with a right of appeal`, `Suspend on full pay if you need time to investigate`],
  law: [[`Acas Code of Practice on disciplinary and grievance procedures`, `https://www.acas.org.uk/acas-code-of-practice-on-disciplinary-and-grievance-procedures`], [`GOV.UK: Dismissing staff`, `https://www.gov.uk/dismiss-staff`], [`Labour Relations Agency (Northern Ireland)`, `https://www.lra.org.uk/`]],
  lesson: `A fair reason is not enough. You need a fair process too.` },

{ id: 'copycat', icon: '🏷️', title: `The Name That Was Taken`, area: `Trade marks`, level: 1,
  company: `Zest Up Ltd, a drinks start-up in London`,
  story: [
    `Three friends launched a fizzy drink called "ZESTA". Companies House accepted the company name, they bought the web domain, and they spent £12,000 on cans, a van wrap and a launch event.`,
    `Four months later a solicitor's letter arrived. A larger drinks company had owned the registered trade mark "ZESTA" for soft drinks since 2019. Stop using the name within 14 days, destroy the stock, and pay damages.`
  ],
  q1: { q: `What check did the founders skip?`, o: [`A food hygiene check`, `A search of the trade mark register`, `A check with the local council`, `A check of social media handles`], a: 1, why: `Company name approval and domain availability say nothing about trade marks. An identical mark for identical goods is clear infringement.` },
  q2: { q: `What is the smartest response?`, o: [`Ignore the letter`, `Add "UK" to the name and carry on`, `Take IP advice quickly, negotiate a sell-off period, rebrand, and register the new name as a trade mark`, `Sue Companies House`], a: 2, why: `With an identical name on identical goods, fighting is hopeless. A quick, cooperative response often wins time to sell existing stock and avoids a damages claim.` },
  solution: [
    `Get advice from a trade mark attorney or IP solicitor within the deadline.`,
    `Negotiate: agree to rebrand in exchange for a sell-off period and no damages.`,
    `Choose a new name and search the UK trade mark register properly first.`,
    `Register the new name and logo as a trade mark in the right classes.`,
    `Update the company name, packaging, domain and social accounts.`
  ],
  prevent: [`Search the trade mark register before choosing a name`, `Search the web, app stores and social media too`, `Register your own trade mark early`, `Pick a distinctive, invented name`],
  law: [[`GOV.UK: Search for a trade mark`, `https://www.gov.uk/search-for-trademark`], [`GOV.UK: Register a trade mark`, `https://www.gov.uk/how-to-register-a-trade-mark`], [`Trade Marks Act 1994, s10 (infringement)`, `https://www.legislation.gov.uk/ukpga/1994/26/section/10`]],
  lesson: `A five-minute free search can save a five-figure rebrand.` },

{ id: 'minwage', icon: '⏱️', title: `The Minimum Wage Trap`, area: `Pay`, level: 2,
  company: `FreshFit Gyms Ltd, three gyms in Glasgow`,
  story: [
    `FreshFit pays its reception staff exactly the minimum wage. Seems fine. But:`,
    `Staff must arrive 15 minutes early for an unpaid "handover". They must buy a £45 branded uniform, deducted from their first pay. New starters do two unpaid 5-hour "trial shifts". And when Callum turned 21 in February, nobody increased his pay.`,
    `A former employee complained to HMRC. Inspectors have asked for 6 years of pay records.`
  ],
  q1: { q: `Why is FreshFit underpaying, even though the hourly rate looks right?`, o: [`It is not underpaying`, `Unpaid working time and uniform deductions pull real pay below the minimum, and a birthday rise was missed`, `Gyms are exempt`, `Reception staff are not workers`], a: 1, why: `Minimum wage is tested on actual pay for actual working time, after deductions that benefit the employer.` },
  q2: { q: `What should the directors do?`, o: [`Shred the records`, `Calculate and repay all arrears to current and former staff now, fix the practices, and cooperate with HMRC`, `Cut everyone's hours as punishment`, `Wait and see what HMRC finds`], a: 1, why: `Arrears must be repaid at current rates. Penalties are 200% of the underpayment (halved if paid within 14 days of the notice), and employers can be publicly named. Destroying records is a criminal offence.` },
  solution: [
    `Audit every worker's pay for up to 6 years: add the handover time, trial shifts and uniform cost.`,
    `Repay arrears to current and former staff.`,
    `Cooperate fully with HMRC and pay any penalty promptly.`,
    `Fix it: pay for all working time, provide uniform free, pay for trial shifts, and automate birthday pay rises.`,
    `Keep accurate records of hours and pay.`
  ],
  prevent: [`Pay for all time staff are required to be at work`, `Never let deductions take pay below the minimum`, `Set payroll alerts for birthdays and the annual April rise`, `Keep time records for at least 6 years`],
  law: [[`GOV.UK: National Minimum Wage rates`, `https://www.gov.uk/national-minimum-wage-rates`], [`GOV.UK: Calculating the minimum wage`, `https://www.gov.uk/guidance/calculating-the-minimum-wage`], [`GOV.UK: Minimum wage: policy on enforcement and naming`, `https://www.gov.uk/government/publications/enforcing-national-minimum-wage-law`]],
  lesson: `Minimum wage is about what people actually receive for the time they actually work.` },

{ id: 'sinking', icon: '🚢', title: `The Sinking Ship`, area: `Insolvency`, level: 3,
  company: `Dream Kitchens (Kent) Ltd, a kitchen fitter`,
  story: [
    `Dream Kitchens has not paid HMRC for 5 months. Suppliers have stopped credit. Two county court judgments have arrived. Liabilities are £180,000 more than assets.`,
    `Director Linda believes "one big month will fix it". She keeps taking 50% deposits from new customers and uses them to pay old debts, including repaying a £20,000 loan from her brother.`,
    `Four months later the company goes into liquidation. Twelve families have paid deposits for kitchens that will never be fitted.`
  ],
  q1: { q: `What is Linda's legal exposure?`, o: [`None, the company has limited liability`, `Wrongful trading, plus repaying her brother ahead of others is a "preference"`, `Only a parking fine`, `The customers are at fault`], a: 1, why: `She kept trading and taking deposits when insolvent liquidation was unavoidable, and she favoured a connected creditor. A liquidator can pursue both.` },
  q2: { q: `What should Linda have done 4 months earlier?`, o: [`Taken bigger deposits`, `Sought advice from a licensed insolvency practitioner, stopped taking deposits she could not honour, and treated creditors equally`, `Transferred the assets to a new company for £1`, `Deleted the emails`], a: 1, why: `The defence to wrongful trading is taking every step to minimise losses to creditors. Early professional advice is the clearest way to show that.` },
  solution: [
    `Once insolvency is likely, stop and get advice from a licensed insolvency practitioner.`,
    `Hold board meetings and minute the reasons for each decision.`,
    `Stop taking deposits unless they are ring-fenced in a separate trust account.`,
    `Do not pay connected or favourite creditors ahead of others.`,
    `Consider the options: a CVA, administration, or a creditors' voluntary liquidation.`
  ],
  prevent: [`Monthly management accounts`, `Know the two insolvency tests`, `Act at the first missed tax payment, not the fifth`, `Protect customer deposits`],
  law: [[`Insolvency Act 1986, s214 (wrongful trading)`, `https://www.legislation.gov.uk/ukpga/1986/45/section/214`], [`Insolvency Act 1986, s239 (preferences)`, `https://www.legislation.gov.uk/ukpga/1986/45/section/239`], [`GOV.UK: Options when a company is insolvent`, `https://www.gov.uk/government/publications/options-when-a-company-is-insolvent/options-when-a-company-is-insolvent`]],
  lesson: `When the company cannot pay its debts, the creditors' interests come first, and hope is not a plan.` },

{ id: 'refund', icon: '📦', title: `The Refund Row`, area: `Consumer law`, level: 1,
  company: `GlowGadget Ltd, an online phone accessories shop`,
  story: [
    `GlowGadget's website says in big letters: "ALL SALES FINAL. NO REFUNDS." A customer's £35 power bank stopped charging after 3 weeks. GlowGadget refused a refund and offered 10% off the next order.`,
    `The customer left a one-star review. The founder, Kai, replied angrily, then paid a "review service" for 40 five-star reviews to bury it.`,
    `Trading Standards got in touch, and the customer started a card chargeback.`
  ],
  q1: { q: `What has GlowGadget done wrong?`, o: [`Only the angry reply`, `Denied statutory rights on faulty goods, displayed a misleading "no refunds" notice, and bought fake reviews`, `Selling power banks`, `Nothing, the sign was clear`], a: 1, why: `A fault within 30 days gives a right to a full refund. Notices cannot remove statutory rights. Fake reviews are a banned practice.` },
  q2: { q: `What is the right fix?`, o: [`Delete the bad review`, `Refund in full, remove the fake reviews and the "no refunds" banner, write a proper returns policy, and reply politely`, `Block the customer`, `Raise prices`], a: 1, why: `Putting it right quickly is cheaper than enforcement by the regulator, which can fine up to 10% of turnover.` },
  solution: [
    `Refund the customer in full and apologise.`,
    `Remove all fake reviews and stop using the service.`,
    `Replace "no refunds" with a lawful returns policy: 14-day cancellation for online orders, 30-day right to reject faulty goods, then repair or replacement.`,
    `Cooperate with Trading Standards.`,
    `Reply to genuine reviews calmly. A good response to a bad review wins customers.`
  ],
  prevent: [`Know the Consumer Rights Act basics`, `Publish a clear returns policy`, `Never buy, write or hide reviews`, `Check supplier quality and your rights against them`],
  law: [[`Consumer Rights Act 2015`, `https://www.legislation.gov.uk/ukpga/2015/15/contents`], [`GOV.UK: Accepting returns and giving refunds`, `https://www.gov.uk/accepting-returns-and-giving-refunds`], [`CMA: Fake reviews guidance`, `https://www.gov.uk/government/publications/fake-reviews-cma208`]],
  lesson: `You cannot sign-post your way out of consumer law, and fake reviews are now a serious offence.` },

{ id: 'scam', icon: '🎣', title: `The Boss Who Wasn't`, area: `Fraud and controls`, level: 2,
  company: `Northway Logistics Ltd, a haulage firm in Newcastle`,
  story: [
    `At 4:45pm on a Friday, finance assistant Ben got an email that looked like it came from the managing director: "Urgent and confidential. We are closing an acquisition. Pay £28,400 to this account in the next 30 minutes. I'm in a meeting, do not call."`,
    `The address was md@northway-logistics.co (not .co.uk). Ben, wanting to help, paid it. On Monday the real MD knew nothing about it.`,
    `The same month, a real supplier "changed its bank details" by email. That was fake too.`
  ],
  q1: { q: `What weakness did the criminals exploit?`, o: [`Slow internet`, `No verification step for urgent payments or changed bank details, plus pressure and secrecy`, `Ben's maths`, `The company had too much money`], a: 1, why: `This is "CEO fraud" and "invoice redirection fraud". They work on urgency and authority, and they beat any business where one person can pay without a check.` },
  q2: { q: `What should Northway do first?`, o: [`Wait to see if the money comes back`, `Call the bank's fraud team at once to try to freeze the payment, report to Action Fraud, then fix the controls`, `Dock Ben's wages for the full amount`, `Email the scammer`], a: 1, why: `Speed matters most: banks can sometimes recall or freeze funds in the first hours. Deducting it from wages would generally be unlawful.` },
  solution: [
    `Phone the bank's fraud line immediately and ask for a recall.`,
    `Report to Action Fraud (or Police Scotland on 101 in Scotland).`,
    `Tell your insurer if you have cyber or crime cover.`,
    `New rule: any new payee or changed bank details must be confirmed by phoning a known number, never one in the email.`,
    `Two people must approve payments above a set limit. Train staff that "urgent and secret" is a red flag.`
  ],
  prevent: [`Call-back checks on bank detail changes`, `Dual approval for payments`, `Staff fraud training`, `Email security and multi-factor authentication`, `A culture where it is fine to question the boss`],
  law: [[`Action Fraud: report fraud`, `https://www.actionfraud.police.uk/`], [`NCSC: Small business guide to cyber security`, `https://www.ncsc.gov.uk/collection/small-business-guide`], [`UK Finance: Take Five to Stop Fraud`, `https://www.takefive-stopfraud.org.uk/`]],
  lesson: `Good controls protect good people. Slow down when someone says hurry.` }
];

/* ---------------------------------------------------------------- Law Stories (real cases and events) */
GD.stories = [
{ id: 'salomon', icon: '🥾', year: 1897, title: `The Boot Maker Who Invented Your Company`, cite: `Salomon v A Salomon & Co Ltd [1897] AC 22 (House of Lords)`, topic: `Separate legal personality`,
  scene: ['🥾', '🏭', '🛡️'],
  story: [
    `Aron Salomon made boots in Whitechapel, London, for 30 years. In 1892 he turned the business into a company, A Salomon & Co Ltd. The law then needed seven shareholders, so he, his wife and five of his children each took a share. Aron held 20,001 of the 20,007 shares. The company also owed him £10,000, secured on its assets.`,
    `Then came strikes and a slump in boot orders. Within a year the company collapsed, owing money to ordinary suppliers who would get nothing.`,
    `The liquidator argued the company was a sham: just Aron wearing a mask. Aron should pay the debts himself. Two courts agreed and called the scheme a fraud on creditors.`
  ],
  ruling: `The House of Lords disagreed, unanimously. The company had been properly formed under the Companies Act. Once registered, it was a separate legal person, "a different person altogether" from its shareholders. Aron was not liable for its debts.`,
  matters: `This is the foundation of company law across the world. Your company is not you. Its debts are its own. It is why entrepreneurs can take risks without betting their homes.`,
  q: { q: `What did Salomon's case decide?`, o: [`Family companies are illegal`, `A properly formed company is a separate legal person from its owners`, `Boot makers cannot be directors`, `Shareholders must always pay company debts`], a: 1 },
  link: [`Salomon v A Salomon & Co Ltd (Wikipedia)`, `https://en.wikipedia.org/wiki/Salomon_v_A_Salomon_%26_Co_Ltd`] },

{ id: 'macaura', icon: '🔥', year: 1925, title: `The Timber That Was Not His`, cite: `Macaura v Northern Assurance Co Ltd [1925] AC 619 (House of Lords)`, topic: `The company owns its own assets`,
  scene: ['🌲', '🔥', '📄'],
  story: [
    `Mr Macaura owned a timber estate in County Tyrone. He sold all the timber to a company in exchange for shares, becoming almost its only shareholder.`,
    `He then insured the timber against fire, but took out the policies in <b>his own name</b>, not the company's.`,
    `Two weeks later, a fire destroyed nearly all of it. The insurers refused to pay.`
  ],
  ruling: `The House of Lords agreed with the insurers. The timber belonged to the company, not to Mr Macaura. A shareholder has no legal interest in the company's property, so he had nothing to insure.`,
  matters: `Separate personality cuts both ways. The shield that protects you also means the company's things are not yours. Contracts, insurance, leases and bank accounts must be in the company's name.`,
  q: { q: `Why did Mr Macaura lose?`, o: [`He started the fire`, `The timber belonged to the company, so he personally had no insurable interest in it`, `He forgot to pay the premium`, `Timber cannot be insured`], a: 1 },
  link: [`Macaura v Northern Assurance Co Ltd (Wikipedia)`, `https://en.wikipedia.org/wiki/Macaura_v_Northern_Assurance_Co_Ltd`] },

{ id: 'carlill', icon: '💨', year: 1893, title: `The Smoke Ball and the £100 Promise`, cite: `Carlill v Carbolic Smoke Ball Co [1893] 1 QB 256 (Court of Appeal)`, topic: `Contracts and advertising`,
  scene: ['📰', '🤧', '💷'],
  story: [
    `In 1891, during a flu pandemic, the Carbolic Smoke Ball Company advertised its gadget: a rubber ball that puffed carbolic acid powder up your nose. The advert promised <b>£100</b> to anyone who used it as directed and still caught flu. To show they meant it, they said £1,000 had been deposited at the bank.`,
    `Mrs Louisa Carlill bought one, used it three times a day for nearly two months, and caught flu anyway. She claimed her £100.`,
    `The company refused. It said the advert was "mere puff", not a serious offer, and that you cannot make a contract with the whole world.`
  ],
  ruling: `The Court of Appeal ruled for Mrs Carlill. The bank deposit showed the promise was serious. The advert was an offer to anyone who performed its conditions, and by using the smoke ball as directed she accepted it. She got her £100.`,
  matters: `Be careful what you promise in adverts. A specific promise that people act on can become a binding contract. Mrs Carlill lived to 96. She died in 1942, of old age and, the story goes, flu.`,
  q: { q: `Why was the advert a binding offer and not just "puff"?`, o: [`It was in a newspaper`, `The company showed it was serious by depositing £1,000 at the bank`, `Mrs Carlill was a lawyer`, `All adverts are contracts`], a: 1 },
  link: [`Carlill v Carbolic Smoke Ball Co (Wikipedia)`, `https://en.wikipedia.org/wiki/Carlill_v_Carbolic_Smoke_Ball_Co`] },

{ id: 'donoghue', icon: '🐌', year: 1932, title: `The Snail in the Ginger Beer`, cite: `Donoghue v Stevenson [1932] AC 562 (House of Lords)`, topic: `Negligence and the duty of care`,
  scene: ['🍾', '🐌', '🤢'],
  story: [
    `On a Sunday evening in August 1928, May Donoghue met a friend at the Wellmeadow Cafe in Paisley, Scotland. The friend bought her a ginger beer, served in a dark, opaque bottle.`,
    `She drank some. When the rest was poured out, the remains of a <b>decomposed snail</b> floated into her glass. She said she suffered shock and gastroenteritis.`,
    `She had a problem. She had no contract with anyone, because her friend had paid. So she sued the manufacturer, David Stevenson, directly. Nothing like that had clearly succeeded before.`
  ],
  ruling: `By 3 to 2, the House of Lords said she could sue. Lord Atkin's "neighbour principle": you must take reasonable care to avoid acts or omissions you can reasonably foresee would injure your neighbour, meaning people so closely affected by what you do that you ought to have them in mind.`,
  matters: `This created the modern law of negligence. Your business owes a duty of care to people it could foreseeably harm, whether or not they are your customers. The case settled before trial, so nobody ever proved the snail existed.`,
  q: { q: `What is the "neighbour principle"?`, o: [`Be nice to people next door`, `Take reasonable care not to harm people you can foresee being affected by your actions`, `Only customers can sue`, `Snails must be labelled`], a: 1 },
  link: [`Donoghue v Stevenson (Wikipedia)`, `https://en.wikipedia.org/wiki/Donoghue_v_Stevenson`] },

{ id: 'hadley', icon: '⚙️', year: 1854, title: `The Broken Crankshaft`, cite: `Hadley v Baxendale (1854) 9 Exch 341`, topic: `How much can you claim for a broken contract?`,
  scene: ['⚙️', '🚚', '⏳'],
  story: [
    `The Hadleys ran a flour mill in Gloucester. Its only crankshaft broke, so the mill stopped. They hired a carrier, Baxendale's firm Pickfords, to take the broken shaft to engineers in Greenwich as a pattern for a new one.`,
    `The carrier promised next-day delivery but took about a week. The mill stood idle the whole time.`,
    `The Hadleys sued for their lost profits. But they had not told the carrier that the mill could not run without that shaft. Most mills had a spare.`
  ],
  ruling: `The court set a rule still used today. You can recover losses that arise <b>naturally</b> from the breach, or that both sides would reasonably have had <b>in mind when they made the contract</b>. The carrier did not know the mill was stopped, so the lost profits were too "remote".`,
  matters: `If a supplier letting you down would cause unusual losses, tell them before you sign, and put it in the contract. And check how your own contracts limit what customers can claim from you.`,
  q: { q: `Why could the Hadleys not recover their lost profits?`, o: [`Mills cannot sue`, `The carrier was not told the mill would stand idle, so the loss was too remote`, `The crankshaft was never broken`, `They waited too long to sue`], a: 1 },
  link: [`Hadley v Baxendale (Wikipedia)`, `https://en.wikipedia.org/wiki/Hadley_v_Baxendale`] },

{ id: 'uber', icon: '🚗', year: 2021, title: `The App That Said It Was Not a Boss`, cite: `Uber BV v Aslam [2021] UKSC 5 (Supreme Court)`, topic: `Employment status`,
  scene: ['📱', '🚗', '⚖️'],
  story: [
    `Uber's contracts said its drivers were independent, self-employed businesses, and that Uber was just a technology platform connecting them with passengers.`,
    `In 2016 drivers including Yaseen Aslam and James Farrar brought a claim. They said the reality was different. Uber set the fares. Uber set the contract terms. Uber controlled which trip information drivers saw, monitored their acceptance rates, and could cut them off the app.`,
    `Uber appealed all the way to the UK Supreme Court.`
  ],
  ruling: `In February 2021 the Supreme Court ruled unanimously that the drivers were <b>workers</b>. Courts must look at the reality of the relationship, not the label written by the stronger party. Drivers were working whenever they were logged in and ready to accept trips.`,
  matters: `Uber's UK drivers gained the minimum wage, holiday pay and pensions. For you: calling someone a contractor does not make them one. If you control the work and they depend on you, they probably have rights.`,
  q: { q: `What did the Supreme Court look at to decide the drivers' status?`, o: [`Only the written contract`, `The reality of how the relationship worked`, `The drivers' star ratings`, `What Uber's website said`], a: 1 },
  link: [`Uber BV v Aslam (Wikipedia)`, `https://en.wikipedia.org/wiki/Uber_BV_v_Aslam`] },

{ id: 'regal', icon: '🎬', year: 1942, title: `The Honest Directors Who Still Had To Pay`, cite: `Regal (Hastings) Ltd v Gulliver [1942] UKHL 1`, topic: `Conflicts of interest`,
  scene: ['🎬', '🤝', '💰'],
  story: [
    `Regal owned a cinema in Hastings and wanted to lease two more through a new subsidiary company. The landlord insisted the subsidiary have £5,000 of paid-up share capital. Regal could only afford £2,000.`,
    `So Regal's directors bought the other shares themselves with their own money. The deal went ahead, and when the business was later sold, the directors made a profit on those shares.`,
    `The new owners of Regal then made the company sue its former directors for that profit.`
  ],
  ruling: `The House of Lords held the directors had to hand over their profit. It did not matter that they acted honestly, that Regal could not afford the shares itself, or that Regal lost nothing. They gained the opportunity through their position as directors and had not obtained the shareholders' approval.`,
  matters: `The rule on conflicts is strict. If an opportunity comes to you because you are a director, disclose it and get proper approval before you take any personal benefit. Good intentions are not a defence.`,
  q: { q: `Why did the directors have to give up their profit?`, o: [`They were dishonest`, `They profited from an opportunity that came through their position, without proper approval`, `Cinemas were illegal`, `They forgot to pay tax`], a: 1 },
  link: [`Regal (Hastings) Ltd v Gulliver (Wikipedia)`, `https://en.wikipedia.org/wiki/Regal_(Hastings)_Ltd_v_Gulliver`] },

{ id: 'djan', icon: '✍️', year: 1994, title: `The Form He Did Not Read`, cite: `Re D'Jan of London Ltd [1994] 1 BCLC 561`, topic: `Duty of care, skill and diligence`,
  scene: ['📝', '🔥', '😬'],
  story: [
    `Mr D'Jan was the director and 99% shareholder of a small company. His insurance broker filled in a fire insurance proposal form for the company. Mr D'Jan signed it <b>without reading it</b>.`,
    `One answer on the form was wrong. It said no director had been involved with a company that had gone into liquidation. He had.`,
    `Then the company's premises burned down, with £174,000 of stock. The insurer found the wrong answer and refused to pay. The company went bust, and the liquidator sued Mr D'Jan.`
  ],
  ruling: `The judge held he was negligent. Signing a form without reading it fell below the standard of a reasonably diligent director. Because the mistake was not gross and he owned almost all the shares, the court reduced what he had to pay, but he was still liable.`,
  matters: `Read what you sign. "My broker filled it in" or "my accountant did it" does not remove a director's own responsibility.`,
  q: { q: `What was Mr D'Jan's mistake?`, o: [`He started the fire`, `He signed an important form without reading it`, `He had no insurance`, `He hired a broker`], a: 1 },
  link: [`Re D'Jan of London Ltd (Wikipedia)`, `https://en.wikipedia.org/wiki/Re_D%27Jan_of_London_Ltd`] },

{ id: 'barings', icon: '🏦', year: 1995, title: `The Rogue Trader and the Sleeping Bosses`, cite: `Barings Bank collapse (1995); Re Barings plc (No 5) [1999]`, topic: `Supervision and controls`,
  scene: ['📉', '🙈', '🏦'],
  story: [
    `Barings was Britain's oldest merchant bank, founded in 1762. In its Singapore office, a young trader called Nick Leeson was making huge reported profits. He was the star.`,
    `But Leeson was in charge of both <b>making trades</b> and <b>recording them</b>. He hid his losses in a secret account numbered 88888. Managers in London sent him hundreds of millions of pounds without understanding what it was for. Warning signs were ignored because the profits looked so good.`,
    `In February 1995 the losses reached £827 million, more than the bank's entire capital. Barings collapsed and was sold for £1.`
  ],
  ruling: `Leeson went to prison in Singapore. In the UK, senior Barings directors were disqualified. The court said directors must keep themselves informed about the company's business, and that while they may delegate tasks, they must still <b>supervise</b>. The more senior and better paid, the more is expected.`,
  matters: `Never let one person both handle money and check the records. If a result looks too good to be true, ask how. Delegating a job does not delegate the responsibility.`,
  q: { q: `What lesson did the Barings case teach directors?`, o: [`Never open overseas offices`, `You can delegate tasks but you must still supervise and understand the business`, `Traders should not be paid bonuses`, `Banks cannot fail`], a: 1 },
  link: [`Barings Bank (Wikipedia)`, `https://en.wikipedia.org/wiki/Barings_Bank`] },

{ id: 'bhs', icon: '🏬', year: 2016, title: `The Department Store Sold for £1`, cite: `BHS collapse (2016); Wright v Chappell [2024] EWHC 1417 (Ch)`, topic: `Wrongful trading`,
  scene: ['🏬', '💷', '📉'],
  story: [
    `BHS was a high-street name for 88 years. In March 2015 its owner, Sir Philip Green, sold the loss-making chain for <b>£1</b> to a company led by Dominic Chappell, who had no retail experience and had been bankrupt before.`,
    `Thirteen months later, in April 2016, BHS collapsed. 11,000 jobs went, and the pension fund had a deficit of £571 million. Parliament called it "the unacceptable face of capitalism". Green later paid £363 million into the pension schemes.`,
    `The liquidators sued the former directors.`
  ],
  ruling: `In 2024 the High Court found former directors liable for <b>wrongful trading</b> and for breaching their duties by keeping the business going on expensive, risky borrowing when they should have known it was doomed. They were ordered to pay tens of millions of pounds personally. Chappell was separately jailed for tax evasion and banned from being a director.`,
  matters: `Limited liability does not protect directors who keep trading recklessly once failure is on the cards. The duty to creditors is real, and courts will enforce it years later.`,
  q: { q: `Why were BHS's former directors made personally liable?`, o: [`The shops were untidy`, `They kept the company trading when they should have known insolvency was unavoidable`, `They sold too cheaply`, `They paid too much tax`], a: 1 },
  link: [`British Home Stores (Wikipedia)`, `https://en.wikipedia.org/wiki/British_Home_Stores`] },

{ id: 'prest', icon: '🏠', year: 2013, title: `The Oil Tycoon and the Hidden Houses`, cite: `Prest v Petrodel Resources Ltd [2013] UKSC 34 (Supreme Court)`, topic: `Piercing the corporate veil`,
  scene: ['🛢️', '🏠', '🔍'],
  story: [
    `Michael Prest was a wealthy oil trader. When he and his wife Yasmin divorced, the court ordered him to pay her £17.5 million.`,
    `But the valuable London houses were not in his name. They were owned by companies he controlled. He said they were the companies' property, not his, so the court could not touch them.`,
    `Could the court "pierce the corporate veil" and treat the companies' property as his?`
  ],
  ruling: `The Supreme Court said the veil can only be pierced in rare cases: where someone is under an existing legal obligation and deliberately uses a company to evade it. That did not apply here. But Mrs Prest still won, because on the evidence the companies were holding the houses <b>on trust</b> for Mr Prest. He had paid for them, so they were really his.`,
  matters: `Courts respect the separate company in almost every case. But you cannot use a company as a hiding place to dodge obligations you already have. Judges will find a way to look behind it.`,
  q: { q: `When will a court pierce the corporate veil?`, o: [`Whenever it seems fair`, `Rarely: when a company is used to deliberately evade an existing legal obligation`, `Whenever a company loses money`, `Never`], a: 1 },
  link: [`Prest v Petrodel Resources Ltd (Wikipedia)`, `https://en.wikipedia.org/wiki/Prest_v_Petrodel_Resources_Ltd`] },

{ id: 'jif', icon: '🍋', year: 1990, title: `The Battle of the Plastic Lemons`, cite: `Reckitt & Colman Products Ltd v Borden Inc [1990] 1 WLR 491 (House of Lords)`, topic: `Passing off`,
  scene: ['🍋', '🍋', '🤔'],
  story: [
    `Since the 1950s, Jif lemon juice had been sold in the UK in a little yellow plastic squeezy lemon. Shoppers knew it at a glance.`,
    `In the 1980s a rival, Borden, began selling its own lemon juice in a very similar plastic lemon, with a different label on the neck.`,
    `Jif's owners had no registered trade mark for the lemon shape. Could they stop the rival anyway?`
  ],
  ruling: `Yes. The House of Lords set out the "classic trinity" of <b>passing off</b>: (1) <b>goodwill</b>, a reputation attached to your get-up; (2) a <b>misrepresentation</b> likely to confuse the public; (3) <b>damage</b>. Shoppers did not read labels closely and would take the rival's lemon for a Jif.`,
  matters: `Even without a registered trade mark, the law protects a reputation you have built. And it means you must not dress your product up to look like someone else's.`,
  q: { q: `What are the three elements of passing off?`, o: [`Offer, acceptance, consideration`, `Goodwill, misrepresentation, damage`, `Name, logo, slogan`, `Patent, design, copyright`], a: 1 },
  link: [`Reckitt & Colman Products Ltd v Borden Inc (Wikipedia)`, `https://en.wikipedia.org/wiki/Reckitt_and_Colman_Products_Ltd_v_Borden_Inc`] },

{ id: 'caterpillar', icon: '🐛', year: 2021, title: `Colin v Cuthbert: The Caterpillar Cake War`, cite: `Marks & Spencer v Aldi (High Court claim, 2021; settled 2022)`, topic: `Trade marks and brand protection`,
  scene: ['🐛', '🎂', '🐛'],
  story: [
    `Colin the Caterpillar, a chocolate sponge roll with a smiling white-chocolate face, has been an M&S birthday favourite since 1990. M&S holds registered trade marks for Colin and his packaging.`,
    `Other supermarkets launched their own caterpillar cakes. In April 2021, M&S took Aldi to the High Court over its cake, <b>Cuthbert the Caterpillar</b>, saying he was so similar that shoppers would think the two were of the same standard and that Aldi was "riding on the coat-tails" of Colin's reputation.`,
    `Aldi responded with jokes on social media: "#FreeCuthbert" trended, and the story ran for weeks.`
  ],
  ruling: `There was no court judgment. In early 2022 the two companies reached a confidential settlement. Cuthbert later returned to shelves with a changed look.`,
  matters: `M&S could act because it had <b>registered</b> its rights. Register your brand, watch for lookalikes, and remember most disputes end in a settlement, not a courtroom verdict. Also: a clever public response can turn a legal headache into free publicity.`,
  q: { q: `What gave M&S the ability to bring its claim?`, o: [`It was the bigger company`, `It had registered trade marks for Colin`, `Caterpillars are protected animals`, `Aldi had no lawyers`], a: 1 },
  link: [`Colin the Caterpillar (Wikipedia)`, `https://en.wikipedia.org/wiki/Colin_the_Caterpillar`] },

{ id: 'ba', icon: '✈️', year: 2020, title: `The Airline, the Hackers and the £20 Million Fine`, cite: `ICO penalty notice: British Airways plc (October 2020)`, topic: `Data protection`,
  scene: ['✈️', '💻', '🔓'],
  story: [
    `In summer 2018, attackers got into British Airways' systems, and for more than two months they went undetected. They harvested the personal and payment card details of around 400,000 customers and staff as people typed them in.`,
    `BA only found out when a third party told it.`,
    `The Information Commissioner's Office investigated. It found BA was processing a huge amount of personal data without adequate security, and that simple measures available at the time, such as multi-factor authentication, could have prevented or limited the attack.`
  ],
  ruling: `In October 2020 the ICO fined BA <b>£20 million</b>, at the time its largest ever fine. The ICO had first proposed £183 million, and reduced it after BA's representations and the impact of the pandemic.`,
  matters: `Being hacked is not itself an offence. Failing to take appropriate security measures is. Basic steps (strong passwords, multi-factor authentication, updates, limiting access) are the legal minimum for any business holding customer data.`,
  q: { q: `Why was BA fined?`, o: [`For being hacked`, `For failing to have adequate security to protect people's data`, `For flying late`, `For reporting the breach`], a: 1 },
  link: [`British Airways data breach (Wikipedia)`, `https://en.wikipedia.org/wiki/British_Airways_data_breach`] },

{ id: 'po', icon: '📮', year: 2019, title: `The Computer That Was Always Right`, cite: `Bates v Post Office Ltd (2019); the Post Office Horizon scandal`, topic: `Trust, evidence and corporate culture`,
  scene: ['💻', '📮', '⚖️'],
  story: [
    `From 1999 the Post Office rolled out a new accounting system called Horizon, built by Fujitsu, to thousands of branches. Soon, sub-postmasters began reporting unexplained shortfalls in their accounts.`,
    `The Post Office insisted Horizon was reliable and told many of them they were the only one having problems. Sub-postmasters were made to repay "missing" money that never existed. Between 1999 and 2015 more than 900 were prosecuted. Some went to prison. Many were bankrupted. Some took their own lives.`,
    `Led by former sub-postmaster Alan Bates, 555 of them took the Post Office to the High Court.`
  ],
  ruling: `In 2019 the judge found that Horizon contained bugs, errors and defects that could and did cause the shortfalls. The Post Office settled for £58 million. Convictions began to be overturned, a public inquiry was held, and in 2024 Parliament passed a law to quash hundreds of convictions at once. It is described as the most widespread miscarriage of justice in British legal history.`,
  matters: `No system is infallible, and an organisation that will not listen can do terrible harm. As a leader: take complaints seriously, look for patterns, check the evidence yourself, and never let protecting the brand matter more than the truth.`,
  q: { q: `What was at the heart of the Horizon scandal?`, o: [`Sub-postmasters stole money`, `Faulty software was treated as reliable, and people were punished for errors it created`, `The Post Office ran out of stamps`, `A hacker attack`], a: 1 },
  link: [`British Post Office scandal (Wikipedia)`, `https://en.wikipedia.org/wiki/British_Post_Office_scandal`] },

{ id: 'pando', icon: '⛴️', year: 2022, title: `800 Sacked on a Video Call`, cite: `P&O Ferries mass dismissal (March 2022)`, topic: `Redundancy consultation`,
  scene: ['⛴️', '📹', '😠'],
  story: [
    `On 17 March 2022, P&O Ferries told nearly 800 seafarers, in a pre-recorded video message, that their jobs had ended that day. Security staff were ready to escort crews off the ships. Cheaper agency crews were waiting to board.`,
    `UK law requires employers planning large redundancies to <b>consult</b> staff representatives in advance (at least 45 days where 100 or more jobs are at risk) and to notify the government.`,
    `Asked by MPs whether the company had chosen to break the law, the chief executive said there was "absolutely no doubt" it was required to consult, and that it chose not to because no union would have accepted the plan. It paid enhanced compensation instead.`
  ],
  ruling: `No prosecution followed, which caused public anger. But the reaction changed the law: Parliament passed the Seafarers' Wages Act 2023, a statutory code on "fire and rehire" followed, and the Employment Rights Act 2025 increased the penalty for failing to consult collectively and restricted fire-and-rehire.`,
  matters: `Treating compensation as the price of breaking the law destroyed P&O's reputation overnight and led to tougher rules for everyone. Law is the floor, not the ceiling. How you treat people when times are hard is what they remember.`,
  q: { q: `What legal step did P&O Ferries skip?`, o: [`Paying Corporation Tax`, `Consulting with staff representatives before mass redundancies`, `Registering its ships`, `Publishing its accounts`], a: 1 },
  link: [`P&O Ferries (Wikipedia)`, `https://en.wikipedia.org/wiki/P%26O_Ferries`] },

{ id: 'lorraine', icon: '📺', year: 2019, title: `The TV Presenter and the Taxman`, cite: `Albatel Ltd v HMRC [2019] UKFTT 195 (TC)`, topic: `IR35 and contractor status`,
  scene: ['📺', '🧾', '🎭'],
  story: [
    `TV presenter Lorraine Kelly provided her services to ITV through her own company, Albatel Ltd. HMRC said that under the <b>IR35</b> rules she was really like an ITV employee, and sent a bill of about £1.2 million in Income Tax and National Insurance.`,
    `IR35 asks: if you take away the personal company in the middle, would this person be an employee of the client?`,
    `She appealed to the tax tribunal.`
  ],
  ruling: `The tribunal found for her. ITV did not control her work the way an employer would. She decided how the show ran, could do other work, and had no holiday or sick pay. The judge said she was a self-employed star supplying the "brand" of Lorraine Kelly, even describing her on-screen role as a kind of performance.`,
  matters: `Other presenters with different facts lost similar cases. IR35 turns on the real working arrangements: control, substitution, and mutual obligation. If your company hires contractors through their own companies, or you become one, you need to check the status properly.`,
  q: { q: `What question does IR35 ask?`, o: [`Is the person famous?`, `Would the person be an employee if there were no company in the middle?`, `Does the person pay VAT?`, `Is the company profitable?`], a: 1 },
  link: [`GOV.UK: Understanding off-payroll working (IR35)`, `https://www.gov.uk/guidance/understanding-off-payroll-working-ir35`] },

{ id: 'morrisons', icon: '🛒', year: 2020, title: `The Auditor With a Grudge`, cite: `WM Morrison Supermarkets plc v Various Claimants [2020] UKSC 12 (Supreme Court)`, topic: `Vicarious liability`,
  scene: ['🛒', '💾', '😡'],
  story: [
    `Andrew Skelton was a senior internal auditor at Morrisons. After being disciplined, he held a grudge. In 2013 he was trusted with payroll data for an external audit. He secretly copied the records of about 100,000 staff (names, addresses, bank details, salaries) and posted them online, then sent them to newspapers. He tried to frame a colleague.`,
    `Skelton was caught and jailed for 8 years. Thousands of employees then sued <b>Morrisons</b>, arguing an employer is responsible for the wrongs of its staff.`,
    `The lower courts agreed with the employees.`
  ],
  ruling: `The Supreme Court reversed that. An employer is vicariously liable for wrongs closely connected with what the employee was employed to do. Skelton was not furthering Morrisons' business. He was pursuing a personal vendetta <i>against</i> it. Morrisons was not liable.`,
  matters: `Employers usually ARE liable for staff wrongdoing in the course of their jobs, so this was a narrow escape. It still cost Morrisons millions in response costs. Limit access to sensitive data, monitor unusual downloads, and take care with trusted insiders.`,
  q: { q: `Why was Morrisons NOT liable for the leak?`, o: [`Employers are never liable for staff`, `The employee was pursuing a personal vendetta, not doing his job`, `The data was not personal`, `The staff did not complain`], a: 1 },
  link: [`WM Morrison Supermarkets plc v Various Claimants (Wikipedia)`, `https://en.wikipedia.org/wiki/WM_Morrison_Supermarkets_plc_v_Various_Claimants`] }
];
