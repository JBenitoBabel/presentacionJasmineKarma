import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Cat } from './lifecycle.page';

fdescribe('LifecyclePage', () => {
  let component: Cat;
  let fixture: ComponentFixture<Cat>;

  const zan = new Cat();

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Cat ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Cat);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  beforeAll( () => {
    // console.log('beforeAll'); 
  });
  beforeEach( () => {
    // console.log('beforeEach'); 
    zan.food = 200;
  });
  afterAll( () => {
    // console.log('afterAll'); 
  });
  afterEach( () => {
    // console.log('afterEach'); 
  });

  it('the cat eats 20g and there are 180g left', () => {
    const amount = 20;
    const result = zan.eat(amount);
    expect(result).toBe(180);
  });

  it('the cat eats 50g and there are 150 left', () => {
    const amount = 50;
    const result = zan.eat(amount);
    expect(result).toBe(150);
  });

});
