
// Reveal on scroll
const revEls = document.querySelectorAll('.reveal');
const revIO = new IntersectionObserver(entries => {
  entries.forEach(e => { if(e.isIntersecting){e.target.classList.add('in');revIO.unobserve(e.target)} });
},{threshold:0.1});
revEls.forEach(r => revIO.observe(r));

// Skill bars
const bars = document.querySelectorAll('[data-w]');
const barIO = new IntersectionObserver(entries => {
  entries.forEach(e => { if(e.isIntersecting){e.target.style.width=e.target.dataset.w;barIO.unobserve(e.target)} });
},{threshold:0.3});
bars.forEach(b => barIO.observe(b));

// Card spotlight effect
document.querySelectorAll('.proj-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const r = card.getBoundingClientRect();
    card.style.setProperty('--mx', ((e.clientX-r.left)/r.width*100)+'%');
    card.style.setProperty('--my', ((e.clientY-r.top)/r.height*100)+'%');
  });
});

// Active nav
const secs = document.querySelectorAll('section[id]');
const links = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
  let cur = '';
  secs.forEach(s => { if(window.scrollY >= s.offsetTop - 80) cur = s.id; });
  links.forEach(a => { a.style.color = a.getAttribute('href') === '#'+cur ? 'var(--text)' : ''; });
});

// Form submit
function handleSubmit(btn) {
  const orig = btn.textContent;
  btn.textContent = '✓ Sent Successfully';
  btn.style.background = 'var(--green)';
  btn.style.boxShadow = '0 0 24px rgba(74,222,128,0.4)';
  btn.disabled = true;
  setTimeout(() => {
    btn.textContent = orig;
    btn.style.background = '';
    btn.style.boxShadow = '';
    btn.disabled = false;
  }, 3500);
}
