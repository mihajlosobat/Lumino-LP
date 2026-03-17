// LUMINO Static Site JavaScript

// =========================
// DATA
// =========================
const packagesData = {
  standard: {
    id: 'standard',
    label: 'Standard paket',
    title: 'Pouzdan ulaz u solarnu energiju',
    description: 'Rešenje za korisnike koji žele jasan balans između investicije, kvaliteta i dugoročne uštede.',
    image: 'https://customer-assets.emergentagent.com/job_paket-switch/artifacts/299nasul_solar-energy-concept-young-happy-family-is-standing-near-solar-panels-holding-electric-light-bulb.jpg',
    imageAlt: 'Srećna porodica sa solarnim panelima',
    cards: [
      {
        title: 'Šta dobijate',
        features: [
          '10 kW hibridni sistem',
          'Pouzdane i proverene komponente',
          'Osnovno praćenje i podršku',
          'Dobar odnos cene i performansi'
        ]
      },
      {
        title: 'Za koga je',
        features: [
          'Za domaćinstva koja žele sigurnu osnovu',
          'Za korisnike sa fokusom na budžet',
          'Za one kojima je važna pregledna ponuda',
          'Za lakši prvi korak ka solarnoj energiji'
        ]
      }
    ]
  },
  premium: {
    id: 'premium',
    label: 'Premium paket',
    title: 'Napredniji izbor za veću sigurnost',
    description: 'Rešenje za korisnike kojima su važni viši nivo opreme, dodatna sigurnost i premium osećaj kroz ceo sistem.',
    image: 'https://customer-assets.emergentagent.com/job_paket-switch/artifacts/4tlckzk8_specialist-technician-professional-engineer-with-laptop-tablet-maintenance-checking-installing-solar-roof-panel-factory-rooftop-sunlight-engineers-team-survey-check-solar-panel-roof.jpg',
    imageAlt: 'Profesionalni inženjeri instaliraju solarne panele',
    cards: [
      {
        title: 'Šta dobijate',
        features: [
          '10 kW hibridni sistem',
          'Naprednije komponente i viši kvalitet',
          'Jaču dugoročnu vrednost sistema',
          'Premium podršku i dodatne benefite'
        ]
      },
      {
        title: 'Za koga je',
        features: [
          'Za korisnike koji žele više od osnove',
          'Za fokus na dugoročnu sigurnost',
          'Za viši nivo efikasnosti i pouzdanosti',
          'Za one koji žele premium rešenje za dom'
        ]
      }
    ]
  }
};

// =========================
// GLOBAL STATE
// =========================
let activePackage = 'standard';

// =========================
// HEADER SCROLL EFFECT
// =========================
function initHeaderScroll() {
  const header = document.querySelector('.site-header');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

// =========================
// SMOOTH SCROLL NAVIGATION
// =========================
function initNavigation() {
  const navLinks = document.querySelectorAll('.nav-link, .nav-link-cta');
  
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('data-scroll-to');
      if (targetId) {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });
}

