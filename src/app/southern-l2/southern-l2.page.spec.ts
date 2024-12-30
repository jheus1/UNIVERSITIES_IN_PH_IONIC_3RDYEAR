import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SouthernL2Page } from './southern-l2.page';

describe('SouthernL2Page', () => {
  let component: SouthernL2Page;
  let fixture: ComponentFixture<SouthernL2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SouthernL2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
