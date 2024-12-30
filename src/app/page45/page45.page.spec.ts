import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Page45Page } from './page45.page';

describe('Page45Page', () => {
  let component: Page45Page;
  let fixture: ComponentFixture<Page45Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Page45Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
