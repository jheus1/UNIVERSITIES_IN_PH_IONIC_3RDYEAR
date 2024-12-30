import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ZamboangaS2Page } from './zamboanga-s2.page';

describe('ZamboangaS2Page', () => {
  let component: ZamboangaS2Page;
  let fixture: ComponentFixture<ZamboangaS2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ZamboangaS2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
