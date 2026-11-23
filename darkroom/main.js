/* ═════════ Content (carried over from the live site) ═════════ */
const EMAIL = 'rbkshesh@gmail.com';

const SKILLS = ['Python','C++','Java','JavaScript','Lua','QBASIC','Ruby','SQL','NumPy','Pandas','Matplotlib','Flask','Django','PyTorch','TensorFlow','Probability','Discrete Maths','DSA','Web Dev'];

const USES = [
  ['Laptop','Lenovo ThinkPad X1 Carbon Aura Edition, 32 GB RAM, Intel Core i7'],
  ['Headphones','AirPods Pro, Logitech Zone 300 (wireless)'],
  ['Phone','iPhone 11 Pro'],
  ['Watch','Garmin Forerunner 55'],
  ['Keys and mouse','Logitech MX Keys and MX Mouse'],
  ['Webcam','Laptop camera and a Logitech webcam'],
];

// [role, org, dates, description, current?]
const EXP = [
  ['Sales and AI GTM Intern','Ninad AI','Nov 2026 – now','Working on sales and go-to-market for AI products.',1],
  ['AI Safety Research Fellow','Algoverse','Jun – Sep 2026','Selected for an intensive 4-month research cohort mentored by engineers from MAANG and researchers from MIT, Stanford, Caltech, UCLA and ETH Zurich.'],
  ['Director, India Chapter','Edunomix Institute','Sep 2025 – now','Earlier an Econometrics Researcher. Building a course of problem sets from technical rounds of tier 1 trading firms and investment banks: probability, system design and competitive programming.',1],
  ['Director of Research and Development','Kronos','May – Aug 2026','Training a supervised ML model on NASA, SpaceX and ISRO data to simulate planetary conditions, with AR/VR deployment planned. Ran merit-based selection of all core team members and leads.'],
  ['Technical Writer','Scinergy Journal','Jun 2026 – now','Student-led STEM publication making science communication accessible.',1],
  ['PRIMES CrowdMath Contributor','MIT','Jul – Aug 2026','Contributed to the collaborative online research project.'],
  ['Student Researcher','The New York Academy of Sciences','Aug – Oct 2025','Heliogrid: modelling solar irradiance and its impact on atmospheric ozone. Literature review, computational framework and the co-authored proposal.'],
  ['Prompt Engineer and Front-end Lead','CodingEquity','Oct – Dec 2025','Designed prompts and commercial websites and led the front-end team.'],
  ['Full Stack Developer','Inkessence','Jun – Aug 2025','Built the publishing and purchasing platform for early-stage authors, plus the ML model supervising its growth.'],
  ['President, PhySoc','Physics Society, DPS R.K. Puram','Jul 2023 – May 2026','Led 130+ members and 6 departmental heads, ran the Physium event and the Phyzard magazine, and mentored juniors for OPhO and Physics Cup. Earlier head of Research and Question Paper Design (50+ interviews).'],
  ['Senior Member','CyberX, DPS R.K. Puram','Jul 2025 – May 2026','Cryptic hunts and CTFs (50th twice in Sudocrypt out of 300+), and the cybersecurity maths paper.'],
  ['Senior Member','Digex, DPS R.K. Puram','Aug 2025 – May 2026','Back-end framework for the club website plus volunteering at events.'],
  ['Core Tabla Player and Beatboxer','Indian Instrumental Club','Apr 2019 – May 2026','Lead tabla at SUPW showcase, beatboxing duet, and a fusion song at the Class 12 Scholar Badge ceremony.'],
  ['Certified Tutor','NTHS Chapter 001','Jun 2026 – now','Volunteer tutoring.',1],
];

const PROG = ['IBM Qiskit Global Summer School','Atlas Financial Literacy Summer Program','GLT Virtual Summer Program (Girls Leading Tech)','Restless Dreamers Summer Fellowship','International Summer School, New Delhi','Harvard Ventures TECH Summer Program','Inspirit AI Scholar’s Program','IMUN Campus Ambassador Internship','YRI Research Fellowship'];
const CERT = ['Fourier Transformation and its Applications (Stanford)','Introduction to Mathematical Thinking (Stanford)','Understanding Einstein: Special Relativity (Stanford)','Algorithms (Princeton)','ParagonX: combinatorics, graph theory, stat mech, electromagnetism'];

