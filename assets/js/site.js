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
  const applyFilter = (filter) => {
    pubs.forEach(p => {
      const tags = (p.dataset.tags || '').split(/\s+/);
      p.style.display = (filter === 'all' || tags.includes(filter)) ? '' : 'none';
    });
    // Hide year groups that have no visible pubs
    document.querySelectorAll('.year-group').forEach(g => {
      const anyVisible = Array.from(g.querySelectorAll('.pub')).some(p => p.style.display !== 'none');
      g.style.display = anyVisible ? '' : 'none';
    });
  };
  if (chips.length && pubs.length) {
    chips.forEach(chip => chip.addEventListener('click', () => {
      chips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      applyFilter(chip.dataset.filter);
    }));
    // Apply default-active filter on load
    const initial = document.querySelector('.pub-controls .chip.active');
    if (initial) applyFilter(initial.dataset.filter);
  }

  // Set footer year
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // Email obfuscation: build mailto on demand from data-attrs (no plain address in HTML)
  document.querySelectorAll('.email[data-user][data-domain]').forEach(el => {
    el.style.cursor = 'pointer';
    el.title = 'Click to email';
    el.setAttribute('role', 'button');
    el.setAttribute('tabindex', '0');
    const open = () => {
      const addr = el.dataset.user + '\u0040' + el.dataset.domain;
      window.location.href = 'mai' + 'lto:' + addr;
    };
    el.addEventListener('click', open);
    el.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); } });
  });
});
