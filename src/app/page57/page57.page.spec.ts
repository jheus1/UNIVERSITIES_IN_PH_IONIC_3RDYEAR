import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Page57Page } from './page57.page';

describe('Page57Page', () => {
  let component: Page57Page;
  let fixture: ComponentFixture<Page57Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Page57Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
