import alt from "alt-client";

const browser = new alt.WebView('http://resource/frontend/index.html')

browser.on('f:c:toggleEngineApi', (payload: any) => {
    alt.log('f:c:toggleEngineApi worked!')
    alt.log(payload)
    alt.log('trying to send message to c:f:toggleEngineApi')
    setTimeout(() => {
        browser.emit('c:f:toggleEngineApi', {
            success: true,
            data: true,
            error: null
        })
    }, 5000)
})

browser.on("f:c:getEngineApi", () => {
    alt.log('f:c:getEngineApi worked!')
    alt.log('trying to send message to c:f:getEngineApi')
    setTimeout(() => {
        browser.emit('c:f:getEngineApi', {
            success: true,
            data: false,
            error: null
        })
    }, 5000)
})
browser.focus();
alt.showCursor(true);