window.addEventListener("load", () => {
  document.querySelectorAll(".fade").forEach(el => {
    el.classList.add("active");
  });
});

// Floating hearts
const heartsContainer = document.querySelector(".hearts");
if (heartsContainer) {
  setInterval(() => {
    const heart = document.createElement("span");
    heart.innerHTML = "💜";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 12 + "px";
    heartsContainer.appendChild(heart);
    setTimeout(() => heart.remove(), 8000);
  }, 500);
}

function goNext() {
  window.location.href = "question.html";
}

function yesClicked() {
  window.location.href = "rewards.html";
}

// No button chaos
let dodgeCount = 0;
const noBtn = document.getElementById("noBtn");

if (noBtn) {
  noBtn.addEventListener("mouseover", () => {
    if (dodgeCount < 3) {
      noBtn.style.left = Math.random() * (window.innerWidth - 300) + "px";
      noBtn.style.top = Math.random() * (window.innerHeight - 150) + "px";
      dodgeCount++;
    }
  });

  noBtn.addEventListener("click", () => {
    alert("You heb NOOO choice 😤💜");
    window.location.href = "rewards.html";
  });
}
