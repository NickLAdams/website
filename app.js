const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');
const websiteCard = document.querySelector('#website-card')
const mobileCard = document.querySelector('#mobile-card')
const codeCard = document.querySelector('#code-card')
const darkModeButton = document.querySelector('#darkModeToggle')


const contactCard1 = document.querySelector('#contact-card1')
const contactCard2 = document.querySelector('#contact-card2')
const contactCard3 = document.querySelector('#contact-card3')

// Display Mobile Menu
const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

// Show active menu when scrolling
const highlightMenu = () => {
  const elem = document.querySelector('.highlight');
  const homeMenu = document.querySelector('#home-page');
  const aboutMenu = document.querySelector('#about-page');
  const projectsMenu = document.querySelector('#projects-page');
  const servicesMenu = document.querySelector('#services-page');
  let scrollPos = window.scrollY;
  // console.log(scrollPos);

  // adds 'highlight' class to my menu items
  if (window.innerWidth > 960 && scrollPos < 600) {
    homeMenu.classList.add('highlight');
    aboutMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 1400) {
    aboutMenu.classList.add('highlight');
    homeMenu.classList.remove('highlight');
    projectsMenu.classList.remove('highlight');
    servicesMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 1800) {
    projectsMenu.classList.add('highlight');
    homeMenu.classList.remove('highlight');
    aboutMenu.classList.remove('highlight');
    servicesMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 2600) {
    servicesMenu.classList.add('highlight');
    projectsMenu.classList.remove('highlight');
    return;
  }

  if ((elem && window.innerWIdth < 960 && scrollPos < 600) || elem) {
    elem.classList.remove('highlight');
  }
};

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

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


darkModeButton.addEventListener('click',toggleDarkMode)
function toggleDarkMode(){
  var element = document.body;
  element.classList.toggle("dark-mode");
}
