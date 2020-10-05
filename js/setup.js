const names = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'];

const surNames = [
'да Марья',
'Верон',
'Мирабелла',
'Вальц',
'Онопко',
'Топольницкая',
'Нионго',
'Ирвинг'];

const coatColors = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'];

const eyesColors = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'];

let setupWindow = document.querySelector('.setup').classList.remove('hidden');
let similarIconTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
let similarsList = document.querySelector('.setup-similar-list');
let wizards = [];

let selectFromArray = (array) => {

let arrElement = array.shift();
let selectElement = arrElement;
array.push(arrElement);

return selectElement
};

let initialObj = (names, surNames, coatColors, eyesColors) => {

let obj = {};

obj.name = selectFromArray(names);
obj.surName = selectFromArray(surNames);
obj.coatColor = selectFromArray(coatColors);
obj.eyesColor = selectFromArray(eyesColors);

return obj
  };

for (let i = 0; i < 4; i++) {
wizards[i] = initialObj(names, surNames, coatColors, eyesColors);
};





let createIcon = (arrayObj) => {

let copySimilarItem = similarIconTemplate.cloneNode(true);

copySimilarItem.querySelector('.setup-similar-label').textContent = arrayObj.name + ' ' + arrayObj.surName;
copySimilarItem.querySelector('.wizard-coat').style.fill = arrayObj.coatColor;
copySimilarItem.querySelector('.wizard-eyes').style.fill = arrayObj.eyesColor;

return copySimilarItem

};


let renderElements = () => {

let fragment = document.createDocumentFragment();

for (object of wizards) {
fragment.appendChild(createIcon(object));
};

similarsList.appendChild(fragment);

let similarsBlock = document.querySelector('.setup-similar').classList.remove('hidden');

};

renderElements();
