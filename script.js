const cards = document.querySelectorAll('.card');
const btns = document.querySelectorAll('.btn button');
const slides = document.querySelectorAll('.slide');
const h1 = document.querySelector('.discription h1');
const p = document.querySelector('.discription p');

let currentIndex = 0;

// Textes pour chaque image
const descriptions = [
  { title: "Chaouen", text: "Chefchaouen, ou Chaouen, est une ville située dans les montagnes du Rif, au nord-ouest du Maroc. Elle est réputée pour les bâtiments remarquables de différents tons de bleu délavé de sa vieille ville. Des ateliers de maroquinerie et de tissage bordent ses allées pavées abruptes. Sur la place centrale ombragée d'Outa el Hammam se trouve la casbah aux murs rouges, forteresse et donjon du XVe siècle avec expositions ethnographiques et artistiques. Le minaret octogonal de la Grande Mosquée s'élève non loin de là.meknes" },
  { title: "Meknès", text: "Meknès est une ville située au nord du Maroc. Elle est réputée pour son passé impérial, avec des vestiges tels que Bab Mansour, une énorme porte avec voûtes et carrelage en mosaïque. La porte mène à l'intérieur de l'ancienne ville impériale. Le mausolée du sultan Moulay Ismaïl, qui a fait de la ville sa capitale au XVIIe siècle, comprend des cours et des fontaines. Au sud, le vaste complexe Heri es-Souani abritait autrefois des écuries et des entrepôts d'aliments." },
  { title: "Marrakech", text: "Marrakech, ancienne cité impériale de l'ouest du Maroc, et un centre économique majeur abritant des mosquées, des palais et des jardins. La médina est une cité médiévale fortifiée et densément peuplée datant de l'Empire berbère, avec des allées entremêlées tel un labyrinthe, où les souks (marchés) animés vendent des étoffes, des poteries et des bijoux traditionnels. Symbole de la ville, le minaret de la mosquée maure de Koutoubia du XIIe siècle est visible à des kilomètres." },
  { title: "Fès", text: "Fès est une ville du nord-est du Maroc souvent considérée comme la capitale culturelle du pays. Elle est principalement réputée pour la médina fortifiée de Fès El Bali, avec architecture mérinide médiévale, souks animés et atmosphère à l'ancienne. La médina abrite des écoles religieuses telles que les médersas Bou Inania et Al Attarine datant du XIVe siècle, toutes deux décorées de panneaux de cèdre sculptés et de délicates mosaïques. " }
];

function updateActive(index) {
  // Met à jour les slides
  slides.forEach((slide, i) => slide.classList.toggle('active', i === index));

  // Met à jour les cartes
  cards.forEach((card, i) => card.classList.toggle('active', i === index));

  // Met à jour le texte
  h1.textContent = descriptions[index].title;
  p.textContent = descriptions[index].text;

  // Centrer la carte active
  const container = document.querySelector('.card-all');
  const cardWidth = cards[0].offsetWidth + 20; // largeur + gap
  container.scrollLeft = cardWidth * index - container.offsetWidth / 2 + cardWidth / 2;
}

// Boutons
btns[0].addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + cards.length) % cards.length;
  updateActive(currentIndex);
});

btns[1].addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % cards.length;
  updateActive(currentIndex);
});

// Initialisation
updateActive(currentIndex);

function animateText(element) {
  element.classList.remove("text-animate");
  void element.offsetWidth;
  element.classList.add("text-animate");
}

function updateActive(index) {
  slides.forEach((slide, i) => slide.classList.toggle('active', i === index));
  cards.forEach((card, i) => card.classList.toggle('active', i === index));

  h1.textContent = descriptions[index].title;
  p.textContent = descriptions[index].text;

  // Animation du texte
  animateText(h1);
  animateText(p);
}
