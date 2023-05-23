/* Navigation Menu */
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.navigation-menu');
const close = document.querySelector('.close-icon');
const pages = document.querySelectorAll('.nav-pages-menu li');
const body = document.querySelector('body');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('hide');
  menu.classList.toggle('active');
  close.classList.toggle('active');
  if (menu.classList.contains('active')) {
    body.style.overflow = 'hidden';
  } else {
    body.style.overflow = '';
  }
});

close.addEventListener('click', () => {
  hamburger.classList.remove('hide');
  menu.classList.remove('active');
  close.classList.remove('active');
  body.style.overflow = '';
});

pages.forEach((i) => i.addEventListener('click', () => {
  hamburger.classList.remove('hide');
  menu.classList.remove('active');
  close.classList.remove('active');
  body.style.overflow = '';
}));

const projects = [
  {
    name: 'Project 1 name goes here', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.', image: 'https://drive.google.com/uc?export=download&id=1HXlJfB-0riqWY9-I0zuQHusZCi2KxYa_', imageSecundary: 'https://drive.google.com/uc?export=download&id=1JGaG5b6Vxu4GYrchLj-usQ3t6iPXbrpE', technologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'], linkDemo: 'link', linkSource: 'link',
  },
  {
    name: 'Project 2 name goes here', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.', image: 'https://drive.google.com/uc?export=download&id=13ayEXXW-B43VX-TAXmpqdcKM0ElcgvUX', imageSecundary: 'https://drive.google.com/uc?export=download&id=1JGaG5b6Vxu4GYrchLj-usQ3t6iPXbrpE', technologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'], linkDemo: 'link', linkSource: 'link',
  },
  {
    name: 'Project 3 name goes here', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.', image: 'https://drive.google.com/uc?export=download&id=1BGe71kPBmeKQ9YSNCfPwRLgYSCdeIJdo', imageSecundary: 'https://drive.google.com/uc?export=download&id=1JGaG5b6Vxu4GYrchLj-usQ3t6iPXbrpE', technologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'], linkDemo: 'link', linkSource: 'link',
  },
  {
    name: 'Project 4 name goes here', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.', image: 'https://drive.google.com/uc?export=download&id=1TndTLN0JFv6vbAgfiYqASfGdnZh23x5K', imageSecundary: 'https://drive.google.com/uc?export=download&id=1JGaG5b6Vxu4GYrchLj-usQ3t6iPXbrpE', technologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'], linkDemo: 'link', linkSource: 'link',
  },
  {
    name: 'Project 5 name goes here', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.', image: 'https://drive.google.com/uc?export=download&id=1Fc6Zn6dB3FL5s7n4CAllHlAKAj_7W3Oj', imageSecundary: 'https://drive.google.com/uc?export=download&id=1JGaG5b6Vxu4GYrchLj-usQ3t6iPXbrpE', technologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'], linkDemo: 'link', linkSource: 'link',
  },
  {
    name: 'Project 6 name goes here', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.', image: 'https://drive.google.com/uc?export=download&id=1oYeLFQU5OUAQsQkJtap0sK5FfpjJUvIe', imageSecundary: 'https://drive.google.com/uc?export=download&id=1JGaG5b6Vxu4GYrchLj-usQ3t6iPXbrpE', technologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'], linkDemo: 'link', linkSource: 'link',
  },
];

const sectionh2 = document.createElement('section');
sectionh2.className = 'presentation-project';
document.getElementById('portfolio').appendChild(sectionh2);

const h2Projects = document.createElement('h2');
h2Projects.textContent = 'Projects';
h2Projects.className = 'rotate-projects';
sectionh2.appendChild(h2Projects);

