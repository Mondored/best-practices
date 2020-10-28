export type Tools = {
  name: string;
  parts: GripperState[];
};

export type RHand = Tools & {};

export type ToolMove = {
  name: number;
  movement: GripperState;
  commandId?: number;
};

export enum GripperState {
  OPEN = 'Open', 
  CLOSE = 'Close',
}
