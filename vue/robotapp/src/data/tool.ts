export type Tools = {
  parts: Move[]; 
};

export type RobotHand = Tools &{
  parts: Parts[];
};

export type Parts = {
  gripper1: Move;
  gripper2: Move;
  gripper3: Move;
  gripper4: Move;
  gripper5: Move;
};

export type ToolMove = {
  name: string;
  movement: Move;
  commandId?: number;
};

export enum Move {
  OPEN = 'Open', 
  CLOSE = 'Close',
}
