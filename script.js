document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  this.querySelector('button').textContent = 'Thanks for submitting!';
  this.reset();
});

// Modals: Book a Consultation and Know More About Shweta
document.querySelectorAll('[data-open]').forEach(b => b.addEventListener('click', () => { document.getElementById(b.dataset.open).hidden = false; }));
document.querySelectorAll('.modal').forEach(m => m.addEventListener('click', e => { if (e.target === m || e.target.hasAttribute('data-close')) m.hidden = true; }));
document.addEventListener('keydown', e => { if (e.key === 'Escape') document.querySelectorAll('.modal').forEach(m => m.hidden = true); });
document.getElementById('consultForm').addEventListener('submit', e => {
  e.preventDefault();
  document.getElementById('consultOk').textContent = 'Thank you! We will contact you shortly.';
  e.target.reset();
});

// Media: click a clipping to view it larger
document.querySelectorAll('[data-img]').forEach(b => b.addEventListener('click', () => {
  document.getElementById('lbImg').src = b.dataset.img;
  document.getElementById('lightbox').hidden = false;
}));

