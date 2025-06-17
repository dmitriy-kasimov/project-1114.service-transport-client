import {browser} from "../../../index.ts";
import {doors} from "../../mock/doors.ts";
import {EDoors} from "../../const/EDoors.ts";

export const getDoorDriverRearStateHandler = () => (
    browser?.on('f:c:getDoorDriverRearState', () => {
        setTimeout(() => {
            browser?.emit('c:f:getDoorDriverRearState', {
                success: true,
                data: doors[EDoors.DriverRear],
                error: null
            })
        }, 500)
    })
)