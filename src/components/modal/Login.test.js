import {shallow, createLocalVue} from 'vue-test-utils'
import App from '@/App'
import store from '@/store'

const localVue = createLocalVue()

describe('Login/Logout', () => {
  let wrapper

  test('can login', () => {
    store.state.user.uid = 1
    wrapper = shallow(App, {store, localVue})
    expect(wrapper.contains("[test='App.vue:logout']")).toBeTruthy()
  })

  test('can logout', () => {
    store.state.user = {}
    wrapper = shallow(App, {store, localVue})
    expect(wrapper.contains("[test='App.vue:logout']")).toBeFalsy()
  })
})
