import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ZamboangaDelsurPage } from './zamboanga-delsur.page';

describe('ZamboangaDelsurPage', () => {
  let component: ZamboangaDelsurPage;
  let fixture: ComponentFixture<ZamboangaDelsurPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ZamboangaDelsurPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
