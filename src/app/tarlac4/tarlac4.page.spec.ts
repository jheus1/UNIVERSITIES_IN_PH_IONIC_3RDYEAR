import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Tarlac4Page } from './tarlac4.page';

describe('Tarlac4Page', () => {
  let component: Tarlac4Page;
  let fixture: ComponentFixture<Tarlac4Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Tarlac4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
