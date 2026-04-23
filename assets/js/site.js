// Mobile nav toggle
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => links.classList.toggle('open'));
  }

  // Mark active nav link
  const here = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === here || (here === '' && href === 'index.html')) a.classList.add('active');
  });

  // Publication filtering
  const chips = document.querySelectorAll('.pub-controls .chip');
  const pubs = document.querySelectorAll('.pub-list .pub');
  if (chips.length && pubs.length) {
    chips.forEach(chip => chip.addEventListener('click', () => {
      chips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      const filter = chip.dataset.filter;
      pubs.forEach(p => {
        const tags = (p.dataset.tags || '').split(/\s+/);
        p.style.display = (filter === 'all' || tags.includes(filter)) ? '' : 'none';
      });
    }));
  }

  // Set footer year
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
});
