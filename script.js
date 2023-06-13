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
    name: 'I Love Food', description: 'This is a mobile web application that uses an external API to provide a seamless browsing experience for users exploring a variety of recipes from around the world, curated and organized by country. Users can track the popularity of each recipe with detailed view counts per recipe and by country and globally.', image: 'https://drive.google.com/uc?export=download&id=1K7WkVclQld9LM24YHVfefPttob08--4-', technologies: ['React', 'Redux'], linkDemo: 'https://i-love-food.onrender.com/', linkSource: 'https://github.com/Nelitaa/I-love-food',
  },
  {
    name: 'The Meal DB', description: 'This repository hosts The Meal DB, a web application that utilizes an external API to provide a comprehensive database of meals, complete with information such as name, image, and description. Users can interact with the meals by liking or commenting on them. Our team collaborated using a kanban board to ensure a successful project delivery.', image: 'https://drive.google.com/uc?export=download&id=1wPJf5u_pj07nC1ukpLDWx_yGl_F2cpeK', technologies: ['HTML5/CSS3', 'JavaScript'], linkDemo: 'https://nelitaa.github.io/Capstone-Project-JavaScript/dist/', linkSource: 'https://github.com/Nelitaa/The-Meal-DB',
  },
  {
    name: 'Employment and Entrepreneurship Fair 2022', description: 'This repository showcases the responsive design for the Employment and Entrepreneurship Fair 2022 website, following Behance design guidelines. You can easily find all comprehensive information regarding the event, including the date, location, speakers, sponsors, and main programs such as lectures, job matching, roundtables, stands and exhibitions', image: 'https://drive.google.com/uc?export=download&id=1uMcsZWyVbRcpJm7ePgK0-e8G5RpW31BY', technologies: ['HTML5/CSS3', 'JavaScript'], linkDemo: 'https://nelitaa.github.io/Employment-and-Entrepreneurship-Fair-2022/', linkSource: 'https://github.com/Nelitaa/Employment-and-Entrepreneurship-Fair-2022',
  },
  {
    name: 'Math Magicians', description: 'Math magicians is a website for all fans of mathematics. It is a Single Page App (SPA) that allows users to make simple calculations and read a random math-related quote.', image: 'https://drive.google.com/uc?export=download&id=1Y3qesIAGy5otMVEQq4RlSJFlZdr4HKy0', technologies: ['React'], linkDemo: 'https://math-magicians-zjk7.onrender.com/', linkSource: 'https://github.com/Nelitaa/Math-magicians',
  },
];

const titleProjectsContainer = document.createElement('div');
titleProjectsContainer.className = 'title-projects-container';
document.getElementById('projects').appendChild(titleProjectsContainer);

const titleProjects = document.createElement('h2');
titleProjects.textContent = 'Projects';
titleProjectsContainer.appendChild(titleProjects);

for (let i = 0; i < projects.length; i += 1) {
  const card = document.createElement('div');
  card.className = 'card';
  card.id = `card-${i + 1}`;
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
  cardButton.id = i;
  cardContent.appendChild(cardButton);

  const iconCardButton = document.createElement('img');
  iconCardButton.src = 'https://drive.google.com/uc?export=download&id=1TWy2gNJuqn464l5ggxpIV6ysuhjGYj3c';
  cardButton.appendChild(iconCardButton);

  const projectsBackground1 = document.createElement('div');
  projectsBackground1.className = 'projects-background-1';
  document.getElementById('projects').appendChild(projectsBackground1);

  const projectsBackground2 = document.createElement('div');
  projectsBackground2.className = 'projects-background-2';
  document.getElementById('projects').appendChild(projectsBackground2);

  const projectsBackground3 = document.createElement('div');
  projectsBackground3.className = 'projects-background-3';
  document.getElementById('projects').appendChild(projectsBackground3);

  const projectsBackground4 = document.createElement('div');
  projectsBackground4.className = 'projects-background-4';
  document.getElementById('projects').appendChild(projectsBackground4);

  const projectsBackground5 = document.createElement('div');
  projectsBackground5.className = 'projects-background-5';
  document.getElementById('projects').appendChild(projectsBackground5);

  /* Details popup window projects section */
  const createPopupProject = (project) => {
    const projectsPopupContainer = document.createElement('div');
    projectsPopupContainer.id = 'projects-popup-container';
    document.getElementById('projects').appendChild(projectsPopupContainer);

    const closeIconContainer = document.createElement('div');
    closeIconContainer.className = 'close-icon-container';
    projectsPopupContainer.appendChild(closeIconContainer);

    const closeIcon = document.createElement('img');
    closeIcon.src = 'https://drive.google.com/uc?export=download&id=1qkSrHjcZCWXAqs9L_FN8lRCUITxy-cYX';
    closeIconContainer.appendChild(closeIcon);

    closeIcon.addEventListener('click', () => {
      projectsPopupContainer.remove();
    });

    const projectPopupTitle = document.createElement('h3');
    projectPopupTitle.textContent = project.name;
    projectsPopupContainer.appendChild(projectPopupTitle);

    const projectPopupTechnologies = document.createElement('ul');
    projectsPopupContainer.appendChild(projectPopupTechnologies);

    for (let j = 0; j < project.technologies.length; j += 1) {
      const projectPopupTechnology = document.createElement('li');
      projectPopupTechnology.textContent = project.technologies[j];
      projectPopupTechnologies.appendChild(projectPopupTechnology);
    }

    const projectsPopupImage = document.createElement('img');
    projectsPopupImage.src = project.image;
    projectsPopupContainer.appendChild(projectsPopupImage);

    const projectsPopupDescription = document.createElement('p');
    projectsPopupDescription.textContent = project.description;
    projectsPopupContainer.appendChild(projectsPopupDescription);

    const demoButton = document.createElement('button');
    demoButton.type = 'submit';
    demoButton.textContent = 'See live';
    demoButton.className = 'secondary-button';
    projectsPopupContainer.appendChild(demoButton);

    demoButton.addEventListener('click', () => {
      window.open(project.linkDemo, '_blank');
    });

    const iconDemoButton = document.createElement('img');
    iconDemoButton.src = 'https://drive.google.com/uc?export=download&id=17kH5_IbbTsXI9puTDtHuZK6zt4XtZ5-G';
    demoButton.appendChild(iconDemoButton);

    const sourceButton = document.createElement('button');
    sourceButton.type = 'submit';
    sourceButton.textContent = 'See source';
    sourceButton.className = 'secondary-button';
    projectsPopupContainer.appendChild(sourceButton);

    sourceButton.addEventListener('click', () => {
      window.open(project.linkSource, '_blank');
    });

    const iconSourceButton = document.createElement('img');
    iconSourceButton.src = 'https://drive.google.com/uc?export=download&id=1XM8ibRfA09uVLwfaQCW6aCRMiG-BP-g3';
    sourceButton.appendChild(iconSourceButton);
  };

  cardButton.addEventListener('click', () => {
    const project = projects[cardButton.id];
    createPopupProject(project);
  });
}
