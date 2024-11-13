// Smooth scrolling for navigation
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      target.scrollIntoView({ behavior: 'smooth' });
    });
  });
  
  // Flashing "Contact Me" button
  const contactButton = document.querySelector('#contact h2');
  setInterval(() => {
    contactButton.style.color =
      contactButton.style.color === 'yellow' ? '#00ff00' : 'yellow';
  }, 500);
  