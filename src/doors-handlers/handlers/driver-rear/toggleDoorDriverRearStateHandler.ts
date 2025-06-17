import {doors} from "../../mock/doors.ts";
import {EDoors} from "../../const/EDoors.ts";
import {browser} from "../../../index.ts";

export const toggleDoorDriverRearStateHandler = () => (
    browser?.on('f:c:toggleDoorDriverRearState', () => {
        doors[EDoors.DriverRear] = !doors[EDoors.DriverRear]
        setTimeout(() => {
            browser?.emit('c:f:toggleDoorDriverRearState', {
                success: true,
                data: doors[EDoors.DriverRear],
                error: null
            })
        }, 500)
    })
)