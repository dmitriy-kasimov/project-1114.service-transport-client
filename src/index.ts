import alt from "alt-client";

const browser = new alt.WebView('http://resource/frontend/index.html')

let engineState = false;
browser.on('f:c:toggleEngineState', (payload: any) => {
    alt.log('f:c:toggleEngineState worked!')
    alt.log(payload)
    alt.log('trying to send message to c:f:toggleEngineState')
    engineState = !engineState
    setTimeout(() => {
        browser.emit('c:f:toggleEngineState', {
            success: true,
            data: engineState,
            error: null
        })
    }, 300)
})

browser.on("f:c:getEngineState", () => {
    alt.log('f:c:getEngineState worked!')
    alt.log('trying to send message to c:f:getEngineState')
    setTimeout(() => {
        browser.emit('c:f:getEngineState', {
            success: true,
            data: engineState,
            error: null
        })
    }, 1000)
})
browser.focus();
alt.showCursor(true);

export enum ELightMods {
    // Normal light behavior. Lights cycle through off, then low beams, then high beams.
    // Note: It's affected by day or night; high beams don't exist in daytime.
    NoVehicleLightOverride,

    // Vehicle doesn't have lights, always off.
    ForceVehicleLightsOff,

    // Vehicle has always-on lights.
    // During day: Cycles between low beams and high beams.
    // At night: Cycles between low beams, low beams, and high beams.
    ForceVehicleLightsOn,

    // Sets vehicle lights on. Behaves like normal lights (same as 0).
    SetVehicleLightsOn,

    // Sets vehicle lights off. Behaves like normal lights (same as 0).
    SetVehicleLightsOff,
}
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