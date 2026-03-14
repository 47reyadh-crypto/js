const sectionSelect = document.getElementById('sectionSelect');
const accordions = Array.from(document.querySelectorAll('.accordion'));

if (sectionSelect) {
  sectionSelect.addEventListener('change', (event) => {
    const value = event.target.value;
    accordions.forEach((section) => section.classList.add('is-hidden'));
    const target = document.querySelector(value);
    if (!target) return;
    target.classList.remove('is-hidden');
    const btn = target.querySelector('.accordion-btn');
    const panel = target.querySelector('.accordion-panel');
    if (btn && panel) {
      btn.setAttribute('aria-expanded', 'true');
      panel.removeAttribute('hidden');
    }
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}

const accordionButtons = document.querySelectorAll('.accordion-btn');

accordionButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!expanded));
    const panel = btn.nextElementSibling;
    if (panel) {
      panel.toggleAttribute('hidden', expanded);
    }
  });
});

// Hide all sections on load until a dropdown selection is made.
accordions.forEach((section) => section.classList.add('is-hidden'));
