import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Page54Page } from './page54.page';

describe('Page54Page', () => {
  let component: Page54Page;
  let fixture: ComponentFixture<Page54Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Page54Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
