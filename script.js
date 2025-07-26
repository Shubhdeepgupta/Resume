function toggleMenu() {
    const menu = document.querySelector(".menu-links")
    const icon = document.querySelector(".hamburger-icon")
    menu.classList.toggle("open")
    icon.classList.toggle("open")

}

// Show/hide the button on scroll
function debounce(func, delay) {
  let timeout;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), delay);
  };
}

function scrollFunction() {
  const topBtn = document.getElementById("topBtn");
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
}

// Attach debounced scroll handler
window.addEventListener("scroll", debounce(scrollFunction, 100)); // Run at most every 100ms


// Scroll to top when clicked
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  loader.style.display = "none";
});

window.addEventListener("DOMContentLoaded", () => {
  const typingText = document.querySelector(".typing");
  typingText.textContent = "Full Stack Developer";
});


document.addEventListener("DOMContentLoaded", () => {
  const typedTextSpan = document.querySelector(".typed-text");
  const cursorSpan = document.querySelector(".cursor");

  const textArray = [
    "Full Stack Developer",
    "DevOps Engineer",
    "Cloud Enthusiast",
    "Linux Expert"
  ];
  const typingDelay = 100;
  const erasingDelay = 50;
  const newTextDelay = 1500; // Delay between texts
  let textArrayIndex = 0;
  let charIndex = 0;

  function type() {
    if (charIndex < textArray[textArrayIndex].length) {
      typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, typingDelay);
    } else {
      setTimeout(erase, newTextDelay);
    }
  }

  function erase() {
    if (charIndex > 0) {
      typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(erase, erasingDelay);
    } else {
      textArrayIndex++;
      if (textArrayIndex >= textArray.length) textArrayIndex = 0;
      setTimeout(type, typingDelay + 500);
    }
  }

  setTimeout(type, 1000); // Start typing after page load
});


function toggleDarkMode() {
  const body = document.body;
  const icon = document.getElementById("theme-icon");
  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    icon.src = "https://cdn-icons-png.flaticon.com/512/869/869869.png"; // Sun icon
    localStorage.setItem("theme", "dark");
  } else {
    icon.src = "https://cdn-icons-png.flaticon.com/512/3073/3073665.png"; // Moon icon
    localStorage.setItem("theme", "light");
  }
}

// Apply saved theme on page load
window.addEventListener("DOMContentLoaded", () => {
  const theme = localStorage.getItem("theme");
  const icon = document.getElementById("theme-icon");
  if (theme === "dark") {
    document.body.classList.add("dark-mode");
    icon.src = "https://cdn-icons-png.flaticon.com/512/869/869869.png"; // Sun
  } else {
    icon.src = "https://cdn-icons-png.flaticon.com/512/3073/3073665.png"; // Moon
  }
});


function openModal() {
  document.getElementById("resumeModal").style.display = "block";
}
function closeModal() {
  document.getElementById("resumeModal").style.display = "none";
}





