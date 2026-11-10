/* Founder's Quest UK — animated SVG explainers. Each scene returns an SVG string. */
(function () {
  const W = 640, H = 250;
  const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;');
  const wrap = inner => `<svg class="anim" viewBox="0 0 ${W} ${H}" role="img" aria-label="Animated explainer">${inner}</svg>`;
  const pop = (i, inner, cls = '') => `<g class="an-pop ${cls}" style="--i:${i}">${inner}</g>`;
  const lines = (x, y, label, size = 13, cls = 'an-label') =>
    String(label).split('|').map((l, k) => `<text x="${x}" y="${y + k * (size + 3)}" class="${cls}" font-size="${size}" text-anchor="middle">${esc(l)}</text>`).join('');
  const node = (x, y, e, label, i, r = 40) =>
    pop(i, `<rect x="${x - r}" y="${y - r}" width="${r * 2}" height="${r * 2}" rx="${r * 0.35}" class="an-box"/>
      <text x="${x}" y="${y + r * 0.32}" font-size="${r * 0.95}" text-anchor="middle">${e}</text>${lines(x, y + r + 18, label, r < 30 ? 10.5 : 13)}`);
  const sepTxt = (x, y, s, i) => pop(i, `<text x="${x}" y="${y + 9}" class="an-sep" font-size="26" text-anchor="middle">${esc(s)}</text>`);
  const cap = (t, i = 6, y = H - 14) => pop(i, `<text x="${W / 2}" y="${y}" class="an-cap" font-size="14" text-anchor="middle">${esc(t)}</text>`);
  const token = (e, path, dur = 2.4, begin = 1, size = 22) =>
    `<text font-size="${size}" text-anchor="middle" opacity="0">${e}<set attributeName="opacity" to="1" begin="${begin}s"/><animateMotion dur="${dur}s" begin="${begin}s" repeatCount="indefinite" path="${path}"/></text>`;

  /* Generic row: items [[emoji,label],...]; o.sep string or array; o.token emoji; o.cap caption */
  function row(items, o = {}) {
    const n = items.length, y = o.y || 96, step = W / n, r = Math.min(40, step * 0.34);
    let s = '';
    items.forEach((it, i) => {
      const x = step * (i + 0.5);
      s += node(x, y, it[0], it[1], i, r);
      if (i < n - 1) {
        const sp = Array.isArray(o.sep) ? o.sep[i] : (o.sep === undefined ? '→' : o.sep);
        if (sp) s += sepTxt(x + step / 2, y, sp, i + 0.5);
      }
    });
    if (o.token) s += token(o.token, `M ${step * 0.5} ${y - r - 14} L ${W - step * 0.5} ${y - r - 14}`, o.dur || 3.2, n * 0.35 + 0.3);
    if (o.cap) s += cap(o.cap, n + 0.5);
    return wrap(s);
  }

  const S = {};
  S.business = () => row([['🧁', 'Make or do|something'], ['🛒', 'Sell it'], ['💷', 'Get paid'], ['📈', 'Keep the|profit']], { token: '💷', cap: 'Sell for more than it costs. The difference is profit.' });
  S.soletrader = () => row([['🧑', 'You'], ['🏪', 'The business'], ['🏠', 'Your savings|and home']], { sep: ['=', '⚠️'], cap: 'One and the same. Business debts are your debts.' });
  S.structures = () => row([['🧑', 'Sole trader'], ['👥', 'Partnership'], ['🤝', 'LLP'], ['🏢', 'Limited|company'], ['💚', 'CIC'], ['🎗️', 'Charity']], { sep: '', cap: 'Simple and exposed  ←→  more admin, more protection' });
  S.teen = () => row([['🎂', '16: can be|a director'], ['📜', 'Under 18:|contracts need care'], ['🏦', 'Adult may help|with banking'], ['💷', 'Tax rules:|same for all ages']], { sep: '' });
  S.register = () => row([['🔤', 'Name'], ['📮', 'Address'], ['👔', 'Directors'], ['🍰', 'Shares'], ['🧑‍⚖️', 'PSCs'], ['📘', 'Articles'], ['💳', '£100 fee'], ['📜', 'Certificate']], { token: '✨', cap: 'Usually approved within 24 hours online.' });
  S.name = () => row([['🔎', 'Company|register'], ['™️', 'Trade mark|register'], ['🌐', 'Web domain'], ['✅', 'Register it']], { cap: 'Company name approval does not protect you from trade mark claims.' });
  S.office = () => row([['✉️', 'Legal post'], ['🏢', 'Registered|office'], ['👀', 'Public|register']], { token: '✉️', cap: 'Anyone can look up a company for free.' });
  S.whoiswho = () => row([['👥', 'Shareholders|OWN it'], ['👔', 'Directors|RUN it'], ['🏢', 'The company|owns assets, owes debts']], { sep: ['appoint', 'manage'], cap: 'In a small company one person can wear both hats.' });
  S.articles = () => row([['📜', 'Memorandum|"we agree to form it"'], ['📘', 'Articles|the rulebook'], ['🤝', 'Shareholders\' agreement|private deal between owners']], { sep: '+' });
  S.checklist = () => row([['🏦', 'Bank|account'], ['🧾', 'Corporation|Tax'], ['📚', 'Registers|and books'], ['🪧', 'Show company|details'], ['🛡️', 'Insurance|and ICO'], ['🗓️', 'Deadlines|in diary']], { token: '✅', sep: '' });
  S.twowallets = () => row([['👛', 'Your wallet'], ['🏦', 'Company|account']], { sep: ['≠'], cap: 'Only four doors between them: salary · dividends · expenses · director\'s loan' });
  S.books = () => row([['🧾', 'Receipts and|invoices'], ['💻', 'Accounting|software'], ['🏦', 'Match to|the bank'], ['📊', 'Reports you|can trust']], { token: '🧾', cap: 'Keep records for at least 6 years.' });
  S.invoice = () => row([['🛠️', 'Do the work'], ['📄', 'Send invoice|same day'], ['⏳', '30 days|(default)'], ['💷', 'Paid']], { token: '📄', cap: 'Late? Statutory interest: 8% above Bank of England base rate.' });
  S.pnl = () => row([['💰', 'Sales|£100'], ['📦', 'Cost of sales|£40'], ['🏠', 'Overheads|£35'], ['🧾', 'Tax|£5'], ['😀', 'Net profit|£20']], { sep: ['−', '−', '−', '='] });
  S.accounts = () => row([['📅', 'Year end'], ['📊', 'Accounts within|9 months'], ['🏛️', 'Companies|House'], ['🧾', 'HMRC|tax return']], { sep: ['→', '→', '+'], cap: 'First accounts: 21 months after incorporation.' });
  S.taxmap = () => row([['🏢', 'Corporation Tax|on profits'], ['🛒', 'VAT|on sales'], ['👷', 'PAYE and NI|on wages'], ['💰', 'Dividend tax|on payouts'], ['🏬', 'Business rates|on premises']], { sep: '', cap: 'Collected by HMRC (business rates go to your council).' });
  S.expenses = () => row([['💻', '✅ Work laptop'], ['🚆', '✅ Trip to|a customer'], ['🍽️', '❌ Client|dinner'], ['🚗', '❌ Parking|fine'], ['🏖️', '❌ Your|holiday']], { sep: '', cap: 'Test: was it "wholly and exclusively" for the business?' });
  S.payyourself = () => row([['🏢', 'Company|profit'], ['🧾', 'Corporation|Tax first'], ['💰', 'Dividend|if profits remain'], ['🧑', 'You (then|personal tax)']], { token: '💷', cap: 'Salary is different: it goes through payroll and reduces profit.' });
  S.scam = () => row([['📱', '"HMRC refund"|text arrives'], ['🎣', 'Fake link'], ['🚫', 'Do not click'], ['📨', 'Forward to|60599']], { cap: 'HMRC never asks for bank details by text or email.' });
  S.status = () => row([['🧑‍🔧', 'Self-employed|own business, few rights'], ['👷', 'Worker|wage, holiday, breaks'], ['👔', 'Employee|full set of rights']], { sep: '<', cap: 'Reality decides, not the label on the contract.' });
  S.prehire = () => row([['🧾', 'Register as|employer'], ['🛡️', 'Liability|insurance'], ['🪪', 'Right to|work check'], ['📄', 'Written terms|by day one'], ['🏦', 'Pension|check']], { token: '✅' });
  S.time = () => row([['⏱️', '48 hours|a week max'], ['☕', '20 min break|after 6 hours'], ['🌙', '11 hours rest|between days'], ['🏖️', '5.6 weeks|paid holiday']], { sep: '' });
  S.benefits = () => row([['🏦', 'Pension|8% total, 3% employer'], ['🤒', 'Sick pay|from day one'], ['👶', 'Family leave|up to 52 weeks']], { sep: '' });
  S.equality = () => row([['🎂', 'Age'], ['♿', 'Disability'], ['🏳️‍⚧️', 'Gender|reassignment'], ['💍', 'Marriage'], ['🤰', 'Pregnancy'], ['🌍', 'Race'], ['🛐', 'Religion|or belief'], ['⚧️', 'Sex'], ['🏳️‍🌈', 'Sexual|orientation']], { sep: '', cap: 'Nine protected characteristics. Compensation is uncapped.' });
  S.dismiss = () => row([['🔎', 'Investigate'], ['✉️', 'Letter'], ['🗣️', 'Meeting'], ['⚖️', 'Decision'], ['🔁', 'Appeal']], { token: '📋', cap: 'Fair reason + fair process = fair dismissal.' });
  S.safety = () => row([['👀', 'Spot the|hazards'], ['🧍', 'Who could|be hurt?'], ['🛠️', 'Control|the risk'], ['📝', 'Record it'], ['🔁', 'Review']], { token: '⛑️' });
  S.terms = () => row([['📄', 'Shown before|the sale'], ['⚖️', 'Clear and|fair'], ['✅', 'Binding']], { cap: 'You can never exclude liability for death or injury from negligence.' });
  S.consumer = () => row([['📦', 'As described'], ['👍', 'Satisfactory|quality'], ['🎯', 'Fit for|purpose']], { sep: '+', cap: 'Faulty: refund within 30 days. Online: 14-day cooling-off.' });
  S.ads = () => row([['⚖️', 'Legal'], ['🙂', 'Decent'], ['🤝', 'Honest'], ['✅', 'Truthful']], { sep: '+', cap: 'Paid posts must say #ad. No fake reviews. No hidden fees.' });
  S.gdpr = () => row([['🧑', 'Someone\'s|data'], ['🔐', 'You keep it|safe'], ['⏱️', 'Breach? Report|in 72 hours'], ['🏛️', 'ICO']], { token: '📁', cap: 'Collect less. Keep it safe. Delete it when done.' });
  S.ip = () => row([['™️', 'Trade mark|brand names, logos'], ['©️', 'Copyright|writing, art, code'], ['💡', 'Patent|inventions'], ['🎨', 'Design|how it looks']], { sep: '', cap: 'Freelancer made it? Get a written IP assignment.' });
  S.insurance = () => row([['👷', 'Employers\'|(compulsory)'], ['🧍', 'Public|liability'], ['📦', 'Product|liability'], ['🧠', 'Professional|indemnity'], ['💻', 'Cyber']], { sep: '' });
  S.dispute = () => row([['🗣️', 'Talk'], ['✉️', 'Letter before|action'], ['🤝', 'Mediation'], ['⚖️', 'Court']], { cap: 'Each step costs more than the last. Settle early if you can.' });
  S.conflict = () => row([['💰', 'Your personal|interest'], ['🏢', 'The company\'s|interest'], ['📣', 'Declare it'], ['✅', 'Board|decides']], { sep: ['⚡', '→', '→'], cap: 'The rule is not "never". It is "tell, then get approval".' });
  S.board = () => row([['🗓️', 'Board|meeting'], ['🗳️', 'Vote'], ['📝', 'Minutes|keep 10 years'], ['🏛️', 'Tell Companies|House in 14 days']], { token: '📝' });
  S.loop = () => row([['📄', 'Confirmation|statement'], ['📊', 'Annual|accounts'], ['🧾', 'Tax return|and payment'], ['🔁', 'Every|year']], { token: '⭐', cap: 'Miss them: penalties, prosecution, and strike-off.' });
  S.vesting = () => row([['🥧', 'Year 1|25% earned'], ['🥧', 'Year 2|50%'], ['🥧', 'Year 3|75%'], ['🏆', 'Year 4|100%']], { cap: 'Leave early, hand back the unearned shares.' });
  S.disqualify = () => row([['🚩', 'Unfit|conduct'], ['⚖️', 'Court order or|undertaking'], ['⛔', 'Banned for|2 to 15 years']], { cap: 'Acting as a director while banned is a criminal offence.' });
  S.funding = () => row([['🥾', 'Bootstrapping|your own money'], ['🏦', 'Debt|repay with interest'], ['🎁', 'Grants|no repayment'], ['🍰', 'Equity|sell shares']], { sep: '' });
  S.seis = () => row([['👼', 'Angel invests|£10,000'], ['🧾', 'Gets £5,000 off|their tax (SEIS)'], ['🏢', 'Company receives|the full £10,000']], { token: '💷' });
  S.scale = () => row([['📈', 'Orders|triple'], ['📦', 'Pay for stock|now'], ['⏳', 'Customers pay|in 60 days'], ['🪣', 'Cash gap!']], { cap: 'Overtrading: growing faster than your cash allows.' });
  S.exit = () => row([['🔍', 'Due|diligence'], ['📝', 'Sale|agreement'], ['💷', 'Payment'], ['🧾', 'Capital|Gains Tax']], { token: '🤝' });
  S.closing = () => row([['🤝', 'CVA|deal with creditors'], ['🧑‍⚖️', 'Administration|rescue attempt'], ['🔚', 'Liquidation|company ends'], ['✂️', 'Strike off|solvent, no debts']], { sep: '' });

  /* ---- bespoke scenes ---- */
  S.veil = () => wrap(
    node(90, 96, '🧑', 'You, your savings|and your home', 0) + node(330, 96, '🏢', 'Your company', 1) + node(550, 96, '😠', 'Creditor', 2) +
    pop(1.5, `<text x="210" y="118" font-size="64" text-anchor="middle" class="an-shield">🛡️</text>`) +
    token('📄', 'M 520 60 L 360 60', 1.6, 1.4) +
    token('💥', 'M 300 150 L 235 150 L 300 190', 1.8, 2, 20) +
    cap('The debt belongs to the company. The shield stops it reaching you.', 4));
  S.veilbreak = () => wrap(
    node(80, 110, '🧑', 'You', 0, 34) + pop(0.5, `<text x="190" y="130" font-size="58" text-anchor="middle">🛡️</text><text x="196" y="118" font-size="26" text-anchor="middle" class="an-crack">⚡</text>`) +
    ['Personal guarantee', 'Fraud', 'Wrongful trading', 'Unlawful dividends'].map((t, i) =>
      pop(1 + i * 0.7, `<rect x="330" y="${22 + i * 46}" width="230" height="34" rx="10" class="an-chip"/><text x="445" y="${44 + i * 46}" font-size="14" text-anchor="middle" class="an-label">${t}</text>
      <line x1="326" y1="${39 + i * 46}" x2="124" y2="${105 + i * 4}" class="an-arrow-bad"/>`)).join('') +
    cap('Four ways liability gets through the shield.', 5));
  S.cashflow = () => wrap(
    `<rect x="250" y="50" width="140" height="150" rx="10" class="an-bucket"/>
     <rect x="254" y="54" width="132" height="142" rx="7" class="an-water"><animate attributeName="y" values="150;70;70;170;190;150" dur="8s" repeatCount="indefinite"/><animate attributeName="height" values="46;126;126;26;6;46" dur="8s" repeatCount="indefinite"/></rect>` +
    pop(0, `<text x="110" y="70" font-size="34" text-anchor="middle">🚰</text>${lines(110, 100, 'Customers pay|(sometimes late)')}`) +
    token('💷', 'M 140 60 L 320 60 L 320 120', 2, 0.5) +
    pop(1, `${lines(520, 80, 'Rent 🏠')}${lines(520, 120, 'Wages 👷')}${lines(520, 160, 'Suppliers 📦')}${lines(520, 200, 'Tax 🧾')}`) +
    token('💸', 'M 392 180 L 480 80', 2.2, 1) + token('💸', 'M 392 185 L 480 120', 2.2, 1.6) + token('💸', 'M 392 190 L 480 160', 2.2, 2.2) + token('💸', 'M 392 195 L 480 200', 2.2, 2.8) +
    cap('Profit on paper does not pay the bills. Watch the water level.', 3, H - 8));
  S.payslip = () => {
    const parts = [['Take-home', 23932, 'c1'], ['Income Tax', 3486, 'c2'], ['National Insurance', 1394, 'c3'], ['Pension (5%)', 1188, 'c4']];
    let x = 40, s = pop(0, `<text x="40" y="40" class="an-cap" font-size="15">Gross salary £30,000 a year: where it goes</text>`);
    parts.forEach((p, i) => {
      const w = p[1] / 30000 * 560;
      s += `<rect x="${x}" y="60" height="60" width="0" class="an-bar ${p[2]}"><animate attributeName="width" from="0" to="${w}" dur="0.8s" begin="${0.4 + i * 0.7}s" fill="freeze"/></rect>`;
      s += pop(1.2 + i * 2, `<rect x="${60 + i * 140}" y="150" width="14" height="14" rx="3" class="an-bar ${p[2]}"/><text x="${80 + i * 140}" y="162" font-size="12" class="an-label">${p[0]}</text><text x="${80 + i * 140}" y="180" font-size="13" class="an-cap">£${p[1].toLocaleString()}</text>`);
      x += w;
    });
    return wrap(s + cap('The employer also pays 15% NI on pay above £5,000, plus 3% pension.', 10));
  };
  S.shares = () => wrap(
    `<circle cx="170" cy="115" r="80" class="an-pie-a"/>
     <circle cx="170" cy="115" r="40" fill="none" class="an-pie-b" stroke-width="80" stroke-dasharray="0 251.3" transform="rotate(-90 170 115)"><animate attributeName="stroke-dasharray" values="0 251.3;0 251.3;50.3 201;50.3 201" keyTimes="0;0.3;0.6;1" dur="5s" repeatCount="indefinite"/></circle>` +
    pop(0, `<text x="360" y="60" font-size="15" class="an-cap">Before: you own 100%</text>`) +
    pop(3, `<text x="360" y="100" font-size="15" class="an-cap">Investor puts in £100,000</text><text x="360" y="124" font-size="13" class="an-label">at a £400,000 pre-money valuation</text>`) +
    pop(5, `<text x="360" y="164" font-size="15" class="an-cap">After: you 80%, investor 20%</text><text x="360" y="188" font-size="13" class="an-label">Your 80% is worth £400,000</text>`) +
    cap('Dilution: a smaller slice of a bigger pie.', 7));
  S.calendar = () => {
    const ev = [[0, 'Year end|31 Mar', '🏁'], [9, 'Accounts due|31 Dec', '📊'], [9.25, 'Pay Corp Tax|1 Jan', '💷'], [12, 'Tax return|31 Mar', '🧾']];
    let s = `<line x1="40" y1="120" x2="600" y2="120" class="an-line"/>`;
    for (let m = 0; m <= 12; m++) s += `<line x1="${40 + m * 46.6}" y1="114" x2="${40 + m * 46.6}" y2="126" class="an-line"/><text x="${40 + m * 46.6}" y="142" font-size="10" text-anchor="middle" class="an-label">${m}</text>`;
    ev.forEach((e, i) => { const x = 40 + e[0] * 46.6, up = i % 2 === 0; s += pop(1 + i * 1.2, `<text x="${x}" y="${up ? 100 : 176}" font-size="26" text-anchor="middle">${e[2]}</text>${lines(x + (i === 2 ? 30 : 0), up ? 50 : 196, e[1], 12)}`); });
    return wrap(s + token('🏃', 'M 40 108 L 600 108', 6, 0.5, 18) + pop(0, `<text x="320" y="20" font-size="12" text-anchor="middle" class="an-label">months after the financial year ends</text>`) + cap('You pay the tax before the return is due.', 6));
  };
  S.balance = () => wrap(
    `<line x1="320" y1="60" x2="320" y2="190" class="an-line" stroke-width="5"/><polygon points="290,195 350,195 320,170" class="an-box"/>
     <g class="an-seesaw-level"><line x1="120" y1="80" x2="520" y2="80" class="an-line" stroke-width="5"/></g>` +
    pop(0, `<rect x="70" y="92" width="150" height="70" rx="10" class="an-box"/><text x="145" y="124" font-size="26" text-anchor="middle">💷📦🚐</text>${lines(145, 150, 'Assets', 14, 'an-cap')}`) +
    pop(1.5, `<rect x="420" y="92" width="150" height="34" rx="8" class="an-box"/>${lines(495, 114, 'Liabilities 🏦')}`) +
    pop(2.5, `<rect x="420" y="128" width="150" height="34" rx="8" class="an-chip"/>${lines(495, 150, 'Equity 🍰')}`) +
    cap('Assets = Liabilities + Equity. It always balances.', 4));
  S.insolvency = () => wrap(
    `<polygon points="290,200 350,200 320,150" class="an-box"/>
     <g><animateTransform attributeName="transform" type="rotate" values="0 320 150;0 320 150;14 320 150;14 320 150" keyTimes="0;0.25;0.6;1" dur="5s" repeatCount="indefinite"/>
       <line x1="110" y1="150" x2="530" y2="150" class="an-line" stroke-width="6"/>
       <text x="150" y="138" font-size="40" text-anchor="middle">💷</text><text x="150" y="100" font-size="13" text-anchor="middle" class="an-label">Assets and cash</text>
       <text x="490" y="138" font-size="50" text-anchor="middle">🧱</text><text x="490" y="88" font-size="13" text-anchor="middle" class="an-label">Debts</text>
     </g>` + cap('Cannot pay debts when due, or owe more than you own? Creditors come first.', 3));
  S.duties = () => {
    const d = ['Act within|powers', 'Promote|success', 'Independent|judgment', 'Care, skill,|diligence', 'Avoid|conflicts', 'No outside|benefits', 'Declare|interests'];
    let s = pop(0, `<circle cx="320" cy="118" r="38" class="an-box"/><text x="320" y="132" font-size="38" text-anchor="middle">🧑‍💼</text>`);
    d.forEach((t, i) => { const a = -Math.PI / 2 + i * 2 * Math.PI / 7, x = 320 + Math.cos(a) * 220, y = 118 + Math.sin(a) * 86;
      s += pop(0.8 + i * 0.6, `<rect x="${x - 58}" y="${y - 20}" width="116" height="40" rx="12" class="an-chip"/><text x="${x - 46}" y="${y + 5}" font-size="13" class="an-cap">${i + 1}</text>${lines(x + 6, y - 2, t, 11)}`); });
    return wrap(s);
  };
  S.corptax = () => wrap(
    `<line x1="70" y1="190" x2="600" y2="190" class="an-line"/><line x1="70" y1="190" x2="70" y2="30" class="an-line"/>
     <polyline points="70,150 176,150 494,58 600,58" class="an-draw" pathLength="1"/>` +
    pop(0, `<text x="60" y="154" font-size="12" text-anchor="end" class="an-label">19%</text><text x="60" y="62" font-size="12" text-anchor="end" class="an-label">25%</text>`) +
    pop(1, `<text x="176" y="208" font-size="12" text-anchor="middle" class="an-label">£50,000</text><line x1="176" y1="150" x2="176" y2="190" class="an-dash"/>`) +
    pop(3, `<text x="494" y="208" font-size="12" text-anchor="middle" class="an-label">£250,000</text><line x1="494" y1="58" x2="494" y2="190" class="an-dash"/>`) +
    pop(2, `<text x="400" y="132" font-size="13" text-anchor="middle" class="an-cap">marginal relief zone</text>`) +
    pop(4, `<text x="335" y="232" font-size="13" text-anchor="middle" class="an-label">Company profit  →  effective tax rate climbs gradually</text>`));
  S.breakeven = () => wrap(
    `<line x1="70" y1="200" x2="600" y2="200" class="an-line"/><line x1="70" y1="200" x2="70" y2="30" class="an-line"/>
     <polyline points="70,140 600,80" class="an-draw c-bad" pathLength="1"/><polyline points="70,200 600,40" class="an-draw" pathLength="1" style="animation-delay:1.2s"/>` +
    pop(1, `<text x="590" y="98" font-size="12" text-anchor="end" class="an-label">Total costs</text><text x="84" y="134" font-size="12" class="an-label">Fixed costs start here</text>`) +
    pop(4, `<text x="590" y="34" font-size="12" text-anchor="end" class="an-label">Sales</text>`) +
    pop(6, `<circle cx="388" cy="104" r="8" class="an-dot"/><text x="388" y="134" font-size="14" text-anchor="middle" class="an-cap">Break-even</text><text x="500" y="150" font-size="12" class="an-label">profit zone ↗</text><text x="150" y="190" font-size="12" class="an-label">loss zone</text>`) +
    pop(7, `<text x="335" y="228" font-size="12" text-anchor="middle" class="an-label">Units sold →</text>`));
  S.vat = () => wrap(
    node(90, 70, '🏭', 'Supplier', 0, 34) + node(320, 70, '🏢', 'You', 1, 34) + node(550, 70, '🧑', 'Customer', 2, 34) + node(320, 196, '🏛️', '', 3, 30) +
    pop(1.5, `${lines(205, 44, 'You pay £60 + £12 VAT', 12)}`) + pop(2.5, `${lines(435, 44, 'You charge £100 + £20 VAT', 12)}`) +
    pop(4, `<text x="366" y="190" font-size="13" class="an-cap">HMRC gets £20 − £12 = £8</text><text x="366" y="210" font-size="12" class="an-label">from you, each quarter</text>`) +
    token('💷', 'M 286 60 L 124 60', 2, 1.2) + token('💷', 'M 516 82 L 354 82', 2, 2.2) + token('🪙', 'M 320 108 L 320 164', 1.6, 3.6));
  S.contract = () => row([['🙋', 'Offer'], ['👍', 'Acceptance'], ['💷', 'Consideration'], ['🤝', 'Intention'], ['📜', 'Contract!']], { sep: ['+', '+', '+', '='], cap: 'No signature needed for most contracts. A click can be enough.' });
  S.wage = () => {
    const r = [['Under 18 and|apprentices', 8.00], ['Age 18 to 20', 10.85], ['Age 21 and over', 12.71]];
    let s = `<line x1="60" y1="190" x2="600" y2="190" class="an-line"/>`;
    r.forEach((x, i) => { const h = x[1] * 11, cx = 150 + i * 170;
      s += `<rect x="${cx - 45}" y="190" width="90" height="0" rx="6" class="an-bar c${i + 1}"><animate attributeName="height" from="0" to="${h}" dur="0.8s" begin="${0.3 + i * 0.6}s" fill="freeze"/><animate attributeName="y" from="190" to="${190 - h}" dur="0.8s" begin="${0.3 + i * 0.6}s" fill="freeze"/></rect>`;
      s += pop(2 + i * 1.6, `<text x="${cx}" y="${180 - h}" font-size="17" text-anchor="middle" class="an-cap">£${x[1].toFixed(2)}</text>`) + pop(0, lines(cx, 208, x[0], 12));
    });
    return wrap(s + pop(0, `<text x="320" y="24" font-size="13" text-anchor="middle" class="an-label">Minimum hourly pay from April 2026</text>`));
  };

  window.Anim = { render(name) { return (S[name] || S.business)(); }, has: n => !!S[n], names: () => Object.keys(S) };
})();
