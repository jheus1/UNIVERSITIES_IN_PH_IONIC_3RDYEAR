import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NorthernS4Page } from './northern-s4.page';

describe('NorthernS4Page', () => {
  let component: NorthernS4Page;
  let fixture: ComponentFixture<NorthernS4Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NorthernS4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
