import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ZamboangaSPage } from './zamboanga-s.page';

describe('ZamboangaSPage', () => {
  let component: ZamboangaSPage;
  let fixture: ComponentFixture<ZamboangaSPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ZamboangaSPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
