console.log("Welcome to my portfolio website!");

document.addEventListener("DOMContentLoaded", function () {
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");

  navToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");
  });
});

function toggleContent() {
  var content = document.getElementById("the-story");
  if (content.style.display === "" || content.style.display === "none") {
    content.style.display = "block";
  } else {
    content.style.display = "none";
  }
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Optional, smooth scrolling animation
  });
}

// Show/hide scroll to top button based on scroll position
window.onscroll = () => {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.querySelector(".scroll-to-top").style.display = "block";
  } else {
    document.querySelector(".scroll-to-top").style.display = "none";
  }
}
