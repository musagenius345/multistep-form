import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import path from "node:path";

const __filename = new URL(import.meta.url).pathname
const __dirname = path.dirname(__filename)


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  resolve: {
    alias: {
      '$org': normalizePath('src/lib/Organisms'),
      '$atom': normalizePath('src/lib/Atoms'),
      '$mol': normalizePath('src/lib/Molecules'),
    },
  },
})

function normalizePath(file: string){
  return path.join(__dirname, file)
}
