import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AntiguaComponent } from './antigua.component';

describe('AntiguaComponent', () => {
  let component: AntiguaComponent;
  let fixture: ComponentFixture<AntiguaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AntiguaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AntiguaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
