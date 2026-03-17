const el = document.getElementById("full");

const txt = "A SLEEPING STUDENT";

const typeCPS = 10;
const deleteCPS = 10;

const pauseAfterType = 900;
const pauseAfterDelete = 350;

const cursor = document.createElement("span");
cursor.className = "cursor";
cursor.textContent = "_";
el.insertAdjacentElement("afterend", cursor);

let i = 0;
let state = "typing";
let last = 0;
let pauseUntil = 0;

function loop(t) {
  if (!last) last = t;

  if (pauseUntil && t < pauseUntil) {
    requestAnimationFrame(loop);
    return;
  } else if (pauseUntil && t >= pauseUntil) {
    pauseUntil = 0;
    last = t;
  }

  const dt = (t - last) / 1000;

  if (state === "typing") {
    const add = Math.floor(dt * typeCPS);
    if (add > 0) {
      i = Math.min(txt.length, i + add);
      el.textContent = txt.slice(0, i);
      last = t;
      if (i >= txt.length) {
        state = "pause1";
        pauseUntil = t + pauseAfterType;
      }
    }
  } else if (state === "pause1") {
    state = "deleting";
    last = t;
  } else if (state === "deleting") {
    const sub = Math.floor(dt * deleteCPS);
    if (sub > 0) {
      i = Math.max(0, i - sub);
      el.textContent = txt.slice(0, i);
      last = t;
      if (i <= 0) {
        state = "pause2";
        pauseUntil = t + pauseAfterDelete;
      }
    }
  } else if (state === "pause2") {
    state = "typing";
    last = t;
  }

  requestAnimationFrame(loop);
}

window.addEventListener("DOMContentLoaded", () => {
  el.textContent = "";
  i = 0;
  state = "typing";
  last = 0;
  pauseUntil = 0;
  requestAnimationFrame(loop);
});