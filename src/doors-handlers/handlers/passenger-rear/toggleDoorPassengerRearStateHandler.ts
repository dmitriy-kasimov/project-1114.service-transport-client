import {doors} from "../../mock/doors.ts";
import {EDoors} from "../../const/EDoors.ts";
import { browser } from "../../../index.ts";

export const toggleDoorPassengerRearStateHandler = () => (
    browser?.on('f:c:toggleDoorPassengerRearState', () => {
        doors[EDoors.PassengerRear] = !doors[EDoors.PassengerRear]
        setTimeout(() => {
            browser?.emit('c:f:toggleDoorPassengerRearState', {
                success: true,
                data: doors[EDoors.PassengerRear],
                error: null
            })
        }, 500)
    })
)