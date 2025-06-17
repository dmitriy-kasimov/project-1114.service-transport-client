import {doors} from "../../mock/doors.ts";
import {EDoors} from "../../const/EDoors.ts";
import { browser } from "../../../index.ts";

export const toggleTrunkStateHandler = () => (
    browser?.on('f:c:toggleTrunkState', () => {
        doors[EDoors.Trunk] = !doors[EDoors.Trunk]
        setTimeout(() => {
            browser?.emit('c:f:toggleTrunkState', {
                success: true,
                data: doors[EDoors.Trunk],
                error: null
            })
        }, 500)
    })
)