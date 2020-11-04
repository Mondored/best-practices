import { Robot } from '@/data/robot';
import { GripperState } from '@/data/tool';
import { CommandType } from './types';

export const initRobot = {
  joints: [
    {
      type: CommandType.Joints,
      id: 0,
      axisX: 10,
      axisY: 10,
      axisZ: 10,
    },{
      type: CommandType.Joints,
      id: 1,
      axisX: 30,
      axisY: 30,
      axisZ: 30,
    },{
      type: CommandType.Joints,
      id: 2,
      axisX: 0,
      axisY: 0,
      axisZ: 0,
    }],
  tool: 0
} as Robot;

export const initTools = [
  {
    name: 'Default_tool',
    parts: [
      GripperState.OPEN,
      GripperState.OPEN,
      GripperState.OPEN,
      GripperState.OPEN,
      GripperState.OPEN,
    ]
  },
  {
    name: 'test',
    parts: [
      GripperState.OPEN,
      GripperState.OPEN,
    ]
  },
];