const PROJECTS = [
  ['HaptiBraille','Braille you can feel through your phone','3rd place at CodeDay Bengaluru Regionals. A Flutter app that turns any text into Temporal Vibrotactile Braille, playing each cell’s six dots as timed taps on the phone’s single vibration motor, so it reads privately with no sound, no screen and no extra hardware. Includes speech-to-vibration and a 3-level training course. I was responsible for end-to-end prototype development and presentation.',['Flutter','Dart','Kotlin','Accessibility'],'https://github.com/rbksh/HaptiBraille','Oct – Nov 2026'],
  ['BenchRank','Low-latency trading infrastructure','Distributed benchmarking and hosting platform built for the IICPC Summer Hackathon 2026. Contestants deploy matching engines in isolated containers; a bot fleet stress-tests them while a live leaderboard streams latency, throughput and correctness.',['TypeScript','Docker','Telemetry','Distributed systems'],'https://github.com/rbksh/benchrank','May – Jun 2026'],
  ['Rasoi Saathi','Smart kitchen assistant','Built purely with LLMs for the Wispr Flow x Lovable AI Hackathon. Design menus, pick meals and browse 200+ traditional Indian recipes, with preferences and allergies customisable at every step.',['LLMs','Prompt engineering'],null,'May 2026'],
  ['nomex','IUPAC name generator','Enter a compound’s details or common name and get its IUPAC name. Python backend, React frontend (prototype, frontend still in production).',['Python','React','Chemistry'],'https://github.com/rbksh/nomex','Sep – Oct 2025'],
  ['ribock','Roadmap generator for competitive programmers','Turns your current rating on any recognised CP platform into an ordered roadmap of practice targets for ICPC, interview prep or general problem solving. Currently in production.',['Python','Front-end','CP'],'https://github.com/rbksh/ribock','In progress'],
  ['terra','Personalised AI assistant','Lightweight desktop assistant using pyttsx3 for speech and smtplib for email automation. Gets your daily entertainment quota done without touching your computer.',['Python','pyttsx3','smtplib'],'https://github.com/rbksh/Jarvis.py','Sep – Oct 2021'],
];

const PAPERS = [
  ['Beyond Constant Volatility: Integrating Jump-Diffusion and Advanced Integration Techniques into the Black-Scholes-Merton Framework for an Option Pricing Model','Youth Economy Lab, IJRASET','May 2026','Research proposal for the YEL Student Scholars Contest (with Synthica) on improving Black-Scholes-Merton accuracy using Merton’s jump-diffusion and stochastic volatility to capture volatility smiles and discontinuous price paths.','black-scholes-jump-diffusion.pdf'],
  ['You can feel the heat, but can you measure it?','American Journal of Physics, IJRASET, Young Scientists Journal, Substack, Medium','Apr 2026','Expository paper separating heat from temperature using kinetic theory, varying thermal conductivity and energy exchange rates, and showing why objects at equal temperature feel different.','heat-and-temperature.pdf','heat-and-temperature-abstract.pdf'],
  ['Unlocking the Mathematical Code behind Cybersecurity','CyberX, DPS R.K. Puram','Aug 2025','Shortlisted for the CBSE National Cyber-Security Awareness Competition. How hashing and encryption lean on permutations and combinations, linear algebra and matrix multiplication.','math-behind-cybersecurity.pdf'],
  ['Unlocking the Mysteries of Interstellar Time Travel','Phyzard, DPS R.K. Puram, Medium','Jan 2024','Conceptual analysis of the relativistic and thermodynamic limits on interstellar travel timescales, starting from Kip Thorne’s closed timelike curves and Nolan’s Interstellar.','interstellar-time-travel.pdf'],
];

