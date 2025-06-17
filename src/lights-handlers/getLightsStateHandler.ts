import {browser} from "../index.ts";
import { lightState } from "./setLightsStateHandler.ts";

export const getLightsStateHandler = () => (
    browser?.on('f:c:getLightsState', () => {
        setTimeout(() => {
            browser?.emit('c:f:getLightsState', {
                success: true,
                data: lightState,
                error: null
            })
        }, 1000)
    })
)