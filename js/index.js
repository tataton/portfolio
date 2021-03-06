/* ------ Software <-> Chemistry view toggle ------ */

// Software/chemistry toggle elements
const showChemistryButton = document.querySelector('.nav-chooser--chemistry');
const softwareNavPanel = document.querySelector('.nav-panel--software');
const chemistryNavPanel = document.querySelector('.nav-panel--chemistry');
const softwareMainPanel = document.querySelector('.main-panel--software');
const chemistryMainPanel = document.querySelector('.main-panel--chemistry');

const switchView = event => {
  const scrollElm = document.scrollingElement;
  scrollElm.scrollTop = 0;
  // Switch which panel and button is active
  softwareNavPanel.classList.toggle('nav-panel--hidden');
  softwareNavPanel.classList.toggle('nav-panel--visible');
  chemistryNavPanel.classList.toggle('nav-panel--visible');
  chemistryNavPanel.classList.toggle('nav-panel--hidden');
  softwareMainPanel.classList.toggle('main-panel--hidden');
  softwareMainPanel.classList.toggle('main-panel--visible');
  chemistryMainPanel.classList.toggle('main-panel--visible');
  chemistryMainPanel.classList.toggle('main-panel--hidden');
  const thisButton = event.currentTarget;
  const siblingButton = event.currentTarget.nextElementSibling
    ? event.currentTarget.nextElementSibling
    : event.currentTarget.previousElementSibling;
  thisButton.classList.toggle('nav-chooser--active');
  siblingButton.classList.toggle('nav-chooser--active');
  thisButton.removeEventListener('click', switchView);
  siblingButton.addEventListener('click', switchView);
};

// Initialize state, button
showChemistryButton.addEventListener('click', switchView);

/* ------ Generate half-hexagon label brackets ------ */

const bracketStrings = {
  left:
    'M 0.5 0 L 0.4583 0 Q 0.35 0 0.2958 0.0625 L 0.1155 0.4063 Q 0.0613 0.5 0.1155 0.5938 L 0.2958 0.9063 Q 0.35 1 0.4583 1 L 0.5 1 Z',
  right:
    'M 0 0 L 0.0417 0 Q 0.15 0 0.2042 0.0625 L 0.3845 0.4063 Q 0.4387 0.5 0.3845 0.5938 L 0.2042 0.9063 Q 0.15 1 0.0417 1 L 0 1 Z'
};

const insertPathEl = (svgEl, type) => {
  const pathEl = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  pathEl.setAttribute('d', bracketStrings[type]);
  svgEl.insertAdjacentElement('afterbegin', pathEl);
};

['left', 'right'].forEach(type => {
  document
    .querySelectorAll('.main-title__bracket--' + type)
    .forEach(element => {
      insertPathEl(element, type);
    });
});

/* ------ Generate skills selectors ------ */
const skillsArray = [
  'react',
  'redux',
  'mobx',
  'react-router',
  'typescript',
  'node.js',
  'express',
  'oauth-2.0',
  'passport',
  'postgresql',
  'knex.js',
  'sequelize',
  'mongodb',
  'mongoose',
  'redis',
  'git',
  'javascript',
  'html',
  'css',
  'sass',
  'angularjs',
  'jquery',
  'mocha',
  'chai',
  'java',
  'sql',
  'nosql',
  'svg',
  'responsive',
  'bootstrap'
];

const skillsList = document.getElementById('skills__list');
const skillsBracketString = type =>
  `<svg class="skills__bracket" viewBox="0 0 0.5 1"><path d="${
    bracketStrings[type]
  }" /></svg>`;
skillsArray.sort().forEach(entry => {
  const skill = document.createElement('div');
  skill.className = 'skills__skill';
  skill.innerHTML = `${skillsBracketString('left')}
  <div class='skills__label'>
    ${entry}
  </div>
  ${skillsBracketString('right')}`;
  skillsList.insertAdjacentElement('beforeend', skill);
  // Can include skill.addEventListener() here, inside loop.
  // When you do, make sure to add :hover CSS.
});