const HONORS = [
  ['Academic',['Principal’s Gold Medal, 7 consecutive years','Principal’s Blue Tie, 6 years','Principal’s Blue Blazer, 5 years','Principal’s Scholar Badge','Class Rank 2 in Mathematics and overall, AISSE (10th)','100% scholarship, Big Bang Edge exam (FIITJEE)']],
  ['Science and computing',['High honours, Online Physics Olympiad (OPhO)','Qualified the Semi-Final Round of IPhyC (International Physics Competition) with special honours and exceptional submission','Selected for IICPC Summer Trading Project','Won YRI abstract writing contest, 50% research fellowship scholarship','Semi-finalist, Global Quantum Mechanics Challenge (special honours)','Selected for Harvard Ventures TECH Summer Program','Inspirit AI Scholar’s Program (ML and generative AI)','Restless Dreamers Summer Cohort and YRI Research Fellowship','Student Researcher, NY Academy of Sciences Junior Academy','Semi-finalist, International Computer Science Competition','International Summer School, New Delhi (100% scholarship)','Girls Leading Tech / Hogwartz program (20% fee waiver)','Contributor, MIT PRIMES CrowdMath','Rank 7 of 122 teams, BrainRot’26 (SST)','Pre-final round, International Youth Math Challenge (special honours)','3rd place of 70+ teams, CodeDay Bengaluru Regionals']],
  ['Stage and studio',['CBSE Science Challenge, 1 of 300+ students','1st, Annual Open Mic Festival (Govt of NCT Delhi)','Calligraphy Level 3 Scholar and canvas/pencil shading excellence (Delhi Govt)','Excellence in tabla and beatboxing (DPS Noida, East Delhi)','A Grade Scholar, Level 3 Abacus']],
  ['Water and court',['2× 3rd, relay finals, National Swimming Championship','3rd, freestyle finals, Nationals (UP)','2× 4th each in butterfly, freestyle and relay, Khelo India Inter-State','3rd freestyle and 4th breaststroke, YMCA Swimming Meet','1st, Croma Battle of the Shuttle (district badminton)','Orange belt in karate']],
];

/* ═════════ Helpers ═════════ */
const $ = s => document.querySelector(s);
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const pad2 = n => String(n).padStart(2, '0');

/* ═════════ The darkroom ═════════ */
(() => {
  const dark = $('#top'), print = $('#latent'), btn = $('#develop');
  let travelled = 0, last = null, done = false;
  const develop = () => {
    if (done) return; done = true;
    dark.classList.add('developed');
    $('#bar').classList.add('show');
    setTimeout(() => print.classList.add('bare'), reduce ? 0 : 3000);
  };
  const supportsMask = CSS.supports('mask-image', 'radial-gradient(#000,transparent)') || CSS.supports('-webkit-mask-image', 'radial-gradient(#000,transparent)');
  if (reduce || !supportsMask) { develop(); return; }
  // start the light somewhere slightly off-centre, on the name
  const aim = () => { if (done) return; const b = print.getBoundingClientRect(); print.style.setProperty('--x', b.width * (innerWidth < 860 ? .5 : .4) + 'px'); print.style.setProperty('--y', b.height * .36 + 'px'); };
  aim(); addEventListener('resize', aim);
  dark.addEventListener('pointermove', e => {
    if (done) return;
    const b = print.getBoundingClientRect();
    print.style.setProperty('--x', (e.clientX - b.left) + 'px');
    print.style.setProperty('--y', (e.clientY - b.top) + 'px');
    if (last) travelled += Math.hypot(e.clientX - last[0], e.clientY - last[1]);
    last = [e.clientX, e.clientY];
    // enough light has fallen on the paper: the image comes up by itself
    if (travelled > Math.max(innerWidth, innerHeight) * 4) develop();
  });
  btn.addEventListener('click', develop);
  addEventListener('scroll', () => { if (scrollY > innerHeight * .25) develop(); }, { passive: true });
  addEventListener('keydown', e => { if (e.key === 'Enter' && document.activeElement === document.body) develop(); });
})();

/* header appears once you leave the darkroom */
addEventListener('scroll', () => { if (scrollY > innerHeight * .6) $('#bar').classList.add('show'); }, { passive: true });

/* ═════════ Who ═════════ */
$('#skills').textContent = SKILLS.join(', ');
$('#uses').innerHTML = USES.map(u => `<dt>${u[0]}</dt><dd>${u[1]}</dd>`).join('');
$('#prog').textContent = PROG.join(', ') + '.';
$('#cert').textContent = CERT.join(', ') + '.';

