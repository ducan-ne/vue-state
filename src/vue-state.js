// @flow
import Vue from 'vue'
import './create-mixin'

const _Vue = Vue.extend({})

type Options = {}

class State extends _Vue {
  constructor(opts) {
    super({
      data: opts.state,
      methods: opts.methods || {},
      computed: opts.computed,
      ...opts
    })
  }
}

export function createState(opts) {
  return new State(opts)
}

export default State
