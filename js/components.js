/* ============================================
   SHARED COMPONENTS
   Navbar + Footer injected on every page
   ============================================ */

const NAV_HTML = `
<nav class="navbar" id="navbar">
  <div class="nav-inner">
    <a href="../index.html" class="nav-logo" aria-label="Geeta Kakrani Home">
      <span class="nav-logo-name">Geeta Kakrani</span>
      <span class="nav-logo-title">AI Consultant · GDE</span>
    </a>
    <div class="nav-links">
      <a href="../index.html">Home</a>
      <a href="../pages/about.html">About</a>
      <a href="../pages/services.html">Services</a>
      <a href="../pages/case-studies.html">Case Studies</a>
      <a href="../pages/talks.html">Talks</a>
      <a href="../pages/tutorials.html">Tutorials</a>
      <a href="../pages/blog.html">Blog</a>
      <a href="../pages/media.html">Media</a>
      <a href="../pages/resources.html">Resources</a>
    </div>
    <div class="nav-cta">
      <a href="../pages/contact.html" class="btn btn-primary btn-sm">Book Consultation</a>
    </div>
    <button class="nav-hamburger" id="navHamburger" aria-label="Toggle menu" aria-expanded="false">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>
<nav class="nav-mobile" id="mobileNav">
  <a href="../index.html">Home</a>
  <a href="../pages/about.html">About</a>
  <a href="../pages/services.html">Services</a>
  <a href="../pages/case-studies.html">Case Studies</a>
  <a href="../pages/talks.html">Talks</a>
  <a href="../pages/tutorials.html">Tutorials</a>
  <a href="../pages/blog.html">Blog</a>
  <a href="../pages/media.html">Media</a>
  <a href="../pages/resources.html">Resources</a>
  <a href="../pages/contact.html" style="color:var(--teal-600);font-weight:600;">Book Consultation →</a>
</nav>
`;

const FOOTER_HTML = `
<footer class="footer">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <div>
          <div class="footer-logo-name">Geeta Kakrani</div>
          <div class="footer-logo-title">AI Consultant · Enterprise AI Strategist · GDE</div>
        </div>
        <p>Helping enterprises and startups build practical, scalable AI systems. From strategy to production-grade GenAI, LLM, and agentic architectures.</p>
        <div class="footer-social">
          <a href="https://www.linkedin.com/in/geetakakrani/" target="_blank" rel="noopener" title="LinkedIn">in</a>
          <a href="https://github.com/geeta-gwalior" target="_blank" rel="noopener" title="GitHub">gh</a>
          <a href="https://medium.com/@Geetakakrani" target="_blank" rel="noopener" title="Medium">M</a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener" title="Instagram">ig</a>
        </div>
      </div>
      <div class="footer-col">
        <h4>Services</h4>
        <a href="../pages/services.html">AI Strategy Consulting</a>
        <a href="../pages/services.html">Agentic AI Systems</a>
        <a href="../pages/services.html">Enterprise LLM Solutions</a>
        <a href="../pages/services.html">RAG Pipelines</a>
        <a href="../pages/services.html">Vertex AI Consulting</a>
        <a href="../pages/services.html">AI Workshops</a>
      </div>
      <div class="footer-col">
        <h4>Content</h4>
        <a href="../pages/talks.html">Conference Talks</a>
        <a href="../pages/tutorials.html">Tutorials</a>
        <a href="../pages/blog.html">Blog</a>
        <a href="../pages/media.html">Media</a>
        <a href="../pages/case-studies.html">Case Studies</a>
        <a href="../pages/resources.html">Resources</a>
      </div>
      <div class="footer-col">
        <h4>Connect</h4>
        <a href="../pages/contact.html">Book a Consultation</a>
        <a href="../pages/about.html">About Geeta</a>
        <a href="https://www.linkedin.com/in/geetakakrani/" target="_blank" rel="noopener">LinkedIn</a>
        <a href="https://github.com/geeta-gwalior" target="_blank" rel="noopener">GitHub</a>
        <a href="https://medium.com/@Geetakakrani" target="_blank" rel="noopener">Medium Articles</a>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© 2025 Geeta Kakrani. Built with intent, not just code.</span>
      <span>AI Consultant · GDE · <a href="https://www.linkedin.com/in/geetakakrani/" target="_blank">LinkedIn</a></span>
    </div>
  </div>
</footer>
`;