/* photos develop when they reach the light */
if ('IntersectionObserver' in window && !reduce) {
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: .35 });
  document.querySelectorAll('.develops').forEach(el => io.observe(el));
} else document.querySelectorAll('.develops').forEach(el => el.classList.add('in'));

/* test strip: tap to toggle the kept print (touch has no hover) */
document.querySelector('.strip')?.addEventListener('click', e => e.currentTarget.classList.toggle('kept'));

/* nav: mark the section in view */
{
  const links = [...document.querySelectorAll('.bar nav a')];
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting) links.forEach(a => a.classList.toggle('on', a.getAttribute('href') === '#' + e.target.id));
    }), { rootMargin: '-45% 0px -50% 0px' });
    document.querySelectorAll('main .sec[id]').forEach(s => io.observe(s));
  }
}

/* ═════════ Seals: three hidden, one room ═════════ */
const SEALS = { found: new Set(), total: 3 };
const makeSeal = id => `<button type="button" class="seal" data-seal="${id}" aria-label="A red seal. Collect it.">शेष</button>`;
document.addEventListener('click', e => {
  const s = e.target.closest('.seal'); if (!s) return;
  e.stopPropagation();
  SEALS.found.add(s.dataset.seal); s.classList.add('taken');
  const n = SEALS.found.size, out = $('#sealsFound');
  out.hidden = false; out.textContent = `${n} of ${SEALS.total} seals`;
  $('#bar').classList.add('show');
  if (n === SEALS.total) setTimeout(() => window.ROOMS && ROOMS.unlock('remains', { open: true }), 700);
}, true);

/* ═════════ Work: the contact sheet ═════════ */
(() => {
  const sheet = $('#sheet'), loupe = $('#loupe'), rw = $('#rewind');
  let reversed = false, openIdx = null;
  const circle = '<svg class="circle" viewBox="0 0 100 70" preserveAspectRatio="none" aria-hidden="true"><ellipse cx="50" cy="35" rx="47" ry="31" transform="rotate(-3 50 35)"/></svg>';
  const render = () => {
    const order = EXP.map((e, i) => i); if (reversed) order.reverse();
    const leader = `<div class="frame leader" aria-hidden="false"><span class="edge"><span>SHESH 400</span><span>00</span></span><span class="pic"><span>leader</span></span><span class="edge"><span>▸</span>${makeSeal('leader').replace('class="seal"', 'class="seal" style="width:1.4rem;height:1.4rem;font-size:.7rem"')}</span></div>`;
    sheet.innerHTML = (reversed ? '' : leader) + order.map(i => {
      const e = EXP[i], n = EXP.length - i; // oldest roles get the low frame numbers
      return `<button type="button" class="frame" data-i="${i}" aria-expanded="${openIdx === i}" aria-controls="loupe">
        <span class="edge"><span>SHESH 400</span><span>${pad2(n)}A</span></span>
        <span class="pic"><b>${e[0]}</b><i>${e[1]}</i><small>${e[2]}</small></span>
        <span class="edge"><span>▸ ${pad2(n)}</span><span>${pad2(n + 1)}</span></span>
        ${e[4] ? circle : ''}
      </button>`;
    }).join('') + (reversed ? leader : '');
  };
  const show = i => {
    openIdx = i; const e = EXP[i];
    loupe.innerHTML = `<p class="l-role">${e[0]}</p><p class="l-meta">${e[1]}, ${e[2]}${e[4] ? '. Still being shot.' : ''}</p><p>${e[3]}</p>`;
    loupe.classList.remove('flash'); void loupe.offsetWidth; loupe.classList.add('flash');
    sheet.querySelectorAll('.frame[data-i]').forEach(f => f.setAttribute('aria-expanded', f.dataset.i == i));
    if (innerWidth < 860) loupe.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'center' });
  };
  sheet.addEventListener('click', e => { const f = e.target.closest('.frame[data-i]'); if (f) show(+f.dataset.i); });
  rw.addEventListener('click', () => {
    reversed = !reversed; rw.setAttribute('aria-pressed', reversed);
    rw.textContent = reversed ? 'Play it forwards' : 'Wind the film back';
    const leaderTaken = SEALS.found.has('leader');
    render(); if (leaderTaken) sheet.querySelector('[data-seal="leader"]')?.remove();
  });
  render();
  loupe.innerHTML = '<p class="l-empty">Pick a frame to look at it under the loupe.</p>';
})();

