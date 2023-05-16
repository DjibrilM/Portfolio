const menubtn = document.querySelector('.bx-menu');
const closeBtn = document.querySelector('.close-btn-menu');
const sideMenu = document.querySelector('.side-menu');
const menuItems = document.querySelectorAll('.side-menu ul li');
const detailBackdrop = document.querySelector('.backdrop');
const descModal = document.querySelector('.modal');
const projectCard = document.querySelectorAll('.project-card');
const closebtn = document.querySelector('.close-btn');

const openMenu = () => {
  sideMenu.classList.add('open-side-menu');
};

const closeMenu = () => {
  sideMenu.classList.remove('open-side-menu');
};

const showModalDesc = (card) => {
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

// for each project card
projectCard.forEach((card) => {
  card.querySelector('.project-button-link-container a').addEventListener('click', () => showModalDesc(card));
});

// events
menubtn.addEventListener('click', () => openMenu());
closeBtn.addEventListener('click', () => closeMenu());
closebtn.addEventListener('click', () => closeModalDesc());