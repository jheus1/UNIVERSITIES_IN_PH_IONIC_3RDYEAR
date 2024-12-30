import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ZamboangaS4Page } from './zamboanga-s4.page';

describe('ZamboangaS4Page', () => {
  let component: ZamboangaS4Page;
  let fixture: ComponentFixture<ZamboangaS4Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ZamboangaS4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
