export type Tools = {
  parts: boolean[]; 
};

export type RobotHand = Tools &{
  parts: Parts[];
};

export type Parts = {
  gripper1: boolean;
  gripper2: boolean;
  gripper3: boolean;
  gripper4: boolean;
  gripper5: boolean;
};

export type ToolMove = {
  name: string;
  movement: Move;
};

export enum Move {
  OPEN = 'Open', 
  CLOSE = 'Close',
}
