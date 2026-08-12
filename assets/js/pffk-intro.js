/**
 * Kensai Reforged — sword-slash intro overlay
 * Waits for a user gesture (click / tap / Enter / Space) so audio is allowed
 * to play. Once per browser session; skipped when prefers-reduced-motion is set.
 */
(function () {
  var overlay = document.getElementById("pffk-intro");
  if (!overlay) return;

  var reduceMotion =
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  var seen = false;
  try {
    seen = sessionStorage.getItem("pffk-intro-seen") === "1";
  } catch (e) {
    /* private mode / blocked storage */
  }

  function dismiss() {
    overlay.classList.add("is-done");
    document.documentElement.classList.remove("pffk-intro-active");
    overlay.setAttribute("aria-hidden", "true");
    window.setTimeout(function () {
      if (overlay && overlay.parentNode) {
        overlay.parentNode.removeChild(overlay);
      }
    }, 700);
  }

  if (reduceMotion || seen) {
    dismiss();
    return;
  }

  document.documentElement.classList.add("pffk-intro-active");
  overlay.setAttribute("aria-hidden", "false");

  var audio = document.getElementById("pffk-intro-audio");
  var slashMs = 520;
  var started = false;

  function playSlash() {
    if (started) return;
    started = true;

    try {
      sessionStorage.setItem("pffk-intro-seen", "1");
    } catch (e) {
      /* ignore */
    }

    /* Start audio inside the user-gesture call stack so browsers allow sound */
    if (audio) {
      try {
        audio.muted = false;
        audio.volume = 1;
        audio.currentTime = 0;
        var playPromise = audio.play();
        if (playPromise && typeof playPromise.catch === "function") {
          playPromise.catch(function () {
            /* Should be rare when triggered by click/keydown */
          });
        }
      } catch (e) {
        /* ignore playback errors */
      }
    }

    overlay.classList.add("is-slashing");
    overlay.removeEventListener("click", playSlash);
    document.removeEventListener("keydown", onKey);

    window.setTimeout(dismiss, slashMs);
  }

  function onKey(ev) {
    if (ev.key === "Enter" || ev.key === " ") {
      if (ev.key === " ") ev.preventDefault();
      playSlash();
    }
  }

  overlay.addEventListener("click", playSlash);
  document.addEventListener("keydown", onKey);
})();
