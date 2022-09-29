import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SpyPage } from './spy.page';

describe('SpyPage', () => {
  let component: SpyPage;
  let fixture: ComponentFixture<SpyPage>;

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

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
