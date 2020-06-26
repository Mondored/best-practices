import { TestBed, ComponentFixture } from "@angular/core/testing";
import { HeroesComponent } from "./heroes.component";
import { HeroService } from "../hero.service";
import { NO_ERRORS_SCHEMA, Component, Input } from "@angular/core";
import { of } from "rxjs";
import { Hero } from "../hero";
import { By } from "@angular/platform-browser";

describe('HeroesComponent (shallow tests)', () => {
    let fixture: ComponentFixture<HeroesComponent>;
    let mockHeroService;
    let HEROES;
    
    @Component({
        selector: 'app-hero',
        template: '<div></div>'
    })
    class FakeHeroComponent {
        @Input() hero: Hero;
        //@Output() delete = new EventEmitter();
    }

    beforeEach(() => {
        mockHeroService = jasmine.createSpyObj(['getHeroes', 'addHero', 'deleteHero']);

        HEROES =[
            { id:1, name: 'Spiderman', strength: 8},
            { id:2, name: 'Wonder Woman', strength: 34},
            { id:3, name: 'Superman', strength: 50}
        ];
        TestBed.configureTestingModule({
            declarations: [
                HeroesComponent,
                FakeHeroComponent
            ],
            providers: [
                { provide: HeroService, useValue: mockHeroService }
            ],
            //schemas: [NO_ERRORS_SCHEMA]
        });
        fixture = TestBed.createComponent(HeroesComponent);
    });

    it('should set heroes correctly from the service', () => {
        mockHeroService.getHeroes.and.returnValue(of(HEROES));

        fixture.detectChanges();

        expect(fixture.componentInstance.heroes.length).toBe(3);
    });

    it('should create one li for each hero', () => {
        mockHeroService.getHeroes.and.returnValue(of(HEROES));
        fixture.detectChanges();

        expect(fixture.debugElement.queryAll(By.css('li')).length).toBe(3);
    });
});
