import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Tarlac5Page } from './tarlac5.page';

describe('Tarlac5Page', () => {
  let component: Tarlac5Page;
  let fixture: ComponentFixture<Tarlac5Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Tarlac5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
