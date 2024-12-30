import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SouthernL6Page } from './southern-l6.page';

describe('SouthernL6Page', () => {
  let component: SouthernL6Page;
  let fixture: ComponentFixture<SouthernL6Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SouthernL6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
