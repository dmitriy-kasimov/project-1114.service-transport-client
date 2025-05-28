import {browser} from "../index.ts";
import {EDoors} from "./const/EDoors.ts";
import {doors} from "./mock/doors.ts";

browser.on('f:c:getDoorsState', () => {
    setTimeout(() => {
        browser.emit('c:f:getDoorsState', {
            success: true,
            data: false,
            error: null
        })
    }, 3000)
})

browser.on('f:c:toggleDoorsState', () => {
    setTimeout(() => {
        browser.emit('c:f:toggleDoorsState', {
            success: true,
            data: true,
            error: null
        })
    }, 1000)
})


browser.on('f:c:getDoorState', (door: string) => {
    setTimeout(() => {
        browser.emit('c:f:getDoorState', {
            success: true,
            data: doors[+door as EDoors],
            error: null
        })
    }, 3000)
})
browser.on('f:c:toggleDoorState', (door: string) => {
    const doorId = +door as EDoors
    doors[doorId] = !doors[doorId]
    setTimeout(() => {
        browser.emit('c:f:toggleDoorState', {
            success: true,
            data: doors[doorId],
            error: null
        })
    }, 3000)
})