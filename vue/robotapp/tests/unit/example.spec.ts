import { shallowMount } from '@vue/test-utils'
import Robotsetup from '@/components/Robotsetup.vue'

describe('Robotsetup.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(Robotsetup, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
