import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NorthernS7Page } from './northern-s7.page';

describe('NorthernS7Page', () => {
  let component: NorthernS7Page;
  let fixture: ComponentFixture<NorthernS7Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NorthernS7Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
