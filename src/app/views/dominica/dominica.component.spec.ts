import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DominicaComponent } from './dominica.component';

describe('DominicaComponent', () => {
  let component: DominicaComponent;
  let fixture: ComponentFixture<DominicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DominicaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DominicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
