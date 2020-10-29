export enum GETTERS {
  GET_ROBOT = 'getRobot',
  GET_TOOLS = 'getTools',
  GET_JOINTS = 'getJoints',
  GET_COMMAND_TO_RUN = 'getCommandToRun',
}

export const MUTATIONS = {
  ADD_NEW_JOINT: 'addNewJoint',
  ADD_MOVEMENT_TO_COMMAND_LIST: 'addMovementToCommandList',
  ADD_GRIPPER_COMMAND: 'addGripperCommand',
  UPDATE_USED_TOOL: 'updateUsedTool',
  REMOVE_JOINT: 'removeJoint',
  REMOVE_USED_TOOL: 'removeUsedTool',
  RUN_COMMANDS: 'runCommands',
};

export const ACTIONS = {
  ADD_NEW_JOINT: 'addNewJoint',
  ADD_MOVEMENT_TO_COMMAND_LIST: 'addMovementToCommandList',
  ADD_GRIPPER_COMMAND: 'addGripperCommand',
  UPDATE_USED_TOOL: 'updateUsedTool',
  REMOVE_JOINT: 'setJoint',
  REMOVE_USED_TOOL: 'removeUsedTool',
  RUN_COMMANDS: 'runCommands',
};
