import {browser} from "../index.ts";
import {engineState} from "./toggleEngineStateHandler.ts";

export const getEngineStateHandler = () => (
    browser?.on("f:c:getEngineState", () => {
        setTimeout(() => {
            browser?.emit('c:f:getEngineState', {
                success: true,
                data: engineState,
                error: null
            })
        }, 1000)
    })
)
