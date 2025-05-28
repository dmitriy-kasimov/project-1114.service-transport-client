import alt from "alt-client";

import './doorsHandlers/doorsHandlers.ts'
import './engineHandlers/engineHandlers.ts'
import './lightsHandlers/lightsHandlers.ts'

export const browser = new alt.WebView('http://resource/frontend/index.html')
browser.focus();
alt.showCursor(true);
