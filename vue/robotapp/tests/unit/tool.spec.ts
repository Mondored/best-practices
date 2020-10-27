import { Parts } from "@/data/tool";

describe('tool.ts test', () =>{
  it('set data structure', () => {
    const test = {
      parts: [{
        gripper1: 'Open',
        gripper2: 'Open',
        gripper3: 'Open',
        gripper4: 'Open',
        gripper5: 'Open'
      },] as Parts[],
    };
    const expected = "{\"parts\":[{\"gripper1\":\"Open\",\"gripper2\":\"Open\",\"gripper3\":\"Open\",\"gripper4\":\"Open\",\"gripper5\":\"Open\"}]}";

    //probably makes no sense
    expect(JSON.stringify(test)).toEqual(expected);
    expect(test.parts[0].gripper1).toBe("Open");
  });
});
