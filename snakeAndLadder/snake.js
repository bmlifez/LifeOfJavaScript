/*
You are to write a function which will accept the dice number and 
current position of a player in a snake and ladder game, and output 
the next position
*/

function nextPosition(diceNumber, currentPosition) {
  if (
    diceNumber < 1 ||
    diceNumber > 6 ||
    currentPosition < 1 ||
    currentPosition > 100
  ) {
    return currentPosition;
  }

  const ladders = {
    3: 22,
    5: 8,
    11: 26,
    20: 29,
    8: 77,
  };

  const snakes = {
    17: 7,
    19: 15,
    22: 5,
    27: 1,
    21: 6,
  };

  let newPosition = currentPosition + diceNumber; // type check addition number

  if (newPosition > 100) {
    return currentPosition;
  }

  function getPositon(position) {
    if (!snakes.hasOwnProperty(position) && !ladders.hasOwnProperty(position)) {
      return position;
    }

    if (ladders.hasOwnProperty(position)) {
      return getPositon(ladders[position]);
    }

    if (snakes.hasOwnProperty(position)) {
      return getPositon(snakes[position]);
    }
  }
  return getPositon(newPosition);
}
