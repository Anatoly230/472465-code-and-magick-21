'use strict';
const names = [
  `Иван`,
  `Хуан Себастьян`,
  `Мария`,
  `Кристоф`,
  `Виктор`,
  `Юлия`,
  `Люпита`,
  `Вашингтон`];

const surNames = [
  `да Марья`,
  `Верон`,
  `Мирабелла`,
  `Вальц`,
  `Онопко`,
  `Топольницкая`,
  `Нионго`,
  `Ирвинг`];

const coatColors = [
  `rgb(101, 137, 164)`,
  `rgb(241, 43, 107)`,
  `rgb(146, 100, 161)`,
  `rgb(56, 159, 117)`,
  `rgb(215, 210, 55)`,
  `rgb(0, 0, 0)`];

const eyesColors = [
  `black`,
  `red`,
  `blue`,
  `yellow`,
  `green`];

const fireballColor = [
  `#ee4830`,
  `#30a8ee`,
  `#5ce6c0`,
  `#e848d5`,
  `#e6e848`];

const setupPopup = document.querySelector(`.setup`);
const setupClose = document.querySelector(`.setup-close`);
const setupOpen = document.querySelector(`.setup-open-icon`);
const userNameSetup = document.querySelector(`.setup-user-name`);
const setupPlayer = document.querySelector(`.setup-player`);
const wizardCoat = setupPlayer.querySelector(`.wizard-coat`);
const wizardEyes = setupPlayer.querySelector(`.wizard-eyes`);
const fireballWrap = setupPlayer.querySelector(`.setup-fireball-wrap`);
const coatInput = setupPlayer.querySelector(`input[name="coat-color"]`);
const eyesInput = setupPlayer.querySelector(`input[name="eyes-color"]`);
const fireballInput = setupPlayer.querySelector(`input[name="fireball-color"]`);


let similarIconTemplate = document.querySelector(`#similar-wizard-template`).content.querySelector(`.setup-similar-item`);
let similarsList = document.querySelector(`.setup-similar-list`);
let wizards = [];

let getRandomInt = (max = 0, min = 0) => {
  return (Math.floor(Math.random() * Math.floor(max - min) + min));
};

let selectFromArray = (array) => {
  let max = array.length;
  let element = getRandomInt(max);
  return array[element];
};


let initialObj = (name, surName, coatColor, eyesColor) => {

  let obj = {};

  obj.name = selectFromArray(name);
  obj.surName = selectFromArray(surName);
  obj.coatColor = selectFromArray(coatColor);
  obj.eyesColor = selectFromArray(eyesColor);

  return obj;
};

for (let i = 0; i < 4; i++) {
  wizards[i] = initialObj(names, surNames, coatColors, eyesColors);
}

let createIcon = (arrayObj) => {

  let copySimilarItem = similarIconTemplate.cloneNode(true);

  copySimilarItem.querySelector(`.setup-similar-label`).textContent = arrayObj.name + ` ` + arrayObj.surName;
  copySimilarItem.querySelector(`.wizard-coat`).style.fill = arrayObj.coatColor;
  copySimilarItem.querySelector(`.wizard-eyes`).style.fill = arrayObj.eyesColor;

  return copySimilarItem;

};


let renderElements = () => {

  let fragment = document.createDocumentFragment();

  for (let object of wizards) {
    fragment.appendChild(createIcon(object));
  }

  similarsList.appendChild(fragment);

  document.querySelector(`.setup-similar`).classList.remove(`hidden`);

};

renderElements();


const wizardApparence = (targetInput, wizardTarget, colorsArray) => {

  targetInput.value = selectFromArray(colorsArray);
  if (wizardTarget === fireballWrap) {
    wizardTarget.style.backgroundColor = targetInput.value;
  } else {
    wizardTarget.style.fill = targetInput.value;
  }
};


const escapePopup = (evt) => {

  if (evt.code === `Escape`) {
    evt.preventDefault();
    setupPopup.classList.add(`hidden`);
  }

};

const openWithKey = (evt) => {
  if (evt.key === `Enter`) {
    openPopup();
  }
};

const closeWithKey = (evt) => {
  if (evt.key === `Enter`) {
    closePopup();
  }
};

const addEscape = () => {
  document.addEventListener(`keydown`, escapePopup);
};

const removeEscape = () => {
  document.removeEventListener(`keydown`, escapePopup);
};

setupOpen.addEventListener(`keydown`, openWithKey);

const openPopup = () => {
  setupPopup.classList.remove(`hidden`);
  addEscape();
  userNameSetup.addEventListener(`focus`, removeEscape);
  userNameSetup.addEventListener(`blur`, addEscape);
  setupClose.addEventListener(`keydown`, closeWithKey);
};



const closePopup = () => {
  setupPopup.classList.add(`hidden`);

  removeEscape();
  userNameSetup.removeEventListener(`focus`, removeEscape);
  userNameSetup.removeEventListener(`blur`, addEscape);
  setupClose.removeEventListener(`keydown`, closeWithKey);

};


setupOpen.addEventListener(`click`, () => {
  openPopup();
});


setupClose.addEventListener(`click`, () => {
  closePopup();
});



wizardCoat.addEventListener(`click`, () => {
  wizardApparence(coatInput, wizardCoat, coatColors);
});


wizardEyes.addEventListener(`click`, () => {
  wizardApparence(eyesInput, wizardEyes, eyesColors);
});

fireballWrap.addEventListener(`click`, () => {
  wizardApparence(fireballInput, fireballWrap, fireballColor);
});
