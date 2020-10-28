import { Joints } from './joints';
import { RHand } from './tool';

export type Robot = {
  joints: Joints[];
  tool: RHand[];
};