import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NorthernS6Page } from './northern-s6.page';

describe('NorthernS6Page', () => {
  let component: NorthernS6Page;
  let fixture: ComponentFixture<NorthernS6Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NorthernS6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
