import { APP_DEFAULT_CONFIG } from './config/app.config.js';
import interaction from './functions/interaction.js';

const BLOCKS = APP_DEFAULT_CONFIG.PLAYABLE_BLOCKS;

// i nomi dei blocchi di codice devono coincidere con le chiavi
// del seguente oggetto, per chiamare correttamente il blocc
// di codice associato.
const FUNCTIONS = {
  interaction
};

// seleziona la porzione di codice da eseguire
// in base alla configurazione dell'app
for (const blockName in BLOCKS) {
  if (BLOCKS[blockName]) FUNCTIONS[blockName]();
}
