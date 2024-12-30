import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Page38Page } from './page38.page';

describe('Page38Page', () => {
  let component: Page38Page;
  let fixture: ComponentFixture<Page38Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Page38Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
