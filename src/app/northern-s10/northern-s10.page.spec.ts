import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NorthernS10Page } from './northern-s10.page';

describe('NorthernS10Page', () => {
  let component: NorthernS10Page;
  let fixture: ComponentFixture<NorthernS10Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NorthernS10Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
