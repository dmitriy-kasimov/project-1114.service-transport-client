import {doors} from "../../mock/doors.ts";
import {EDoors} from "../../const/EDoors.ts";
import { browser } from "../../../index.ts";

export const toggleDoorPassengerFrontStateHandler = () => (
    browser?.on('f:c:toggleDoorPassengerFrontState', () => {
        doors[EDoors.PassengerFront] = !doors[EDoors.PassengerFront]
        setTimeout(() => {
            browser?.emit('c:f:toggleDoorPassengerFrontState', {
                success: true,
                data: doors[EDoors.PassengerFront],
                error: null
            })
        }, 500)
    })
)