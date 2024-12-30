import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Tarlac9Page } from './tarlac9.page';

describe('Tarlac9Page', () => {
  let component: Tarlac9Page;
  let fixture: ComponentFixture<Tarlac9Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Tarlac9Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
