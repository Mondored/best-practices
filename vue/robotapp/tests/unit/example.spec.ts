import { shallowMount } from '@vue/test-utils'
import Robotsetup from '@/components/Robotsetup.vue'

describe('Robotsetup.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'Current tool   Move command  Robot finger open/close command'
    const wrapper = shallowMount(Robotsetup, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
