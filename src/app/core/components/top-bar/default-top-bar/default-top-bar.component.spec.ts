import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultTopBarComponent } from './default-top-bar.component';

describe('DefaultWindowComponent', () => {
  let component: DefaultTopBarComponent;
  let fixture: ComponentFixture<DefaultTopBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefaultTopBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefaultTopBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
