import { Joints } from '@/data/joints';
import { Robot } from '@/data/robot';
import { RobotHand, ToolMove } from '@/data/tool';

export type storeState = {
  robot: Robot;
  tools: RobotHand;
  joints: Joints[];
  commands: {
    joints: Joints[];
    toolMovement: ToolMove[];
  };
  commandId: number;
};
