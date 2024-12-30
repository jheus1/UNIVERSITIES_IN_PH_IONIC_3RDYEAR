import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Page55Page } from './page55.page';

describe('Page55Page', () => {
  let component: Page55Page;
  let fixture: ComponentFixture<Page55Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Page55Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
