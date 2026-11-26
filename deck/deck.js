(function () {
  'use strict';
  var INK = '#23231f', CREAM = '#fbfae6';
  var S = 'stroke="' + INK + '" stroke-width="4" stroke-linejoin="round" stroke-linecap="round"';

  /* ---------- original mascot: "무언이" (a speech bubble with no mouth) ---------- */
  function mascot(variant) {
    var body = INK, eye = CREAM, pupil = INK, leaf = '#3eaa5c';
    if (variant === 'cream') { body = CREAM; eye = INK; pupil = CREAM; }
    if (variant === 'dots') {
      return '<svg viewBox="0 0 200 220" aria-hidden="true">' +
        '<path d="M100 46 C100 30 104 20 112 10"/>' +
        '<path d="M108 18 C120 0 146 2 152 10 C140 22 122 26 108 18Z"/>' +
        '<path d="M104 26 C92 12 72 14 66 22 C78 32 94 32 104 26Z"/>' +
        '<path d="M100 42 C152 42 182 74 182 118 C182 162 150 188 106 188 C98 188 90 187 83 185 L60 206 L64 176 C36 164 18 144 18 116 C18 72 50 42 100 42Z"/>' +
        '<ellipse cx="74" cy="112" rx="19" ry="24"/><ellipse cx="128" cy="112" rx="19" ry="24"/></svg>';
    }
    return '<svg viewBox="0 0 200 220" aria-hidden="true">' +
      '<g class="sprout"><path d="M100 46 C100 30 104 20 112 10" fill="none" stroke="' + INK + '" stroke-width="6" stroke-linecap="round"/>' +
      '<path d="M108 18 C120 0 146 2 152 10 C140 22 122 26 108 18Z" fill="' + leaf + '" ' + S + '/>' +
      '<path d="M104 26 C92 12 72 14 66 22 C78 32 94 32 104 26Z" fill="' + leaf + '" ' + S + '/></g>' +
      '<path d="M100 42 C152 42 182 74 182 118 C182 162 150 188 106 188 C98 188 90 187 83 185 L60 206 L64 176 C36 164 18 144 18 116 C18 72 50 42 100 42Z" fill="' + body + '"' + (variant === 'cream' ? ' ' + S : '') + '/>' +
      '<g class="eyes"><ellipse cx="74" cy="112" rx="19" ry="24" fill="' + eye + '"/><ellipse cx="128" cy="112" rx="19" ry="24" fill="' + eye + '"/>' +
      '<g class="pupils"><circle cx="79" cy="117" r="9" fill="' + pupil + '"/><circle cx="133" cy="117" r="9" fill="' + pupil + '"/></g></g></svg>';
  }

  /* ---------- sticker icons (original, 100x100) ---------- */
  var C = { sky: '#a9d8db', cream: CREAM, orange: '#ff6b3d', yellow: '#f2ea6a', green: '#3eaa5c', salmon: '#f4a08c', blue: '#2e66d9', sage: '#d4d5c1', plum: '#6b2f45' };
  function svg(inner) { return '<svg viewBox="0 0 100 100" aria-hidden="true">' + inner + '</svg>'; }
  var ICONS = {
    book: svg('<path d="M12 24 L48 18 L48 84 L12 90Z" fill="' + C.sky + '" ' + S + '/><path d="M52 18 L88 24 L88 90 L52 84Z" fill="' + C.cream + '" ' + S + '/><path d="M20 38 L40 35 M20 49 L40 46 M20 60 L40 57 M60 35 L80 38 M60 46 L80 49 M60 57 L74 59" fill="none" ' + S + '/>'),
    hand: svg('<rect x="30" y="16" width="11" height="40" rx="5.5" fill="' + C.salmon + '" ' + S + '/><rect x="43" y="9" width="11" height="44" rx="5.5" fill="' + C.salmon + '" ' + S + '/><rect x="56" y="12" width="11" height="42" rx="5.5" fill="' + C.salmon + '" ' + S + '/><rect x="69" y="22" width="10" height="34" rx="5" fill="' + C.salmon + '" ' + S + '/><rect x="8" y="50" width="32" height="12" rx="6" transform="rotate(-32 24 56)" fill="' + C.salmon + '" ' + S + '/><rect x="26" y="44" width="54" height="46" rx="16" fill="' + C.salmon + '" ' + S + '/><path d="M40 70 C48 76 58 76 66 70" fill="none" ' + S + '/>'),
    drop: svg('<path d="M50 8 C64 30 82 46 82 64 A32 32 0 0 1 18 64 C18 46 36 30 50 8Z" fill="' + C.orange + '" ' + S + '/><path d="M36 62 H64 M36 73 H56" fill="none" ' + S + '/><path d="M30 50 C32 42 36 36 40 32" fill="none" stroke="' + CREAM + '" stroke-width="4" stroke-linecap="round"/>'),
    globe: svg('<circle cx="50" cy="50" r="38" fill="' + C.sky + '" ' + S + '/><ellipse cx="50" cy="50" rx="16" ry="38" fill="none" ' + S + '/><path d="M12 50 H88 M18 30 H82 M18 70 H82" fill="none" ' + S + '/>'),
    chat: svg('<path d="M10 14 H62 Q70 14 70 22 V48 Q70 56 62 56 H30 L18 66 L20 56 H18 Q10 56 10 48 V22 Q10 14 18 14Z" fill="' + C.yellow + '" ' + S + '/><path d="M38 40 H84 Q92 40 92 48 V76 Q92 84 84 84 H80 L82 94 L70 84 H46 Q38 84 38 76 V48 Q38 40 46 40Z" fill="' + C.cream + '" ' + S + '/><path d="M58 54 C58 46 74 46 74 54 C74 60 66 60 66 67 M66 75 V75.5" fill="none" ' + S + '/>'),
    arm: svg('<rect x="12" y="82" width="50" height="10" rx="3" fill="' + C.sage + '" ' + S + '/><path d="M36 82 L30 50 L66 30" fill="none" stroke="' + INK + '" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/><path d="M36 82 L30 50 L66 30" fill="none" stroke="' + C.yellow + '" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/><circle cx="30" cy="50" r="7" fill="' + CREAM + '" ' + S + '/><path d="M66 30 L82 16 M66 30 L86 34" fill="none" stroke="' + INK + '" stroke-width="6" stroke-linecap="round"/>'),
    fish: svg('<path d="M74 50 L94 32 L92 68Z" fill="' + C.blue + '" ' + S + '/><path d="M8 50 C28 22 62 22 78 50 C62 78 28 78 8 50Z" fill="' + C.blue + '" ' + S + '/><circle cx="26" cy="46" r="4.5" fill="' + INK + '"/><path d="M40 36 C46 44 46 56 40 64" fill="none" stroke="' + CREAM + '" stroke-width="4" stroke-linecap="round"/>'),
    pot: svg('<path d="M34 12 H66 V22 C66 30 84 36 84 60 C84 80 68 90 50 90 C32 90 16 80 16 60 C16 36 34 30 34 22Z" fill="' + C.orange + '" ' + S + '/><path d="M20 56 H80 M24 68 H76" fill="none" ' + S + '/><path d="M30 12 H70" ' + S + '/>'),
    spark: svg('<path d="M50 8 L58 38 L90 34 L64 54 L80 84 L50 66 L20 84 L36 54 L10 34 L42 38Z" fill="' + C.yellow + '" ' + S + '/><circle cx="50" cy="50" r="8" fill="' + C.orange + '" ' + S + '/>'),
    headset: svg('<path d="M20 58 C20 22 80 22 80 58" fill="none" stroke="' + INK + '" stroke-width="7" stroke-linecap="round"/><rect x="12" y="50" width="18" height="30" rx="7" fill="' + C.green + '" ' + S + '/><rect x="70" y="50" width="18" height="30" rx="7" fill="' + C.green + '" ' + S + '/><path d="M80 78 C76 90 64 92 54 92" fill="none" ' + S + '/><circle cx="50" cy="92" r="5" fill="' + INK + '"/>'),
    gear: svg('<g fill="' + C.sage + '" ' + S + '><rect x="44" y="6" width="12" height="20" rx="3"/><rect x="44" y="74" width="12" height="20" rx="3"/><rect x="6" y="44" width="20" height="12" rx="3"/><rect x="74" y="44" width="20" height="12" rx="3"/><rect x="44" y="6" width="12" height="20" rx="3" transform="rotate(45 50 50)"/><rect x="44" y="74" width="12" height="20" rx="3" transform="rotate(45 50 50)"/><rect x="6" y="44" width="20" height="12" rx="3" transform="rotate(45 50 50)"/><rect x="74" y="44" width="20" height="12" rx="3" transform="rotate(45 50 50)"/></g><circle cx="50" cy="50" r="28" fill="' + C.sage + '" ' + S + '/><circle cx="50" cy="50" r="11" fill="' + CREAM + '" ' + S + '/>'),
    mic: svg('<rect x="35" y="8" width="30" height="50" rx="15" fill="' + C.salmon + '" ' + S + '/><path d="M41 24 H59 M41 34 H59" fill="none" ' + S + '/><path d="M24 44 C24 74 76 74 76 44" fill="none" ' + S + '/><path d="M50 68 V86 M34 88 H66" fill="none" ' + S + '/>'),
    steps: svg('<path d="M14 88 C30 70 54 74 86 14" fill="none" stroke="' + INK + '" stroke-width="3" stroke-dasharray="2 8" stroke-linecap="round"/><ellipse cx="28" cy="66" rx="9" ry="14" transform="rotate(-25 28 66)" fill="' + C.yellow + '" ' + S + '/><ellipse cx="64" cy="40" rx="9" ry="14" transform="rotate(25 64 40)" fill="' + C.yellow + '" ' + S + '/><circle cx="34" cy="48" r="3.5" fill="' + INK + '"/><circle cx="58" cy="22" r="3.5" fill="' + INK + '"/>'),
    eye: svg('<path d="M6 50 C26 20 74 20 94 50 C74 80 26 80 6 50Z" fill="' + CREAM + '" ' + S + '/><circle cx="50" cy="50" r="18" fill="' + C.green + '" ' + S + '/><circle cx="50" cy="50" r="7" fill="' + INK + '"/><circle cx="56" cy="44" r="3" fill="' + CREAM + '"/>'),
    wave: svg('<rect x="34" y="30" width="32" height="40" rx="8" fill="' + C.blue + '" ' + S + '/><circle cx="50" cy="50" r="7" fill="' + CREAM + '" ' + S + '/><path d="M24 34 C16 44 16 56 24 66 M76 34 C84 44 84 56 76 66 M14 24 C2 40 2 60 14 76 M86 24 C98 40 98 60 86 76" fill="none" ' + S + '/>'),
    tag: svg('<path d="M10 46 L46 10 H86 Q90 10 90 14 V54 L54 90 Q50 94 46 90 L10 54 Q6 50 10 46Z" fill="' + C.yellow + '" ' + S + '/><circle cx="72" cy="28" r="7" fill="' + CREAM + '" ' + S + '/><path d="M34 54 L54 74 M44 44 L64 64" fill="none" ' + S + '/>'),
    robot: svg('<path d="M50 8 V20" ' + S + '/><circle cx="50" cy="8" r="5" fill="' + C.orange + '" ' + S + '/><rect x="16" y="20" width="68" height="52" rx="14" fill="' + C.sky + '" ' + S + '/><circle cx="36" cy="44" r="8" fill="' + CREAM + '" ' + S + '/><circle cx="64" cy="44" r="8" fill="' + CREAM + '" ' + S + '/><path d="M38 60 H62" ' + S + '/><rect x="30" y="72" width="40" height="18" rx="4" fill="' + C.sage + '" ' + S + '/>'),
    compare: svg('<rect x="6" y="20" width="40" height="52" rx="6" fill="' + C.cream + '" ' + S + '/><rect x="54" y="20" width="40" height="52" rx="6" fill="' + C.green + '" ' + S + '/><text x="26" y="56" text-anchor="middle" font-family="Rubik,sans-serif" font-weight="900" font-size="26" fill="' + INK + '">A</text><text x="74" y="56" text-anchor="middle" font-family="Rubik,sans-serif" font-weight="900" font-size="26" fill="' + INK + '">B</text><circle cx="80" cy="80" r="13" fill="' + C.yellow + '" ' + S + '/><path d="M73 80 L78 85 L87 75" fill="none" ' + S + '/>'),
    quote: svg('<path d="M8 16 H92 Q92 16 92 22 V66 Q92 72 86 72 H40 L22 90 L26 72 H14 Q8 72 8 66 V22 Q8 16 14 16Z" fill="' + C.sky + '" ' + S + '/><path d="M30 34 V50 M30 34 H42 V44 Q42 52 32 56 M58 34 V50 M58 34 H70 V44 Q70 52 60 56" fill="none" ' + S + '/>'),
    warn: svg('<path d="M50 8 L94 88 H6Z" fill="' + C.salmon + '" ' + S + '/><path d="M50 36 V62" fill="none" stroke="' + INK + '" stroke-width="7" stroke-linecap="round"/><circle cx="50" cy="74" r="4.5" fill="' + INK + '"/>'),
    board: svg('<rect x="8" y="14" width="84" height="58" rx="4" fill="' + C.green + '" ' + S + '/><path d="M20 30 H52 M20 42 H64 M20 54 H40" fill="none" stroke="' + CREAM + '" stroke-width="4" stroke-linecap="round"/><path d="M28 72 L20 92 M72 72 L80 92" ' + S + '/><rect x="62" y="64" width="16" height="6" rx="2" fill="' + CREAM + '" ' + S + '/>'),
    flag: svg('<path d="M20 92 V10" fill="none" stroke="' + INK + '" stroke-width="6" stroke-linecap="round"/><path d="M22 12 H84 L72 30 L84 48 H22Z" fill="' + C.orange + '" ' + S + '/><circle cx="20" cy="92" r="5" fill="' + INK + '"/>')
  };

  document.querySelectorAll('[data-mascot]').forEach(function (el) {
    el.classList.add('mascot');
    el.innerHTML = mascot(el.getAttribute('data-mascot'));
  });
  document.querySelectorAll('[data-icon]').forEach(function (el) {
    el.classList.add('ico');
    el.innerHTML = ICONS[el.getAttribute('data-icon')] || '';
  });

  /* ---------- headers ---------- */
  var slides = Array.prototype.slice.call(document.querySelectorAll('.slide'));
  var mapIndex = 0;
  slides.forEach(function (s, i) {
    if (s.id === 'map') mapIndex = i;
    var ch = s.getAttribute('data-ch');
    if (!ch) return;
    var h = document.createElement('div');
    h.className = 'hdr';
    h.innerHTML = '<div class="crumb"><span class="dot" style="--c:' + (s.getAttribute('data-cc') || 'var(--orange)') + '"></span>TACIT KNOWLEDGE × AI &nbsp;/&nbsp; ' + ch + '</div>' +
      '<button class="tomap" data-go="map" aria-label="목차로 이동">≡ 목차 (M)</button>';
    s.insertBefore(h, s.firstChild);
  });

  /* ---------- steps ---------- */
  var maxSteps = slides.map(function (s) {
    var m = 0;
    s.querySelectorAll('[data-step]').forEach(function (e) { m = Math.max(m, +e.getAttribute('data-step')); });
    return m;
  });

  var cur = 0, step = 0;
  var counter = document.getElementById('count');
  var bar = document.getElementById('progress');
  var notesPanel = document.getElementById('notesPanel');

  /* scene hooks */
  var seciOrder = ['s', 'e', 'c', 'i'];
  var seciAngles = { s: [-90, 0], e: [0, 90], c: [90, 180], i: [180, 270] };
  var hooks = {
    seci: function (s, st) {
      var key = st >= 1 && st <= 4 ? seciOrder[st - 1] : (st >= 5 ? 'all' : 'intro');
      s.querySelectorAll('.seci .q').forEach(function (q) {
        q.classList.toggle('off', !(key === 'all' || key === 'intro' || q.getAttribute('data-q') === key));
      });
      s.querySelectorAll('.seci-detail .sd').forEach(function (d) {
        var k = d.getAttribute('data-sd');
        d.classList.toggle('cur', k === key || (key === 'all' && k === 'all') || (key === 'intro' && k === 'intro'));
      });
      var orbit = s.querySelector('.orbit');
      var a = key === 'all' || key === 'intro' ? [-90, 270] : seciAngles[key];
      orbit.style.setProperty('--a0', a[0] + 'deg');
      orbit.style.setProperty('--a1', a[1] + 'deg');
      orbit.style.animationDuration = (key === 'all' || key === 'intro') ? '10s' : '3s';
      orbit.classList.remove('spinq'); void orbit.getBoundingClientRect(); orbit.classList.add('spinq');
    }
  };

  function render(entering) {
    slides.forEach(function (s, i) {
      var on = i === cur;
      s.classList.toggle('is-active', on);
      s.setAttribute('aria-hidden', on ? 'false' : 'true');
      if (!on) s.classList.remove('enter');
    });
    var s = slides[cur];
    if (entering) { s.classList.remove('enter'); void s.offsetWidth; s.classList.add('enter'); }
    s.querySelectorAll('[data-step]').forEach(function (e) {
      e.classList.toggle('on', +e.getAttribute('data-step') <= step);
    });
    var hk = s.getAttribute('data-scene');
    if (hk && hooks[hk]) hooks[hk](s, step);
    counter.textContent = String(cur + 1).padStart(2, '0') + ' / ' + String(slides.length).padStart(2, '0') + (maxSteps[cur] ? '  ·  ' + step + '/' + maxSteps[cur] : '');
    bar.style.width = ((cur + (maxSteps[cur] ? step / (maxSteps[cur] + 1) : 0)) / (slides.length - 1) * 100) + '%';
    var n = s.querySelector('.notes');
    notesPanel.querySelector('.body').innerHTML = n ? n.innerHTML : '<p>(노트 없음)</p>';
    notesPanel.querySelector('h4').textContent = 'PRESENTER NOTES — ' + String(cur + 1).padStart(2, '0');
    if (location.hash !== '#' + (cur + 1)) history.replaceState(null, '', '#' + (cur + 1));
  }
  function go(i, st) {
    i = Math.max(0, Math.min(slides.length - 1, i));
    var entering = i !== cur;
    cur = i; step = st == null ? 0 : st;
    render(entering);
  }
  function next() { if (step < maxSteps[cur]) { step++; render(false); } else if (cur < slides.length - 1) go(cur + 1, 0); }
  function prev() { if (step > 0) { step--; render(false); } else if (cur > 0) go(cur - 1, maxSteps[cur - 1]); }

  /* ---------- scaling ---------- */
  var stage = document.getElementById('stage');
  function fit() {
    var s = Math.min(window.innerWidth / 1600, window.innerHeight / 900);
    stage.style.setProperty('--s', s);
  }
  window.addEventListener('resize', fit); fit();

  /* ---------- input ---------- */
  function isTyping(e) { var t = e.target; return t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.isContentEditable); }
  document.addEventListener('keydown', function (e) {
    if (isTyping(e) || e.metaKey || e.ctrlKey || e.altKey) return;
    var k = e.key;
    if (k === 'ArrowRight' || k === ' ' || k === 'PageDown' || k === 'Enter') { e.preventDefault(); next(); }
    else if (k === 'ArrowLeft' || k === 'PageUp' || k === 'Backspace') { e.preventDefault(); prev(); }
    else if (k === 'Home') go(0);
    else if (k === 'End') go(slides.length - 1, maxSteps[slides.length - 1]);
    else if (k === 'm' || k === 'M') go(mapIndex);
    else if (k === 'n' || k === 'N') toggleNotes();
    else if (k === 'p' || k === 'P') toggleMotion();
    else if (k === 'f' || k === 'F') toggleFull();
  });
  document.addEventListener('click', function (e) {
    var g = e.target.closest('[data-go]');
    if (g) {
      e.preventDefault();
      var v = g.getAttribute('data-go');
      if (v === 'map') go(mapIndex); else go(+v - 1);
      return;
    }
    if (e.target.closest('a,button,.ctrl,.notes-panel')) return;
    // click on stage: right 2/3 = next, left 1/3 = prev
    if (e.target.closest('#stage')) { if (e.clientX < window.innerWidth / 3) prev(); else next(); }
  });
  var wheelLock = 0;
  document.addEventListener('wheel', function (e) {
    if (e.target.closest('.notes-panel')) return;
    var now = Date.now(); if (now - wheelLock < 650 || Math.abs(e.deltaY) < 30) return;
    wheelLock = now; if (e.deltaY > 0) next(); else prev();
  }, { passive: true });

  document.getElementById('bPrev').onclick = prev;
  document.getElementById('bNext').onclick = next;
  document.getElementById('bMap').onclick = function () { go(mapIndex); };
  document.getElementById('bNotes').onclick = toggleNotes;
  document.getElementById('bMotion').onclick = toggleMotion;
  document.getElementById('bFull').onclick = toggleFull;

  function toggleNotes() {
    var o = notesPanel.classList.toggle('open');
    document.getElementById('bNotes').setAttribute('aria-pressed', o);
  }
  var userPaused = false;
  function applyMotion() { document.body.setAttribute('data-motion', (userPaused || document.hidden) ? 'paused' : 'on'); }
  function toggleMotion() {
    userPaused = !userPaused; applyMotion();
    document.getElementById('bMotion').setAttribute('aria-pressed', userPaused);
    document.getElementById('bMotion').textContent = userPaused ? '▶ 모션' : 'Ⅱ 모션';
  }
  document.addEventListener('visibilitychange', applyMotion);
  function toggleFull() {
    if (!document.fullscreenElement) { (document.documentElement.requestFullscreen || function () {}).call(document.documentElement); }
    else { document.exitFullscreen(); }
  }

  window.deck = { go: function (n, st) { go(n - 1, st == null ? maxSteps[n - 1] : st); }, count: slides.length };

  var h = parseInt((location.hash || '').slice(1), 10);
  cur = (h >= 1 && h <= slides.length) ? h - 1 : 0;
  applyMotion();
  render(true);
})();
