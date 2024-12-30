import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Batangas7Page } from './batangas7.page';

describe('Batangas7Page', () => {
  let component: Batangas7Page;
  let fixture: ComponentFixture<Batangas7Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Batangas7Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
