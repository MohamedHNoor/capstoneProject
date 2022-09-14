// mobile menu
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav-link');
navToggle.addEventListener('click', () => {
  document.body.classList.toggle('nav-open');
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    document.body.classList.remove('nav-open');
  });
});

// feature speakers
const speakers = [
  {
    id: 1,
    name: 'yohai benkler',
    title: 'Professor at Harvard Law School',
    img: '../images/speaker_01.png',
    desc: 'Focusing on a collaborative approach in a networked environment, he created the concept of co-production based on sharing, such as open source software and Wikipedia',
  },
  {
    id: 2,
    name: 'Noh So-young',
    title: 'Art Center Nabi Director, CC Korea Director',
    img: '../images/speaker_02.png',
    desc: 'As the author of <Digital Art Art of Our Time>, he opened Art Center Nabi, Korea first digital art institution in 2000, and is currently serving.',
  },
  {
    id: 3,
    name: 'Layla Trettikov',
    title: 'Secretary General of the Wikimedia Foundation',
    img: '../images/speaker_03.png',
    desc: 'Layla Tretikov is the general secretary of the Wikimedia Foundation, a non-profit organization that runs Wikipedia.',
  },
  {
    id: 4,
    name: 'Jeon Gil-nam',
    title: 'Emeritus Professor',
    img: '../images/speaker_04.png',
    desc: 'Developed Asias first Internet protocol network SDN and led Koreas first private line Internet connection in 1990, ushering in a full-fledged',
  },
  {
    id: 5,
    name: 'Julia Leda',
    title: 'Head of the Young Pirates of Europe',
    img: '../images/speaker_05.png',
    desc: 'European integration and online youth participation in politics and democracy are major concerns',
  },
  {
    id: 6,
    name: 'Ryan Merkley',
    title: 'Creative Commons CEO',
    img: '../images/speaker_06.png',
    desc: 'He led open source projects at the Mozilla Foundation and joined CC as CEO in 2014.',
  },
];

// get parent elements
const speakersSection = document.querySelector('.speakers');

// display all speakers when page loads
function displaySpeakers(speakerItems) {
  let displayItem = speakerItems.map(
    (item) => `<article class="speaker-item">
    <img src=${item.img} alt="speaker image" class="photo" />
    <div class="speaker-info">
      <header>
        <h4 class="name">${item.name}</h4>
        <p class="title">${item.title}</p>
      </header>
      <p class="desc">
        ${item.desc}
      </p>
    </div>
  </article>`,
  );
  displayItem = displayItem.join('');
  // console.log(displayItem);
  speakersSection.innerHTML = displayItem;
}

window.addEventListener('DOMContentLoaded', () => {
  displaySpeakers(speakers);
});