/* ═════════ Made: prints on the line ═════════ */
$('#prints').innerHTML = PROJECTS.map((p, i) => `
  <article class="pr" style="--rot:${[-1.2, .9, -.5, 1.3, -1, .6][i % 6]}deg">
    <h3>${p[0]}</h3>
    <p class="sub">${p[1]}</p>
    <p>${p[2]}</p>
    <p class="tools">Made with ${p[3].join(', ')}</p>
    <div class="meta">${p[4] ? `<a href="${p[4]}" target="_blank" rel="noopener">Source on GitHub</a>` : `<span class="pending">Repository coming soon</span>`}<span>${p[5]}</span></div>
    ${i === PROJECTS.length - 1 ? makeSeal('print') : ''}
  </article>`).join('');

/* ═════════ Writing ═════════ */
$('#essays').innerHTML = PAPERS.map(p => `
  <article class="essay">
    <p class="when"><b>${p[2]}</b>${p[1]}</p>
    <div>
      <h3>${p[0]}</h3>
      <p>${p[3]}</p>
      <p class="links"><a href="../assets/pdf/${p[4]}" target="_blank" rel="noopener">Read the paper (PDF)</a>${p[5] ? `<a href="../assets/pdf/${p[5]}" target="_blank" rel="noopener">Abstract only</a>` : ''}</p>
    </div>
  </article>`).join('');

/* ═════════ Archive ═════════ */
$('#drawers').innerHTML = HONORS.map(([k, v], i) => `
  <details class="drawer">
    <summary><span class="pull" aria-hidden="true"></span><span class="tag">${k}</span><span class="count">${pad2(v.length)} negatives</span></summary>
    <ul>${v.map(x => `<li${/\b4th\b/.test(x) ? ' class="fourth"' : ''}>${x.replace(/\b4th\b/g, '<button type="button" class="fourth-btn" aria-label="4th. Open lane four">4th</button>')}</li>`).join('')}</ul>
    ${i === HONORS.length - 1 ? makeSeal('drawer') : ''}
  </details>`).join('');

/* ═════════ Sound: one small synth shared by every room ═════════ */
const SYN = (() => {
  let AC = null, noise = null;
  const ctx = () => {
    if (!AC) {
      AC = new (window.AudioContext || window.webkitAudioContext)();
      noise = AC.createBuffer(1, AC.sampleRate * .5, AC.sampleRate);
      const d = noise.getChannelData(0); for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
    }
    if (AC.state === 'suspended') AC.resume();
    return AC;
  };
  const tone = (type, f0, f1, dur, gain, t) => {
    const a = AC, o = a.createOscillator(), g = a.createGain();
    o.type = type; o.frequency.setValueAtTime(f0, t); o.frequency.exponentialRampToValueAtTime(f1, t + dur * .8);
    g.gain.setValueAtTime(gain, t); g.gain.exponentialRampToValueAtTime(.0008, t + dur);
    o.connect(g); g.connect(a.destination); o.start(t); o.stop(t + dur + .05);
  };
  const hiss = (fType, freq, dur, gain, t) => {
    const a = AC, s = a.createBufferSource(), f = a.createBiquadFilter(), g = a.createGain();
    s.buffer = noise; f.type = fType; f.frequency.value = freq; f.Q.value = 1.2;
    g.gain.setValueAtTime(gain, t); g.gain.exponentialRampToValueAtTime(.0008, t + dur);
    s.connect(f); f.connect(g); g.connect(a.destination); s.start(t); s.stop(t + dur + .05);
  };
  const ring = (gain, dur, t) => { tone('sine', 523, 520, dur, gain, t); tone('sine', 1046, 1040, dur * .6, gain * .35, t); hiss('bandpass', 3200, .03, gain * .5, t); };
  const SOUND = {
    Dha:  t => { ring(.32, .45, t); tone('sine', 110, 72, .55, .55, t); },
    Dhin: t => { ring(.26, .6, t); tone('sine', 104, 70, .65, .45, t); tone('sine', 1568, 1560, .25, .05, t); },
    Na:   t => ring(.38, .3, t),
    Tin:  t => { tone('sine', 523, 520, .45, .22, t); tone('sine', 1569, 1565, .3, .06, t); },
    Ge:   t => { tone('sine', 88, 132, .55, .6, t); hiss('lowpass', 300, .05, .2, t); },
    Boots:t => { tone('sine', 150, 42, .32, .9, t); hiss('lowpass', 900, .02, .3, t); },
    Ts:   t => hiss('highpass', 7000, .07, .35, t),
    Pf:   t => { hiss('bandpass', 1900, .14, .55, t); tone('triangle', 220, 160, .08, .2, t); },
  };
  const hit = (n, t) => { try { const a = ctx(); SOUND[n](t ?? a.currentTime + .005); } catch (_) {} };
  return { ctx, hit, names: Object.keys(SOUND) };
})();

