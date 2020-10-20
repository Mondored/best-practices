import { Joints } from './joints';
import { Tools, RobotHand } from './tool';

export type Robot = {
  joints: Joints[];
  tool: RobotHand;
};