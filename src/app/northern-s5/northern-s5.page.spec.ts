import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NorthernS5Page } from './northern-s5.page';

describe('NorthernS5Page', () => {
  let component: NorthernS5Page;
  let fixture: ComponentFixture<NorthernS5Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NorthernS5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
