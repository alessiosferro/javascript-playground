/**
 * L'and valuta gli operandi da sinistra a destra.
 * Ogni operando viene convertito in valore booleano.
 * Se il valore dell'operando è falso, allora restituisce
 * il valore originario dell'operando, altrimenti continua
 * la catena finché non arriva all'ultimo operando.
 *
 * Può essere utilizzato anche per eseguire blocchi di codice
 * e per creare degli if inline, tuttavi tale
 * comportamento è sconsigliato in quanto compromette
 * la leggibilità del codice.
 */

export function execAndTricks() {
  let x = 2;
  x == 2 && console.log(`x = ${x}`);
  x > 2 && console.log('Questa funzione non verrà invocata');

  // l'assegnamento di x finale sarà 5, in quanto tutti gli
  // operandi della catena convertiti a boolean sono veri,
  // per cui verrà restuito il valore dell'ultimo operando.
  if ((x = x == 2 && 'Hello' && 5)) {
    console.log(`x = ${x}`);
  }

  let y = x == 2 && console.log('Qui non ci arrivo!');

  // y è un booleano in quanto viene restituito il valore
  // originario del primo operando, che è un booleano
  // calcolato a partire dal confronto di x con il valore 2.
  // Essendo tale confronto falso, il risultato del successivo
  // confronto è vero e pertanto viene eseguito il log.
  y === false && console.log('Qui invece si!');

  let myName = 'Alessio Sferro';
  myName = x == 5 && 'Claudio Sichili';
  console.log(myName);
}
