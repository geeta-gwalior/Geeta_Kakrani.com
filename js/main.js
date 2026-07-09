/* ============================================
   GEETA KAKRANI | AI CONSULTANCY
   Main JavaScript — Shared across all pages
   ============================================ */

// ── NAVBAR ──────────────────────────────────
(function initNavbar() {
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('navHamburger');
  const mobileNav = document.getElementById('mobileNav');
  let menuOpen = false;

  // Scroll effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }, { passive: true });

  // Hamburger toggle
  if (hamburger) {
    hamburger.addEventListener('click', () => {
      menuOpen = !menuOpen;
      mobileNav.classList.toggle('open', menuOpen);
      hamburger.setAttribute('aria-expanded', menuOpen);
      // Animate bars
      const bars = hamburger.querySelectorAll('span');
      if (menuOpen) {
        bars[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        bars[1].style.opacity = '0';
        bars[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
      } else {
        bars[0].style.transform = '';
        bars[1].style.opacity = '';
        bars[2].style.transform = '';
      }
    });
  }

  // Close mobile menu on link click
  if (mobileNav) {
    mobileNav.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        menuOpen = false;
        mobileNav.classList.remove('open');
        const bars = hamburger.querySelectorAll('span');
        bars[0].style.transform = '';
        bars[1].style.opacity = '';
        bars[2].style.transform = '';
      });
    });
  }

  // Set active nav link based on current page
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .nav-mobile a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
})();


// ── SCROLL REVEAL ────────────────────────────
(function initScrollReveal() {
  const revealEls = document.querySelectorAll('.reveal');
  if (!revealEls.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  revealEls.forEach(el => observer.observe(el));
})();


// ── COUNTER ANIMATION ───────────────────────
function animateCounter(el, target, duration = 1600) {
  const start = performance.now();
  const isFloat = target % 1 !== 0;

  function update(timestamp) {
    const elapsed = timestamp - start;
    const progress = Math.min(elapsed / duration, 1);
    // Ease out cubic
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = eased * target;
    el.textContent = isFloat ? current.toFixed(1) : Math.floor(current).toLocaleString();
    if (progress < 1) requestAnimationFrame(update);
  }

  requestAnimationFrame(update);
}

function initCounters() {
  const counterEls = document.querySelectorAll('[data-counter]');
  if (!counterEls.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseFloat(el.dataset.counter);
        animateCounter(el, target);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  counterEls.forEach(el => observer.observe(el));
}

document.addEventListener('DOMContentLoaded', initCounters);


// ── NEWSLETTER FORM ──────────────────────────
(function initNewsletter() {
  const forms = document.querySelectorAll('.newsletter-form');
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = form.querySelector('input[type="email"]');
      const btn = form.querySelector('button');
      if (!input.value.includes('@')) {
        input.style.borderColor = '#f87171';
        setTimeout(() => input.style.borderColor = '', 2000);
        return;
      }
      btn.textContent = '✓ Subscribed!';
      btn.style.background = '#14b8a6';
      btn.style.color = 'white';
      input.value = '';
      setTimeout(() => {
        btn.textContent = 'Subscribe';
        btn.style.background = '';
        btn.style.color = '';
      }, 3000);
    });
  });
})();


// ── SMOOTH ANCHOR SCROLL ─────────────────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-height')) || 72;
      const top = target.getBoundingClientRect().top + window.scrollY - offset - 16;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});


// ── CONTACT FORM ─────────────────────────────
(function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('.form-submit-btn');
    const originalText = btn.textContent;

    btn.textContent = 'Sending…';
    btn.disabled = true;

    setTimeout(() => {
      btn.textContent = '✓ Message Sent!';
      btn.style.background = '#14b8a6';
      form.reset();
      setTimeout(() => {
        btn.textContent = originalText;
        btn.disabled = false;
        btn.style.background = '';
      }, 4000);
    }, 1400);
  });
})();


// ── FILTER BUTTONS (talks / tutorials) ───────
function initFilters(containerSelector, cardSelector, attrName) {
  const container = document.querySelector(containerSelector);
  if (!container) return;

  const filterBtns = container.querySelectorAll('.filter-btn');
  const allCards = document.querySelectorAll(cardSelector);

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;

      allCards.forEach(card => {
        if (filter === 'all' || card.dataset[attrName] === filter) {
          card.style.display = '';
          card.classList.remove('hidden');
        } else {
          card.style.display = 'none';
          card.classList.add('hidden');
        }
      });
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initFilters('#talksFilters', '[data-talk-type]', 'talkType');
  initFilters('#tutorialFilters', '[data-tutorial-cat]', 'tutorialCat');
});


// ── TUTORIAL SEARCH ───────────────────────────
(function initTutorialSearch() {
  const searchInput = document.getElementById('tutorialSearch');
  if (!searchInput) return;

  searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase().trim();
    const cards = document.querySelectorAll('[data-tutorial-cat]');

    cards.forEach(card => {
      const title = card.querySelector('h4')?.textContent.toLowerCase() || '';
      const desc = card.querySelector('p')?.textContent.toLowerCase() || '';
      const visible = title.includes(query) || desc.includes(query);
      card.style.display = visible ? '' : 'none';
    });
  });
})();


// ── TYPING EFFECT (hero) ─────────────────────
function initTypingEffect() {
  const el = document.getElementById('typingText');
  if (!el) return;

  const phrases = [
    'Enterprise AI Strategy',
    'GenAI Implementation',
    'Agentic AI Systems',
    'RAG Architecture',
    'LLM Solutions'
  ];

  let phraseIndex = 0;
  let charIndex = 0;
  let deleting = false;
  let pauseTimer = null;

  function tick() {
    const current = phrases[phraseIndex];

    if (!deleting) {
      charIndex++;
      el.textContent = current.slice(0, charIndex);
      if (charIndex === current.length) {
        deleting = true;
        clearTimeout(pauseTimer);
        pauseTimer = setTimeout(tick, 2200);
        return;
      }
    } else {
      charIndex--;
      el.textContent = current.slice(0, charIndex);
      if (charIndex === 0) {
        deleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
      }
    }

    const speed = deleting ? 48 : 72;
    setTimeout(tick, speed);
  }

  setTimeout(tick, 800);
}

document.addEventListener('DOMContentLoaded', initTypingEffect);


// ── PARALLAX (subtle) ────────────────────────
(function initParallax() {
  const heroGlow = document.querySelector('.hero::after');
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    document.querySelectorAll('[data-parallax]').forEach(el => {
      const speed = parseFloat(el.dataset.parallax) || 0.15;
      el.style.transform = `translateY(${scrollY * speed}px)`;
    });
  }, { passive: true });
})();
