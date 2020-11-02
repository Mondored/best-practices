import { GripperState } from "@/data/tool";

describe('tool.ts test', () =>{
  it('test data structure Tool', () => {
    const testData = {
      name: 'Default',
      parts: [ GripperState.OPEN , GripperState.OPEN, GripperState.OPEN ]
    };
    const expected = "{\"name\":\"Default\",\"parts\":[\"Open\",\"Open\",\"Open\"]}";

    expect(JSON.stringify(testData)).toEqual(expected);
    expect(testData.parts[0]).toBe("Open");
  });

  it('test data structure ToolMove', () => {
    const testData = {
      indexId: 1,
      movement: GripperState.OPEN
    };
    const expected = "{\"indexId\":1,\"movement\":\"Open\"}";

    expect(JSON.stringify(testData)).toEqual(expected);
    expect(testData.indexId).toBe(1);
    expect(testData.movement).toBe(GripperState.OPEN);
  });
});
