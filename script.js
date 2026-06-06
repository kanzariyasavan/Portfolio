
// Preloader
window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  setTimeout(() => {
    preloader?.classList.add('hide');
    document.body.classList.remove('loading');
  }, 450);

  setTimeout(() => preloader?.remove(), 1000);
});

// Reveal on scroll
const revEls = document.querySelectorAll('.reveal');
const revIO = new IntersectionObserver(entries => {
  entries.forEach(e => { if(e.isIntersecting){e.target.classList.add('in');revIO.unobserve(e.target)} });
},{threshold:0.1});
revEls.forEach(r => revIO.observe(r));

const projects = {
  'greek-guys': {
    title: 'Greek Guys',
    type: 'Food Delivery App',
    desc: 'A restaurant food delivery app built around fast mobile ordering, offer notifications, reward redemption, order progress tracking, and a clean customer checkout experience.',
    features: ['Mobile API support for menu browsing, cart flow, order placement, and customer order history.', 'Backend-ready structure for rewards, deal notifications, and order status updates.', 'Food delivery workflow designed for repeat ordering and simple mobile UX.'],
    tags: ['Laravel', 'REST API', 'MySQL', 'Orders', 'Rewards'],
    links: [{ label: 'App Store', url: 'https://apps.apple.com/us/app/greek-guys/id6761291621' }]
  },
  'door-beaute': {
    title: 'Door Beaute',
    type: 'Beauty Product Delivery & Salon Booking',
    desc: 'A multi-role beauty marketplace where vendors register, add stores, sell beauty products, manage salon service bookings, and coordinate delivery service with tracking.',
    features: ['Vendor, store, salon, customer, and delivery-man modules with role-based workflows.', 'Product purchasing, salon booking services, delivery tracking, and service status management.', 'Stripe and Razorpay payment gateway support for flexible online payments.'],
    tags: ['Laravel', 'REST API', 'Stripe', 'Razorpay', 'Tracking'],
    links: []
  },
  'woll-et': {
    title: 'Woll-ET',
    type: 'Card Holding App',
    desc: 'A digital card holding app for keeping important cards organized and accessible across iOS and Android with a simple mobile-first experience.',
    features: ['API support for storing, listing, and managing card records.', 'Mobile app flows for quick card access and organized card details.', 'Cross-platform release support through App Store and Play Store links.'],
    tags: ['Mobile API', 'Laravel', 'Cards', 'Security'],
    links: [
      { label: 'App Store', url: 'https://apps.apple.com/us/app/woll-et/id6761760515' },
      { label: 'Play Store', url: 'https://play.google.com/store/apps/details?id=com.wollet' }
    ]
  },
  skope: {
    title: 'Skope',
    type: 'Dealer Commerce Website',
    desc: 'An in-progress commerce website where customers can buy products from dealers and follow real-time product/order status after purchase.',
    features: ['Dealer-to-customer product purchase flow with order lifecycle handling.', 'Shiprocket API integration for shipment creation and status tracking.', 'PhonePe payment gateway integration for checkout and payment confirmation.'],
    tags: ['Laravel', 'Shiprocket API', 'PhonePe', 'MySQL'],
    links: []
  },
  whizof: {
    title: 'Whizof',
    type: 'On-Demand Vehicle Service App & Web',
    desc: 'An on-demand vehicle repair platform that helps drivers book nearby technicians or local garage professionals for home, workplace, or roadside service.',
    features: ['Location-based matching for drivers, technicians, and garage professionals.', 'Booking flow for vehicle repair requests, service status, and technician assignment.', 'App and website support with payment-ready service architecture.'],
    tags: ['Laravel', 'Booking', 'Location', 'Payments', 'REST API'],
    links: [
      { label: 'Website', url: 'https://whizof.com/' },
      { label: 'App Store', url: 'https://apps.apple.com/gb/app/whizof/id6754082327' }
    ]
  },
  hiko: {
    title: 'Hiko Ceramic',
    type: 'Static Porcelain Tile Website',
    desc: 'A premium ceramic website presenting porcelain tile collections, design-led brand storytelling, sustainability values, Make in India positioning, and inquiry contact flow.',
    features: ['Static website structure for collection pages, brand sections, process content, and contact forms.', 'Visual product presentation for porcelain tile designs and collection browsing.', 'SEO-friendly content sections for craftsmanship, sustainability, and export-ready brand identity.'],
    tags: ['HTML', 'CSS', 'JavaScript', 'Static Website'],
    links: [{ label: 'Website', url: 'https://hikoceramic.com/' }]
  },
  foodizo: {
    title: 'Foodizo Group',
    type: 'Static Masala & Dehydrated Food Website',
    desc: 'A food brand website for dehydrated ingredients and authentic Indian spices, built to communicate quality, export readiness, and product variety.',
    features: ['Product collection pages for dehydrated foods, powders, and Indian masala blends.', 'Clear content flow for private label, wholesale, export, and quality positioning.', 'Responsive static pages designed for product discovery and inquiry generation.'],
    tags: ['HTML', 'CSS', 'SEO', 'Products'],
    links: [{ label: 'Website', url: 'https://www.foodizogroup.com/' }]
  },
  'ipo-bit': {
    title: 'Ipo Bit',
    type: 'IPO Informative Website',
    desc: 'An informative website concept for IPO-related content, helping users scan upcoming IPO details, company information, and market-focused updates.',
    features: ['Structured content pages for IPO information and financial updates.', 'Clean reading experience for users checking IPO details quickly.', 'Backend-ready structure for future dynamic content and listing management.'],
    tags: ['PHP', 'MySQL', 'Content', 'Finance'],
    links: []
  },
  uvila: {
    title: 'Uvila Group',
    type: 'Corporate Pipe Manufacturing Website',
    desc: 'A corporate website for a pipe and fittings manufacturer covering plumbing, agriculture, borewell, dealership, export, catalogue, blog, and contact flows.',
    features: ['Product category structure for uPVC, CPVC, HDPE, SWR, column pipes, and agriculture solutions.', 'Inquiry-focused pages for purchase, dealership, product sample, and contact requests.', 'Corporate content architecture for export markets, testimonials, blogs, and certificates.'],
    tags: ['Corporate Site', 'Catalog', 'Forms', 'SEO'],
    links: [{ label: 'Website', url: 'https://uvilagroup.com/' }]
  },
  ariel: {
    title: 'Ariel Quartz',
    type: 'Static & Dynamic Wall Clock Website',
    desc: 'A wall clock manufacturer website with collection browsing, personalized clock inquiries, catalogue downloads, blogs, export positioning, and dynamic inquiry forms.',
    features: ['Collection and product pages for luxury, custom, office, corporate, and designer wall clocks.', 'Dynamic inquiry and customization forms for customer requirements.', 'Blog and catalogue sections to support SEO, product education, and lead generation.'],
    tags: ['PHP', 'HTML', 'Dynamic Forms', 'Catalog'],
    links: [{ label: 'Website', url: 'https://www.arielquartz.com/' }]
  },
  pepizo: {
    title: 'Pepizo Foods',
    type: 'Frozen Food Brand Website',
    desc: 'A food brand website for frozen french fries, hash browns, patties, and product categories with export-focused content and inquiry flow.',
    features: ['Product category pages for fries, crinkle cut, shoestring, skin-on fries, masala fries, and hash browns.', 'Responsive brand website structure for product discovery and international buyer positioning.', 'Inquiry-led content flow for food service, wholesale, and export opportunities.'],
    tags: ['Static Website', 'Products', 'SEO', 'Inquiry'],
    links: [{ label: 'Website', url: 'https://www.pepizofoods.com/' }]
  },
  overflo: {
    title: 'OverFlo Pro',
    type: 'Service Booking App & Web',
    desc: 'An in-progress service booking platform where customers book workers such as electricians and salon experts, with service options at worker or customer locations.',
    features: ['Customer and worker booking flows for location-based service requests.', 'Worker availability, service status, and booking management architecture.', 'Stripe payment gateway integration for online service payments.'],
    tags: ['Laravel', 'REST API', 'Stripe', 'Booking', 'Services'],
    links: []
  },
  'united-oil': {
    title: 'United Oil Supply Company',
    type: 'Static Petroleum Supply Website',
    desc: 'A corporate website for a petroleum supply company focused on bulk storage, distribution services, company trust, and direct inquiry pathways.',
    features: ['Static corporate pages for company profile, petroleum storage, distribution, and business communication.', 'Clear content structure for industrial buyers looking for oil supply and logistics support.', 'Responsive landing and contact flow designed for quick lead generation.'],
    tags: ['Static Website', 'HTML', 'CSS', 'Corporate'],
    links: [{ label: 'Website', url: 'https://www.unitedoilsupplycompany.com/' }]
  },
  simero: {
    title: 'Simero Ceramics',
    type: 'Static Luxury Tile Website',
    desc: 'A luxury vitrified tile website presenting tile collections, sizes, catalogues, exhibition centers, global network content, and ceramic brand positioning.',
    features: ['Collection and size-based navigation for polished, matt, carving, gloss, and large-format tile categories.', 'Catalogue, exhibition center, contact, and global network sections for customer discovery.', 'Responsive static site experience designed around premium ceramic product browsing.'],
    tags: ['Static Website', 'Catalog', 'Ceramics', 'Responsive'],
    links: [{ label: 'Website', url: 'https://www.simero.in/' }]
  },
  'a2z-cargo': {
    title: 'A2Z Cargo Care',
    type: 'Static Cargo Care Website',
    desc: 'A cargo care service website covering fumigation, pest control, cargo lashing, safety compliance, testimonials, and service inquiry content.',
    features: ['Service-focused pages for container fumigation, pest control, and cargo lashing.', 'Trust-building sections for certified expertise, eco-friendly methods, timely service, and client satisfaction.', 'Responsive layout for logistics, warehouse, and export customers seeking cargo protection services.'],
    tags: ['Static Website', 'Services', 'Cargo', 'Lead Flow'],
    links: [{ label: 'Website', url: 'https://www.a2zcargocare.com/' }]
  },
  bluehive: {
    title: 'BlueHive Nexim',
    type: 'Static Rope Export Website',
    desc: 'A manufacturer and exporter website for polypropylene and polyethylene ropes, twines, industrial strapping, applications, export content, and catalogue access.',
    features: ['Product category structure for PP ropes, PE/HDPE ropes, twines, and industrial rope applications.', 'Export-focused content for global buyers, distributors, private labeling, and packaging needs.', 'Blog, catalogue, contact, and inquiry sections supporting industrial product discovery.'],
    tags: ['Static Website', 'Products', 'Export', 'Catalog'],
    links: [{ label: 'Website', url: 'https://www.bluehivenexim.com/' }]
  }
};

