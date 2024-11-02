import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WalpaperMenuComponent } from './walpaper-menu.component';

describe('WalpaperMenuComponent', () => {
  let component: WalpaperMenuComponent;
  let fixture: ComponentFixture<WalpaperMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WalpaperMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WalpaperMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
