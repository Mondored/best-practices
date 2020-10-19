import { Joints } from './joints';
import { Tools } from './tool';

export type Robot = {
  joints: Joints[];
  tool: Tools;
};