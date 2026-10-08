// Header dropdown
const menu = document.getElementById('menu');
const toggle = menu.querySelector('.dropdown-toggle');
function setOpen(open) {
  menu.classList.toggle('open', open);
  toggle.setAttribute('aria-expanded', open);
}
toggle.addEventListener('click', () => setOpen(!menu.classList.contains('open')));
document.addEventListener('click', e => { if (!menu.contains(e.target)) setOpen(false); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') setOpen(false); });
