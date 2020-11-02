import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PutovanjePage } from './putovanje.page';

describe('PutovanjePage', () => {
  let component: PutovanjePage;
  let fixture: ComponentFixture<PutovanjePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PutovanjePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PutovanjePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
