import {doors} from "../../mock/doors.ts";
import {EDoors} from "../../const/EDoors.ts";
import { browser } from "../../../index.ts";

export const toggleHoodStateHandler = () => (
    browser?.on('f:c:toggleHoodState', () => {
        doors[EDoors.Hood] = !doors[EDoors.Hood]
        setTimeout(() => {
            browser?.emit('c:f:toggleHoodState', {
                success: true,
                data: doors[EDoors.Hood],
                error: null
            })
        }, 500)
    })
)