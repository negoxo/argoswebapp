import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaintMaarteenComponent } from './saint-maarteen.component';

describe('SaintMaarteenComponent', () => {
  let component: SaintMaarteenComponent;
  let fixture: ComponentFixture<SaintMaarteenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaintMaarteenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaintMaarteenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
