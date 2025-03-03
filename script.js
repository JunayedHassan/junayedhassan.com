const textElement = document.querySelector(".text-rotate");
const words = ["Developer", "Operational Manager", "Dreamer"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentWord = words[wordIndex];
  if (isDeleting) {
    charIndex--;
  } else {
    charIndex++;
  }

  textElement.textContent = currentWord.substring(0, charIndex);

  if (!isDeleting && charIndex === currentWord.length) {
    setTimeout(() => (isDeleting = true), 1000); // Pause before deleting
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length; // Move to next word
  }

  setTimeout(typeEffect, isDeleting ? 50 : 100); // Typing speed
}

typeEffect();



// Function to toggle the display of the mobile-nav
function toggleMenu() {
  // Select the nav and overlay elements
  var nav = document.querySelector('.mobile-nav');
  
  // Toggle the 'active' class to show or hide the menu and overlay
  nav.classList.toggle('active');
  // console.log("first")
}

