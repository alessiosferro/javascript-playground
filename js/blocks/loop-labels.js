// break e continue possono far saltare l'esecuzione
// del codice alle etichette associate ai loop.
// I salti devono essere effettuati in zone interne
// al loop e le etichette devono trovarsi in scope
// più esterni (quindi più in alto).

export function execLoopLabels() {
  let i;

  outerLoop: for (i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      console.log(`(${i}, ${j})`);

      break outerLoop;
    }
  }

  i = 0;
  outerLoop: while (i < 10) {
    let j = 0;

    while (j < 10) {
      console.log(`(${i}, ${j})`);
      j++;

      break outerLoop;
    }

    i++;
  }

  i = 0;
  outerLoop: do {
    let j = 0;

    do {
      console.log(`(${i}, ${j})`);
      j++;

      break outerLoop;
    } while (j < 10);

    i++;
  } while (i < 10);

  outerLoop: for (i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      console.log(`(${i}, ${j})`);
      continue outerLoop;
    }
  }
}
