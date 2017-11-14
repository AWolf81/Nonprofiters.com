import Vue from 'vue'
import {shallow, createLocalVue, mount} from 'vue-test-utils'

import App from '@/App'
import LoginModal from './Login'

import store from '@/store'

const localVue = createLocalVue()
const renderer = require('vue-server-renderer').createRenderer()

describe('Login/Logout', () => {
  store.state.user.uid = 1
  let wrapper = shallow(App, {store, localVue})

  it('has same HTML structure', () => { // snapshot test
    wrapper = shallow(LoginModal, {store, localVue})
    renderer.renderToString(wrapper.vm, (err, str) => {
      expect(str).toMatchSnapshot()
      console.log(err)
    })
  })

  it('can login', () => { // changed 'test' to 'it'!
    expect(wrapper.contains("[test='App.vue:logout']")).toBeTruthy()
  })

  it('can logout', () => {
    wrapper.find("[test='App.vue:logout']").trigger('click')
    Vue.nextTick(() => (expect(store.state.user.uid).toBeFalsy()))
  })

  it('can close login modal', () => { // not working yet<<<<<<<<<<<<<<<<
    store.state.user.uid = 1
    // const Constructor = Vue.extend(LoginModal, {store, localVue})
    // const vm = new Constructor().$mount()
    // vm.$el.querySelector("[test='modal/Login:close-modal']").triggerClick()

    wrapper = mount(App, {store, localVue})
    wrapper.find("[test='modal/Login:close-modal']").trigger('click')
    Vue.nextTick(() => (expect(store.state.isLoginModalActive).toBeFalsy()))
  })
})
