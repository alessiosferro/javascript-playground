/* eslint-disable import/named */
/* eslint-disable import/extensions */

import APP_DEFAULT_CONFIG from './config/app.config.js';

import {
  runUserInteractions,
  runOrTricks,
  runAndTricks,
  runLoopLabels,
} from './blocks/index.js';

const { PLAYABLE_BLOCKS } = APP_DEFAULT_CONFIG;

// le chiavi dell'oggetto PLAYABLE_BLOCKS
// devono coincidere con le chiavi dell'oggetto BLOCKS
// per chiamare correttamente il blocco di codice associato.
const BLOCKS = {
  runUserInteractions,
  runOrTricks,
  runAndTricks,
  runLoopLabels,
};

// seleziona la porzione di codice da eseguire
// in base alla configurazione dell'app
Object.keys(PLAYABLE_BLOCKS).forEach((block) => {
  if (PLAYABLE_BLOCKS[block]) {
    BLOCKS[block]();
  }
});
