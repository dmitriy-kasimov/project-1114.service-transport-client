import {browser} from "../../../index.ts";
import {EDoors} from "../../const/EDoors.ts";
import { doors } from "../../mock/doors.ts";

export const toggleDoorDriverFrontStateHandler = () => (
    browser?.on('f:c:toggleDoorDriverFrontState', () => {
        doors[EDoors.DriverFront] = !doors[EDoors.DriverFront]
        setTimeout(() => {
            browser?.emit('c:f:toggleDoorDriverFrontState', {
                success: true,
                data: doors[EDoors.DriverFront],
                error: null
            })
        }, 500)
    })
)