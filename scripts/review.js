document.addEventListener("DOMContentLoaded", () => {
  let reviewCount = Number(localStorage.getItem("reviewCounter")) || 0;
  reviewCount++;
  localStorage.setItem("reviewCounter", reviewCount);

  const counterElement = document.getElementById("review-counter");
  if (counterElement) {
    counterElement.textContent = reviewCount;
  }

  const yearSpan = document.getElementById("currentyear");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});