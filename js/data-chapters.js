/* Founder's Quest UK — chapter content.
   Figures are for the 2026/27 tax year (checked November 2026). Rules change: always confirm on GOV.UK. */
window.GD = window.GD || {};

GD.chapters = [
/* ------------------------------------------------------------------ 1 */
{
  id: 'structure', icon: '🧭', color: '#ff7a59', title: `Pick Your Vehicle`,
  tagline: `Sole trader, partnership or limited company? Choose how your business exists in law.`,
  lessons: [
    { t: `What is a business, really?`, anim: 'business',
      body: [
        `A business is simple at heart: you <b>make or do something people want</b>, and sell it for <b>more than it costs you</b>. The bit left over is <b>profit</b>.`,
        `But the law needs to know <b>who</b> is doing the selling. Is it you personally? You and a friend? Or a separate "thing" called a company? That choice is called your <b>business structure</b>, and it decides who pays tax, who owns the profits, and who is on the hook if things go wrong.`
      ],
      teen: `Think of structure like choosing a vehicle for a road trip. A bike (sole trader) is cheap and easy. A car with airbags (limited company) costs more to run but protects you in a crash.`,
      fact: `There are about 5.5 million private businesses in the UK. Over half are sole traders with no employees at all.`,
      refs: [[`GOV.UK: Set up a business`, `https://www.gov.uk/set-up-business`]] },
    { t: `Sole trader: you ARE the business`, anim: 'soletrader',
      body: [
        `A <b>sole trader</b> is one person running a business in their own name. There is no legal wall between you and the business.`,
        `<ul><li>✅ Easiest and cheapest to start. No Companies House forms.</li><li>✅ All profit after tax is yours.</li><li>✅ Your accounts stay private.</li><li>⚠️ <b>Unlimited liability</b>: if the business owes money, <i>you</i> owe it. Your savings, even your home, can be at risk.</li><li>⚠️ You pay Income Tax and National Insurance on profits through <b>Self Assessment</b>.</li></ul>`,
        `You can earn up to <b>£1,000</b> a tax year from trading without telling HMRC (the "trading allowance"). Earn more and you must register for Self Assessment by <b>5 October</b> after the tax year ends.`
      ],
      teen: `Selling trainers online for a bit of profit? Under £1,000 of sales a year, HMRC does not need to hear from you. Over that, you register as a sole trader. It is free.`,
      refs: [[`GOV.UK: Set up as a sole trader`, `https://www.gov.uk/set-up-sole-trader`], [`GOV.UK: Trading allowance`, `https://www.gov.uk/guidance/tax-free-allowances-on-property-and-trading-income`]] },
    { t: `Limited company: a separate legal person`, anim: 'veil',
      body: [
        `A <b>private limited company</b> (its name ends in "Ltd" or "Limited") is a <b>legal person in its own right</b>. It can own things, sign contracts, employ people, sue and be sued, all in its own name.`,
        `<ul><li>🛡️ <b>Limited liability</b>: shareholders can normally only lose what they paid (or promised to pay) for their shares.</li><li>💼 Looks more established to customers, banks and investors.</li><li>📈 You can sell shares to raise money.</li><li>📑 More admin: accounts, confirmation statement and a Company Tax Return every year.</li><li>👀 Less privacy: directors, owners and accounts are on a public register.</li></ul>`,
        `The company pays <b>Corporation Tax</b> on its profits. The money in the company's bank account belongs to the <b>company</b>, not to you, even if you own 100% of it.`
      ],
      teen: `Imagine building a robot. The robot runs the shop, takes the money, and signs the deals. If the robot gets into debt, people chase the robot, not you. That robot is your company.`,
      fact: `This idea was fixed in law by a boot maker called Aron Salomon in 1897. Read his story in Law Stories.`,
      refs: [[`GOV.UK: Set up a limited company`, `https://www.gov.uk/limited-company-formation`], [`Companies Act 2006`, `https://www.legislation.gov.uk/ukpga/2006/46/contents`]] },
    { t: `When the shield does NOT protect you`, anim: 'veilbreak',
      body: [
        `Limited liability is strong, but it is not magic. You can still be personally on the hook when:`,
        `<ul><li>✍️ You sign a <b>personal guarantee</b> (banks and landlords often ask for one).</li><li>🚨 You commit <b>fraud</b>, or keep trading when you know the company cannot avoid going bust (<b>wrongful trading</b>).</li><li>💸 You take money out that the company could not lawfully pay (illegal dividends, overdrawn director's loan).</li><li>🧾 You personally cause harm, for example by your own negligent advice.</li></ul>`
      ],
      teen: `The shield stops honest bad luck from wrecking your life. It does not protect cheating, and it does not cover promises you made in your own name.`,
      refs: [[`Insolvency Act 1986, s214 (wrongful trading)`, `https://www.legislation.gov.uk/ukpga/1986/45/section/214`]] },
    { t: `Partnerships, LLPs and social enterprises`, anim: 'structures',
      body: [
        `<b>Ordinary partnership</b>: two or more people in business together. Simple, but each partner is personally liable for <i>all</i> the partnership's debts, including ones a partner ran up without telling you.`,
        `<b>LLP (Limited Liability Partnership)</b>: partners (called "members") get limited liability, and profits are taxed like a partnership. Popular with law and accounting firms.`,
        `<b>CIC (Community Interest Company)</b>: a limited company for social good. It has an "asset lock" so profits and assets are used for the community.`,
        `<b>Charity / CIO</b>: for purely charitable aims, regulated by the Charity Commission.`
      ],
      teen: `Starting something with a mate? Without a written agreement, the law treats you as a partnership by default, with equal shares and shared debts. Write things down.`,
      refs: [[`GOV.UK: Choose a legal structure`, `https://www.gov.uk/set-up-business`], [`GOV.UK: Set up a CIC`, `https://www.gov.uk/set-up-a-social-enterprise`]] },
    { t: `Can a teenager run a business?`, anim: 'teen',
      body: [
        `Yes. Here is what UK law says:`,
        `<ul><li>🧑‍💼 You can be a <b>company director from age 16</b>.</li><li>📜 There is no minimum age to be a sole trader or to own shares, but under-18s can cancel most contracts, so banks and suppliers often want an adult involved.</li><li>⏰ If you are still of compulsory school age and work <i>for someone else</i>, strict child employment rules apply (hours, type of work, local council permits).</li><li>💷 Tax has no age limit. The same allowances apply to you as to adults.</li></ul>`
      ],
      teen: `Plenty of founders started young. The usual route: a parent or guardian helps open the bank account, and you become a director at 16.`,
      refs: [[`Companies Act 2006, s157 (minimum age for directors)`, `https://www.legislation.gov.uk/ukpga/2006/46/section/157`], [`GOV.UK: Child employment`, `https://www.gov.uk/child-employment`]] }
  ],
  decisions: [
    { prompt: `You bake custom cakes at weekends and made £600 this year. A friend says you MUST form a limited company right now. What do you do?`,
      options: [
        { text: `Carry on as you are. It is under the £1,000 trading allowance.`, fx: { cash: 100, comp: 5 }, best: true, fb: `Right. Under £1,000 of trading income a year you do not need to register. Keep simple records in case you grow.` },
        { text: `Form a company today to look professional.`, fx: { cash: -150, comp: 0 }, fb: `Legal, but you just bought yourself yearly accounts, a confirmation statement and a tax return for a £600 hobby. Too early.` },
        { text: `Ignore tax completely, forever.`, fx: { comp: -15, rep: -5 }, fb: `Fine today, risky tomorrow. The moment you pass £1,000 you must register, and HMRC gets data from online marketplaces.` }
      ] },
    { prompt: `Your app idea needs a £20,000 loan and you will sign contracts with big customers. Which structure fits?`,
      options: [
        { text: `Sole trader. Less paperwork.`, fx: { comp: -5, rep: -5 }, fb: `If a contract goes wrong, your personal savings are exposed. Bigger risks call for a stronger shield.` },
        { text: `Limited company. Separate legal person and limited liability.`, fx: { rep: 10, comp: 10 }, best: true, fb: `Good call. The company signs the contracts and takes the risk. Watch out for personal guarantees on the loan, though.` },
        { text: `Informal partnership with a friend, nothing written down.`, fx: { comp: -10, team: -5 }, fb: `Each partner would be personally liable for all the debts, and you have no agreement about who owns what.` }
      ] },
    { prompt: `The bank will lend to your new company only if you sign a personal guarantee. What does that mean?`,
      options: [
        { text: `Nothing. The company has limited liability.`, fx: { comp: -10 }, fb: `Careful. A personal guarantee is your own promise. If the company cannot pay, the bank can come after you.` },
        { text: `If the company cannot repay, I must repay from my own pocket.`, fx: { comp: 10, xp: 0 }, best: true, fb: `Exactly. Limited liability does not cover promises you make personally. Negotiate a cap, or take advice before signing.` },
        { text: `The bank becomes a shareholder.`, fx: { comp: -5 }, fb: `No. A lender is a creditor, not an owner. A guarantee is about who pays if the company cannot.` }
      ] }
  ],
  games: [
    { type: 'sort', title: `Bike or Car?`, intro: `Drop each fact into the right garage.`,
      bins: [`Sole trader`, `Limited company`],
      items: [
        [`You are personally liable for all debts`, 0], [`Files accounts at Companies House`, 1], [`Pays Corporation Tax on profits`, 1],
        [`Pays Income Tax through Self Assessment on profits`, 0], [`Name ends in Ltd or Limited`, 1], [`Is a separate legal person`, 1],
        [`Can start trading today with no registration fee`, 0], [`Owners are called shareholders`, 1], [`Business finances stay private`, 0],
        [`Must have at least one director`, 1]
      ] }
  ],
  quiz: [
    { q: `What does "limited liability" mean?`, o: [`The company can only make limited profit`, `Shareholders normally only risk what they put in for their shares`, `Directors can never be sued`, `The company pays less tax`], a: 1, why: `Limited liability caps the shareholders' loss at the amount they paid or agreed to pay for shares.` },
    { q: `From what age can you be a company director in the UK?`, o: [`13`, `16`, `18`, `21`], a: 1, why: `Companies Act 2006 s157 sets the minimum age at 16.` },
    { q: `How much trading income can you earn in a tax year before you must tell HMRC?`, o: [`£500`, `£1,000`, `£12,570`, `£90,000`], a: 1, why: `The trading allowance is £1,000 of gross trading income per tax year.` },
    { q: `Who owns the money in a limited company's bank account?`, o: [`The directors`, `The shareholders personally`, `The company itself`, `HMRC`], a: 2, why: `The company is a separate legal person and owns its own assets.` },
    { q: `Which of these can make a director personally liable despite limited liability?`, o: [`Signing a personal guarantee`, `Hiring an accountant`, `Filing accounts on time`, `Owning 100% of the shares`], a: 0, why: `A personal guarantee is a promise in your own name.` },
    { q: `In an ordinary partnership with no agreement, who is liable for a debt one partner ran up for the business?`, o: [`Only that partner`, `Nobody`, `All the partners`, `The bank`], a: 2, why: `Partners are jointly liable for partnership debts (Partnership Act 1890).` }
  ],
  refs: [[`GOV.UK: Set up a business`, `https://www.gov.uk/set-up-business`], [`GOV.UK: Sole trader`, `https://www.gov.uk/set-up-sole-trader`], [`GOV.UK: Limited company formation`, `https://www.gov.uk/limited-company-formation`], [`Partnership Act 1890`, `https://www.legislation.gov.uk/ukpga/Vict/53-54/39/contents`]]
},

/* ------------------------------------------------------------------ 2 */
{
  id: 'register', icon: '🏛️', color: '#4f8cff', title: `Bring It To Life`,
  tagline: `Register at Companies House: name, address, directors, shares and the people in control.`,
  lessons: [
    { t: `The 7 things you need to register`, anim: 'register',
      body: [
        `You "incorporate" a company by applying to <b>Companies House</b>, the UK's official company register. Online it costs <b>£100</b> and is usually done within 24 hours.`,
        `<ol><li>A <b>company name</b></li><li>A <b>registered office</b> address in the UK and a registered email</li><li>At least one <b>director</b></li><li>At least one <b>shareholder</b> and details of the shares</li><li>Your <b>people with significant control</b> (PSCs)</li><li>A <b>SIC code</b> saying what the company does</li><li>The <b>memorandum and articles of association</b> (the rulebook)</li></ol>`,
        `When it is approved you get a <b>certificate of incorporation</b> with your company number. That is your company's birth certificate.`
      ],
      teen: `It is like creating a game character: pick a name, a home base, who controls it, who owns it, and the rules it plays by.`,
      refs: [[`GOV.UK: Register your company`, `https://www.gov.uk/limited-company-formation/register-your-company`], [`Companies House fees`, `https://www.gov.uk/government/publications/companies-house-fees/companies-house-fees`]] },
    { t: `Choosing a name`, anim: 'name',
      body: [
        `<ul><li>It must end in <b>Limited</b> or <b>Ltd</b> (or the Welsh "Cyfyngedig"/"Cyf").</li><li>It cannot be the <b>same as</b> or too like an existing registered name.</li><li>It cannot be offensive.</li><li>Sensitive words such as "Royal", "Bank", "Accredited" or "British" need permission.</li><li>It must not suggest a link with government.</li></ul>`,
        `<b>Big trap:</b> Companies House accepting your name does <b>not</b> mean you are safe to use it. Someone else may own the <b>trade mark</b>. Always search the trade mark register and check the web domain too.`,
        `You can trade under a different "business name" (for example Sparkle Ltd trading as "Glow Bakes"), but your real company name must still appear on invoices and your website.`
      ],
      teen: `Checking the name is free. Rebranding after a legal letter is not.`,
      refs: [[`GOV.UK: Choose a company name`, `https://www.gov.uk/limited-company-formation/choose-company-name`], [`Search the company register`, `https://find-and-update.company-information.service.gov.uk/`], [`Search for a trade mark`, `https://www.gov.uk/search-for-trademark`]] },
    { t: `Registered office and going public`, anim: 'office',
      body: [
        `Your <b>registered office</b> is the official address where legal letters are sent. It must be in the part of the UK where the company is registered, and it must be an "appropriate address" where post will actually reach you. A PO Box is not allowed.`,
        `It is <b>public</b>. If you use your home address, anyone can look it up. Many founders use their accountant's address or a registered office service.`,
        `Directors give two addresses: a <b>service address</b> (public) and a <b>home address</b> (kept private).`
      ],
      teen: `Search any UK company for free and see its directors, owners and accounts. Try it on a brand you like.`,
      refs: [[`GOV.UK: Company addresses`, `https://www.gov.uk/limited-company-formation/company-address`], [`Get information about a company`, `https://www.gov.uk/get-information-about-a-company`]] },
    { t: `Directors, shareholders and PSCs`, anim: 'whoiswho',
      body: [
        `<b>Shareholders</b> (also called members) <b>own</b> the company. <b>Directors</b> <b>run</b> it. In a small company the same person is often both, but the two roles are legally different.`,
        `<ul><li>You need at least <b>one director</b> who is a real person aged 16 or over, and not disqualified.</li><li>A company secretary is optional for private companies.</li><li>A <b>PSC</b> (person with significant control) is anyone holding <b>more than 25%</b> of the shares or votes, or who can appoint most of the board, or otherwise controls the company.</li></ul>`,
        `<b>Identity checks:</b> since 18 November 2025, new directors must <b>verify their identity</b> with Companies House (using GOV.UK One Login or an authorised agent) before being appointed. Existing directors and PSCs are being brought in over a transition year.`
      ],
      teen: `Owners are like the people who own a football club. Directors are like the manager picking the team each week.`,
      refs: [[`GOV.UK: Verify your identity for Companies House`, `https://www.gov.uk/guidance/verifying-your-identity-for-companies-house`], [`GOV.UK: People with significant control`, `https://www.gov.uk/guidance/people-with-significant-control-pscs`]] },
    { t: `Shares: slicing the pie`, anim: 'shares',
      body: [
        `A company limited by shares must issue at least <b>one share</b>. Each share has a <b>nominal value</b> (often £1 or even £0.01). That is the most the shareholder can be asked to pay in if the company fails.`,
        `Shares normally carry three rights: to <b>vote</b>, to receive <b>dividends</b>, and to share in what is left if the company is wound up. Different <b>classes</b> of share can have different rights.`,
        `<b>Tip:</b> issue 100 or 1,000 shares rather than 1 or 2. It makes it far easier to bring in a co-founder or investor later.`,
        `<b>The 50/50 trap:</b> two founders with half each means neither can out-vote the other. Agree in writing how deadlocks are solved.`
      ],
      teen: `Shares are pizza slices. More slices do not make more pizza. They just make it easier to share.`,
      refs: [[`GOV.UK: Shareholders`, `https://www.gov.uk/limited-company-formation/shareholders`]] },
    { t: `The rulebook: memorandum and articles`, anim: 'articles',
      body: [
        `The <b>memorandum of association</b> is a short statement that the first shareholders agree to form the company.`,
        `The <b>articles of association</b> are the company's rules: how directors make decisions, how shares are issued and transferred, how meetings work. Most start-ups use the free <b>model articles</b> and change them later if needed.`,
        `A <b>shareholders' agreement</b> is a separate private contract between owners. It covers the things articles usually do not: what happens if a founder leaves, who can sell to whom, and how disputes are settled.`
      ],
      teen: `Articles are the official rules of the game. A shareholders' agreement is the house rules you and your friends agree so nobody flips the board.`,
      refs: [[`GOV.UK: Model articles of association`, `https://www.gov.uk/guidance/model-articles-of-association-for-limited-companies`]] },
    { t: `Day one checklist after you register`, anim: 'checklist',
      body: [
        `<ul><li>🏦 Open a <b>business bank account</b> in the company's name.</li><li>🧾 <b>Register for Corporation Tax</b> with HMRC within <b>3 months</b> of starting to do business.</li><li>📚 Set up your <b>statutory registers</b> (members, directors, PSCs) and a bookkeeping system.</li><li>🪧 Show the company's <b>registered name</b> at your office and on letters, emails, invoices and your website, along with the company number, registered office and where it is registered.</li><li>🛡️ Sort insurance, and register with the ICO if you handle personal data.</li><li>🗓️ Put your filing deadlines in a calendar today.</li></ul>`
      ],
      teen: `Getting the certificate is the tutorial level. The real game starts now.`,
      refs: [[`GOV.UK: Running a limited company`, `https://www.gov.uk/running-a-limited-company`], [`GOV.UK: Register for Corporation Tax`, `https://www.gov.uk/limited-company-formation/set-up-your-company-for-corporation-tax`]] }
  ],
  decisions: [
    { prompt: `You want to call your company "Royal British Bank of Sweets Ltd". What happens?`,
      options: [
        { text: `Companies House will reject it without special permission.`, fx: { comp: 10 }, best: true, fb: `"Royal", "British" and "Bank" are sensitive words that need approval from the relevant body.` },
        { text: `It is fine, sweets are harmless.`, fx: { comp: -5, cash: -50 }, fb: `Rejected. Sensitive words protect the public from being misled, whatever you sell.` },
        { text: `It is fine if you add an emoji.`, fx: { comp: -5 }, fb: `Nice try. Names are limited to permitted characters and the sensitive words still need approval.` }
      ] },
    { prompt: `You and your best friend are founding together. How do you split the shares?`,
      options: [
        { text: `50/50 and nothing in writing. We are best friends.`, fx: { team: 5, comp: -10 }, fb: `Friendly today, deadlocked tomorrow. With no agreement, neither of you can break a tie.` },
        { text: `Agree a split, plus a shareholders' agreement covering deadlock and what happens if one of you leaves.`, fx: { team: 10, comp: 10, cash: -200 }, best: true, fb: `This is the grown-up move. It costs a little now and saves the company later.` },
        { text: `Give yourself 100% and promise your friend "some shares later".`, fx: { team: -15, rep: -5 }, fb: `Vague promises about shares are the number one cause of founder fights. Write it down.` }
      ] },
    { prompt: `Which address do you use as the registered office?`,
      options: [
        { text: `Your home address. It is free.`, fx: { cash: 0, rep: -3 }, fb: `Legal, but your home address is now on a public register that anyone can search.` },
        { text: `A PO Box.`, fx: { comp: -10 }, fb: `Not allowed. Since March 2024 the registered office must be an "appropriate address", and a PO Box is not one.` },
        { text: `A registered office service or your accountant's address.`, fx: { cash: -60, comp: 8 }, best: true, fb: `A common choice. Your privacy is protected and official post still reaches you.` }
      ] }
  ],
  games: [
    { type: 'order', title: `Incorporation Speedrun`, intro: `Tap the steps in the right order to register and launch a company.`,
      steps: [`Check the name is free (company register and trade marks)`, `Agree directors, shareholders and share split`, `Verify the directors' identity`, `Submit the application and pay the £100 fee`, `Receive the certificate of incorporation`, `Open a business bank account`, `Register for Corporation Tax within 3 months of starting to trade`] }
  ],
  quiz: [
    { q: `Where do you register a UK limited company?`, o: [`HMRC`, `Companies House`, `The local council`, `The Bank of England`], a: 1, why: `Companies House incorporates and keeps the public register of companies.` },
    { q: `What is a PSC?`, o: [`A Public Shares Certificate`, `A person with significant control, typically holding over 25% of shares or votes`, `A Private Secretary of the Company`, `A tax code`], a: 1, why: `Companies must identify and register their people with significant control.` },
    { q: `Which is true about the registered office?`, o: [`It can be a PO Box`, `It is kept secret`, `It is public and must be an address where documents will reach the company`, `It must be a shop`], a: 2, why: `It is the official public address for legal documents.` },
    { q: `Companies House accepted your name. Are you safe from trade mark claims?`, o: [`Yes, completely`, `No, trade marks are a separate check`, `Only in Scotland`, `Yes, after 1 year`], a: 1, why: `The company names register and the trade mark register are different things.` },
    { q: `What are the articles of association?`, o: [`A list of products`, `The company's internal rulebook`, `A tax return`, `The business plan`], a: 1, why: `The articles set out how the company is run.` },
    { q: `How soon must you tell HMRC your company is active for Corporation Tax?`, o: [`Within 3 months of starting to do business`, `Within 3 years`, `Only when you make profit`, `Never, Companies House does it all`], a: 0, why: `You must register within 3 months of starting business activity.` },
    { q: `What do new directors need to do since November 2025?`, o: [`Pass an exam`, `Verify their identity with Companies House`, `Deposit £1,000`, `Be at least 25`], a: 1, why: `Identity verification became compulsory for new directors on 18 November 2025.` }
  ],
  refs: [[`GOV.UK: Register your company`, `https://www.gov.uk/limited-company-formation/register-your-company`], [`Companies House: find company information`, `https://find-and-update.company-information.service.gov.uk/`], [`Verify your identity for Companies House`, `https://www.gov.uk/guidance/verifying-your-identity-for-companies-house`], [`Companies House fees`, `https://www.gov.uk/government/publications/companies-house-fees/companies-house-fees`]]
},

/* ------------------------------------------------------------------ 3 */
{
  id: 'money', icon: '💷', color: '#22c58b', title: `Master The Money`,
  tagline: `Bookkeeping, cash flow, invoices and accounts. Know your numbers or they will surprise you.`,
  lessons: [
    { t: `Company money is not your money`, anim: 'twowallets',
      body: [
        `The company's bank account belongs to the <b>company</b>. You can only take money out in a few proper ways:`,
        `<ul><li>💼 <b>Salary</b> through payroll (PAYE)</li><li>💰 <b>Dividends</b> out of profits, if you are a shareholder</li><li>🧾 <b>Expenses</b> you paid personally for the business, repaid at cost</li><li>🔁 A <b>director's loan</b>, which must be recorded and has tax rules</li></ul>`,
        `Mixing personal and company spending is one of the fastest ways to get into trouble with tax, with co-founders and with the law.`
      ],
      teen: `If your football team has a kitty for kit and travel, you would not use it to buy your lunch. Same idea.`,
      refs: [[`GOV.UK: Taking money out of a limited company`, `https://www.gov.uk/running-a-limited-company/taking-money-out-of-a-limited-company`], [`GOV.UK: Director's loans`, `https://www.gov.uk/directors-loans`]] },
    { t: `Bookkeeping: your company's diary`, anim: 'books',
      body: [
        `Every company must keep <b>accounting records</b>: all money received and spent, what it owns (assets), what it owes (liabilities), stock, and who it bought from and sold to.`,
        `Keep records for at least <b>6 years</b> from the end of the financial year. HMRC can fine a company up to <b>£3,000</b> for failing to keep proper records.`,
        `Good habits: use accounting software, snap a photo of every receipt, and match ("reconcile") your books to the bank statement every week.`
      ],
      teen: `Bookkeeping is just keeping score. You would not play a whole season without knowing the score.`,
      refs: [[`GOV.UK: Company and accounting records`, `https://www.gov.uk/running-a-limited-company/company-and-accounting-records`]] },
    { t: `Profit is not cash`, anim: 'cashflow',
      body: [
        `<b>Profit</b> = sales minus costs. <b>Cash</b> = money actually in the bank. They are not the same, and confusing them kills healthy-looking companies.`,
        `Example: you sell £10,000 of goods in March, but the customer pays in June. Your profit shows in March. Your cash arrives in June. Meanwhile rent, wages and suppliers want paying now.`,
        `A <b>cash flow forecast</b> lists expected money in and out, week by week, so you can spot the dry patch before you fall into it.`
      ],
      teen: `Your mate owes you £50. You are "richer", but you still cannot buy a cinema ticket until they pay up.`,
      fact: `Most small businesses that fail are short of cash, not short of customers.`,
      refs: [[`British Business Bank: managing cash flow`, `https://www.british-business-bank.co.uk/business-guidance/guidance-articles/finance/how-to-manage-cash-flow`]] },
    { t: `Invoices and getting paid`, anim: 'invoice',
      body: [
        `An invoice is your formal request for payment. A limited company's invoice must show:`,
        `<ul><li>A unique invoice number and the date</li><li>Your <b>full company name</b>, address and <b>company registration number</b></li><li>The customer's name and address</li><li>What you supplied, and when</li><li>The amount, the VAT if you are registered (plus your VAT number), and the total</li></ul>`,
        `If you agree no payment date, a business customer must pay within <b>30 days</b>. After that you can charge <b>statutory interest</b> of 8% above the Bank of England base rate, plus a fixed sum of £40, £70 or £100 depending on the debt size.`
      ],
      teen: `Do the work, send the invoice the same day, and chase politely. Being shy about money is expensive.`,
      refs: [[`GOV.UK: Invoicing and taking payment`, `https://www.gov.uk/invoicing-and-taking-payment-from-customers`], [`GOV.UK: Late commercial payments`, `https://www.gov.uk/late-commercial-payments-charging-interest-debt-recovery`]] },
    { t: `The profit and loss account`, anim: 'pnl',
      body: [
        `The <b>P&amp;L</b> tells the story of a period, usually a year:`,
        `<ul><li><b>Turnover</b> (sales)</li><li>minus <b>cost of sales</b> (what the goods cost you) = <b>gross profit</b></li><li>minus <b>overheads</b> (rent, wages, software, marketing) = <b>operating profit</b></li><li>minus interest and <b>tax</b> = <b>net profit</b></li></ul>`,
        `<b>Margin</b> is profit as a percentage of sales. A £10 T-shirt that costs £6 to make has a gross margin of 40%.`
      ],
      teen: `Turnover is vanity, profit is sanity, cash is reality. Old saying, still true.`,
      refs: [[`GOV.UK: Prepare annual accounts`, `https://www.gov.uk/annual-accounts`]] },
    { t: `The balance sheet`, anim: 'balance',
      body: [
        `The <b>balance sheet</b> is a snapshot of one day. It always balances:`,
        `<p class="formula">Assets = Liabilities + Equity</p>`,
        `<ul><li><b>Assets</b>: what the company owns or is owed (cash, stock, equipment, unpaid customer invoices).</li><li><b>Liabilities</b>: what it owes (loans, supplier bills, tax due).</li><li><b>Equity</b>: what is left for the shareholders (share capital plus profits kept in the business).</li></ul>`,
        `If liabilities are bigger than assets, the company may be <b>insolvent</b>. That is a red alert for directors.`
      ],
      teen: `Your phone and savings are assets. The tenner you owe your sister is a liability. What is left is your "equity".`,
      refs: [[`GOV.UK: Accounts and tax returns for private limited companies`, `https://www.gov.uk/prepare-file-annual-accounts-for-limited-company`]] },
    { t: `Pricing and break-even`, anim: 'breakeven', tool: 'breakeven',
      body: [
        `<b>Fixed costs</b> stay the same whatever you sell (rent, software). <b>Variable costs</b> rise with each sale (materials, postage).`,
        `<p class="formula">Break-even units = Fixed costs ÷ (Price − Variable cost per unit)</p>`,
        `Below break-even you lose money. Above it, each sale adds profit. Try the calculator below.`
      ],
      teen: `If the stall costs £60 and you make £3 per brownie, you need to sell 20 brownies before you earn a penny.`,
      refs: [[`British Business Bank: guidance for start-ups`, `https://www.british-business-bank.co.uk/business-guidance`]] },
    { t: `Annual accounts and company sizes`, anim: 'accounts',
      body: [
        `Every year a company must send <b>annual accounts</b> to Companies House and a <b>Company Tax Return</b> to HMRC, even if it is dormant or made no profit.`,
        `<ul><li>First accounts: due <b>21 months</b> after incorporation.</li><li>After that: <b>9 months</b> after the financial year end.</li></ul>`,
        `Small companies can file simpler accounts. A <b>micro-entity</b> meets two of: turnover up to £1 million, balance sheet up to £500,000, up to 10 employees. A <b>small company</b> meets two of: turnover up to £15 million, balance sheet up to £7.5 million, up to 50 employees. Most small companies do not need an audit.`,
        `<b>Late filing penalties</b> are automatic: £150 (up to 1 month late), £375 (1 to 3 months), £750 (3 to 6 months), £1,500 (over 6 months). They double if you are late two years running.`
      ],
      teen: `It is homework with a fine attached. Hand it in on time.`,
      refs: [[`GOV.UK: Annual accounts deadlines and penalties`, `https://www.gov.uk/annual-accounts/penalties-for-late-filing`], [`GOV.UK: Micro-entities, small and dormant companies`, `https://www.gov.uk/annual-accounts/microentities-small-and-dormant-companies`]] }
  ],
  decisions: [
    { prompt: `The company account has £8,000. You fancy a £900 personal gaming laptop. You own 100% of the shares. Can you just pay with the company card?`,
      options: [
        { text: `Yes. My company, my money.`, fx: { comp: -15, cash: -900 }, fb: `No. That is the company's money. A personal purchase becomes a director's loan or a taxable benefit, and it muddies your books.` },
        { text: `No. Pay yourself properly (salary or a lawful dividend), then buy it personally.`, fx: { comp: 12 }, best: true, fb: `Correct. Keep a clean line between you and the company.` },
        { text: `Yes, and call it "office equipment".`, fx: { comp: -25, rep: -10 }, fb: `Claiming personal spending as a business expense is false accounting and tax evasion.` }
      ] },
    { prompt: `A big customer offers a £15,000 order but wants 90 days to pay. Your suppliers want paying in 14 days.`,
      options: [
        { text: `Take it. Revenue is revenue.`, fx: { cash: -3000, rep: 5 }, fb: `You might run out of cash before they pay. Profitable on paper, broke in the bank.` },
        { text: `Negotiate: a deposit up front, shorter terms, or staged payments. Forecast the cash first.`, fx: { cash: 2500, rep: 5, comp: 5 }, best: true, fb: `Smart. A cash flow forecast turns a scary order into a planned one.` },
        { text: `Refuse all big customers forever.`, fx: { cash: -500, rep: -5 }, fb: `Too cautious. The order is good, the terms are the problem.` }
      ] },
    { prompt: `It is 8 months after your year end and you have not started your accounts.`,
      options: [
        { text: `Relax, nobody checks small companies.`, fx: { comp: -20, cash: -150 }, fb: `Penalties are automatic, and a late filing is a criminal offence for directors. Companies House can strike the company off.` },
        { text: `Get the books to an accountant now and file before month 9.`, fx: { comp: 12, cash: -400 }, best: true, fb: `Good. Next year, set reminders at 3 and 6 months.` },
        { text: `File made-up numbers to hit the deadline.`, fx: { comp: -30, rep: -15 }, fb: `Filing false accounts is a serious offence. Never do this.` }
      ] }
  ],
  games: [
    { type: 'sort', title: `Balance Sheet Sorter`, intro: `Asset, liability, income or expense? Sort them fast.`,
      bins: [`Asset`, `Liability`, `Income`, `Expense`],
      items: [[`Cash in the bank`, 0], [`A bank loan`, 1], [`Sales of T-shirts`, 2], [`Monthly rent`, 3], [`A delivery van you own`, 0], [`Unpaid supplier bill`, 1], [`Stock in the cupboard`, 0], [`Staff wages`, 3], [`VAT you owe HMRC`, 1], [`An invoice a customer has not paid yet`, 0], [`Interest earned on savings`, 2], [`Website hosting fees`, 3]] },
    { type: 'spot', title: `Fix The Invoice`, intro: `This invoice from a VAT-registered company has 5 problems. Tap each one you spot.`,
      doc: [
        [`INVOICE`, 0], [`\nFrom: Glow Bakes`, 1, `The full registered company name (Sparkle Foods Ltd) is missing. A trading name alone is not enough.`],
        [`\n12 Mill Lane, Leeds LS1 4AB`, 0], [`\nCompany number: (none shown)`, 1, `A limited company must show its company registration number.`],
        [`\nTo: Cafe Nero Street Ltd, 5 High St, York`, 0], [`\nInvoice number: (blank)`, 1, `Every invoice needs a unique identification number.`],
        [`\nDate: 3 June 2026`, 0], [`\n40 x celebration cupcakes, delivered 1 June 2026`, 0], [`\nNet: £200.00`, 0],
        [`\nVAT: "included somewhere"`, 1, `A VAT invoice must show the VAT rate and amount clearly, plus the VAT registration number.`],
        [`\nTotal: £240.00`, 0], [`\nPayment: cash to Dave, whenever`, 1, `State clear payment terms and pay into the company's bank account, not to an individual.`]
      ] }
  ],
  quiz: [
    { q: `What is the difference between profit and cash?`, o: [`There is none`, `Profit is sales minus costs; cash is the money actually in the bank`, `Cash is always bigger`, `Profit only matters for big companies`], a: 1, why: `Timing differences mean a profitable company can still run out of cash.` },
    { q: `How long must a company keep its accounting records?`, o: [`1 year`, `3 years`, `At least 6 years`, `Forever`], a: 2, why: `Normally 6 years from the end of the financial year they relate to.` },
    { q: `Complete the equation: Assets = Liabilities + ?`, o: [`Profit`, `Equity`, `Turnover`, `Cash`], a: 1, why: `The balance sheet equation: Assets = Liabilities + Equity.` },
    { q: `When are a new company's FIRST accounts due at Companies House?`, o: [`9 months after incorporation`, `12 months after incorporation`, `21 months after incorporation`, `Whenever it makes a profit`], a: 2, why: `First accounts are due 21 months after the date of incorporation.` },
    { q: `A private company files its accounts 4 months late. What is the penalty?`, o: [`£150`, `£375`, `£750`, `£1,500`], a: 2, why: `3 to 6 months late is £750.` },
    { q: `Fixed costs are £500 a month. You sell candles at £10 that cost £5 each to make. How many must you sell to break even?`, o: [`50`, `100`, `150`, `500`], a: 1, why: `£500 ÷ (£10 − £5) = 100 candles.` },
    { q: `Which is a proper way for a director-shareholder to take money out?`, o: [`Dividends from profits`, `Paying personal bills from the company card and saying nothing`, `Taking cash from the till`, `Any way they like`], a: 0, why: `Salary, dividends, expenses and recorded director's loans are the proper routes.` }
  ],
  refs: [[`GOV.UK: Company and accounting records`, `https://www.gov.uk/running-a-limited-company/company-and-accounting-records`], [`GOV.UK: Annual accounts`, `https://www.gov.uk/annual-accounts`], [`GOV.UK: Invoicing`, `https://www.gov.uk/invoicing-and-taking-payment-from-customers`], [`GOV.UK: Director's loans`, `https://www.gov.uk/directors-loans`]]
},

/* ------------------------------------------------------------------ 4 */
{
  id: 'tax', icon: '🧾', color: '#f5b921', title: `Tame The Taxes`,
  tagline: `Corporation Tax, VAT, PAYE and dividends. What you owe, when you owe it, and how to stay calm.`,
  lessons: [
    { t: `The tax map`, anim: 'taxmap',
      body: [
        `A UK company deals with several taxes. HMRC (His Majesty's Revenue and Customs) collects them.`,
        `<ul><li>🏢 <b>Corporation Tax</b>: on the company's profits.</li><li>🛒 <b>VAT</b>: on sales, once turnover passes £90,000 (or earlier if you choose).</li><li>👷 <b>PAYE and National Insurance</b>: on wages you pay staff, including yourself.</li><li>💰 <b>Dividend tax</b>: paid by shareholders personally on dividends they receive.</li><li>🏬 <b>Business rates</b>: paid to the council on shops, offices and other premises.</li></ul>`
      ],
      teen: `Tax is the price of the stuff we share: schools, roads, the NHS. Your job is to pay the right amount, on time. Not more, not less.`,
      refs: [[`GOV.UK: Corporation Tax`, `https://www.gov.uk/corporation-tax`], [`HMRC YouTube channel`, `https://www.youtube.com/@HMRCgovuk`]] },
    { t: `Corporation Tax`, anim: 'corptax', tool: 'corptax',
      body: [
        `Corporation Tax is charged on <b>taxable profit</b>: income minus allowable costs.`,
        `<ul><li>Profits up to <b>£50,000</b>: <b>19%</b> (small profits rate)</li><li>Profits over <b>£250,000</b>: <b>25%</b> (main rate)</li><li>In between: 25% less "marginal relief", so the rate climbs gradually</li></ul>`,
        `<b>Deadlines:</b> pay the tax <b>9 months and 1 day</b> after the end of your accounting period. File the return (form CT600) within <b>12 months</b>. Yes, you pay before you file.`
      ],
      teen: `Profit of £20,000? Put about £3,800 aside for tax. Do it the day you earn it, not the day the bill lands.`,
      refs: [[`GOV.UK: Corporation Tax rates`, `https://www.gov.uk/corporation-tax-rates`], [`GOV.UK: Marginal Relief calculator`, `https://www.tax.service.gov.uk/marginal-relief-calculator`]] },
    { t: `Allowable expenses`, anim: 'expenses',
      body: [
        `You can deduct a cost from profit if it was spent <b>"wholly and exclusively"</b> for the business.`,
        `<ul><li>✅ Stock and materials, rent, staff wages, software, business insurance, accountancy fees, business travel (not ordinary commuting), advertising.</li><li>❌ Client entertaining, personal spending, fines and penalties, your everyday clothes, dividends.</li></ul>`,
        `Big purchases such as machinery, vans and computers get relief through <b>capital allowances</b>. The <b>Annual Investment Allowance</b> lets most companies deduct up to £1 million of qualifying equipment in the year they buy it.`
      ],
      teen: `A laptop for the business: yes. A parking fine: no. Pizza for a client: nice, but no.`,
      refs: [[`GOV.UK: Corporation Tax allowances and reliefs`, `https://www.gov.uk/corporation-tax-rates/allowances-and-reliefs`], [`GOV.UK: Annual Investment Allowance`, `https://www.gov.uk/capital-allowances/annual-investment-allowance`]] },
    { t: `VAT: you are a tax collector`, anim: 'vat', tool: 'vat',
      body: [
        `<b>VAT</b> (Value Added Tax) is a tax on what people buy. Businesses collect it for HMRC.`,
        `<ul><li>You <b>must register</b> if your VAT-taxable turnover goes over <b>£90,000</b> in any rolling 12 months, or you expect to pass it in the next 30 days alone. You have <b>30 days</b> to register.</li><li>Rates: <b>20%</b> standard, <b>5%</b> reduced (for example home energy), <b>0%</b> zero rate (most food, children's clothes, books). Some things are exempt.</li><li>You charge <b>output VAT</b> on sales and reclaim <b>input VAT</b> on business purchases. You pay HMRC the difference.</li><li>Returns are usually <b>quarterly</b>, filed with Making Tax Digital software, due <b>1 month and 7 days</b> after the quarter ends.</li></ul>`
      ],
      teen: `When you charge £120 for something, £20 of it was never yours. You are just holding it for HMRC. Do not spend it.`,
      refs: [[`GOV.UK: How VAT works`, `https://www.gov.uk/how-vat-works`], [`GOV.UK: Register for VAT`, `https://www.gov.uk/register-for-vat`], [`GOV.UK: VAT rates`, `https://www.gov.uk/vat-rates`]] },
    { t: `Paying yourself: salary and dividends`, anim: 'payyourself',
      body: [
        `<b>Salary</b> goes through payroll. It is a business expense, so it reduces company profit, but Income Tax and National Insurance apply.`,
        `<b>Dividends</b> are a share of profit <i>after</i> Corporation Tax. They can only be paid if the company has enough <b>distributable profits</b>. Paying one when it does not is an <b>unlawful dividend</b>, and you may have to pay it back.`,
        `Personal tax on dividends (2026/27): the first <b>£500</b> is tax-free, then <b>10.75%</b> (basic rate band), <b>35.75%</b> (higher), <b>39.35%</b> (additional).`,
        `Every dividend needs board minutes and a <b>dividend voucher</b>. If you earn dividends or other untaxed income, you file a <b>Self Assessment</b> return by <b>31 January</b>.`
      ],
      teen: `Salary is a wage. A dividend is a slice of the winnings. No winnings, no slice.`,
      refs: [[`GOV.UK: Tax on dividends`, `https://www.gov.uk/tax-on-dividends`], [`GOV.UK: Income Tax rates`, `https://www.gov.uk/income-tax-rates`]] },
    { t: `PAYE: tax on wages`, anim: 'payslip', tool: 'takehome',
      body: [
        `When you pay anyone a wage, including yourself as a director, you run <b>PAYE</b> (Pay As You Earn). You deduct Income Tax and employee National Insurance and send them to HMRC. You also pay <b>employer's National Insurance</b> on top.`,
        `<ul><li>Personal allowance: <b>£12,570</b> tax-free. Then 20% up to £50,270, 40% up to £125,140, 45% above (England, Wales and Northern Ireland. Scotland has its own bands).</li><li>Employee NI: <b>8%</b> between £12,570 and £50,270, 2% above.</li><li>Employer NI: <b>15%</b> on pay above <b>£5,000</b> a year. The <b>Employment Allowance</b> can wipe out up to £10,500 of it for eligible employers.</li><li>Report to HMRC <b>on or before each payday</b> (Real Time Information). Pay HMRC by the <b>22nd</b> of the next month.</li></ul>`
      ],
      teen: `Your payslip shows "gross" (the headline) and "net" (what lands in your account). The gap is tax, NI and pension. Slide the tool to see.`,
      refs: [[`GOV.UK: PAYE and payroll for employers`, `https://www.gov.uk/paye-for-employers`], [`GOV.UK: Rates and thresholds for employers 2026 to 2027`, `https://www.gov.uk/guidance/rates-and-thresholds-for-employers-2026-to-2027`]] },
    { t: `The company year: deadlines`, anim: 'calendar',
      body: [
        `For a company with a 31 March year end:`,
        `<ul><li>📅 <b>Every payday</b>: payroll report (FPS). <b>22nd monthly</b>: pay PAYE and NI.</li><li>📅 <b>Quarterly</b>: VAT return and payment, 1 month and 7 days after each quarter.</li><li>📅 <b>31 December</b>: annual accounts due at Companies House (9 months).</li><li>📅 <b>1 January</b>: Corporation Tax payment due (9 months and 1 day).</li><li>📅 <b>31 March</b>: Company Tax Return due (12 months).</li><li>📅 <b>Yearly</b>: confirmation statement, within 14 days of its review date.</li><li>📅 <b>31 January</b>: directors' personal Self Assessment and payment.</li></ul>`
      ],
      teen: `Put every date in your phone with two reminders. That one habit beats most penalties.`,
      refs: [[`GOV.UK: Company Tax Returns`, `https://www.gov.uk/company-tax-returns`], [`GOV.UK: Pay your Corporation Tax bill`, `https://www.gov.uk/pay-corporation-tax`]] },
    { t: `Mistakes, penalties and scams`, anim: 'scam',
      body: [
        `HMRC penalties depend on behaviour. An honest mistake you took reasonable care over may mean no penalty. Careless errors can cost up to 30% of the extra tax, deliberate ones up to 70%, and deliberate and concealed up to 100%.`,
        `<b>Tax avoidance</b> is arranging things within the rules (some schemes still get shut down). <b>Tax evasion</b> is lying or hiding, and it is a crime.`,
        `<b>Scam alert:</b> HMRC will never text or email asking for bank details, or threaten arrest by phone. New companies also get fake "Companies House" invoices. Check the sender, and log in to your official account directly.`,
        `If you cannot pay on time, <b>tell HMRC early</b>. You may be able to agree a "Time to Pay" plan.`
      ],
      teen: `The worst thing to do with a tax problem is hide from it. The second worst is clicking the link in that text.`,
      refs: [[`GOV.UK: Check a message is really from HMRC`, `https://www.gov.uk/guidance/identify-hmrc-related-scam-phone-calls-emails-and-text-messages`], [`GOV.UK: If you cannot pay your tax bill`, `https://www.gov.uk/difficulties-paying-hmrc`]] }
  ],
  decisions: [
    { prompt: `Your sales for the last 12 months just hit £91,000. You are not VAT registered.`,
      options: [
        { text: `Register for VAT within 30 days.`, fx: { comp: 15 }, best: true, fb: `Correct. The test is a rolling 12 months, checked every month, not a calendar or tax year.` },
        { text: `Wait until the end of the tax year to see.`, fx: { comp: -15, cash: -2000 }, fb: `Too late. You will owe VAT on sales from the date you should have registered, plus a penalty, out of your own pocket.` },
        { text: `Split the business into two companies to stay under.`, fx: { comp: -20, rep: -5 }, fb: `Artificially splitting a business to dodge VAT is caught by HMRC's "disaggregation" rules.` }
      ] },
    { prompt: `The company made £10,000 profit after tax last year but lost £14,000 so far this year, wiping out its reserves. You want a £5,000 dividend.`,
      options: [
        { text: `Pay it. Last year was profitable.`, fx: { comp: -18, cash: -5000 }, fb: `Dividends need distributable profits at the time they are paid. With reserves gone, this would be unlawful and repayable.` },
        { text: `Check up-to-date accounts first. No reserves, no dividend.`, fx: { comp: 12 }, best: true, fb: `Right. Directors must check the latest figures before declaring any dividend.` },
        { text: `Pay it and write the paperwork later if anyone asks.`, fx: { comp: -22 }, fb: `Backdating documents makes a bad situation worse.` }
      ] },
    { prompt: `A text says: "HMRC: you are owed a £284 refund. Claim here: hmrc-refund-uk.co". What do you do?`,
      options: [
        { text: `Click and enter the company card details.`, fx: { cash: -1200, comp: -5 }, fb: `Ouch. That was a phishing scam. HMRC never asks for card details by text.` },
        { text: `Do not click. Forward it to 60599 or phishing@hmrc.gov.uk and delete it.`, fx: { comp: 10, rep: 3 }, best: true, fb: `Correct, and reporting it helps protect others.` },
        { text: `Reply asking if it is real.`, fx: { comp: -3 }, fb: `Replying tells scammers your number is live. Report and delete.` }
      ] }
  ],
  games: [
    { type: 'match', title: `Tax Match`, intro: `Match each tax to what it is charged on.`,
      pairs: [[`Corporation Tax`, `A company's taxable profits`], [`VAT`, `Sales of most goods and services`], [`PAYE Income Tax`, `Wages paid to employees`], [`Employer's NI`, `An extra cost on top of staff pay above £5,000`], [`Dividend tax`, `Profits paid out to shareholders`], [`Business rates`, `Shops, offices and other premises`]] },
    { type: 'sort', title: `Allowable or Not?`, intro: `Can the company deduct it from its profit for Corporation Tax?`,
      bins: [`✅ Allowable`, `❌ Not allowable`],
      items: [[`Accountant's fee`, 0], [`A speeding fine`, 1], [`Taking a client to dinner`, 1], [`Staff wages`, 0], [`Stock bought to resell`, 0], [`Your personal holiday`, 1], [`Business insurance`, 0], [`A dividend paid to you`, 1], [`Train ticket to visit a customer`, 0], [`Online ads for the business`, 0], [`Your everyday jeans`, 1]] }
  ],
  quiz: [
    { q: `What rate of Corporation Tax applies to profits of £40,000?`, o: [`19%`, `20%`, `25%`, `40%`], a: 0, why: `Profits up to £50,000 are taxed at the 19% small profits rate.` },
    { q: `What is the VAT registration threshold?`, o: [`£50,000`, `£85,000`, `£90,000 in a rolling 12 months`, `£250,000`], a: 2, why: `It has been £90,000 since April 2024, tested over any rolling 12 months.` },
    { q: `When is Corporation Tax due for payment?`, o: [`31 January`, `9 months and 1 day after the accounting period ends`, `12 months after the period ends`, `Monthly`], a: 1, why: `Payment is due 9 months and 1 day after the period end, before the return deadline.` },
    { q: `You sell a product for £100 plus 20% VAT and reclaim £8 VAT on costs. How much do you pay HMRC?`, o: [`£20`, `£12`, `£8`, `£28`], a: 1, why: `Output VAT £20 minus input VAT £8 = £12.` },
    { q: `A dividend can only be paid out of...`, o: [`The bank balance`, `Turnover`, `Distributable profits`, `Loans`], a: 2, why: `Companies Act 2006 s830: dividends only from profits available for distribution.` },
    { q: `What is the standard Personal Allowance for Income Tax?`, o: [`£5,000`, `£10,000`, `£12,570`, `£50,270`], a: 2, why: `£12,570, frozen for several years.` },
    { q: `What is the employer's National Insurance rate on pay above the threshold?`, o: [`8%`, `12%`, `13.8%`, `15%`], a: 3, why: `15% above £5,000 a year since April 2025.` },
    { q: `HMRC texts asking for your bank details to send a refund. It is...`, o: [`Normal`, `A scam`, `Only real on weekdays`, `Real if it has a logo`], a: 1, why: `HMRC never asks for personal or payment details by text.` }
  ],
  refs: [[`GOV.UK: Corporation Tax`, `https://www.gov.uk/corporation-tax`], [`GOV.UK: How VAT works`, `https://www.gov.uk/how-vat-works`], [`GOV.UK: PAYE for employers`, `https://www.gov.uk/paye-for-employers`], [`GOV.UK: Tax on dividends`, `https://www.gov.uk/tax-on-dividends`], [`HMRC on YouTube`, `https://www.youtube.com/@HMRCgovuk`]]
},

/* ------------------------------------------------------------------ 5 */
{
  id: 'people', icon: '🤝', color: '#b06cff', title: `Build The Team`,
  tagline: `Hiring, pay, contracts, holidays and fair treatment. People are your biggest strength and your biggest responsibility.`,
  lessons: [
    { t: `Employee, worker or self-employed?`, anim: 'status',
      body: [
        `Rights depend on <b>employment status</b>. What matters is the <b>reality</b> of the relationship, not the label in the contract.`,
        `<ul><li><b>Employee</b>: works under a contract of employment. Gets the full set of rights (including protection against unfair dismissal, redundancy pay, family leave).</li><li><b>Worker</b>: a middle group (many casual and gig workers). Gets minimum wage, paid holiday, rest breaks and protection from discrimination.</li><li><b>Self-employed</b>: runs their own business, sends invoices, can send someone else, carries their own risk. Few employment rights.</li></ul>`,
        `Courts ask: must they do the work personally? Who controls how and when? Is there an obligation to give and accept work? Get it wrong and you can owe back pay, holiday pay and tax. For contractors working through their own company, the <b>IR35</b> off-payroll rules can also apply.`
      ],
      teen: `Calling someone a "freelancer" does not make them one. If it looks like a job and works like a job, the law treats it like a job.`,
      refs: [[`GOV.UK: Employment status`, `https://www.gov.uk/employment-status`], [`GOV.UK: Check employment status for tax (CEST)`, `https://www.gov.uk/guidance/check-employment-status-for-tax`]] },
    { t: `Before your first hire`, anim: 'prehire',
      body: [
        `<ul><li>🧾 <b>Register as an employer</b> with HMRC before the first payday.</li><li>🛡️ Buy <b>employers' liability insurance</b> of at least £5 million. Going without can cost a fine of £2,500 a day.</li><li>🪪 Do a <b>right to work check</b> on every new starter <i>before</i> they begin. Employing someone illegally can cost up to £45,000 per worker (£60,000 for repeat breaches).</li><li>📄 Give a <b>written statement</b> of main terms on or before <b>day one</b>.</li><li>🏦 Check if you must enrol them in a <b>workplace pension</b>.</li><li>⚖️ Recruit fairly. Ads and interview questions must not discriminate.</li></ul>`
      ],
      teen: `Hiring is not just "can you start Monday?". There is a five-minute checklist that saves five-figure fines.`,
      refs: [[`GOV.UK: Employing staff for the first time`, `https://www.gov.uk/employing-staff`], [`GOV.UK: Right to work checks`, `https://www.gov.uk/check-job-applicant-right-to-work`], [`GOV.UK: Employers' liability insurance`, `https://www.gov.uk/employers-liability-insurance`]] },
    { t: `Pay: the minimum wage`, anim: 'wage', tool: 'minwage',
      body: [
        `Almost all workers must get at least the <b>National Minimum Wage</b>. From April 2026 the hourly rates are:`,
        `<ul><li>Age 21 and over (National Living Wage): <b>£12.71</b></li><li>Age 18 to 20: <b>£10.85</b></li><li>Under 18: <b>£8.00</b></li><li>Apprentices (under 19, or in their first year): <b>£8.00</b></li></ul>`,
        `Common traps: unpaid "trial shifts", making staff pay for uniform so pay drops below the minimum, unpaid time for opening up or security checks, and forgetting to raise pay on a birthday. HMRC can order back pay, fine you <b>200%</b> of the underpayment, and publicly <b>name</b> the business.`,
        `Everyone paid through payroll must get an itemised <b>payslip</b>.`
      ],
      teen: `If you have a Saturday job, check your payslip against these rates. Knowing this helps you as a worker and as a boss.`,
      refs: [[`GOV.UK: National Minimum Wage rates`, `https://www.gov.uk/national-minimum-wage-rates`], [`GOV.UK: Minimum wage calculator`, `https://www.gov.uk/am-i-getting-minimum-wage`]] },
    { t: `Hours, breaks and holidays`, anim: 'time',
      body: [
        `<ul><li>⏱️ Maximum <b>48 hours</b> a week on average, unless the worker opts out in writing.</li><li>☕ A <b>20-minute break</b> if the working day is over 6 hours. <b>11 hours</b> rest between working days.</li><li>🏖️ At least <b>5.6 weeks</b> of paid holiday a year. That is 28 days for a five-day week, and bank holidays can count towards it.</li><li>🧒 <b>Young workers</b> (under 18): no more than 8 hours a day and 40 a week, a 30-minute break after 4.5 hours, and usually no night work.</li></ul>`
      ],
      teen: `Tired people make mistakes. These rules exist because a century ago there were none.`,
      refs: [[`GOV.UK: Holiday entitlement`, `https://www.gov.uk/holiday-entitlement-rights`], [`GOV.UK: Maximum weekly working hours`, `https://www.gov.uk/maximum-weekly-working-hours`], [`GOV.UK: Rest breaks at work`, `https://www.gov.uk/rest-breaks-work`]] },
    { t: `Pensions, sick pay and family leave`, anim: 'benefits',
      body: [
        `<b>Workplace pension:</b> you must automatically enrol staff aged 22 to State Pension age who earn over £10,000 a year. Minimum contributions total 8% of qualifying earnings, with at least 3% from the employer.`,
        `<b>Statutory Sick Pay:</b> since April 2026 it is paid from the <b>first day</b> of sickness and there is no minimum earnings limit. Check GOV.UK for the current weekly rate.`,
        `<b>Family leave:</b> up to 52 weeks of maternity leave (39 weeks paid), 2 weeks of paternity leave, plus shared parental and adoption leave. Since April 2026 paternity leave and unpaid parental leave are rights from day one of a job.`
      ],
      teen: `That 3% from the employer is free money towards your future. Never opt out without a very good reason.`,
      refs: [[`GOV.UK: Workplace pensions for employers`, `https://www.gov.uk/workplace-pensions-employers`], [`GOV.UK: Statutory Sick Pay (employer guide)`, `https://www.gov.uk/employers-sick-pay`], [`GOV.UK: Maternity pay and leave`, `https://www.gov.uk/maternity-pay-leave`]] },
    { t: `Equality: treat people fairly`, anim: 'equality',
      body: [
        `The <b>Equality Act 2010</b> makes it unlawful to discriminate because of nine <b>protected characteristics</b>:`,
        `<p class="chips"><span>Age</span><span>Disability</span><span>Gender reassignment</span><span>Marriage and civil partnership</span><span>Pregnancy and maternity</span><span>Race</span><span>Religion or belief</span><span>Sex</span><span>Sexual orientation</span></p>`,
        `It covers job ads, interviews, pay, promotion, dismissal and how customers are treated. It includes harassment and victimisation, and employers must make <b>reasonable adjustments</b> for disabled people. Protection starts before day one, and compensation is <b>uncapped</b>. Since October 2024 employers also have a duty to take reasonable steps to <b>prevent sexual harassment</b>.`
      ],
      teen: `"Young, energetic team member wanted" sounds harmless. It may be age discrimination. Describe the job, not the person.`,
      refs: [[`Equality Act 2010`, `https://www.legislation.gov.uk/ukpga/2010/15/contents`], [`Acas: Discrimination and the law`, `https://www.acas.org.uk/discrimination-and-the-law`], [`Equality and Human Rights Commission`, `https://www.equalityhumanrights.com/`]] },
    { t: `Discipline, dismissal and redundancy`, anim: 'dismiss',
      body: [
        `To dismiss an employee fairly you need a <b>fair reason</b> (conduct, capability, redundancy, a legal bar, or "some other substantial reason") <b>and</b> a <b>fair process</b>.`,
        `Follow the <b>Acas Code</b>: investigate, tell the employee the problem in writing, hold a meeting where they can be accompanied, decide, and offer an appeal. Ignoring it can raise compensation by up to 25%.`,
        `<ul><li><b>Notice:</b> at least 1 week after a month's service, then 1 week per full year from 2 years, up to 12 weeks.</li><li><b>Unfair dismissal:</b> employees currently need 2 years' service to claim. Under the Employment Rights Act 2025 this drops to <b>6 months</b> from January 2027. Some dismissals are automatically unfair from day one, such as for pregnancy or whistleblowing.</li><li><b>Redundancy:</b> the job must genuinely be going. Consult, select fairly, and pay statutory redundancy pay after 2 years' service.</li></ul>`
      ],
      teen: `"You're fired!" works on TV. In real life it is a letter, a meeting, a decision and an appeal.`,
      refs: [[`Acas Code of Practice on disciplinary and grievance procedures`, `https://www.acas.org.uk/acas-code-of-practice-on-disciplinary-and-grievance-procedures`], [`GOV.UK: Dismissing staff`, `https://www.gov.uk/dismiss-staff`], [`GOV.UK: Employment Rights Act 2025 factsheets`, `https://www.gov.uk/government/publications/employment-rights-bill-factsheets`]] },
    { t: `Health and safety`, anim: 'safety',
      body: [
        `Under the <b>Health and Safety at Work etc. Act 1974</b>, employers must protect the health, safety and welfare of staff and anyone affected by the business, "so far as is reasonably practicable".`,
        `<ul><li>Do a <b>risk assessment</b>. Write it down if you have 5 or more employees.</li><li>Provide training, safe equipment, first aid, toilets and drinking water.</li><li>Display the health and safety law poster.</li><li>Report serious accidents under RIDDOR.</li></ul>`,
        `It covers mental health and home workers too. Serious breaches are crimes, with unlimited fines and even prison.`
      ],
      teen: `Spot the hazard, decide who could be hurt, do something about it, write it down. That is a risk assessment.`,
      refs: [[`HSE: Health and safety made simple`, `https://www.hse.gov.uk/simple-health-safety/`], [`HSE: Risk assessment`, `https://www.hse.gov.uk/simple-health-safety/risk/`]] }
  ],
  decisions: [
    { prompt: `You need help in your cafe. A 17-year-old applies. You suggest two unpaid "trial shifts" of 6 hours each.`,
      options: [
        { text: `Fine, it is a trial.`, fx: { comp: -15, team: -10, rep: -5 }, fb: `Long unpaid trial shifts that are really just work breach minimum wage law. HMRC can fine you and name you.` },
        { text: `Pay at least £8.00 an hour for the trial shifts and give proper breaks.`, fx: { comp: 12, team: 10, cash: -96 }, best: true, fb: `Right. A short skills test can be unpaid, but real shifts are work. Under-18s also need a 30-minute break after 4.5 hours.` },
        { text: `Pay them in free cake.`, fx: { comp: -15, team: -5 }, fb: `Delicious but unlawful. Wages must be money.` }
      ] },
    { prompt: `A designer works 5 days a week only for you, uses your laptop, and you set their hours. Their contract says "self-employed contractor". They ask for paid holiday.`,
      options: [
        { text: `Refuse. The contract says self-employed.`, fx: { comp: -15, team: -10 }, fb: `Tribunals look at reality, not labels. This looks like employment, and back-dated holiday pay could be owed.` },
        { text: `Review their status properly and put them on the right footing, with holiday pay.`, fx: { comp: 15, team: 12, cash: -800 }, best: true, fb: `Correct. Fix status early. It costs far more after a tribunal.` },
        { text: `End their contract today so the problem goes away.`, fx: { comp: -20, team: -15, rep: -10 }, fb: `Dismissing someone for asserting a legal right can be automatically unfair. You have made it worse.` }
      ] },
    { prompt: `An employee of 3 years keeps turning up late. You are furious.`,
      options: [
        { text: `Sack them by text tonight.`, fx: { comp: -18, team: -10, cash: -4000 }, fb: `No process means an unfair dismissal claim you will likely lose, with up to a 25% uplift for ignoring the Acas Code.` },
        { text: `Talk to them, find out why, then follow a fair process with warnings if needed.`, fx: { comp: 12, team: 10 }, best: true, fb: `Good. There may be a reason (caring duties, health). A fair process protects both of you.` },
        { text: `Quietly cut their hours until they quit.`, fx: { comp: -15, team: -12 }, fb: `Forcing someone out can be "constructive dismissal". Deal with it openly.` }
      ] }
  ],
  games: [
    { type: 'spot', title: `Spot The Dodgy Job Ad`, intro: `This job ad and offer has 6 legal problems. Tap each one.`,
      doc: [
        [`WANTED: Shop Assistant at Trendz Ltd`, 0], [`\nWe want a `, 0], [`young, fit lad aged 18 to 25`, 1, `Age and sex discrimination. Describe the skills needed, not the person.`],
        [`\nto join our friendly team.`, 0], [`\nPay: £7.00 an hour for all ages`, 1, `Below the National Minimum Wage for every age band (£8.00, £10.85 or £12.71 from April 2026).`],
        [`\nHours: 55 a week, no opt-out needed`, 1, `Over 48 hours a week on average needs a signed opt-out, which must be voluntary.`],
        [`\nHoliday: none in your first year`, 1, `Workers build up paid holiday from day one: at least 5.6 weeks a year.`],
        [`\nUniform: provided.`, 0], [`\nContract: we will sort something in writing after 6 months`, 1, `A written statement of terms is due on or before the first day of work.`],
        [`\nRight to work check: not needed if you seem local`, 1, `Check every new starter the same way before they start. Guessing by appearance is unlawful discrimination and risks a fine of up to £45,000.`],
        [`\nApply in store.`, 0]
      ] },
    { type: 'sort', title: `Who Gets What?`, intro: `Who has this right? Sort each one.`,
      bins: [`Employees only`, `Workers and employees`],
      items: [[`National Minimum Wage`, 1], [`Paid holiday`, 1], [`Statutory redundancy pay`, 0], [`Protection from unlawful discrimination`, 1], [`Claim for ordinary unfair dismissal`, 0], [`Rest breaks`, 1], [`Maternity leave`, 0], [`A payslip`, 1], [`Minimum statutory notice`, 0]] }
  ],
  quiz: [
    { q: `What is the National Living Wage (age 21+) from April 2026?`, o: [`£10.42`, `£11.44`, `£12.21`, `£12.71`], a: 3, why: `£12.71 an hour from 1 April 2026.` },
    { q: `When must an employee receive their written statement of terms?`, o: [`Within 2 months`, `On or before day one`, `After probation`, `Only if they ask`], a: 1, why: `It has been a day-one right since April 2020.` },
    { q: `How much paid holiday must a full-time worker get each year?`, o: [`20 days`, `25 days plus bank holidays`, `5.6 weeks (28 days), which can include bank holidays`, `None by law`], a: 2, why: `The legal minimum is 5.6 weeks.` },
    { q: `Which of these is NOT a protected characteristic under the Equality Act 2010?`, o: [`Age`, `Religion or belief`, `Favourite football team`, `Disability`], a: 2, why: `There are nine protected characteristics, and football loyalty is not one.` },
    { q: `What decides someone's employment status?`, o: [`The title in the contract`, `What the boss says`, `The reality of how the work is done`, `Whether they wear uniform`], a: 2, why: `Courts look at the true relationship (see Uber v Aslam and Autoclenz v Belcher).` },
    { q: `What minimum employers' liability cover must an employer hold?`, o: [`£50,000`, `£1 million`, `£5 million`, `None`], a: 2, why: `At least £5 million, from an authorised insurer.` },
    { q: `What is the minimum employer pension contribution under auto-enrolment?`, o: [`0%`, `1%`, `3% of qualifying earnings`, `8%`], a: 2, why: `Total minimum is 8%, with at least 3% from the employer.` },
    { q: `Before a new hire starts, an employer must check...`, o: [`Their star sign`, `Their right to work in the UK`, `Their social media followers`, `Their family's income`], a: 1, why: `A right to work check must be done before employment begins.` }
  ],
  refs: [[`GOV.UK: Employing staff for the first time`, `https://www.gov.uk/employing-staff`], [`Acas advice`, `https://www.acas.org.uk/advice`], [`GOV.UK: National Minimum Wage rates`, `https://www.gov.uk/national-minimum-wage-rates`], [`Employment Rights Act 1996`, `https://www.legislation.gov.uk/ukpga/1996/18/contents`], [`Acas on YouTube`, `https://www.youtube.com/@acasorguk`]]
},

/* ------------------------------------------------------------------ 6 */
{
  id: 'law', icon: '⚖️', color: '#ff5c8a', title: `Know The Law`,
  tagline: `Contracts, customers, data, brands and insurance. The rules that keep deals fair.`,
  lessons: [
    { t: `What makes a contract?`, anim: 'contract',
      body: [
        `A contract is a promise the law will enforce. In England and Wales it needs:`,
        `<ol><li><b>Offer</b>: a clear proposal.</li><li><b>Acceptance</b>: a clear yes to those exact terms.</li><li><b>Consideration</b>: each side gives something of value.</li><li><b>Intention</b> to create legal relations.</li></ol>`,
        `Most contracts do <b>not</b> need to be in writing. A handshake, an email or even a click can be binding. But writing it down proves what was agreed.`,
        `If a contract is broken, the usual remedy is <b>damages</b>: money to put the innocent party where they would have been if the contract had been kept.`
      ],
      teen: `"I'll give you £20 for your old headphones." "Deal." That is a contract.`,
      refs: [[`Carlill v Carbolic Smoke Ball Co (Wikipedia)`, `https://en.wikipedia.org/wiki/Carlill_v_Carbolic_Smoke_Ball_Co`]] },
    { t: `Terms, small print and limits`, anim: 'terms',
      body: [
        `Your <b>terms and conditions</b> say what you will deliver, when, for how much, and what happens if things go wrong.`,
        `<ul><li>Terms only count if the customer saw them <b>before</b> agreeing.</li><li>You can <b>never</b> exclude liability for death or injury caused by your negligence, or for fraud.</li><li>Other limits must be <b>reasonable</b> (business deals) or <b>fair</b> (consumer deals). Unfair terms are not binding.</li><li>Read what you sign. "I did not read it" is not a defence.</li></ul>`
      ],
      teen: `Those T&Cs you scroll past? One day you will be writing them. Keep them short, clear and fair.`,
      refs: [[`Unfair Contract Terms Act 1977`, `https://www.legislation.gov.uk/ukpga/1977/50/contents`], [`CMA: Unfair contract terms guidance`, `https://www.gov.uk/government/collections/unfair-contract-terms-cma37`]] },
    { t: `Selling to consumers`, anim: 'consumer',
      body: [
        `The <b>Consumer Rights Act 2015</b> says goods must be of <b>satisfactory quality</b>, <b>fit for purpose</b> and <b>as described</b>.`,
        `<ul><li>Faulty goods: a full refund within <b>30 days</b>. After that, repair or replacement first.</li><li>Services must be carried out with <b>reasonable care and skill</b>.</li><li>Sold <b>online or by phone</b>? Customers usually get a <b>14-day cooling-off</b> right to cancel, for any reason.</li><li>A "No refunds" sign cannot take away these rights.</li></ul>`,
        `Since April 2025, <b>fake reviews</b> and <b>drip pricing</b> (hidden compulsory fees added at checkout) are banned, and the regulator (the CMA) can fine a business up to <b>10% of global turnover</b> without going to court.`
      ],
      teen: `Know your rights as a shopper, and you already know your duties as a seller.`,
      refs: [[`Consumer Rights Act 2015`, `https://www.legislation.gov.uk/ukpga/2015/15/contents`], [`GOV.UK: Online and distance selling`, `https://www.gov.uk/online-and-distance-selling-for-businesses`], [`GOV.UK: Accepting returns and giving refunds`, `https://www.gov.uk/accepting-returns-and-giving-refunds`]] },
    { t: `Advertising honestly`, anim: 'ads',
      body: [
        `Ads must be <b>legal, decent, honest and truthful</b>. The Advertising Standards Authority (ASA) polices the rules.`,
        `<ul><li>Do not make claims you cannot prove ("the UK's best").</li><li>Show full prices, including unavoidable fees.</li><li>Paid influencer posts must be clearly labelled, for example with <b>#ad</b>.</li><li>Marketing emails and texts to individuals generally need <b>consent</b>, and every message needs an unsubscribe option.</li></ul>`
      ],
      teen: `If an influencer is paid or gifted something to post, the law says they must say so. That applies to your brand deals too.`,
      refs: [[`GOV.UK: Marketing and advertising law`, `https://www.gov.uk/marketing-advertising-law`], [`ASA: Advertising codes`, `https://www.asa.org.uk/codes-and-rulings/advertising-codes.html`]] },
    { t: `Data protection`, anim: 'gdpr',
      body: [
        `If you hold information about living people (customers, staff, mailing lists), <b>UK GDPR</b> and the <b>Data Protection Act 2018</b> apply.`,
        `<ul><li>Collect only what you need, for a clear reason, and tell people (a <b>privacy notice</b>).</li><li>Keep it accurate, secure, and not for longer than needed.</li><li>People can ask for a copy of their data (a <b>subject access request</b>). You have one month to respond.</li><li>Most businesses must pay the ICO's <b>data protection fee</b> (from £52 a year).</li><li>Serious <b>breaches</b> must be reported to the ICO within <b>72 hours</b>.</li><li>Fines can reach £17.5 million or 4% of global turnover.</li></ul>`
      ],
      teen: `Treat other people's data like something borrowed. Look after it, do not pass it around, and give it back when asked.`,
      refs: [[`ICO: Advice for small organisations`, `https://ico.org.uk/for-organisations/advice-for-small-organisations/`], [`ICO: Data protection fee`, `https://ico.org.uk/for-organisations/data-protection-fee/`], [`ICO: Report a breach`, `https://ico.org.uk/for-organisations/report-a-breach/`]] },
    { t: `Intellectual property: protect your ideas`, anim: 'ip',
      body: [
        `<ul><li>™️ <b>Trade marks</b> protect brand names and logos. Register with the IPO (from £170 online). Lasts 10 years, renewable forever.</li><li>©️ <b>Copyright</b> protects original writing, art, music, photos and code. It is <b>automatic</b> and usually lasts the creator's life plus 70 years.</li><li>💡 <b>Patents</b> protect new inventions for up to 20 years. You must apply <b>before</b> telling the world.</li><li>🎨 <b>Design rights</b> protect how a product looks. Registered designs last up to 25 years.</li></ul>`,
        `<b>Who owns it?</b> Work made by an employee in their job belongs to the employer. Work made by a <b>freelancer</b> belongs to the freelancer unless a written contract transfers it. Always get an IP assignment.`,
        `And do not use other people's images, music or brand names without permission. "I found it on Google" is not a licence.`
      ],
      teen: `Your logo, your code, your designs: often the most valuable things a start-up owns. Lock them down early.`,
      refs: [[`GOV.UK: Intellectual property overview`, `https://www.gov.uk/intellectual-property-an-overview`], [`GOV.UK: Register a trade mark`, `https://www.gov.uk/how-to-register-a-trade-mark`], [`GOV.UK: How copyright protects your work`, `https://www.gov.uk/copyright`]] },
    { t: `Negligence and insurance`, anim: 'insurance',
      body: [
        `Even with no contract, a business owes a <b>duty of care</b> to people it could foreseeably harm. Break it and cause damage, and that is <b>negligence</b>.`,
        `Employers are also usually liable for wrongs their staff commit in the course of their work. This is called <b>vicarious liability</b>.`,
        `Insurance shares the risk:`,
        `<ul><li><b>Employers' liability</b>: compulsory if you have staff.</li><li><b>Public liability</b>: injury or damage to customers and visitors.</li><li><b>Product liability</b>: harm caused by what you sell.</li><li><b>Professional indemnity</b>: bad advice or design mistakes.</li><li><b>Cyber</b>: hacks and data breaches.</li><li><b>Motor</b>: compulsory for business vehicles.</li></ul>`
      ],
      teen: `This whole area of law grew from a snail in a bottle of ginger beer. Seriously. See Law Stories.`,
      refs: [[`Donoghue v Stevenson (Wikipedia)`, `https://en.wikipedia.org/wiki/Donoghue_v_Stevenson`], [`ABI: Business insurance`, `https://www.abi.org.uk/products-and-issues/choosing-the-right-insurance/business-insurance/`]] },
    { t: `Disputes: sorting things out`, anim: 'dispute',
      body: [
        `Most disputes never reach a courtroom. The usual ladder:`,
        `<ol><li><b>Talk</b>, then put it in writing.</li><li>Send a formal <b>letter before action</b> giving a deadline.</li><li>Try <b>mediation</b>. Courts expect you to.</li><li><b>Money claim</b> online. Claims up to £10,000 go to the "small claims track" in England and Wales, where you usually do not need a lawyer.</li></ol>`,
        `Time limits apply: usually <b>6 years</b> for contract claims. Employment tribunal claims have much shorter limits, so act fast.`,
        `Other laws to know exist: the <b>Bribery Act 2010</b> (a company can be guilty if it fails to prevent bribery), competition law (no price-fixing with rivals) and licences for things like food, alcohol and music.`
      ],
      teen: `Going to court is like a boss fight with a huge entry fee. Win earlier levels by keeping good records and talking.`,
      refs: [[`GOV.UK: Make a court claim for money`, `https://www.gov.uk/make-court-claim-for-money`], [`GOV.UK: Licence finder`, `https://www.gov.uk/licence-finder`], [`Bribery Act 2010 guidance`, `https://www.gov.uk/government/publications/bribery-act-2010-guidance`]] }
  ],
  decisions: [
    { prompt: `A customer bought headphones from your website 5 days ago and wants to return them. They just changed their mind. Your site says "NO REFUNDS".`,
      options: [
        { text: `Refuse. The sign is clear.`, fx: { comp: -15, rep: -12 }, fb: `Online buyers have a 14-day cooling-off right. Your sign cannot override the law, and misleading customers about their rights is itself an offence.` },
        { text: `Accept the return and refund within 14 days of getting the goods back. Fix the website wording.`, fx: { comp: 12, rep: 10, cash: -40 }, best: true, fb: `Correct. Good returns handling also earns repeat customers.` },
        { text: `Offer store credit only.`, fx: { comp: -8, rep: -5 }, fb: `For a cooling-off cancellation the customer is entitled to their money back.` }
      ] },
    { prompt: `You paid a freelancer £300 for your logo. Nothing was signed. Who owns the copyright?`,
      options: [
        { text: `The company. We paid for it.`, fx: { comp: -10 }, fb: `Not automatically. Without a written assignment the freelancer owns the copyright and you only have an implied licence to use it.` },
        { text: `The freelancer, so get a written IP assignment signed now.`, fx: { comp: 12, cash: -50 }, best: true, fb: `Exactly. Investors will check this, so fix it while everyone is friendly.` },
        { text: `Nobody. Logos cannot be owned.`, fx: { comp: -8 }, fb: `Logos are protected by copyright and can be registered as trade marks.` }
      ] },
    { prompt: `A staff member emails your whole customer list (names, addresses, order history) to the wrong person by mistake.`,
      options: [
        { text: `Say nothing and hope.`, fx: { comp: -20, rep: -10 }, fb: `A breach likely to risk people's rights must be reported to the ICO within 72 hours. Cover-ups make fines worse.` },
        { text: `Contain it, assess the risk, report to the ICO within 72 hours if needed, and tell affected customers if the risk is high.`, fx: { comp: 15, rep: 5 }, best: true, fb: `Correct. Then fix the cause: training, access limits, double-check before sending.` },
        { text: `Sack the staff member immediately. Problem solved.`, fx: { comp: -10, team: -12 }, fb: `That does not fix the breach or meet your reporting duty, and may be an unfair dismissal.` }
      ] }
  ],
  games: [
    { type: 'match', title: `IP Shield Match`, intro: `Match each thing to the right kind of protection.`,
      pairs: [[`Your brand name and logo`, `Trade mark`], [`The code and photos on your website`, `Copyright`], [`A brand new type of engine`, `Patent`], [`The shape and look of your product`, `Registered design`], [`Your secret recipe`, `Trade secret / confidentiality`], [`Your customer list (personal data)`, `Data protection law`]] },
    { type: 'spot', title: `Bust The Dodgy Promo`, intro: `This marketing email breaks the rules 5 times. Tap each problem.`,
      doc: [
        [`To: 50,000 addresses `, 0], [`we bought from a random website`, 1, `Marketing emails to individuals generally need their consent. Bought lists rarely have it.`],
        [`\nSubject: MEGA SALE!!!`, 0], [`\nOur trainers are `, 0], [`scientifically proven to make you run 50% faster`, 1, `Claims must be backed by evidence. The ASA can ban misleading ads.`],
        [`\nNow just £29.99`, 0], [` (plus a compulsory £9 "handling fee" shown at checkout)`, 1, `Drip pricing: compulsory fees must be included in the headline price.`],
        [`\n★★★★★ "Best shoes ever" `, 0], [`(review written by our own staff)`, 1, `Fake reviews are banned under the Digital Markets, Competition and Consumers Act 2024.`],
        [`\nAll sales final, `, 0], [`no returns under any circumstances.`, 1, `Online consumers have a 14-day right to cancel, plus rights if goods are faulty.`],
        [`\nSent by Zoomfeet Ltd, company no. 01234567.`, 0]
      ] }
  ],
  quiz: [
    { q: `Which is NOT needed for a basic contract?`, o: [`Offer`, `Acceptance`, `Consideration`, `A solicitor's stamp`], a: 3, why: `Offer, acceptance, consideration and intention. Most contracts need no formalities.` },
    { q: `A customer buys a toaster online. How long do they normally have to change their mind?`, o: [`24 hours`, `7 days`, `14 days from delivery`, `No right at all`], a: 2, why: `The Consumer Contracts Regulations 2013 give a 14-day cancellation period.` },
    { q: `Within how long must a serious personal data breach be reported to the ICO?`, o: [`24 hours`, `72 hours`, `30 days`, `A year`], a: 1, why: `72 hours from becoming aware of it.` },
    { q: `How do you get copyright in a song you wrote?`, o: [`Pay a fee to the IPO`, `Post it to yourself`, `It is automatic when you create and record it`, `Register at Companies House`], a: 2, why: `UK copyright arises automatically. There is no register.` },
    { q: `What protects a brand name?`, o: [`A patent`, `A trade mark`, `Copyright only`, `The company register`], a: 1, why: `Registered trade marks protect names and logos for chosen goods and services.` },
    { q: `Which liability can a business NEVER exclude in its terms?`, o: [`Late delivery`, `Death or personal injury caused by negligence`, `Minor colour differences`, `Postage costs`], a: 1, why: `The Unfair Contract Terms Act 1977 and Consumer Rights Act 2015 forbid it.` },
    { q: `An influencer is paid to post about your product. They must...`, o: [`Say nothing`, `Clearly label it as an ad`, `Delete it after a day`, `Only post at night`], a: 1, why: `Paid-for content must be obviously identifiable as advertising.` },
    { q: `Under the Consumer Rights Act 2015, goods must be...`, o: [`Cheap, fast and shiny`, `Satisfactory quality, fit for purpose and as described`, `Made in the UK`, `Sold with a 5-year warranty`], a: 1, why: `These are the three core statutory rights for goods.` }
  ],
  refs: [[`Consumer Rights Act 2015`, `https://www.legislation.gov.uk/ukpga/2015/15/contents`], [`ICO: for organisations`, `https://ico.org.uk/for-organisations/`], [`Intellectual Property Office`, `https://www.gov.uk/government/organisations/intellectual-property-office`], [`HSE: simple health and safety`, `https://www.hse.gov.uk/simple-health-safety/`], [`ICO on YouTube`, `https://www.youtube.com/@icocomms`]]
},

/* ------------------------------------------------------------------ 7 */
{
  id: 'directors', icon: '👑', color: '#00b8d9', title: `Lead Like A Director`,
  tagline: `Seven legal duties, yearly filings, and how to make decisions properly.`,
  lessons: [
    { t: `Who does what?`, anim: 'whoiswho',
      body: [
        `<ul><li><b>Shareholders</b> own the company. They vote on big things: changing the articles, the company name, removing directors.</li><li><b>Directors</b> manage the company day to day and are legally responsible for running it properly.</li><li>The <b>company</b> itself is the legal person that owns the assets and owes the debts.</li></ul>`,
        `Shareholder decisions are made by <b>resolution</b>: an <b>ordinary resolution</b> needs more than 50% of votes, a <b>special resolution</b> needs at least 75%.`,
        `Being a director is a legal <b>office</b>, not just a job title. You can also be treated as one without being appointed: a <b>de facto</b> director (acts like one) or a <b>shadow</b> director (the board does what you say).`
      ],
      teen: `Being made a director "just to help out a friend" is not a favour. It is a legal job with real duties.`,
      refs: [[`GOV.UK: Being a company director`, `https://www.gov.uk/guidance/being-a-company-director`]] },
    { t: `The seven duties`, anim: 'duties',
      body: [
        `The Companies Act 2006, sections 171 to 177, sets out seven general duties owed to the company:`,
        `<ol><li><b>Act within powers</b> (follow the articles).</li><li><b>Promote the success of the company</b> for its members as a whole, thinking about the long term, employees, suppliers, customers, the community and environment, reputation, and fairness between members.</li><li><b>Exercise independent judgment.</b></li><li><b>Exercise reasonable care, skill and diligence.</b></li><li><b>Avoid conflicts of interest.</b></li><li><b>Not accept benefits from third parties.</b></li><li><b>Declare any interest</b> in a proposed transaction with the company.</li></ol>`
      ],
      teen: `Short version: follow the rules, put the company first, think for yourself, pay attention, and never secretly profit.`,
      refs: [[`Companies Act 2006, s171 onwards`, `https://www.legislation.gov.uk/ukpga/2006/46/part/10/chapter/2`], [`s172: duty to promote the success of the company`, `https://www.legislation.gov.uk/ukpga/2006/46/section/172`]] },
    { t: `Conflicts of interest`, anim: 'conflict',
      body: [
        `A conflict arises when your personal interest could pull against the company's. Examples: the company wants to rent an office that you own, you are offered a deal the company could have taken, or a supplier offers you a personal gift.`,
        `The rule is not "never". It is <b>tell the board, and get approval</b>. Hidden profits made from your position can be taken back by the company, even if you acted honestly and the company lost nothing.`
      ],
      teen: `Imagine a referee who secretly bets on the match. Even if they ref fairly, nobody can trust the result.`,
      refs: [[`Regal (Hastings) Ltd v Gulliver (Wikipedia)`, `https://en.wikipedia.org/wiki/Regal_(Hastings)_Ltd_v_Gulliver`]] },
    { t: `Decisions and records`, anim: 'board',
      body: [
        `Directors decide things at <b>board meetings</b> or by written resolution. Keep <b>minutes</b> of every meeting for at least 10 years. Good minutes show <i>why</i> you decided something, which is your best defence later.`,
        `The company must keep <b>statutory registers</b>: members, directors, secretaries, and people with significant control.`,
        `Tell Companies House about changes quickly, usually within <b>14 days</b>: a new or departing director, a new registered office, a change of PSC. Share issues must be reported within a month.`
      ],
      teen: `If it is not written down, it did not happen. Minutes are the screenshots of company life.`,
      refs: [[`GOV.UK: Company changes you must report`, `https://www.gov.uk/running-a-limited-company/company-changes-you-must-report`]] },
    { t: `The yearly filing loop`, anim: 'loop',
      body: [
        `Every company, even a tiny or dormant one, must each year:`,
        `<ul><li>📄 File a <b>confirmation statement</b> at Companies House (£50 online). It confirms the company's details are correct, including that its activities are lawful.</li><li>📊 File <b>annual accounts</b> at Companies House.</li><li>🧾 File a <b>Company Tax Return</b> with HMRC and pay any Corporation Tax.</li></ul>`,
        `Miss them and it gets serious: automatic penalties, a criminal offence for the directors, and Companies House can <b>strike the company off</b> the register. Its assets, including the bank balance, then pass to the Crown.`
      ],
      teen: `Three bits of homework a year. Set reminders and they are easy. Forget them and the company can literally be deleted.`,
      refs: [[`GOV.UK: Confirmation statement`, `https://www.gov.uk/file-your-confirmation-statement-with-companies-house`], [`GOV.UK: Running a limited company`, `https://www.gov.uk/running-a-limited-company`]] },
    { t: `Founders, vesting and agreements`, anim: 'vesting',
      body: [
        `A <b>shareholders' agreement</b> sets out how owners work together:`,
        `<ul><li><b>Vesting</b>: founders earn their shares over time (often 4 years). Leave early and you give some back.</li><li><b>Good leaver / bad leaver</b>: what a departing founder gets for their shares.</li><li><b>Pre-emption</b>: existing owners get first refusal on new or sold shares.</li><li><b>Drag-along and tag-along</b>: rules for when the company is sold.</li><li><b>Reserved matters</b>: big decisions that need everyone's consent.</li><li><b>Deadlock</b>: how a tie is broken.</li></ul>`
      ],
      teen: `A band splits up. Who keeps the name and the songs? Agree it while you still like each other.`,
      refs: [[`British Business Bank: start-up guidance`, `https://www.british-business-bank.co.uk/business-guidance`]] },
    { t: `When directors get it wrong`, anim: 'disqualify',
      body: [
        `<ul><li>⛔ <b>Disqualification</b> for 2 to 15 years for unfit conduct, such as trading while insolvent, not keeping records, or not paying tax. Acting while disqualified is a crime.</li><li>💷 <b>Personal liability</b>: to repay unlawful dividends, for wrongful or fraudulent trading, or under personal guarantees.</li><li>🚔 <b>Criminal offences</b>: fraud, false accounting, health and safety, bribery.</li></ul>`,
        `The <b>Economic Crime and Corporate Transparency Act 2023</b> gave Companies House stronger powers to check, challenge and remove false information, and to fine people directly. Large organisations can also be prosecuted for <b>failing to prevent fraud</b>.`,
        `Honest directors who took reasonable care are rarely punished. The law mostly targets people who ignored the warning signs.`
      ],
      teen: `You do not have to be perfect. You do have to pay attention, ask questions and act when something smells wrong.`,
      refs: [[`GOV.UK: Company director disqualification`, `https://www.gov.uk/company-director-disqualification`], [`Economic Crime and Corporate Transparency Act 2023`, `https://www.legislation.gov.uk/ukpga/2023/56/contents`]] }
  ],
  decisions: [
    { prompt: `Your company needs a new office. You personally own a suitable building and could rent it to the company.`,
      options: [
        { text: `Sign the lease quietly at a rent you choose.`, fx: { comp: -18, team: -8 }, fb: `That is a conflict of interest. You must declare your interest (s177) and let the others decide.` },
        { text: `Declare it to the board, step out of the vote, and use a market rent.`, fx: { comp: 15, team: 8 }, best: true, fb: `Exactly right. Conflicts are managed by openness, not secrecy.` },
        { text: `Put the building in your cousin's name so nobody knows.`, fx: { comp: -25, rep: -10 }, fb: `Hiding a conflict makes it far worse and can amount to fraud.` }
      ] },
    { prompt: `Your co-director handles all the finances and says "just sign the accounts, trust me".`,
      options: [
        { text: `Sign. They are the numbers person.`, fx: { comp: -15 }, fb: `Every director is responsible for the accounts. "I left it to someone else" did not save the Barings directors.` },
        { text: `Read them, ask questions, and sign only when you understand them.`, fx: { comp: 14, team: 4 }, best: true, fb: `Correct. The duty of care, skill and diligence applies to every director personally.` },
        { text: `Resign instantly without looking.`, fx: { comp: -5, team: -10 }, fb: `Running away does not fix anything, and you are still responsible for your time in office.` }
      ] },
    { prompt: `A supplier bidding for your biggest contract offers you two free VIP festival tickets "as a thank you in advance".`,
      options: [
        { text: `Accept. Free tickets!`, fx: { comp: -15, rep: -8 }, fb: `Directors must not accept benefits from third parties given because of their role (s176). It may also be bribery.` },
        { text: `Decline politely, record it, and judge the bids on merit.`, fx: { comp: 12, rep: 8 }, best: true, fb: `Good. A simple gifts policy keeps everyone safe.` },
        { text: `Accept, but give the contract to someone else.`, fx: { comp: -8 }, fb: `You still took a benefit linked to your position. Do not take it.` }
      ] }
  ],
  games: [
    { type: 'sort', title: `Duty or Breach?`, intro: `Is the director doing the right thing?`,
      bins: [`✅ Good director`, `🚩 Breach of duty`],
      items: [[`Reads the board papers before the meeting`, 0], [`Signs a contract the articles forbid`, 1], [`Declares that their spouse owns the supplier`, 0], [`Takes a business opportunity for themselves without telling the board`, 1], [`Asks the accountant to explain a strange figure`, 0], [`Accepts a secret commission from a customer`, 1], [`Always votes however their friend tells them`, 1], [`Thinks about the effect on staff before a big decision`, 0], [`Never looks at the company's finances`, 1], [`Keeps minutes of board decisions`, 0]] },
    { type: 'match', title: `Seven Duties Match`, intro: `Match the duty to the example.`,
      pairs: [[`Act within powers`, `Following the limits set in the articles`], [`Promote the company's success`, `Choosing the long-term good of the company over a quick win`], [`Independent judgment`, `Making up your own mind, not just obeying a big shareholder`], [`Care, skill and diligence`, `Reading documents before you sign them`], [`Avoid conflicts`, `Not competing with your own company`], [`No third-party benefits`, `Turning down a supplier's lavish gift`], [`Declare interests`, `Telling the board you own the building it wants to rent`]] }
  ],
  quiz: [
    { q: `Who do directors owe their general duties to?`, o: [`Themselves`, `The company`, `The biggest customer`, `HMRC only`], a: 1, why: `Companies Act 2006 s170: the duties are owed to the company.` },
    { q: `What does section 172 require?`, o: [`Maximise this month's profit`, `Promote the success of the company, having regard to wider factors`, `Pay the biggest dividend possible`, `Obey the chair`], a: 1, why: `Directors must consider long-term consequences, employees, suppliers, community and more.` },
    { q: `What percentage of votes passes a special resolution?`, o: [`More than 50%`, `At least 75%`, `100%`, `25%`], a: 1, why: `Special resolutions need a 75% majority.` },
    { q: `A director is offered a deal that the company could have taken. They should...`, o: [`Take it personally and keep quiet`, `Tell the board and get authorisation first`, `Give it to a relative`, `Ignore it`], a: 1, why: `The duty to avoid conflicts (s175) requires disclosure and authorisation.` },
    { q: `How long can a director be disqualified for?`, o: [`Up to 1 year`, `Up to 5 years`, `Up to 15 years`, `Life only`], a: 2, why: `Company Directors Disqualification Act 1986: 2 to 15 years.` },
    { q: `What happens to a company's bank balance if the company is struck off the register?`, o: [`It goes to the directors`, `It passes to the Crown as "bona vacantia"`, `It goes to the staff`, `Nothing`], a: 1, why: `Assets of a dissolved company pass to the Crown.` },
    { q: `Which must be filed every year even if the company did nothing?`, o: [`A confirmation statement`, `A press release`, `A patent`, `A VAT return`], a: 0, why: `Dormant companies still file a confirmation statement and accounts.` }
  ],
  refs: [[`Companies Act 2006: directors' general duties`, `https://www.legislation.gov.uk/ukpga/2006/46/part/10/chapter/2`], [`GOV.UK: Director's responsibilities`, `https://www.gov.uk/running-a-limited-company/directors-responsibilities`], [`GOV.UK: Director disqualification`, `https://www.gov.uk/company-director-disqualification`], [`Companies House on YouTube`, `https://www.youtube.com/@CompaniesHouse`]]
},

/* ------------------------------------------------------------------ 8 */
{
  id: 'growth', icon: '🚀', color: '#7bd13b', title: `Grow, Fund and Exit`,
  tagline: `Raising money, scaling up, selling, and what to do if the company is in trouble.`,
  lessons: [
    { t: `Where money comes from`, anim: 'funding',
      body: [
        `<ul><li>🥾 <b>Bootstrapping</b>: growing from your own savings and sales. Slow, but you keep control.</li><li>🏦 <b>Debt</b>: loans and overdrafts. You repay with interest but keep your shares. The government-backed <b>Start Up Loan</b> offers £500 to £25,000 at a fixed 6% to founders aged 18 or over.</li><li>🎁 <b>Grants</b>: money you do not repay, usually for a specific purpose and with conditions.</li><li>🍰 <b>Equity</b>: selling shares to angels, venture capital funds or a crowd. No repayments, but you give up part of the company.</li></ul>`
      ],
      teen: `Borrowing is renting money. Equity is selling a piece of your future. Neither is free.`,
      refs: [[`Start Up Loans`, `https://www.startuploans.co.uk/`], [`GOV.UK: Finance and support for your business`, `https://www.gov.uk/business-finance-support`], [`British Business Bank: Finance Hub`, `https://www.british-business-bank.co.uk/finance-hub`]] },
    { t: `Equity and dilution`, anim: 'shares', tool: 'dilution',
      body: [
        `When a company issues <b>new shares</b> to an investor, existing owners keep the same number of shares but own a <b>smaller percentage</b>. That is <b>dilution</b>.`,
        `<p class="formula">Post-money valuation = Pre-money valuation + Investment</p>`,
        `Example: your company is valued at £400,000 (pre-money). An investor puts in £100,000. Post-money is £500,000, so the investor owns 20% and you drop from 100% to 80%. But your 80% is now worth £400,000 and the company has cash to grow.`
      ],
      teen: `A smaller slice of a much bigger pizza can be more pizza.`,
      refs: [[`British Business Bank: equity finance`, `https://www.british-business-bank.co.uk/finance-hub/equity-finance`]] },
    { t: `SEIS and EIS: tax breaks for backers`, anim: 'seis',
      body: [
        `The UK rewards people who invest in young, risky companies:`,
        `<ul><li><b>SEIS</b> (Seed Enterprise Investment Scheme): investors get <b>50%</b> Income Tax relief. A company can raise up to £250,000, generally within its first 3 years of trading.</li><li><b>EIS</b> (Enterprise Investment Scheme): <b>30%</b> Income Tax relief, for larger and later rounds.</li><li>Gains on the shares can be free of Capital Gains Tax if held for 3 years.</li></ul>`,
        `Companies can ask HMRC for <b>advance assurance</b> to show investors the round should qualify. Companies doing real innovation may also claim <b>R&amp;D tax relief</b>.`
      ],
      teen: `If an angel invests £10,000 under SEIS, they get £5,000 off their tax bill. That makes saying yes much easier.`,
      refs: [[`GOV.UK: Seed Enterprise Investment Scheme`, `https://www.gov.uk/guidance/venture-capital-schemes-apply-to-use-the-seed-enterprise-investment-scheme`], [`GOV.UK: Enterprise Investment Scheme`, `https://www.gov.uk/guidance/venture-capital-schemes-apply-for-the-enterprise-investment-scheme`], [`GOV.UK: R&D tax relief`, `https://www.gov.uk/guidance/corporation-tax-research-and-development-rd-relief`]] },
    { t: `Growing without breaking`, anim: 'scale',
      body: [
        `Fast growth eats cash. You pay for stock, staff and space <i>before</i> the new customers pay you. Growing faster than your cash allows is called <b>overtrading</b>.`,
        `<ul><li>Forecast cash for the next 13 weeks, always.</li><li>Do not depend on one customer for most of your sales.</li><li>Build simple systems before you need them: contracts, HR policies, backups.</li><li>Selling abroad? You need an <b>EORI number</b> to move goods across the border, and you must think about customs duty and VAT.</li></ul>`
      ],
      teen: `Levelling up too fast with no health potions is how good runs end.`,
      refs: [[`GOV.UK: Get an EORI number`, `https://www.gov.uk/eori`], [`GOV.UK: Export goods from the UK`, `https://www.gov.uk/export-goods`]] },
    { t: `Selling the company`, anim: 'exit',
      body: [
        `Founders usually "exit" by selling their <b>shares</b> (the buyer takes the whole company) or the company selling its <b>assets</b> (the business and brand).`,
        `Buyers do <b>due diligence</b>: they check your contracts, accounts, tax, IP ownership, employment records and filings. Every shortcut you took comes out here.`,
        `Individuals pay <b>Capital Gains Tax</b> on the profit from selling shares. <b>Business Asset Disposal Relief</b> can cut the rate on up to £1 million of lifetime gains (18% from April 2026).`
      ],
      teen: `Run the company from day one as if someone will inspect it. One day someone will.`,
      refs: [[`GOV.UK: Business Asset Disposal Relief`, `https://www.gov.uk/business-asset-disposal-relief`], [`GOV.UK: Selling your business`, `https://www.gov.uk/selling-your-business-your-responsibilities`]] },
    { t: `Trouble: spotting insolvency`, anim: 'insolvency',
      body: [
        `A company is <b>insolvent</b> if either:`,
        `<ul><li>it cannot pay its debts <b>as they fall due</b> (the cash-flow test), or</li><li>its liabilities are greater than its assets (the balance-sheet test).</li></ul>`,
        `Once insolvency looms, directors must put <b>creditors' interests</b> first. If you carry on trading when you knew, or should have known, there was no reasonable prospect of avoiding insolvent liquidation, and you do not take every step to minimise creditors' losses, that is <b>wrongful trading</b>. A court can make you pay personally.`,
        `<b>What to do:</b> get advice from a licensed insolvency practitioner early, hold and minute regular board meetings, do not take new credit you cannot repay, do not pay favourite creditors (or yourself) first, and talk to HMRC.`
      ],
      teen: `If the ship is sinking, the captain's job is to get people to the lifeboats, not to sell more tickets.`,
      refs: [[`Insolvency Act 1986, s214`, `https://www.legislation.gov.uk/ukpga/1986/45/section/214`], [`GOV.UK: Options when a company is insolvent`, `https://www.gov.uk/government/publications/options-when-a-company-is-insolvent/options-when-a-company-is-insolvent`]] },
    { t: `Rescue and closing down`, anim: 'closing',
      body: [
        `<b>Rescue options:</b> an informal deal with creditors, a <b>CVA</b> (Company Voluntary Arrangement, a formal plan to repay part of the debts over time), or <b>administration</b> (an insolvency practitioner takes control to rescue or sell the business).`,
        `<b>Liquidation</b> ends the company: assets are sold and creditors are paid in a set legal order. Shareholders come last.`,
        `<b>Closing a healthy company:</b> if it has no debts you can apply to <b>strike it off</b> (a small fee) or use a members' voluntary liquidation.`,
        `<b>Phoenix rule:</b> after an insolvent liquidation, directors are generally banned for 5 years from reusing the same or a similar company name.`
      ],
      teen: `Failing honestly is not a crime. Lots of great founders failed first. What matters is how you treat people on the way down.`,
      refs: [[`GOV.UK: Liquidate your limited company`, `https://www.gov.uk/liquidate-your-company`], [`GOV.UK: Strike off your company`, `https://www.gov.uk/strike-off-your-company-from-companies-register`], [`GOV.UK: Put your company into administration`, `https://www.gov.uk/put-your-company-into-administration`]] }
  ],
  decisions: [
    { prompt: `An investor offers £50,000 for 40% of your company. A bank offers a £50,000 loan at 9% needing your personal guarantee. Sales are steady and predictable.`,
      options: [
        { text: `Take the equity. No repayments!`, fx: { cash: 50000, team: -5 }, fb: `Maybe, but 40% is a big chunk at a £125,000 valuation. With steady sales, cheaper options may exist. Negotiate.` },
        { text: `Compare properly: forecast repayments, negotiate the valuation and the guarantee, and take advice.`, fx: { cash: 50000, comp: 10, rep: 5 }, best: true, fb: `Right. There is no single correct answer, but there is a correct process.` },
        { text: `Take both without reading the documents.`, fx: { cash: 100000, comp: -20 }, fb: `You now have a guarantee, a 40% partner and terms you do not understand.` }
      ] },
    { prompt: `Orders tripled this month. Suppliers need £30,000 up front and customers pay in 60 days. You have £8,000.`,
      options: [
        { text: `Accept every order. Growth is good!`, fx: { cash: -8000, rep: -10 }, fb: `Classic overtrading. You run out of cash, miss deliveries, and upset the new customers.` },
        { text: `Pace the growth: deposits from customers, supplier credit, invoice finance, and say "delivery in 6 weeks" where needed.`, fx: { cash: 6000, rep: 8, comp: 5 }, best: true, fb: `Controlled growth beats a spectacular crash.` },
        { text: `Stop selling for a month.`, fx: { cash: -1000, rep: -6 }, fb: `Safer than overtrading, but you are wasting demand you worked hard to create.` }
      ] },
    { prompt: `The company cannot pay this month's VAT or wages. A customer offers a £5,000 deposit for an order you doubt you can ever deliver.`,
      options: [
        { text: `Take the deposit. It buys time.`, fx: { cash: 5000, comp: -25, rep: -15 }, fb: `Taking money you know you probably cannot honour, while insolvent, is how directors end up personally liable or disqualified.` },
        { text: `Stop, call a licensed insolvency practitioner, minute your decisions, and protect creditors.`, fx: { comp: 18, rep: 5 }, best: true, fb: `Correct. Early advice gives the most options, and shows you acted responsibly.` },
        { text: `Pay yourself what you are owed first, then see.`, fx: { comp: -25, cash: -3000 }, fb: `Paying yourself ahead of other creditors can be a "preference" that a liquidator will claw back.` }
      ] }
  ],
  games: [
    { type: 'sort', title: `Debt, Equity or Grant?`, intro: `What kind of money is it?`,
      bins: [`Debt`, `Equity`, `Grant`],
      items: [[`A bank loan`, 0], [`Selling 10% to an angel investor`, 1], [`An Innovate UK award you do not repay`, 2], [`An overdraft`, 0], [`A crowdfunding round where backers get shares`, 1], [`A Start Up Loan`, 0], [`Venture capital investment`, 1], [`A council shop-front improvement award`, 2], [`A business credit card balance`, 0]] },
    { type: 'order', title: `Who Gets Paid First?`, intro: `A company is liquidated. Put the queue in order, first paid to last.`,
      steps: [`Lenders with a fixed charge over specific assets`, `The costs of the liquidation`, `Employees' unpaid wages (up to a limit) and holiday pay`, `HMRC for VAT and PAYE collected from others`, `Ordinary unsecured creditors, such as suppliers`, `Shareholders`] }
  ],
  quiz: [
    { q: `You own 100%. An investor puts in £100,000 at a £400,000 pre-money valuation. What do you own afterwards?`, o: [`100%`, `80%`, `75%`, `60%`], a: 1, why: `Post-money is £500,000. Investor: 100/500 = 20%. You: 80%.` },
    { q: `What Income Tax relief do SEIS investors get?`, o: [`10%`, `30%`, `50%`, `100%`], a: 2, why: `SEIS gives 50% relief. EIS gives 30%.` },
    { q: `Which is a sign of insolvency?`, o: [`Low social media followers`, `Being unable to pay debts as they fall due`, `Having a business loan`, `Paying Corporation Tax`], a: 1, why: `That is the cash-flow test in the Insolvency Act 1986 s123.` },
    { q: `Once a company is heading for insolvency, whose interests come first?`, o: [`Shareholders`, `Directors`, `Creditors`, `Competitors`], a: 2, why: `The duty shifts towards creditors (confirmed in BTI v Sequana, 2022).` },
    { q: `What is "wrongful trading"?`, o: [`Selling the wrong product`, `Continuing to trade when insolvent liquidation was unavoidable, without minimising creditor losses`, `Trading on a Sunday`, `Not having a website`], a: 1, why: `Insolvency Act 1986 s214. Directors can be made to contribute personally.` },
    { q: `In a liquidation, who is paid last?`, o: [`Employees`, `HMRC`, `Suppliers`, `Shareholders`], a: 3, why: `Shareholders only get what remains after all creditors are paid.` },
    { q: `What is "overtrading"?`, o: [`Growing faster than your cash can support`, `Selling too cheaply`, `Having too many shareholders`, `Opening on bank holidays`], a: 0, why: `Rapid growth can drain cash even when sales are profitable.` }
  ],
  refs: [[`GOV.UK: Business finance and support`, `https://www.gov.uk/business-finance-support`], [`Start Up Loans`, `https://www.startuploans.co.uk/`], [`GOV.UK: SEIS`, `https://www.gov.uk/guidance/venture-capital-schemes-apply-to-use-the-seed-enterprise-investment-scheme`], [`GOV.UK: Liquidate your company`, `https://www.gov.uk/liquidate-your-company`], [`The Insolvency Service`, `https://www.gov.uk/government/organisations/insolvency-service`]]
}
];
