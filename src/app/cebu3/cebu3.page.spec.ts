import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Cebu3Page } from './cebu3.page';

describe('Cebu3Page', () => {
  let component: Cebu3Page;
  let fixture: ComponentFixture<Cebu3Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Cebu3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
