'use strict';

import { APP_DEFAULT_CONFIG } from './config/app.config.js';

import {
  execInteraction,
  execOrTricks,
  execAndTricks,
  execLoopLabels
} from './blocks/index.js';

const { PLAYABLE_BLOCKS } = APP_DEFAULT_CONFIG;

// le chiavi dell'oggetto PLAYABLE_BLOCKS
// devono coincidere con le chiavi dell'oggetto BLOCKS
// per chiamare correttamente il blocco di codice associato.
const BLOCKS = {
  execInteraction,
  execOrTricks,
  execAndTricks,
  execLoopLabels
};

// seleziona la porzione di codice da eseguire
// in base alla configurazione dell'app
for (const blockName in PLAYABLE_BLOCKS) {
  if (PLAYABLE_BLOCKS[blockName]) {
    BLOCKS[blockName]();
  }
}
