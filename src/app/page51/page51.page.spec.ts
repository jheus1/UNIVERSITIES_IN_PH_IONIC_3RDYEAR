import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Page51Page } from './page51.page';

describe('Page51Page', () => {
  let component: Page51Page;
  let fixture: ComponentFixture<Page51Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Page51Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
