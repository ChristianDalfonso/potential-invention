import * as ex from 'excalibur';

const game = new ex.Engine({
  width: 800,
  height: 600,
});

const player = new ex.Actor({
  x: 150,
  y: game.drawHeight - 40,
  width: 50,
  height: 100,
  color: ex.Color.Red,
});

game.input.keyboard.on('press', (evt) => {
  const { key } = evt;
  let velocity = 200;
  switch (key) {
    case 'KeyW':
      player.vel.y = -velocity;
      break;
    case 'KeyA':
      player.vel.x = -velocity;
      break;
    case 'KeyS':
      player.vel.y = velocity;
      break;
    case 'KeyD':
      player.vel.x = velocity;
      break;

    default:
      break;
  }
});
game.input.keyboard.on('release', (evt) => {
  const { key } = evt;
  switch (key) {
    case 'KeyW':
      player.vel.y = 0;
      break;
    case 'KeyA':
      player.vel.x = 0;
      break;
    case 'KeyS':
      player.vel.y = 0;
      break;
    case 'KeyD':
      player.vel.x = 0;
      break;

    default:
      break;
  }
});

game.add(player);

game.start();
