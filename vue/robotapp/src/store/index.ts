import Vue from 'vue'
import Vuex from 'vuex'

import { Robot } from '@/data/robot';
import { RobotHand, ToolMove, Parts } from '@/data/tool';
import { Joints } from '@/data/joints';

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
        gripper1: true,
        gripper2: true,
        gripper3: true,
        gripper4: true,
        gripper5: true,
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
    robot: state => {
      return state.robot;
    },
    tools: state => {
      return state.tools;
    },
    joints: state => {
      return state.joints;
    },
    commands: state => {
      return state.commands;
    },
    commandId: state => {
      return state.commandId;
    },
  },
  mutations: {
    addNewJoint: state => {
      const newJoint = {
        id: state.robot.joints.length,
        axisX: 0,
        axisY: 0,
        axisZ: 0,
      } as Joints;
      state.robot.joints.push(newJoint);
    },
    addToCommandList: (state, payload: Joints) => {
      state.joints.push(payload);
      state.commands.joints.push(payload);
    },
    ADD_GRIPPER_COMMAND: (state, payload: ToolMove ) => {
      state.commands.move.push(payload);
    },
    updateUsedTool: (state, payload) => {
      state.robot.tool.parts.push(JSON.parse(payload));
    },
    removeUsedTool: state => {
      state.robot.tool.parts.splice(0);
    },
    SET_JOINTINDEX: (state, payload: number) => {
      state.robot.joints.splice(payload, 1);
    },
    SET_COMMANDID: state => {
      state.commandId++;
    },
  },
  modules: {}
})
