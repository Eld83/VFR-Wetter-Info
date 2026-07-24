document.querySelectorAll('.nav-toggle').forEach(function (btn) {
  var nav = btn.closest('.nav-inner').querySelector('.nav-links');
  if (!nav) return;

  btn.addEventListener('click', function () {
    var isOpen = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    btn.textContent = isOpen ? '✕' : '☰';
  });

  nav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      nav.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
      btn.textContent = '☰';
    });
  });
});

document.querySelectorAll('.lang-switch').forEach(function (wrapper) {
  var toggle = wrapper.querySelector('.lang-switch-toggle');
  var menu = wrapper.querySelector('.lang-switch-menu');
  if (!toggle || !menu) return;

  toggle.addEventListener('click', function (e) {
    e.stopPropagation();
    var isOpen = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });
});

document.addEventListener('click', function () {
  document.querySelectorAll('.lang-switch-menu.open').forEach(function (menu) {
    menu.classList.remove('open');
    var toggle = menu.closest('.lang-switch').querySelector('.lang-switch-toggle');
    if (toggle) toggle.setAttribute('aria-expanded', 'false');
  });
});

document.addEventListener('keydown', function (e) {
  if (e.key !== 'Escape') return;
  document.querySelectorAll('.lang-switch-menu.open').forEach(function (menu) {
    menu.classList.remove('open');
    var toggle = menu.closest('.lang-switch').querySelector('.lang-switch-toggle');
    if (toggle) toggle.setAttribute('aria-expanded', 'false');
  });
});