for (let i = 0; i < projects.length; i += 1) {
  const sectionBox = document.createElement('section');
  if (i === 0) {
    sectionBox.className = 'projects-section';
  }
  if (i === 1) {
    sectionBox.className = 'projects-section-2';
  }
  if (i === 2) {
    sectionBox.className = 'projects-section-3';
  }
  if (i === 3) {
    sectionBox.className = 'projects-section-4';
  }
  if (i === 4) {
    sectionBox.className = 'projects-section-5';
  }
  if (i === 5) {
    sectionBox.className = 'projects-section-6';
  }
  document.getElementById('portfolio').appendChild(sectionBox);

  const divProjectImage = document.createElement('div');
  if (i === 0) {
    divProjectImage.className = 'projects-image';
  }
  if (i === 1) {
    divProjectImage.className = 'projects-image-2';
  }
  if (i === 2) {
    divProjectImage.className = 'projects-image-3';
  }
  if (i === 3) {
    divProjectImage.className = 'projects-image-4';
  }
  if (i === 4) {
    divProjectImage.className = 'projects-image-5';
  }
  if (i === 5) {
    divProjectImage.className = 'projects-image-6';
  }
  sectionBox.appendChild(divProjectImage);

  if (i === 0) {
    const imgProject1 = document.createElement('img');
    imgProject1.className = 'image-project11';
    imgProject1.src = 'https://drive.google.com/uc?export=download&id=1WBbS3KNDo33AUiytKyxuGSv0hj8nQfu-';
    divProjectImage.appendChild(imgProject1);
  }

  const imgProject = document.createElement('img');
  if (i === 0) {
    imgProject.className = 'image-project1';
  }
  imgProject.src = projects[i].image;
  divProjectImage.appendChild(imgProject);

  const sectionBoxBlue = document.createElement('section');
  if (i === 0) {
    sectionBoxBlue.className = 'boxblue-1';
  }
  if (i === 1) {
    sectionBoxBlue.className = 'boxblue';
  }
  if (i === 2) {
    sectionBoxBlue.className = 'boxblue';
  }
  if (i === 3) {
    sectionBoxBlue.className = 'boxblue';
  }
  if (i === 4) {
    sectionBoxBlue.className = 'boxblue';
  }
  if (i === 5) {
    sectionBoxBlue.className = 'boxblue';
  }
  sectionBox.appendChild(sectionBoxBlue);

  const h3Projects = document.createElement('h3');
  h3Projects.textContent = projects[i].name;
  sectionBoxBlue.appendChild(h3Projects);

  const ulProjects = document.createElement('ul');
  if (i === 0) {
    ulProjects.className = 'lenguages-1';
  }
  if (i === 1) {
    ulProjects.className = 'lenguages';
  }
  if (i === 2) {
    ulProjects.className = 'lenguages';
  }
  if (i === 3) {
    ulProjects.className = 'lenguages';
  }
  if (i === 4) {
    ulProjects.className = 'lenguages';
  }
  if (i === 5) {
    ulProjects.className = 'lenguages';
  }
  sectionBoxBlue.appendChild(ulProjects);

  const liProjects1 = document.createElement('li');
  liProjects1.textContent = projects[i].technologies['0'];
  liProjects1.className = 'boxlenguages';
  ulProjects.appendChild(liProjects1);

  const liProjects2 = document.createElement('li');
  liProjects2.textContent = projects[i].technologies['1'];
  liProjects2.className = 'boxlenguages';
  ulProjects.appendChild(liProjects2);

  const liProjects3 = document.createElement('li');
  liProjects3.textContent = projects[i].technologies['2'];
  liProjects3.className = 'boxlenguages';
  ulProjects.appendChild(liProjects3);

  const buttonSeeThisProject = document.createElement('button');
  buttonSeeThisProject.type = 'submit';
  buttonSeeThisProject.textContent = 'See this project';
  if (i === 0) {
    buttonSeeThisProject.className = 'button-see-this-project-1';
  }
  if (i === 1) {
    buttonSeeThisProject.className = 'button-see-this-project-2';
  }
  if (i === 2) {
    buttonSeeThisProject.className = 'button-see-this-project-3';
  }
  if (i === 3) {
    buttonSeeThisProject.className = 'button-see-this-project-4';
  }
  if (i === 4) {
    buttonSeeThisProject.className = 'button-see-this-project-5';
  }
  if (i === 5) {
    buttonSeeThisProject.className = 'button-see-this-project-6';
  }
  sectionBoxBlue.appendChild(buttonSeeThisProject);

  const iconButtonSeeThisProject = document.createElement('img');
  iconButtonSeeThisProject.src = 'https://drive.google.com/uc?export=download&id=1TWy2gNJuqn464l5ggxpIV6ysuhjGYj3c';
  iconButtonSeeThisProject.className = 'projects-button-icon';
  buttonSeeThisProject.appendChild(iconButtonSeeThisProject);

  const divBackground1 = document.createElement('div');
  divBackground1.className = 'background-1';
  document.getElementById('portfolio').appendChild(divBackground1);

  const divBackground2 = document.createElement('div');
  divBackground2.className = 'background-2';
  document.getElementById('portfolio').appendChild(divBackground2);

  const divBackground3 = document.createElement('div');
  divBackground3.className = 'background-3';
  document.getElementById('portfolio').appendChild(divBackground3);

  const divBackground4 = document.createElement('div');
  divBackground4.className = 'background-4';
  document.getElementById('portfolio').appendChild(divBackground4);

  const divBackground5 = document.createElement('div');
  divBackground5.className = 'background-5';
  document.getElementById('portfolio').appendChild(divBackground5);
}

