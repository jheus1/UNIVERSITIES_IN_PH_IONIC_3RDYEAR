import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SouthernL4Page } from './southern-l4.page';

describe('SouthernL4Page', () => {
  let component: SouthernL4Page;
  let fixture: ComponentFixture<SouthernL4Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SouthernL4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
