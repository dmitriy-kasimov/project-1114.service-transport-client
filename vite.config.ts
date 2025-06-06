import {resolve} from "path"
import {defineConfig} from "vite";

export default defineConfig({
    build:{
        lib: {
            entry: resolve(__dirname, "src", "index.ts"),
            name: 'service-transport-client',
            fileName: 'index',
            formats: ['es']
        },
        //outDir: 'A:/Alone/PROJECTS/GTA5/Project-1114/server/resources/service-transport/client',
        outDir: 'E:/server/resources/service-transport/client',
        rollupOptions: {
            external: ["alt-client", "natives"]
        }
    }
})