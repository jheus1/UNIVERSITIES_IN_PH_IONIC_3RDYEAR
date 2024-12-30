import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ZamboangaS8Page } from './zamboanga-s8.page';

describe('ZamboangaS8Page', () => {
  let component: ZamboangaS8Page;
  let fixture: ComponentFixture<ZamboangaS8Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ZamboangaS8Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