function createProject(project) {
  const divXButton = document.createElement('div');
  divXButton.id = 'projects-popup-divXButton';
  divXButton.className = 'projects-popup-divXButton-container';
  document.getElementById('projects-popup').appendChild(divXButton);

  const xButton = document.createElement('img');
  xButton.src = 'https://drive.google.com/uc?export=download&id=1qkSrHjcZCWXAqs9L_FN8lRCUITxy-cYX';
  xButton.className = 'projects-popup-divXButton';
  divXButton.appendChild(xButton);

  const h2 = document.createElement('h2');
  h2.textContent = project.name;
  h2.className = 'projects-popup-title';
  document.getElementById('projects-popup').appendChild(h2);

  const ul = document.createElement('ul');
  ul.id = 'lenguagesPopup';
  document.getElementById('projects-popup').appendChild(ul);

  const li = document.createElement('li');
  li.textContent = project.technologies['0'];
  li.className = 'boxlenguages-pop';
  ul.appendChild(li);

  const lisecond = document.createElement('li');
  lisecond.textContent = project.technologies['1'];
  lisecond.className = 'boxlenguages-pop';
  ul.appendChild(lisecond);

  const listhird = document.createElement('li');
  listhird.textContent = project.technologies['2'];
  listhird.className = 'boxlenguages-pop';
  ul.appendChild(listhird);

  const img1 = document.createElement('img');
  img1.src = project.image;
  img1.className = 'projects-popup-img1';
  document.getElementById('projects-popup').appendChild(img1);

  const divImg = document.createElement('div');
  divImg.id = 'projects-popup-img';
  divImg.className = 'projects-popup-img-container';
  document.getElementById('projects-popup').appendChild(divImg);

  const img2 = document.createElement('img');
  img2.src = project.imageSecundary;
  img2.className = 'projects-popup-img';
  divImg.appendChild(img2);

  const img3 = document.createElement('img');
  img3.src = project.imageSecundary;
  img3.className = 'projects-popup-img';
  divImg.appendChild(img3);

  const img4 = document.createElement('img');
  img4.src = project.imageSecundary;
  img4.className = 'projects-popup-img';
  divImg.appendChild(img4);

  const img5 = document.createElement('img');
  img5.src = project.imageSecundary;
  img5.className = 'projects-popup-img';
  divImg.appendChild(img5);

  const p = document.createElement('p');
  p.textContent = project.description;
  p.className = 'projects-popup-paragraph';
  document.getElementById('projects-popup').appendChild(p);

  const divButton = document.createElement('div');
  divButton.id = 'projects-popup-button';
  divButton.className = 'projects-popup-button-container';
  document.getElementById('projects-popup').appendChild(divButton);

  const buttonDemo = document.createElement('button');
  buttonDemo.type = 'submit';
  buttonDemo.textContent = 'See live';
  buttonDemo.className = 'projects-popup-button';
  divButton.appendChild(buttonDemo);

  const iconButtonDemo = document.createElement('img');
  iconButtonDemo.src = 'https://drive.google.com/uc?export=download&id=17kH5_IbbTsXI9puTDtHuZK6zt4XtZ5-G';
  iconButtonDemo.className = 'projects-popup-button-icon';
  buttonDemo.appendChild(iconButtonDemo);

  const buttonSource = document.createElement('button');
  buttonSource.type = 'submit';
  buttonSource.textContent = 'See source';
  buttonSource.className = 'projects-popup-button';
  divButton.appendChild(buttonSource);

  const iconButtonSource = document.createElement('img');
  iconButtonSource.src = 'https://drive.google.com/uc?export=download&id=1XM8ibRfA09uVLwfaQCW6aCRMiG-BP-g3';
  iconButtonSource.className = 'projects-popup-button-icon';
  buttonSource.appendChild(iconButtonSource);
}

