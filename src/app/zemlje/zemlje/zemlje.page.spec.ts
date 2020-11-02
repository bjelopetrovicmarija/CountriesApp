import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ZemljePage } from './zemlje.page';

describe('ZemljePage', () => {
  let component: ZemljePage;
  let fixture: ComponentFixture<ZemljePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZemljePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ZemljePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
