import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SouthernL1Page } from './southern-l1.page';

describe('SouthernL1Page', () => {
  let component: SouthernL1Page;
  let fixture: ComponentFixture<SouthernL1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SouthernL1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
