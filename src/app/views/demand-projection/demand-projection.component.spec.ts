import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandProjectionComponent } from './demand-projection.component';

describe('DemandProjectionComponent', () => {
  let component: DemandProjectionComponent;
  let fixture: ComponentFixture<DemandProjectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemandProjectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemandProjectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
