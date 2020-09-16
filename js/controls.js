"use strict"

const fireballSize = 22;
const getFireballSpeed = function (isMoveToright){
  return isMoveToLeft ? 5 : 2;
}

const wizardSpeed = 3;
const wizardWidth = 70;
const getWizardHeight = function(){
  return 1.337 * wizardWidth;
};

const getWizardX = function(gameFlorWidth){
return (gameFlorWidth - wizardWidth) / 2;
};

const getWizardX = function(gameFlorHeight){
return gameFlorHeight / 3;
};
