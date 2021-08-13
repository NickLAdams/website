const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');
const websiteCard = document.querySelector('#website-card')
const mobileCard = document.querySelector('#mobile-card')
const codeCard = document.querySelector('#code-card')

const contactCard1 = document.querySelector('#contact-card1')
const contactCard2 = document.querySelector('#contact-card2')
const contactCard3 = document.querySelector('#contact-card3')

// Display Mobile Menu
const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

//window.addEventListener('scroll', highlightMenu);
//window.addEventListener('click', highlightMenu);

//  Close mobile Menu when clicking on a menu item
const hideMobileMenu = () => {
  const menuBars = document.querySelector('.is-active');
  if (window.innerWidth <= 768 && menuBars) {
    menu.classList.toggle('is-active');
    menuLinks.classList.remove('active');
  }
};

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);

websiteCard.addEventListener('click', goWebsitePage)
function goWebsitePage() {
  location.href='websites.html'
}

mobileCard.addEventListener('click', goMobilePage)
function goMobilePage() {
  location.href='apps.html'
}

codeCard.addEventListener('click', goCodePage)
function goCodePage() {
  location.href='templates.html'
}

contactCard1.addEventListener('click', goContactPage)
contactCard2.addEventListener('click', goContactPage)
contactCard3.addEventListener('click', goContactPage)
function goContactPage(){
  location.href='contact.html#form'
}



