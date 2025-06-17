import {browser} from "../index.ts";
import alt, {Player} from "alt-client";
import {setVehicleEngineOn} from "natives";

export let engineState = false;

export const toggleEngineStateHandler = () => (
    browser?.on('f:c:toggleEngineState', () => {
        engineState = !engineState
        alt.emit('c:c:alert', JSON.stringify({type: 'info', body: `Попытка ${engineState ? 'завести' : 'заглушить'} двигатель...`}))
        setTimeout(() => {
            browser?.emit('c:f:toggleEngineState', {
                success: true,
                data: engineState,
                error: null
            })

            let veh = Player.local.vehicle?.scriptID
            setVehicleEngineOn(veh!, engineState, true, true)

            alt.emit('c:c:alert', JSON.stringify({type: 'success', body: `Двигатель ${engineState ? 'запущен' : 'заглушен'}`}))
        }, 300)
    })
)