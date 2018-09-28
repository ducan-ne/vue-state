// import path from 'path'

import babel from 'rollup-plugin-babel'
import { uglify } from 'rollup-plugin-uglify'

// const resolve = p => path.resolve(__dirname, p)
const commonPlugin = [
  babel({
    exclude: 'node_modules/**'
  })
]
export default [
  {
    input: 'src/vue-state.js',
    output: {
      file: 'dist/vue-state.js',
      format: 'umd',
      name: 'VueState',
      exports: 'named',
      globals: {
        vue: 'Vue'
        // vs: 'VueState'
      }
    },
    external: ['vue'],
    plugins: [...commonPlugin]
  },
  {
    input: 'src/vue-state.js',
    output: {
      file: 'dist/vue-state.min.js',
      format: 'umd',
      name: 'VueState',
      exports: 'named',
      globals: {
        vue: 'Vue'
        // vs: 'VueState'
      }
    },
    external: ['vue'],
    plugins: [
      ...commonPlugin,
      uglify({
        output: {
          quote_style: 3,
          comments: function(node, comment) {
            if (comment.type === 'comment2') {
              return /\(c\)/i.test(comment.value)
            }
            return false
          }
        }
      })
    ]
  }
]
