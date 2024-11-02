import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppareanceComponent } from './appareance.component';

describe('AppareanceComponent', () => {
  let component: AppareanceComponent;
  let fixture: ComponentFixture<AppareanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppareanceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppareanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
