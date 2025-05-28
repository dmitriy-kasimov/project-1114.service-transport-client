import alt from "alt-client";
import {browser} from "../index.ts";

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