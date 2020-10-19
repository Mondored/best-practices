import { shallowMount } from '@vue/test-utils';
import Robotsetup from '@/components/Robotsetup.vue';
describe('Robotsetup.vue', function () {
    it('renders props.msg when passed', function () {
        var msg = 'new message';
        var wrapper = shallowMount(Robotsetup, {
            propsData: { msg: msg }
        });
        expect(wrapper.text()).toMatch(msg);
    });
});
//# sourceMappingURL=example.spec.js.map