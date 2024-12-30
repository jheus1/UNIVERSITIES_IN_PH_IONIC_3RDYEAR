import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Page42Page } from './page42.page';

describe('Page42Page', () => {
  let component: Page42Page;
  let fixture: ComponentFixture<Page42Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Page42Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
