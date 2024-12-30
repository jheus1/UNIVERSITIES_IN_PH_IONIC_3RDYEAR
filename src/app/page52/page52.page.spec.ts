import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Page52Page } from './page52.page';

describe('Page52Page', () => {
  let component: Page52Page;
  let fixture: ComponentFixture<Page52Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Page52Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
