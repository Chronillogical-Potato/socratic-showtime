/* socratic.js: make a showtime HTML video stop and ask.
 *
 *   <div class="socratic" data-video="ramanujan.html" data-questions="socratic.json"></div>
 *   <script src="../socratic/socratic.js"></script>
 *
 * The video is a `showtime export html` page, shown in a frame on the same site. At each question's
 * `pause` time the video stops and the question appears; the viewer picks an answer, sees a one-line
 * reply, and the video goes on from `resume` (the end of the "pause and think" beat in the MP4).
 * Seeking past a question skips it. Keys: 1-9 pick, Enter or Space continue.
 */
(function () {
  "use strict";

  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  }

  function mount(root) {
    var frame = el("iframe", "soc-frame");
    frame.src = root.getAttribute("data-video");
    frame.title = root.getAttribute("data-title") || "Video";
    frame.setAttribute("allow", "autoplay; fullscreen");
    var stage = el("div", "soc-stage");
    var card = el("div", "soc-card");
    card.hidden = true;
    card.setAttribute("role", "dialog");
    card.setAttribute("aria-live", "polite");
    stage.appendChild(frame);
    var bar = el("div", "soc-bar");
    root.appendChild(stage);
    root.appendChild(card);
    root.appendChild(bar);

    var qs = [], state = {}, player = null, open = null, lastT = 0;

    fetch(root.getAttribute("data-questions")).then(function (r) { return r.json(); }).then(function (d) {
      qs = (d.questions || []).slice().sort(function (a, b) { return a.pause - b.pause; });
      renderBar();
      wait();
    });

    function wait() {
      var w = frame.contentWindow;
      if (!w || !w.showtimePlayer) return void setTimeout(wait, 150);
      player = w.showtimePlayer;
      Promise.resolve(player.ready).then(function () {
        player.on("frame", tick);
        setInterval(tick, 120);   // a slow or throttled page may skip frames: still catch every question
        player.on("seek", function () {
          // jumping back re-arms the questions after the new time; jumping ahead skips the ones passed
          var t = player.currentTime;
          qs.forEach(function (q) { if (q.pause > t + 0.05) delete state[q.id].passed; else if (!state[q.id].answer) state[q.id].passed = true; });
          lastT = t;
          renderBar();
        });
        player.on("restart", function () { qs.forEach(function (q) { state[q.id] = {}; }); lastT = 0; renderBar(); });
      });
    }

    function tick() {
      if (open || !player || player.paused) return;
      var t = player.currentTime;
      for (var i = 0; i < qs.length; i++) {
        var q = qs[i], s = state[q.id];
        if (!s.answer && !s.passed && lastT <= q.pause + 0.001 && t >= q.pause - 0.02) {
          player.pause();
          if (t > q.pause + 0.1) player.seek(q.pause);   // caught late: show the question's own frame
          ask(q);
          break;
        }
      }
      lastT = t;
    }

    function ask(q) {
      open = q;
      card.innerHTML = "";
      card.appendChild(el("div", "soc-kicker", "Question " + (qs.indexOf(q) + 1) + " of " + qs.length));
      card.appendChild(el("div", "soc-prompt", q.prompt));
      var list = el("div", "soc-choices");
      q.choices.forEach(function (c, i) {
        var b = el("button", "soc-choice");
        b.type = "button";
        b.appendChild(el("span", "soc-key", String.fromCharCode(65 + i)));
        b.appendChild(el("span", "soc-text", c));
        b.addEventListener("click", function () { answer(q, i); });
        list.appendChild(b);
      });
      card.appendChild(list);
      card.appendChild(el("div", "soc-hint", "Pick one to go on"));
      card.hidden = false;
      root.classList.add("is-asking");
      if (card.scrollIntoView) card.scrollIntoView({ block: "nearest", behavior: "smooth" });
      var first = list.querySelector("button");
      if (first) first.focus({ preventScroll: true });
    }

    function answer(q, i) {
      if (state[q.id].answer != null) return;
      var right = i === q.answer;
      state[q.id].answer = i;
      var buttons = card.querySelectorAll(".soc-choice");
      buttons.forEach(function (b, j) {
        b.disabled = true;
        if (j === q.answer) b.classList.add("is-right");
        else if (j === i) b.classList.add("is-wrong");
      });
      var fb = el("div", "soc-feedback " + (right ? "is-right" : "is-wrong"));
      fb.appendChild(el("strong", null, right ? "Right. " : "Not quite. "));
      fb.appendChild(document.createTextNode((q.feedback && q.feedback[i]) || ""));
      card.replaceChild(fb, card.querySelector(".soc-hint"));
      var go = el("button", "soc-go", "Continue");
      go.type = "button";
      go.addEventListener("click", resume);
      card.appendChild(go);
      go.focus({ preventScroll: true });
      renderBar();
    }

    function resume() {
      var q = open;
      if (!q) return;
      open = null;
      card.hidden = true;
      root.classList.remove("is-asking");
      lastT = q.resume;
      Promise.resolve(player.seek(q.resume)).then(function () {
        state[q.id].passed = true;
        lastT = q.resume;
        player.play();
      });
    }

    function renderBar() {
      bar.innerHTML = "";
      var right = 0, done = 0;
      qs.forEach(function (q, i) {
        if (!state[q.id]) state[q.id] = {};
        var s = state[q.id], dot = el("span", "soc-dot");
        if (s.answer != null) { done++; if (s.answer === q.answer) { right++; dot.classList.add("is-right"); } else dot.classList.add("is-wrong"); }
        dot.title = "Question " + (i + 1);
        bar.appendChild(dot);
      });
      bar.appendChild(el("span", "soc-score", done ? right + " of " + done + " right" : qs.length + " questions: the video stops and asks"));
    }

    document.addEventListener("keydown", function (e) {
      if (!open) return;
      var n = parseInt(e.key, 10);
      if (n >= 1 && n <= open.choices.length && state[open.id].answer == null) { answer(open, n - 1); e.preventDefault(); }
      else if ((e.key === "Enter" || e.key === " ") && state[open.id].answer != null) { resume(); e.preventDefault(); }
      else if (/^[a-z]$/i.test(e.key) && state[open.id].answer == null) {
        var k = e.key.toUpperCase().charCodeAt(0) - 65;
        if (k >= 0 && k < open.choices.length) { answer(open, k); e.preventDefault(); }
      }
    });
  }

  document.querySelectorAll(".socratic").forEach(mount);
})();
