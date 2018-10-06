/* ------ Software <-> Chemistry view toggle ------ */

// Software/chemistry toggle elements
const showChemistryButton = document.querySelector('.nav-chooser-chemistry');
const showSoftwareButton = document.querySelector('.nav-chooser-software');
let softwarePanelClass = document.querySelector('.nav-panel-software')
  .classList;
let chemistryPanelClass = document.querySelector('.nav-panel-chemistry')
  .classList;

const switchView = () => {
  // Switch which panel and button is active
  softwarePanelClass.toggle('nav-panel-hidden');
  softwarePanelClass.toggle('nav-panel-visible');
  chemistryPanelClass.toggle('nav-panel-visible');
  chemistryPanelClass.toggle('nav-panel-hidden');
  showSoftwareButton.classList.toggle('nav-chooser-active');
  showChemistryButton.classList.toggle('nav-chooser-active');
  if (isSoftwareActive) {
    showSoftwareButton.addEventListener('click', switchView);
    showChemistryButton.removeEventListener('click', switchView);
  } else {
    showChemistryButton.addEventListener('click', switchView);
    showSoftwareButton.removeEventListener('click', switchView);
  }
  // Add eventListener to other button
  isSoftwareActive = !isSoftwareActive;
};
// Initialize state, button
let isSoftwareActive = true;
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
  document.querySelectorAll('.main-title-bracket-' + type).forEach(element => {
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
  'responsive'
];

const skillsList = document.getElementById('skills-list');

skillsArray.sort().forEach(entry => {
  const skill = document.createElement('div');
  skill.className = 'skills-skill';
  skill.innerHTML = `<svg class="skills-bracket-svg" viewBox="0 0 0.5 1">
    <path d="${bracketStrings.left}" />
  </svg>
  <div class='skills-label'>
    ${entry}
  </div>
  <svg class="skills-bracket-svg" viewBox="0 0 0.5 1">
    <path d="${bracketStrings.right}" />
  </svg>`;
  skillsList.insertAdjacentElement('beforeend', skill);
  // Can include skill.addEventListener() here, inside loop.
  // When you do, make sure to add :hover CSS.
});
