const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.navigation-menu');
const close = document.querySelector('.close-icon');
const pages = document.querySelectorAll('.nav-pages-menu li');
const body = document.querySelector('body');
const form = document.querySelector('form');

/* Navigation Menu */
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

/* Reset form */
form.addEventListener('submit', () => {
  setTimeout(() => {
    form.reset();
  }, 100);
});

/* Projects section */
const projects = [
  {
    name: 'Book an Appointment', description: 'This full stack app enables you to book appointments with doctors who specialize in your needs. You can reserve an appointment with a doctor of your choice, view and delete your appointments, and add or remove doctors from your list to find the perfect match for your healthcare needs.', image: 'https://drive.google.com/uc?export=download&id=1ezqFesIFpE1D01gOhYnhAz48DyRBIcsw', technologies: ['React', 'Ruby on Rails', 'PostgreSQL'], linkDemo: 'http://162.243.166.190/', linkSource: 'https://github.com/Nelitaa/book-an-appointment',
  },
  {
    name: 'Recipe App', description: 'The Recipe app tracks your recipes, ingredients, and inventory. You can save ingredients, create recipes, and generate a shopping list based on what you have and need. Also, since sharing recipes is an important part of cooking the app allows you to make them public so anyone can access them.', image: 'https://drive.google.com/uc?export=download&id=1G2wQZDLDVKNMEBO0Z_RJtiiLjKmHzFau', technologies: ['Ruby on Rails', 'PostgreSQL'], linkDemo: 'Coming Soon...', linkSource: 'https://github.com/Nelitaa/Recipe-App',
  },
  {
    name: 'Math Magicians', description: 'Math magicians is a website for all fans of mathematics. It is a Single Page App (SPA) that allows users to make simple calculations and read a random math-related quote.', image: 'https://drive.google.com/uc?export=download&id=1Y3qesIAGy5otMVEQq4RlSJFlZdr4HKy0', technologies: ['React'], linkDemo: 'https://math-magicians-zjk7.onrender.com/', linkSource: 'https://github.com/Nelitaa/Math-magicians',
  },
  {
    name: 'I Love Food', description: 'This is a mobile web application that uses an external API to provide a seamless browsing experience for users exploring a variety of recipes from around the world, curated and organized by country. Users can track the popularity of each recipe with detailed view counts per recipe and by country and globally.', image: 'https://drive.google.com/uc?export=download&id=1K7WkVclQld9LM24YHVfefPttob08--4-', technologies: ['React', 'Redux'], linkDemo: 'https://i-love-food.onrender.com/', linkSource: 'https://github.com/Nelitaa/I-love-food',
  },
  {
    name: 'The Meal DB', description: 'This repository hosts The Meal DB, a web application that utilizes an external API to provide a comprehensive database of meals, complete with information such as name, image, and description. Users can interact with the meals by liking or commenting on them. Our team collaborated using a kanban board to ensure a successful project delivery.', image: 'https://drive.google.com/uc?export=download&id=1wPJf5u_pj07nC1ukpLDWx_yGl_F2cpeK', technologies: ['HTML5/CSS3', 'JavaScript'], linkDemo: 'https://nelitaa.github.io/Capstone-Project-JavaScript/dist/', linkSource: 'https://github.com/Nelitaa/The-Meal-DB',
  },
  {
    name: 'Employment and Entrepreneurship Fair 2022', description: 'This repository showcases the responsive design for the Employment and Entrepreneurship Fair 2022 website, following Behance design guidelines. You can easily find all comprehensive information regarding the event, including the date, location, speakers, sponsors, and main programs such as lectures, job matching, roundtables, stands and exhibitions', image: 'https://drive.google.com/uc?export=download&id=1uMcsZWyVbRcpJm7ePgK0-e8G5RpW31BY', technologies: ['HTML5/CSS3', 'JavaScript'], linkDemo: 'https://nelitaa.github.io/Employment-and-Entrepreneurship-Fair-2022/', linkSource: 'https://github.com/Nelitaa/Employment-and-Entrepreneurship-Fair-2022',
  },
];

const titleProjects = document.createElement('h2');
titleProjects.textContent = 'Projects';
document.getElementById('projects').appendChild(titleProjects);

for (let i = 0; i < projects.length; i += 1) {
  const card = document.createElement('div');
  card.className = 'card';
  document.getElementById('projects').appendChild(card);

  const cardImage = document.createElement('img');
  cardImage.src = projects[i].image;
  card.appendChild(cardImage);

  const cardContent = document.createElement('div');
  cardContent.className = 'card-content';
  card.appendChild(cardContent);

  const cardTitle = document.createElement('h3');
  cardTitle.textContent = projects[i].name;
  cardContent.appendChild(cardTitle);

  const cardTechnologies = document.createElement('ul');
  cardContent.appendChild(cardTechnologies);

  for (let j = 0; j < projects[i].technologies.length; j += 1) {
    const cardTechnology = document.createElement('li');
    cardTechnology.textContent = projects[i].technologies[j];
    cardTechnologies.appendChild(cardTechnology);
  }

  const cardButton = document.createElement('button');
  cardButton.type = 'submit';
  cardButton.textContent = 'See this project';
  cardButton.className = 'main-button';
  cardContent.appendChild(cardButton);

  const iconCardButton = document.createElement('img');
  iconCardButton.src = 'https://drive.google.com/uc?export=download&id=1TWy2gNJuqn464l5ggxpIV6ysuhjGYj3c';
  cardButton.appendChild(iconCardButton);
}



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
  document.getElementById('projec').appendChild(sectionBox);

  if (i === 0) {
    const imgProject1 = document.createElement('img');
    imgProject1.className = 'image-project11';
    imgProject1.src = 'https://drive.google.com/uc?export=download&id=1WBbS3KNDo33AUiytKyxuGSv0hj8nQfu-';
    divProjectImage.appendChild(imgProject1);
  }

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
