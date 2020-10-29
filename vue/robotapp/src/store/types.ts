import { Joints } from '@/data/joints';
import { Robot } from '@/data/robot';
import { ToolMove, Tools } from '@/data/tool';

export type storeState = {
  robot: Robot;
  tools: Tools[];
  joints: Joints[];
  commands: Array<Joints|ToolMove>;
};
