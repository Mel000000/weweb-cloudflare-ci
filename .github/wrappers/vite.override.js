import { defineConfig, mergeConfig } from 'vite'
import baseConfig from './vite.config.js'

export default defineConfig((env) => {
  const resolvedBase =
    typeof baseConfig === 'function'
      ? baseConfig(env)
      : baseConfig

  return mergeConfig(resolvedBase, {
    define: {
      global: {},
      'process.env': {}
    },

    resolve: {
      alias: {
        buffer: 'buffer'
      }
    },

    optimizeDeps: {
      include: ['buffer', 'process']
    }
  })
})