import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'
import { NodeModulesPolyfillPlugin } from '@esbuild-plugins/node-modules-polyfill'

import { dependencies } from './package.json'

const groups = Object.entries({
  mui: /^(@mui|@emotion)/,
  react: /^react/,
  utils: /^(date-fns|@emotion|lodash|axios|events|google-protobuf)/,
  vendor: /./,
})

const depChunks = Object.keys(dependencies)
  .reduce(
    (acc, dependency) => {
      const [group = dependency] = groups.find(([name, pattern]) =>  dependency.match(pattern)) || [] as any
      return {
        ...acc,
        [group]: [dependency, ...acc[group] || []],
      }
    },
    {}
  )

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      util: 'rollup-plugin-node-polyfills/polyfills/util',
      events: 'rollup-plugin-node-polyfills/polyfills/events',
      path: 'rollup-plugin-node-polyfills/polyfills/path',
      buffer: 'rollup-plugin-node-polyfills/polyfills/buffer-es6',
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      // Node.js global to browser globalThis
      define: {
        global: 'globalThis'
      },
      // Enable esbuild polyfill plugins
      plugins: [
        NodeModulesPolyfillPlugin()
      ]
    }
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          ...depChunks,
        },
      },
      input: [
        resolve(__dirname, 'src/configEnv.ts'),
        resolve(__dirname, 'src/main.tsx'),
        resolve(__dirname, 'index.html'),
      ],
      plugins: []
    }
  },
  server: {
    host: '0.0.0.0',
    port: 3004,
  },
})
