export type Tools = {
  name: string;
  parts: GripperState[];
};

export type RHand = Tools & {};

export type ToolMove = {
  indexId: number;
  movement: GripperState;
};

export enum GripperState {
  OPEN = 'Open', 
  CLOSE = 'Close',
}
