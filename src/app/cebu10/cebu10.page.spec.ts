import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Cebu10Page } from './cebu10.page';

describe('Cebu10Page', () => {
  let component: Cebu10Page;
  let fixture: ComponentFixture<Cebu10Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Cebu10Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
