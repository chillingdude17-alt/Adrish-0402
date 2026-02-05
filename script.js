// Scroll reveal
window.addEventListener("scroll", () => {
  document.querySelectorAll(".reveal").forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
});

function goNext() {
  window.location.href = "question.html";
}

function yesClicked() {
  window.location.href = "rewards.html";
}

// Whack-a-mole logic
let dodgeCount = 0;
const noBtn = document.getElementById("noBtn");

if (noBtn) {
  noBtn.addEventListener("mouseover", () => {
    if (dodgeCount < 3) {
      const x = Math.random() * (window.innerWidth - 150);
      const y = Math.random() * (window.innerHeight - 150);
      noBtn.style.left = `${x}px`;
      noBtn.style.top = `${y}px`;
      dodgeCount++;
    }
  });

  noBtn.addEventListener("click", () => {
    alert("Kumro Potash ekta! You heb NOOO choice 😤❤️\nImma your Valentine.");
    window.location.href = "rewards.html";
  });
}
