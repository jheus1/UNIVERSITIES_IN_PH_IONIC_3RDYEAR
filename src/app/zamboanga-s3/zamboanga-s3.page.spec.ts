import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ZamboangaS3Page } from './zamboanga-s3.page';

describe('ZamboangaS3Page', () => {
  let component: ZamboangaS3Page;
  let fixture: ComponentFixture<ZamboangaS3Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ZamboangaS3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
