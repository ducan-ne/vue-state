// @flow
import Vue from 'vue'

export default Vue.mixin({
  beforeCreate() {
    let state: any = this.$options.state
    Object.assign(this, { state }) // this.state
  }
})
