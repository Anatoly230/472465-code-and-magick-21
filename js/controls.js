"use strict"

var fireballSize = 22;
var getFireballSpeed = function (isMoveToLeft){
  return isMoveToLeft ? 2 : 5;
}

var wizardSpeed = 3;
var wizardWidth = 70;
var getWizardHeight = function(){
  return 1.337 * wizardWidth;
};

var getWizardX = function(gameFlorWidth){
return (gameFlorWidth - wizardWidth) / 2;
};

var getWizardY = function(gameFlorHeight){
return gameFlorHeight / 3;
};
