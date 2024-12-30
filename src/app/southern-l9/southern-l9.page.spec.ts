import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SouthernL9Page } from './southern-l9.page';

describe('SouthernL9Page', () => {
  let component: SouthernL9Page;
  let fixture: ComponentFixture<SouthernL9Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SouthernL9Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
