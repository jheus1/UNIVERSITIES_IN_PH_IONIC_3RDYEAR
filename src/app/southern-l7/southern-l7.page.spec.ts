import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SouthernL7Page } from './southern-l7.page';

describe('SouthernL7Page', () => {
  let component: SouthernL7Page;
  let fixture: ComponentFixture<SouthernL7Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SouthernL7Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
