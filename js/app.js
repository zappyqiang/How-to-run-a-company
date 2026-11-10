/* Founder's Quest UK — game engine, views, mini-games and calculators. */
(function () {
  'use strict';
  const GD = window.GD, app = document.getElementById('app');
  const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const gbp = n => '£' + Math.round(n).toLocaleString('en-GB');
  const gbp2 = n => '£' + Number(n).toLocaleString('en-GB', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));
  const link = r => `<a href="${r[1]}" target="_blank" rel="noopener">${esc(r[0])} ↗</a>`;
  const refList = refs => refs && refs.length ? `<div class="refs"><span class="refs-h">📎 Check the source</span>${refs.map(link).join('')}</div>` : '';

  /* ---------------------------------------------------------------- state */
  const KEY = 'founders-quest-uk-v1';
  const fresh = () => ({ name: '', company: '', avatar: '🦊', cash: 1000, rep: 50, comp: 50, team: 50, xp: 0, ch: {}, cases: {}, stories: {}, badges: [], exam: 0, seen: {} });
  let st = fresh();
  try { const raw = localStorage.getItem(KEY); if (raw) st = Object.assign(fresh(), JSON.parse(raw)); } catch (e) { /* storage unavailable: play without saving */ }
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(st)); } catch (e) { /* ignore */ } };
  const chState = id => (st.ch[id] = st.ch[id] || { lessons: {}, decide: null, games: {}, quiz: null });

  const rank = () => { let r = GD.ranks[0]; GD.ranks.forEach(x => { if (st.xp >= x[0]) r = x; }); return r; };
  const nextRank = () => GD.ranks.find(x => x[0] > st.xp);

  function toast(msg, cls = '') {
    const t = document.createElement('div'); t.className = 'toast ' + cls; t.innerHTML = msg;
    document.getElementById('toasts').appendChild(t); setTimeout(() => t.remove(), 3400);
  }
  function confetti() {
    const box = document.getElementById('confetti'); const bits = ['🎉', '⭐', '💷', '✨', '🏆', '🎊'];
    for (let i = 0; i < 26; i++) { const s = document.createElement('span'); s.textContent = bits[i % bits.length]; s.style.left = Math.random() * 100 + '%'; s.style.animationDelay = Math.random() * 0.5 + 's'; s.style.fontSize = 16 + Math.random() * 18 + 'px'; box.appendChild(s); setTimeout(() => s.remove(), 2600); }
  }
  function addXP(n, why) {
    if (!n) return; const before = rank()[1]; st.xp += n; save(); renderHud();
    toast(`+${n} XP${why ? ' · ' + esc(why) : ''}`, 'good');
    if (rank()[1] !== before) { toast(`${rank()[2]} Promoted to <b>${rank()[1]}</b>!`, 'gold'); confetti(); }
  }
  function applyFx(fx) {
    if (!fx) return ''; const out = [];
    const lab = { cash: '💷 Cash', rep: '⭐ Reputation', comp: '🛡️ Compliance', team: '🤝 Team' };
    Object.keys(lab).forEach(k => { if (fx[k]) { st[k] = k === 'cash' ? st[k] + fx[k] : clamp(st[k] + fx[k], 0, 100); out.push(`<span class="${fx[k] > 0 ? 'up' : 'down'}">${lab[k]} ${fx[k] > 0 ? '+' : ''}${k === 'cash' ? gbp(fx[k]).replace('£-', '-£') : fx[k]}</span>`); } });
    save(); renderHud(); return out.join(' ');
  }
  function badge(id, name, icon) { if (st.badges.includes(id)) return; st.badges.push(id); save(); toast(`${icon} Badge unlocked: <b>${name}</b>`, 'gold'); confetti(); }
  const BADGES = [['first', 'First Steps', '👣', 'Finish your first chapter quiz'], ['perfect', 'Flawless', '💯', 'Score 100% in a chapter quiz'], ['allch', 'Full Journey', '🗺️', 'Complete all 8 chapters'], ['cases', 'Case Cracker', '🕵️', 'Solve every case file'], ['stories', 'Law Buff', '📚', 'Read every law story'], ['clean', 'Squeaky Clean', '🧼', 'Reach 90 compliance'], ['exam', 'Certified Founder', '🎓', 'Pass the final exam'], ['rich', 'In The Black', '💰', 'Grow company cash past £25,000']];
  function checkBadges() {
    const done = GD.chapters.filter(c => chState(c.id).quiz != null);
    if (done.length >= 1) badge('first', 'First Steps', '👣');
    if (done.length === GD.chapters.length) badge('allch', 'Full Journey', '🗺️');
    if (GD.cases.every(c => st.cases[c.id] != null)) badge('cases', 'Case Cracker', '🕵️');
    if (GD.stories.every(s => st.stories[s.id] != null)) badge('stories', 'Law Buff', '📚');
    if (st.comp >= 90) badge('clean', 'Squeaky Clean', '🧼');
    if (st.cash >= 25000) badge('rich', 'In The Black', '💰');
  }
  const stars = n => '★'.repeat(n) + '☆'.repeat(3 - n);
  const starsFor = p => p >= 0.85 ? 3 : p >= 0.65 ? 2 : p >= 0.4 ? 1 : 0;
  function chapterStars(c) { const s = chState(c.id); return s.quiz == null ? 0 : starsFor(s.quiz); }
  function chapterPct(c) {
    const s = chState(c.id); let d = 0, t = c.lessons.length + 1 + c.games.length + 1;
    d += Object.keys(s.lessons).length; if (s.decide != null) d++; d += Object.keys(s.games).length; if (s.quiz != null) d++;
    return Math.round(d / t * 100);
  }

  /* ---------------------------------------------------------------- hud + nav */
  function renderHud() {
    const el = document.getElementById('hud'); if (!st.name) { el.innerHTML = ''; return; }
    const r = rank(), nx = nextRank(), pct = nx ? Math.round((st.xp - r[0]) / (nx[0] - r[0]) * 100) : 100;
    const meter = (ic, lab, v) => `<div class="meter" title="${lab}: ${v}/100"><span>${ic}</span><div class="bar"><i style="width:${v}%" class="${v < 35 ? 'low' : v > 70 ? 'high' : ''}"></i></div><b>${v}</b></div>`;
    el.innerHTML = `<a class="hud-id" href="#profile"><span class="av">${st.avatar}</span><span><b>${esc(st.company)}</b><small>${r[2]} ${r[1]} · ${st.xp} XP</small><span class="xpbar"><i style="width:${pct}%"></i></span></span></a>
      <div class="hud-stats"><div class="cash ${st.cash < 0 ? 'neg' : ''}" title="Company cash">💷 ${gbp(st.cash).replace('£-', '-£')}</div>${meter('⭐', 'Reputation', st.rep)}${meter('🛡️', 'Compliance', st.comp)}${meter('🤝', 'Team', st.team)}</div>`;
  }
  const NAV = [['home', '🗺️', 'Journey'], ['cases', '🕵️', 'Case Files'], ['stories', '📚', 'Law Stories'], ['tools', '🧮', 'Tools'], ['library', '🔗', 'Library'], ['exam', '🎓', 'Exam']];
  function renderNav(cur) {
    document.getElementById('nav').innerHTML = st.name ? NAV.map(n => `<a href="#${n[0]}" class="${cur === n[0] ? 'on' : ''}"><span>${n[1]}</span>${n[2]}</a>`).join('') : '';
  }

  /* ---------------------------------------------------------------- views */
  const V = {};
  V.start = () => {
    const avs = ['🦊', '🦁', '🐼', '🦄', '🐙', '🦉', '🐯', '🤖'];
    app.innerHTML = `<section class="hero start">
      <div class="hero-art">🏢<span>🚀</span><span>💷</span><span>⚖️</span></div>
      <h1>Founder's Quest <em>UK</em></h1>
      <p class="lead">Build a company from nothing. Learn how business, money, tax and the law really work in the UK, by playing.</p>
      <form id="startForm" class="card start-form">
        <label>Your first name<input name="name" maxlength="20" required placeholder="e.g. Sam" autocomplete="off"></label>
        <label>Name your company<input name="company" maxlength="28" required placeholder="e.g. Rocket Socks" autocomplete="off"><small>We will add "Ltd" for you. Real companies must end in Ltd or Limited.</small></label>
        <div class="avs" role="radiogroup" aria-label="Choose an avatar">${avs.map((a, i) => `<label><input type="radio" name="avatar" value="${a}" ${i === 0 ? 'checked' : ''}><span>${a}</span></label>`).join('')}</div>
        <button class="btn big" type="submit">Start my company →</button>
      </form>
      <ul class="feat"><li>🗺️ 8 chapters</li><li>🎬 ${Anim.names().length} animations</li><li>🕵️ ${GD.cases.length} case files</li><li>📚 ${GD.stories.length} real law stories</li><li>🎮 mini-games</li><li>🧮 calculators</li></ul>
      <p class="fine">For learning only. Not legal, tax or financial advice. Figures are for the 2026/27 tax year: check GOV.UK before relying on them.</p>
    </section>`;
    document.getElementById('startForm').addEventListener('submit', e => {
      e.preventDefault(); const f = new FormData(e.target);
      st.name = String(f.get('name')).trim(); let c = String(f.get('company')).trim().replace(/\s+(ltd|limited)\.?$/i, '');
      st.company = c + ' Ltd'; st.avatar = f.get('avatar'); save(); confetti(); location.hash = '#home'; route();
    });
  };

  V.home = () => {
    const done = GD.chapters.filter(c => chState(c.id).quiz != null).length;
    const fact = shuffle(GD.chapters.flatMap(c => c.lessons.filter(l => l.teen).map(l => l.teen)))[0];
    app.innerHTML = `<section class="welcome card"><div><h1>Hi ${esc(st.name)} ${st.avatar}</h1><p>You are the founder of <b>${esc(st.company)}</b>. You start with <b>£1,000</b> and a dream. Work through the journey, keep your four meters healthy, and earn your Founder's Certificate.</p></div>
        <div class="ring" style="--p:${done / GD.chapters.length * 100}"><b>${done}/${GD.chapters.length}</b><small>chapters</small></div></section>
      <h2 class="sec">🗺️ Your journey</h2>
      <div class="map">${GD.chapters.map((c, i) => `<a class="stop" href="#chapter/${c.id}" style="--c:${c.color}">
          <span class="num">${i + 1}</span><span class="ic">${c.icon}</span><span class="tt"><b>${c.title}</b><small>${c.tagline}</small></span>
          <span class="pr"><span class="stars">${stars(chapterStars(c))}</span><span class="pbar"><i style="width:${chapterPct(c)}%"></i></span></span></a>`).join('')}</div>
      <h2 class="sec">🎒 Side quests</h2>
      <div class="grid3">
        <a class="tile" href="#cases"><span>🕵️</span><b>Case Files</b><small>${Object.keys(st.cases).length}/${GD.cases.length} solved. Companies in trouble: find the problem, pick the fix.</small></a>
        <a class="tile" href="#stories"><span>📚</span><b>Law Stories</b><small>${Object.keys(st.stories).length}/${GD.stories.length} read. Snails, smoke balls and £1 department stores.</small></a>
        <a class="tile" href="#tools"><span>🧮</span><b>Calculators</b><small>Tax, take-home pay, VAT, break-even, deadlines.</small></a>
        <a class="tile" href="#library"><span>🔗</span><b>Library</b><small>Official links, videos and a plain-English glossary.</small></a>
        <a class="tile" href="#exam"><span>🎓</span><b>Final Exam</b><small>${st.exam ? 'Best score: ' + st.exam + '%' : '20 questions. Pass to earn your certificate.'}</small></a>
        <a class="tile" href="#profile"><span>🏅</span><b>Badges</b><small>${st.badges.length}/${BADGES.length} unlocked.</small></a>
      </div>
      <div class="card tip"><b>💡 Founder's tip</b><p>${fact}</p></div>`;
  };

  /* ---- chapter ---- */
  V.chapter = (id, tab, idx) => {
    const c = GD.chapters.find(x => x.id === id); if (!c) return V.home();
    const s = chState(id); tab = tab || 'learn';
    const tabs = [['learn', '🎬 Learn', Object.keys(s.lessons).length === c.lessons.length], ['decide', '🤔 Decide', s.decide != null], ['play', '🎮 Play', Object.keys(s.games).length === c.games.length], ['quiz', '🧠 Quiz', s.quiz != null]];
    const n = GD.chapters.indexOf(c);
    app.innerHTML = `<div class="chead" style="--c:${c.color}"><a class="back" href="#home">← Journey</a><div class="ctitle"><span class="big-ic">${c.icon}</span><div><small>Chapter ${n + 1}</small><h1>${c.title}</h1><p>${c.tagline}</p></div></div>
      <div class="tabs">${tabs.map(t => `<a href="#chapter/${id}/${t[0]}" class="${tab === t[0] ? 'on' : ''}">${t[1]}${t[2] ? ' <span class="tick">✓</span>' : ''}</a>`).join('')}</div></div><div id="stage"></div>`;
    const stage = document.getElementById('stage');
    if (tab === 'learn') lessonView(c, stage, +idx || 0);
    else if (tab === 'decide') decideView(c, stage);
    else if (tab === 'play') playView(c, stage, idx);
    else quizView(stage, c.quiz, { title: c.title + ' quiz', onDone: (score, total) => {
      const p = score / total, first = s.quiz == null; s.quiz = Math.max(s.quiz || 0, p); save();
      if (first) addXP(score * 10, 'quiz'); if (p === 1) badge('perfect', 'Flawless', '💯'); checkBadges();
      const nx = GD.chapters[n + 1];
      return `<p class="bigstars">${stars(starsFor(p))}</p>${refList(c.refs)}<div class="row">${nx ? `<a class="btn" href="#chapter/${nx.id}">Next chapter: ${nx.title} →</a>` : `<a class="btn" href="#exam">Take the final exam →</a>`}<a class="btn ghost" href="#home">Back to journey</a></div>`;
    } });
  };

  function lessonView(c, stage, i) {
    i = clamp(i, 0, c.lessons.length - 1); const l = c.lessons[i], s = chState(c.id);
    if (!s.lessons[i]) { s.lessons[i] = 1; save(); addXP(10, 'lesson'); }
    stage.innerHTML = `<article class="lesson card">
      <div class="dots">${c.lessons.map((x, k) => `<a href="#chapter/${c.id}/learn/${k}" class="${k === i ? 'on' : ''} ${s.lessons[k] ? 'seen' : ''}" aria-label="Lesson ${k + 1}"></a>`).join('')}</div>
      <h2>${i + 1}. ${l.t}</h2>
      <div class="animwrap"><div id="animbox">${Anim.render(l.anim)}</div><button class="replay" data-act="replay" data-anim="${l.anim}">↻ Replay animation</button></div>
      <div class="body">${l.body.map(p => /^<(ul|ol|p)/.test(p) ? p : `<p>${p}</p>`).join('')}</div>
      ${l.teen ? `<div class="teen"><b>🧃 In plain words</b><p>${l.teen}</p></div>` : ''}
      ${l.fact ? `<div class="fact"><b>🤓 Did you know?</b><p>${l.fact}</p></div>` : ''}
      ${l.tool ? `<div class="tool-in" id="toolbox"></div>` : ''}
      ${refList(l.refs)}
      <div class="row between">${i > 0 ? `<a class="btn ghost" href="#chapter/${c.id}/learn/${i - 1}">← Back</a>` : '<span></span>'}
        ${i < c.lessons.length - 1 ? `<a class="btn" href="#chapter/${c.id}/learn/${i + 1}">Next →</a>` : `<a class="btn" href="#chapter/${c.id}/decide">Now make some decisions →</a>`}</div></article>`;
    if (l.tool) Tools.mount(l.tool, document.getElementById('toolbox'));
  }

  function decideView(c, stage) {
    const s = chState(c.id); let i = 0, best = 0;
    const show = () => {
      if (i >= c.decisions.length) {
        const first = s.decide == null; s.decide = best; save(); checkBadges();
        stage.innerHTML = `<div class="card center"><h2>Decisions made</h2><p>You chose the strongest option <b>${best} of ${c.decisions.length}</b> times. Your choices changed your company's meters, just like real life.</p><div class="row"><a class="btn" href="#chapter/${c.id}/play">Play the mini-games →</a><button class="btn ghost" data-act="reload">Try again</button></div></div>`;
        if (first) addXP(15, 'decisions'); return;
      }
      const d = c.decisions[i], opts = shuffle(d.options.map((o, k) => k));
      stage.innerHTML = `<div class="card decision"><small>Decision ${i + 1} of ${c.decisions.length}</small><h2>${d.prompt}</h2><div class="opts">${opts.map(k => `<button class="opt" data-k="${k}">${d.options[k].text}</button>`).join('')}</div><div id="fb"></div></div>`;
      stage.querySelectorAll('.opt').forEach(b => b.onclick = () => {
        const o = d.options[+b.dataset.k]; stage.querySelectorAll('.opt').forEach(x => { x.disabled = true; if (d.options[+x.dataset.k].best) x.classList.add('right'); });
        if (!o.best) b.classList.add('wrong'); else { best++; addXP(20, 'smart move'); }
        const fx = applyFx(o.fx);
        document.getElementById('fb').innerHTML = `<div class="feedback ${o.best ? 'ok' : 'no'}"><b>${o.best ? '✅ Strong choice' : '⚠️ Risky choice'}</b><p>${o.fb}</p>${fx ? `<p class="fx">${fx}</p>` : ''}<button class="btn" id="nx">${i < c.decisions.length - 1 ? 'Next decision →' : 'Finish →'}</button></div>`;
        document.getElementById('nx').onclick = () => { i++; show(); }; document.getElementById('nx').focus();
      });
    };
    show();
  }

  function playView(c, stage, gi) {
    const s = chState(c.id);
    if (gi == null || !c.games[+gi]) {
      stage.innerHTML = `<div class="grid2">${c.games.map((g, k) => `<a class="tile game" href="#chapter/${c.id}/play/${k}"><span>${{ sort: '🗂️', order: '🔢', match: '🧩', spot: '🔍' }[g.type]}</span><b>${g.title}</b><small>${g.intro}</small><em>${s.games[k] != null ? 'Best: ' + Math.round(s.games[k] * 100) + '%' : 'Not played yet'}</em></a>`).join('')}</div>
        <div class="row"><a class="btn" href="#chapter/${c.id}/quiz">Ready for the quiz →</a></div>`; return;
    }
    const g = c.games[+gi];
    stage.innerHTML = `<div class="card gamebox"><h2>${g.title}</h2><p class="muted">${g.intro}</p><div id="game"></div></div>`;
    Games[g.type](document.getElementById('game'), g, p => {
      const first = s.games[gi] == null; s.games[gi] = Math.max(s.games[gi] || 0, p); save();
      if (first) addXP(Math.round(p * 40) + 10, 'mini-game'); if (p >= 0.8) confetti(); checkBadges();
      return `<div class="row"><button class="btn ghost" data-act="reload">Play again</button>${c.games[+gi + 1] ? `<a class="btn" href="#chapter/${c.id}/play/${+gi + 1}">Next game →</a>` : `<a class="btn" href="#chapter/${c.id}/quiz">Take the quiz →</a>`}</div>`;
    });
  }

  /* ---- quiz engine (also used by exam) ---- */
  function quizView(stage, questions, o) {
    const qs = shuffle(questions); let i = 0, score = 0;
    const show = () => {
      if (i >= qs.length) { const extra = o.onDone(score, qs.length); const p = score / qs.length;
        stage.innerHTML = `<div class="card center"><h2>${p >= 0.85 ? 'Outstanding!' : p >= 0.65 ? 'Well done!' : p >= 0.4 ? 'Getting there' : 'Have another go'}</h2><p class="score">${score} / ${qs.length}</p>${extra}</div>`; if (p >= 0.85) confetti(); return; }
      const q = qs[i], order = shuffle(q.o.map((x, k) => k));
      stage.innerHTML = `<div class="card quiz"><div class="qtop"><small>${esc(o.title)} · Question ${i + 1} of ${qs.length}</small><span class="pbar"><i style="width:${i / qs.length * 100}%"></i></span></div><h2>${q.q}</h2><div class="opts">${order.map(k => `<button class="opt" data-k="${k}">${q.o[k]}</button>`).join('')}</div><div id="fb"></div></div>`;
      stage.querySelectorAll('.opt').forEach(b => b.onclick = () => {
        const ok = +b.dataset.k === q.a; if (ok) score++;
        stage.querySelectorAll('.opt').forEach(x => { x.disabled = true; if (+x.dataset.k === q.a) x.classList.add('right'); }); if (!ok) b.classList.add('wrong');
        document.getElementById('fb').innerHTML = `<div class="feedback ${ok ? 'ok' : 'no'}"><b>${ok ? '✅ Correct' : '❌ Not quite'}</b>${q.why ? `<p>${q.why}</p>` : ''}<button class="btn" id="nx">${i < qs.length - 1 ? 'Next →' : 'See results →'}</button></div>`;
        document.getElementById('nx').onclick = () => { i++; show(); }; document.getElementById('nx').focus();
      });
    };
    show();
  }

  /* ---- case files ---- */
  V.cases = () => {
    app.innerHTML = `<div class="phead"><h1>🕵️ Case Files</h1><p>Thirteen companies in trouble. The companies are invented, but every problem happens to real UK businesses each year. Read the file, diagnose the problem, choose the fix.</p></div>
      <div class="grid3">${GD.cases.map(c => `<a class="tile case" href="#case/${c.id}"><span>${c.icon}</span><b>${c.title}</b><small>${c.area} · ${'●'.repeat(c.level)}${'○'.repeat(3 - c.level)}</small><em>${st.cases[c.id] != null ? '✓ Solved ' + st.cases[c.id] + '/2' : 'Open case'}</em></a>`).join('')}</div>`;
  };
  V.case = id => {
    const c = GD.cases.find(x => x.id === id); if (!c) return V.cases(); let step = 0, got = 0;
    const ask = (q, label, next) => {
      const order = shuffle(q.o.map((x, k) => k));
      return { html: `<div class="card quiz"><small>${label}</small><h2>${q.q}</h2><div class="opts">${order.map(k => `<button class="opt" data-k="${k}">${q.o[k]}</button>`).join('')}</div><div id="fb"></div></div>`,
        bind: () => app.querySelectorAll('.opt').forEach(b => b.onclick = () => { const ok = +b.dataset.k === q.a; if (ok) got++;
          app.querySelectorAll('.opt').forEach(x => { x.disabled = true; if (+x.dataset.k === q.a) x.classList.add('right'); }); if (!ok) b.classList.add('wrong');
          document.getElementById('fb').innerHTML = `<div class="feedback ${ok ? 'ok' : 'no'}"><b>${ok ? '✅ Spot on' : '❌ Not quite'}</b><p>${q.why}</p><button class="btn" id="nx">${next} →</button></div>`;
          document.getElementById('nx').onclick = () => { step++; show(); }; document.getElementById('nx').focus(); }) };
    };
    const head = `<a class="back" href="#cases">← All case files</a><div class="casehead"><span class="big-ic">${c.icon}</span><div><small>CASE FILE · ${c.area}</small><h1>${c.title}</h1><p>${c.company}</p></div></div><div class="steps">${['The story', 'Diagnose', 'Fix', 'Debrief'].map((x, k) => `<span class="STEP${k}">${k + 1}. ${x}</span>`).join('')}</div>`;
    const show = () => {
      let body, bind = () => {};
      if (step === 0) { body = `<div class="card story">${c.story.map(p => `<p>${p}</p>`).join('')}<div class="row"><button class="btn" id="go">Investigate →</button></div></div>`; bind = () => document.getElementById('go').onclick = () => { step++; show(); }; }
      else if (step === 1) { const a = ask(c.q1, 'Step 2: what went wrong?', 'Now choose a fix'); body = a.html; bind = a.bind; }
      else if (step === 2) { const a = ask(c.q2, 'Step 3: what should they do?', 'See the full debrief'); body = a.html; bind = a.bind; }
      else {
        const first = st.cases[c.id] == null; st.cases[c.id] = Math.max(st.cases[c.id] || 0, got); save();
        if (first) { addXP(30 + got * 25, 'case solved'); applyFx({ comp: got * 2, rep: got }); } checkBadges();
        const k = GD.cases.indexOf(c), nx = GD.cases[k + 1];
        body = `<div class="card debrief"><p class="score">${got}/2 correct</p>
          <h3>🛠️ How to solve it</h3><ol>${c.solution.map(x => `<li>${x}</li>`).join('')}</ol>
          <h3>🧯 How to prevent it</h3><ul class="checks">${c.prevent.map(x => `<li>${x}</li>`).join('')}</ul>
          <div class="lessonbox"><b>The lesson</b><p>${c.lesson}</p></div>${refList(c.law)}
          <div class="row">${nx ? `<a class="btn" href="#case/${nx.id}">Next case: ${nx.title} →</a>` : ''}<a class="btn ghost" href="#cases">All cases</a></div></div>`;
      }
      app.innerHTML = head.replace('STEP' + step, 'on') + body; bind(); window.scrollTo(0, 0);
    };
    show();
  };

  /* ---- law stories ---- */
  V.stories = () => {
    const sorted = GD.stories.slice().sort((a, b) => a.year - b.year);
    app.innerHTML = `<div class="phead"><h1>📚 Law Stories</h1><p>Real cases and real events that shaped how UK companies are run. Each one is a short story with a lesson you can use.</p></div>
      <div class="timeline">${sorted.map(s => `<a class="tl" href="#story/${s.id}"><span class="yr">${s.year}</span><span class="ic">${s.icon}</span><span class="tt"><b>${s.title}</b><small>${s.topic}</small></span><em>${st.stories[s.id] != null ? '✓' : ''}</em></a>`).join('')}</div>`;
  };
  V.story = id => {
    const s = GD.stories.find(x => x.id === id); if (!s) return V.stories();
    const sorted = GD.stories.slice().sort((a, b) => a.year - b.year), nx = sorted[sorted.indexOf(s) + 1];
    app.innerHTML = `<a class="back" href="#stories">← All law stories</a>
      <article class="card storypage"><div class="scene">${s.scene.map((e, i) => `<span style="--i:${i}">${e}</span>`).join('')}</div>
        <small class="cite">${s.year} · ${s.topic}</small><h1>${s.title}</h1><p class="cite">${s.cite}</p>
        <div class="reveal"><h3>📖 What happened</h3>${s.story.map(p => `<p>${p}</p>`).join('')}</div>
        <div class="reveal ruling"><h3>⚖️ What was decided</h3><p>${s.ruling}</p></div>
        <div class="reveal lessonbox"><b>💼 Why it matters to your company</b><p>${s.matters}</p></div>
        <div class="refs"><span class="refs-h">📎 Read more</span>${link(s.link)}<a href="https://www.youtube.com/results?search_query=${encodeURIComponent(s.title.length < 40 ? s.cite.split('[')[0].split('(')[0] : s.cite.split('[')[0].split('(')[0])}" target="_blank" rel="noopener">▶ Find videos ↗</a></div>
        <div id="sq"></div>
        <div class="row">${nx ? `<a class="btn ghost" href="#story/${nx.id}">Next story: ${nx.title} →</a>` : ''}</div></article>`;
    const q = s.q, box = document.getElementById('sq'), order = shuffle(q.o.map((x, k) => k));
    box.innerHTML = `<div class="quiz mini"><h3>🧠 Quick check</h3><p><b>${q.q}</b></p><div class="opts">${order.map(k => `<button class="opt" data-k="${k}">${q.o[k]}</button>`).join('')}</div><div id="fb"></div></div>`;
    box.querySelectorAll('.opt').forEach(b => b.onclick = () => { const ok = +b.dataset.k === q.a;
      box.querySelectorAll('.opt').forEach(x => { x.disabled = true; if (+x.dataset.k === q.a) x.classList.add('right'); }); if (!ok) b.classList.add('wrong');
      const first = st.stories[s.id] == null; st.stories[s.id] = ok ? 1 : (st.stories[s.id] || 0); save(); if (first) addXP(ok ? 40 : 20, 'law story'); checkBadges();
      document.getElementById('fb').innerHTML = `<div class="feedback ${ok ? 'ok' : 'no'}"><b>${ok ? '✅ Correct' : '❌ Not quite. The right answer is highlighted.'}</b></div>`; });
  };

  /* ---- tools, library, exam, profile ---- */
  V.tools = () => {
    const list = [['corptax', '🏢 Corporation Tax'], ['takehome', '👛 Take-home pay'], ['vat', '🛒 VAT'], ['minwage', '⏱️ Minimum wage check'], ['breakeven', '📈 Break-even'], ['dilution', '🍰 Investment and dilution'], ['deadlines', '🗓️ Filing deadline finder']];
    app.innerHTML = `<div class="phead"><h1>🧮 Calculators</h1><p>Play with the numbers. These are simplified teaching tools for the 2026/27 tax year (England, Wales and Northern Ireland bands). For real decisions use the official GOV.UK calculators or an accountant.</p></div>
      <div class="grid2 tools">${list.map(t => `<div class="card"><h2>${t[1]}</h2><div id="tool-${t[0]}"></div></div>`).join('')}</div>`;
    list.forEach(t => Tools.mount(t[0], document.getElementById('tool-' + t[0])));
  };
  V.library = () => {
    app.innerHTML = `<div class="phead"><h1>🔗 Library</h1><p>Everything in this game comes from official sources. Go and read the real thing.</p></div>
      <h2 class="sec">▶ Videos</h2><div class="grid3">${GD.videos.map(v => `<a class="tile vid" href="${v.u}" target="_blank" rel="noopener"><span>${v.icon}</span><b>${v.t} ↗</b><small>${v.d}</small></a>`).join('')}</div>
      <h2 class="sec">🌐 Official websites and laws</h2><div class="grid2">${GD.library.map(g => `<div class="card lib"><h3>${g.icon} ${g.group}</h3>${g.links.map(link).join('')}</div>`).join('')}</div>
      <h2 class="sec">📖 Glossary</h2><div class="card"><input id="gs" class="search" type="search" placeholder="Search ${GD.glossary.length} business words..." aria-label="Search glossary"><dl id="gl" class="gloss"></dl></div>`;
    const draw = f => { document.getElementById('gl').innerHTML = GD.glossary.filter(g => (g[0] + g[1]).toLowerCase().includes(f)).map(g => `<div><dt>${g[0]}</dt><dd>${g[1]}</dd></div>`).join('') || '<p class="muted">No match.</p>'; };
    draw(''); document.getElementById('gs').oninput = e => draw(e.target.value.toLowerCase());
  };
  V.exam = (mode) => {
    if (mode === 'cert' && st.exam >= 70) {
      app.innerHTML = `<div class="cert"><div class="cert-in"><p class="c1">Founder's Quest UK</p><h1>Certificate of Achievement</h1><p>This certifies that</p><h2>${esc(st.name)} ${st.avatar}</h2><p>founder of <b>${esc(st.company)}</b></p><p>has passed the Final Exam on how to run a company in the UK<br>with a score of <b>${st.exam}%</b></p><p class="c2">Rank: ${rank()[2]} ${rank()[1]} · ${st.xp} XP · ${new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</p><p class="fine">A learning game certificate. Not a professional qualification.</p></div></div><div class="row noprint"><button class="btn" data-act="print">🖨️ Print or save as PDF</button><a class="btn ghost" href="#home">Back to journey</a></div>`; return;
    }
    if (mode !== 'go') { app.innerHTML = `<div class="card center"><div class="big-ic">🎓</div><h1>The Final Exam</h1><p>20 questions drawn at random from every chapter and the law stories. Score <b>70% or more</b> to earn your Founder's Certificate.</p>${st.exam ? `<p>Your best score so far: <b>${st.exam}%</b></p>` : ''}<div class="row"><a class="btn big" href="#exam/go">Start the exam →</a>${st.exam >= 70 ? `<a class="btn ghost" href="#exam/cert">View my certificate</a>` : ''}</div></div>`; return; }
    const pool = GD.chapters.flatMap(c => c.quiz).concat(GD.stories.map(s => s.q));
    app.innerHTML = `<div id="stage"></div>`;
    quizView(document.getElementById('stage'), shuffle(pool).slice(0, 20), { title: 'Final exam', onDone: (sc, t) => {
      const p = Math.round(sc / t * 100), first = st.exam < 70; st.exam = Math.max(st.exam, p); save();
      if (p >= 70) { if (first) addXP(300, 'exam passed'); badge('exam', 'Certified Founder', '🎓'); return `<p>You passed with <b>${p}%</b>.</p><div class="row"><a class="btn big" href="#exam/cert">🎓 Get my certificate</a></div>`; }
      return `<p>You scored <b>${p}%</b>. You need 70% to pass. Revisit the chapters and try again.</p><div class="row"><button class="btn" data-act="reload">Try again</button><a class="btn ghost" href="#home">Back to journey</a></div>`;
    } });
  };
  V.profile = () => {
    const r = rank(), nx = nextRank();
    app.innerHTML = `<div class="card center"><div class="big-ic">${st.avatar}</div><h1>${esc(st.name)}</h1><p>Founder of <b>${esc(st.company)}</b></p><p class="score">${r[2]} ${r[1]}</p><p>${st.xp} XP${nx ? ` · ${nx[0] - st.xp} XP to ${nx[1]}` : ' · top rank!'}</p></div>
      <h2 class="sec">🏅 Badges</h2><div class="grid3">${BADGES.map(b => `<div class="tile badge ${st.badges.includes(b[0]) ? 'got' : 'locked'}"><span>${b[2]}</span><b>${b[1]}</b><small>${b[3]}</small></div>`).join('')}</div>
      <h2 class="sec">📊 Progress</h2><div class="card">${GD.chapters.map(c => `<div class="prow"><span>${c.icon} ${c.title}</span><span class="stars">${stars(chapterStars(c))}</span><span class="pbar"><i style="width:${chapterPct(c)}%"></i></span></div>`).join('')}</div>
      <div class="row"><button class="btn ghost danger" data-act="reset">Reset all progress</button></div>`;
  };

  /* ---------------------------------------------------------------- mini-games */
  const finish = (el, p, extra, msg) => { el.innerHTML = `<div class="center"><p class="score">${Math.round(p * 100)}%</p><p class="bigstars">${stars(starsFor(p))}</p>${msg || ''}${extra}</div>`; };
  const Games = {
    sort(el, g, done) {
      const items = shuffle(g.items); let i = 0, ok = 0, streak = 0; const miss = [];
      const show = () => {
        if (i >= items.length) return finish(el, ok / items.length, done(ok / items.length), miss.length ? `<div class="review"><b>Worth another look:</b><ul>${miss.map(m => `<li>${m[0]} → <b>${g.bins[m[1]]}</b></li>`).join('')}</ul></div>` : '<p>Perfect sorting!</p>');
        el.innerHTML = `<div class="sortgame"><div class="qtop"><small>${i + 1} / ${items.length} · streak ${streak} 🔥</small><span class="pbar"><i style="width:${i / items.length * 100}%"></i></span></div><div class="sortcard" id="sc">${items[i][0]}</div><div class="bins n${g.bins.length}">${g.bins.map((b, k) => `<button class="bin" data-k="${k}">${b}</button>`).join('')}</div></div>`;
        el.querySelectorAll('.bin').forEach(b => b.onclick = () => {
          const right = +b.dataset.k === items[i][1]; el.querySelectorAll('.bin').forEach(x => { x.disabled = true; if (+x.dataset.k === items[i][1]) x.classList.add('right'); });
          if (right) { ok++; streak++; document.getElementById('sc').classList.add('flyok'); } else { streak = 0; miss.push(items[i]); b.classList.add('wrong'); document.getElementById('sc').classList.add('shake'); }
          setTimeout(() => { i++; show(); }, right ? 520 : 1300);
        });
      };
      show();
    },
    order(el, g, done) {
      const pool = shuffle(g.steps.map((s, k) => k)); let next = 0, mistakes = 0;
      const draw = () => {
        el.innerHTML = `<div class="ordergame"><ol class="placed">${g.steps.slice(0, next).map(s => `<li>${s}</li>`).join('')}${next < g.steps.length ? `<li class="slot">Step ${next + 1}: tap the right card below</li>` : ''}</ol><div class="pool">${pool.filter(k => k >= next).map(k => `<button class="chip" data-k="${k}">${g.steps[k]}</button>`).join('')}</div><small class="muted">Mistakes: ${mistakes}</small></div>`;
        el.querySelectorAll('.chip').forEach(b => b.onclick = () => {
          if (+b.dataset.k === next) { next++; if (next >= g.steps.length) { const p = clamp(1 - mistakes / g.steps.length, 0, 1); return finish(el, p, done(p), `<ol class="placed done">${g.steps.map(s => `<li>${s}</li>`).join('')}</ol>`); } draw(); }
          else { mistakes++; b.classList.add('shake', 'wrong'); setTimeout(() => b.classList.remove('shake', 'wrong'), 600); el.querySelector('small').textContent = 'Mistakes: ' + mistakes; }
        });
      };
      draw();
    },
    match(el, g, done) {
      const L = shuffle(g.pairs.map((p, k) => k)), R = shuffle(g.pairs.map((p, k) => k)); let sel = null, found = 0, mistakes = 0;
      el.innerHTML = `<div class="matchgame"><div class="col">${L.map(k => `<button class="chip l" data-k="${k}">${g.pairs[k][0]}</button>`).join('')}</div><div class="col">${R.map(k => `<button class="chip r" data-k="${k}">${g.pairs[k][1]}</button>`).join('')}</div></div><small class="muted">Tap one on the left, then its partner on the right.</small>`;
      el.querySelectorAll('.chip.l').forEach(b => b.onclick = () => { el.querySelectorAll('.chip.l').forEach(x => x.classList.remove('sel')); b.classList.add('sel'); sel = b; });
      el.querySelectorAll('.chip.r').forEach(b => b.onclick = () => {
        if (!sel) { toast('Pick one on the left first'); return; }
        if (sel.dataset.k === b.dataset.k) { [sel, b].forEach(x => { x.classList.remove('sel'); x.classList.add('right', 'm' + (found % 6)); x.disabled = true; }); sel = null; found++;
          if (found === g.pairs.length) setTimeout(() => { const p = clamp(1 - mistakes / (g.pairs.length * 2), 0, 1); finish(el, p, done(p), `<ul class="review plain">${g.pairs.map(x => `<li><b>${x[0]}</b>: ${x[1]}</li>`).join('')}</ul>`); }, 600); }
        else { mistakes++; b.classList.add('shake', 'wrong'); setTimeout(() => b.classList.remove('shake', 'wrong'), 600); }
      });
    },
    spot(el, g, done) {
      const total = g.doc.filter(d => d[1]).length; let found = 0, misses = 0;
      el.innerHTML = `<div class="spotgame"><div class="qtop"><small id="sp">Found 0 of ${total}</small><button class="btn ghost small" id="giveup">Reveal the rest</button></div><pre class="doc">${g.doc.map((d, k) => `<span class="seg" data-k="${k}" tabindex="0" role="button">${esc(d[0])}</span>`).join('')}</pre><ul class="found" id="fl"></ul></div>`;
      const end = () => { const p = clamp((found - misses * 0.25) / total, 0, 1); el.querySelectorAll('.seg').forEach(x => { const d = g.doc[+x.dataset.k]; if (d[1] && !x.classList.contains('hit')) { x.classList.add('missed'); document.getElementById('fl').insertAdjacentHTML('beforeend', `<li class="m">🔎 <b>${esc(d[0].trim())}</b>: ${d[2]}</li>`); } x.onclick = null; });
        document.getElementById('giveup').remove(); el.insertAdjacentHTML('beforeend', `<div class="center"><p class="score">${Math.round(p * 100)}%</p>${done(p)}</div>`); };
      el.querySelectorAll('.seg').forEach(x => { const act = () => { const d = g.doc[+x.dataset.k]; if (x.classList.contains('hit')) return;
        if (d[1]) { x.classList.add('hit'); found++; document.getElementById('sp').textContent = `Found ${found} of ${total}`; document.getElementById('fl').insertAdjacentHTML('beforeend', `<li>🚩 <b>${esc(d[0].trim())}</b>: ${d[2]}</li>`); if (found === total) end(); }
        else { misses++; x.classList.add('shake'); setTimeout(() => x.classList.remove('shake'), 500); } };
        x.onclick = act; x.onkeydown = e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); act(); } }; });
      document.getElementById('giveup').onclick = end;
    }
  };

  /* ---------------------------------------------------------------- calculators */
  const corpTax = p => p <= 0 ? 0 : p <= 50000 ? p * 0.19 : p >= 250000 ? p * 0.25 : p * 0.25 - (250000 - p) * 3 / 200;
  function payCalc(g) {
    const pa = g <= 100000 ? 12570 : Math.max(0, 12570 - (g - 100000) / 2);
    const pension = g > 10000 ? Math.max(0, Math.min(g, 50270) - 6240) * 0.05 : 0;
    const band = (lo, hi) => Math.max(0, Math.min(g, hi) - lo);
    const basicTop = pa + 37700;
    const tax = band(pa, basicTop) * 0.2 + band(basicTop, 125140) * 0.4 + band(125140, Infinity) * 0.45;
    const ni = band(12570, 50270) * 0.08 + band(50270, Infinity) * 0.02;
    const erNi = Math.max(0, g - 5000) * 0.15, erPen = g > 10000 ? Math.max(0, Math.min(g, 50270) - 6240) * 0.03 : 0;
    return { tax, ni, pension, net: g - tax - ni - pension, erNi, erPen };
  }
  const slider = (id, label, min, max, step, val) => `<label class="sl">${label}: <b id="${id}-v"></b><input type="range" id="${id}" min="${min}" max="${max}" step="${step}" value="${val}"></label>`;
  const num = (id, label, val, step = 1) => `<label class="nm">${label}<input type="number" id="${id}" value="${val}" step="${step}" min="0" inputmode="decimal"></label>`;
  const outRows = rows => `<table class="out">${rows.map(r => `<tr class="${r[2] || ''}"><td>${r[0]}</td><td>${r[1]}</td></tr>`).join('')}</table>`;
  const Tools = {
    mount(name, el) { if (!el || !Tools[name]) return; const uid = name + Math.random().toString(36).slice(2, 7); Tools[name](el, uid); },
    corptax(el, u) {
      el.innerHTML = slider(u, 'Company profit', 0, 400000, 1000, 60000) + `<div id="${u}-o"></div>`;
      const go = () => { const p = +el.querySelector('input').value, t = corpTax(p); el.querySelector('b').textContent = gbp(p);
        el.querySelector(`#${u}-o`).innerHTML = `<div class="split"><i style="width:${p ? t / p * 100 : 0}%"></i></div>` + outRows([['Corporation Tax', gbp(t), 'bad'], ['Effective rate', (p ? t / p * 100 : 0).toFixed(1) + '%'], ['Profit after tax', gbp(p - t), 'good'], ['Band', p <= 50000 ? 'Small profits rate (19%)' : p >= 250000 ? 'Main rate (25%)' : 'Marginal relief zone']]); };
      el.querySelector('input').oninput = go; go();
    },
    takehome(el, u) {
      el.innerHTML = slider(u, 'Yearly salary', 0, 150000, 500, 30000) + `<div id="${u}-o"></div>`;
      const go = () => { const g = +el.querySelector('input').value, c = payCalc(g); el.querySelector('b').textContent = gbp(g);
        const seg = (v, cl) => `<i class="${cl}" style="width:${g ? v / g * 100 : 0}%"></i>`;
        el.querySelector(`#${u}-o`).innerHTML = `<div class="split multi">${seg(c.net, 'c1')}${seg(c.tax, 'c2')}${seg(c.ni, 'c3')}${seg(c.pension, 'c4')}</div>` + outRows([['Income Tax', gbp(c.tax), 'c2k'], ['National Insurance', gbp(c.ni), 'c3k'], ['Pension (5% of qualifying earnings)', gbp(c.pension), 'c4k'], ['Take-home per year', gbp(c.net), 'good'], ['Take-home per month', gbp(c.net / 12), 'good'], ['Extra cost to the employer (15% NI + 3% pension)', gbp(c.erNi + c.erPen), 'bad'], ['Total cost of this employee', gbp(g + c.erNi + c.erPen)]]); };
      el.querySelector('input').oninput = go; go();
    },
    vat(el, u) {
      el.innerHTML = `<div class="frow">${num(u + 'p', 'Price before VAT (£)', 100, 0.01)}<label class="nm">VAT rate<select id="${u}r"><option value="20">20% standard</option><option value="5">5% reduced</option><option value="0">0% zero rate</option></select></label>${num(u + 'c', 'VAT you paid on costs (£)', 8, 0.01)}</div><div id="${u}-o"></div>`;
      const go = () => { const p = +el.querySelector(`#${u}p`).value || 0, r = +el.querySelector(`#${u}r`).value, c = +el.querySelector(`#${u}c`).value || 0, v = p * r / 100;
        el.querySelector(`#${u}-o`).innerHTML = outRows([['VAT you charge (output VAT)', gbp2(v)], ['Customer pays', gbp2(p + v), 'good'], ['VAT you reclaim (input VAT)', gbp2(c)], [v - c >= 0 ? 'You pay HMRC' : 'HMRC refunds you', gbp2(Math.abs(v - c)), 'bad']]); };
      el.querySelectorAll('input,select').forEach(x => x.oninput = go); go();
    },
    minwage(el, u) {
      el.innerHTML = `<div class="frow"><label class="nm">Worker<select id="${u}a"><option value="8">Under 18</option><option value="8">Apprentice (under 19 or first year)</option><option value="10.85">Age 18 to 20</option><option value="12.71" selected>Age 21 or over</option></select></label>${num(u + 'h', 'Hours actually worked this week', 20, 0.25)}${num(u + 'p', 'Pay received this week (£)', 240, 0.01)}${num(u + 'd', 'Deducted for uniform or tools (£)', 0, 0.01)}</div><div id="${u}-o"></div>`;
      const go = () => { const r = +el.querySelector(`#${u}a`).value, h = +el.querySelector(`#${u}h`).value || 0, p = +el.querySelector(`#${u}p`).value || 0, d = +el.querySelector(`#${u}d`).value || 0, eff = h ? (p - d) / h : 0, ok = eff >= r;
        el.querySelector(`#${u}-o`).innerHTML = outRows([['Legal minimum per hour', gbp2(r)], ['Real hourly pay after deductions', gbp2(eff), ok ? 'good' : 'bad'], [ok ? '✅ At or above the minimum' : '🚩 Underpaid this week by', ok ? '' : gbp2((r - eff) * h), ok ? 'good' : 'bad']]); };
      el.querySelectorAll('input,select').forEach(x => x.oninput = go); go();
    },
    breakeven(el, u) {
      el.innerHTML = `<div class="frow">${num(u + 'f', 'Fixed costs per month (£)', 500)}${num(u + 'p', 'Selling price each (£)', 10, 0.01)}${num(u + 'v', 'Variable cost each (£)', 5, 0.01)}</div><div id="${u}-o"></div>`;
      const go = () => { const f = +el.querySelector(`#${u}f`).value || 0, p = +el.querySelector(`#${u}p`).value || 0, v = +el.querySelector(`#${u}v`).value || 0, m = p - v;
        el.querySelector(`#${u}-o`).innerHTML = m <= 0 ? `<p class="bad">You lose money on every sale. Raise the price or cut the cost.</p>` : outRows([['Profit per unit (contribution)', gbp2(m)], ['Gross margin', (m / p * 100).toFixed(0) + '%'], ['Units to break even', Math.ceil(f / m).toLocaleString(), 'good'], ['Sales needed to break even', gbp(Math.ceil(f / m) * p)]]); };
      el.querySelectorAll('input').forEach(x => x.oninput = go); go();
    },
    dilution(el, u) {
      el.innerHTML = `<div class="frow">${num(u + 'v', 'Pre-money valuation (£)', 400000, 1000)}${num(u + 'i', 'Investment (£)', 100000, 1000)}${num(u + 's', 'Your share before (%)', 100)}</div><div id="${u}-o"></div>`;
      const go = () => { const v = +el.querySelector(`#${u}v`).value || 0, i = +el.querySelector(`#${u}i`).value || 0, s = clamp(+el.querySelector(`#${u}s`).value || 0, 0, 100), post = v + i, inv = post ? i / post * 100 : 0, you = s * (1 - inv / 100);
        el.querySelector(`#${u}-o`).innerHTML = `<div class="split multi"><i class="c1" style="width:${you}%"></i><i class="c2" style="width:${inv}%"></i></div>` + outRows([['Post-money valuation', gbp(post)], ['Investor owns', inv.toFixed(1) + '%', 'c2k'], ['You own', you.toFixed(1) + '%', 'good'], ['Your stake is worth', gbp(post * you / 100), 'good']]); };
      el.querySelectorAll('input').forEach(x => x.oninput = go); go();
    },
    deadlines(el, u) {
      const y = new Date().getFullYear();
      el.innerHTML = `<label class="nm">Your company's financial year end<input type="date" id="${u}d" value="${y}-03-31"></label><div id="${u}-o"></div>`;
      const fmt = d => d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
      const addM = (d, m) => { const lastDay = new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate() === d.getDate(); const r = new Date(d.getFullYear(), d.getMonth() + m, 1); const dim = new Date(r.getFullYear(), r.getMonth() + 1, 0).getDate(); r.setDate(lastDay ? dim : Math.min(d.getDate(), dim)); return r; };
      const go = () => { const d = new Date(el.querySelector('input').value + 'T12:00:00'); if (isNaN(d)) return; const pay = addM(d, 9); pay.setDate(pay.getDate() + 1);
        el.querySelector(`#${u}-o`).innerHTML = outRows([['📊 Accounts to Companies House', fmt(addM(d, 9))], ['💷 Pay Corporation Tax', fmt(pay), 'bad'], ['🧾 Company Tax Return to HMRC', fmt(addM(d, 12))]]) + `<p class="muted">Assumes a normal 12-month period for a private company that is not in its first year. Larger companies pay tax in instalments.</p>`; };
      el.querySelector('input').oninput = go; go();
    }
  };

  /* ---------------------------------------------------------------- router + events */
  function route() {
    const h = (location.hash || '#home').slice(1).split('/');
    if (!st.name) { renderHud(); renderNav(''); return V.start(); }
    const name = V[h[0]] ? h[0] : 'home';
    renderHud(); renderNav({ chapter: 'home', case: 'cases', story: 'stories' }[name] || name);
    V[name](h[1], h[2], h[3]); checkBadges();
    if (!(name === 'chapter' && h[2] === 'learn' && h[3] != null)) window.scrollTo(0, 0);
    document.getElementById('app').focus({ preventScroll: true });
  }
  document.addEventListener('click', e => {
    const b = e.target.closest('[data-act]'); if (!b) return; const a = b.dataset.act;
    if (a === 'replay') document.getElementById('animbox').innerHTML = Anim.render(b.dataset.anim);
    else if (a === 'reload') route();
    else if (a === 'print') window.print();
    else if (a === 'reset') { if (confirm('Reset all progress and start a new company?')) { st = fresh(); save(); location.hash = ''; route(); } }
  });
  window.addEventListener('hashchange', route);
  route();
})();
