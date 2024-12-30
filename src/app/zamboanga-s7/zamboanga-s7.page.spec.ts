import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ZamboangaS7Page } from './zamboanga-s7.page';

describe('ZamboangaS7Page', () => {
  let component: ZamboangaS7Page;
  let fixture: ComponentFixture<ZamboangaS7Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ZamboangaS7Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
