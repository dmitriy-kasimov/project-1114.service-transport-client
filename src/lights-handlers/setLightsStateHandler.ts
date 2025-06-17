import {browser} from "../index.ts";
import {ELightMods} from "./const/ELightMods.ts";

export let lightState = ELightMods.NoVehicleLightOverride;

export const setLightsStateHandler = () => (
    browser?.on('f:c:setLightsState', (newLightsState: string) => {
        lightState = +newLightsState as ELightMods
        setTimeout(() => {
            browser?.emit('c:f:setLightsState', {
                success: true,
                data: lightState,
                error: null
            })
        }, 1000)
    })
)