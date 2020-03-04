/* eslint-disable */

// l'operatore OR può essere utilizzato negli assegnamenti
// per fornire un valore di fallback, nel caso in cui
// i valori precedenti non siano valori "veri", ovvero
// nel caso in cui restituiscano ad esempio "null".

// restituisce sempre l'ultimo valore originario, quindi
// può anche essere utilizzato per chiamare funzioni
// o eseguire istruzioni

export function runOrTricks() {
  const loadedUser = null;

  // loadedUser è un valore falso, quindi passa avanti.
  // la stringa "Alessio Sferro" convertita a boolean
  // è vera, in quanto è una stringa con lunghezza
  // maggiore a zero, e pertanto restituisce il suo valore
  // originario.
  let user = loadedUser || 'Alessio Sferro';
  console.log(user);

  // loadedUser è ancora un valore falso, in quanto null,
  // per cui esegue il successivo operando che in questo
  // caso è racchiuso tra parentesi tonde, per effettuare
  // prima l'assegnamento della stringa "Simone Battiato"
  // alla variabile user, dopodiché viene valutato il valore
  // booleano di user che è un valore vero, essendo una stringa di
  // lunghezza maggiore a zero, ed infine viene restituito il suo
  // valore originario.
  if (loadedUser || (user = 'Simone Battiato')) {
    console.log(user);
  }
}
