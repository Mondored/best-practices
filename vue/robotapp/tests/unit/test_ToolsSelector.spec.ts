import { mount } from '@vue/test-utils';
import { createLocalVue } from '@vue/test-utils';
import Vuex, { Store, StoreOptions } from 'vuex';
import { ACTIONS, GETTERS } from '@/store/store.const';
import { GripperState } from '@/data/tool';
import ToolsSelector from '@/components/position/ToolsSelector.vue';

describe('ToolsSelector.vue component tests', () => {
  let store: Store<StoreOptions<any>>;
  const localVue = createLocalVue();
  let actions: any;
  let getters: any;

  beforeAll(()=> {
    localVue.use(Vuex);
 
    getters = {
      [GETTERS.GET_TOOLS]: jest.fn(() => ({
       tools: [{
            name: 'test',
            parts: [
              GripperState.OPEN,
              GripperState.OPEN,
            ]
          },]
        })
      ),
    }
  
    actions = {
      [ACTIONS.UPDATE_USED_TOOL]: jest.fn(),
      [ACTIONS.REMOVE_USED_TOOL]: jest.fn(),
    };
        
    store = new Vuex.Store({
      getters, actions
    });
  })

  it('component test', async () => {
    const wrapper = mount(ToolsSelector, {
      store, localVue
     });

    /* const button = wrapper.find('.myButton');

    await button.trigger('click');

    expect(actions.addMovementToCommandList).toHaveBeenCalled();
    expect(actions.addMovementToCommandList).toHaveBeenCalledTimes(1); */
  });
});