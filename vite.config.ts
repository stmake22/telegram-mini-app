import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc';
// import basicSsl from '@vitejs/plugin-basic-ssl';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vite.dev/config/
export default defineConfig({
  // plugins: [react(), basicSsl(), tsconfigPaths()],
  plugins: [react(), tsconfigPaths()],
  build: {
    outDir: './docs'
  },
  base: './',
  server: {
    // https: undefined,
    // https: {
    //   key: fs.readFileSync(path.resolve(__dirname, 'path-to-key.key')),
    //   cert: fs.readFileSync(path.resolve(__dirname, 'path-to-cert.crt'))
    // },
    port: 3000
  }
})
