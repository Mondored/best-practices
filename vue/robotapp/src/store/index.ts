import Vue from 'vue'
import Vuex, { ActionContext } from 'vuex'

import { GETTERS, ACTIONS, MUTATIONS } from './store.const';
import { storeState } from './types';
import { Robot } from '@/data/robot';
import { Joints } from '@/data/joints';
import { RobotHand, ToolMove, Parts, GripperState } from '@/data/tool';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    robot: {
      joints: [
        {
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
        }] as Joints[],
      tool: {
        name: [] as string[],
        parts: [] as Parts[]
      } as RobotHand,
    } as Robot,
    tools: {
      name: ['Default_tool'],
      parts: [{
        gripper1: GripperState.OPEN,
        gripper2: GripperState.OPEN,
        gripper3: GripperState.OPEN,
        gripper4: GripperState.OPEN,
        gripper5: GripperState.OPEN,
      },] as Parts[]
    } as RobotHand,
    joints: [] as Joints[],
    commands: {
      joints: [] as Joints[],
      toolMovement: [] as ToolMove[],
    },
    genericCommand: [] as (Joints[] | ToolMove[]),
    commandId: 0,
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
    [GETTERS.GET_COMMANDID]: (state: storeState) => {
      return state.commandId;
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
      state.commands.joints.push(payload);
    },
    [MUTATIONS.ADD_GRIPPER_COMMAND]: (state: storeState, payload: ToolMove ) => {
      state.commands.toolMovement.push(payload);
    },
    [MUTATIONS.UPDATE_USED_TOOL]: (state: storeState, payload: number) => {
      const value = state.tools.parts[payload];
      state.robot.tool.parts.push(value);
    },
    [MUTATIONS.REMOVE_USED_TOOL]: (state: storeState) => {
      state.robot.tool.parts.splice(0);
    },
    [MUTATIONS.REMOVE_JOINT]: (state: storeState, payload: number) => {
      state.robot.joints.splice(payload, 1);
    },
    [MUTATIONS.SET_COMMANDID]: (state: storeState) => {
      state.commandId++;
    },
    [MUTATIONS.RUN_COMMANDS]: (state: storeState) => {
      state.robot.joints.forEach(item => {
        state.commands.joints.forEach(element => {
          if (element.id == state.robot.joints[item.id].id)
          {
            state.robot.joints[item.id].axisX = element.axisX;
            state.robot.joints[item.id].axisY = element.axisY;
            state.robot.joints[item.id].axisZ = element.axisZ;
          }
        });
      });
      state.commands.joints.splice(0);
      
      state.commands.toolMovement.forEach(element => {
        if (element.name === "gripper1")
        {
          state.robot.tool.parts[0].gripper1 = element.movement;
          state.tools.parts[0].gripper1 = element.movement;
        }
        if (element.name === "gripper2")
        {
          state.robot.tool.parts[0].gripper2 = element.movement;
          state.tools.parts[0].gripper2 = element.movement;
        }
        if (element.name === "gripper3")
        {
          state.robot.tool.parts[0].gripper3 = element.movement;
          state.tools.parts[0].gripper3 = element.movement;
        }
        if (element.name === "gripper4")
        {
          state.robot.tool.parts[0].gripper4 = element.movement;
          state.tools.parts[0].gripper4 = element.movement;
        }
        if (element.name === "gripper5")
        {
          state.robot.tool.parts[0].gripper5 = element.movement;
          state.tools.parts[0].gripper5 = element.movement;
        }
      });
      state.commands.toolMovement.splice(0);
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
    [ACTIONS.SET_COMMANDID]:
     (context: ActionContext<storeState, storeState>) => {
      context.commit(MUTATIONS.SET_COMMANDID);
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
    [ACTIONS.SET_COMMANDID]:
     (context: ActionContext<storeState, storeState>) => {
      context.commit(MUTATIONS.SET_COMMANDID);
    },
    [ACTIONS.RUN_COMMANDS]:
     (context: ActionContext<storeState, storeState>) => {
      context.commit(MUTATIONS.RUN_COMMANDS);
    },
  },
  modules: {}
})