/* ═════════ Taal: sawaal–jawaab ═════════ */
(() => {
  // [name, key, kind]
  const PADS = [['Dha','a','tabla'],['Dhin','s','tabla'],['Na','d','tabla'],['Tin','f','tabla'],['Ge','g','bayan'],['Boots','j','box'],['Ts','k','box'],['Pf','l','box']];
  const PHRASES = [
    ['Dha','Dhin','Dhin','Dha'],
    ['Na','Tin','Tin','Na'],
    ['Boots','Ts','Pf','Ts'],
    ['Dha','Dhin','Boots','Ts','Pf'],
    ['Ge','Na','Dha','Ge','Tin','Na'],
    ['Boots','Ts','Dha','Boots','Pf','Tin','Na'],
  ];
  const ANSWERS = [
    'I’ve played tabla since April 2019, as a core player in the school’s Indian Instrumental Club.',
    'I played lead tabla at the SUPW showcase.',
    'The beatboxing came alongside it. I’ve done a beatboxing duet on stage.',
    'At the Class 12 Scholar Badge ceremony, we played a fusion song.',
    'I won 1st place at the Annual Open Mic Festival, run by the Govt of NCT Delhi.',
    'I was recognised for excellence in tabla and beatboxing in Noida and East Delhi.',
    'You can keep time. Write me a letter and we’ll play for real.',
  ];
  const padsEl = $('#pads'), laneMe = $('#laneMe'), laneYou = $('#laneYou'), status = $('#status'), ask = $('#ask'), list = $('#unlocked');
  padsEl.innerHTML = PADS.map(([n, k, kind]) => `<button type="button" class="pad ${kind}" data-n="${n}" aria-label="${n}, key ${k.toUpperCase()}"><span class="head"></span><span class="name">${n}</span><kbd>${k.toUpperCase()}</kbd></button>`).join('');
  const padBy = n => padsEl.querySelector(`[data-n="${n}"]`);

  const play = (n, who) => {
    SYN.hit(n);
    const p = padBy(n); const c = who === 'me' ? 'hit-me' : 'hit-you';
    p.classList.remove(c); void p.offsetWidth; p.classList.add(c);
    clearTimeout(p._t); p._t = setTimeout(() => p.classList.remove(c), 160);
  };
  const chip = (lane, n, cls = '') => { const s = document.createElement('span'); s.className = 'note ' + cls; s.textContent = n; lane.appendChild(s); return s; };

  /* — the game — */
  let level = 0, phrase = null, pos = 0, mode = 'free', busy = false;
  const phraseFor = l => PHRASES[l] || Array.from({ length: 7 + (l % 2) }, () => PADS[(Math.random() * PADS.length) | 0][0]);
  const askQuestion = async () => {
    if (busy) return; busy = true; ask.disabled = true;
    if (!phrase) phrase = phraseFor(level);
    mode = 'listen'; pos = 0; laneMe.innerHTML = ''; laneYou.innerHTML = '';
    status.textContent = 'Listen.';
    const gap = 60000 / 150;
    for (const n of phrase) { play(n, 'me'); chip(laneMe, n); await new Promise(r => setTimeout(r, gap)); }
    phrase.forEach(() => chip(laneYou, '·', 'ghost-note'));
    mode = 'answer'; busy = false; ask.disabled = false; ask.textContent = 'Hear it again';
    status.textContent = `Your answer. ${phrase.length} strokes.`;
  };
  const answer = n => {
    play(n, 'you');
    if (mode !== 'answer') return;
    const slot = laneYou.children[pos];
    if (n === phrase[pos]) {
      slot.className = 'note'; slot.textContent = n; pos++;
      if (pos === phrase.length) {
        mode = 'free'; ask.disabled = false;
        const text = ANSWERS[Math.min(level, ANSWERS.length - 1)];
        if (level < ANSWERS.length) { const li = document.createElement('li'); li.textContent = text; list.appendChild(li); }
        status.textContent = level < ANSWERS.length - 1 ? 'That’s the answer. Ask again for a longer one.' : (level === ANSWERS.length - 1 ? 'That’s all of it. A room has opened: Jugalbandi.' : 'Clean. Another?');
        level++; phrase = null; ask.textContent = 'Ask the next question';
        if (level === ANSWERS.length) setTimeout(() => window.ROOMS && ROOMS.unlock('jugal', { open: true }), 1400);
      }
    } else {
      slot.className = 'note wrong'; slot.textContent = n;
      mode = 'free'; ask.disabled = false; ask.textContent = 'Hear it again';
      status.textContent = `Not quite. Stroke ${pos + 1} was ${phrase[pos]}. Listen again and answer.`;
    }
  };
  ask.addEventListener('click', askQuestion);
  padsEl.addEventListener('pointerdown', e => { const p = e.target.closest('.pad'); if (p) { e.preventDefault(); answer(p.dataset.n); } });
  padsEl.addEventListener('keydown', e => { const p = e.target.closest('.pad'); if (p && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); answer(p.dataset.n); } });

  // keyboard pads work only while the stage is on screen and you're not typing
  let inView = false;
  if ('IntersectionObserver' in window) new IntersectionObserver(([e]) => { inView = e.isIntersecting; }, { threshold: .3 }).observe($('.stage'));
  addEventListener('keydown', e => {
    if (!inView || e.repeat || e.metaKey || e.ctrlKey || e.altKey || /input|textarea/i.test(e.target.tagName)) return;
    const pad = PADS.find(p => p[1] === e.key.toLowerCase()); if (pad) { e.preventDefault(); answer(pad[0]); }
  });
})();

