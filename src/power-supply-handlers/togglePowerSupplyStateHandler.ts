import alt from "alt-client";
import {browser} from "../index.ts";

export let powerSupplyState = false;

export const togglePowerSupplyStateHandler = () => (

browser?.on('f:c:togglePowerSupplyState', () => {
    powerSupplyState = !powerSupplyState
    alt.emit('c:c:alert', JSON.stringify({type: 'info', body: `Попытка ${powerSupplyState ? 'включить' : 'выключить'} зажигание...`}))
    setTimeout(() => {
        browser?.emit('c:f:togglePowerSupplyState', {
            success: true,
            data: powerSupplyState,
            error: null
        })

        alt.emit('c:c:alert', JSON.stringify({type: 'success', body: `Зажигание ${powerSupplyState ? 'включено' : 'выключено'}`}))
    }, 300)
})
)