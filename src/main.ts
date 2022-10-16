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

game.add(player);

game.start();