for (let i = 0; i < projects.length; i += 1) {
  if (i === 0) {
    const open = document.querySelector('.button-see-this-project-1');
    open.addEventListener('click', () => {
      const div = document.createElement('div');
      div.id = 'projects-popup';
      div.className = 'projects-popup-container';
      document.body.append(div);
      document.body.classList.add('stop-scroll');
      createProject(projects[i]);
      const close = document.querySelector('.projects-popup-divXButton');
      close.addEventListener('click', () => {
        document.body.classList.remove('stop-scroll');
        document.body.removeChild(div);
      });
    });
  }
  if (i === 1) {
    const open = document.querySelector('.button-see-this-project-2');
    open.addEventListener('click', () => {
      const div = document.createElement('div');
      div.id = 'projects-popup';
      div.className = 'projects-popup-container';
      document.body.append(div);
      document.body.classList.add('stop-scroll');
      createProject(projects[i]);
      const close = document.querySelector('.projects-popup-divXButton');
      close.addEventListener('click', () => {
        document.body.classList.remove('stop-scroll');
        document.body.removeChild(div);
      });
    });
  }
  if (i === 2) {
    const open = document.querySelector('.button-see-this-project-3');
    open.addEventListener('click', () => {
      const div = document.createElement('div');
      div.id = 'projects-popup';
      div.className = 'projects-popup-container';
      document.body.append(div);
      document.body.classList.add('stop-scroll');
      createProject(projects[i]);
      const close = document.querySelector('.projects-popup-divXButton');
      close.addEventListener('click', () => {
        document.body.classList.remove('stop-scroll');
        document.body.removeChild(div);
      });
    });
  }
  if (i === 3) {
    const open = document.querySelector('.button-see-this-project-4');
    open.addEventListener('click', () => {
      const div = document.createElement('div');
      div.id = 'projects-popup';
      div.className = 'projects-popup-container';
      document.body.append(div);
      document.body.classList.add('stop-scroll');
      createProject(projects[i]);
      const close = document.querySelector('.projects-popup-divXButton');
      close.addEventListener('click', () => {
        document.body.classList.remove('stop-scroll');
        document.body.removeChild(div);
      });
    });
  }
  if (i === 4) {
    const open = document.querySelector('.button-see-this-project-5');
    open.addEventListener('click', () => {
      const div = document.createElement('div');
      div.id = 'projects-popup';
      div.className = 'projects-popup-container';
      document.body.append(div);
      document.body.classList.add('stop-scroll');
      createProject(projects[i]);
      const close = document.querySelector('.projects-popup-divXButton');
      close.addEventListener('click', () => {
        document.body.classList.remove('stop-scroll');
        document.body.removeChild(div);
      });
    });
  }
  if (i === 5) {
    const open = document.querySelector('.button-see-this-project-6');
    open.addEventListener('click', () => {
      const div = document.createElement('div');
      div.id = 'projects-popup';
      div.className = 'projects-popup-container';
      document.body.append(div);
      document.body.classList.add('stop-scroll');
      createProject(projects[i]);
      const close = document.querySelector('.projects-popup-divXButton');
      close.addEventListener('click', () => {
        document.body.classList.remove('stop-scroll');
        document.body.removeChild(div);
      });
    });
  }
}

function showMsg(input, messages, type) {
  const message = document.getElementById('errorm');
  message.innerText = messages;
  input.className = type ? 'success' : 'error';
  return type;
}

function showErr(input, messages) {
  return showMsg(input, messages, false);
}

function showSucss(input) {
  return showMsg(input, '', true);
}

function whitValue(input, messages) {
  if (input.value.trim() === '') {
    return showErr(input, messages);
  }
  return showSucss(input);
}

function validate(input, requiredMessage, invalidMessage) {
  if (!whitValue(input, requiredMessage)) {
    return false;
  }
  const email = input.value.trim();
  if (!/^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9-]+)*$/.test(email)) {
    return showErr(input, invalidMessage);
  }
  return true;
}

const form = document.querySelector('#form-contact');
const RequiredEmail = 'Please enter your email. Form not submitted';
const InvalidEmail = 'Please enter a correct email address format. The email has to be in lower case. Form not submitted';

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const validEmail = validate(form.elements.email, RequiredEmail, InvalidEmail);
  if (validEmail) {
    alert('Form submitted');
  }
});

const nameInput = document.querySelector('#name');
nameInput.value = JSON.parse(localStorage.getItem('form'))?.name || '';
nameInput.addEventListener('input', (name) => {
  const objForm = JSON.parse(localStorage.getItem('form')) || { name: '', email: '', message: '' };
  objForm.name = name.target.value;
  localStorage.setItem('form', JSON.stringify(objForm));
});

const mailInput = document.querySelector('#email');
mailInput.value = JSON.parse(localStorage.getItem('form'))?.email || '';
mailInput.addEventListener('input', (email) => {
  const objForm = JSON.parse(localStorage.getItem('form')) || { name: '', email: '', message: '' };
  objForm.email = email.target.value;
  localStorage.setItem('form', JSON.stringify(objForm));
});

const textAreaInput = document.querySelector('#message');
textAreaInput.value = JSON.parse(localStorage.getItem('form'))?.message || '';
textAreaInput.addEventListener('input', (message) => {
  const objForm = JSON.parse(localStorage.getItem('form')) || { name: '', email: '', message: '' };
  objForm.message = message.target.value;
  localStorage.setItem('form', JSON.stringify(objForm));
});
