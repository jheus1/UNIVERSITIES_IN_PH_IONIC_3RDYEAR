import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Page41Page } from './page41.page';

describe('Page41Page', () => {
  let component: Page41Page;
  let fixture: ComponentFixture<Page41Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Page41Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
