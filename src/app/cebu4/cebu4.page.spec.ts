import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Cebu4Page } from './cebu4.page';

describe('Cebu4Page', () => {
  let component: Cebu4Page;
  let fixture: ComponentFixture<Cebu4Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Cebu4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
