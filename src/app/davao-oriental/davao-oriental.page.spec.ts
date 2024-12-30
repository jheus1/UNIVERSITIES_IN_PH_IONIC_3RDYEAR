import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DavaoOrientalPage } from './davao-oriental.page';

describe('DavaoOrientalPage', () => {
  let component: DavaoOrientalPage;
  let fixture: ComponentFixture<DavaoOrientalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DavaoOrientalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
