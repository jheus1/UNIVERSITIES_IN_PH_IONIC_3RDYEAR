import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Page43Page } from './page43.page';

describe('Page43Page', () => {
  let component: Page43Page;
  let fixture: ComponentFixture<Page43Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Page43Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
