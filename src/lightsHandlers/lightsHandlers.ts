import alt from "alt-client";
import {browser} from "../index.ts";
import {ELightMods} from "./const/ELightMods.ts";


let lightState = ELightMods.NoVehicleLightOverride;
browser.on('f:c:getLightsState', () => {
    alt.log('f:c:getLightsState worked!')
    alt.log('trying to send message to c:f:getLightsState')
    setTimeout(() => {
        browser.emit('c:f:getLightsState', {
            success: true,
            data: lightState,
            error: null
        })
    }, 5000)
})

browser.on('f:c:setLightsState', (newLightsState: string) => {
    lightState = +newLightsState as ELightMods
    setTimeout(() => {
        browser.emit('c:f:setLightsState', {
            success: true,
            data: lightState,
            error: null
        })
    }, 3000)
})