import {doors} from "../../mock/doors.ts";
import {EDoors} from "../../const/EDoors.ts";
import {browser} from "../../../index.ts";

export const getDoorPassengerRearStateHandler = () => (
    browser?.on('f:c:getDoorPassengerRearState', () => {
        setTimeout(() => {
            browser?.emit('c:f:getDoorPassengerRearState', {
                success: true,
                data: doors[EDoors.PassengerRear],
                error: null
            })
        }, 500)
    })
)