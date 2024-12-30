import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Tarlac2Page } from './tarlac2.page';

describe('Tarlac2Page', () => {
  let component: Tarlac2Page;
  let fixture: ComponentFixture<Tarlac2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Tarlac2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