/* ═════════ Letter ═════════ */
(() => {
  const f = $('#form'), btn = $('#send'), msg = $('#formMsg'), stamp = $('#stamp');
  f.addEventListener('submit', async ev => {
    ev.preventDefault();
    const n = $('#cn').value.trim(), e = $('#ce').value.trim(), m = $('#cm').value.trim();
    if (!m) { msg.textContent = 'Write the letter first.'; $('#cm').focus(); return; }
    if (e && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(e)) { msg.textContent = 'That email address looks incomplete. Check it and send again.'; $('#ce').focus(); return; }
    const fallback = () => {
      msg.textContent = 'The letter couldn’t be sent from here, so your mail app is opening instead.';
      location.href = `mailto:${EMAIL}?subject=${encodeURIComponent('A letter from your website')}&body=${encodeURIComponent(m + '\n\n— ' + n + ' (' + e + ')')}`;
    };
    btn.disabled = true; btn.textContent = 'Sealing…';
    try {
      const r = await fetch('https://formsubmit.co/ajax/' + EMAIL, {
        method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ name: n || 'Anonymous', email: e || 'not provided', message: m, _subject: 'A letter from ' + (n || 'a visitor'), _replyto: e, _template: 'table', _captcha: 'false' }),
      });
      const j = await r.json().catch(() => ({}));
      if (r.ok && String(j.success) !== 'false') { stamp.classList.add('down'); msg.textContent = 'Sealed and sent. I’ll write back.'; f.reset(); }
      else fallback();
    } catch (_) { fallback(); }
    finally { btn.disabled = false; btn.textContent = 'Seal and send'; }
  });
})();

console.log('%cशेष', 'font-size:40px;color:#c42b1c', '\nThree seals are hidden on the page. One is at the very start of the film.');
