import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PrivatePage } from './private.page';

describe('PrivatePage', () => {
  let component: PrivatePage;
  let fixture: ComponentFixture<PrivatePage>;

  const cats = [
    'Zan',
    'Norte'
  ]

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivatePage ],
      imports: [
        IonicModule.forRoot(),
        HttpClientTestingModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(PrivatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('checkCats works correctly', () =>  {
    component.cats = cats;
    component.checkCats();
    expect(component.cats.length).toBe(0);
  });

  it('checkCats call to throwCats', () =>  {
    const spy = spyOn((component) as any, 'throwCats');
    component.cats = cats;
    component.checkCats();
    expect(spy).toHaveBeenCalled();
  })

});
