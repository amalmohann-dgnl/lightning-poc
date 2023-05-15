import { Lightning, Launch, PlatformSettings, AppData } from '@lightningjs/sdk'
import { App } from './App.js'

const app = Launch(App, {
  stage: {
    pauseRafLoopOnIdle: true,
    fontSharp: true,
  },
  debug: true,
  enablePointer: true,
  keys: {
    38: 'Up',
    40: 'Down',
    37: 'Left',
    39: 'Right',
    13: 'Enter',
    8: 'Back',
    27: 'Exit',
  },
}, { /* Platform settings */ });

const canvas = app.stage.getCanvas();
document.body.appendChild(canvas);
