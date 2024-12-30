import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Page56Page } from './page56.page';

describe('Page56Page', () => {
  let component: Page56Page;
  let fixture: ComponentFixture<Page56Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Page56Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
