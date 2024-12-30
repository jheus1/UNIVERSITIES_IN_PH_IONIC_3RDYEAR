import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Page34Page } from './page34.page';

describe('Page34Page', () => {
  let component: Page34Page;
  let fixture: ComponentFixture<Page34Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Page34Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
