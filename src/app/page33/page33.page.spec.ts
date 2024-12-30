import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Page33Page } from './page33.page';

describe('Page33Page', () => {
  let component: Page33Page;
  let fixture: ComponentFixture<Page33Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Page33Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
