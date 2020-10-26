import Vue from 'vue'
import Vuex from 'vuex'

import { Robot } from '@/data/robot';
import { RobotHand, ToolMove, Parts, Move } from '@/data/tool';
import { Joints } from '@/data/joints';
import { GETTERS, ACTIONS, MUTATIONS } from './store.const';
import { storeState } from './types';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    robot: {
      joints:[
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
        parts:[] as Parts[]
      } as RobotHand,
    } as Robot,
    tools: {
      parts: [{
        gripper1: Move.OPEN,
        gripper2: Move.OPEN,
        gripper3: Move.OPEN,
        gripper4: Move.OPEN,
        gripper5: Move.OPEN,
      },] as Parts[]
    } as RobotHand,
    joints: [] as Joints[],
    commands: {
      joints: [] as Joints[],
      move: [] as ToolMove[],
    },
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
    [MUTATIONS.ADD_TO_COMMAND_LIST]: (state: storeState, payload: Joints) => {
      state.joints.push(payload);
      state.commands.joints.push(payload);
    },
    [MUTATIONS.ADD_GRIPPER_COMMAND]: (state: storeState, payload: ToolMove ) => {
      state.commands.move.push(payload);
    },
    [MUTATIONS.UPDATE_USED_TOOL]: (state: storeState, payload) => {
      state.robot.tool.parts.push(JSON.parse(payload));
    },
    [MUTATIONS.REMOVE_USED_TOOL]: (state: storeState) => {
      state.robot.tool.parts.splice(0);
    },
    [MUTATIONS.SET_JOINTINDEX]: (state: storeState, payload: number) => {
      state.robot.joints.splice(payload, 1);
    },
    [MUTATIONS.SET_COMMANDID]: (state: storeState) => {
      state.commandId++;
    },
    [MUTATIONS.RUN_COMMANDS]: (state: storeState) => {
      //todo make separate funtion for joints and tool
      for (let i = 0; i < state.robot.joints.length; i++) {
        state.commands.joints.forEach(element => {
          if (element.id == state.robot.joints[i].id)
          {
            state.robot.joints[i].axisX = element.axisX;
            state.robot.joints[i].axisY = element.axisY;
            state.robot.joints[i].axisZ = element.axisZ;
          }
        });
      }
      state.commands.joints.splice(0);
      
      state.commands.move.forEach(element => {
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
      state.commands.move.splice(0);
    }
  },
  modules: {}
})
