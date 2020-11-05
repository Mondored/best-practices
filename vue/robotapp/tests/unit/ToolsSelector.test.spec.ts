import { mount, shallowMount } from '@vue/test-utils';
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
    const wrapper = shallowMount(ToolsSelector, {
      store, localVue
    });
    wrapper.setData({ selectedId: 0 });

    const selector = wrapper.find('select').findAll('option');
    selector.at(1).setSelected();
    
    expect(wrapper.vm.$data.selectedToolName).toBe('');    
  });
});
