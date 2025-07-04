import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickAccessBarComponent } from './quick-access-bar.component';

describe('QuickAccessBarComponent', () => {
  let component: QuickAccessBarComponent;
  let fixture: ComponentFixture<QuickAccessBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuickAccessBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuickAccessBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
