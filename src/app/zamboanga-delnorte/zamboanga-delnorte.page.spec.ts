import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ZamboangaDelnortePage } from './zamboanga-delnorte.page';

describe('ZamboangaDelnortePage', () => {
  let component: ZamboangaDelnortePage;
  let fixture: ComponentFixture<ZamboangaDelnortePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ZamboangaDelnortePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
