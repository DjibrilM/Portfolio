const menubtn = document.querySelector('.bx-menu');
const closeBtn = document.querySelector('.close-btn-menu');
const projectsSection = document.querySelector('.projects');
const sideMenu = document.querySelector('.side-menu');
const menuItems = document.querySelectorAll('.side-menu ul li');
const detailBackdrop = document.querySelector('.backdrop');
const descModal = document.querySelector('.modal');
const closebtn = document.querySelector('.close-btn');

const projects = [
  {
    title: "Tonic",
    coverImage: "assets/images/project1.png",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    usedTools: ["html", "javascript", "css"],
  },
  {
    title: "Multi-Post Stories",
    coverImage: "assets/images/project2.png",
    description: "Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.",
    usedTools: ["html", "javascript", "css"],
  },
  {
    title: "Facebook 360",
    coverImage: "assets/images/project3.png",
    description: "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
    usedTools: ["html", "javascript", "css", "Ruby on rails"]
  },
  {
    title: "Uber Navigation",
    coverImage: "assets/images/project4.png",
    description: "A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.",
    usedTools: ["html", "javascript", "css", "Ruby on rails"]
  }
];

const projectCard = (title, description, tools, image, index) => {
  const project = document.createElement('div');
  project.className = "project-card";

  project.innerHTML = `
  <div class="project-image">
      <img src="${image}" alt="">
  </div>

  <div class="project-description">
      <h2 class="project-title">${title}</h2>
      <div class="details">
          <p>CANOPY </p>
          <div class="cercle"></div>
          <p>Back End Dev</p>
          <div class="cercle"></div>
          <p>2015</p>
      </div>

      <p class="detail-description">
         ${description}
      </p>

      <div class="used-programming-languages">
      ${tools.map((tool) => {
    return `<p>${tool}</p>`;
  })}
      </div>

      <div class="project-button-link-container">
          <a href="#" onclick="" class="project-btn">
              See project
          </a>
      </div>
  </div>
  `;

  return project;
};



const openMenu = () => {
  sideMenu.classList.add('open-side-menu');
};

const closeMenu = () => {
  sideMenu.classList.remove('open-side-menu');
};

const showModalDesc = (card, index) => {
  detailBackdrop.classList.add('open-backdrop');
  const title = card.querySelector('.project-title').textContent;
  const description = card.querySelector('.detail-description').textContent;
  const productImageSrc = card.querySelector('.project-image img').src;
  descModal.querySelector('.desc-title').textContent = title;
  descModal.querySelector('.parag').textContent = description;
  descModal.querySelector('.modal-img').src = productImageSrc;
};

const closeModalDesc = () => {
  detailBackdrop.classList.remove('open-backdrop');
};

menuItems.forEach((el) => {
  el.addEventListener('click', () => closeMenu());
});

console.log(projects);

// for each project card
projects.forEach((card) => {
  projectsSection.appendChild(projectCard(card.title, card.description, card.usedTools, card.coverImage))
});


//for each project card 
const projectCardEl = document.querySelectorAll('.project-card');
projectCardEl.forEach((card, index) => {
  card.querySelector('.project-btn').addEventListener('click', () => showModalDesc(card, index));
})
// events
menubtn.addEventListener('click', () => openMenu());
closeBtn.addEventListener('click', () => closeMenu());
closebtn.addEventListener('click', () => closeModalDesc());