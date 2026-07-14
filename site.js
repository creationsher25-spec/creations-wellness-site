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

const footerAddress = [...document.querySelectorAll('.footer-grid > div')]
  .find((section) => section.textContent.includes('Mailing Address'));

if (footerAddress) {
  footerAddress.classList.add('footer-contact');
  footerAddress.innerHTML = `
    <strong>Mailing Address</strong>
    <span>272 Calhoun Station Parkway, Suite C<br>Madison, MS 39110</span>
    <strong>Email us</strong>
    <a href="mailto:hello@creationswellness.shop">hello@creationswellness.shop</a>
  `;
}
