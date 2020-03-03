export default () => {
  // applicando l'operatore unario +, il valore restituito
  // da prompt verrà convertito a tipo number
  const personAge = +prompt('How old are you?', 18);

  // se la conversione a number fallisce, prompt restituisce
  // il valore numerico speciale NaN (Not a Number), che
  // fa fallire la seguente condizione. Se si seleziona
  // 'annulla', il prompt restituisce null, che dopo
  // la conversione a number varrà 0, che quindi farà
  // fallire la seguente condizione. In tale maniera
  // viene quindi gestito in un colpo solo sia il caso
  // in cui l'utente non inserisce un valore numerico nell'input,
  // sia il caso in cui l'utente clicca su annulla
  if (personAge > 0) {
    alert(`You are ${personAge} years old!`);
  }

  if (confirm('Are you sick?')) {
    alert('You are sick!');
  } else {
    alert('You are not sick!');
  }
};
