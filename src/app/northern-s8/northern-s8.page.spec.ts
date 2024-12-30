import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NorthernS8Page } from './northern-s8.page';

describe('NorthernS8Page', () => {
  let component: NorthernS8Page;
  let fixture: ComponentFixture<NorthernS8Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NorthernS8Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
