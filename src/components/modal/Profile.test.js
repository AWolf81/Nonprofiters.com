import Vue from 'vue'
import {shallow, createLocalVue} from 'vue-test-utils'
import Profile from '@/components/modal/Profile'
import store from '@/store'

const localVue = createLocalVue()

describe('Profile.vue', () => {
  let wrapper

  it('can delete user', () => { // seems like it uses mocha instead of jest --> no test method
    store.state.user.uid = 1
    wrapper = shallow(Profile, {store, localVue})
    wrapper.find("[test='modal/Profile:delete-user']").trigger('click')
    Vue.nextTick(() => (expect(store.state.user.uid).toBeFalsy()))
  })

  it('can close profile modal', () => {
    store.state.user.uid = 1
    wrapper = shallow(Profile, {store, localVue})
    Vue.nextTick(() => {
      console.log(store.state.isProfileModalActive)
      expect(store.state.isProfileModalActive).toBeTruthy()
    })
    wrapper.find("[test='modal/Profile:close-modal']").trigger('click')

    // todo --> need to check if modal is closed!
    // Vue.nextTick(() => {
    //   console.log(store.state.isProfileModalActive)
    //   expect(store.state.isProfileModalActive).toBeFalsy()
    // })
  })
})
