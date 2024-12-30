import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Page48Page } from './page48.page';

describe('Page48Page', () => {
  let component: Page48Page;
  let fixture: ComponentFixture<Page48Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Page48Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
