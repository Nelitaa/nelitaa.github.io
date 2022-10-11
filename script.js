const menu = document.querySelector('.nav-icon');
const popUp = document.querySelector('.navigation');
const xButton = document.querySelector('.xbutt');
const scrollb = document.querySelector('body');
const links = document.querySelector('.nav-pages-pop');
const navX = document.querySelector('.nav-icon-pop');

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

document.querySelector('.xbutt').addEventListener('click', () => {
  xButton.classList.remove('active');
  menu.classList.remove('active');
  popUp.classList.remove('active');
  scrollb.classList.remove('active');
  xButton.classList.remove('active');
  links.classList.remove('active');
  navX.classList.toggle('active');
});

let div = document.createElement('div');
div.id = 'projects-popup';
div.className = 'projects-popup-container';
document.body.appendChild(div);

let projects = [
  {name: 'Project 1 name goes here', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.', image: 'https://drive.google.com/uc?export=download&id=1lE_wmNcpcJ5wBxt35Zrao7AdcgxTQp46',  imageSecundary: 'https://drive.google.com/uc?export=download&id=1JGaG5b6Vxu4GYrchLj-usQ3t6iPXbrpE', technologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'], linkDemo: 'link', linkSource: 'link'},
  {name: 'Project 2 name goes here', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.', image: 'https://drive.google.com/uc?export=download&id=1lE_wmNcpcJ5wBxt35Zrao7AdcgxTQp46',  imageSecundary: 'https://drive.google.com/uc?export=download&id=1JGaG5b6Vxu4GYrchLj-usQ3t6iPXbrpE', technologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'], linkDemo: 'link', linkSource: 'link'},
  {name: 'Project 3 name goes here', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.', image: 'https://drive.google.com/uc?export=download&id=1lE_wmNcpcJ5wBxt35Zrao7AdcgxTQp46',  imageSecundary: 'https://drive.google.com/uc?export=download&id=1JGaG5b6Vxu4GYrchLj-usQ3t6iPXbrpE', technologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'], linkDemo: 'link', linkSource: 'link'},
  {name: 'Project 4 name goes here', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.', image: 'https://drive.google.com/uc?export=download&id=1lE_wmNcpcJ5wBxt35Zrao7AdcgxTQp46',  imageSecundary: 'https://drive.google.com/uc?export=download&id=1JGaG5b6Vxu4GYrchLj-usQ3t6iPXbrpE', technologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'], linkDemo: 'link', linkSource: 'link'},
  {name: 'Project 5 name goes here', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.', image: 'https://drive.google.com/uc?export=download&id=1lE_wmNcpcJ5wBxt35Zrao7AdcgxTQp46',  imageSecundary: 'https://drive.google.com/uc?export=download&id=1JGaG5b6Vxu4GYrchLj-usQ3t6iPXbrpE', technologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'], linkDemo: 'link', linkSource: 'link'},
  {name: 'Project 6 name goes here', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.', image: 'https://drive.google.com/uc?export=download&id=1lE_wmNcpcJ5wBxt35Zrao7AdcgxTQp46',  imageSecundary: 'https://drive.google.com/uc?export=download&id=1JGaG5b6Vxu4GYrchLj-usQ3t6iPXbrpE', technologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'], linkDemo: 'link', linkSource: 'link'},
];

function createProject(project) {
  let h2 = document.createElement('h2');
  h2.textContent = project.name;
  h2.className = 'projects-popup-title';
  div.appendChild(h2);

  let ul = document.createElement('ul');
  ul.id = 'lenguagesPopup';
  div.appendChild(ul);

  let li = document.createElement('li');
  li.textContent = project.technologies[0];
  li.className = 'boxlenguages-pop';
  ul.appendChild(li);

  let lisecond = document.createElement('li');
  lisecond.textContent = project.technologies[1];
  lisecond.className = 'boxlenguages-pop';
  ul.appendChild(lisecond);

  let listhird = document.createElement('li');
  listhird.textContent = project.technologies[1];
  listhird.className = 'boxlenguages-pop';
  ul.appendChild(listhird);

   let img1 = document.createElement('img');
  img1.src = project.image;
  img1.className = 'projects-popup-img1';
  div.appendChild(img1);

  let divImg = document.createElement('div');
  divImg.id = 'projects-popup-img';
  divImg.className = 'projects-popup-img-container';
  div.appendChild(divImg);

  let img2 = document.createElement('img');
  img2.src = project.imageSecundary;
  img2.className = 'projects-popup-img';
  divImg.appendChild(img2);

  let img3 = document.createElement('img');
  img3.src = project.imageSecundary;
  img3.className = 'projects-popup-img';
  divImg.appendChild(img3);

  let img4 = document.createElement('img');
  img4.src = project.imageSecundary;
  img4.className = 'projects-popup-img';
  divImg.appendChild(img4);

  let img5 = document.createElement('img');
  img5.src = project.imageSecundary;
  img5.className = 'projects-popup-img';
  divImg.appendChild(img5);

  let p = document.createElement('p');
  p.textContent = project.description;
  p.className = 'projects-popup-paragraph';
  div.appendChild(p);

  let divButton = document.createElement('div');
  divButton .id = 'projects-popup-button';
  divButton .className = 'projects-popup-button-container';
  div.appendChild(divButton);

  let buttonDemo = document.createElement('button');
  buttonDemo.type = 'submit';
  buttonDemo.textContent = 'See live';
  buttonDemo.className = 'projects-popup-button';
  divButton.appendChild(buttonDemo);

  let iconButtonDemo = document.createElement('img');
  iconButtonDemo.src = 'https://drive.google.com/uc?export=download&id=17kH5_IbbTsXI9puTDtHuZK6zt4XtZ5-G';
  iconButtonDemo.className = 'projects-popup-button-icon';
  buttonDemo.appendChild(iconButtonDemo);
 
  let buttonSource = document.createElement('button');
  buttonSource.type = 'submit';
  buttonSource.textContent = 'See source';
  buttonSource.className = 'projects-popup-button';
  divButton.appendChild(buttonSource);

  let iconButtonSource = document.createElement('img');
  iconButtonSource.src = 'https://drive.google.com/uc?export=download&id=1XM8ibRfA09uVLwfaQCW6aCRMiG-BP-g3';
  iconButtonSource.className = 'projects-popup-button-icon';
  buttonSource.appendChild(iconButtonSource);
}

createProject(projects[0]);
/*

const projectsPOPUPBUTTON = document.querySelector('.button-see-this-project-1');
const projectsPOPUP = document.querySelector(createProject(projects[0]));

projectsPOPUPBUTTON.addEventListener ('click', () => {
  projectsPOPUPBUTTON.classList.toggle('active');
  projectsPOPUP.classList.toggle('active');
})*/