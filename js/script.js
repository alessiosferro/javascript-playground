import { APP_DEFAULT_CONFIG } from './config/app.config.js';
import interaction from './functions/interaction.js';

const { INTERACTION } = APP_DEFAULT_CONFIG.PLAYABLE_BLOCKS;

// seleziona la porzione di codice da eseguire
// in base alla configurazione dell'app
switch (true) {
  case INTERACTION:
    interaction();
    break;
}
