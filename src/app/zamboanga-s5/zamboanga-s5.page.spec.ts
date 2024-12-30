import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ZamboangaS5Page } from './zamboanga-s5.page';

describe('ZamboangaS5Page', () => {
  let component: ZamboangaS5Page;
  let fixture: ComponentFixture<ZamboangaS5Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ZamboangaS5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
