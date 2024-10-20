import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicTopBarComponent } from './basic-top-bar.component';

describe('BasicTopBarComponent', () => {
  let component: BasicTopBarComponent;
  let fixture: ComponentFixture<BasicTopBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicTopBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicTopBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
