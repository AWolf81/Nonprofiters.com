import {shallow} from 'vue-test-utils'
import App from './App'

describe('App.vue', () => {
  test('can toggle sidebar', () => {
    const wrapper = shallow(App)

    wrapper.find('[test="App.vue:sidebar-toggle"]').trigger('click')
    expect(wrapper.vm.isSidebarActive).toBeTruthy()

    wrapper.find('[test="App.vue:sidebar-overlay"]').trigger('click')
    expect(wrapper.vm.isSidebarActive).toBeFalsy()
  })
})
