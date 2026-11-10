# Founder's Quest UK

A browser game that teaches how to start and run a company in the UK: registration, money, tax, employment, law and directors' duties. Written so a teenager can follow it, with enough detail to be useful to a first-time founder.

## Play it

No build step and no dependencies. Either:

- open `index.html` in a browser, or
- serve the folder (`python3 -m http.server`) and visit `http://localhost:8000`, or
- turn on **GitHub Pages** for this repository (Settings → Pages → deploy from branch, root folder).

Progress is saved in the browser's local storage.

## What is in the game

| Part | What you do |
| --- | --- |
| **Journey: 8 chapters** | Each chapter has animated lessons, decisions that move your company's Cash, Reputation, Compliance and Team meters, mini-games and a quiz. |
| **Case Files: 13 cases** | Invented companies with real-world problems. Read the story, diagnose the problem, choose the fix, then get the debrief: solution steps, prevention checklist and the law. |
| **Law Stories: 18 stories** | Real cases and events, from *Salomon v Salomon* (1897) to the Post Office Horizon scandal, each with the ruling, why it matters and a quick check. |
| **Calculators** | Corporation Tax, take-home pay, VAT, minimum wage check, break-even, dilution and a filing deadline finder. |
| **Library** | Official GOV.UK, legislation.gov.uk, Acas, ICO and HSE links, video channels and a glossary. |
| **Final Exam** | 20 random questions. Score 70% for a printable certificate. |

The chapters:

1. **Pick Your Vehicle**: sole trader, partnership, LLP, limited company; limited liability
2. **Bring It To Life**: Companies House registration, names, directors, shares, PSCs, articles
3. **Master The Money**: bookkeeping, cash flow, invoices, P&L, balance sheet, annual accounts
4. **Tame The Taxes**: Corporation Tax, VAT, PAYE, dividends, deadlines, penalties, scams
5. **Build The Team**: employment status, minimum wage, holidays, pensions, equality, dismissal, safety
6. **Know The Law**: contracts, consumer rights, advertising, data protection, IP, insurance, disputes
7. **Lead Like A Director**: the seven duties, conflicts, filings, shareholder agreements, disqualification
8. **Grow, Fund and Exit**: debt and equity, SEIS/EIS, overtrading, selling up, insolvency, closing down

## Files

```
index.html             page shell
css/style.css          all styling (light and dark themes, mobile layout)
js/data-chapters.js    the 8 chapters: lessons, decisions, mini-games, quizzes
js/data-cases.js       case files and law stories
js/data-refs.js        glossary, link library, videos, ranks
js/animations.js       animated SVG explainers
js/app.js              game engine, views, mini-games, calculators
```

To add content, edit the data files. A lesson is `{ t, anim, body, teen, fact, tool, refs }`; a quiz question is `{ q, o, a, why }`.

## Accuracy

Rates, thresholds and deadlines are for the **2026/27 tax year**, checked in November 2026. UK rules change every year. This is a learning game, **not legal, tax or financial advice**: confirm anything important on [GOV.UK](https://www.gov.uk/browse/business) or with a qualified adviser.