// HOME-specific nav (paths from root)
const NAV_HTML_HOME = `
<nav class="navbar" id="navbar">
  <div class="nav-inner">
    <a href="index.html" class="nav-logo" aria-label="Geeta Kakrani Home">
      <span class="nav-logo-name">Geeta Kakrani</span>
      <span class="nav-logo-title">AI Consultant · GDE</span>
    </a>
    <div class="nav-links">
      <a href="index.html" class="active">Home</a>
      <a href="pages/about.html">About</a>
      <a href="pages/services.html">Services</a>
      <a href="pages/case-studies.html">Case Studies</a>
      <a href="pages/talks.html">Talks</a>
      <a href="pages/tutorials.html">Tutorials</a>
      <a href="pages/blog.html">Blog</a>
      <a href="pages/media.html">Media</a>
      <a href="pages/resources.html">Resources</a>
    </div>
    <div class="nav-cta">
      <a href="pages/contact.html" class="btn btn-primary btn-sm">Book Consultation</a>
    </div>
    <button class="nav-hamburger" id="navHamburger" aria-label="Toggle menu" aria-expanded="false">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>
<nav class="nav-mobile" id="mobileNav">
  <a href="index.html">Home</a>
  <a href="pages/about.html">About</a>
  <a href="pages/services.html">Services</a>
  <a href="pages/case-studies.html">Case Studies</a>
  <a href="pages/talks.html">Talks</a>
  <a href="pages/tutorials.html">Tutorials</a>
  <a href="pages/blog.html">Blog</a>
  <a href="pages/media.html">Media</a>
  <a href="pages/resources.html">Resources</a>
  <a href="pages/contact.html" style="color:var(--teal-600);font-weight:600;">Book Consultation →</a>
</nav>
`;

const FOOTER_HTML_HOME = `
<footer class="footer">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <div>
          <div class="footer-logo-name">Geeta Kakrani</div>
          <div class="footer-logo-title">AI Consultant · Enterprise AI Strategist · GDE</div>
        </div>
        <p>Helping enterprises and startups build practical, scalable AI systems. From strategy to production-grade GenAI, LLM, and agentic architectures.</p>
        <div class="footer-social">
          <a href="https://www.linkedin.com/in/geetakakrani/" target="_blank" rel="noopener" title="LinkedIn">in</a>
          <a href="https://github.com/geeta-gwalior" target="_blank" rel="noopener" title="GitHub">gh</a>
          <a href="https://medium.com/@Geetakakrani" target="_blank" rel="noopener" title="Medium">M</a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener" title="Instagram">ig</a>
        </div>
      </div>
      <div class="footer-col">
        <h4>Services</h4>
        <a href="pages/services.html">AI Strategy Consulting</a>
        <a href="pages/services.html">Agentic AI Systems</a>
        <a href="pages/services.html">Enterprise LLM Solutions</a>
        <a href="pages/services.html">RAG Pipelines</a>
        <a href="pages/services.html">Vertex AI Consulting</a>
        <a href="pages/services.html">AI Workshops</a>
      </div>
      <div class="footer-col">
        <h4>Content</h4>
        <a href="pages/talks.html">Conference Talks</a>
        <a href="pages/tutorials.html">Tutorials</a>
        <a href="pages/blog.html">Blog</a>
        <a href="pages/media.html">Media</a>
        <a href="pages/case-studies.html">Case Studies</a>
        <a href="pages/resources.html">Resources</a>
      </div>
      <div class="footer-col">
        <h4>Connect</h4>
        <a href="pages/contact.html">Book a Consultation</a>
        <a href="pages/about.html">About Geeta</a>
        <a href="https://www.linkedin.com/in/geetakakrani/" target="_blank" rel="noopener">LinkedIn</a>
        <a href="https://github.com/geeta-gwalior" target="_blank" rel="noopener">GitHub</a>
        <a href="https://medium.com/@Geetakakrani" target="_blank" rel="noopener">Medium Articles</a>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© 2025 Geeta Kakrani. Built with intent, not just code.</span>
      <span>AI Consultant · GDE · <a href="https://www.linkedin.com/in/geetakakrani/" target="_blank">LinkedIn</a></span>
    </div>
  </div>
</footer>
`;

// Inject on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  const isHome = !window.location.pathname.includes('/pages/');

  // Inject navbar
  const navPlaceholder = document.getElementById('nav-placeholder');
  if (navPlaceholder) {
    navPlaceholder.outerHTML = isHome ? NAV_HTML_HOME : NAV_HTML;
  }

  // Inject footer
  const footerPlaceholder = document.getElementById('footer-placeholder');
  if (footerPlaceholder) {
    footerPlaceholder.outerHTML = isHome ? FOOTER_HTML_HOME : FOOTER_HTML;
  }

  // Re-run navbar init after injection
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('navHamburger');
  const mobileNav = document.getElementById('mobileNav');

  if (navbar && hamburger && mobileNav) {
    let menuOpen = false;

    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 20);
    }, { passive: true });

    hamburger.addEventListener('click', () => {
      menuOpen = !menuOpen;
      mobileNav.classList.toggle('open', menuOpen);
      const bars = hamburger.querySelectorAll('span');
      if (menuOpen) {
        bars[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        bars[1].style.opacity = '0';
        bars[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
      } else {
        bars.forEach(b => { b.style.transform = ''; b.style.opacity = ''; });
      }
    });

    mobileNav.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        menuOpen = false;
        mobileNav.classList.remove('open');
        hamburger.querySelectorAll('span').forEach(b => { b.style.transform = ''; b.style.opacity = ''; });
      });
    });

    // Set active link
    const currentPage = window.location.pathname.split('/').pop();
    document.querySelectorAll('.nav-links a, .nav-mobile a').forEach(link => {
      const href = link.getAttribute('href').split('/').pop();
      if (href === currentPage || (currentPage === '' && href === 'index.html')) {
        link.classList.add('active');
      }
    });
  }
});
