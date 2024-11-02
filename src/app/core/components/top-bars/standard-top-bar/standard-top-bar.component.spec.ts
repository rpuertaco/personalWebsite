import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardTopBarComponent } from './standard-top-bar.component';

describe('StandardTopBarComponent', () => {
  let component: StandardTopBarComponent;
  let fixture: ComponentFixture<StandardTopBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StandardTopBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StandardTopBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
