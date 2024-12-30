import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Cebu7Page } from './cebu7.page';

describe('Cebu7Page', () => {
  let component: Cebu7Page;
  let fixture: ComponentFixture<Cebu7Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Cebu7Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
