import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NorthernS9Page } from './northern-s9.page';

describe('NorthernS9Page', () => {
  let component: NorthernS9Page;
  let fixture: ComponentFixture<NorthernS9Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NorthernS9Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