// =========================
// PACKAGE SWITCHING
// =========================
function updatePackageDisplay(packageType) {
  const packageData = packagesData[packageType];
  
  // Update banner image
  const bannerImage = document.querySelector('.package-banner-image');
  bannerImage.src = packageData.image;
  bannerImage.alt = packageData.imageAlt;
  
  // Update label
  const labelBadge = document.querySelector('.package-label-badge');
  labelBadge.textContent = packageData.label;
  
  // Update title
  const bannerTitle = document.querySelector('.package-banner-title');
  bannerTitle.textContent = packageData.title;
  
  // Update description
  const description = document.querySelector('.package-description');
  description.textContent = packageData.description;
  
  // Update cards
  const cardsGrid = document.querySelector('.package-cards-grid');
  cardsGrid.innerHTML = packageData.cards.map(card => `
    <div class="package-card">
      <h3 class="card-title">${card.title}</h3>
      <ul class="card-features-list">
        ${card.features.map(feature => `
          <li class="card-feature-item">
            <svg class="feature-check-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <span>${feature}</span>
          </li>
        `).join('')}
      </ul>
    </div>
  `).join('');
  
  // Update switch button text
  const switchButton = document.querySelector('.package-switch-button span');
  const otherPackage = packageType === 'standard' ? 'Premium paket' : 'Standard paket';
  switchButton.textContent = `Pogledajte ${otherPackage}`;
  
  // Update active state on hero buttons
  document.querySelectorAll('.package-btn').forEach(btn => {
    const btnPackage = btn.getAttribute('data-package');
    if (btnPackage === packageType) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
  
  // Scroll to package section
  const packageSection = document.querySelector('.package-section');
  if (packageSection) {
    packageSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

function initPackageSwitching() {
  // Hero buttons
  const heroButtons = document.querySelectorAll('.package-btn');
  heroButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const packageType = btn.getAttribute('data-package');
      activePackage = packageType;
      updatePackageDisplay(packageType);
    });
  });
  
  // Package section switch button
  const switchButton = document.querySelector('.package-switch-button');
  switchButton.addEventListener('click', () => {
    activePackage = activePackage === 'standard' ? 'premium' : 'standard';
    updatePackageDisplay(activePackage);
  });
}

// =========================
// FAQ ACCORDION
// =========================
function initFAQ() {
  const faqQuestions = document.querySelectorAll('.faq-question');
  
  faqQuestions.forEach((question) => {
    question.addEventListener('click', (e) => {
      e.preventDefault();
      
      const faqItem = question.closest('.faq-item');
      if (!faqItem) return;
      
      const isCurrentlyActive = faqItem.classList.contains('active');
      const allFaqItems = document.querySelectorAll('.faq-item');
      
      // Close all other items
      allFaqItems.forEach((item) => {
        if (item !== faqItem) {
          item.classList.remove('active');
        }
      });
      
      // Toggle current item
      if (isCurrentlyActive) {
        faqItem.classList.remove('active');
      } else {
        faqItem.classList.add('active');
      }
    });
  });
}

// =========================
// BACK TO TOP BUTTON
// =========================
function initBackToTop() {
  const backToTopButton = document.querySelector('.back-to-top-button');
  
  // Show/hide button based on scroll position
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      backToTopButton.classList.add('visible');
    } else {
      backToTopButton.classList.remove('visible');
    }
  });
  
  // Scroll to top on click
  backToTopButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// =========================
// LEAD FORM
// =========================
function initLeadForm() {
  const form = document.getElementById('lead-form');
  const successMessage = document.querySelector('.form-success-message');
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Hide form and show success message
    form.classList.add('hidden');
    successMessage.classList.remove('hidden');
    
    // Reset form after 3 seconds
    setTimeout(() => {
      form.reset();
      form.classList.remove('hidden');
      successMessage.classList.add('hidden');
    }, 3000);
  });
}

// =========================
// VIDEO HANDLING
// =========================
function initVideo() {
  const video = document.getElementById('hero-video');
  
  if (video) {
    // Force load the video
    video.load();
    
    // Try to play after a short delay
    setTimeout(() => {
      video.play().catch(err => {
        console.log('Video autoplay prevented:', err);
        // If autoplay fails, try again after 1 second
        setTimeout(() => {
          video.play().catch(err2 => {
            console.log('Video autoplay still prevented:', err2);
          });
        }, 1000);
      });
    }, 100);
  }
}

// =========================
// CTA SCROLL TO CONTACT
// =========================
function initCTAButtons() {
  const ctaSecondaryBtn = document.querySelector('.cta-contact-btn.secondary');
  
  if (ctaSecondaryBtn) {
    ctaSecondaryBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }
}

// =========================
// INITIALIZE ALL
// =========================
document.addEventListener('DOMContentLoaded', () => {
  initHeaderScroll();
  initNavigation();
  initPackageSwitching();
  initFAQ();
  initBackToTop();
  initLeadForm();
  initVideo();
  initCTAButtons();
  
  // Set initial package display
  updatePackageDisplay('standard');
});
