import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SouthernL8Page } from './southern-l8.page';

describe('SouthernL8Page', () => {
  let component: SouthernL8Page;
  let fixture: ComponentFixture<SouthernL8Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SouthernL8Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
