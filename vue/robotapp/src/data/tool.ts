export type Tools = {
  name: string;
  parts: GripperState[];
};

export type RHand = Tools & {};

export type ToolMove = {
  type: string;
  indexId: number;
  movement: GripperState;
};

export enum GripperState {
  OPEN = 'Open', 
  CLOSE = 'Close',
}
