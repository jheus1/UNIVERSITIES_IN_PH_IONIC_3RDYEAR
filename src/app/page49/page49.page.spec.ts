import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Page49Page } from './page49.page';

describe('Page49Page', () => {
  let component: Page49Page;
  let fixture: ComponentFixture<Page49Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Page49Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
