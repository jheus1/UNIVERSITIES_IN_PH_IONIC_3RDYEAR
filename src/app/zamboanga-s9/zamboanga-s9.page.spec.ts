import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ZamboangaS9Page } from './zamboanga-s9.page';

describe('ZamboangaS9Page', () => {
  let component: ZamboangaS9Page;
  let fixture: ComponentFixture<ZamboangaS9Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ZamboangaS9Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
