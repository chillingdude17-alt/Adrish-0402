// Scroll reveal
window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);

function reveal() {
  document.querySelectorAll(".fade").forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
}

// Floating hearts
const heartsContainer = document.querySelector(".hearts");

if (heartsContainer) {
  setInterval(() => {
    const heart = document.createElement("span");
    heart.innerHTML = "💜";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 10 + "px";
    heart.style.animationDuration = Math.random() * 4 + 6 + "s";
    heartsContainer.appendChild(heart);

    setTimeout(() => heart.remove(), 8000);
  }, 500);
}

// Navigation
function goNext() {
  window.location.href = "question.html";
}

function yesClicked() {
  window.location.href = "rewards.html";
}

// Whack-a-mole button
let dodgeCount = 0;
const noBtn = document.getElementById("noBtn");

if (noBtn) {
  noBtn.addEventListener("mouseover", () => {
    if (dodgeCount < 3) {
      noBtn.style.left = Math.random() * (window.innerWidth - 160) + "px";
      noBtn.style.top = Math.random() * (window.innerHeight - 100) + "px";
      dodgeCount++;
    }
  });

  noBtn.addEventListener("click", () => {
    alert(
      "Kumro Potash ekta! 😤🔥\nYou heb NOOO choice.\nImma your Valentine 💜"
    );
    window.location.href = "rewards.html";
  });
}
