import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import ViteComponents from "vite-plugin-components";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    ViteComponents({
      globalComponentsDeclaration:true,
      customComponentResolvers: [
        (name) => {
          if (name.startsWith("FF")) {
            let partialName = name.slice(2);
            return {
              importName: partialName,
              path: "@vfastui/fastui",
              sideEffects: `@vfastui/fastui/dist/${partialName.toLowerCase()}/${partialName.toLowerCase()}.css`,
            };
          }
        },
      ],
    })
  ]
})
