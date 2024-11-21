// Log simple pour vérifier que le fichier est bien chargé
console.log("JavaScript chargé depuis script.js");

// Initialiser AOS
document.addEventListener('DOMContentLoaded', function() {
  AOS.init({
    duration: 1200, // Durée des animations AOS
    once: true,     // Les animations AOS ne se déclenchent qu'une seule fois
  });
});

// Initialiser ScrollReveal
ScrollReveal().reveal('.reveal', {
  duration: 1000,
  origin: 'bottom',
  distance: '50px',
  easing: 'ease-in-out',
});

// Ajouter un évènement de clic au bouton de contact
document.addEventListener('DOMContentLoaded', () => {
  const contactButton = document.getElementById('contactButton');
  if (contactButton) {
    contactButton.addEventListener('click', () => {
      alert('Merci de nous contacter !');
    });
  }
});

// Fonction pour changer le style du document au clic
document.addEventListener('DOMContentLoaded', () => {
  // Modifier le texte du header <h1> si trouvé
  const header = document.querySelector('h1');
  if (header) {
    header.textContent = "Bienvenue sur notre site - JavaScript est actif!";
  }

  // Ajouter un évènement au bouton (testButton)
  const button = document.getElementById('testButton');
  if (button) {
    button.addEventListener('click', () => {
      alert("Bouton cliqué!");
      document.body.style.backgroundColor = "lightyellow";
    });
  }
});
