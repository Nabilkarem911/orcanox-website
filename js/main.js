/* ============================================
   Orcanox — Main JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // Current year in footer
  document.getElementById('year').textContent = new Date().getFullYear();

  // ============================================
  // Navbar scroll effect
  // ============================================
  const navbar = document.getElementById('navbar');
  let lastScrollY = 0;

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    if (scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    lastScrollY = scrollY;
  });

  // ============================================
  // Mobile menu
  // ============================================
  const menuBtn = document.getElementById('mobileMenuBtn');
  const navLinks = document.querySelector('.nav-links');

  menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    navLinks.classList.toggle('open');
  });

  // Close mobile menu on link click
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      menuBtn.classList.remove('active');
      navLinks.classList.remove('open');
    });
  });

  // ============================================
  // Animated counters
  // ============================================
  const counters = document.querySelectorAll('.stat-number');
  
  const animateCounter = (el) => {
    const target = parseInt(el.getAttribute('data-target'));
    const isPercentage = el.closest('.about-stat-card') !== null;
    const suffix = isPercentage ? '%' : '';
    
    el.textContent = '0' + suffix;
    
    const duration = 2000;
    const startTime = performance.now();
    
    const update = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(eased * target);
      
      el.textContent = target > 99 ? current + '+' : current + suffix;
      
      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        el.textContent = target + (target > 99 ? '+' : suffix);
      }
    };
    
    requestAnimationFrame(update);
  };

  // Intersection Observer for counters
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => counterObserver.observe(counter));

  // ============================================
  // Service cards staggered animation
  // ============================================
  const serviceCards = document.querySelectorAll('.service-card');
  
  const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const delay = parseInt(entry.target.getAttribute('data-delay')) || 0;
        entry.target.style.animationDelay = delay + 'ms';
        entry.target.style.opacity = '1';
        entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
        cardObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  serviceCards.forEach(card => {
    card.style.opacity = '0';
    cardObserver.observe(card);
  });

  // ============================================
  // Platform cards reveal
  // ============================================
  const platformCards = document.querySelectorAll('.platform-card');
  
  const platformObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
        platformObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  platformCards.forEach((card, i) => {
    card.style.opacity = '0';
    card.style.animationDelay = (i * 100) + 'ms';
    platformObserver.observe(card);
  });

  // ============================================
  // Smooth scroll for anchor links
  // ============================================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // ============================================
  // Parallax orbs
  // ============================================
  const orbs = document.querySelectorAll('.gradient-orb');
  
  document.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;
    
    orbs.forEach((orb, i) => {
      const factor = (i + 1) * 0.3;
      orb.style.transform = `translate(${x * factor}px, ${y * factor}px)`;
    });
  });
});
