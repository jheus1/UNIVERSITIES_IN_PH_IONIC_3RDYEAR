import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Tarlac7Page } from './tarlac7.page';

describe('Tarlac7Page', () => {
  let component: Tarlac7Page;
  let fixture: ComponentFixture<Tarlac7Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Tarlac7Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
