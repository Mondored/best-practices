import Vue from 'vue'
import Vuex, { ActionContext } from 'vuex'

import { GETTERS, ACTIONS, MUTATIONS } from './store.const';
import { storeState } from './types';
import { Joints } from '@/data/joints';
import { initRobot, initTools } from '@/store/init-helper';
import { ToolMove } from '@/data/tool';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    robot: initRobot,
    tools: initTools,
    joints: [] as Joints[],
    commands: [] as Array<Joints|ToolMove>,
  },
  getters: {
    [GETTERS.GET_ROBOT]: (state: storeState) => {
      return state.robot;
    },
    [GETTERS.GET_TOOLS]: (state: storeState) => {
      return state.tools;
    },
    [GETTERS.GET_JOINTS]: (state: storeState) => {
      return state.joints;
    },
    [GETTERS.GET_COMMAND_TO_RUN]: (state: storeState) => {
      return state.commands;
    },
  },
  mutations: {
    [MUTATIONS.ADD_NEW_JOINT]: (state: storeState) => {
      const newJoint = {
        id: state.robot.joints.length,
        axisX: 0,
        axisY: 0,
        axisZ: 0,
      } as Joints;
      state.robot.joints.push(newJoint);
    },
    [MUTATIONS.ADD_MOVEMENT_TO_COMMAND_LIST]: (state: storeState, payload: Joints) => {
      state.joints.push(payload);
      state.commands.push(payload);
    },
    [MUTATIONS.ADD_GRIPPER_COMMAND]: (state: storeState, payload: ToolMove ) => {
      state.commands.push(payload);
    },
    [MUTATIONS.UPDATE_USED_TOOL]: (state: storeState, payload: number) => {
      const value = state.tools[payload];
      state.robot.tool.push(value);
    },
    [MUTATIONS.REMOVE_USED_TOOL]: (state: storeState) => {
      state.robot.tool.splice(0);
    },
    [MUTATIONS.REMOVE_JOINT]: (state: storeState, payload: number) => {
      state.robot.joints.splice(payload, 1);
      let elementId = 0;
      state.robot.joints.forEach(element => {
        element.id = elementId++;
      });
    },
    [MUTATIONS.RUN_COMMANDS]: (state: storeState) => {
      state.robot.joints.forEach(jointItem => {
        state.commands.forEach(element => {
          if ('id' in element) {
             if (state.robot.joints[jointItem.id].id === element.id){
               state.robot.joints[jointItem.id].axisX = element.axisX;
               state.robot.joints[jointItem.id].axisY = element.axisY;
               state.robot.joints[jointItem.id].axisZ = element.axisZ;
             }
          }
          if ('indexId' in element) {
            state.robot.tool[0].parts[element.indexId-1] = element.movement;
            state.tools[0].parts[element.indexId-1] = element.movement;
          }
        })});
      state.commands.splice(0);
    },
  },
  actions: {
    [ACTIONS.ADD_NEW_JOINT]:
     (context: ActionContext<storeState, storeState>) => {
      context.commit(MUTATIONS.ADD_NEW_JOINT);
    },
    [ACTIONS.REMOVE_JOINT]:
     (context: ActionContext<storeState, storeState>, payload: number) => {
      context.commit(MUTATIONS.REMOVE_JOINT, payload);
    },
    [ACTIONS.ADD_MOVEMENT_TO_COMMAND_LIST]:
     (context: ActionContext<storeState, storeState>, payload: Joints) => {
      context.commit(MUTATIONS.ADD_MOVEMENT_TO_COMMAND_LIST, payload);
    },
    [ACTIONS.UPDATE_USED_TOOL]:
     (context: ActionContext<storeState, storeState>, payload: number) => {
      context.commit(MUTATIONS.UPDATE_USED_TOOL, payload);
    },
    [ACTIONS.REMOVE_USED_TOOL]:
    (context: ActionContext<storeState, storeState>) => {
      context.commit(MUTATIONS.REMOVE_USED_TOOL);
    },
    [ACTIONS.ADD_GRIPPER_COMMAND]:
     (context: ActionContext<storeState, storeState>, payload: ToolMove) => {
      context.commit(MUTATIONS.ADD_GRIPPER_COMMAND, payload);      
    },
    [ACTIONS.RUN_COMMANDS]:
     (context: ActionContext<storeState, storeState>) => {
      context.commit(MUTATIONS.RUN_COMMANDS);
    },
  },
  modules: {}
})
