import Vuex, { Store, StoreOptions } from 'vuex';
import { mount } from '@vue/test-utils';
import { createLocalVue } from '@vue/test-utils';
import { ACTIONS, GETTERS } from '@/store/store.const';
import JointsPositionChanger from '@/components/position/JointsPositionChanger.vue';

describe('JointsPositionChanger.vue component tests', () => {
  let store: Store<StoreOptions<any>>;
  const localVue = createLocalVue();
  let actions: any;
  let getters: any;

  beforeAll(()=> {
    localVue.use(Vuex);
  
    getters = {
      [GETTERS.GET_ROBOT]: jest.fn(() => ({
        joints: [{
          id: 0,
          axisX: 10,
          axisY: 10,
          axisZ: 10,
        },{
          id: 1,
          axisX: 30,
          axisY: 30,
          axisZ: 30,
        },{
          id: 2,
          axisX: 0,
          axisY: 0,
          axisZ: 0,
        }],
        tool: {
          name: [],
          parts: []
          }
        })
      ),
      //[GETTERS]: jest.fn().mockReturnValue(0)
    }
  
    actions = {
      [ACTIONS.ADD_MOVEMENT_TO_COMMAND_LIST]: jest.fn(),
    };
        
    store = new Vuex.Store({
      getters, actions
    });
  })

  it('component test', async () => {
    const wrapper = mount(JointsPositionChanger, {
      store, localVue
     });

    const button = wrapper.find('.myButton');

    await button.trigger('click');

    expect(actions.addMovementToCommandList).toHaveBeenCalled();
    expect(actions.addMovementToCommandList).toHaveBeenCalledTimes(1);
  });
});
