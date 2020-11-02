import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PutovanjaPage } from './putovanja.page';

describe('PutovanjaPage', () => {
  let component: PutovanjaPage;
  let fixture: ComponentFixture<PutovanjaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PutovanjaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PutovanjaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
