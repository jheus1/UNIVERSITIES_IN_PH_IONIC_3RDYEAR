import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SouthernL3Page } from './southern-l3.page';

describe('SouthernL3Page', () => {
  let component: SouthernL3Page;
  let fixture: ComponentFixture<SouthernL3Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SouthernL3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
