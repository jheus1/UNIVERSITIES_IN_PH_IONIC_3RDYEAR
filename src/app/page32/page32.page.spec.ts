import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Page32Page } from './page32.page';

describe('Page32Page', () => {
  let component: Page32Page;
  let fixture: ComponentFixture<Page32Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Page32Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
