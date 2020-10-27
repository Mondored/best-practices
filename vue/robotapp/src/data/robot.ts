import { Joints } from './joints';
import { RobotHand } from './tool';

export type Robot = {
  joints: Joints[];
  tool: RobotHand;
};