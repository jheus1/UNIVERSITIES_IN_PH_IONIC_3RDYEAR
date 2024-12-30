import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ZamboangaS1Page } from './zamboanga-s1.page';

describe('ZamboangaS1Page', () => {
  let component: ZamboangaS1Page;
  let fixture: ComponentFixture<ZamboangaS1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ZamboangaS1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
