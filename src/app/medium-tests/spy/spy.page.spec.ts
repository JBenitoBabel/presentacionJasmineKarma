import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { from, throwError } from 'rxjs';
import { GlobalService } from 'src/app/services/global.service';

import { SpyPage } from './spy.page';

describe('SpyPage', () => {
  let component: SpyPage;
  let fixture: ComponentFixture<SpyPage>;

  //const service = new GlobalService(null);
  //const service = fixture.debugElement.injector.get(GlobalService);
  let service: GlobalService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SpyPage ],
      imports: [
        IonicModule.forRoot(),
        HttpClientTestingModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(SpyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  beforeEach(() => {
    //component = new SpyPage(service); //constructor
    service = fixture.debugElement.injector.get(GlobalService);
  });
  
  xit('Init get cats', () => {
    component.ngOnInit();
    expect(component.cats.length).toBeGreaterThan(0); //fail
  });

  it('Init get cats', () => {
    const cats = ['zan', 'norte'];
    spyOn(service, 'get').and.callFake(() => {
      return from([cats]);
    })
    component.ngOnInit();
    expect(component.cats.length).toBeGreaterThan(0);
  });

  it('addCats call service', () => {
    const spyGetCats = spyOn(service, 'post').and.callFake(cat => {
      return from([null]);
    })
    component.addCats();
    expect(spyGetCats).toHaveBeenCalled();
  });

  it('addCats returns a value and adds it to array', () => {
    const cat = {id: 1, name: 'Zan'}
    spyOn(service, 'post').and.returnValue(from([cat]));

    component.addCats();
    expect(component.cats.indexOf(cat)).toBeGreaterThanOrEqual(0);
  });

  it('if addCats fails the error message should be the same as the server', () => {
    const error = 'No se pudo añadir el gato';
    spyOn(service, 'post').and.returnValue(throwError(error));
    component.addCats();
    expect(component.messageError).toBe(error);
  });

  xit('deleteCat must call the server to remove a cat', () => {
    const spy = spyOn(service, 'delete').and.returnValue(from([null]));
    component.deleteCat('1');
    expect(spy).toHaveBeenCalledWith('1', 'cats'); // obliga a intervenir al usuario
  });

  it('deleteCat must call the server to remove a cat', () => {
    spyOn(window, 'confirm').and.returnValue(true);
    const spy = spyOn(service, 'delete').and.returnValue(from([null]));
    component.deleteCat('1');
    expect(spy).toHaveBeenCalledWith('1', 'cats');
  });

  it('deleteCat NOT must call the server to remove a cat', () => {
    spyOn(window, 'confirm').and.returnValue(false);
    const spy = spyOn(service, 'delete').and.returnValue(from([null]));
    component.deleteCat('1');
    expect(spy).not.toHaveBeenCalledWith('1', 'cats');
  });

});
