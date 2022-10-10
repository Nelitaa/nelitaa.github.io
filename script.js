const menu = document.querySelector('.nav-icon');
const popUp = document.querySelector('.navigation');
const xButton = document.querySelector('.xbutt');
const scrollb = document.querySelector('body');
const links = document.querySelector('.nav-pages-pop');
const navX = document.querySelector('.nav-icon-pop')

menu.addEventListener('click', () => {
  menu.classList.toggle('active');
  popUp.classList.toggle('active');
  scrollb.classList.toggle('active');
  xButton.classList.toggle('active');
  links.classList.toggle('active');
  navX.classList.toggle('active');
});

document.querySelectorAll('.nav-pages-pop').forEach((i) => i.addEventListener('click', () => {
  menu.classList.remove('active');
  popUp.classList.remove('active');
  scrollb.classList.remove('active');
  xButton.classList.remove('active');
  links.classList.remove('active');
  navX.classList.toggle('active');
}));