import {doors} from "../../mock/doors.ts";
import {EDoors} from "../../const/EDoors.ts";
import {browser} from "../../../index.ts";

export const getHoodStateHandler = () => (
    browser?.on('f:c:getHoodState', () => {
        setTimeout(() => {
            browser?.emit('c:f:getHoodState', {
                success: true,
                data: doors[EDoors.Hood],
                error: null
            })
        }, 500)
    })
)