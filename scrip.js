const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          entry.target.classList.add('visible');
      }
  });

}, {
  threshold: 0.1
});

document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

document.querySelectorAll('.tech-icon').forEach(icon => {
    icon.addEventListener('mouseover', function() {
      this.style.transform = 'scale(1.2)';
      this.style.transition = 'transform 0.3s ease';
    });
  
    icon.addEventListener('mouseout', function() {
      this.style.transform = 'scale(1)';
      this.style.transition = 'transform 0.3s ease'; 
    });
  });
  

  document.querySelectorAll('.skill-bar').forEach(bar => {
    bar.style.width = '0%';
  });

  const obs = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {

        document.querySelectorAll('.skill-bar').forEach(bar => {
          const targetWidth = bar.getAttribute('data-width');
          bar.style.transition = 'width 2s ease-in-out';
          bar.style.width = `${targetWidth}%`;
        });
        observer.disconnect();
      }
    });
  }, { threshold: 0.1 });
  
  const skillsSection = document.getElementById('skills');
  obs.observe(skillsSection);
  
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  const menuOverlay = document.querySelector('.menu-overlay');
  const mobileMenuLinks = document.querySelectorAll('.mobile-menu a');

  function toggleMenu() {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    menuOverlay.classList.toggle('active');
    document.body.classList.toggle('overflow-hidden');
  }

  hamburger.addEventListener('click', toggleMenu);
  menuOverlay.addEventListener('click', toggleMenu);

  mobileMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
      toggleMenu();
    });
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && mobileMenu.classList.contains('active')) {
      toggleMenu();
    }
  });