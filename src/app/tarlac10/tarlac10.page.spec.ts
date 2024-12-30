import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Tarlac10Page } from './tarlac10.page';

describe('Tarlac10Page', () => {
  let component: Tarlac10Page;
  let fixture: ComponentFixture<Tarlac10Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Tarlac10Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
