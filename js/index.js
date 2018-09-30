const showChemistryButton = document.querySelector('.nav-chooser-chemistry');
const showSoftwareButton = document.querySelector('.nav-chooser-software');
let softwarePanelClass = document.querySelector('.nav-panel-software')
  .classList;
let chemistryPanelClass = document.querySelector('.nav-panel-chemistry')
  .classList;

let isSoftwareActive = true;

const switchView = () => {
  if (isSoftwareActive) {
    softwarePanelClass.add('nav-panel-hidden');
    softwarePanelClass.remove('nav-panel-visible');
    chemistryPanelClass.add('nav-panel-visible');
    chemistryPanelClass.remove('nav-panel-hidden');
    showSoftwareButton.addEventListener('click', switchView);
    showChemistryButton.removeEventListener('click', switchView);
    showSoftwareButton.classList.add('nav-chooser-active');
    showChemistryButton.classList.remove('nav-chooser-active');
  } else {
    chemistryPanelClass.add('nav-panel-hidden');
    chemistryPanelClass.remove('nav-panel-visible');
    softwarePanelClass.add('nav-panel-visible');
    softwarePanelClass.remove('nav-panel-hidden');
    showChemistryButton.addEventListener('click', switchView);
    showSoftwareButton.removeEventListener('click', switchView);
    showChemistryButton.classList.add('nav-chooser-active');
    showSoftwareButton.classList.remove('nav-chooser-active');
  }
  // Add eventListener to other button
  isSoftwareActive = !isSoftwareActive;
};

showChemistryButton.addEventListener('click', switchView);
