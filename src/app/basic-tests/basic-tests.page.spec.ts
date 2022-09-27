import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BasicTestsPage } from './basic-tests.page';

describe('BasicTestsPage', () => {
  let component: BasicTestsPage;
  let fixture: ComponentFixture<BasicTestsPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicTestsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BasicTestsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  describe('Test string', () => {

    it('return string', () => {
      const result = component.getName('Norte');
      expect(typeof result).toBe('string');
    });

    it('return phrase with name', () => {
      const name = 'Norte';
      const result = component.getName(name);
      expect(result).toContain(name);
    });

  });

  describe('Test numbers', () => {

    it('return number', () => {
      const result = component.addOne(1);
      expect(typeof result).toBe('number');
    });

    it('return number greater', () => {
      const number = 1;
      const result = component.addOne(number);
      expect(result).toBeGreaterThan(number);
      expect(result).toEqual(number + 1);
    });

  });

  describe('Test boolean', () => {

    it('return true', () => {
      const result = component.existCat();
      expect(result).toBeTruthy();
      expect(result).not.toBeFalsy(); //añadiendo condicion
    });

  });

  describe('Test arrays', () => {

    it('return two cats', () => {
      const result = component.getCats();
      expect(result.length).toBeGreaterThanOrEqual(2);
    });

    it('exist Zan', () => {
      const result = component.getCats();
      expect(result).toContain('Zan');
    });

  });
});
