import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Page53Page } from './page53.page';

describe('Page53Page', () => {
  let component: Page53Page;
  let fixture: ComponentFixture<Page53Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Page53Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
