import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Page39Page } from './page39.page';

describe('Page39Page', () => {
  let component: Page39Page;
  let fixture: ComponentFixture<Page39Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Page39Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
