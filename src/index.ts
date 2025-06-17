import alt, {onServer, type WebView} from "alt-client";
import {setPedConfigFlag} from "natives";
import {toggleEngineStateHandler} from "./engine-handlers/toggleEngineStateHandler.ts";
import {getEngineStateHandler} from "./engine-handlers/getEngineStateHandler.ts";
import {
    toggleDoorDriverFrontStateHandler
} from "./doors-handlers/handlers/driver-front/toggleDoorDriverFrontStateHandler.ts";
import {
    getDoorDriverFrontStateHandler
} from "./doors-handlers/handlers/driver-front/getDoorDriverFrontStateHandler.ts";
import {getDoorsStateHandler} from "./doors-handlers/handlers/doors/getDoorsStateHandler.ts";
import {toggleDoorsStateHandler} from "./doors-handlers/handlers/doors/toggleDoorsStateHandler.ts";
import {
    getDoorDriverRearStateHandler
} from "./doors-handlers/handlers/driver-rear/getDoorDriverRearStateHandler.ts";
import { toggleDoorDriverRearStateHandler } from "./doors-handlers/handlers/driver-rear/toggleDoorDriverRearStateHandler.ts";
import {getHoodStateHandler} from "./doors-handlers/handlers/hood/getHoodStateHandler.ts";
import { toggleHoodStateHandler } from "./doors-handlers/handlers/hood/toggleHoodStateHandler.ts";
import { getDoorPassengerFrontStateHandler } from "./doors-handlers/handlers/passenger-front/getDoorPassengerFrontStateHandler.ts";
import {
    toggleDoorPassengerFrontStateHandler
} from "./doors-handlers/handlers/passenger-front/toggleDoorPassengerFrontStateHandler.ts";
import {
    getDoorPassengerRearStateHandler
} from "./doors-handlers/handlers/passenger-rear/getDoorPassengerRearStateHandler.ts";
import {
    toggleDoorPassengerRearStateHandler
} from "./doors-handlers/handlers/passenger-rear/toggleDoorPassengerRearStateHandler.ts";
import {getTrunkStateHandler} from "./doors-handlers/handlers/trunk/getTrunkStateHandler.ts";
import {toggleTrunkStateHandler} from "./doors-handlers/handlers/trunk/toggleTrunkStateHandler.ts";
import {getLightsStateHandler} from "./lights-handlers/getLightsStateHandler.ts";
import {setLightsStateHandler} from "./lights-handlers/setLightsStateHandler.ts";
import {togglePowerSupplyStateHandler} from "./power-supply-handlers/togglePowerSupplyStateHandler.ts";
import {getPowerSupplyStateHandler} from "./power-supply-handlers/getPowerSupplyStateHandler.ts";


onServer("s:c:vehicleInit", () => {
    setPedConfigFlag(alt.Player.local.scriptID, 429, true);
})

export let browser: WebView | null = null;
onServer("s:c:controlShow", () => {
    browser = new alt.WebView('http://resource/frontend/index.html')
    browser.focus();
    alt.showCursor(true);

    browser.on("f:c:controlHide", () => {
        browser?.destroy()
        alt.showCursor(false);
    })


    togglePowerSupplyStateHandler()
    getPowerSupplyStateHandler()

    getEngineStateHandler()
    toggleEngineStateHandler()



    getDoorDriverFrontStateHandler()
    toggleDoorDriverFrontStateHandler()

    getDoorsStateHandler()
    toggleDoorsStateHandler()

    getDoorDriverFrontStateHandler()
    toggleDoorDriverFrontStateHandler()

    getDoorDriverRearStateHandler()
    toggleDoorDriverRearStateHandler()

    getHoodStateHandler()
    toggleHoodStateHandler()

    getDoorPassengerFrontStateHandler()
    toggleDoorPassengerFrontStateHandler()

    getDoorPassengerRearStateHandler()
    toggleDoorPassengerRearStateHandler()

    getTrunkStateHandler()
    toggleTrunkStateHandler()



    getLightsStateHandler()
    setLightsStateHandler()
})




