import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaintThomasComponent } from './saint-thomas.component';

describe('SaintThomasComponent', () => {
  let component: SaintThomasComponent;
  let fixture: ComponentFixture<SaintThomasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaintThomasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaintThomasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
