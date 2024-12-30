import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Cebu9Page } from './cebu9.page';

describe('Cebu9Page', () => {
  let component: Cebu9Page;
  let fixture: ComponentFixture<Cebu9Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Cebu9Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
