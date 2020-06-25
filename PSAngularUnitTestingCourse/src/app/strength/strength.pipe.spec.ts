import { StrengthPipe } from './strength.pipe';

describe('StrenghtPipe test', () => {
    const pipe = new StrengthPipe();

    it('Should display weak if strength is 5', () => {
        // Arrange
        // let pipe = new StrengthPipe();

        // Act
        const val = pipe.transform(5);

        // Assert
        expect(val).toEqual('5 (weak)');
    });

    it('Should display strong if strength is between 10 and 20 ', () => {
        // let pipe = new StrengthPipe();

        expect(pipe.transform(11)).toEqual('11 (strong)');
    });


});
