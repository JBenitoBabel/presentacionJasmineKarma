import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Feeder } from './event-emitter.page';

describe('Feeder', () => {
  let component: Feeder;
  let fixture: ComponentFixture<Feeder>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Feeder ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Feeder);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  beforeEach(() => component = new Feeder() );

  it('emit event when zan eat', () => {
    let newFood  = 0;

    component.foodChange.subscribe(food => {
      newFood = food;
    });

    component.eat(50);

    expect(newFood).toBe(150);

  })
  
});
