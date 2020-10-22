import MoveCommand from '.src/components/MoveCommand.vue';
import { mount } from '@vue/test-utils';

describe('MoveCommand.vue component tests', () => {
  const getters = {
    robot: jest.fn(),
    commandId: jest.fn()
  }

  const mutations = {
    addToCommandList: jest.fn(),
    setCommandID: jest.fn(),
  };

  it('test', () => {

  });
});
