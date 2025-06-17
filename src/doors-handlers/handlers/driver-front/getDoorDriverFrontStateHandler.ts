import {browser} from "../../../index.ts";
import {doors} from "../../mock/doors.ts";
import {EDoors} from "../../const/EDoors.ts";

export const getDoorDriverFrontStateHandler = () => (
    browser?.on('f:c:getDoorDriverFrontState', () => {
        setTimeout(() => {
            browser?.emit('c:f:getDoorDriverFrontState', {
                success: true,
                data: doors[EDoors.DriverFront],
                error: null
            })
        }, 500)
    })
)