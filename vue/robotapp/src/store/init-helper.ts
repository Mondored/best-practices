import { Robot } from '@/data/robot';
import { GripperState } from '@/data/tool';

export const initRobot = {
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
    }],
  tool:[]
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
