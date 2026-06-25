document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thanks! Your message has been sent.");
  e.target.reset();
});
document.addEventListener("DOMContentLoaded", function () {
  const productCarousel = document.getElementById("productCarousel");
  const leftBtn = document.getElementById("leftBtn");
  const rightBtn = document.getElementById("rightBtn");

  leftBtn.addEventListener("click", function () {
    productCarousel.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  });

  rightBtn.addEventListener("click", function () {
    productCarousel.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  });
});
const heroImages = [
  "images/buildingg.jpg",
  "images/cuuu.jpg",
  "images/taping.jpg",
  "images/ju.jpg",
  "images/fibre.jpg",
  "images/Kapton Cov Strip",
];
const menuToggle = document.getElementById("mobile-menu");
const navList = document.querySelector(".nav-list");

menuToggle.addEventListener("click", () => {
  navList.classList.toggle("active");
});
function captchaVerified() {
  document.getElementById("submitBtn").disabled = false;
  document.getElementById("submitBtn").classList.add("enabled");
}

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = this.name.value.trim();
  const email = this.email.value.trim();
  const message = this.message.value.trim();

  if (name && email && message) {
    alert("Message sent successfully!");
    this.reset();
    grecaptcha.reset();
    document.getElementById("submitBtn").disabled = true;
    document.getElementById("submitBtn").classList.remove("enabled");
  } else {
    alert("Please fill all the fields correctly.");
  }
});
