import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Page50Page } from './page50.page';

describe('Page50Page', () => {
  let component: Page50Page;
  let fixture: ComponentFixture<Page50Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Page50Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
