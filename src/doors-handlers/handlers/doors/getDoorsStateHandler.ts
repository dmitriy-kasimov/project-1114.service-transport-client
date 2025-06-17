import {browser} from "../../../index.ts";

export const getDoorsStateHandler = () => (
    browser?.on('f:c:toggleDoorsState', () => {
        setTimeout(() => {
            browser?.emit('c:f:toggleDoorsState', {
                success: true,
                data: true,
                error: null
            })
        }, 500)
    })
)