"use strict";

let fireballSize = 22;
let getFireballSpeed = function (isMoveToLeft) {
  return isMoveToLeft ? 2 : 5;
};

let wizardSpeed = 3;
let wizardWidth = 70;
let getWizardHeight = function () {
  return 1.337 * wizardWidth;
};

let getWizardX = function (gameFlorWidth) {
  return (gameFlorWidth - wizardWidth) / 2;
};

let getWizardY = function (gameFlorHeight) {
  return gameFlorHeight / 3;
};
