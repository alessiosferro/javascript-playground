/* eslint-disable */

export function runObjects() {
  const config = {
    objectPrompts: {
      execute: false,
      function: execObjectPrompts
    },
    objectFeatures: {
      execute: false,
      function: execObjectFeatures
    },
    objectSymbols: {
      execute: true,
      function: execObjectSymbols
    }
  }

  Object.keys(config).forEach(key => {
    if (config[key].execute) {
      config[key].function();
    }
  });
}

function execObjectSymbols() {
  let symbol = Symbol("id");
  let globalSymbol = Symbol.for("example");

  const user = {
    name: "Alessio Sferro",
    [symbol]: 2,
    [globalSymbol]: "Global Symbol Value"
  }

  console.log(user);
  console.log(Symbol.keyFor(globalSymbol));
}

function execObjectPrompts() {
  // object properties are made of key/value pairs
  const user = {
    name: 'Alessio',
    age: 25,
  };

  const key = prompt("What key do you want to select?", "name");

  console.log(user[key]);

  const newKey = prompt("Insert a new key to add to the object");
  const newKeyValue = prompt("Insert the value for that key");

  user[newKey] = !Number.isNaN(+newKeyValue) ? +newKeyValue : newKeyValue;

  const dynamicKey = prompt("Create a dynamic key", "name");
  const dynamicKeyValue = prompt("Insert the dynamic key value", "Piccolino");

  // computed properties
  const cat = {
    [dynamicKey]: dynamicKeyValue,
    [`${dynamicKey}Wow`]: `${dynamicKeyValue}Wow`
  }

  console.log(cat);
}

function execObjectFeatures() {
  const rabbit = {
    name: "Red Rabbit"
  }

  if ("name" in rabbit) {
    console.log(rabbit.name)
  }

  let key = "name";
  if (key in rabbit) {
    console.log(rabbit.name);
  }

  // gli oggetti che hanno come chiavi dei numeri interi
  // verranno salvati nell'oggetto in ordine lessicografico
  // ascendente. Per evitare ciò, si può anteporre un +
  // prima del numero e poi riconvertire a number
  const codes = {
    "+32": "Germany",
    "+12": "Italy"
  };

  for (let prop in codes) {
    console.log(+prop);
  }

  // il valore undefined non viene assegnato mai ad una
  // variabile o come valore di una chiave di un'oggetto.
  // rabbit.random restituirebbe comunque undefined
  // se non ne impostassimo il valore, ma in questo caso
  // stiamo settando la chiave "random" e quindi siamo
  // in grado di entrare nel corpo dell'if seguente.
  rabbit.random = undefined;

  key = "random";
  if (key in rabbit) {
    console.log(rabbit.key);
  }

  // gli oggetti sono copiati per riferimento, a differenza
  // dei tipi primitivi, che sono copiati per valore

  // user contiene l'indirizzo di memoria in cui è stato
  // salvato l'oggetto, in altre parole il riferimento.
  // È quindi a tutti gli effetti un puntatore. Quando
  // copiamo la variabile che contien un oggetto, stiamo 
  // copiando quindi il riferimento.
  let user = {
    name: "John",
  }

  let permissions = {
    write: false,
    read: true
  }

  let actions = {
    learn: true
  }

  Object.assign(
    user,
    permissions,
    actions
  );

  console.log(user);
}