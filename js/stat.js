'use strict'

const CLOUD_WIDTH = 420;
const CLOUD_HEIGHT = 270;
const CLOUD_X = 150;
const CLOUD_Y = 10;
const MIN_OFFSET = 10;
const GAP = 50;
const FONT_GAP = 15;
const TEXT_WIDTH = 40;
const BAR_WIDTH = 40;
const BAR_HEIGHT = 130;
const FONT_SIZE = '16px';
const FONT_FAMILY = 'PT Mono';
const MY_COLOR = 'rgba(255, 0, 0, 1)';
const CLOUD_COLOR = '#fff';
const CLOUD_SHADDOW_COLOR = 'rgba(0,0,0,0.7)';
const TEXT_COLOR = '#000';
const blueColors = [
  `hsl(240, 20%, 50%)`,
  `hsl(240, 50%, 50%)`,
  `hsl(240, 80%, 50%)`
]


const renderCloud = (ctx, x, y, color) => {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};
const findMax = (array) => {
  let max = array[0];
  for (let i = 1; i < array.length; i++) {
    if (max < array[i]) {
      max = array[i];
    }
  }
  return max
};

window.renderStatistics = (ctx, players, times) => {
  console.log(ctx, players, times)
  renderCloud(
    ctx,
    CLOUD_X + MIN_OFFSET,
    CLOUD_Y + MIN_OFFSET,
    CLOUD_SHADDOW_COLOR
  );

  renderCloud(
    ctx,
    CLOUD_X,
    CLOUD_Y,
    CLOUD_COLOR
  );

  ctx.fillStyle = TEXT_COLOR;
  ctx.font = `${FONT_SIZE} ${FONT_FAMILY}`;
  ctx.fillText('Ура вы победили! ', CLOUD_X + MIN_OFFSET * 2, CLOUD_Y + MIN_OFFSET * 3);
  ctx.fillText('Список результатов: ', CLOUD_X + MIN_OFFSET * 2, CLOUD_Y + MIN_OFFSET * 4.8);



  for (let i = 0; i < times.length; i++) {
    if (players[i] === 'Вы') {
      ctx.fillStyle = MY_COLOR;
    } else {
      ctx.fillStyle = blueColors.pop();
    }
    let currentTime = Math.round(times[i]);
    let currentHeight = (currentTime / (findMax(times) / 100)) * (BAR_HEIGHT / 100);

    const distantion = (BAR_WIDTH + GAP) * i;

    ctx.fillRect(CLOUD_X + GAP + distantion, CLOUD_Y + CLOUD_HEIGHT - GAP, BAR_WIDTH, -1 * currentHeight);

    ctx.fillText(currentTime, CLOUD_X + GAP + distantion, CLOUD_Y + CLOUD_HEIGHT - GAP - currentHeight - MIN_OFFSET);
    ctx.fillText(players[i], CLOUD_X + GAP + distantion, CLOUD_Y + CLOUD_HEIGHT - GAP + MIN_OFFSET * 2);
  };


};