const projectCards = Array.from(document.querySelectorAll('.proj-card'));
const projectCount = document.getElementById('projectCount');
const projectPagination = document.getElementById('projectPagination');
const projectsPerPage = 6;
let currentProjectPage = 1;

function renderProjectPagination() {
  if (!projectPagination || projectCards.length <= projectsPerPage) return;

  const totalPages = Math.ceil(projectCards.length / projectsPerPage);
  const pageButtons = Array.from({ length: totalPages }, (_, index) => {
    const page = index + 1;
    return `<button class="page-btn ${page === currentProjectPage ? 'active' : ''}" type="button" data-project-page="${page}" aria-label="Show project page ${page}" ${page === currentProjectPage ? 'aria-current="page"' : ''}>${page}</button>`;
  }).join('');

  projectPagination.innerHTML = `
    <button class="page-btn page-nav" type="button" data-project-page="prev" ${currentProjectPage === 1 ? 'disabled' : ''}>Prev</button>
    ${pageButtons}
    <button class="page-btn page-nav" type="button" data-project-page="next" ${currentProjectPage === totalPages ? 'disabled' : ''}>Next</button>
  `;
}

function renderProjectPage(shouldScroll = false) {
  const totalPages = Math.ceil(projectCards.length / projectsPerPage);
  const start = (currentProjectPage - 1) * projectsPerPage;
  const end = start + projectsPerPage;

  projectCards.forEach((card, index) => {
    const isVisible = index >= start && index < end;
    card.classList.toggle('is-hidden', !isVisible);
    if (isVisible) card.classList.add('in');
  });

  if (projectCount) {
    projectCount.textContent = `Showing ${start + 1}-${Math.min(end, projectCards.length)} of ${projectCards.length} featured projects`;
  }

  renderProjectPagination();

  if (shouldScroll) {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

projectPagination?.addEventListener('click', event => {
  const btn = event.target.closest('[data-project-page]');
  if (!btn) return;

  const totalPages = Math.ceil(projectCards.length / projectsPerPage);
  const target = btn.dataset.projectPage;

  if (target === 'prev') currentProjectPage = Math.max(1, currentProjectPage - 1);
  else if (target === 'next') currentProjectPage = Math.min(totalPages, currentProjectPage + 1);
  else currentProjectPage = Number(target);

  renderProjectPage(true);
});

renderProjectPage();

// Card spotlight effect
projectCards.forEach(card => {
  card.addEventListener('mousemove', e => {
    const r = card.getBoundingClientRect();
    card.style.setProperty('--mx', ((e.clientX-r.left)/r.width*100)+'%');
    card.style.setProperty('--my', ((e.clientY-r.top)/r.height*100)+'%');
  });
  card.addEventListener('click', () => openProject(card.dataset.project));
});

// Project slider
const projSlider = document.querySelector('.proj-slider');
document.querySelectorAll('[data-slide]').forEach(btn => {
  btn.addEventListener('click', () => {
    if (!projSlider) return;
    const direction = btn.dataset.slide === 'next' ? 1 : -1;
    projSlider.scrollBy({ left: direction * Math.min(720, projSlider.clientWidth), behavior: 'smooth' });
  });
});

// Project modal
const modal = document.getElementById('projectModal');
const modalType = document.getElementById('modalType');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');
const modalFeatures = document.getElementById('modalFeatures');
const modalLinks = document.getElementById('modalLinks');
const modalTags = document.getElementById('modalTags');

function openProject(key) {
  const project = projects[key];
  if (!project || !modal) return;

  modalType.textContent = project.type;
  modalTitle.textContent = project.title;
  modalDesc.textContent = project.desc;
  modalFeatures.innerHTML = project.features.map(feature => `<li>${feature}</li>`).join('');
  modalLinks.innerHTML = project.links.length
    ? project.links.map(link => `<a href="${link.url}" target="_blank" rel="noopener noreferrer">${link.label} ↗</a>`).join('')
    : '<span class="pill p-amber">Link not available</span>';
  modalTags.innerHTML = project.tags.map((tag, index) => {
    const classes = ['p-purple', 'p-cyan', 'p-amber', 'p-green'];
    return `<span class="pill ${classes[index % classes.length]}">${tag}</span>`;
  }).join('');

  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
}

function closeProject() {
  if (!modal) return;
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
}

document.querySelectorAll('[data-close-modal]').forEach(el => el.addEventListener('click', closeProject));
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeProject();
});

// Active nav
const secs = document.querySelectorAll('section[id]');
const links = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
  let cur = '';
  secs.forEach(s => { if(window.scrollY >= s.offsetTop - 80) cur = s.id; });
links.forEach(a => { a.style.color = a.getAttribute('href') === '#'+cur ? 'var(--text)' : ''; });
});
