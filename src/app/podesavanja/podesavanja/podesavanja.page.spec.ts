import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PodesavanjaPage } from './podesavanja.page';

describe('PodesavanjaPage', () => {
  let component: PodesavanjaPage;
  let fixture: ComponentFixture<PodesavanjaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PodesavanjaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PodesavanjaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
