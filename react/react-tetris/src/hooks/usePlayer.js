import React, { useState } from 'react';
import { randomTetromino } from '../tetrominos';

export function usePlayer() {
  const [player, setPlayer] = useState({
    pos: { x: 0, y: 0 },
    tetromino: randomTetromino().shape,
    collided: false,
  });

  function updatePlayerPos(x, )

  return [player, setPlayer];
}