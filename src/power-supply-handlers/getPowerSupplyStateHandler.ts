import {browser} from "../index.ts";
import {powerSupplyState} from "./togglePowerSupplyStateHandler.ts";

export const getPowerSupplyStateHandler = () => (
    browser?.on("f:c:getPowerSupplyState", () => {
        setTimeout(() => {
            browser?.emit('c:f:getPowerSupplyState', {
                success: true,
                data: powerSupplyState,
                error: null
            })
        }, 500)
    })
)