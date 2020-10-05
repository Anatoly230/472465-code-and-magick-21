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

document.querySelector(`.setup`).classList.remove(`hidden`);
let similarIconTemplate = document.querySelector(`#similar-wizard-template`).content.querySelector(`.setup-similar-item`);
let similarsList = document.querySelector(`.setup-similar-list`);
let wizards = [];

let getRandomInt = (max) => {
  return (Math.floor(Math.random() * Math.floor(max)));
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
