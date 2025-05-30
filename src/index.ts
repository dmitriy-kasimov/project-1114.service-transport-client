import alt from "alt-client";

import './doorsHandlers/doorsHandlers.ts'
import './engineHandlers/engineHandlers.ts'
import './lightsHandlers/lightsHandlers.ts'
import {doors} from "./doorsHandlers/mock/doors.ts";
import {EDoors} from "./doorsHandlers/const/EDoors.ts";
import {ELightMods} from "./lightsHandlers/const/ELightMods.ts";

export const browser = new alt.WebView('http://resource/frontend/index.html')
browser.focus();
alt.showCursor(true);

let engineState = false;
browser.on('f:c:toggleEngineState', () => {
    engineState = !engineState
    alt.emit('c:c:alert', JSON.stringify({type: 'info', body: `Попытка ${engineState ? 'завести' : 'заглушить'} двигатель...`}))
    setTimeout(() => {
        browser.emit('c:f:toggleEngineState', {
            success: true,
            data: engineState,
            error: null
        })
        alt.emit('c:c:alert', JSON.stringify({type: 'success', body: `Двигатель ${engineState ? 'запущен' : 'заглушен'}`}))
    }, 300)
})

browser.on("f:c:getEngineState", () => {
    setTimeout(() => {
        browser.emit('c:f:getEngineState', {
            success: true,
            data: engineState,
            error: null
        })
    }, 1000)
})



let lightState = ELightMods.NoVehicleLightOverride;
browser.on('f:c:getLightsState', () => {
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




browser.on('f:c:getDoorsState', () => {
    setTimeout(() => {
        browser.emit('c:f:getDoorsState', {
            success: true,
            data: false,
            error: null
        })
    }, 3000)
})

browser.on('f:c:toggleDoorsState', () => {
    setTimeout(() => {
        browser.emit('c:f:toggleDoorsState', {
            success: true,
            data: true,
            error: null
        })
    }, 500)
})


browser.on('f:c:getHoodState', () => {
    setTimeout(() => {
        browser.emit('c:f:getHoodState', {
            success: true,
            data: doors[EDoors.Hood],
            error: null
        })
    }, 500)
})
browser.on('f:c:toggleHoodState', () => {
    doors[EDoors.Hood] = !doors[EDoors.Hood]
    setTimeout(() => {
        browser.emit('c:f:toggleHoodState', {
            success: true,
            data: doors[EDoors.Hood],
            error: null
        })
    }, 500)
})

browser.on('f:c:getTrunkState', () => {
    setTimeout(() => {
        browser.emit('c:f:getTrunkState', {
            success: true,
            data: doors[EDoors.Trunk],
            error: null
        })
    }, 500)
})
browser.on('f:c:toggleTrunkState', () => {
    doors[EDoors.Trunk] = !doors[EDoors.Trunk]
    setTimeout(() => {
        browser.emit('c:f:toggleTrunkState', {
            success: true,
            data: doors[EDoors.Trunk],
            error: null
        })
    }, 500)
})

browser.on('f:c:getDoorDriverFrontState', () => {
    setTimeout(() => {
        browser.emit('c:f:getDoorDriverFrontState', {
            success: true,
            data: doors[EDoors.DriverFront],
            error: null
        })
    }, 500)
})
browser.on('f:c:toggleDoorDriverFrontState', () => {
    doors[EDoors.DriverFront] = !doors[EDoors.DriverFront]
    setTimeout(() => {
        browser.emit('c:f:toggleDoorDriverFrontState', {
            success: true,
            data: doors[EDoors.DriverFront],
            error: null
        })
    }, 500)
})

browser.on('f:c:getDoorDriverRearState', () => {
    setTimeout(() => {
        browser.emit('c:f:getDoorDriverRearState', {
            success: true,
            data: doors[EDoors.DriverRear],
            error: null
        })
    }, 500)
})
browser.on('f:c:toggleDoorDriverRearState', () => {
    doors[EDoors.DriverRear] = !doors[EDoors.DriverRear]
    setTimeout(() => {
        browser.emit('c:f:toggleDoorDriverRearState', {
            success: true,
            data: doors[EDoors.DriverRear],
            error: null
        })
    }, 500)
})

browser.on('f:c:getDoorPassengerFrontState', () => {
    setTimeout(() => {
        browser.emit('c:f:getDoorPassengerFrontState', {
            success: true,
            data: doors[EDoors.PassengerFront],
            error: null
        })
    }, 500)
})
browser.on('f:c:toggleDoorPassengerFrontState', () => {
    doors[EDoors.PassengerFront] = !doors[EDoors.PassengerFront]
    setTimeout(() => {
        browser.emit('c:f:toggleDoorPassengerFrontState', {
            success: true,
            data: doors[EDoors.PassengerFront],
            error: null
        })
    }, 500)
})

browser.on('f:c:getDoorPassengerRearState', () => {
    setTimeout(() => {
        browser.emit('c:f:getDoorPassengerRearState', {
            success: true,
            data: doors[EDoors.PassengerRear],
            error: null
        })
    }, 500)
})
browser.on('f:c:toggleDoorPassengerRearState', () => {
    doors[EDoors.PassengerRear] = !doors[EDoors.PassengerRear]
    setTimeout(() => {
        browser.emit('c:f:toggleDoorPassengerRearState', {
            success: true,
            data: doors[EDoors.PassengerRear],
            error: null
        })
    }, 500)
})