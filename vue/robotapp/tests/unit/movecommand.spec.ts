import { mount } from '@vue/test-utils';
import { createLocalVue } from '@vue/test-utils';
import MoveCommand from '@/components/MoveCommand.vue';
import Vuex from 'vuex';

describe('MoveCommand.vue component tests', () => {
  const localVue = createLocalVue();
  localVue.use(Vuex);

  const getters = {
    robot: jest.fn(() => ({
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
        parts:[]
        }
      })
    ),
    commandId: jest.fn()
  }
  
  const mutations = {
    addToCommandList: jest.fn(),
    SET_COMMANDID: jest.fn(),
  };
      
  let store = new Vuex.Store({
    getters, mutations
  });

  it('component test', async () => {
    const wrapper = mount(MoveCommand, {
      store, localVue
     });

    const button = wrapper.find('.myButton');

    await button.trigger('click');

    expect(mutations.addToCommandList).toHaveBeenCalled();
  });
});
