document.getElementById("rewardBtn")?.addEventListener("click", () => {
  window.location.href = "question.html";
});

let tries = 0;
const runaway = document.getElementById("runawayBtn");

runaway?.addEventListener("mouseenter", () => {
  tries++;
  if (tries < 4) {
    runaway.style.transform = `translate(${Math.random()*200-100}px, ${Math.random()*200-100}px)`;
  } else {
    runaway.onclick = () => {
      alert("Kumro Potash ekta! You heb NOOO choice, Imma your Valentine 💜");
      window.location.href = "rewards.html";
    };
  }
});

function goReward() {
  window.location.href = "rewards.html";
}
