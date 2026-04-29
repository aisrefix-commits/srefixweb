/* ═══════════════════════════════════════════════════════════════════
   srefix-diagnosis web — script.js (Apple-inspired)
   · Multi-language support (zh / en / ja / ko / es) via i18n.js
   · Apple-style language dropdown
   · Subtle navbar scroll state
   · Mobile hamburger
   · Subtle scroll reveal
   · Smooth anchor scroll with nav offset
   ═══════════════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  const I18N = window.SrefixI18n;
  if (!I18N) {
    console.error('[srefix] i18n.js failed to load');
    return;
  }

  let currentLang = I18N.getLang();

  const navbar      = document.getElementById('navbar');
  const langMenu    = document.getElementById('langMenu');
  const langButton  = document.getElementById('langButton');
  const langOptions = document.getElementById('langOptions');
  const langCurrent = document.getElementById('langCurrent');
  const hamburger   = document.getElementById('hamburger');
  const mobileMenu  = document.getElementById('mobileMenu');

  /* ══════════════════════════════════════════════════════════════════
     1. LANGUAGE SYSTEM
     ══════════════════════════════════════════════════════════════════ */
  function applyLanguage(lang) {
    if (!I18N.TRANSLATIONS[lang]) lang = I18N.DEFAULT_LANG;
    currentLang = lang;
    I18N.setLang(lang);

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const text = I18N.t(key, lang);
      if (text != null) el.innerHTML = text;
    });

    document.querySelectorAll('[data-i18n-attr]').forEach(el => {
      const spec = el.getAttribute('data-i18n-attr');
      spec.split(',').forEach(pair => {
        const [attr, key] = pair.split(':').map(s => s.trim());
        if (attr && key) el.setAttribute(attr, I18N.t(key, lang));
      });
    });

    const info = I18N.info(lang);
    document.documentElement.lang = info.htmlLang;

    const titleKey = document.body.getAttribute('data-i18n-title') || 'meta.title';
    document.title = I18N.t(titleKey, lang);

    const metaDesc = document.querySelector('meta[name="description"]');
    const descKey = document.body.getAttribute('data-i18n-desc') || 'meta.description';
    if (metaDesc) metaDesc.setAttribute('content', I18N.t(descKey, lang));

    if (langCurrent) langCurrent.textContent = info.short;

    if (langOptions) {
      langOptions.querySelectorAll('button[data-lang]').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
        btn.setAttribute('aria-checked', btn.getAttribute('data-lang') === lang ? 'true' : 'false');
      });
    }
  }

  function buildLangMenu() {
    if (!langOptions) return;
    langOptions.innerHTML = '';
    I18N.LANGUAGES.forEach(l => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'lang-option';
      btn.setAttribute('role', 'menuitemradio');
      btn.setAttribute('data-lang', l.code);
      btn.setAttribute('lang', l.htmlLang);
      btn.textContent = l.label;
      btn.addEventListener('click', () => {
        applyLanguage(l.code);
        closeLangMenu();
      });
      langOptions.appendChild(btn);
    });
  }

  function openLangMenu() {
    if (!langMenu) return;
    langMenu.classList.add('open');
    langButton && langButton.setAttribute('aria-expanded', 'true');
  }
  function closeLangMenu() {
    if (!langMenu) return;
    langMenu.classList.remove('open');
    langButton && langButton.setAttribute('aria-expanded', 'false');
  }
  function toggleLangMenu() {
    if (!langMenu) return;
    if (langMenu.classList.contains('open')) closeLangMenu();
    else openLangMenu();
  }

  if (langButton) {
    langButton.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleLangMenu();
    });
    document.addEventListener('click', (e) => {
      if (langMenu && !langMenu.contains(e.target)) closeLangMenu();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeLangMenu();
    });
  }

  buildLangMenu();
  applyLanguage(currentLang);

  /* ══════════════════════════════════════════════════════════════════
     2. NAVBAR — subtle blur opacity step
     ══════════════════════════════════════════════════════════════════ */
  function onScroll() {
    if (!navbar) return;
    if (window.scrollY > 12) {
      navbar.style.background = 'rgba(255,255,255,0.82)';
    } else {
      navbar.style.background = 'rgba(255,255,255,0.72)';
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ══════════════════════════════════════════════════════════════════
     3. MOBILE HAMBURGER
     ══════════════════════════════════════════════════════════════════ */
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      const open = mobileMenu.classList.toggle('open');
      hamburger.classList.toggle('open', open);
      hamburger.setAttribute('aria-expanded', open);
      document.body.style.overflow = open ? 'hidden' : '';
    });

    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }

  /* ══════════════════════════════════════════════════════════════════
     4. SCROLL REVEAL
     ══════════════════════════════════════════════════════════════════ */
  document.querySelectorAll(
    '.spotlight-inner, .section-header, .mini-card, .arch-card, .step-card, .final-inner'
  ).forEach(el => el.classList.add('reveal'));

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

  /* ══════════════════════════════════════════════════════════════════
     5. SMOOTH ANCHOR SCROLL with nav offset
     ══════════════════════════════════════════════════════════════════ */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (!target) return;
      e.preventDefault();

      const navHeight = parseInt(
        getComputedStyle(document.documentElement).getPropertyValue('--nav-h'),
        10
      ) || 44;
      const top = target.getBoundingClientRect().top + window.scrollY - navHeight - 8;

      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
})();
