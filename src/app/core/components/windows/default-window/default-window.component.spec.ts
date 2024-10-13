import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultWindowComponent } from './default-window.component';

describe('DefaultWindowComponent', () => {
  let component: DefaultWindowComponent;
  let fixture: ComponentFixture<DefaultWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefaultWindowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefaultWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
