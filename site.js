document.querySelectorAll('.mobile-menu-toggle').forEach((button) => {
  const nav = button.closest('.nav');
  const links = nav && nav.querySelector('.links');
  if (!nav || !links) return;

  button.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('menu-open');
    button.setAttribute('aria-expanded', String(isOpen));
    button.textContent = isOpen ? 'Close' : 'Menu';
  });

  links.addEventListener('click', (event) => {
    if (!event.target.closest('a')) return;
    nav.classList.remove('menu-open');
    button.setAttribute('aria-expanded', 'false');
    button.textContent = 'Menu';
  });
});
