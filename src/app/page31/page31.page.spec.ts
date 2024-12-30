import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Page31Page } from './page31.page';

describe('Page31Page', () => {
  let component: Page31Page;
  let fixture: ComponentFixture<Page31Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Page31Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
