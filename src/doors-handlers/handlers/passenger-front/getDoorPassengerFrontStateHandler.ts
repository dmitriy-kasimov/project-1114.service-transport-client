import {doors} from "../../mock/doors.ts";
import {EDoors} from "../../const/EDoors.ts";
import { browser } from "../../../index.ts";

export const getDoorPassengerFrontStateHandler = () => (
    browser?.on('f:c:getDoorPassengerFrontState', () => {
        setTimeout(() => {
            browser?.emit('c:f:getDoorPassengerFrontState', {
                success: true,
                data: doors[EDoors.PassengerFront],
                error: null
            })
        }, 500)
    })
)