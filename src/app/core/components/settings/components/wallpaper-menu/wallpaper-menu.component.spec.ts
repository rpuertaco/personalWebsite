import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WallpaperMenuComponent } from './wallpaper-menu.component';

describe('WallpaperMenuComponent', () => {
  let component: WallpaperMenuComponent;
  let fixture: ComponentFixture<WallpaperMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WallpaperMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WallpaperMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
