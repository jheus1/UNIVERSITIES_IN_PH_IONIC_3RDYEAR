import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Page35Page } from './page35.page';

describe('Page35Page', () => {
  let component: Page35Page;
  let fixture: ComponentFixture<Page35Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Page35Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
