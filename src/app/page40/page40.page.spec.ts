import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Page40Page } from './page40.page';

describe('Page40Page', () => {
  let component: Page40Page;
  let fixture: ComponentFixture<Page40Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Page40Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
