const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('project wired!')

// create header selectors
const headerNav = document.querySelectorAll('header nav a');
const headerNavTexts = Object.values(siteContent.nav);

// add header content
headerNav.forEach((nav, idx) => {
  nav.textContent = headerNavTexts[idx];
  nav.classList.add('italic');
});

// create cta selectors
const ctaHeader = document.querySelector('.cta-text h1');
const ctaButton = document.querySelector('.cta-text button');

// add cta content
ctaHeader.textContent = siteContent['cta']['h1'];
ctaButton.textContent = siteContent['cta']['button'];

// add main selectors
const mainTop = document.querySelector('.top-content');
const mainBottom = document.querySelector('.bottom-content');

// add main content
mainTop.children[0].children[0].textContent = siteContent['main-content']['features-h4'];
mainTop.children[0].children[1].textContent = siteContent['main-content']['features-content'];
mainTop.children[1].children[0].textContent = siteContent['main-content']['about-h4'];
mainTop.children[1].children[1].textContent = siteContent['main-content']['about-content'];
mainBottom.children[0].children[0].textContent = siteContent['main-content']['services-h4'];
mainBottom.children[0].children[1].textContent = siteContent['main-content']['services-content'];
mainBottom.children[1].children[0].textContent = siteContent['main-content']['vision-h4'];
mainBottom.children[1].children[1].textContent = siteContent['main-content']['vision-content'];


// create contact selectors
const contactHeading = document.querySelector('.contact h4');
const contactAddress = contactHeading.nextElementSibling;
const contactPhone = contactAddress.nextElementSibling;
const contactEmail = contactPhone.nextElementSibling;

// add contact content
contactHeading.textContent = siteContent['contact']['contact-h4'];
contactAddress.textContent = siteContent['contact']['address'];
contactPhone.textContent = siteContent['contact']['phone'];
contactEmail.textContent = siteContent['contact']['email'];

// create footer selector
const footerLink = document.querySelector('footer a');

// add footer content
footerLink.textContent = siteContent['footer']['copyright'];
footerLink.classList.add('bold');

// create image selectors
const logoImg = document.querySelector('.logo');
const ctaImg = document.querySelector('#cta-img');
const accentImg = document.querySelector('.middle-img');

// add image sources

logoImg.src = siteContent['images']['logo-img'];
ctaImg.src = siteContent['images']['cta-img'];
accentImg.src = siteContent['images']['accent-img'];