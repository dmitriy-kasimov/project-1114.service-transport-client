import {browser} from "../../../index.ts";

export const toggleDoorsStateHandler = () => (
    browser?.on('f:c:getDoorsState', () => {
        setTimeout(() => {
            browser?.emit('c:f:getDoorsState', {
                success: true,
                data: false,
                error: null
            })
        }, 3000)
    })
)