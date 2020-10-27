export type Tools = {
  name: string[];
  parts: GripperState[];
};
// export type RobotHand = {}
export type RHand = Tools &{};
export type RobotHand = Tools &{
  name: string[];
  parts: Parts[];
};
//nem kell
export type Parts = {
  gripper1: GripperState;
  gripper2: GripperState;
  gripper3: GripperState;
  gripper4: GripperState;
  gripper5: GripperState;
};

export type ToolMove = {
  name: string;
  movement: GripperState;
  commandId?: number;
};

export enum GripperState {
  OPEN = 'Open', 
  CLOSE = 'Close',
}
