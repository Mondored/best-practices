import { Joints } from './joints';

export type Robot = {
  joints: Joints[];
  tool: number;
};