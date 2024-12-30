import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Page37Page } from './page37.page';

describe('Page37Page', () => {
  let component: Page37Page;
  let fixture: ComponentFixture<Page37Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Page37Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
