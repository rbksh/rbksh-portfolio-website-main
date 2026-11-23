/* ═══════════════════════════════════════════════════════════
   Hidden rooms. Six of them. The footer keeps the index.
   ═══════════════════════════════════════════════════════════ */
(() => {
  const $ = s => document.querySelector(s);
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const store = {
    get(k, d) { try { const v = localStorage.getItem(k); return v == null ? d : JSON.parse(v); } catch (_) { return d; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (_) {} },
  };
  const BOLS = ['Dha','Dhin','Dhin','Dha','Dha','Dhin','Dhin','Dha','Dha','Tin','Tin','Na','Na','Dhin','Dhin','Dha'];
  const MARK = { 0: 'X', 4: '2', 8: '0', 12: '3' };

  /* ───────── dialogs ───────── */
  const stack = [];
  let lastFocus = null;
  function openDialog(el) {
    if (!el.hidden) return;
    lastFocus = document.activeElement;
    el.hidden = false; stack.push(el); document.body.style.overflow = 'hidden';
    (el.querySelector('.close') || el).focus({ preventScroll: true });
    el.dispatchEvent(new Event('roomopen'));
  }
  function closeDialog(el) {
    el = el || stack[stack.length - 1];
    if (!el || el.hidden) return;
    el.hidden = true; stack.splice(stack.indexOf(el), 1);
    if (!stack.length) document.body.style.overflow = '';
    el.dispatchEvent(new Event('roomclose'));
    if (lastFocus && lastFocus.focus) lastFocus.focus({ preventScroll: true });
  }
  addEventListener('keydown', e => { if (e.key === 'Escape' && stack.length) closeDialog(); });
  document.addEventListener('click', e => {
    const r = e.target.closest('.room');
    if (r && e.target === r) closeDialog(r);
    const c = e.target.closest('.room .close');
    if (c) closeDialog(c.closest('.room'));
  });
  function makeRoom(id, label, html, cls = '') {
    const d = document.createElement('div');
    d.className = 'room ' + cls; d.id = id; d.hidden = true;
    d.setAttribute('role', 'dialog'); d.setAttribute('aria-modal', 'true'); d.setAttribute('aria-label', label);
    d.innerHTML = `<div class="room-paper"><button type="button" class="ghost close">Close</button>${html}</div>`;
    document.body.appendChild(d);
    return d;
  }

  /* ───────── the index ───────── */
  const LIST = [
    ['remains', 'What remains', 'Three red seals are hidden on this page.'],
    ['lights', 'Lights out', 'Somewhere, a cord hangs.'],
    ['riyaaz', 'Riyaaz', 'Type the word for practice.'],
    ['lane', 'Lane four', 'Fourth is a place. It is also a lane.'],
    ['exposure', 'Long exposure', 'Hold completely still.'],
    ['jugal', 'Jugalbandi', 'Answer every question in Taal.'],
  ];
  const found = new Set(store.get('shesh-rooms', []));
  const openers = {};
  const idx = $('#roomsIndex');
  function renderIndex() {
    idx.innerHTML = `<p class="ri-count">${found.size ? `Rooms found: ${found.size} of ${LIST.length}` : `There are ${LIST.length} hidden rooms in this house.`}</p>
      <ol>${LIST.map(([id, name, hint]) => found.has(id)
        ? `<li class="found"><button type="button" data-room="${id}">${name}</button></li>`
        : `<li><span>${hint}</span></li>`).join('')}</ol>`;
  }
  idx.addEventListener('click', e => { const b = e.target.closest('[data-room]'); if (b) openers[b.dataset.room]?.(); });

  const toastEl = document.createElement('p');
  toastEl.className = 'room-toast'; toastEl.setAttribute('role', 'status'); toastEl.setAttribute('aria-live', 'polite');
  document.body.appendChild(toastEl);
  const toast = t => { toastEl.textContent = t; toastEl.classList.add('on'); clearTimeout(toast.t); toast.t = setTimeout(() => toastEl.classList.remove('on'), 4200); };

  function unlock(id, { open = false } = {}) {
    const fresh = !found.has(id);
    found.add(id); store.set('shesh-rooms', [...found]); renderIndex();
    const name = LIST.find(r => r[0] === id)[1];
    if (fresh) toast(`You found a room: ${name}. ${found.size} of ${LIST.length}.`);
    if (open) openers[id]?.();
  }
  window.ROOMS = { unlock };

  /* ═════════ 1. What remains (the three seals) ═════════ */
  openers.remains = () => openDialog($('#room'));

  /* ═════════ 2. Lights out ═════════ */
  {
    const cord = $('#cord');
    const dark = document.createElement('div'); dark.className = 'lights'; dark.hidden = true; dark.setAttribute('aria-hidden', 'true');
    document.body.appendChild(dark);
    let off = false;
    const aim = (x, y) => { dark.style.setProperty('--x', x + 'px'); dark.style.setProperty('--y', y + 'px'); };
    function set(v) {
      off = v; document.body.classList.toggle('lightsout', off); dark.hidden = !off;
      cord.setAttribute('aria-pressed', off);
      cord.setAttribute('aria-label', off ? 'Pull the cord to turn the lights back on' : 'Pull the cord');
      if (off) { aim(innerWidth / 2, innerHeight / 2); unlock('lights'); }
    }
    cord.addEventListener('click', () => { cord.classList.remove('pulled'); void cord.offsetWidth; cord.classList.add('pulled'); set(!off); });
    addEventListener('pointermove', e => { if (off) aim(e.clientX, e.clientY); }, { passive: true });
    addEventListener('touchmove', e => { if (off && e.touches[0]) aim(e.touches[0].clientX, e.touches[0].clientY); }, { passive: true });
    openers.lights = () => { if (!off) set(true); };
    window.ROOMS.lightsOff = () => off;
  }

  /* ═════════ 3. Riyaaz: type the word ═════════ */
  {
    const room = makeRoom('room-riyaaz', 'Riyaaz', `
      <p class="dev small-dev" lang="hi">रियाज़</p>
      <h2>Riyaaz</h2>
      <p>Practice, in Hindustani music, is the same phrase played again and again, until it stops being something you play. This is Teental’s theka, the skeleton of the cycle. Stay as long as you like. Every full cycle you stay for is counted.</p>
      <div class="rz-cycle" id="rzCycle">${[0, 1, 2, 3].map(g => `<div class="rz-g">${BOLS.slice(g * 4, g * 4 + 4).map((b, k) => `<span class="rz-b" data-i="${g * 4 + k}"><em>${MARK[g * 4 + k] ?? ''}</em>${b}</span>`).join('')}</div>`).join('')}</div>
      <p class="rz-count"><span id="rzCount">0</span> <span id="rzWord">cycles</span> this visit</p>
      <p class="small" id="rzTotal"></p>
      <div class="rz-ctl">
        <button type="button" class="solid" id="rzPlay">Begin</button>
        <label class="rz-tempo">Tempo <input type="range" id="rzTempo" min="60" max="220" value="110"><output id="rzTempoV">110 bpm</output></label>
      </div>
      <blockquote><p>“First say to yourself what you would be; and then do what you have to do.”</p><cite>Epictetus, <i>Discourses</i> 3.23</cite></blockquote>`, 'light-room');
    const cells = [...room.querySelectorAll('.rz-b')], btn = room.querySelector('#rzPlay'), tempo = room.querySelector('#rzTempo');
    let on = false, k = 0, cycles = 0, timer, total = store.get('shesh-riyaaz', 0);
    const showTotal = () => { room.querySelector('#rzTotal').textContent = total ? `${total} ${total === 1 ? 'cycle' : 'cycles'} practised here across all your visits.` : 'Nothing practised here yet.'; };
    showTotal();
    tempo.addEventListener('input', () => { room.querySelector('#rzTempoV').textContent = tempo.value + ' bpm'; });
    const step = () => {
      if (!on) return;
      cells.forEach(c => c.classList.toggle('on', +c.dataset.i === k));
      SYN.hit(BOLS[k]);
      k = (k + 1) % 16;
      if (k === 0) {
        cycles++; total++; store.set('shesh-riyaaz', total);
        room.querySelector('#rzCount').textContent = cycles;
        room.querySelector('#rzWord').textContent = cycles === 1 ? 'cycle' : 'cycles';
        showTotal();
      }
      timer = setTimeout(step, 60000 / +tempo.value);
    };
    const stop = () => { on = false; clearTimeout(timer); btn.textContent = 'Begin'; cells.forEach(c => c.classList.remove('on')); };
    btn.addEventListener('click', () => { if (on) return stop(); on = true; k = 0; btn.textContent = 'Rest'; step(); });
    room.addEventListener('roomclose', stop);
    openers.riyaaz = () => openDialog(room);
    let typed = '';
    addEventListener('keydown', e => {
      if (e.key.length !== 1 || /input|textarea/i.test(e.target.tagName)) return;
      typed = (typed + e.key.toLowerCase()).slice(-6);
      if (typed.endsWith('riyaaz') || typed.endsWith('riyaz')) { typed = ''; unlock('riyaaz', { open: true }); }
    });
  }

  /* ═════════ 4. Lane four ═════════ */
  {
    const LANES = 8, W = 520, LH = 30, H = LANES * LH + 20;
    const room = makeRoom('room-lane', 'Lane four', `
      <h2>Lane four</h2>
      <p>In a final, lane four goes to the fastest seed. I have never been the fastest seed. I have, though, finished fourth in butterfly, freestyle and relay, twice each, at Khelo India Inter-State, and fourth in breaststroke at the YMCA meet. Close enough to hear the anthem.</p>
      <p>You’re racing as me, in lane four. Go.</p>
      <svg class="pool" viewBox="0 0 ${W} ${H}" role="img" aria-label="A swimming pool with eight lanes">
        <rect x="0" y="0" width="${W}" height="${H}" rx="4" class="water"/>
        ${Array.from({ length: LANES + 1 }, (_, i) => `<line x1="0" x2="${W}" y1="${10 + i * LH}" y2="${10 + i * LH}" class="rope"/>`).join('')}
        <line x1="${W - 22}" x2="${W - 22}" y1="6" y2="${H - 6}" class="wall"/>
        ${Array.from({ length: LANES }, (_, i) => `<text x="8" y="${10 + i * LH + LH / 2 + 4}" class="ln">${i + 1}</text><circle class="sw${i === 3 ? ' me' : ''}" data-lane="${i + 1}" cx="30" cy="${10 + i * LH + LH / 2}" r="5"/>`).join('')}
      </svg>
      <div class="rz-ctl"><button type="button" class="solid" id="lnGo">Race</button><p class="small" id="lnSay" role="status" aria-live="polite"></p></div>
      <ol class="results" id="lnRes"></ol>
      <p class="small">For the record, there are bronzes too: twice in the relay finals at the National Swimming Championship, and in freestyle at Nationals.</p>`, 'light-room');
    const go = room.querySelector('#lnGo'), say = room.querySelector('#lnSay'), res = room.querySelector('#lnRes');
    const swimmers = [...room.querySelectorAll('.sw')];
    let races = 0, running = false;
    function race() {
      if (running) return; running = true; go.disabled = true; res.innerHTML = ''; say.textContent = '';
      // seven other swimmers; I slot in between third and fourth. Every time.
      const others = Array.from({ length: 7 }, () => 26 + Math.random() * 5).sort((a, b) => a - b);
      const mine = (others[2] + others[3]) / 2;
      const otherLanes = [1, 2, 3, 5, 6, 7, 8].sort(() => Math.random() - .5);
      const field = [{ lane: 4, t: mine, me: true }, ...others.map((t, i) => ({ lane: otherLanes[i], t }))];
      const fastest = Math.min(...field.map(f => f.t)), scale = (reduce ? 1 : 4200) / fastest;
      const t0 = performance.now();
      const finish = () => {
        running = false; go.disabled = false; races++;
        const order = [...field].sort((a, b) => a.t - b.t);
        res.innerHTML = order.map((f, i) => `<li class="${f.me ? 'me' : ''}"><span>${['1st','2nd','3rd','4th','5th','6th','7th','8th'][i]}</span> lane ${f.lane}${f.me ? ', me' : ''} <em>${f.t.toFixed(2)} s</em></li>`).join('');
        say.textContent = races === 1 ? 'Fourth.' : races === 2 ? 'Fourth again.' : races < 5 ? 'Still fourth. That’s the point.' : 'You can stop now. The work goes on anyway.';
        go.textContent = 'Race again';
      };
      const frame = now => {
        const el = now - t0; let done = true;
        field.forEach(f => {
          const p = Math.min(1, el / (f.t * scale)); if (p < 1) done = false;
          const s = swimmers[f.lane - 1];
          s.setAttribute('cx', 30 + (W - 60) * p);
          s.setAttribute('cy', 10 + (f.lane - 1) * LH + LH / 2 + (p < 1 ? Math.sin(el / 90 + f.lane) * 1.4 : 0));
        });
        if (!done) requestAnimationFrame(frame); else finish();
      };
      if (reduce) { field.forEach(f => swimmers[f.lane - 1].setAttribute('cx', W - 30)); finish(); }
      else requestAnimationFrame(frame);
    }
    go.addEventListener('click', race);
    room.addEventListener('roomopen', () => { swimmers.forEach(s => s.setAttribute('cx', 30)); res.innerHTML = ''; say.textContent = ''; go.textContent = 'Race'; });
    openers.lane = () => openDialog(room);
    document.addEventListener('click', e => { if (e.target.closest('.fourth-btn')) unlock('lane', { open: true }); });
  }

  /* ═════════ 5. Long exposure: hold still ═════════ */
  {
    const room = makeRoom('room-exposure', 'Long exposure', `
      <figure class="exp-photo"><img src="../assets/img/street.jpg" alt="Shesh on a city street at dusk, lights streaking behind him"></figure>
      <h2>Long exposure</h2>
      <p>You held still for twenty-five seconds. In a photograph, most of the light arrives while nothing moves. Most people scroll past. You didn’t.</p>
      <blockquote><p>“We suffer more often in imagination than in reality.”</p><cite>Seneca, <i>Letters to Lucilius</i> 13</cite></blockquote>`, 'exposure');
    let t, shown = false;
    const IDLE = 25000;
    const arm = () => { clearTimeout(t); if (!shown) t = setTimeout(fire, IDLE); };
    function fire() {
      if (document.hidden || stack.length || window.ROOMS.lightsOff()) return arm();
      if (!$('#top').classList.contains('developed')) return arm(); // still in the darkroom
      shown = true; unlock('exposure', { open: true });
    }
    ['pointermove', 'pointerdown', 'keydown', 'scroll', 'wheel', 'touchstart'].forEach(ev => addEventListener(ev, arm, { passive: true }));
    arm();
    openers.exposure = () => openDialog(room);
  }

  /* ═════════ 6. Jugalbandi: a sixteen-beat looper ═════════ */
  {
    const NAMES = SYN.names; // Dha Dhin Na Tin Ge Boots Ts Pf
    const room = makeRoom('room-jugal', 'Jugalbandi', `
      <h2>Jugalbandi</h2>
      <p>Two players, one cycle. You answered every question, so the pads are yours now. Build a cycle of sixteen beats out of tabla and beatbox, then send it to someone.</p>
      <div class="seq-wrap"><div class="seq" id="seq" role="grid" aria-label="Sixteen-beat pattern"></div></div>
      <div class="rz-ctl seq-ctl">
        <button type="button" class="solid" id="sqPlay">Play</button>
        <label class="rz-tempo">Tempo <input type="range" id="sqTempo" min="80" max="400" value="220"><output id="sqTempoV">220</output></label>
      </div>
      <p class="presets">Start from <button type="button" class="link-btn" data-p="theka">Teental theka</button>, <button type="button" class="link-btn" data-p="boombap">boom bap</button>, <button type="button" class="link-btn" data-p="fusion">fusion</button>, or <button type="button" class="link-btn" data-p="clear">silence</button>.</p>
      <p><button type="button" class="ghost dark-ghost" id="sqShare">Copy a link to this beat</button> <span class="small" id="sqSay" role="status" aria-live="polite"></span></p>`, 'light-room wide');
    const seq = room.querySelector('#seq'), play = room.querySelector('#sqPlay'), tempo = room.querySelector('#sqTempo'), say = room.querySelector('#sqSay');
    let grid = NAMES.map(() => Array(16).fill(0));
    seq.innerHTML = `<span class="sq-corner"></span>${Array.from({ length: 16 }, (_, c) => `<span class="sq-head${c % 4 === 0 ? ' g' : ''}">${MARK[c] ?? c + 1}</span>`).join('')}` +
      NAMES.map((n, r) => `<span class="sq-name">${n}</span>${Array.from({ length: 16 }, (_, c) => `<button type="button" class="sq-cell${c % 4 === 0 ? ' g' : ''}${c === 8 ? ' khali' : ''}" data-r="${r}" data-c="${c}" aria-pressed="false" aria-label="${n}, beat ${c + 1}"></button>`).join('')}`).join('');
    const cells = [...seq.querySelectorAll('.sq-cell')];
    const paint = () => cells.forEach(b => b.setAttribute('aria-pressed', !!grid[b.dataset.r][b.dataset.c]));
    seq.addEventListener('click', e => {
      const b = e.target.closest('.sq-cell'); if (!b) return;
      const r = +b.dataset.r, c = +b.dataset.c; grid[r][c] ^= 1; paint();
      if (grid[r][c]) SYN.hit(NAMES[r]);
    });
    const P = (rows) => NAMES.map(n => { const a = Array(16).fill(0); (rows[n] || []).forEach(i => a[i] = 1); return a; });
    const PRESETS = {
      theka: P({ Dha: [0, 3, 4, 7, 8, 15], Dhin: [1, 2, 5, 6, 13, 14], Tin: [9, 10], Na: [11, 12] }),
      boombap: P({ Boots: [0, 6, 10], Pf: [4, 12], Ts: [0, 2, 4, 6, 8, 10, 12, 14] }),
      fusion: P({ Dha: [0, 8], Dhin: [2, 3], Na: [11, 12], Tin: [9], Ge: [6, 14], Boots: [0, 7, 10], Pf: [4, 12], Ts: [2, 6, 14] }),
      clear: P({}),
    };
    room.querySelector('.presets').addEventListener('click', e => { const b = e.target.closest('[data-p]'); if (b) { grid = PRESETS[b.dataset.p].map(r => [...r]); paint(); } });
    tempo.addEventListener('input', () => { room.querySelector('#sqTempoV').textContent = tempo.value; });
    let on = false, k = 0, timer;
    const step = () => {
      if (!on) return;
      cells.forEach(b => b.classList.toggle('now', +b.dataset.c === k));
      NAMES.forEach((n, r) => { if (grid[r][k]) SYN.hit(n); });
      k = (k + 1) % 16;
      timer = setTimeout(step, 60000 / +tempo.value);
    };
    const stop = () => { on = false; clearTimeout(timer); play.textContent = 'Play'; cells.forEach(b => b.classList.remove('now')); };
    play.addEventListener('click', () => { if (on) return stop(); on = true; k = 0; play.textContent = 'Stop'; step(); });
    room.addEventListener('roomclose', stop);

    // share: each row is 16 bits, four hex digits
    const encode = () => grid.map(r => parseInt(r.join(''), 2).toString(16).padStart(4, '0')).join('') + '-' + tempo.value;
    const decode = s => {
      const [hex, bpm] = s.split('-'); if (!/^[0-9a-f]{32}$/i.test(hex || '')) return false;
      grid = NAMES.map((_, r) => parseInt(hex.slice(r * 4, r * 4 + 4), 16).toString(2).padStart(16, '0').split('').map(Number));
      if (+bpm >= 80 && +bpm <= 400) { tempo.value = bpm; room.querySelector('#sqTempoV').textContent = bpm; }
      paint(); return true;
    };
    room.querySelector('#sqShare').addEventListener('click', async () => {
      const url = location.href.split('#')[0] + '#beat=' + encode();
      try { await navigator.clipboard.writeText(url); say.textContent = 'Link copied. Whoever opens it hears your cycle.'; }
      catch (_) { say.textContent = url; }
    });
    grid = PRESETS.theka.map(r => [...r]); paint();
    openers.jugal = () => openDialog(room);
    const m = location.hash.match(/^#beat=([0-9a-f-]+)$/i);
    if (m && decode(m[1])) {
      // someone sent you a beat
      say.textContent = 'Someone sent you this cycle. Press play.';
      setTimeout(() => unlock('jugal', { open: true }), 400);
    }
  }

  /* ═════════ Tanpura: the drone under everything ═════════ */
  {
    const btn = $('#drone');
    let on = false, out = null, i = 0, timer;
    const STRINGS = [98.0, 130.81, 130.81, 65.41]; // Pa, Sa, Sa, low Sa (Sa = C)
    function pluck(f) {
      const a = SYN.ctx(), t = a.currentTime;
      const g = a.createGain(), lp = a.createBiquadFilter();
      lp.type = 'lowpass'; lp.Q.value = 7; lp.frequency.setValueAtTime(2600, t); lp.frequency.exponentialRampToValueAtTime(420, t + 3.6);
      g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(.06, t + .04); g.gain.exponentialRampToValueAtTime(.0006, t + 5);
      [1, 1.0035, 2.001].forEach((m, j) => {
        const o = a.createOscillator(); o.type = j === 2 ? 'triangle' : 'sawtooth'; o.frequency.value = f * m;
        o.connect(lp); o.start(t); o.stop(t + 5.1);
      });
      lp.connect(g); g.connect(out);
    }
    const loop = () => { if (!on) return; pluck(STRINGS[i % 4]); i++; timer = setTimeout(loop, 1250); };
    btn.addEventListener('click', () => {
      const a = SYN.ctx();
      if (!out) { out = a.createGain(); out.connect(a.destination); }
      on = !on; btn.setAttribute('aria-pressed', on);
      out.gain.cancelScheduledValues(a.currentTime);
      out.gain.setTargetAtTime(on ? 1 : 0, a.currentTime, on ? .3 : .6);
      if (on) { i = 0; loop(); } else clearTimeout(timer);
    });
  }

  renderIndex();
})();
