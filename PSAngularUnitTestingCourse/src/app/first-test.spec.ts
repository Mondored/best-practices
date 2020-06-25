describe('first test', () =>{
    let sut;

    beforeEach(() => {
        // to reset sut each unittest
        sut = {};
    });

    it('should be true if true', () => {
        // arrange
        sut.a = false;

        // act
        sut.a = true;

        // assert
        expect(sut.a).toBe(true);
    })
})