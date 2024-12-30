import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NorthernS2Page } from './northern-s2.page';

describe('NorthernS2Page', () => {
  let component: NorthernS2Page;
  let fixture: ComponentFixture<NorthernS2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NorthernS2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
