import { HeroesComponent } from "./heroes.component";
import { of } from "rxjs";

describe('HeroesComponent test', () => {
    let component: HeroesComponent;
    let HEROES;
    let mockHeroService;

    beforeEach(() => {
        HEROES =[
            { id:1, name: 'Spiderman', strength: 8},
            { id:2, name: 'Wonder Woman', strength: 34},
            { id:3, name: 'Superman', strength: 50}
        ];

        mockHeroService = jasmine.createSpyObj(['getHeroes', 'addHero', 'deleteHero']);

        component = new HeroesComponent(mockHeroService);
    });

    describe('delete', () => {

        it('should remove the indicated hero from the heroes list', () => {
            mockHeroService.deleteHero.and.returnValue(of(true));
            component.heroes = HEROES;

            component.delete(HEROES[2]);

            expect(component.heroes.length).toBe(2);
        });

        it('should call deleteHero with the correct value', () => {
            mockHeroService.deleteHero.and.returnValue(of(true));
            component.heroes = HEROES;

            component.delete(HEROES[2]);

            expect(mockHeroService.deleteHero).toHaveBeenCalledWith(HEROES[2]);
        });
    });
});