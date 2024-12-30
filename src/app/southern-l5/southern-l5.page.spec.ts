import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SouthernL5Page } from './southern-l5.page';

describe('SouthernL5Page', () => {
  let component: SouthernL5Page;
  let fixture: ComponentFixture<SouthernL5Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SouthernL5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
